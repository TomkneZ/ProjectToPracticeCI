import { ICourse } from '../../models/course';
import { ApiError } from '../interfaces/api.interface';

export const COURSES_FEATURE_KEY = 'courses';

export interface CoursesPartialState {
    readonly [COURSES_FEATURE_KEY]: CoursesState;
}

export interface CoursesState {
    courses: ICourse[];
    coursesLoadError?: ApiError;
}

export const initialCoursesState: CoursesState = {
    courses: null,
    coursesLoadError: null
};

