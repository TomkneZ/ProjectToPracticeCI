(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tamarazabenko/Desktop/ProjectToPracticeCI/EducationalSystem.WebAPI/NgApp/src/main.ts */"zUnb");


/***/ }),

/***/ "1dOi":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/courses.reducers.ts ***!
  \****************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_courses_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/courses.actions */ "8rJP");
/* harmony import */ var _state_courses_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/courses.state */ "fLhn");



const coursesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_state_courses_state__WEBPACK_IMPORTED_MODULE_2__["initialCoursesState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_courses_actions__WEBPACK_IMPORTED_MODULE_1__["loadCoursesSuccess"], (state, { courses }) => (Object.assign(Object.assign({}, state), { courses }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_courses_actions__WEBPACK_IMPORTED_MODULE_1__["loadCoursesFailure"], (state, { error }) => (Object.assign(Object.assign({}, state), { coursesLoadError: error }))));
function reducer(state, action) {
    return coursesReducer(state, action);
}


/***/ }),

/***/ "2yk9":
/*!********************************************!*\
  !*** ./src/app/courses/courses.service.ts ***!
  \********************************************/
/*! exports provided: CoursesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesService", function() { return CoursesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CoursesService {
    constructor(http) {
        this.http = http;
        this.getProfessorCoursesUrl = 'Professors/GetProfessorActiveCourses/';
        this.getActiveCoursesUrl = 'Courses/GetActiveCourses/';
        this.addCourseUrl = 'Courses/AddCourse';
    }
    getActiveCourses() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getActiveCoursesUrl}`);
    }
    getProfessorCourses(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getProfessorCoursesUrl}${id}`);
    }
    addCourse(course) {
        const body = {
            Name: course.name,
            UniqueCode: course.uniqueCode,
            ProfessorId: course.professorId,
            IsActive: true
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.addCourseUrl}`, body);
    }
}
CoursesService.ɵfac = function CoursesService_Factory(t) { return new (t || CoursesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CoursesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesService, factory: CoursesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4i7c":
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constants */ "dkQB");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "XNvx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class LoginGuard {
    constructor(loginService, router, storage) {
        this.loginService = loginService;
        this.router = router;
        this.storage = storage;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    canActivateChild(next, state) {
        const role = this.storage.get('role');
        return role === _app_constants__WEBPACK_IMPORTED_MODULE_3__["PROFESSOR_ROLE_ID"];
    }
    canActivate(next, state) {
        const token = this.storage.get('access_token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}
LoginGuard.ɵfac = function LoginGuard_Factory(t) { return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])); };
LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginGuard, factory: LoginGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "5UW4":
/*!******************************************************************!*\
  !*** ./src/app/student-to-course/student-to-course.component.ts ***!
  \******************************************************************/
/*! exports provided: StudentToCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentToCourseComponent", function() { return StudentToCourseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../courses/courses.service */ "2yk9");
/* harmony import */ var _students_students_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../students/students.service */ "L5YT");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");













function StudentToCourseComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r5)("id", c_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c_r5 == null ? null : c_r5.name, " ");
} }
function StudentToCourseComponent_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r6)("id", s_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r6 == null ? null : s_r6.name, " ");
} }
function StudentToCourseComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Added!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentToCourseComponent {
    constructor(coursesService, studentsService) {
        this.coursesService = coursesService;
        this.studentsService = studentsService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.notCreated = true;
    }
    ngOnInit() {
        this.loadCourses();
        this.loadStudents();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    loadCourses() {
        this.subscription.add(this.coursesService.getActiveCourses()
            .subscribe((data) => this.courses = data));
    }
    loadStudents() {
        this.subscription.add(this.studentsService.getActiveStudents()
            .subscribe((data) => this.students = data));
    }
    addStudentToCourse() {
        this.subscription.add(this.studentsService.addStudentToCourse(this.selectedStudent.id, this.selectedCourse.uniqueCode)
            .subscribe(() => this.notCreated = false));
    }
}
StudentToCourseComponent.ɵfac = function StudentToCourseComponent_Factory(t) { return new (t || StudentToCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_students_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"])); };
StudentToCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentToCourseComponent, selectors: [["professors-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _courses_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"],
            _students_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"]
        ])], decls: 20, vars: 6, consts: [[1, "addform"], ["novalidate", "", 1, "studentToCourse"], [1, "form-group"], ["appearance", "fill"], ["name", "courseselect", "required", "", 1, "course", 3, "ngModel", "ngModelChange"], ["course", "ngModel"], [3, "value", "id", 4, "ngFor", "ngForOf"], ["name", "studentselect", "required", "", 1, "student", 3, "ngModel", "ngModelChange"], ["student", "ngModel"], ["name", "addbutton", "mat-button", "", 1, "addbtn", 3, "disabled", "click"], ["class", "form-group", 4, "ngIf"], [3, "value", "id"]], template: function StudentToCourseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentToCourseComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedCourse = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentToCourseComponent_mat_option_8_Template, 2, 3, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StudentToCourseComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.selectedStudent = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StudentToCourseComponent_mat_option_15_Template, 2, 3, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentToCourseComponent_Template_button_click_17_listener() { return ctx.addStudentToCourse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, StudentToCourseComponent_div_19_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedCourse);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedStudent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || _r2.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notCreated);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: [".addform[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n.addform[_ngcontent-%COMP%]   .studentToCourse[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 16px 26px 126px 26px;\n  border-radius: 10px;\n  box-shadow: 0 4px 30px #c7c7c7;\n  font-family: sans-serif;\n  letter-spacing: 1px;\n}\n.addform[_ngcontent-%COMP%]   .addbtn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 490px;\n  width: 10.5%;\n  height: 40px;\n  border: none;\n  background: #03a9f4;\n  text-align: center;\n  font-size: 13pt;\n  text-transform: capitalize;\n  color: #fff;\n}\n.addform[_ngcontent-%COMP%]   .addbtn[_ngcontent-%COMP%]:hover, .addform[_ngcontent-%COMP%]   .addbtn[_ngcontent-%COMP%]:focus, .addform[_ngcontent-%COMP%]   .addbtn[_ngcontent-%COMP%]:active:focus {\n  background: #e91e63;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 5px;\n}\n.addform[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.infoform[_ngcontent-%COMP%] {\n  position: relative;\n  left: 1100px;\n  bottom: 535px;\n  height: 80vh;\n}\n.infoform[_ngcontent-%COMP%]   .studentToCourse[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 16px 26px 126px 26px;\n  border-radius: 10px;\n  box-shadow: 0 4px 30px #c7c7c7;\n  font-family: sans-serif;\n  letter-spacing: 1px;\n}\n.infoform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  left: 190px;\n  bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnQtdG8tY291cnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksYUFBQTtFQUxBLHVCQUFBO0VBQ0EsbUJBQUE7RUFNQSxZQUFBO0FBUko7QUFVSTtFQUNJLFlBYks7RUFjTCw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUlI7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTVCRztFQTZCSCxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFUUjtBQVdRO0VBR0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWFo7QUFlSTtFQUNJLGlCQS9DYTtBQWtDckI7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUEsWUFBQTtBQWZKO0FBaUJJO0VBQ0ksWUF4REs7RUF5REwsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWhCUiIsImZpbGUiOiJzdHVkZW50LXRvLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXJnaW4tbGVmdC1vci10b3A6IDUwcHg7XHJcbiRzaGFkb3ctY29sb3I6ICNjN2M3Yzc7XHJcbiRidG5jb2xvcjogIzAzYTlmNDtcclxuJGZvcm0td2lkdGg6IDIwMHB4O1xyXG5cclxuQG1peGluIGNlbnRlcmluZygpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIEBpbmNsdWRlIGNlbnRlcmluZygpO1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG5cclxuICAgIC5zdHVkZW50VG9Db3Vyc2Uge1xyXG4gICAgICAgIHdpZHRoOiAkZm9ybS13aWR0aDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDI2cHggMTI2cHggMjZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkZm9ybS13aWR0aCAvIDIwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggJHNoYWRvdy1jb2xvcjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRidG4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDQ5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMC41JTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRidG5jb2xvcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjphY3RpdmU6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLWxlZnQtb3ItdG9wXHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbmZvZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMTAwcHg7XHJcbiAgICBib3R0b206IDUzNXB4O1xyXG5cclxuICAgIGhlaWdodDogODB2aDtcclxuXHJcbiAgICAuc3R1ZGVudFRvQ291cnNlIHtcclxuICAgICAgICB3aWR0aDogJGZvcm0td2lkdGg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNnB4IDEyNnB4IDI2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGZvcm0td2lkdGggLyAyMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4ICRzaGFkb3ctY29sb3I7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAxOTBweDtcclxuICAgICAgICBib3R0b206IDIycHg7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentToCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'professors-app',
                templateUrl: './student-to-course.component.html',
                styleUrls: ['./student-to-course.component.scss'],
                providers: [
                    _courses_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"],
                    _students_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"]
                ]
            }]
    }], function () { return [{ type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_1__["CoursesService"] }, { type: _students_students_service__WEBPACK_IMPORTED_MODULE_2__["StudentsService"] }]; }, null); })();


