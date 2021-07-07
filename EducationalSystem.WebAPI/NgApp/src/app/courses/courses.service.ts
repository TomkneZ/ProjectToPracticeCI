import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from '../models/course';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoursesService {
    private getProfessorCoursesUrl = 'Professors/GetProfessorActiveCourses/';
    private getActiveCoursesUrl = 'Courses/GetActiveCourses/';
    private addCourseUrl = 'Courses/AddCourse';

    public constructor(private http: HttpClient) { }

    public getActiveCourses(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(`${environment.apiUrl}${this.getActiveCoursesUrl}`);
    }

    public getProfessorCourses(id: number): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(`${environment.apiUrl}${this.getProfessorCoursesUrl}${id}`);
    }

    public addCourse(course: ICourse): Observable<ICourse> {
        const body = {
            Name: course.name,
            UniqueCode: course.uniqueCode,
            ProfessorId: course.professorId,
            IsActive: true
        };
        return this.http.post<ICourse>(`${environment.apiUrl}${this.addCourseUrl}`, body);
    }
}
