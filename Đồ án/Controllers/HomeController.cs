using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Đồ_án.Models;

namespace Đồ_án.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult SpaceMobile()
    {
        return View();
    }

    public IActionResult Cart()
    {
        return View();
    }

    public IActionResult Login()
    {
        return View();
    }

    public IActionResult Ship()
    {
        return View();
    }
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
