using Microsoft.AspNetCore.HttpOverrides;

namespace baz_server.Extensions;

public static class AppExtensions
{
    public static void ConfigureApp(this WebApplication app)
    {
        app.UseForwardedHeaders(new ForwardedHeadersOptions
        {
            ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
        });

        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/BazServer/swagger.json", "Baz server - main");
            c.DefaultModelExpandDepth(-1);
        });

        app.UseRouting();
        app.UseCors("CorsPolicy");
        app.MapControllers();
    }
}