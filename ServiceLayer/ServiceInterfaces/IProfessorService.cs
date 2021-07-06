using DatabaseStructure.Models;
using System.Collections.Generic;

namespace ServiceLayer.ServiceInterfaces
{
    public interface IProfessorService
    {
        void AddProfessor(string firstName, string lastName, string email, string phone, bool isActive);

        List<Professor> GetActiveProfessors();

        void EditProfessor(Professor professor);

        Professor GetProfessorById(int professorId);

        List<Course> GetActiveCourses(int professorId);
    }
}