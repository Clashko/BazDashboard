using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.Stats;

public sealed class StatsRequestHandler : IRequestHandler<StatsRequestCommand, Result<StatsResponseDto>>
{
    public async Task<Result<StatsResponseDto>> Handle(StatsRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();

        var uniqueVisitors = new StatResponseDto(rnd.NextDouble() + rnd.Next(10, 30), rnd.NextDouble() + rnd.Next(-10, 20));
        var totalPagevies = new StatResponseDto(rnd.NextDouble() + rnd.Next(10, 60), rnd.NextDouble() + rnd.Next(-10, 20));
        var bounceRoute = new StatResponseDto(rnd.NextDouble() + rnd.Next(10, 60), rnd.NextDouble() + rnd.Next(-10, 20));
        var visitDuration = new StatResponseDto(rnd.NextDouble() + rnd.Next(10, 30), rnd.NextDouble() + rnd.Next(-10, 20));

        return Result<StatsResponseDto>.Success(new StatsResponseDto(uniqueVisitors, totalPagevies, bounceRoute, visitDuration));
    }
}