import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { TestBed, async } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { mockCourses } from '../../mocks/courses.mock';

import { CoursesEffects } from './courses.effects';
import * as fromActions from '../actions/courses.actions';
import { CoursesService } from '../../courses/courses.service';

describe('Courses store effects', () => {
    let actions$: Observable<Action>;
    let effects: CoursesEffects;
    let coursesService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                CoursesEffects,
                provideMockStore(),
                provideMockActions(() => actions$),
                {
                    provide: CoursesService,
                    useValue: jasmine.createSpyObj('CoursesService', ['getProfessorCourses'])
                }
            ],
        });

        effects = TestBed.get<CoursesEffects>(CoursesEffects);
        coursesService = TestBed.get<CoursesService>(CoursesService);
    }));

    it('should dispatch loadCoursesSuccess action when loadCourses action is dispatched', () => {
        coursesService.getProfessorCourses.and.returnValue(of(mockCourses));
        actions$ = of({ type: fromActions.CoursesActions.LoadCourses });

        effects.loadCourses$.subscribe(action => {
            expect({ ...action }).toEqual({
                type: fromActions.CoursesActions.LoadCourses,
                courses: mockCourses
            });
        });
    });
});
