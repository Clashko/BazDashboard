export interface StatResponseDto {
  value: number;
  percentage: number;
}

export interface StatsResponseDto {
  uniqueVisitors: StatResponseDto;
  totalPageviews: StatResponseDto;
  bounceRoute: StatResponseDto;
  visitDuration: StatResponseDto;
}
