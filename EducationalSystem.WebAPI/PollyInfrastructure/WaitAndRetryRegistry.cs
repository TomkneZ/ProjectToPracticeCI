using NLog;
using Polly;
using System;

namespace EducationalSystem.WebAPI.PollyInfrastructure
{
    public static class WaitAndRetryRegistry
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public static IAsyncPolicy GetPolicyAsync(int retryCount, int incrementalCount)
        {
            return Policy
                    .Handle<Exception>()
                    .WaitAndRetryAsync(retryCount, retryAttempt =>
                    {
                        var timeToWait = TimeSpan.FromSeconds(retryAttempt * incrementalCount);
                        logger.Debug($"Waiting {timeToWait.TotalSeconds} seconds..");
                        return timeToWait;
                    },
                    onRetry: (exception, pollyRetryCount, context) =>
                    {
                        logger.Debug($"An exception occured at {exception.Source} with message {exception.Message}");
                    });
        }
    }
}
