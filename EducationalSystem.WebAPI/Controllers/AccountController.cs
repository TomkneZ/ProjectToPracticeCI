using DatabaseStructure;
using EducationalSystem.WebAPI.Filters;
using EducationalSystem.WebAPI.Helper;
using EducationalSystem.WebAPI.Options;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;

namespace EducationalSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [LoggingFilter]
    public class AccountController : ControllerBase
    {
        private readonly DBContext context;

        public AccountController(DBContext dbcontext)
        {
            this.context = dbcontext;
        }

        [Authorize]
        [HttpGet("{action}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult GetLogin() => Ok($"{User.Identity.Name}");

        [HttpPost("{action}/{username}/{password}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Token(string username, string password)
        {
            var identity = GetIdentity(username, password);
            if (identity == null)
            {
                return NotFound(new { errorText = "Invalid username or password." });
            }
            else
            {
                var now = DateTime.UtcNow;
                var jwt = new JwtSecurityToken(
                        issuer: AuthOptions.ISSUER,
                        audience: AuthOptions.AUDIENCE,
                        notBefore: now,
                        claims: identity.Claims,
                        expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                        signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                var response = new
                {
                    access_token = encodedJwt,
                    username = identity.Name,
                    role = identity.FindFirst(ClaimsIdentity.DefaultRoleClaimType).Value
                };
                return Ok(response);
            }
        }

        private ClaimsIdentity GetIdentity(string username, string password)
        {
            var user = context.Users.FirstOrDefault(x => x.Login == username);
            if (user == null)
            {
                return null;
            }
            else
            {
                var hashed = AccountHelper.GetHash(user.Salt, password);
                if (hashed == user.Hash)
                {
                    var claims = new List<Claim>
                    {
                        new Claim(ClaimsIdentity.DefaultNameClaimType, user.Login),
                        new Claim(ClaimsIdentity.DefaultRoleClaimType, user.RoleId.ToString())
                    };
                    ClaimsIdentity claimsIdentity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
                    return claimsIdentity;
                }
                return null;
            }
        }
    }
}
