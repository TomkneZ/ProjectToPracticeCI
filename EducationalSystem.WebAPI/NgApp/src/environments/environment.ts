import { NgxLoggerLevel } from 'ngx-logger';

export const environment = {
    production: false,
    apiUrl: 'https://educationalsystemapp.azurewebsites.net/api/',
    hostUrl: 'https://educationalsystemapp.azurewebsites.net/',
    logging: {
        level: NgxLoggerLevel.DEBUG,
    }
};
