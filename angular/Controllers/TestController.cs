﻿namespace angular.Controllers
{
    using System.Linq;
    using System.Web.Http;
    using Breeze.WebApi;
    using Filters;
    using Models;
    using Newtonsoft.Json.Linq;

    [BreezeController]
    public class TestController : ApiController
    {
        private readonly TestRepository _repository;

        public TestController()
        {
            _repository = new TestRepository();
        }

        // GET ~/api/Test/Metadata 
        [HttpGet]
        public string Metadata()
        {
            return _repository.Metadata();
        }

        // POST ~/api/Test/SaveChanges
        [HttpPost]
        [ValidateHttpAntiForgeryToken]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return _repository.SaveChanges(saveBundle);
        }

        // GET ~/api/Test/Tests
        [HttpGet]
        public IQueryable<Test> Tests()
        {
            return _repository.Tests;
        }

        // GET ~/api/Test/Queue
        [HttpGet]
        public IQueryable<Queue> Queues()
        {
            return _repository.Queues;
        }
    }
}