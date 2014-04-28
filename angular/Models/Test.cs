using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular.Models
{
    public class Test
    {
        public int TestId { get; set; }

        [Required, MaxLength(20)]
        public string Title { get; set; }

        [ForeignKey("Queue")]
        public int QueueId { get; set; }
        public virtual Queue Queue { get; set; }

        public virtual List<Step> Steps { get; set; }
    }
}