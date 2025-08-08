export interface AcquisitionChannelsMonthResponseDto {
  direct: number;
  referral: number;
  organicSearch: number;
  social: number;
}

export interface AcquisitionChannelsResponseDto {
  values: AcquisitionChannelsMonthResponseDto[];
}
