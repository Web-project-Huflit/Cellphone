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
    
    public partial class CTGH
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CTGH()
        {
            this.Đơn_hàng = new HashSet<Đơn_hàng>();
            this.Nhận_tại_của_hàng = new HashSet<Nhận_tại_của_hàng>();
            this.Nhận_tận_nơi = new HashSet<Nhận_tận_nơi>();
        }
    
        public string Họ_tên { get; set; }
        public string Email { get; set; }
        public double Tổng_tiền { get; set; }
        public string Mã_nhận_hàng { get; set; }
        public string Mã_giỏ { get; set; }
    
        public virtual Giỏ_hàng Giỏ_hàng { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Đơn_hàng> Đơn_hàng { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nhận_tại_của_hàng> Nhận_tại_của_hàng { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Nhận_tận_nơi> Nhận_tận_nơi { get; set; }
    }
}