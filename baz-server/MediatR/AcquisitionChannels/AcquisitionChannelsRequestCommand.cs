using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.AcquisitionChannels;

public sealed record AcquisitionChannelsRequestCommand() : IRequest<Result<AcquisitionChannelsResponseDto>>;