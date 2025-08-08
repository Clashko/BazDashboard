namespace baz_server.Dto;

public record AcquisitionChannelsMonthResponseDto(int Direct, int Referral, int OrganicSearch, int Social);
public record AcquisitionChannelsResponseDto(List<AcquisitionChannelsMonthResponseDto> Values);