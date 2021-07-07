using DatabaseStructure.Models;
using EducationalSystem.WebAPI.ViewModels;
using System.Collections.Generic;

namespace EducationalSystem.Test
{
    public static class Mocks
    {
        public static readonly List<Course> Courses = new List<Course>
        {
            new Course {
                Id = 1,
                Name = "OZI",
                UniqueCode = 856,
                ProfessorId = 9
            }
        };

        public static readonly List<ActiveProfessorCoursesViewModel> ProfessorActiveCourses = new List<ActiveProfessorCoursesViewModel>
        {
            new ActiveProfessorCoursesViewModel {
                Name = "OZI",
                UniqueCode = "856"
            }
        };

        public static readonly CreateCourseViewModel CourseViewModel = new CreateCourseViewModel
        {
            Name = "OZI",
            ProfessorName = "Ivanov Ivan",
            SchoolName = "No 1"
        };

        public static readonly Course Course = new Course
        {
            Name = "OZI",
            UniqueCode = 856,
            ProfessorId = 9
        };

        public static readonly Course CourseWithInvalidProfessorId = new Course
        {
            Name = "OZI",
            UniqueCode = 856,
            ProfessorId = 999
        };

        public static readonly Course InvalidCourse = new Course
        {
            Id = 1,
            Name = "OZI",
            UniqueCode = 8,
            ProfessorId = 9
        };

        public static readonly List<Professor> Professors = new List<Professor>
        {
            new Professor {
                    Id = 8,
                    FirstName = "Ivan",
                    LastName = "Ivanov",
                    Email = "ivanov@example.com"
            }
        };

        public static readonly ActivePersonViewModel ProfessorViewModel = new ActivePersonViewModel
        {
            Id = 9,
            SchoolId = 1,
            SchoolName = "No 1",
            Name = "Ivan Ivanov",
            Email = "ivanov@example.com",
            Phone = "+1234567890123"
        };

        public static readonly List<ActivePersonViewModel> ProfessorsViewModel = new List<ActivePersonViewModel>
        {
            new ActivePersonViewModel
            {
                Id = 9,
                SchoolId = 1,
                SchoolName = "No 1",
                Name = "Ivan Ivanov",
                Email = "ivanov@example.com",
                Phone = "+1234567890123"
            }
        };

        public static readonly Professor Professor = new Professor
        {
            Id = 9,
            FirstName = "Ivan",
            LastName = "Ivanov",
            Email = "ivanov@example.com"
        };

        public static readonly Professor InvalidProfessor = new Professor
        {
            Id = 0,
            FirstName = "Ivan",
            LastName = "Ivanov",
            Email = "ivanov@example.com"
        };

        public static readonly List<Student> Students = new List<Student>
        {
            new Student
            {
                Id = 1,
                FirstName = "Alla",
                LastName = "Sin",
                Email = "allasin@example.com",
                SchoolId = 1
            }
        };

        public static readonly Student Student = new Student
        {
            FirstName = "Alla",
            LastName = "Sin",
            Email = "allasin@example.com",
            Phone = "123456789",
            IsAccountActive = false
        };

        public static readonly Student InvalidStudent = new Student
        {
            Id = 1,
            FirstName = "Alla",
            LastName = "Sin",
            Email = "allasin@example.com",
            Phone = "0",
            IsAccountActive = false
        };

        public static readonly Student StudentWithInvalidSchoolId = new Student
        {
            Id = 1,
            FirstName = "Alla",
            LastName = "Sin",
            Email = "allasin@example.com",
            Phone = "123456789",
            IsAccountActive = true,
            SchoolId = 0
        };

        public static readonly Student ActivatedStudent = new Student
        {
            Id = 1,
            FirstName = "Alla",
            LastName = "Sin",
            Email = "allasin@example.com",
            Phone = "123456789",
            IsAccountActive = true
        };

        public static readonly List<ActivePersonViewModel> StudentsViewModel = new List<ActivePersonViewModel>
        {
            new ActivePersonViewModel
            {
                Id = 1,
                SchoolId = 1,
                SchoolName = "No 1",
                Name = "Alla Sin",
                Email = "allasin@example.com",
                Phone = "123456789"
            }
        };

        public static readonly ActivePersonViewModel StudentViewModel = new ActivePersonViewModel
        {
            Id = 9,
            SchoolId = 1,
            SchoolName = "No 1",
            Name = "Alla Sin",
            Email = "allasin@example.com",
            Phone = "123456789"
        };
    }
}
