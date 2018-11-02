using System;
using System.Collections.Generic;

namespace Test.Models
{
    public partial class Product
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Price { get; set; }
        public int? UnitPerPrice { get; set; }
        public int? Qty { get; set; }
        public short? Status { get; set; }
        public string UnitCode { get; set; }
        public string CateName { get; set; }
    }
}
