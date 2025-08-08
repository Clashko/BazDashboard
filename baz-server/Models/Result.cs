using baz_server.Enums;

namespace baz_server.Models;

public class Result<T>
{
    public ResponseStatus Status { get; set; }
    public T? Value { get; set; }
    public string? ErrorMessage { get; set; }

    public static Result<T> Success(T value) => new() { Status = ResponseStatus.Success, Value = value };
    public static Result<T> Failure(string errorMessage) => new() { Status = ResponseStatus.BadRequest, ErrorMessage = errorMessage };
}