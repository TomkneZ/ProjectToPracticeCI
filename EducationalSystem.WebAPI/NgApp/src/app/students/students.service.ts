import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IPerson } from '../models/person';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    private getSchoolActvStudentsUrl = 'Students/GetSchoolActiveStudents/';
    private getActiveStudentsUrl = 'Students/GetActiveStudents';
    private addStudentToCourseUrl = 'Courses/AddStudentToCourse/';
    private addStudentUrl = 'Students/AddStudent';

    public constructor(private http: HttpClient) { }

    public getSchoolActiveStudents(schoolId: number): Observable<IPerson[]> {
        return this.http.get<IPerson[]>(`${environment.apiUrl}${this.getSchoolActvStudentsUrl}${schoolId}`)
            .pipe(catchError(error => throwError(error)));
    }

    public getActiveStudents(): Observable<IPerson[]> {
        return this.http.get<IPerson[]>(`${environment.apiUrl}${this.getActiveStudentsUrl}`)
            .pipe(catchError(error => throwError(error)));
    }

    public addStudent(firstName: string, lastName: string, email: string, phone: string, schoolId: number): Observable<IPerson> {
        const body = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            SchoolId: schoolId,
            IsAccountActive: true
        };
        return this.http.post<IPerson>(`${environment.apiUrl}${this.addStudentUrl}`, body);
    }

    public addStudentToCourse(studentId: number, courseCode: number) {
        return this.http.post(`${environment.apiUrl}${this.addStudentToCourseUrl}${studentId}/${courseCode}`, null);
    }
}
