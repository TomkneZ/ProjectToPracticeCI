import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'errors-app',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss']
})

export class ErrorsComponent {
    message: string;

    public constructor(private activateRoute: ActivatedRoute) {
        activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.message = queryParam['message'];
            }
        );
    }
}
