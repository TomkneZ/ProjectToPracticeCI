namespace EducationalSystem.WebAPI.ViewModels
{
    public class ActivePersonViewModel : PersonViewModel
    {
        public int Id { get; set; }

        public int SchoolId { get; set; }

        public string SchoolName { get; set; }
    }
}
