import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
    production: false,
    apiUrl: 'https://localhost:44370/api/',
    hostUrl: 'https://localhost:44370/',
    logging: {
        level: NgxLoggerLevel.DEBUG,
    }
};
