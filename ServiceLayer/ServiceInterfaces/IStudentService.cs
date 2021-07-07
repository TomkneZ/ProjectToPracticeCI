using DatabaseStructure.Models;
using System.Collections.Generic;

namespace ServiceLayer.ServiceInterfaces
{
    public interface IStudentService
    {
        void AddStudent(Student student);

        Student ActivateStudent(int studentId);

        List<Student> GetActiveStudents();

        Student GetStudentByEmail(string email);

        Student GetRandomStudent();
    }
}