/***/ }),

/***/ "76FK":
/*!***************************************************!*\
  !*** ./src/app/store/actions/students.actions.ts ***!
  \***************************************************/
/*! exports provided: StudentsActions, loadStudents, loadStudentsSuccess, loadStudentsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsActions", function() { return StudentsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStudents", function() { return loadStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStudentsSuccess", function() { return loadStudentsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStudentsFailure", function() { return loadStudentsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var StudentsActions;
(function (StudentsActions) {
    StudentsActions["LoadStudents"] = "[Students] Load Students";
})(StudentsActions || (StudentsActions = {}));
const loadStudents = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(StudentsActions.LoadStudents);
const loadStudentsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(StudentsActions.LoadStudents, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadStudentsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(StudentsActions.LoadStudents, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "8rJP":
/*!**************************************************!*\
  !*** ./src/app/store/actions/courses.actions.ts ***!
  \**************************************************/
/*! exports provided: CoursesActions, loadCourses, loadCoursesSuccess, loadCoursesFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesActions", function() { return CoursesActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCourses", function() { return loadCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCoursesSuccess", function() { return loadCoursesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCoursesFailure", function() { return loadCoursesFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

var CoursesActions;
(function (CoursesActions) {
    CoursesActions["LoadCourses"] = "[Courses] Load Courses";
})(CoursesActions || (CoursesActions = {}));
const loadCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CoursesActions.LoadCourses, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCoursesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CoursesActions.LoadCourses, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCoursesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CoursesActions.LoadCourses, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "A/Dq":
/*!************************************************!*\
  !*** ./src/app/students/students.component.ts ***!
  \************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _students_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./students.service */ "L5YT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_actions_students_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/actions/students.actions */ "76FK");
/* harmony import */ var _store_selectors_students_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selectors/students.selectors */ "zzJE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _directives_full_name_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/full-name.directive */ "usEM");
/* harmony import */ var _pipes_TruncateTextPipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/TruncateTextPipe */ "fRb9");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


















function StudentsComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_td_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r12 == null ? null : student_r12.name, " ");
} }
function StudentsComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "truncatetext");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StudentsComponent_td_6_div_3_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, student_r12 == null ? null : student_r12.name, 15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullname", student_r12.selected);
} }
function StudentsComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r15 == null ? null : student_r15.email, " ");
} }
function StudentsComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", student_r16 == null ? null : student_r16.phone, " ");
} }
function StudentsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
function StudentsComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsComponent_tr_14_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const row_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showFullName(row_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First Name is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last Name is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StudentsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StudentsComponent {
    constructor(studentsService, activateRoute, store) {
        this.studentsService = studentsService;
        this.activateRoute = activateRoute;
        this.store = store;
        this.displayedColumns = ['name', 'email', 'phone'];
        this.show = false;
        this.students = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_students_selectors__WEBPACK_IMPORTED_MODULE_4__["getStudents"]));
        activateRoute.queryParams.subscribe((queryParam) => {
            this.schoolId = queryParam.schoolId;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[0-9]{9}')),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email)
        });
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_students_actions__WEBPACK_IMPORTED_MODULE_3__["loadStudents"]());
    }
    addStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            const firstName = this.form.controls['firstName'].value;
            const lastName = this.form.controls['lastName'].value;
            const phone = this.form.controls['phone'].value;
            const email = this.form.controls['email'].value;
            yield this.studentsService.addStudent(firstName, lastName, email, phone, this.schoolId).toPromise();
        });
    }
    showFullName(row) {
        const longNameLength = 15;
        if (row.name.length > longNameLength) {
            row.selected = (row.selected == null) ? true : !row.selected;
        }
    }
}
StudentsComponent.ɵfac = function StudentsComponent_Factory(t) { return new (t || StudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
StudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StudentsComponent, selectors: [["students-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"]
        ])], decls: 42, vars: 8, consts: [[1, "students"], ["name", "studentstable", "mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["matColumnDef", "phone"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["novalidate", "", 3, "formGroup"], ["color", "accent", "appearance", "fill", 1, "form-group"], ["matInput", "", "type", "text", "name", "firstName", "formControlName", "firstName", 1, "form-control", "firstName"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "type", "text", "name", "lastName", "formControlName", "lastName", 1, "form-control", "lastName"], ["matInput", "", "type", "text", "name", "phone", "formControlName", "phone", 1, "form-control", "phone"], ["matInput", "", "type", "email", "name", "email", "formControlName", "email", 1, "form-control", "email"], [1, "form-group"], ["mat-raised-button", "", "name", "addStudentButton", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "fullname"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], [1, "alert", "alert-danger"]], template: function StudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StudentsComponent_th_5_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StudentsComponent_td_6_Template, 4, 5, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StudentsComponent_th_8_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StudentsComponent_td_9_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, StudentsComponent_th_11_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StudentsComponent_td_12_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StudentsComponent_tr_13_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StudentsComponent_tr_14_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, StudentsComponent_div_20_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, StudentsComponent_div_26_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, StudentsComponent_div_32_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, StudentsComponent_div_38_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentsComponent_Template_button_click_40_listener() { return ctx.addStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Add student");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.students);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["firstName"].invalid && ctx.form.controls["firstName"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["lastName"].invalid && ctx.form.controls["lastName"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["phone"].invalid && ctx.form.controls["phone"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["email"].invalid && ctx.form.controls["email"].touched);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _directives_full_name_directive__WEBPACK_IMPORTED_MODULE_12__["FullNameDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"]], pipes: [_pipes_TruncateTextPipe__WEBPACK_IMPORTED_MODULE_13__["TruncateTextPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  margin-left: 150px;\n  width: 80%;\n  font-size: 14px;\n  border-collapse: collapse;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  background: #AFCDE7;\n  color: white;\n  padding: 10px 20px;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-width: 0 1px 1px 0;\n  border-color: white;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #D8E6F3;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0dWRlbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFJSTtFQUNJLGdCQUFBO0FBRlI7QUFNQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFISiIsImZpbGUiOiJzdHVkZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHRoLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0FGQ0RFNztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNEOEU2RjM7XHJcbiAgICB9XHJcblxyXG4gICAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'students-app',
                templateUrl: './students.component.html',
                styleUrls: ['./students.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    _students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"]
                ]
            }]
    }], function () { return [{ type: _students_service__WEBPACK_IMPORTED_MODULE_1__["StudentsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, null); })();


/***/ }),

/***/ "AnGJ":
/*!******************************************************!*\
  !*** ./src/app/store/selectors/courses.selectors.ts ***!
  \******************************************************/
/*! exports provided: getCoursesState, getCourses, getCoursesLoadError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesState", function() { return getCoursesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourses", function() { return getCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoursesLoadError", function() { return getCoursesLoadError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_courses_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/courses.state */ "fLhn");


const getCoursesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_courses_state__WEBPACK_IMPORTED_MODULE_1__["COURSES_FEATURE_KEY"]);
const getCourses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, state => state.courses);
const getCoursesLoadError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getCoursesState, state => state.coursesLoadError);


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-logger */ "E3Zs");

const environment = {
    production: false,
    apiUrl: 'https://localhost:44370/api/',
    hostUrl: 'https://localhost:44370/',
    logging: {
        level: ngx_logger__WEBPACK_IMPORTED_MODULE_0__["NgxLoggerLevel"].DEBUG,
    }
};


/***/ }),

/***/ "C7aP":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.service */ "2yk9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_actions_courses_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions/courses.actions */ "8rJP");
/* harmony import */ var _store_selectors_courses_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors/courses.selectors */ "AnGJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















function CoursesComponent_form_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_form_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unique code is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CoursesComponent_form_1_div_5_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unique Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CoursesComponent_form_1_div_11_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CoursesComponent_form_1_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.addCourse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add course");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["name"].invalid && ctx_r0.form.controls["name"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.controls["uniqueCode"].invalid && ctx_r0.form.controls["uniqueCode"].touched);
} }
function CoursesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Course was added!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r13 == null ? null : course_r13.name, " ");
} }
function CoursesComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UniqueCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CoursesComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r14 == null ? null : course_r14.uniqueCode, " ");
} }
function CoursesComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 20);
} }
function CoursesComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 21);
} }
class CoursesComponent {
    constructor(coursesService, activateRoute, store) {
        this.coursesService = coursesService;
        this.activateRoute = activateRoute;
        this.store = store;
        this.notCreated = true;
        this.courses = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_courses_selectors__WEBPACK_IMPORTED_MODULE_5__["getCourses"]));
        this.displayedColumns = ['name', 'uniqueCode'];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'uniqueCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{3}'))
        });
        activateRoute.queryParams.subscribe((queryParam) => {
            this.professorId = queryParam['professorId'];
        });
    }
    ngOnInit() {
        this.store.dispatch(_store_actions_courses_actions__WEBPACK_IMPORTED_MODULE_4__["loadCourses"]({ professorId: this.professorId }));
    }
    addCourse() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.form.invalid) {
                const course = {
                    name: this.form.controls['name'].value,
                    uniqueCode: this.form.controls['uniqueCode'].value,
                    professorId: this.professorId
                };
                yield this.coursesService.addCourse(course).toPromise();
                this.notCreated = false;
            }
        });
    }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
CoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CoursesComponent, selectors: [["courses-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]
        ])], decls: 15, vars: 5, consts: [[1, "container"], ["name", "courseform", "novalidate", "", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["created", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "uniqueCode"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["name", "courseform", "novalidate", "", 3, "formGroup"], ["color", "accent", "appearance", "fill", 1, "form-group"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", 1, "form-control", "name"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "type", "number", "name", "uniqueCode", "formControlName", "uniqueCode", 1, "form-control", "uniqueCode"], [1, "form-group"], ["mat-raised-button", "", "name", "addCourseButton", 3, "click"], [1, "alert", "alert-danger"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoursesComponent_form_1_Template, 15, 3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CoursesComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Courses:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CoursesComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CoursesComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CoursesComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CoursesComponent_td_12_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CoursesComponent_tr_13_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CoursesComponent_tr_14_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notCreated)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vh;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 16px 26px 66px 26px;\n  border-radius: 10px;\n  box-shadow: 0 4px 30px #c7c7c7;\n  font-family: sans-serif;\n  letter-spacing: 1px;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #03a9f4;\n  text-align: center;\n  font-size: 13pt;\n  text-transform: capitalize;\n  color: #fff;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:focus {\n  background: #e91e63;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 5px;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvdXJzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxhQUFBO0VBTEEsdUJBQUE7RUFDQSxtQkFBQTtFQU1BLFlBQUE7QUFSSjtBQVVJO0VBQ0ksWUFiSztFQWNMLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVdJO0VBRUksbUJBeEJHO0VBeUJILGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQVZSO0FBWVE7RUFHSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaWjtBQWdCSTtFQUNJLGdCQTNDYTtBQTZCckI7QUFpQkE7RUFDSSxXQUFBO0FBZEoiLCJmaWxlIjoiY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYXJnaW4tbGVmdC1vci10b3A6IDVweDtcclxuJHNoYWRvdy1jb2xvcjogI2M3YzdjNztcclxuJGJ0bmNvbG9yOiAjMDNhOWY0O1xyXG4kZm9ybS13aWR0aDogMjAwcHg7XHJcblxyXG5AbWl4aW4gY2VudGVyaW5nKCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBAaW5jbHVkZSBjZW50ZXJpbmcoKTtcclxuICAgIGhlaWdodDogNDB2aDtcclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICB3aWR0aDogJGZvcm0td2lkdGg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNnB4IDY2cHggMjZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkZm9ybS13aWR0aCAvIDIwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDMwcHggJHNoYWRvdy1jb2xvcjtcclxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkYnRuY29sb3I7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICY6YWN0aXZlOmZvY3VzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U5MWU2MztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogJG1hcmdpbi1sZWZ0LW9yLXRvcFxyXG4gICAgfVxyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'courses-app',
                templateUrl: './courses.component.html',
                styleUrls: ['./courses.component.scss'],
                providers: [
                    _courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]
                ]
            }]
    }], function () { return [{ type: _courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "GjqB":
/*!**************************************************!*\
  !*** ./src/app/store/effects/courses.effects.ts ***!
  \**************************************************/
/*! exports provided: CoursesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesEffects", function() { return CoursesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_courses_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/courses.actions */ "8rJP");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../courses/courses.service */ "2yk9");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class CoursesEffects {
    constructor(coursesService, actions$) {
        this.coursesService = coursesService;
        this.actions$ = actions$;
        this.loadCourses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_courses_actions__WEBPACK_IMPORTED_MODULE_3__["loadCourses"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(action => this.coursesService.getProfessorCourses(action.professorId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(courses => _actions_courses_actions__WEBPACK_IMPORTED_MODULE_3__["loadCoursesSuccess"]({ courses })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => __awaiter(this, void 0, void 0, function* () { return _actions_courses_actions__WEBPACK_IMPORTED_MODULE_3__["loadCoursesFailure"]({ error }); }))))));
    }
}
CoursesEffects.ɵfac = function CoursesEffects_Factory(t) { return new (t || CoursesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_courses_courses_service__WEBPACK_IMPORTED_MODULE_4__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
CoursesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CoursesEffects, factory: CoursesEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoursesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_4__["CoursesService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "JZyV":
/*!**********************************************************!*\
  !*** ./src/app/error-handling/services/error.service.ts ***!
  \**********************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ErrorService {
    getClientErrorMessage(error) {
        return error.message ?
            error.message :
            error.toString();
    }
    getServerErrorMessage(error) {
        return navigator.onLine ?
            error.message :
            'No Internet Connection';
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "L5YT":
/*!**********************************************!*\
  !*** ./src/app/students/students.service.ts ***!
  \**********************************************/
/*! exports provided: StudentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsService", function() { return StudentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class StudentsService {
    constructor(http) {
        this.http = http;
        this.getSchoolActvStudentsUrl = 'Students/GetSchoolActiveStudents/';
        this.getActiveStudentsUrl = 'Students/GetActiveStudents';
        this.addStudentToCourseUrl = 'Courses/AddStudentToCourse/';
        this.addStudentUrl = 'Students/AddStudent';
    }
    getSchoolActiveStudents(schoolId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getSchoolActvStudentsUrl}${schoolId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    getActiveStudents() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getActiveStudentsUrl}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error)));
    }
    addStudent(firstName, lastName, email, phone, schoolId) {
        const body = {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phone,
            SchoolId: schoolId,
            IsAccountActive: true
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.addStudentUrl}`, body);
    }
    addStudentToCourse(studentId, courseCode) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.addStudentToCourseUrl}${studentId}/${courseCode}`, null);
    }
}
StudentsService.ɵfac = function StudentsService_Factory(t) { return new (t || StudentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
StudentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentsService, factory: StudentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "OquI":
/*!***********************************************************************!*\
  !*** ./src/app/professors/professor-info/professor-info.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfessorInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorInfoComponent", function() { return ProfessorInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _professors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../professors.service */ "m6/X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var _table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table-element/professor-table-element.component */ "hCf2");







class ProfessorInfoComponent {
    constructor(professorsService, activateRoute, logger) {
        this.professorsService = professorsService;
        this.activateRoute = activateRoute;
        this.logger = logger;
        activateRoute.queryParams.subscribe((queryParam) => {
            this.professorId = queryParam.id;
        });
    }
    ngOnInit() {
        this.loadProfessors();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    loadProfessors() {
        this.subscription =
            this.professorsService.getProfessor(this.professorId)
                .subscribe((data) => this.professor = data, error => { this.error = error.message; this.logger.error(`Error while getting professor's info ${this.error}`); });
    }
}
ProfessorInfoComponent.ɵfac = function ProfessorInfoComponent_Factory(t) { return new (t || ProfessorInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"])); };
ProfessorInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorInfoComponent, selectors: [["professor-info-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"]
        ])], decls: 5, vars: 1, consts: [[1, "table", "table-striped"], [3, "professor"]], template: function ProfessorInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Professor information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "professor-table-element", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("professor", ctx.professor);
    } }, directives: [_table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_4__["ProfessorTableElementComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'professor-info-app',
                templateUrl: './professor-info.component.html',
                providers: [
                    _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"]
                ]
            }]
    }], function () { return [{ type: _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["my-app"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-app',
                templateUrl: './app.component.html'
            }]
    }], null, null); })();


