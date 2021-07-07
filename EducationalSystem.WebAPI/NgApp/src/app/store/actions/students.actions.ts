import { createAction, props } from '@ngrx/store';
import { IPerson } from '../../models/person';
import { ApiError } from '../interfaces/api.interface';

export enum StudentsActions {
    LoadStudents = '[Students] Load Students'
}

export const loadStudents = createAction(
    StudentsActions.LoadStudents
);

export const loadStudentsSuccess = createAction(
    StudentsActions.LoadStudents,
    props<{ students: IPerson[] }>()
);

export const loadStudentsFailure = createAction(
    StudentsActions.LoadStudents,
    props<{ error: ApiError }>()
);
