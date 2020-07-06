using System.ComponentModel.DataAnnotations;

namespace rest.server._02.dotnetcore.Models.DTO
{
    public class PersonDTO
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string Name { get; set; }

        [Required]
        public int Age { get; set; }

        public string Sex { get; set; }
    }
}