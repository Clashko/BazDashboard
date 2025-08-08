using baz_server.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.Services.ConfigureServices();
var app = builder.Build();
app.ConfigureApp();
app.Run();
