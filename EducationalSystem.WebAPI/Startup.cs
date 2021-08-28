using AutoMapper;
using DatabaseStructure;
using System.Configuration;
using EducationalSystem.WebAPI.Habs;
using EducationalSystem.WebAPI.Options;
using EducationalSystem.WebAPI.Profiles;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using ServiceLayer.ServiceInterfaces;
using ServiceLayer.Services;
using System.Threading.Tasks;

namespace EducationalSystem.WebAPI
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            Configuration.Bind(new Config());

            //var connectionString = Configuration.GetSection("DefaultConnection").Value;
            var key = "MYSQLCONNSTR_DefaultConnection";
            var connectionString = ConfigurationManager.ConnectionStrings[key].ConnectionString;

            services.AddDbContext<DBContext>(options => options.UseSqlServer(connectionString));

            services.AddCors();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.RequireHttpsMetadata = false;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidIssuer = AuthOptions.ISSUER,
                            ValidateAudience = true,
                            ValidAudience = AuthOptions.AUDIENCE,
                            ValidateLifetime = true,
                            IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
                            ValidateIssuerSigningKey = true,
                        };
                        options.Events = new JwtBearerEvents
                        {
                            OnMessageReceived = context =>
                            {
                                var accessToken = context.Request.Query["access_token"];

                                var path = context.HttpContext.Request.Path;
                                if (!string.IsNullOrEmpty(accessToken) &&
                                    (path.StartsWithSegments("/loginhub")))
                                {
                                    context.Token = accessToken;
                                }
                                return Task.CompletedTask;
                            }
                        };
                    });

            services.AddControllers();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new ActivePersonProfile());
                mc.AddProfile(new PersonProfile());
                mc.AddProfile(new ActiveProfessorCoursesProfile());
                mc.AddProfile(new CreateCourseProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddTransient<ICourseService, CourseService>();
            services.AddTransient<IProfessorService, ProfessorService>();
            services.AddTransient<ISchoolService, SchoolService>();
            services.AddTransient<IStudentService, StudentService>();

            services.AddSignalR();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseDeveloperExceptionPage();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors(builder => builder.WithOrigins("https://educationalsystemfront.azurewebsites.net")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
                            .AllowCredentials()
                        );

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<LoginHub>("/loginhub");
            });
        }
    }
}