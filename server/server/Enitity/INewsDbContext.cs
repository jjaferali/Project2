using Microsoft.EntityFrameworkCore;
using server.Model;

namespace server.Entity
{
    public interface INewsDbContext
    {
        DbSet<News> News { get; set; }

        int SaveChanges();
    }
}
