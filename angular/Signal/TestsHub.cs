using System;
using Microsoft.AspNet.SignalR;
using System.Threading;

namespace angular.SignalR
{
    public class TestsHub : Hub
    {
        public void UpdateProgress()
        {
            var random = new Random();
            for (int i = 0; i < 10000; i++)
            {
                Clients.All.acceptProgress(random.Next(0, 21), random.Next(0, 33), random.Next(0, 33), random.Next(0, 33));
                Thread.Sleep(10);
            }
        }
    }
}
