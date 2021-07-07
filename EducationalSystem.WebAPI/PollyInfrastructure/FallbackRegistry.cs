using DatabaseStructure.Models;
using NLog;
using Polly;
using Polly.CircuitBreaker;
using Polly.Fallback;
using Polly.Timeout;
using System.Threading.Tasks;

namespace EducationalSystem.WebAPI.PollyInfrastructure
{
    public static class FallbackRegistry
    {
        private static Logger logger = LogManager.GetCurrentClassLogger();

        public static AsyncFallbackPolicy<Student> GetPolicyAsync()
        {
            Student defaultStudent = new Student
            {
                FirstName = "Default",
                LastName = "Student",
                Email = "defaultstudent@example.com",
                Phone = "123456789",
                IsAccountActive = false
            };

            return Policy<Student>
                .Handle<TimeoutRejectedException>()
                .Or<BrokenCircuitException>()
                .FallbackAsync<Student>(async ct =>
                {
                    return await Task.FromResult(defaultStudent);
                },
                async e =>
                {
                    logger.Debug($"Fallback method used due to: {e}");
                });
        }
    }
}
