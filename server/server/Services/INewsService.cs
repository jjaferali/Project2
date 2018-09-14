using server.Model;
using System.Collections.Generic;

namespace server.Services
{
    public interface INewsService
    {
        List<News> GetAllNews();
        int Save(News news);
        bool Delete(int id);

    }
}
