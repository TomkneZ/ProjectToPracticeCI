namespace EducationalSystem.WebAPI
{
    public class Constants
    {
        public const string DbConnectionString = "MYSQLCONNSTR_DefaultConnection";

        public const string FeatureFlagsConnectionString = "MYSQLCONNSTR_FeatureFlagsConnection";

        public const string NoAuthFeatureFlagPath = ".appconfig.featureflag/no-auth";

        public const string NoAuthFeatureFlagName = "no-auth";
    }
}