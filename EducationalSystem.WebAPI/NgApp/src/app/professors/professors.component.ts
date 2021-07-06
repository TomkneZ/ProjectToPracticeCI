import { Component, Inject, OnInit } from '@angular/core';
import { ProfessorsService } from './professors.service';
import { CoursesService } from '../courses/courses.service';
import { MessageService } from '../services/message.servie';
import { IPerson } from '../models/person';
import { ICourse } from '../models/course';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { SNACKBAR_DURATION } from '../app.constants';

@Component({
    selector: 'professors-app',
    templateUrl: './professors.component.html',
    styleUrls: ['./professors.component.scss'],
    providers: [
        ProfessorsService,
        CoursesService
    ]
})

export class ProfessorsComponent implements OnInit {
    public selectedProfessor: IPerson;
    public professors: IPerson[];
    public courses: ICourse[];
    public displayedColumns: string[] = ['name', 'uniqueCode'];
    private subscription: Subscription = new Subscription();
    public constructor(private professorsService: ProfessorsService, private coursesService: CoursesService,
                       private snackBar: MatSnackBar, private notification: MessageService,
                       @Inject(LOCAL_STORAGE) private storage: StorageService) {
    }

    public ngOnInit(): void {
        const access_token = this.storage.get('access_token');
        this.notification.connect(access_token);
        this.loadProfessors();
        this.subscription.add(
            this.notification.message.subscribe(msg => {
                this.snackBar.open(msg, 'OK', {
                    duration: SNACKBAR_DURATION
                });
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadProfessors(): void {
        this.subscription.add(
            this.professorsService.getActiveProfessors()
                .subscribe(
                    (data: IPerson[]) => this.professors = data
            )
        );
    }

    public onOptionsSelected(value: number): void {
        this.subscription.add(
            this.coursesService.getProfessorCourses(value)
                .subscribe(
                    (data: ICourse[]) => this.courses = data
            )
        );
    }
}
