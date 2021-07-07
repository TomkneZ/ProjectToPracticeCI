import { CoursesService } from './courses.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { mockCourses, mockCourse } from '../mocks/courses.mock';

describe('CoursesService', () => {
    let httpTestingController: HttpTestingController;
    let coursesService: CoursesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CoursesService]
        });

        coursesService = TestBed.get(CoursesService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('getActiveCourses method should return active courses', () => {
        const getActiveCoursesUrl = 'Courses/GetActiveCourses/';

        coursesService.getActiveCourses().subscribe(response => expect(response).toBe(mockCourses));
        const req = httpTestingController.expectOne(`${environment.apiUrl}${getActiveCoursesUrl}`);
        expect(req.request.method).toBe('GET');

        req.flush(mockCourses);
    });

    it('getProfessorCourses method should return courses of a specified professor', () => {
        const getProfessorCoursesUrl = 'Professors/GetProfessorActiveCourses/';
        const professorId = 9;

        coursesService.getProfessorCourses(professorId).subscribe(response => expect(response).toBe(mockCourses));
        const request = httpTestingController.expectOne(`${environment.apiUrl}${getProfessorCoursesUrl}${professorId}`);
        expect(request.request.method).toBe('GET');

        request.flush(mockCourses);
    });

    it('addCourses method should return course which was added', () => {
        const addCourseUrl = 'Courses/AddCourse';

        coursesService.addCourse(mockCourse).subscribe(response => expect(response).toBe(mockCourse));
        const request = httpTestingController.expectOne(`${environment.apiUrl}${addCourseUrl}`);
        expect(request.request.method).toBe('POST');

        request.flush(mockCourse);
    });

    afterEach(() => httpTestingController.verify());
});
