using Microsoft.AspNetCore.Mvc;

namespace Đồ_án.Controllers
{
    public class LaptopController : Controller
    {
        public IActionResult Laptops()
        {
            return View();
        }
    }
}
