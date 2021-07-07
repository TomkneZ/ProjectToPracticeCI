using System;

namespace EducationalSystem.WebAPI.Exceptions
{
    public class InvalidModelStateException : Exception
    {
        public InvalidModelStateException(string message) : base(message) { }
    }
}
