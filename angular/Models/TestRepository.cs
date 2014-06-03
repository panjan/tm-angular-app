using System.Data.Entity.Infrastructure;
using Breeze.WebApi;

namespace angular.Models
{
    public class TestRepository : EFContextProvider<TestContext>
    {
        public DbQuery<Step> Steps
        {
            get
            {
                return (DbQuery<Step>)Context.Steps;
            }
        }

        public DbQuery<Test> Tests
        {
            get
            {
                return (DbQuery<Test>)Context.Tests;
            }
        }

        public DbQuery<Queue> Queues
        {
            get
            {
                return (DbQuery<Queue>)Context.Queues;
            }
        }

        #region Save processing

        // "this.Context" is reserved for Breeze save only!
        // A second, lazily instantiated DbContext will be used
        // for db access during custom save validation. 
        // See this stackoverflow question and reply for an explanation:
        // http://stackoverflow.com/questions/14517945/using-this-context-inside-beforesaveentity
        private TestContext ValidationContext
        {
            get { return _validationContext ?? (_validationContext = new TestContext()); }
        }
        private TestContext _validationContext;

        #endregion

    }
}