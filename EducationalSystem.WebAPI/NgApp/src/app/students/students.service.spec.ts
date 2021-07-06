import { StudentsService } from './students.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { mockStudent, mockStudents } from '../mocks/students.mock';

describe('StudentsService', () => {
    let httpTestingController: HttpTestingController;
    let studentsService: StudentsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [StudentsService]
        });

        studentsService = TestBed.get(StudentsService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('getActiveStudents method should return active students', () => {
        const getActiveStudentsUrl = 'Students/GetActiveStudents';
        studentsService.getActiveStudents().subscribe(response => expect(response).toBe(mockStudents));
        const req = httpTestingController.expectOne(`${environment.apiUrl}${getActiveStudentsUrl}`);
        expect(req.request.method).toBe('GET');

        req.flush(mockStudents);
    });

    it('getSchoolActiveStudents method should return students of a specified school', () => {
        const getSchoolActvStudentsUrl = 'Students/GetSchoolActiveStudents/';
        const schoolId = 2;
        studentsService.getSchoolActiveStudents(schoolId).subscribe(response => expect(response).toBe(mockStudents));
        const request = httpTestingController.expectOne(`${environment.apiUrl}${getSchoolActvStudentsUrl}${schoolId}`);
        expect(request.request.method).toBe('GET');

        request.flush(mockStudents);
    });

    it('addStudent method should return student which was added', () => {
        const addStudentUrl = 'Students/AddStudent';
        const firstName = 'Darya';
        const lastName = 'Bondarik';
        const email = 'doraty@gmail.com';
        const phone = '+375296006010';
        const schoolId = 2;

        studentsService.addStudent(firstName, lastName, email, phone, schoolId).subscribe(response => expect(response).toBe(mockStudent));
        const request = httpTestingController.expectOne(`${environment.apiUrl}${addStudentUrl}`);
        expect(request.request.method).toBe('POST');

        request.flush(mockStudent);
    });

    afterEach(() => httpTestingController.verify());
});
