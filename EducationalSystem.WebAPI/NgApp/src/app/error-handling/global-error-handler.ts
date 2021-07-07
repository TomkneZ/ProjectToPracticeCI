import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './services/logging.service';
import { ErrorService } from './services/error.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private injector: Injector, private router: Router, private zone: NgZone) { }
    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        let message;

        if (error instanceof HttpErrorResponse) {
            message = errorService.getServerErrorMessage(error);
            this.zone.run(() =>
            this.router.navigate(
                ['/errors'],
                {
                    queryParams: {
                        'message': `type ${message}`
                    }
                }));
        } else {
            message = errorService.getClientErrorMessage(error);
            this.zone.run(() =>
            this.router.navigate(
                ['/errors'],
                {
                    queryParams: {
                        'message': `type ${message}`
                    }
                }));
        }
        logger.logError(message);
    }
}
