using System;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace angular.SignalR
{
    public class TestsHub : Hub
    {
        public void GreetAll()
        {
            // Call the broadcastMessage method to update clients.
            Clients.All.acceptProgress(10, 40, 30, 20);
        }
    }
}
