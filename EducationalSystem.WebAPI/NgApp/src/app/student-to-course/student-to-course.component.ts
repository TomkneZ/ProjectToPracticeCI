import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses/courses.service';
import { StudentsService } from '../students/students.service';
import { IPerson } from '../models/person';
import { ICourse } from '../models/course';
import { Subscription } from 'rxjs';

@Component({
    selector: 'professors-app',
    templateUrl: './student-to-course.component.html',
    styleUrls: ['./student-to-course.component.scss'],
    providers: [
        CoursesService,
        StudentsService
    ]
})

export class StudentToCourseComponent implements OnInit {
    public selectedCourse: ICourse;
    public courses: ICourse[];
    public students: IPerson[];
    public selectedStudent: IPerson;
    private subscription: Subscription = new Subscription();
    public notCreated = true;

    public constructor(private coursesService: CoursesService, private studentsService: StudentsService) { }

    public ngOnInit(): void {
        this.loadCourses();
        this.loadStudents();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public loadCourses(): void {
        this.subscription.add(
            this.coursesService.getActiveCourses()
                .subscribe(
                    (data: ICourse[]) => this.courses = data
                )
        );
    }

    public loadStudents(): void {
        this.subscription.add(
            this.studentsService.getActiveStudents()
                .subscribe(
                    (data: IPerson[]) => this.students = data
                )
        );
    }

    public addStudentToCourse(): void {
        this.subscription.add(
            this.studentsService.addStudentToCourse(this.selectedStudent.id, this.selectedCourse.uniqueCode)
                .subscribe(() => this.notCreated = false)
        );
    }
}
