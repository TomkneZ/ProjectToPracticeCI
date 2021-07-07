import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState, COURSES_FEATURE_KEY } from '../state/courses.state';

export const getCoursesState = createFeatureSelector<CoursesState>(COURSES_FEATURE_KEY);

export const getCourses = createSelector(getCoursesState, state => state.courses);

export const getCoursesLoadError = createSelector(getCoursesState, state => state.coursesLoadError);
