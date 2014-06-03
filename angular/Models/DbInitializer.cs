using System;
using System.Collections.Generic;

namespace angular.Models
{
    public class DbInitializer : System.Data.Entity.DropCreateDatabaseAlways<TestContext>
    {
        protected override void Seed(TestContext context)
        {
            var queues = new List<Queue>();
            for (int i = 0; i < 3; i++)
            {
                var query = new Queue
                {
                    Name = "Queue" + (i + 1)
                };

                queues.Add(query);
                context.Queues.Add(query);
            }

            context.SaveChanges();

            var tests = new List<Test>();
            for (int i = 0; i < 20; i++)
            {
                var test = new Test
                {
                    Title = "Test #" + i,
                    Queue = queues[new Random().Next(0, queues.Count - 1)]
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