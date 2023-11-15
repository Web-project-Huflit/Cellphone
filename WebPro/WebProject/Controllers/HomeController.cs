using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebProject.Models;
using System.Data.Entity;

namespace WebProject.Controllers
{
    public class HomeController : Controller
    {
        private BanHangEntities db=new BanHangEntities();
        public ActionResult TrangChu()
        {
            var SP = db.SẢN_PHẨM.Include(b => b.CTSPs);
            return View();
        }

        public ActionResult GioHang()
        {
            return View();
        }

        public ActionResult TaiKhoan()
        {
            return View();
        }

        public ActionResult GiaoHang() {
            return View();
        }
    }
}