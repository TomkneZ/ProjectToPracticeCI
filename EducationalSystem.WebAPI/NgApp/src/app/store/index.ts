import { ActionReducerMap } from '@ngrx/store';
import * as Students from './reducers/students.reducers';
import * as Courses from './reducers/courses.reducers';
import { StudentsState } from './state/students.state';
import { CoursesState } from './state/courses.state';

export interface State {
    students: StudentsState;
    courses: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
    students: Students.reducer,
    courses: Courses.reducer
};
