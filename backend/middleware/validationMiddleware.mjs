export const validateDashboardParams = (req, res, next) => {
  const { limit, offset, month } = req.query;

  if (limit && isNaN(parseInt(limit, 10))) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid limit parameter' });
  }
  if (offset && isNaN(parseInt(offset, 10))) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid offset parameter' });
  }
  if (month && (isNaN(parseInt(month, 10)) || month < 1 || month > 12)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid month parameter' });
  }

  next();
};
