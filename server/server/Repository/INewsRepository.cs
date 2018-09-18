using Newtonsoft.Json;
using server.Model;
using System.Collections.Generic;

namespace server.Repository
{
    public interface INewsRepository
    {
        List<News> GetAllNews();
        int Save(News news);
        bool Delete(int id);              
    }
}
