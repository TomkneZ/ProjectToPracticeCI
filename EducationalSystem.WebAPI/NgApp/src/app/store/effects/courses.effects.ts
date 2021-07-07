import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, } from 'rxjs/operators';
import { CoursesService } from '../../courses/courses.service';
import * as CoursesActions from '../actions/courses.actions';

@Injectable()
export class CoursesEffects {
    loadCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.loadCourses),
        exhaustMap(action => this.coursesService.getProfessorCourses(action.professorId)
            .pipe(
                map(courses => CoursesActions.loadCoursesSuccess({ courses })),
                catchError(async (error) => CoursesActions.loadCoursesFailure({ error }))
            )
        )
    ));
    constructor(private coursesService: CoursesService, private actions$: Actions) { }
}
