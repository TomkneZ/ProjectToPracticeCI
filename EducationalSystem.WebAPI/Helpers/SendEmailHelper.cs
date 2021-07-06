using System.IO;
using System.Net.Mail;

namespace EducationalSystem.WebAPI.Helpers
{
    public static class SendEmailHelper
    {
        private static string CreateEmailBody(string firstName, string lastName)
        {
            string body = string.Empty;
            using (StreamReader reader = new StreamReader("Templates/ActivationMessageTemplate.html"))
            {
                body = reader.ReadToEnd();
            }
            body = body.Replace("{firstName}", firstName);
            body = body.Replace("{lastname}", lastName);
            return body;
        }

        public static void SendActivationMessage(string firstName, string lastName, string email)
        {
            const string subject = "Activate your account";
            SmtpClient smtpClient = new SmtpClient(Config.SmtpHost, Config.SmtpPort);
            MailAddress from = new MailAddress(Config.MailAddress, Config.MailDisplayName);
            MailAddress to = new MailAddress(email);
            MailMessage m = new MailMessage(from, to);
            m.Subject = subject;
            m.IsBodyHtml = true;
            m.Body = CreateEmailBody(firstName, lastName);
            smtpClient.Send(m);
        }
    }
}
