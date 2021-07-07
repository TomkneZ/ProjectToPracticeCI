import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
    providedIn: 'root'
})

export class LoggingService {
    public constructor(private logger: NGXLogger) { }

    logError(message: string) {
        this.logger.error(`${message}`);
    }
}
