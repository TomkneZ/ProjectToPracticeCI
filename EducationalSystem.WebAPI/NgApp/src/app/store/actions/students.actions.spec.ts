import * as Actions from './students.actions';
import { mockStudents } from '../../mocks/students.mock';

describe('Students store actions', () => {
    it('should create a loadStudents action with professorId props', () => {
        const action = Actions.loadStudents();
        expect(action.type).toEqual(Actions.StudentsActions.LoadStudents);
    });

    it('should create a loadStudentsSucess action with props of loaded students', () => {
        const action = Actions.loadStudentsSuccess({ students: mockStudents });
        expect({ ...action }).toEqual({
            type: Actions.StudentsActions.LoadStudents,
            students: mockStudents
        });
    });

    it('should create a loadStudentsFailure action with props of ApiError', () => {
        const apiError = {
            message: 'error!'
        };
        const action = Actions.loadStudentsFailure({ error: apiError });
        expect({ ...action }).toEqual({
            type: Actions.StudentsActions.LoadStudents,
            error: apiError
        });
    });
});
