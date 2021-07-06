using DatabaseStructure.AbstractModels;
using System.Collections.Generic;

namespace DatabaseStructure.Models
{
    public class Student : Person
    {
        public int? SchoolId { get; set; }

        public virtual School School { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }

        public Student()
        {
            StudentCourses = new List<StudentCourse>();
        }
    }
}
