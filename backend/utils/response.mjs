/**
 * Utility to send consistent API responses
 *
 * @param {object} res - Express response object
 * @param {number} status - HTTP status code
 * @param {boolean} success - Indicates success or failure
 * @param {object} [data=null] - Response data (if any)
 * @param {string} [message=null] - Optional message
 */
export const sendResponse = (
  res,
  status,
  success,
  data = null,
  message = null,
) => {
  res.status(status).json({
    success,
    message,
    data,
  });
};
