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
    
    public partial class AdminUser
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AdminUser()
        {
            this.THƯƠNG_HIỆU = new HashSet<THƯƠNG_HIỆU>();
        }
    
        public string Mã_User { get; set; }
        public string Vai_trò { get; set; }
        public string Phone_Email { get; set; }
        public string Mật_khẩu { get; set; }
        public System.DateTime Ngày_tham_gia { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<THƯƠNG_HIỆU> THƯƠNG_HIỆU { get; set; }
    }
}