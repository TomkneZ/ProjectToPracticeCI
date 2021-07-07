using DatabaseStructure;
using DatabaseStructure.Models;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace ServiceLayer.Services
{
    public class StudentService : IStudentService
    {
        private readonly DBContext context;

        public StudentService(DBContext context)
        {
            this.context = context;
        }

        public Student ActivateStudent(int studentId)
        {
            var student = context.Students.FirstOrDefault(s => s.Id == studentId);
            if (student != null)
            {
                student.IsAccountActive = true;
                context.SaveChanges();
                return student;
            }
            throw new ArgumentNullException();
        }

        public void AddStudent(Student student)
        {
            if (student != null)
            {
                try
                {
                    context.Students.Add(student);
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

        public List<Student> GetActiveStudents()
        {
            return context.Students.Where(s => s.IsAccountActive).ToList();
        }

        public Student GetStudentByEmail(string email) => context.Students.FirstOrDefault(s => s.Email == email);

        public Student GetRandomStudent()
        {
            var studentId = new Random().Next(0, 10);
            if (studentId % 2 == 0)
            {
                throw new Exception("Random student id exception");
            }
            else
            {
                return context.Students.FirstOrDefault(s => s.Id == studentId);
            }
        }
    }
}