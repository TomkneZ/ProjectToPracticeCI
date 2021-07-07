import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StudentsService } from './students.service';
import { IStudentTableView } from './student.table.view';
import { ActivatedRoute } from '@angular/router';
import { IPerson } from '../models/person';
import { select, Store } from '@ngrx/store';
import * as StudentsActions from '../store/actions/students.actions';
import * as StudentsSelectors from '../store/selectors/students.selectors';
import { StudentsPartialState } from '../store/state/students.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'students-app',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        StudentsService
    ]
})

export class StudentsComponent implements OnInit {
    private schoolId: number;
    public displayedColumns: string[] = ['name', 'email', 'phone'];
    public show = false;
    public student: IPerson;
    public students = this.store.pipe(select(StudentsSelectors.getStudents));
    public form: FormGroup;

    public constructor(private studentsService: StudentsService, private activateRoute: ActivatedRoute,
                       private store: Store<StudentsPartialState>) {
        activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.schoolId = queryParam.schoolId;
            }
        );
        this.form = new FormGroup({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required),
            'phone': new FormControl('', Validators.pattern('[0-9]{9}')),
            'email': new FormControl('', Validators.email)
        });
    }

    public ngOnInit(): void {
        this.store.dispatch(StudentsActions.loadStudents());
    }

    public async addStudent(): Promise<void> {
        const firstName = this.form.controls['firstName'].value;
        const lastName = this.form.controls['lastName'].value;
        const phone = this.form.controls['phone'].value;
        const email = this.form.controls['email'].value;
        await this.studentsService.addStudent(firstName, lastName, email, phone, this.schoolId).toPromise();
    }

    public showFullName(row: IStudentTableView): void {
        const longNameLength = 15;
        if (row.name.length > longNameLength) {
            row.selected = (row.selected == null) ? true : !row.selected;
        }
    }
}
