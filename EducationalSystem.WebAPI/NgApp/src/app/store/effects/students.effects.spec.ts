import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { mockStudents } from '../../mocks/students.mock';

import { StudentsEffects } from './students.effects';
import * as fromActions from '../actions/students.actions';
import { StudentsService } from '../../students/students.service';

describe('Students store effects', () => {
    let actions$: Observable<Action>;
    let effects: StudentsEffects;
    let studentsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                StudentsEffects,
                provideMockStore(),
                provideMockActions(() => actions$),
                {
                    provide: StudentsService,
                    useValue: jasmine.createSpyObj('StudentsService', ['getActiveStudents'])
                }
            ],
        });

        effects = TestBed.get<StudentsEffects>(StudentsEffects);
        studentsService = TestBed.get<StudentsService>(StudentsService);
    }));

    it('should dispatch loadStudentsSuccess action when loadStudents action is dispatched', () => {
        studentsService.getActiveStudents.and.returnValue(of(mockStudents));
        actions$ = of({ type: fromActions.StudentsActions.LoadStudents });

        effects.loadStudents$.subscribe(action => {
            expect({ ...action }).toEqual({
                type: fromActions.StudentsActions.LoadStudents,
                students: mockStudents
            });
        });
    });
});
