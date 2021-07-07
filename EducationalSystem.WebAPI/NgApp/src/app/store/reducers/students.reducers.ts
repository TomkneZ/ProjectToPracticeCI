import { createReducer, on, Action} from '@ngrx/store';
import * as StudentsActions from '../actions/students.actions';
import { initialStudentsState, StudentsState } from '../state/students.state';

const studentsReducer = createReducer(
    initialStudentsState,
    on(StudentsActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
    on(StudentsActions.loadStudentsFailure, (state, { error }) => ({ ...state, studentsLoadError: error })),
);

export function reducer(state: StudentsState | undefined, action: Action) {
    return studentsReducer(state, action);
}
