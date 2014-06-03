using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace angular.Models
{
    public class Step
    {
        public int StepId { get; set; }

        [Required, MaxLength(30)]
        public string Title { get; set; }
        public bool IsDone { get; set; }

        [ForeignKey("Test")]
        public int TestId { get; set; }
        public virtual Test Test { get; set; }
    }
}