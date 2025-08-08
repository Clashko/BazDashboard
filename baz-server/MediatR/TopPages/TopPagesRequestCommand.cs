using baz_server.Dto;
using baz_server.Models;
using MediatR;

namespace baz_server.MediatR.TopPages;

public sealed record TopPagesRequestCommand() : IRequest<Result<TopPagesResponseDto>>;