using DatabaseStructure.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace EducationalSystem.WebAPI.Validators
{
    public static class StudentValidator
    {
        public static bool IsStudentValid(Student student, ModelStateDictionary modelState)
        {
            if (student.Phone.Length != 9)
            {
                modelState.AddModelError("student.Phone", "Phone should consist of 9 digits");
            }
            return modelState.IsValid;
        }
    }
}
