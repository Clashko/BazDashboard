using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.Stats;

public sealed record class StatsRequestCommand() : IRequest<Result<StatsResponseDto>>;