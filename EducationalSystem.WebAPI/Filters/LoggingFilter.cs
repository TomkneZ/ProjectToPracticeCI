using Microsoft.AspNetCore.Mvc.Filters;
using NLog;
using System;
using System.Diagnostics;

namespace EducationalSystem.WebAPI.Filters
{
    public class LoggingFilter : Attribute, IResourceFilter
    {
        private Logger logger = LogManager.GetCurrentClassLogger();
        Stopwatch watch = new Stopwatch();

        public void OnResourceExecuted(ResourceExecutedContext context)
        {
            watch.Start();
        }

        public void OnResourceExecuting(ResourceExecutingContext context)
        {
            watch.Stop();
            logger.Debug($"Execution of {context.HttpContext.Request.Method} from {context.HttpContext.Request.Path} was {watch.ElapsedMilliseconds}");
        }
    }
}
