import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { StudentToCourseComponent } from './student-to-course.component';
import { CoursesService } from '../courses/courses.service';
import { StudentsService } from '../students/students.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AppModule } from '../app.module';
import { mockStudents } from '../mocks/students.mock';
import { mockCourses } from '../mocks/courses.mock';

describe('StudentToCourseComponent', () => {
    let component: StudentToCourseComponent;
    let fixture: ComponentFixture<StudentToCourseComponent>;
    let template: DebugElement;
    let templateHtmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StudentToCourseComponent);
        component = fixture.componentInstance;
        template = fixture.debugElement;
        templateHtmlElement = template.nativeElement;
    });

    it('should have a Component', () => {
        expect(component).toBeTruthy();
    });

    it('should have a form to add new student to course', () => {
        expect(templateHtmlElement.innerHTML).toContain('form');
    });

    it('should display a button to call addStudentToCourse function', () => {
        expect(templateHtmlElement.innerHTML).toContain('button');
        expect(templateHtmlElement.innerText).toContain('Add');
    });

    it('should have a course select', () => {
        const courseSelect = fixture.debugElement.query(By.css('.course')).nativeElement;
        expect(templateHtmlElement.contains(courseSelect)).toBeTruthy();
    });

    it('should have a student select', () => {
        const studentSelect = fixture.debugElement.query(By.css('.student')).nativeElement;
        expect(templateHtmlElement.contains(studentSelect)).toBeTruthy();
    });

    describe('Students', () => {
        let studentsService: StudentsService;

        beforeEach(() => {
            studentsService = fixture.debugElement.injector.get(StudentsService);
            spyOn(studentsService, 'getActiveStudents')
                .and.returnValue(of(mockStudents));
        });

        it('should not be loaded before OnInit', () => {
            expect(component.students).toBeUndefined('Students should not be loaded before component initializaton');
        });

        it('should be loaded after OnInit', () => {
            fixture.detectChanges();
            expect(component.students).toBeDefined('Students should be loaded after component initialization');
        });
    });

    describe('Courses', () => {
        let coursesService: CoursesService;

        beforeEach(() => {
            coursesService = fixture.debugElement.injector.get(CoursesService);
            spyOn(coursesService, 'getActiveCourses')
                .and.returnValue(of(mockCourses));
        });

        it('should not be loaded before OnInit', () => {
            expect(component.courses).toBeUndefined('Courses should not be loaded before component initializaton');
        });

        it('should be loaded after OnInit', () => {
            fixture.detectChanges();
            expect(component.courses).toBeDefined('Courses should be loaded after component initialization');
        });
    });
});
