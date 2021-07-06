import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError,  } from 'rxjs/operators';
import { StudentsService } from '../../students/students.service';
import * as StudentsActions from '../actions/students.actions';

@Injectable()
export class StudentsEffects {
    loadStudents$ = createEffect(() => this.actions$.pipe(
        ofType(StudentsActions.loadStudents),
        mergeMap(() => this.studentsService.getActiveStudents()
            .pipe(
                map(students => StudentsActions.loadStudentsSuccess({ students })),
                catchError(async (error) => StudentsActions.loadStudentsFailure({ error }))
            ))
        )
    );

    constructor(private studentsService: StudentsService, private actions$: Actions) { }
}
