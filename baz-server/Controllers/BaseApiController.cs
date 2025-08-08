using baz_server.Models;
using Microsoft.AspNetCore.Mvc;

namespace baz_server.Controllers
{
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BaseApiController : ControllerBase
    {
        protected ActionResult HandleResult<T>(Result<T>? result) =>
            result == null
            ? Forbid()
            : result.Status switch
            {
                Enums.ResponseStatus.Success => Ok(result.Value),
                _ => BadRequest(result.ErrorMessage)
            };
    }
}