using Moq;
using server.Model;
using server.Entity;
using server.Services;
using System;
using System.Collections.Generic;
using Xunit;
using server.Repository;
using System.Linq;

namespace test
{
    public class NewsServiceTest
    {
        private readonly Mock<INewsRepository> mockNewsRepository;

        public NewsServiceTest()
        {
            mockNewsRepository = new Mock<INewsRepository>();
        }
        [Fact]
        public void Get_ShouldReturnNewsListAsExpected()
        {
           // Arrange
            mockNewsRepository.Setup(x => x.GetAllNews()).Returns(this.GetNews);
            var service = new NewsService(mockNewsRepository.Object);
            var expected = this.GetNews().Count;

            // Act
            var actual = service.GetAllNews().Count();

            //Assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void Save_NewsAsExpected()
        {
            // Arrange 
            var expected = 1;
            var news = new News()
            {
                Id = 6,
                Description = "Good"
            };
            mockNewsRepository.Setup(x => x.Save(It.IsAny<News>())).Returns(expected);
            var service = new NewsService(mockNewsRepository.Object);

            // Act
            var actual = service.Save(news);

            //Assert
            Assert.Equal(expected, actual);
        }

       

        [Fact]
        public void Delete_ShouldReturnTrueforVaildId()
        {
            // Arrange
            this.mockNewsRepository.Setup(x => x.Delete(It.IsAny<int>())).Returns(true);
            var service = new NewsService(mockNewsRepository.Object);

            // Act
            var actual = service.Delete(1);

            //Assert
            Assert.True(actual);
        }

        private List<News> GetNews()
        {
            return new List<News>
            {
                new News { NewsId = 1, Author = "Jafer", Title = "Facebook", Category = "Technoloy", Description = "desc", Id = 11, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" },
                new News { NewsId = 2, Author = "Jafer", Title = "WhatsUp", Category = "Technoloy", Description = "desc", Id = 22, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" },
                new News { NewsId = 3, Author = "Jafer", Title = "Twitter", Category = "popular", Description = "desc", Id = 33, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" },
                new News { NewsId = 4, Author = "Jafer", Title = "Google", Category = "popular", Description = "desc", Id = 44, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" },
            };
        }
    }
}
