using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;

namespace EducationalSystem.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeaturesController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult Get()
        {
            const string FEATURE_FLAG_ENABLED_VALUE_PATH = "enabled";

            var builder = new ConfigurationBuilder();
            builder.AddAzureAppConfiguration(
                Environment.GetEnvironmentVariable(Constants.FeatureFlagsConnectionString,
                    EnvironmentVariableTarget.Process));
            var config = builder.Build();

            var noAuthFlag = JObject.Parse(config[Constants.NoAuthFeatureFlagPath]);
            var noAuthFlagValue = (string)noAuthFlag[FEATURE_FLAG_ENABLED_VALUE_PATH];

            var featureFlags = new Dictionary<string, bool>()
            {
                [Constants.NoAuthFeatureFlagName] = bool.Parse(noAuthFlagValue)
            };

            return Ok(featureFlags);
        }
    }
}