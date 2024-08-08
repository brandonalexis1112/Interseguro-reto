class ResponseHandler {
    static success(res, data) {
      return res.status(200).json(data);
    }
  
    static error(res, message, status = 400) {
      return res.status(status).json({ error: message });
    }
  }
  
  module.exports = ResponseHandler;
  