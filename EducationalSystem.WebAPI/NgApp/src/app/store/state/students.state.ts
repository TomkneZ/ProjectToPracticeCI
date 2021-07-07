import { IPerson } from '../../models/person';
import { ApiError } from '../interfaces/api.interface';

export const STUDENTS_FEATURE_KEY = 'students';

export interface StudentsPartialState {
    readonly [STUDENTS_FEATURE_KEY]: StudentsState;
}

export interface StudentsState {
    students: IPerson[];
    studentsLoadError?: ApiError;
}

export const initialStudentsState: StudentsState = {
    students: null,
    studentsLoadError: null
};
