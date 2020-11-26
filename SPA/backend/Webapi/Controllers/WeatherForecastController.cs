using System.Collections.Generic;
using Bogus;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


public class User
{
	public int Age { get; set; }
	public string Name { get; set; }
}

namespace Webapi.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class WeatherForecastController : ControllerBase
	{
		private static readonly string[] Summaries =
		{
			"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		private readonly ILogger<WeatherForecastController> logger;

		public WeatherForecastController(ILogger<WeatherForecastController> logger) => this.logger = logger;

		[HttpGet]
		public IEnumerable<WeatherForecast> Get() =>
			new Faker<WeatherForecast>()
				.RuleFor(i => i.Date, f => f.Date.Soon(20))
				.RuleFor(i => i.TemperatureC, f => f.Random.Number(50))
				.RuleFor(i => i.Summary, f => f.PickRandom(Summaries))
				.Generate(50);


		[HttpGet("betterget")]
		public IEnumerable<WeatherForecast> Get2(User user) =>
				new Faker<WeatherForecast>()
					.RuleFor(i => i.Date, f => f.Date.Soon(20))
					.RuleFor(i => i.TemperatureC, f => f.Random.Number(50))
					.RuleFor(i => i.Summary, f => f.PickRandom(Summaries))
					.Generate(50);
		//var rng = new Random();
		//return Enumerable.Range(1, 30).Select(index => new WeatherForecast
		//	{
		//		Date = DateTime.Now.AddDays(index),
		//		TemperatureC = rng.Next(-20, 55),
		//		Summary = Summaries[rng.Next(Summaries.Length)]
		//	})
		//	.ToArray();
		[HttpGet("temperatures")]
		[EnableCors(Startup.MyAllowSpecificOrigins)]
		public IEnumerable<ForecastTemperature> GetTemperatures() =>
			new Faker<ForecastTemperature>()
				.RuleFor(i => i.Temperature, f => f.Random.Number(50))
				.RuleFor(i => i.Hour, f => f.IndexFaker)
				.Generate(24);
	}
}