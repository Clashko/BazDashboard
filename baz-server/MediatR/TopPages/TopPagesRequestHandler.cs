using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.TopPages;

public sealed class TopPagesRequestHandler : IRequestHandler<TopPagesRequestCommand, Result<TopPagesResponseDto>>
{
    public async Task<Result<TopPagesResponseDto>> Handle(TopPagesRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();

        var sources = new List<string>() { "tailadmin.com", "preview.tailadmin.com", "docs.tailadmin.com", "tailadmin.com/components" };

        var result = new List<TopPageResponseDto>();

        var index = 0;
        foreach (var source in sources)
        {
            result.Add(new TopPageResponseDto(index, source, rnd.NextDouble() + rnd.Next(1, 10)));
            index++;
        }

        return Result<TopPagesResponseDto>.Success(new TopPagesResponseDto([.. result.OrderByDescending(e => e.Pageview)]));
    }
}
