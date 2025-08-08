using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.SessionByDevice;

public sealed record SessionByDeviceRequestCommand() : IRequest<Result<SessionByDeviceResponseDto>>;