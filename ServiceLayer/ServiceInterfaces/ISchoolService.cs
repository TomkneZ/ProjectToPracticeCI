using DatabaseStructure.Models;
using System.Collections.Generic;

namespace ServiceLayer.ServiceInterfaces
{
    public interface ISchoolService
    {
        void AddSchool(string name);

        List<Student> GetActiveStudents(int schoolId);
    }
}