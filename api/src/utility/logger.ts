import * as Winston from "winston";

const myFormat = Winston.format.printf(
	({ timestamp, level, message, meta }) => {
		return `${timestamp} ${level} - ${message}`;
	}
);

const consoleTransport = new Winston.transports.Console();

export default Winston.createLogger({
	level: "info",
	format: Winston.format.combine(
		Winston.format.timestamp({
			format: "YYYY-MM-DD HH:mm:ss"
		}),
		Winston.format.errors({ stack: true }),
		Winston.format.splat(),
		myFormat
	),
	transports: [consoleTransport]
});
