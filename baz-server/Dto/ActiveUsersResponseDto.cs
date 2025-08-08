namespace baz_server.Dto;

public record ActiveUsersResponseDto(int DailyAverage, int WeeklyAverage, int MonthlyAverage, List<int> VisitorsCount);