export interface TopPageResponseDto {
  id: number;
  source: string;
  pageview: number;
}

export interface TopPagesResponseDto {
  values: TopPageResponseDto[];
}
