import * as selectors from './students.selectors';
import * as fromState from '../state/students.state';

import { mockStudents } from '../../mocks/students.mock';

const createStudentsState = (): fromState.StudentsState => ({
    students: mockStudents
});

const createState = (): fromState.StudentsPartialState => ({
    students: createStudentsState()
});

describe('Students store selectors', () => {
    it('getStudents', () => {
        const state = createState();
        expect(selectors.getStudents(state)).toBe(state.students.students);
    });
});
