using System;
using Microex.Swagger.Application;
using Microex.Swagger.SwaggerGen.Application;
using Microex.Swagger.SwaggerGen.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using server.Entity;
using server.Repository;
using server.Services;

namespace server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = "Server=IP-AC1F567B\\SQLEXPRESS;Database=NewsDB;Integrated Security=True;"; //Environment.GetEnvironmentVariable("NEWSDB");
             //Dependency injection
            if (string.IsNullOrEmpty(connectionString))
                connectionString =  ((ConfigurationSection)(Configuration.GetSection("ConnectionString").GetSection("DefaultConnection"))).Value;
            services.AddDbContext<NewsDbContext>(options => options.UseSqlServer(connectionString));
            
            services.AddCors(cors => cors.AddPolicy("corspolicy", builders => builders.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
            services.AddMvc();
            services.AddScoped<INewsDbContext>(provider => provider.GetService<NewsDbContext>());
           // services.AddScoped<INewsDbContext, NewsDbContext>();
            services.AddScoped<INewsRepository, NewsRepository>();
            services.AddScoped<INewsService, NewsService>();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1.0", new Info { Version = "v1.0", Title = "News API" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
           app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
           

            app.UseSwagger();

            //Enable middleware to serve swagger UI.
            app.UseSwaggerUI(c => {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "News API");
            });

            app.UseCors("corspolicy");
            app.UseMvc();
        }
    }
}
