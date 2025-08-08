namespace baz_server.Dto;

public record AnalyticsResponseDto(int DaysCount, List<int> SalesCount);