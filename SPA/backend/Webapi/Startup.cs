﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Webapi
{
	public class Startup
	{
		public const string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

		public Startup(IConfiguration configuration) => Configuration = configuration;

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddCors(options =>
			{
				// options.AddDefaultPolicy(builder => builder.AllowAnyOrigin());
				options.AddDefaultPolicy(builder => builder.WithOrigins("https://www.google.com"));
				// // options.AddPolicy(name: MyAllowSpecificOrigins, builder => builder.WithOrigins("http://localhost:8081"));
				options.AddPolicy(name: MyAllowSpecificOrigins, builder => builder.WithOrigins("http://localhost:8000"));
			});
			services.AddControllers();
			services.AddSwaggerGen();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			app.UseSwagger();
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1"));


			app.UseHttpsRedirection();

			app.UseRouting();

			app.UseCors();
			app.UseAuthorization();

			app.UseEndpoints(endpoints => endpoints.MapControllers());
		}
	}
}