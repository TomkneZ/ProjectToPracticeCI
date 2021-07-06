import * as selectors from './courses.selectors';
import * as fromState from '../state/courses.state';
import { mockCourses } from '../../mocks/courses.mock';

const createCoursesState = (): fromState.CoursesState => ({
    courses: mockCourses
});

const createState = (): fromState.CoursesPartialState => ({
    courses: createCoursesState()
});

describe('Courses store selectors', () => {
    it('getCourses', () => {
        const state = createState();
        expect(selectors.getCourses(state)).toBe(state.courses.courses);
    });
});
