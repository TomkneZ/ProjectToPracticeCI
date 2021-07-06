import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CoursesComponent } from './courses.component';
import { AppModule } from '../app.module';

describe('CoursesComponent', () => {
    let component: CoursesComponent;
    let fixture: ComponentFixture<CoursesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesComponent);
        component = fixture.componentInstance;
    });

    it('should have a Component', () => {
        expect(component).toBeTruthy();
    });

    it('flag notCreated should be true before course is not created', () => {
        expect(component.notCreated).toBeTruthy();
    });

    it('should have addCourse function', () => {
        spyOn(component, 'addCourse').and.callThrough();
        component.addCourse();
        expect(component.addCourse).toHaveBeenCalled();
    });
});
