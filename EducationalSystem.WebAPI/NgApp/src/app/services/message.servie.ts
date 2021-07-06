import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class MessageService {
    private loginHubUrl = 'loginhub';
    private connection: signalR.HubConnection;
    public message = new Subject<string>();

    public async connect(access_token): Promise<any> {
        if (!this.connection) {
            this.connection = new signalR.HubConnectionBuilder()
                .withUrl(`${environment.hostUrl}${this.loginHubUrl}`, { accessTokenFactory: () => access_token })
                .build();

            this.connection.on('receive', data => {
                this.message.next(data);
            });

            return this.connection.start();
        }
    }

    public send() {
        this.connection.invoke('send');
    }

    public disconnect() {
        if (this.connection) {
            this.connection.stop();
            this.connection = null;
        }
    }
}
