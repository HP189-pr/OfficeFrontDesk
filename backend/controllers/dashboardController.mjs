import { birthday, holiday, reminder } from '../models/Dashboard.mjs';
import { sendResponse } from '../utils/response.mjs';
import { logger } from '../utils/logger.mjs';
import { sequelize } from '../db.mjs'; // Import sequelize here

export const getDashboardData = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = parseInt(req.query.offset, 10) || 0;
    const month = req.query.month || new Date().getMonth() + 1;

    const birthdays = await birthday.findAll({
      attributes: ['empname', 'birth_date', 'emp_des'],
      where: sequelize.where(
        sequelize.fn('MONTH', sequelize.col('birth_date')),
        month,
      ),
      limit,
      offset,
    });

    const holidays = await holiday.findAll({
      attributes: ['holiday_name', 'holiday_date'],
      limit,
      offset,
    });

    const reminders = await reminder.findAll({
      attributes: ['reminder', 'remtype'],
      limit,
      offset,
    });

    sendResponse(res, 200, true, { birthdays, holidays, reminders });
  } catch (error) {
    logger.error(`Error fetching dashboard data: ${error.message}`);
    sendResponse(res, 500, false, null, 'Unable to fetch dashboard data');
  }
};
