namespace baz_server.Dto;

public record TopPageResponseDto(int Id, string Source, double Pageview);
public record TopPagesResponseDto(List<TopPageResponseDto> Values);