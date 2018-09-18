using Newtonsoft.Json;
using server.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Services
{
    public interface INewsService
    {
        List<News> GetAllNews();
        Task<IEnumerable<News>> GetHeadLines();
        Task<IEnumerable<News>> GetCategory(string categoryName);
        Task<IEnumerable<News>> GetSearch(string categoryName);
        int Save(News news);
        bool Delete(int id);      

    }
}
