using DatabaseStructure;
using DatabaseStructure.Models;
using ServiceLayer.ServiceInterfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;

namespace ServiceLayer.Services
{
    public class ProfessorService : IProfessorService
    {
        private readonly DBContext context;

        public ProfessorService(DBContext context)
        {
            this.context = context;
        }

        public void AddProfessor(string firstName, string lastName, string email, string phone, bool isActive)
        {
            var professor = new Professor()
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email,
                Phone = phone,
                IsAccountActive = isActive
            };
            context.Professors.Add(professor);
            context.SaveChanges();
        }

        public Professor GetProfessorById(int professorId)
        {
            return context.Professors.FirstOrDefault(p => p.Id == professorId);
        }

        public void EditProfessor(Professor professor)
        {
            if (professor != null)
            {
                try
                {
                    context.Update(professor);
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

        public List<Course> GetActiveCourses(int professorId) => context.Courses.Where(c => c.ProfessorId == professorId && c.IsActive).ToList();

        public List<Professor> GetActiveProfessors()
        {
            return context.Professors.Where(p => p.IsAccountActive).ToList();
        }
    }
}