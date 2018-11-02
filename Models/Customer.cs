using System;
using System.Collections.Generic;

namespace Test.Models
{
    public partial class Customer
    {
        public string CustId { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public short? CusType { get; set; }
        public string initialCode { get; set; }
    }
}
