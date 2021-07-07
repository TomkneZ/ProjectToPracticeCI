using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DatabaseStructure.Models
{
    public class Course
    {
        public int Id { get; set; }

        [Required]
        [StringLength(6)]
        public string Name { get; set; }

        [Required]
        [Range(100, 999)]
        public int UniqueCode { get; set; }

        public bool IsActive { get; set; }

        public int? ProfessorId { get; set; }

        public virtual Professor Professor { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }

        public Course()
        {
            StudentCourses = new List<StudentCourse>();
        }
    }
}
