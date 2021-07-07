using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

namespace EducationalSystem.WebAPI.Filters
{
    public class AuthorizationFilter : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            if (filterContext.HttpContext.Request.Headers["userRole"] != Config.ProfessorRole)
            {
                filterContext.Result = new ContentResult { Content = "Allowed only for professors!" };
            }
        }
    }
}
