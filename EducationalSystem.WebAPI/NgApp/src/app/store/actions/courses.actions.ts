import { createAction, props } from '@ngrx/store';
import { ICourse } from '../../models/course';
import { ApiError } from '../interfaces/api.interface';

export enum CoursesActions {
    LoadCourses = '[Courses] Load Courses'
}

export const loadCourses = createAction(
    CoursesActions.LoadCourses,
    props < { professorId: number }>()
);

export const loadCoursesSuccess = createAction(
    CoursesActions.LoadCourses,
    props<{ courses: ICourse[] }>()
);

export const loadCoursesFailure = createAction(
    CoursesActions.LoadCourses,
    props<{ error: ApiError }>()
);
