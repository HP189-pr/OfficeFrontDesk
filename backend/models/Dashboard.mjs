import { DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';

// Birthday model
export const birthday = sequelize.define(
  'birthday',
  {
    birthdateid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    empname: { type: DataTypes.STRING, allowNull: false },
    birth_date: { type: DataTypes.DATE, allowNull: false },
    emp_des: { type: DataTypes.STRING },
    emp_insti: { type: DataTypes.STRING },
    emp_City: { type: DataTypes.STRING },
    emp_pin: { type: DataTypes.STRING },
    authsign: { type: DataTypes.STRING },
    auth_name: { type: DataTypes.STRING },
    auth_des: { type: DataTypes.STRING },
  },
  {
    tableName: 'birthday',
    timestamps: false,
  },
);

// Holiday model
export const holiday = sequelize.define(
  'holiday',
  {
    hdid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    holiday_name: { type: DataTypes.STRING, allowNull: false },
    holiday_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: 'holiday',
    timestamps: false,
  },
);

// Reminder model
export const reminder = sequelize.define(
  'reminder',
  {
    remid: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    reminder: { type: DataTypes.STRING, allowNull: false },
    remtype: { type: DataTypes.STRING },
  },
  {
    tableName: 'reminder',
    timestamps: false,
  },
);
