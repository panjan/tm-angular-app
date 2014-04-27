using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace angular.Models
{
    public class Query
    {
        public int QueryId { get; set; }

        public string Name { get; set; }

        public virtual List<Test> Tests { get; set; }
    }
}