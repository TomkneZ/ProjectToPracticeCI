import * as fromReducers from './students.reducers';
import * as fromActions from '../actions/students.actions';
import * as fromState from '../state/students.state';

import { mockStudents } from '../../mocks/students.mock';

describe('Students store reducers', () => {
    it('should return the default state', () => {
        const { initialStudentsState } = fromState;
        const state = fromReducers.reducer(undefined, { type: null });
        expect(state).toBe(initialStudentsState);
    });

    it('should return loaded students', () => {
        const { initialStudentsState } = fromState;
        const action = fromActions.loadStudentsSuccess({ students: mockStudents });
        const state = fromReducers.reducer(initialStudentsState, action);

        expect(state.students).toEqual(mockStudents);
    });
});
