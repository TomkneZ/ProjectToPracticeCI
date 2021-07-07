using DatabaseStructure.AbstractModels;
using System.Collections.Generic;

namespace DatabaseStructure.Models
{
    public class Professor : Person
    {
        public int SchoolId { get; set; }

        public virtual School School { get; set; }

        public ICollection<Course> Courses { get; set; }

        public Professor()
        {
            Courses = new List<Course>();
        }
    }
}