/***/ }),

/***/ "U1d5":
/*!************************************************************!*\
  !*** ./src/app/error-handling/services/logging.service.ts ***!
  \************************************************************/
/*! exports provided: LoggingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingService", function() { return LoggingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-logger */ "E3Zs");



class LoggingService {
    constructor(logger) {
        this.logger = logger;
    }
    logError(message) {
        this.logger.error(`${message}`);
    }
}
LoggingService.ɵfac = function LoggingService_Factory(t) { return new (t || LoggingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NGXLogger"])); };
LoggingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggingService, factory: LoggingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NGXLogger"] }]; }, null); })();


/***/ }),

/***/ "XNvx":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class LoginService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.getLoginResponseUrl = 'Account/Token/';
    }
    logIn(login, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getLoginResponseUrl}${login}/${password}`, null);
    }
    logOut() {
        this.storage.clear();
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"])); };
LoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_2__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "YP4M":
/*!********************************************!*\
  !*** ./src/app/services/message.servie.ts ***!
  \********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class MessageService {
    constructor() {
        this.loginHubUrl = 'loginhub';
        this.message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    connect(access_token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connection) {
                this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                    .withUrl(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].hostUrl}${this.loginHubUrl}`, { accessTokenFactory: () => access_token })
                    .build();
                this.connection.on('receive', data => {
                    this.message.next(data);
                });
                return this.connection.start();
            }
        });
    }
    send() {
        this.connection.invoke('send');
    }
    disconnect() {
        if (this.connection) {
            this.connection.stop();
            this.connection = null;
        }
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "YZbJ":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _reducers_students_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/students.reducers */ "y7is");
/* harmony import */ var _reducers_courses_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/courses.reducers */ "1dOi");


const reducers = {
    students: _reducers_students_reducers__WEBPACK_IMPORTED_MODULE_0__["reducer"],
    courses: _reducers_courses_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"]
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-logger */ "E3Zs");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _professors_professors_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./professors/professors.component */ "eZ94");
/* harmony import */ var _professors_professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./professors/professor-info/professor-info.component */ "OquI");
/* harmony import */ var _professors_table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./professors/table-element/professor-table-element.component */ "hCf2");
/* harmony import */ var _students_students_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./students/students.component */ "A/Dq");
/* harmony import */ var _student_to_course_student_to_course_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./student-to-course/student-to-course.component */ "5UW4");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./courses/courses.component */ "C7aP");
/* harmony import */ var _error_handling_view_errors_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error-handling/view/errors.component */ "a3Wq");
/* harmony import */ var _error_handling_global_error_handler__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./error-handling/global-error-handler */ "liaE");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _pipes_TruncateTextPipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/TruncateTextPipe */ "fRb9");
/* harmony import */ var _directives_full_name_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./directives/full-name.directive */ "usEM");
/* harmony import */ var _store_effects_students_effects__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./store/effects/students.effects */ "xgeW");
/* harmony import */ var _store_effects_courses_effects__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./store/effects/courses.effects */ "GjqB");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./store/index */ "YZbJ");
/* harmony import */ var _login_login_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./login/login.guard */ "4i7c");










































