using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.TopChannels;

public sealed class TopChannelsRequestHandler() : IRequestHandler<TopChannelsRequestCommad, Result<TopChannelsResponseDto>>
{
    public async Task<Result<TopChannelsResponseDto>> Handle(TopChannelsRequestCommad request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();

        var sources = new List<string>() { "Google", "Facebook", "Threads", "Yandex" };

        var result = new List<TopChannelResponseDto>();

        var index = 0;
        foreach (var source in sources)
        {
            result.Add(new TopChannelResponseDto(index, source, rnd.NextDouble() + rnd.Next(1, 10)));
            index++;
        }

        return Result<TopChannelsResponseDto>.Success(new TopChannelsResponseDto([.. result.OrderByDescending(e => e.Visitors)]));
    }
}