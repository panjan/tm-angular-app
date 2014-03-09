using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace angular.Models
{
    /// <summary>
    /// Todo list entity
    /// </summary>
    public class Test
    {
        public int TestId { get; set; }

        public string UserId { get; set; }

        [Required, MaxLength(20)]
        public string Title { get; set; }

        public virtual List<Step> Steps { get; set; }
    }
}