const appRoutes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"] },
    {
        path: 'professors',
        component: _professors_professors_component__WEBPACK_IMPORTED_MODULE_20__["ProfessorsComponent"],
        children: [
            { path: 'students', component: _students_students_component__WEBPACK_IMPORTED_MODULE_23__["StudentsComponent"] },
            { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_26__["CoursesComponent"] },
        ],
        canActivate: [_login_login_guard__WEBPACK_IMPORTED_MODULE_35__["LoginGuard"]],
        canActivateChild: [_login_login_guard__WEBPACK_IMPORTED_MODULE_35__["LoginGuard"]]
    },
    { path: 'professorinfo', component: _professors_professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_21__["ProfessorInfoComponent"] },
    { path: 'studenttocourse', component: _student_to_course_student_to_course_component__WEBPACK_IMPORTED_MODULE_24__["StudentToCourseComponent"] },
    { path: 'errors', component: _error_handling_view_errors_component__WEBPACK_IMPORTED_MODULE_27__["ErrorsComponent"], pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _login_login_guard__WEBPACK_IMPORTED_MODULE_35__["LoginGuard"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _error_handling_global_error_handler__WEBPACK_IMPORTED_MODULE_28__["GlobalErrorHandler"] },
    ], imports: [[
            ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_18__["StorageServiceModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_14__["LoggerModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].logging),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_34__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_effects_students_effects__WEBPACK_IMPORTED_MODULE_32__["StudentsEffects"], _store_effects_courses_effects__WEBPACK_IMPORTED_MODULE_33__["CoursesEffects"]]),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
                config: {
                    tokenGetter: () => {
                        return '';
                    }
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
        _professors_professors_component__WEBPACK_IMPORTED_MODULE_20__["ProfessorsComponent"],
        _professors_professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_21__["ProfessorInfoComponent"],
        _professors_table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_22__["ProfessorTableElementComponent"],
        _students_students_component__WEBPACK_IMPORTED_MODULE_23__["StudentsComponent"],
        _student_to_course_student_to_course_component__WEBPACK_IMPORTED_MODULE_24__["StudentToCourseComponent"],
        _courses_courses_component__WEBPACK_IMPORTED_MODULE_26__["CoursesComponent"],
        _pipes_TruncateTextPipe__WEBPACK_IMPORTED_MODULE_30__["TruncateTextPipe"],
        _directives_full_name_directive__WEBPACK_IMPORTED_MODULE_31__["FullNameDirective"]], imports: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_18__["StorageServiceModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], ngx_logger__WEBPACK_IMPORTED_MODULE_14__["LoggerModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsRootModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_18__["StorageServiceModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                    ngx_logger__WEBPACK_IMPORTED_MODULE_14__["LoggerModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_29__["environment"].logging),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_34__["reducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_effects_students_effects__WEBPACK_IMPORTED_MODULE_32__["StudentsEffects"], _store_effects_courses_effects__WEBPACK_IMPORTED_MODULE_33__["CoursesEffects"]]),
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_17__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: () => {
                                return '';
                            }
                        }
                    })
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
                    _professors_professors_component__WEBPACK_IMPORTED_MODULE_20__["ProfessorsComponent"],
                    _professors_professor_info_professor_info_component__WEBPACK_IMPORTED_MODULE_21__["ProfessorInfoComponent"],
                    _professors_table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_22__["ProfessorTableElementComponent"],
                    _students_students_component__WEBPACK_IMPORTED_MODULE_23__["StudentsComponent"],
                    _student_to_course_student_to_course_component__WEBPACK_IMPORTED_MODULE_24__["StudentToCourseComponent"],
                    _courses_courses_component__WEBPACK_IMPORTED_MODULE_26__["CoursesComponent"],
                    _pipes_TruncateTextPipe__WEBPACK_IMPORTED_MODULE_30__["TruncateTextPipe"],
                    _directives_full_name_directive__WEBPACK_IMPORTED_MODULE_31__["FullNameDirective"]
                ],
                providers: [
                    _login_login_guard__WEBPACK_IMPORTED_MODULE_35__["LoginGuard"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _error_handling_global_error_handler__WEBPACK_IMPORTED_MODULE_28__["GlobalErrorHandler"] },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a3Wq":
/*!*********************************************************!*\
  !*** ./src/app/error-handling/view/errors.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsComponent", function() { return ErrorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorsComponent {
    constructor(activateRoute) {
        this.activateRoute = activateRoute;
        activateRoute.queryParams.subscribe((queryParam) => {
            this.message = queryParam['message'];
        });
    }
}
ErrorsComponent.ɵfac = function ErrorsComponent_Factory(t) { return new (t || ErrorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ErrorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorsComponent, selectors: [["errors-app"]], decls: 2, vars: 1, template: function ErrorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: ["h1[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Vycm9ycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJlcnJvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'errors-app',
                templateUrl: './errors.component.html',
                styleUrls: ['./errors.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "dkQB":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: PROFESSOR_ROLE_ID, SNACKBAR_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFESSOR_ROLE_ID", function() { return PROFESSOR_ROLE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SNACKBAR_DURATION", function() { return SNACKBAR_DURATION; });
const PROFESSOR_ROLE_ID = '2';
const SNACKBAR_DURATION = 2000;


/***/ }),

/***/ "eZ94":
/*!****************************************************!*\
  !*** ./src/app/professors/professors.component.ts ***!
  \****************************************************/
/*! exports provided: ProfessorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorsComponent", function() { return ProfessorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _professors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./professors.service */ "m6/X");
/* harmony import */ var _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../courses/courses.service */ "2yk9");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.constants */ "dkQB");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _services_message_servie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/message.servie */ "YP4M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-element/professor-table-element.component */ "hCf2");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");



















function ProfessorsComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", p_r7)("id", p_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r7 == null ? null : p_r7.name, " ");
} }
function ProfessorsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessorsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r8 == null ? null : course_r8.name, " ");
} }
function ProfessorsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UniqueCode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfessorsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", course_r9 == null ? null : course_r9.uniqueCode, " ");
} }
function ProfessorsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function ProfessorsComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
} }
class ProfessorsComponent {
    constructor(professorsService, coursesService, snackBar, notification, storage) {
        this.professorsService = professorsService;
        this.coursesService = coursesService;
        this.snackBar = snackBar;
        this.notification = notification;
        this.storage = storage;
        this.displayedColumns = ['name', 'uniqueCode'];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    ngOnInit() {
        const access_token = this.storage.get('access_token');
        this.notification.connect(access_token);
        this.loadProfessors();
        this.subscription.add(this.notification.message.subscribe(msg => {
            this.snackBar.open(msg, 'OK', {
                duration: _app_constants__WEBPACK_IMPORTED_MODULE_5__["SNACKBAR_DURATION"]
            });
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    loadProfessors() {
        this.subscription.add(this.professorsService.getActiveProfessors()
            .subscribe((data) => this.professors = data));
    }
    onOptionsSelected(value) {
        this.subscription.add(this.coursesService.getProfessorCourses(value)
            .subscribe((data) => this.courses = data));
    }
}
ProfessorsComponent.ɵfac = function ProfessorsComponent_Factory(t) { return new (t || ProfessorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_servie__WEBPACK_IMPORTED_MODULE_7__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])); };
ProfessorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorsComponent, selectors: [["professors-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"],
            _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]
        ])], decls: 24, vars: 6, consts: [[1, "professors"], ["appearance", "fill"], ["name", "professor", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", "id", 4, "ngFor", "ngForOf"], [1, "table", "table-striped"], [3, "professor"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "uniqueCode"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value", "id"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ProfessorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Professors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Select professor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfessorsComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedProfessor = $event; })("selectionChange", function ProfessorsComponent_Template_mat_select_selectionChange_6_listener($event) { return ctx.onOptionsSelected($event.value == null ? null : $event.value.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProfessorsComponent_mat_option_7_Template, 2, 3, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "professor-table-element", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Professor Active Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProfessorsComponent_th_16_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProfessorsComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ProfessorsComponent_th_19_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProfessorsComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProfessorsComponent_tr_21_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProfessorsComponent_tr_22_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedProfessor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.professors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("professor", ctx.selectedProfessor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.courses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _table_element_professor_table_element_component__WEBPACK_IMPORTED_MODULE_12__["ProfessorTableElementComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRowDef"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  width: 200px;\n}\ntable[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2Zlc3NvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7QUFHSTtFQUNJLFlBQUE7QUFEUjtBQUlJO0VBQ0ksV0FWSztBQVFiIiwiZmlsZSI6InByb2Zlc3NvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGluay1jb2xvcjogYmx1ZTtcclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIHRkIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRsaW5rLWNvbG9yO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'professors-app',
                templateUrl: './professors.component.html',
                styleUrls: ['./professors.component.scss'],
                providers: [
                    _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"],
                    _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"]
                ]
            }]
    }], function () { return [{ type: _professors_service__WEBPACK_IMPORTED_MODULE_1__["ProfessorsService"] }, { type: _courses_courses_service__WEBPACK_IMPORTED_MODULE_2__["CoursesService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _services_message_servie__WEBPACK_IMPORTED_MODULE_7__["MessageService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"]]
            }] }]; }, null); })();


