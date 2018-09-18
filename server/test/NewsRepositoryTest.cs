using server.Model;
using server.Entity;
using System;
using System.Collections.Generic;
using Xunit;
using server.Repository;
using System.Linq;

namespace test
{
    public class NewsRepositoryTest: IClassFixture<DatabaseFixture>
    {
        private readonly INewsRepository _repository;
        DatabaseFixture _databaseFixture;

        public NewsRepositoryTest(DatabaseFixture fixture)
        {
            _databaseFixture = fixture;
            _repository = new NewsRepository(_databaseFixture.dbContext);
        }

        #region Positive Tests

       
        [Fact]
        public void GetAllNewsAsExpected()
        {
            // Act
            var actual = this._repository.GetAllNews().Count;

            // Assert
            var expected = _databaseFixture.dbContext.News.Count();
            Assert.Equal(expected, actual);
        }

               [Fact]
        public void InsertNewsAsExpected()
        {
            // Arrange 
            var expected = 5;
            var news = new News()
            {
                NewsId = 5,
                Description = "test"

            };

            // Act
            this._repository.Save(news);

            // Assert
            var actual = this._repository.GetAllNews().Count();
            Assert.Equal(expected, actual);
        }
        [Fact]
        public void DeleteNewsforVaildId()
        {
            // Act
            var actual = this._repository.Delete(4);

            // Assert
            Assert.True(actual);
        }
        #endregion
        #region Negative Tests
        [Fact]
        public void DeleteNewsforInVaildId()
        {
            // Act
            var actual = this._repository.Delete(10000);

            // Assert
            Assert.False(actual);
        }

        #endregion
    }
}
