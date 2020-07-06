using System;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using rest.server._02.dotnetcore.Models.DAO;
using rest.server._02.dotnetcore.Models.Mock;
using rest.server._02.dotnetcore.Models.Repository;

namespace rest.server._02.dotnetcore.Services
{
    public static class StartupDataModel
    {
        public static string _contentRootPath;
        public static void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            _contentRootPath = env.ContentRootPath;
        }

        public static void ConfigureServices(IServiceCollection services, IConfiguration Configuration)
        {
            //... set Application Database Context as a service
            string conn = Configuration.GetConnectionString("SqliteConnection");
            if (conn.Contains("%ROOTPATH%"))
            {
                conn = conn.Replace("%ROOTPATH%", System.IO.Directory.GetCurrentDirectory());
            }
            services.AddDbContext<PersonContext>(options => options.UseSqlite(conn));
            //services.AddDbContext<PersonContext>(options => options.UseSqlServer(Configuration.GetConnectionString("SqliteConnection"));

            //... set Repository
            //services.AddScoped<IPersonRepository, MockPersonRepository>();
            services.AddScoped<IPersonRepository, PersonRepository>();

            //... set mapper between models and DTO
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
        }
    }
}