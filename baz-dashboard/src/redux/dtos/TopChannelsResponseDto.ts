export interface TopChannelResponseDto {
  id: number;
  source: string;
  visitors: number;
}

export interface TopChannelsResponseDto {
  values: TopChannelResponseDto[];
}
