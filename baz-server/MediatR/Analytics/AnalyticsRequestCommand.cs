using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.Analytics;

public sealed record AnalyticsRequestCommand() : IRequest<Result<AnalyticsResponseDto>>;