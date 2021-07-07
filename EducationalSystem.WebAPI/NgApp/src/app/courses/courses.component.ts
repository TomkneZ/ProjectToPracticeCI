import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICourse } from '../models/course';
import { CoursesService } from './courses.service';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import * as CoursesActions from '../store/actions/courses.actions';
import * as CoursesSelectors from '../store/selectors/courses.selectors';
import { CoursesPartialState } from '../store/state/courses.state';

@Component({
    selector: 'courses-app',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    providers: [
        CoursesService
    ]
})

export class CoursesComponent implements OnInit {
    public form: FormGroup;
    public notCreated = true;
    public professorId: number;
    public courses = this.store.pipe(select(CoursesSelectors.getCourses));
    public displayedColumns: string[] = ['name', 'uniqueCode'];

    public constructor(private coursesService: CoursesService, private activateRoute: ActivatedRoute,
                       private store: Store<CoursesPartialState>) {
        this.form = new FormGroup({
            'name': new FormControl('', Validators.required),
            'uniqueCode': new FormControl('', Validators.pattern('[0-9]{3}'))
        });
        activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.professorId = queryParam['professorId'];
            }
        );
    }

    public ngOnInit(): void {
        this.store.dispatch(CoursesActions.loadCourses({ professorId: this.professorId }));
    }

    public async addCourse(): Promise<void> {
        if (!this.form.invalid) {
            const course: ICourse = {
                name: this.form.controls['name'].value,
                uniqueCode: this.form.controls['uniqueCode'].value,
                professorId: this.professorId
            };
            await this.coursesService.addCourse(course).toPromise();
            this.notCreated = false;
        }
    }
}
