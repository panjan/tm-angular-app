using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angular.Models
{
    public class DbInitializer : System.Data.Entity.DropCreateDatabaseAlways<TestContext>
    {
        protected override void Seed(TestContext context)
        {
            var tests = new List<Test>();
            for (int i = 0; i < 20; i++)
            {
                var test = new Test
                {
                    Title = "Test #" + i
                };

                tests.Add(test);
                context.Tests.Add(test);
            }

            context.SaveChanges();

            for (int i = 0; i < 20; i++)
            {
                var step = new Step
                {
                    Title = "Step #" + i,
                    TestId = tests[i].TestId
                };

                context.Steps.Add(step);
            }

            context.SaveChanges();
        }
    }
}