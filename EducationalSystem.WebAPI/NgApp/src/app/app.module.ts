import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { LoggerModule } from 'ngx-logger';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule } from '@auth0/angular-jwt';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { ProfessorsComponent } from './professors/professors.component';
import { ProfessorInfoComponent } from './professors/professor-info/professor-info.component';
import { ProfessorTableElementComponent } from './professors/table-element/professor-table-element.component';
import { StudentsComponent } from './students/students.component';
import { StudentToCourseComponent } from './student-to-course/student-to-course.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorsComponent } from './error-handling/view/errors.component';
import { GlobalErrorHandler } from './error-handling/global-error-handler';

import { environment } from '../environments/environment';

import { TruncateTextPipe } from './pipes/TruncateTextPipe';
import { FullNameDirective } from './directives/full-name.directive';

import { StudentsEffects } from './store/effects/students.effects';
import { CoursesEffects } from './store/effects/courses.effects';
import { reducers } from './store/index';
import { LoginGuard } from './login/login.guard';
import { FeatureGuard } from './guards/can-load.guard';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'professors',
        component: ProfessorsComponent,
        children: [
            { path: 'students', component: StudentsComponent },
            { path: 'courses', component: CoursesComponent },
        ],
        canActivate: [LoginGuard],
        canActivateChild: [LoginGuard]
    },
    { path: 'professorinfo', component: ProfessorInfoComponent },
    { path: 'studenttocourse', component: StudentToCourseComponent, canActivate: [FeatureGuard], data: {feature: "no-auth"} },
    { path: 'errors', component: ErrorsComponent, pathMatch: 'full' }
];

import { FeatureFlagsService } from "./services/feature-flags.service";

export function featureFactory(featureFlagsService: FeatureFlagsService) {
    return () => featureFlagsService.load();
}

@NgModule({
    imports: [
        StorageServiceModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatInputModule,
        MatSnackBarModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        MatCheckboxModule,
        MatIconModule,
        LoggerModule.forRoot(environment.logging),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([StudentsEffects, CoursesEffects]),
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return '';
                }
            }
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        ProfessorsComponent,
        ProfessorInfoComponent,
        ProfessorTableElementComponent,
        StudentsComponent,
        StudentToCourseComponent,
        CoursesComponent,
        TruncateTextPipe,
        FullNameDirective
    ],
    providers: [
        LoginGuard,
        FeatureGuard,
        { provide: ErrorHandler, useClass: GlobalErrorHandler },
        {
            provide: APP_INITIALIZER,
            useFactory: featureFactory,
            deps: [FeatureFlagsService],
            multi: true
        },
        FeatureFlagsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
