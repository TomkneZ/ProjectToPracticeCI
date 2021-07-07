using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System;
using System.Text;

namespace EducationalSystem.WebAPI.Helper
{
    public static class AccountHelper
    {
        public static string GetHash(string salt, string password)
        {
            const int iterationCount = 10;
            const int keyLength = 32;
            return Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password,
            salt: Encoding.Default.GetBytes(salt),
            prf: KeyDerivationPrf.HMACSHA1,
            iterationCount: iterationCount,
            numBytesRequested: keyLength));
        }
    }
}
