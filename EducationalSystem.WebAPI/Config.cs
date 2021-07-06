namespace EducationalSystem.WebAPI
{
    public class Config
    {
        public static string SmtpHost { get; set; }

        public static int SmtpPort { get; set; }

        public static string ConnectionString { get; set; }

        public static string MailAddress { get; set; }

        public static string MailDisplayName { get; set; }

        public static string ProfessorRole { get; set; }

        public static string UserRole { get; set; }
    }
}
