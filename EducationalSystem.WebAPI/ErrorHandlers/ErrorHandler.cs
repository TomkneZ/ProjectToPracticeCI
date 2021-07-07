using EducationalSystem.WebAPI.Exceptions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Data.Entity.Infrastructure;

namespace EducationalSystem.WebAPI.ErrorHandlers
{
    public static class ErrorHandler
    {
        public static ActionResult ExecuteAndHandleErrors<T>(this ControllerBase controller, T param1, T param2, Action<T, T> func)
        {
            try
            {
                func(param1, param2);
                return controller.Ok();
            }
            catch (ArgumentNullException exception)
            {
                return HandleForArgumentNullException(controller, exception);
            }
            catch (DbUpdateException exception)
            {
                return HandleForDbUpdateException(controller, exception);
            }
        }

        public static ActionResult ExecuteAndHandleErrors<T, TResult>(this ControllerBase controller, T param, Func<T, TResult> func)
        {
            try
            {
                var retValue = func(param);
                return controller.Ok(retValue);
            }
            catch (ArgumentNullException exception)
            {
                return HandleForArgumentNullException(controller, exception);
            }
            catch (DbUpdateException exception)
            {
                return HandleForDbUpdateException(controller, exception);
            }
            catch (InvalidModelStateException exception)
            {
                return HandleForInvalidModelStateException(controller, exception);
            }
        }

        public static ActionResult ExecuteAndHandleErrors<T>(this ControllerBase controller, Func<T> func)
        {
            try
            {
                var retValue = func();
                return controller.Ok(retValue);
            }
            catch (ArgumentNullException exception)
            {
                return HandleForArgumentNullException(controller, exception);
            }
            catch (DbUpdateException exception)
            {
                return HandleForDbUpdateException(controller, exception);
            }
        }

        private static ActionResult HandleForInvalidModelStateException(ControllerBase controller, InvalidModelStateException exception)
        {
            return controller.UnprocessableEntity(exception.Message);
        }

        private static ActionResult HandleForArgumentNullException(ControllerBase controller, ArgumentNullException exception)
        {
            return controller.NotFound(exception.Message);
        }

        private static ActionResult HandleForDbUpdateException(ControllerBase controller, DbUpdateException exception)
        {
            return controller.BadRequest(exception.Message);
        }
    }
}
