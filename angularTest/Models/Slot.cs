using System;
using System.Collections.Generic;

namespace angularTest.Models
{
    public partial class Slot
    {
        public int Id { get; set; }
        public string RoomId { get; set; }
        public string BookedInStudentId { get; set; }
        public string StaffId { get; set; }
        public string StartTime { get; set; }
    }
}
