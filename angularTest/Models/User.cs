using System;
using System.Collections.Generic;

namespace angularTest.Models
{
    public partial class User
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PassWord { get; set; }
    }
}
