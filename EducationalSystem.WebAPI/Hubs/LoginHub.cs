using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EducationalSystem.WebAPI.Habs
{
    [Authorize]
    public class LoginHub : Hub
    {
        public async void Send()
        {
            if (IsProfessor(Context.User))
            {
                var userName = Context.User.Identity.Name;
                await Clients.OthersInGroup("Professors").SendAsync("Receive", $"Professor {userName} back online");
            }
        }

        public override async Task OnConnectedAsync()
        {
            if (IsProfessor(Context.User))
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, "Professors");
            }
            await base.OnConnectedAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Professors");
            await base.OnDisconnectedAsync(exception);
        }

        private bool IsProfessor(ClaimsPrincipal user)
        {
            return user.IsInRole(Config.ProfessorRole);
        }
    }
}
