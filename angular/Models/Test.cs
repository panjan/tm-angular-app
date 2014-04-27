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

        [ForeignKey("Query")]
        public int QueryId { get; set; }
        public virtual Query Query { get; set; }

        public virtual List<Step> Steps { get; set; }
    }
}