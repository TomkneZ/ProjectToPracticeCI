using DatabaseStructure.Models;
using System.Collections.Generic;

namespace ServiceLayer.ServiceInterfaces
{
    public interface ICourseService
    {
        void AddCourse(Course course);

        bool IsCodeUnique(int uniqueCode);

        void AddStudent(int courseCode, int studentId);

        void DeleteStudent(int courseId, int studentId);

        List<Course> GetActiveCourses();
    }
}
