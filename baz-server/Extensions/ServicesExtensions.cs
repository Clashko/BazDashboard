using Microsoft.OpenApi.Models;

namespace baz_server.Extensions;

public static class ServicesExtensions
{
    public static void ConfigureServices(this IServiceCollection services)
    {
        services.AddControllers();
        services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(typeof(Program).Assembly));
        services.AddEndpointsApiExplorer();
        services.AddSwaggerDoc();
        services.AddCors(opt => opt.AddPolicy("CorsPolicy", policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));
    }

    public static void AddSwaggerDoc(this IServiceCollection services) =>
        services.AddSwaggerGen(opt =>
        {
            opt.CustomSchemaIds(type => type.ToString());
            opt.SwaggerDoc("BazServer", new OpenApiInfo
            {
                Title = "BAZ Server",
                Version = "v1",
                Description = "BAZ Server Emulator"
            });
        });
}