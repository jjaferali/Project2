using Microsoft.EntityFrameworkCore;
using server.Model;

namespace server.Entity
{
    public class NewsDbContext : DbContext, INewsDbContext
    {
        public NewsDbContext()
        { }

        public NewsDbContext(DbContextOptions<NewsDbContext> contextOptions) :base(contextOptions)
        {
            Database.EnsureCreated();
        }

        public DbSet<News> News { get; set; }
    }
}
