import log from '../logger/log'
import { DbConnection } from '../drivers/db/pool';


export const DbStart = async () => {
    log.info('DB start function called to start')
    return new Promise(async (resolve, reject) => {
        try {
            await DbConnection.connect()
            resolve()
        } catch (error) {

            log.err(error)
            reject(error)
        }
    })
}


export const HttpServer = async (app: any) => {
    log.info('Http Server function called to start')
    return new Promise(async (resolve, reject) => {
        try {
            const port = process.env.PORT || 80;
            const host = process.env.HOST || '0.0.0.0';
            await app.listen(port, host);
            log.info(`Http server started successfully and listen on ${host}:${port} .`)
            resolve();
        } catch (error) {
            log.err('Http server failed to start with following error', error)
            reject();
        }
    })
}
