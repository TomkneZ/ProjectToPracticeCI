using System.ComponentModel.DataAnnotations;

namespace DatabaseStructure.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Login { get; set; }

        [Required]
        public string Hash { get; set; }

        [Required]
        public string Salt { get; set; }

        [Required]
        public int RoleId { get; set; }

        public Role Role { get; set; }
    }
}
