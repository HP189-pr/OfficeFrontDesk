import pkg from 'pg';
import { Document, Packer, Paragraph, Table, TableCell, TableRow } from 'docx';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pkg;

// PostgreSQL Database Configuration
const dbConfig = {
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
};

// Log the environment variables to verify
console.log('Database Configuration:', dbConfig);

// Tables to query
const tables = [
  'adminpanelaccess',
  'menus',
  'module_options',
  'modules',
  'user_rights',
  'useraccess',
  'userpermissions',
  'users',
];

// Query to get column details
const query = `
  SELECT 
    table_name, 
    column_name, 
    data_type 
  FROM 
    information_schema.columns 
  WHERE 
    table_name = ANY($1)
  ORDER BY table_name, ordinal_position;
`;

// Function to fetch column details from PostgreSQL
const fetchColumnDetails = async () => {
  const client = new Client(dbConfig);
  await client.connect();

  try {
    const res = await client.query(query, [tables]);
    return res.rows;
  } catch (err) {
    console.error('Error fetching column details:', err);
    return [];
  } finally {
    await client.end();
  }
};

// Function to generate Word document
const generateWordFile = async (columnDetails) => {
  const sections = [];
  let currentTable = null;

  columnDetails.forEach(({ table_name, column_name, data_type }) => {
    // If it's a new table, create a new heading and table
    if (table_name !== currentTable) {
      currentTable = table_name;

      sections.push({
        properties: {},
        children: [
          new Paragraph({
            text: `Table: ${table_name}`,
            heading: 'Heading2',
          }),
        ],
      });

      const tableRows = [
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph('Column Name')],
            }),
            new TableCell({
              children: [new Paragraph('Data Type')],
            }),
          ],
        }),
      ];

      // Add columns
      columnDetails
        .filter((row) => row.table_name === table_name)
        .forEach(({ column_name, data_type }) => {
          tableRows.push(
            new TableRow({
              children: [
                new TableCell({
                  children: [new Paragraph(column_name)],
                }),
                new TableCell({
                  children: [new Paragraph(data_type)],
                }),
              ],
            }),
          );
        });

      sections.push({
        properties: {},
        children: [
          new Table({
            rows: tableRows,
          }),
        ],
      });
    }
  });

  const doc = new Document({
    creator: "Your Name",
    title: "Table Columns",
    description: "A document containing table columns and their data types",
    sections: sections,
  });

  // Save the document
  const buffer = await Packer.toBuffer(doc);
  await fs.writeFile('table_columns.docx', buffer);
  console.log('Word document "table_columns.docx" generated successfully!');
};

// Main Function
const main = async () => {
  const columnDetails = await fetchColumnDetails();
  if (columnDetails.length > 0) {
    await generateWordFile(columnDetails);
  } else {
    console.error('No column details found or an error occurred.');
  }
};

main();