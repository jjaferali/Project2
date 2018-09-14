using Microsoft.AspNetCore.Mvc;
using Moq;
using server.Controllers;
using server.Model;
using server.Services;
using System;
using System.Collections.Generic;
using Xunit;

namespace test
{
    public class NewsControllerTest
    {
        [Fact]
        public void GetAllNews_ShouldReturnListOfNews()
        {           
            var mockINewsService = new Mock<INewsService>();
            mockINewsService.Setup(service => service.GetAllNews()).Returns(GetNews());
            var newsController = new NewsController(mockINewsService.Object);

            // Act
            var result = newsController.Get();
            var actualResult = result as OkObjectResult;
            //Assert
            Assert.NotNull(result);
            Assert.Equal(200, actualResult.StatusCode);
        }

      
        [Fact]
        public void InsertNewsTest()
        {
            var news = new News { NewsId = 5, Author = "Jafer", Title = "CTS", Category = "general", Description = "desc", Id = 1, PublishedAt = DateTime.Now,  Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" };
            var mockINewsService = new Mock<INewsService>();
            mockINewsService.Setup(service => service.Save(news));

            var controller = new NewsController(mockINewsService.Object);

            // Act
            var result = controller.Post(news) as StatusCodeResult;

            //Assert
            Assert.NotNull(result);
            Assert.Equal(201, result.StatusCode);
        }

              

        [Fact]
        public void DeleteNewsTest()
        {
            var mockINewsService = new Mock<INewsService>();
            mockINewsService.Setup(service => service.Delete(3)).Returns(true);

            var newsController = new NewsController(mockINewsService.Object);

            // Act
            var result = newsController.Delete(3) as OkObjectResult;
            var actualResult = (bool)result.Value;

            //Assert
            Assert.NotNull(result);
            Assert.Equal(200, result.StatusCode);
            Assert.True(actualResult);
        }

        
        [Fact]
        public void DeleteForInVaildId()
        {
            var mockINewsService = new Mock<INewsService>();
            mockINewsService.Setup(x => x.Delete(It.IsAny<int>())).Returns(false);
            var newsController = new NewsController(mockINewsService.Object);
            // Act
            var result = newsController.Delete(6) as NotFoundObjectResult;

            //Assert
            Assert.NotNull(result);
            Assert.Equal(404, result.StatusCode);

        }
       

        private List<News> GetNews()
        {
            return new List<News>
            {
                  new News { NewsId = 1, Author = "Jafer", Title = "Facebook", Category = "Technoloy", Description = "desc", Id = 11, PublishedAt = DateTime.Now,  Url="https://newsdb.org" , UrlToImage= "https://newsdb.org" },
                  new News { NewsId = 2, Author = "Jafer", Title = "WhatsUp", Category = "Technoloy", Description = "desc", Id = 22, PublishedAt = DateTime.Now, Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" },
                  new News { NewsId = 3, Author = "Jafer", Title = "Twitter", Category = "Technoloy", Description = "desc", Id = 33, PublishedAt = DateTime.Now, Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" },
                  new News { NewsId = 4, Author = "Jafer", Title = "Ola", Category = "general", Description = "desc", Id = 43, PublishedAt = DateTime.Now, Url = "https://newsdb.org", UrlToImage = "https://newsdb.org" },
        };
        }

    }
}
