import { createReducer, on, Action } from '@ngrx/store';
import * as CoursesActions from '../actions/courses.actions';
import { initialCoursesState, CoursesState } from '../state/courses.state';

const coursesReducer = createReducer(
    initialCoursesState,
    on(CoursesActions.loadCoursesSuccess, (state, { courses }) => ({ ...state, courses })),
    on(CoursesActions.loadCoursesFailure, (state, { error }) => ({ ...state, coursesLoadError: error })),
);

export function reducer(state: CoursesState | undefined, action: Action) {
    return coursesReducer(state, action);
}
