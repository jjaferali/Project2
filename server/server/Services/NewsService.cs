using server.Model;
using server.Entity;
using System.Collections.Generic;
using server.Repository;

namespace server.Services
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _repository;

        public NewsService(INewsRepository repo)
        {
            _repository = repo;
        }

        /// <summary>
        /// Get All news from NewsDB service.
        /// </summary>
        /// <returns></returns>
        public List<News> GetAllNews()
        {
            return _repository.GetAllNews();
        }

        /// Delete the News
        /// </summary>
        /// <param name="newsId">newsId</param>
        /// <returns>boolean </returns>
        public bool Delete(int newsId)
        {
            return this._repository.Delete(newsId);
        }

       
        /// Add News
        /// </summary>
        /// <param name="news"></param>
        /// <returns>News</returns>
        public int Save(News news)
        {
            return this._repository.Save(news);
        }

       
    }
}
