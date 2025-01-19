// Path: /server/controllers/dashboardController.mjs

import { holiday, reminder, birthday } from '../models/Dashboard.mjs';
import { logger } from '../utils/logger.mjs';

export const getDashboardData = async (req, res) => {
  try {
    const birthdays = await birthday.findAll({
      attributes: ['empname', 'birth_date', 'emp_des'],
    });

    const holidays = await holiday.findAll({
      attributes: ['holiday_name', 'holiday_date'],
    });

    const reminders = await reminder.findAll({
      attributes: ['reminder', 'remtype'],
    });

    res.status(200).json({
      success: true,
      data: {
        birthdays,
        holidays,
        reminders,
      },
    });
  } catch (error) {
    logger(`Error fetching dashboard data: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Unable to fetch dashboard data',
      error: error.message,
    });
  }
};