/***/ }),

/***/ "fLhn":
/*!**********************************************!*\
  !*** ./src/app/store/state/courses.state.ts ***!
  \**********************************************/
/*! exports provided: COURSES_FEATURE_KEY, initialCoursesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COURSES_FEATURE_KEY", function() { return COURSES_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCoursesState", function() { return initialCoursesState; });
const COURSES_FEATURE_KEY = 'courses';
const initialCoursesState = {
    courses: null,
    coursesLoadError: null
};


/***/ }),

/***/ "fRb9":
/*!*******************************************!*\
  !*** ./src/app/pipes/TruncateTextPipe.ts ***!
  \*******************************************/
/*! exports provided: TruncateTextPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function() { return TruncateTextPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TruncateTextPipe {
    transform(value, length) {
        const biggestWord = 50;
        const elipses = '...';
        const searchValue = /[!,.?;:]$/;
        if (typeof value === 'undefined') {
            return value;
        }
        if (value.length <= length) {
            return value;
        }
        let truncatedText = value.slice(0, length + biggestWord);
        while (truncatedText.length > length - elipses.length) {
            const lastSpace = truncatedText.lastIndexOf(' ');
            if (lastSpace === -1) {
                break;
            }
            truncatedText = truncatedText.slice(0, lastSpace).replace(searchValue, '');
        }
        return truncatedText + elipses;
    }
}
TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) { return new (t || TruncateTextPipe)(); };
TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "truncatetext", type: TruncateTextPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'truncatetext'
            }]
    }], null, null); })();


/***/ }),

/***/ "hCf2":
/*!*******************************************************************************!*\
  !*** ./src/app/professors/table-element/professor-table-element.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProfessorTableElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorTableElementComponent", function() { return ProfessorTableElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return { schoolId: a0 }; };
const _c1 = function (a0) { return { professorId: a0 }; };
class ProfessorTableElementComponent {
}
ProfessorTableElementComponent.ɵfac = function ProfessorTableElementComponent_Factory(t) { return new (t || ProfessorTableElementComponent)(); };
ProfessorTableElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfessorTableElementComponent, selectors: [["professor-table-element"]], inputs: { professor: "professor" }, decls: 13, vars: 10, consts: [["width", "200"], ["name", "schoolbutton", "mat-button", "", "routerLink", "students", 3, "queryParams"], ["name", "coursebutton", "mat-button", "", "routerLink", "courses", 3, "queryParams"]], template: function ProfessorTableElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.professor == null ? null : ctx.professor.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.professor == null ? null : ctx.professor.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.professor == null ? null : ctx.professor.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.professor == null ? null : ctx.professor.schoolId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.professor == null ? null : ctx.professor.schoolName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx.professor == null ? null : ctx.professor.id));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorTableElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'professor-table-element',
                templateUrl: './professor-table-element.component.html',
            }]
    }], null, { professor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "iOlV":
/*!***********************************************!*\
  !*** ./src/app/store/state/students.state.ts ***!
  \***********************************************/
/*! exports provided: STUDENTS_FEATURE_KEY, initialStudentsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENTS_FEATURE_KEY", function() { return STUDENTS_FEATURE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialStudentsState", function() { return initialStudentsState; });
const STUDENTS_FEATURE_KEY = 'students';
const initialStudentsState = {
    students: null,
    studentsLoadError: null
};


/***/ }),

