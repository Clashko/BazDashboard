namespace baz_server.Dto;

public record TopChannelResponseDto(int Id, string Source, double Visitors);
public record TopChannelsResponseDto(List<TopChannelResponseDto> Values);