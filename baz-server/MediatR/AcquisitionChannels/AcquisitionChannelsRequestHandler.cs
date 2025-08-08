using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.AcquisitionChannels;

public sealed class AcquisitionChannelsRequestHandler() : IRequestHandler<AcquisitionChannelsRequestCommand, Result<AcquisitionChannelsResponseDto>>
{
    public async Task<Result<AcquisitionChannelsResponseDto>> Handle(AcquisitionChannelsRequestCommand request, CancellationToken cancellationToken)
    {
        await Task.Delay(1000, cancellationToken); //Process simulation;

        var rnd = new Random();

        var values = new List<AcquisitionChannelsMonthResponseDto>();

        for (var i = 0; i < 12; i++)
        {
            values.Add(new AcquisitionChannelsMonthResponseDto(rnd.Next(20, 120), rnd.Next(20, 120), rnd.Next(20, 120), rnd.Next(20, 120)));
        }

        return Result<AcquisitionChannelsResponseDto>.Success(new AcquisitionChannelsResponseDto(values));
    }
}