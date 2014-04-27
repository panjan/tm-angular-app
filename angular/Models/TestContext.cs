using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace angular.Models
{
    // You can add custom code to this file. Changes will not be overwritten.
    // 
    // If you want Entity Framework to drop and regenerate your database
    // automatically whenever you change your model schema, add the following
    // code to the Application_Start method in your Global.asax file.
    // Note: this will destroy and re-create your database with every model change.
    // 
    // System.Data.Entity.Database.SetInitializer(new System.Data.Entity.DropCreateDatabaseIfModelChanges<angular.Models.TodoItemContext>());
    public class TestContext : DbContext
    {
        public TestContext()
            : base("name=DefaultConnection")
        {
        }

        public DbSet<Test> Tests { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Query> Queries { get; set; }
    }
}