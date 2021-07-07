using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Web.Http;

namespace EducationalSystem.WebAPI.Filters
{
    public class AuthorizationFilter : AuthorizeAttribute, IAuthorizationFilter
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
