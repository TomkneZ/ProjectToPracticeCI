import { IPerson } from '../models/person';
export interface IStudentTableView extends IPerson {
    selected?: boolean;
}
