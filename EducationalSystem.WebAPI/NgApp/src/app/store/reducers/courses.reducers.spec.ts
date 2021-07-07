import * as fromReducers from './courses.reducers';
import * as fromActions from '../actions/courses.actions';
import * as fromState from '../state/courses.state';
import { mockCourses } from '../../mocks/courses.mock';

describe('Courses store reducers', () => {
    it('should return the default state', () => {
        const { initialCoursesState } = fromState;
        const state = fromReducers.reducer(undefined, { type: null });
        expect(state).toBe(initialCoursesState);
    });

    it('should return loaded courses', () => {
        const { initialCoursesState } = fromState;
        const action = fromActions.loadCoursesSuccess({ courses: mockCourses });
        const state = fromReducers.reducer(initialCoursesState, action);

        expect(state.courses).toEqual(mockCourses);
    });
});
