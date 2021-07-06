using DatabaseStructure;
using DatabaseStructure.Models;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace ServiceLayer.Services
{
    public class CourseService : ICourseService
    {
        private readonly DBContext context;

        public CourseService(DBContext context)
        {
            this.context = context;
        }

        public void AddCourse(Course course)
        {
            if (course != null)
            {
                try
                {
                    context.Courses.Add(course);
                    context.SaveChanges();
                }
                catch
                {
                    throw new DbUpdateException();
                }
            }
            else
            {
                throw new ArgumentNullException();
            }
        }

        public void AddStudent(int courseCode, int studentId)
        {
            var student = context.Students.FirstOrDefault(s => s.Id == studentId);
            var course = context.Courses.FirstOrDefault(c => c.UniqueCode == courseCode);
            if (student == null || course == null)
            {
                throw new ArgumentNullException();
            }
            else
            {
                try
                {
                    student.StudentCourses.Add(new StudentCourse { CourseId = course.Id, StudentId = student.Id });
                    context.SaveChanges();
                }
                catch
                {
                    throw new DbUpdateException();
                }
            }
        }

        public void DeleteStudent(int courseId, int studentId)
        {
            var studentCourse = context.StudentCourses.FirstOrDefault(row => row.StudentId == studentId && row.CourseId == courseId);
            if (studentCourse != null)
            {
                try
                {
                    context.Remove(studentCourse);
                    context.SaveChanges();
                }
                catch
                {
                    throw new DbUpdateException();
                }
            }
            else
            {
                throw new ArgumentNullException();
            }
        }

        public bool IsCodeUnique(int uniqueCode)
        {
            try { var courses = context.Courses.Single(x => x.UniqueCode == uniqueCode); }
            catch { return false; }
            return true;
        }

        public List<Course> GetActiveCourses() => context.Courses.Where(c => c.IsActive).ToList();
    }
}