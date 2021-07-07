using NLog;
using Polly;
using System;

namespace EducationalSystem.WebAPI.PollyInfrastructure
{
    public static class CircuitBreakerRegistry
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public static IAsyncPolicy GetPolicyAsync(int exceptionsAllowed, int brokenTimeSeconds)
        {
            Action<Exception, TimeSpan> onBreak = (exception, timespan) =>
            {
                logger.Debug($"{DateTime.Now} circuit broken .. ! ");
            };
            Action onReset = () =>
            {
                logger.Debug($"{DateTime.Now} circuit reset .. ! ");
            };
            return Policy
                    .Handle<Exception>()
                    .CircuitBreakerAsync(exceptionsAllowed, TimeSpan.FromSeconds(brokenTimeSeconds), onBreak, onReset);
        }
    }
}