/***/ "liaE":
/*!********************************************************!*\
  !*** ./src/app/error-handling/global-error-handler.ts ***!
  \********************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/logging.service */ "U1d5");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/error.service */ "JZyV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class GlobalErrorHandler {
    constructor(injector, router, zone) {
        this.injector = injector;
        this.router = router;
        this.zone = zone;
    }
    handleError(error) {
        const errorService = this.injector.get(_services_error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]);
        const logger = this.injector.get(_services_logging_service__WEBPACK_IMPORTED_MODULE_2__["LoggingService"]);
        let message;
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            message = errorService.getServerErrorMessage(error);
            this.zone.run(() => this.router.navigate(['/errors'], {
                queryParams: {
                    'message': `type ${message}`
                }
            }));
        }
        else {
            message = errorService.getClientErrorMessage(error);
            this.zone.run(() => this.router.navigate(['/errors'], {
                queryParams: {
                    'message': `type ${message}`
                }
            }));
        }
        logger.logError(message);
    }
}
GlobalErrorHandler.ɵfac = function GlobalErrorHandler_Factory(t) { return new (t || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
GlobalErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandler, factory: GlobalErrorHandler.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "m6/X":
/*!**************************************************!*\
  !*** ./src/app/professors/professors.service.ts ***!
  \**************************************************/
/*! exports provided: ProfessorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessorsService", function() { return ProfessorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProfessorsService {
    constructor(http) {
        this.http = http;
        this.getActiveProfessorsUrl = 'Professors/GetActiveProfessors';
        this.getProfessorUrl = 'Professors/GetProfessor/';
    }
    getActiveProfessors() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getActiveProfessorsUrl}`);
    }
    getProfessor(professorId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl}${this.getProfessorUrl}${professorId}`);
    }
}
ProfessorsService.ɵfac = function ProfessorsService_Factory(t) { return new (t || ProfessorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProfessorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfessorsService, factory: ProfessorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfessorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "usEM":
/*!***************************************************!*\
  !*** ./src/app/directives/full-name.directive.ts ***!
  \***************************************************/
/*! exports provided: FullNameDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullNameDirective", function() { return FullNameDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FullNameDirective {
    constructor(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    set fullname(condition) {
        this.showFullName = condition;
        this.updateView();
    }
    updateView() {
        this.showFullName ? this.viewContainer.createEmbeddedView(this.templateRef) : this.viewContainer.clear();
    }
}
FullNameDirective.ɵfac = function FullNameDirective_Factory(t) { return new (t || FullNameDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
FullNameDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FullNameDirective, selectors: [["", "fullname", ""]], inputs: { fullname: "fullname" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullNameDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[fullname]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { fullname: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "XNvx");
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_message_servie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/message.servie */ "YP4M");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password is not specified! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(loginService, storage, router, notification) {
        this.loginService = loginService;
        this.storage = storage;
        this.router = router;
        this.notification = notification;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'login': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    onLogin() {
        const login = this.form.controls['login'].value;
        const password = this.form.controls['password'].value;
        this.loginService.logIn(login, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).
            subscribe((response) => {
            this.storage.set('access_token', response.access_token);
            this.storage.set('role', response.role);
            this.notification.connect(response.access_token).then(() => this.notification.send());
            this.router.navigate(['/professors']);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_message_servie__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login-app"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
        ])], decls: 16, vars: 3, consts: [[1, "container"], ["novalidate", "", 3, "formGroup"], ["color", "accent", "appearance", "fill", 1, "form-group"], ["matInput", "", "type", "text", "name", "login", "formControlName", "login", 1, "form-control", "login"], ["class", "alert alert-danger", 4, "ngIf"], ["matInput", "", "type", "password", "name", "password", "formControlName", "password", 1, "form-control", "password"], [1, "form-group"], ["mat-raised-button", "", "name", "loginButton", 3, "click"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["login"].invalid && ctx.form.controls["login"].touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["password"].invalid && ctx.form.controls["password"].touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 80vh;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 16px 26px 66px 26px;\n  border-radius: 10px;\n  box-shadow: 0 4px 30px #c7c7c7;\n  font-family: sans-serif;\n  letter-spacing: 1px;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 490px;\n  width: 10.5%;\n  height: 40px;\n  border: none;\n  background: #03a9f4;\n  text-align: center;\n  font-size: 13pt;\n  text-transform: capitalize;\n  color: #fff;\n}\n.container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, .container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active:focus {\n  background: #e91e63;\n  cursor: pointer;\n  outline: none;\n  letter-spacing: 5px;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksYUFBQTtFQUxBLHVCQUFBO0VBQ0EsbUJBQUE7RUFNQSxZQUFBO0FBUko7QUFVSTtFQUNJLFlBYks7RUFjTCw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUlI7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQTVCRztFQTZCSCxrQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUFUUjtBQVdRO0VBR0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBWFo7QUFlSTtFQUNJLGdCQS9DYTtBQWtDckIiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFyZ2luLWxlZnQtb3ItdG9wOiA1cHg7XHJcbiRzaGFkb3ctY29sb3I6ICNjN2M3Yzc7XHJcbiRidG5jb2xvcjogIzAzYTlmNDtcclxuJGZvcm0td2lkdGg6IDIwMHB4O1xyXG5cclxuQG1peGluIGNlbnRlcmluZygpIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgQGluY2x1ZGUgY2VudGVyaW5nKCk7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6ICRmb3JtLXdpZHRoO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjZweCA2NnB4IDI2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGZvcm0td2lkdGggLyAyMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAzMHB4ICRzaGFkb3ctY29sb3I7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDQ5MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMC41JTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRidG5jb2xvcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgJjphY3RpdmU6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkbWFyZ2luLWxlZnQtb3ItdG9wXHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'login-app',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
                providers: [
                    _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
                ]
            }]
    }], function () { return [{ type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_message_servie__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "xgeW":
/*!***************************************************!*\
  !*** ./src/app/store/effects/students.effects.ts ***!
  \***************************************************/
/*! exports provided: StudentsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsEffects", function() { return StudentsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_students_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/students.actions */ "76FK");
/* harmony import */ var _students_students_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../students/students.service */ "L5YT");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class StudentsEffects {
    constructor(studentsService, actions$) {
        this.studentsService = studentsService;
        this.actions$ = actions$;
        this.loadStudents$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_actions_students_actions__WEBPACK_IMPORTED_MODULE_3__["loadStudents"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => this.studentsService.getActiveStudents()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(students => _actions_students_actions__WEBPACK_IMPORTED_MODULE_3__["loadStudentsSuccess"]({ students })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => __awaiter(this, void 0, void 0, function* () { return _actions_students_actions__WEBPACK_IMPORTED_MODULE_3__["loadStudentsFailure"]({ error }); }))))));
    }
}
StudentsEffects.ɵfac = function StudentsEffects_Factory(t) { return new (t || StudentsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_students_students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
StudentsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentsEffects, factory: StudentsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _students_students_service__WEBPACK_IMPORTED_MODULE_4__["StudentsService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ "y7is":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/students.reducers.ts ***!
  \*****************************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_students_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/students.actions */ "76FK");
/* harmony import */ var _state_students_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/students.state */ "iOlV");



const studentsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_state_students_state__WEBPACK_IMPORTED_MODULE_2__["initialStudentsState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_students_actions__WEBPACK_IMPORTED_MODULE_1__["loadStudentsSuccess"], (state, { students }) => (Object.assign(Object.assign({}, state), { students }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_students_actions__WEBPACK_IMPORTED_MODULE_1__["loadStudentsFailure"], (state, { error }) => (Object.assign(Object.assign({}, state), { studentsLoadError: error }))));
function reducer(state, action) {
    return studentsReducer(state, action);
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");


const platform = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])();
platform.bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzJE":
/*!*******************************************************!*\
  !*** ./src/app/store/selectors/students.selectors.ts ***!
  \*******************************************************/
/*! exports provided: getStudentsState, getStudents, getStudentsLoadError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudentsState", function() { return getStudentsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudents", function() { return getStudents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudentsLoadError", function() { return getStudentsLoadError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_students_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/students.state */ "iOlV");


const getStudentsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_students_state__WEBPACK_IMPORTED_MODULE_1__["STUDENTS_FEATURE_KEY"]);
const getStudents = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStudentsState, state => state.students);
const getStudentsLoadError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStudentsState, state => state.studentsLoadError);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map