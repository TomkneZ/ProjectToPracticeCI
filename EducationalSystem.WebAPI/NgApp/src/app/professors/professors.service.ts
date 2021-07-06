import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IPerson } from '../models/person';

@Injectable({ providedIn: 'root' })
export class ProfessorsService {
    private getActiveProfessorsUrl = 'Professors/GetActiveProfessors';
    private getProfessorUrl = 'Professors/GetProfessor/';

    public constructor(private http: HttpClient) { }

    public getActiveProfessors(): Observable<IPerson[]> {
        return this.http.get<IPerson[]>(`${environment.apiUrl}${this.getActiveProfessorsUrl}`);
    }

    public getProfessor(professorId: number): Observable<IPerson> {
        return this.http.get<IPerson>(`${environment.apiUrl}${this.getProfessorUrl}${professorId}`);
    }
}
