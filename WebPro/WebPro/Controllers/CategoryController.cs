using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Đồ_án.Models;
namespace Đồ_án.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ILogger<CategoryController> _logger1;

        public CategoryController(ILogger<CategoryController> logger1)
        {
            _logger1 = logger1;
        }

        public IActionResult Phones()
        {
            return View();
        }
    }
}
