using Microsoft.EntityFrameworkCore;
using newsAPI.Model;
using newsAPI.Entity;
using System;
using System.Collections.Generic;

namespace test
{
    public class DatabaseFixture : IDisposable
    {
        private IEnumerable<News> AllNews { get; set; }
        public INewsDbContext dbContext;

        public DatabaseFixture()
        {
            var options = new DbContextOptionsBuilder<NewsDbContext>()
                .UseInMemoryDatabase(databaseName: "NewsDB")
                .Options;

            dbContext = new NewsDbContext(options);

            dbContext.News.Add(new News { NewsId = 1, Author = "Jafer", Title = "Facebook", Category = "Technoloy", Description = "desc", Id = 11, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" });
            dbContext.News.Add(new News { NewsId = 2, Author = "Jafer", Title = "WhatsUp", Category = "Technoloy", Description = "desc", Id = 22, PublishedAt = DateTime.Now,  Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" });
            dbContext.News.Add(new News { NewsId = 3, Author = "Jafer", Title = "Twitter", Category = "Technoloy", Description = "desc", Id = 33, PublishedAt = DateTime.Now,  Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" });
            dbContext.News.Add(new News { NewsId = 4, Author = "Jafer", Title = "Ola", Category = "general", Description = "desc", Id = 44, PublishedAt = DateTime.Now,  Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" });
            dbContext.SaveChanges();
        }

        public void Dispose()
        {
            AllNews = null;
            dbContext = null;
        }
    }
}
