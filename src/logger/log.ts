import consoleLogger = require('./console')
import { LOG_LEVELS, LOG_LEVEL_INDEX } from '../utility/enums'


// TODO add service name, node and ip
const logger = (level: LOG_LEVEL_INDEX, date: String, ...msg: any[]) => {
    if (process.env.LOG_CONSOLE_LEVEL || false) {
        if (process.env.LOG_CONSOLE_LEVEL || false) {
            const selectedLevel: LOG_LEVELS = (<any>LOG_LEVELS)[process.env.LOG_CONSOLE_LEVEL.toUpperCase()];
            if (level <= selectedLevel) {
                consoleLogger.log(`${date} [${level}]`, ...msg)
            }
        }
    }
}

export = {
    emerg: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.EMERGENCY, new Date().toString(), ...msg)
    },
    alert: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.ALERT, new Date().toString(), ...msg)
    },
    crit: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.CRITICAL, new Date().toString(), ...msg)
    },
    err: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.ERROR, new Date().toString(), ...msg)
    },
    warn: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.WARNING, new Date().toString(), ...msg)
    },
    not: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.NOTICE, new Date().toString(), ...msg)
    },
    info: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.INFO, new Date().toString(), ...msg)
    },
    debug: (...msg: any[]) => {
        logger(LOG_LEVEL_INDEX.DEBUG, new Date().toString(), ...msg)
    },
}
