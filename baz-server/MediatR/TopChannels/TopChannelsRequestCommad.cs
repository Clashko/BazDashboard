using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.TopChannels;

public sealed record TopChannelsRequestCommad() : IRequest<Result<TopChannelsResponseDto>>;