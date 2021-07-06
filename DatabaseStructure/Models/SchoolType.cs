using System.ComponentModel.DataAnnotations;

namespace DatabaseStructure.Models
{
    public class SchoolType
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
    }
}
