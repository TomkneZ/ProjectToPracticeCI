import { ProfessorsService } from './professors.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { mockProfessors, mockProfessor } from '../mocks/professors.mock';

describe('ProfessorsService', () => {
    let httpTestingController: HttpTestingController;
    let professorsService: ProfessorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProfessorsService]
        });

        professorsService = TestBed.get(ProfessorsService);
        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('getActiveProfessors method should return active professors', () => {
        const getActiveProfessorsUrl = 'Professors/GetActiveProfessors';

        professorsService.getActiveProfessors().subscribe(response => expect(response).toBe(mockProfessors));
        const req = httpTestingController.expectOne(`${environment.apiUrl}${getActiveProfessorsUrl}`);
        expect(req.request.method).toBe('GET');

        req.flush(mockProfessors);
    });

    it('getProfessor method should return professor', () => {
        const getProfessorUrl = 'Professors/GetProfessor/';
        const professorId = 9;

        professorsService.getProfessor(professorId).subscribe(response => expect(response).toBe(mockProfessor));
        const request = httpTestingController.expectOne(`${environment.apiUrl}${getProfessorUrl}${professorId}`);
        expect(request.request.method).toBe('GET');

        request.flush(mockProfessor);
    });

    afterEach(() => httpTestingController.verify());
});
