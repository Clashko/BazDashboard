namespace baz_server.Dto;

public sealed record StatResponseDto(double Value, double Percentage);
public sealed record StatsResponseDto(StatResponseDto UniqueVisitors, StatResponseDto TotalPageviews, StatResponseDto BounceRoute, StatResponseDto VisitDuration);