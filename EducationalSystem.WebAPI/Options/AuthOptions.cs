using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EducationalSystem.WebAPI.Options
{
    public class AuthOptions
    {
        public const string ISSUER = "AuthServer";
        public const string AUDIENCE = "AuthClient";
        const string KEY = "supersecret_secretkey!123";
        public const int LIFETIME = 1;
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
