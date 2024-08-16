import { createLogger, format, transports } from 'winston';
import { StreamOptions } from 'morgan';

// Define the log format
const logFormat = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
);

// Create a Winston logger instance
const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    // Console transport for logging to the console
    new transports.Console({
      format: format.combine(
        format.colorize(), // Colorize the output
        logFormat
      )
    }),
    // File transport for logging to a file
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Log only errors
    new transports.File({ filename: 'logs/combined.log' }) // Log everything
  ]
});

// Stream function to use with morgan middleware for HTTP request logging
const stream: StreamOptions = {
  write: (message: string) => {
    logger.info(message.trim());
  }
};

// Export both the logger and the stream for morgan
export { logger, stream };