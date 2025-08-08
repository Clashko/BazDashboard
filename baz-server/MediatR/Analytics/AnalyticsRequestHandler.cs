using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.Analytics;

public sealed class AnalyticsRequestHandler() : IRequestHandler<AnalyticsRequestCommand, Result<AnalyticsResponseDto>>
{
    public async Task<Result<AnalyticsResponseDto>> Handle(AnalyticsRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();
        var daysCount = rnd.Next(30, 31);
        var salesCount = new List<int>();

        for (var i = 0; i < daysCount; i++)
        {
            salesCount.Add(rnd.Next(90, 500));
        }

        return Result<AnalyticsResponseDto>.Success(new AnalyticsResponseDto(daysCount, salesCount));
    }
}