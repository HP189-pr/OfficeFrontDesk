import { promises as fs } from 'fs';
import path from 'path';

/**
 * Generate a clear and indented file structure while excluding "node_modules", ".git", and "backend" folders.
 *
 * @param {string} basePath - The base path of the project.
 * @param {string} outputFile - The name of the output file.
 */
async function generateStructure(basePath, outputFile) {
  try {
    const lines = [`${path.basename(basePath)}/`]; // Include root folder
    await writeDirectoryStructure(basePath, basePath, lines, 1);

    // Write to output file
    await fs.writeFile(outputFile, lines.join('\n'), 'utf-8');
    console.log(`File structure saved to ${outputFile}`);
  } catch (err) {
    console.error('Error generating structure:', err);
  }
}

/**
 * Recursively write directory structure to lines array with indentation.
 *
 * @param {string} basePath - The base path of the project.
 * @param {string} currentPath - The current directory being traversed.
 * @param {string[]} lines - The array of lines to write.
 * @param {number} level - The depth level for indentation.
 */
async function writeDirectoryStructure(basePath, currentPath, lines, level) {
  const entries = await fs.readdir(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    // Skip excluded directories
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'backend') {
      continue;
    }

    const fullPath = path.join(currentPath, entry.name);
    const relativePath = path.relative(basePath, fullPath);

    // Indent based on the depth level
    const indent = '  '.repeat(level);

    if (entry.isDirectory()) {
      lines.push(`${indent}${relativePath}/`); // Add directory
      await writeDirectoryStructure(basePath, fullPath, lines, level + 1); // Recurse into subdirectory
    } else {
      lines.push(`${indent}${entry.name}`); // Add file
    }
  }
}

// Run the script
const projectPath = 'g:/FrontDesk'; // Replace with your project root path
const outputFileName = 'structure.txt'; // Output file name

generateStructure(projectPath, outputFileName);
