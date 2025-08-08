using baz_server.Dto;
using baz_server.MediatR.AcquisitionChannels;
using baz_server.MediatR.ActiveUsers;
using baz_server.MediatR.Analytics;
using baz_server.MediatR.SessionByDevice;
using baz_server.MediatR.Stats;
using baz_server.MediatR.TopChannels;
using baz_server.MediatR.TopPages;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace baz_server.Controllers
{
    public class DashboardController(IMediator mediator) : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<StatsResponseDto>> Statistic() =>
            HandleResult(await mediator.Send(new StatsRequestCommand()));

        [HttpGet]
        public async Task<ActionResult<AnalyticsResponseDto>> Analytics() =>
            HandleResult(await mediator.Send(new AnalyticsRequestCommand()));

        [HttpGet]
        public async Task<ActionResult<TopChannelsResponseDto>> TopChannels() =>
            HandleResult(await mediator.Send(new TopChannelsRequestCommad()));

        [HttpGet]
        public async Task<ActionResult<TopPagesResponseDto>> TopPages() =>
            HandleResult(await mediator.Send(new TopPagesRequestCommand()));

        [HttpGet]
        public async Task<ActionResult<ActiveUsersResponseDto>> ActiveUsers() =>
            HandleResult(await mediator.Send(new ActiveUsersRequestCommand()));

        [HttpGet]
        public async Task<ActionResult<AcquisitionChannelsResponseDto>> AcquisitionChannels() =>
            HandleResult(await mediator.Send(new AcquisitionChannelsRequestCommand()));

        [HttpGet]
        public async Task<ActionResult<SessionByDeviceResponseDto>> SessionsByDevice() =>
            HandleResult(await mediator.Send(new SessionByDeviceRequestCommand()));
    }
}