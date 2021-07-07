import { Component, OnInit } from '@angular/core';
import { ProfessorsService } from '../professors.service';
import { IPerson } from '../../models/person';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Subscription } from 'rxjs';

@Component({
    selector: 'professor-info-app',
    templateUrl: './professor-info.component.html',
    providers: [
        ProfessorsService
    ]
})

export class ProfessorInfoComponent implements OnInit {
    public professor: IPerson;
    public professorId: number;
    private error: string;
    private subscription: Subscription;

    public constructor(private professorsService: ProfessorsService, private activateRoute: ActivatedRoute, private logger: NGXLogger) {
        activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.professorId = queryParam.id;
            }
        );
    }

    public ngOnInit(): void {
        this.loadProfessors();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private loadProfessors(): void {
        this.subscription =
            this.professorsService.getProfessor(this.professorId)
                .subscribe(
                    (data: IPerson) => this.professor = data,
                    error => { this.error = error.message; this.logger.error(`Error while getting professor's info ${this.error}`); }
                );
    }
}
