using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DatabaseStructure.Models
{
    public class School
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public bool IsActive { get; set; }

        public ICollection<Student> Students { get; set; }

        public ICollection<Professor> Professors { get; set; }

        public School()
        {
            Students = new List<Student>();
            Professors = new List<Professor>();
        }
    }
}
