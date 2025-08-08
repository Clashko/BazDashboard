using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.ActiveUsers;

public sealed class ActiveUsersRequestHandler() : IRequestHandler<ActiveUsersRequestCommand, Result<ActiveUsersResponseDto>>
{
    public async Task<Result<ActiveUsersResponseDto>> Handle(ActiveUsersRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();
        var visitorsCount = new List<int>();

        for (var i = 0; i < 12; i++)
        {
            visitorsCount.Add(rnd.Next(90, 500));
        }

        var dailyAverage = visitorsCount.Sum() / 365;
        var weeklyAverage = visitorsCount.Sum() / 12 / 4;
        var monthlyAverage = visitorsCount.Sum() / 12;

        return Result<ActiveUsersResponseDto>.Success(new ActiveUsersResponseDto(dailyAverage, weeklyAverage, monthlyAverage, visitorsCount));
    }
}
