import * as Actions from './courses.actions';
import { mockCourses } from '../../mocks/courses.mock';

describe('Courses store actions', () => {
    it('should create a loadCourses action with professorId props', () => {
        const id = 9;
        const action = Actions.loadCourses({ professorId: id });
        expect({ ...action }).toEqual({
            type: Actions.CoursesActions.LoadCourses,
            professorId: id
        });
    });

    it('should create a loadCoursesSucess action with props of loaded courses', () => {
        const action = Actions.loadCoursesSuccess({ courses: mockCourses });
        expect({ ...action }).toEqual({
            type: Actions.CoursesActions.LoadCourses,
            courses: mockCourses
        });
    });

    it('should create a loadCoursesFailure action with props of ApiError', () => {
        const apiError = {
            message: 'error!'
        };
        const action = Actions.loadCoursesFailure({ error: apiError });
        expect({ ...action }).toEqual({
            type: Actions.CoursesActions.LoadCourses,
            error: apiError
        });
    });
});
