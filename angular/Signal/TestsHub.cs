using System;
using System.Web;
using Microsoft.AspNet.SignalR;
using System.Threading;

namespace angular.SignalR
{
    public class TestsHub : Hub
    {
        public void GreetAll()
        {
            var random = new Random();
            // Call the broadcastMessage method to update clients.
            for (int i = 0; i < 10000; i++)
            {
                Clients.All.acceptProgress(random.Next(0, 19), random.Next(0, 33), random.Next(0, 33), random.Next(0, 33));
                Thread.Sleep(10);
            }
                
        }
    }
}
