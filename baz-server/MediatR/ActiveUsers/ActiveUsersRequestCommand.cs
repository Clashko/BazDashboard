using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.ActiveUsers;

public sealed record ActiveUsersRequestCommand() : IRequest<Result<ActiveUsersResponseDto>>;