using server.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Linq;
using server.Entity;

namespace server.Repository
{
    public class NewsRepository : INewsRepository
    {
        private readonly INewsDbContext _context;
        public NewsRepository(INewsDbContext context)
        {
            _context = context;
        }



        /// <summary>
        /// Get all News 
        /// </summary>
        /// <returns></returns>
        public List<News> GetAllNews()
        {
            return this._context.News.ToList();
        }


        /// <summary>
        /// Add News
        /// </summary>
        /// <param name="news">News</param>
        /// <returns>integer</returns>
        public int Save(News news)
        {
            bool existNews = this._context.News.Any(x => x.Title == news.Title);

            if (existNews)
            {
                return 409;
            }
            this._context.News.Add(news);
            return this._context.SaveChanges();
        }



        /// <summary>
        /// Delete the news
        /// </summary>
        /// <param name="newsId">newsId</param>
        /// <returns>boolean </returns>
        public bool Delete(int newsId)
        {
            var response = this._context.News.Find(newsId);

            if (response != null)
            {
                this._context.News.Remove(response);
                this._context.SaveChanges();
                return true;
            }

            return false;
        }
    }
}