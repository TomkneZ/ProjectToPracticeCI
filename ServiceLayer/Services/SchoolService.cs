using DatabaseStructure;
using DatabaseStructure.Models;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace ServiceLayer.Services
{
    public class SchoolService : ISchoolService
    {
        private readonly DBContext context;

        public SchoolService(DBContext context)
        {
            this.context = context;
        }

        public void AddSchool(string name)
        {
            if (name != null)
            {
                var school = new School()
                {
                    Name = name
                };
                try
                {
                    context.Schools.Add(school);
                    context.SaveChanges();
                }
                catch
                {
                    throw new DbUpdateException();
                }
            }
            else
            {
                throw new ArgumentNullException();
            }
        }

        public List<Student> GetActiveStudents(int schoolId) => context.Students.Where(s => s.SchoolId == schoolId && s.IsAccountActive).ToList();
    }
}