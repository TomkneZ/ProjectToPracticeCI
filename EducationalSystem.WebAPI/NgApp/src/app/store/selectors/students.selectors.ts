import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentsState, STUDENTS_FEATURE_KEY } from '../state/students.state';

export const getStudentsState = createFeatureSelector<StudentsState>(STUDENTS_FEATURE_KEY);

export const getStudents = createSelector(getStudentsState, state => state.students);

export const getStudentsLoadError = createSelector(getStudentsState, state => state.studentsLoadError);
