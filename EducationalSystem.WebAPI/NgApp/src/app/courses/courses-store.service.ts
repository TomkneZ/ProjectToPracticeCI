import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { CoursesService } from './courses.service';
import { ICourse } from '../models/course';
import { ActivatedRoute } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Injectable({ providedIn: 'root' })
export class CoursesStoreService {
    private _courses = new BehaviorSubject<ICourse[]>([]);
    public courses$ = this._courses.asObservable();
    public professorId: number;

    public constructor(private coursesService: CoursesService, private activateRoute: ActivatedRoute, private logger: NGXLogger) {
        activateRoute.queryParams.subscribe(
            (queryParam: any) => {
                this.professorId = queryParam['professorId'];
            }
        );
        this.fetchAll(this.professorId);
    }

    get courses(): ICourse[] {
        return this._courses.getValue();
    }

    set courses(val: ICourse[]) {
        this._courses.next(val);
    }

    public async addCourse(course: ICourse) {
        try {
            this.courses = [
                ...this.courses,
                { ...course }
            ];
            await this.coursesService.addCourse(course).toPromise();
        } catch (e) {
            this.removeCourse(course);
            this.logger.error(`Error while adding course ${e.message}`);
        }
    }

    private removeCourse(course: ICourse) {
        this.courses = this.courses.filter(c => c.name !== course.name && c.uniqueCode !== course.uniqueCode);
    }

    private async fetchAll(professorId: number) {
        try {
            this.courses = await this.coursesService.getProfessorCourses(professorId).toPromise();
        } catch (e) {
            this.logger.error(`Error while getting professor's courses ${e.message}`);
        }
    }
}
