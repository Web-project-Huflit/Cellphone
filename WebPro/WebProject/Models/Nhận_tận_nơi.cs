//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebProject.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Nhận_tận_nơi
    {
        public string Tỉnh_thành { get; set; }
        public string Quận_huyện { get; set; }
        public string Địa_chỉ { get; set; }
        public string Ghi_chú { get; set; }
        public string Mã_nhận_hàng { get; set; }
    
        public virtual CTGH CTGH { get; set; }
    }
}
