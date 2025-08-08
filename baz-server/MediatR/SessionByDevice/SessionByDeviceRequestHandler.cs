using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.SessionByDevice;

public sealed class SessionByDeviceRequestHandler : IRequestHandler<SessionByDeviceRequestCommand, Result<SessionByDeviceResponseDto>>
{
    public async Task<Result<SessionByDeviceResponseDto>> Handle(SessionByDeviceRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;
        var rnd = new Random();
        return Result<SessionByDeviceResponseDto>.Success(new SessionByDeviceResponseDto(rnd.Next(40, 60), rnd.Next(50, 70), rnd.Next(15, 30)));
    }
}