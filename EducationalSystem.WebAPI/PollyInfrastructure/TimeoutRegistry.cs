using Polly;
using Polly.Timeout;
using System;

namespace EducationalSystem.WebAPI.PollyInfrastructure
{
    public static class TimeoutRegistry
    {
        public static IAsyncPolicy GetPolicyAsync(TimeSpan timeout)
        {
            return Policy.TimeoutAsync(
                timeout,
                TimeoutStrategy.Pessimistic);
        }
    }
}
