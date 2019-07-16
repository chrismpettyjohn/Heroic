"use strict";
exports.__esModule = true;
var Winston = require("winston");
var Logger = Winston.createLogger({
    level: 'info',
    format: Winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new Winston.transports.File({ filename: 'error.log', level: 'error' }),
        new Winston.transports.File({ filename: 'combined.log' })
    ]
});
if (process.env.NODE_ENV !== 'production') {
    Logger.add(new Winston.transports.Console({
        format: Winston.format.simple()
    }));
}
exports["default"] = Logger;
