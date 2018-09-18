using server.Model;
using server.Entity;
using System.Collections.Generic;
using server.Repository;
using System.Threading.Tasks;
using System;
using System.Net.Http;
using Newtonsoft.Json;

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
        /// Get Headlines News
        /// </summary>
        /// <param name="news"></param>
        /// <returns>News</returns>
        public async Task<IEnumerable<News>> GetHeadLines()
        {
            var baseAddress = new Uri(NewsSource.NewsAPIURL);
            var news = new NewsList();
            using (var httpClient = new HttpClient { BaseAddress = baseAddress })
            {
                httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");

                using (var response = await httpClient.GetAsync(NewsSource.HeadLines))
                {
                    string responseData = await response.Content.ReadAsStringAsync();
                    news = JsonConvert.DeserializeObject<NewsList>(responseData);

                }
            }            
            return await Task.Run(() => new List<News>(news.ListOfNews));

        }
        /// Get category wise News
        /// </summary>
        /// <param name="categoryName"></param>
        /// <returns>News</returns>
        public async Task<IEnumerable<News>> GetCategory(string categoryName)
        {
            var baseAddress = new Uri(NewsSource.NewsAPIURL);
            var news = new NewsList();
            using (var httpClient = new HttpClient { BaseAddress = baseAddress })
            {
                httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");

                using (var response = await httpClient.GetAsync(NewsSource.NewsAPIURL+ "top-headlines?"+"category="+categoryName.Trim()+""+"&apikey=1e422ee7aa8a4174b64cdc84245948cd&language=en&page=1"))
                {
                    string responseData = await response.Content.ReadAsStringAsync();
                    news = JsonConvert.DeserializeObject<NewsList>(responseData);

                }
            }
            return await Task.Run(() => new List<News>(news.ListOfNews));
        }

        /// Get search News
        /// </summary>
        /// <param name="searchText"></param>
        /// <returns>News</returns>
        public async Task<IEnumerable<News>> GetSearch(string searchText)
        {
            var baseAddress = new Uri(NewsSource.NewsAPIURL);
            var news = new NewsList();
            using (var httpClient = new HttpClient { BaseAddress = baseAddress })
            {
                httpClient.DefaultRequestHeaders.TryAddWithoutValidation("accept", "application/json");

                using (var response = await httpClient.GetAsync(NewsSource.NewsAPIURL + "everything?q="+searchText.Trim()+""+"&apikey=1e422ee7aa8a4174b64cdc84245948cd&language=en&page=1"))
                {
                    string responseData = await response.Content.ReadAsStringAsync();
                    news = JsonConvert.DeserializeObject<NewsList>(responseData);

                }
            }
            return await Task.Run(() => new List<News>(news.ListOfNews));
        }

    }
}
