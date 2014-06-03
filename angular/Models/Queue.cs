using System.Collections.Generic;

namespace angular.Models
{
    public class Queue
    {
        public int QueueId { get; set; }

        public string Name { get; set; }

        public virtual List<Test> Tests { get; set; }
    }
}