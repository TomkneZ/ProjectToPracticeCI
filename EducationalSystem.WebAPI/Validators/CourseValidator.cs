using DatabaseStructure.Models;
using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace EducationalSystem.WebAPI.Validators
{
    public static class CourseValidator
    {
        public static bool IsCourseValid(Course course, ModelStateDictionary modelState)
        {
            if (course.UniqueCode > 999 || course.UniqueCode < 99)
            {
                modelState.AddModelError("course.UniqueCode", "UniqueCode should be from 99 to 999");
            }

            if (course.Name.Length > 6)
            {
                modelState.AddModelError("course.Name", "Name should contain less than 6 letters");
            }
            return modelState.IsValid;
        }
    }
}