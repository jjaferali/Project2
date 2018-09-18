using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using server.Model;
using server.Services;

namespace server.Controllers
{
    [Produces("application/json")]
    [Route("api/News")]
    public class NewsController : Controller
    {
        private readonly INewsService _service;

        public NewsController(INewsService service)
        {
            _service = service;
        }

        /// <summary>
        /// API method to get all news from NewsDB service.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IActionResult Get()
        {
          
            try
            {
                var result = _service.GetAllNews();
                return Ok(result);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }

        /// <summary>
        /// API method to get all headline from NewsAPI service.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetHeadLines")]

        public async Task<IEnumerable<News>> GetHeadLines()
        {
            return await _service.GetHeadLines();                     
        }
       
        /// <summary>
        /// API method to get category wise news from NewsAPI service.
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        [Route("GetCategory/{categoryName}")]
        public async Task<IEnumerable<News>> GetCategory(string categoryName)
        {
            return await _service.GetCategory(categoryName);
        }

        
        /// <summary>
        /// API method to get all news based on search text from NewsAPI service.
        /// </summary>
        /// <param name="searchText"></param>
        /// <returns></returns>
        [HttpGet]
        [Route("Search/{searchText}")]
        public async Task<IEnumerable<News>> GetSearch(string searchText)
        {
            return await _service.GetSearch(searchText);
        }


        // POST: api/News
        [HttpPost]
        public IActionResult Post([FromBody] News news)
        {
            try
            {
                var result = this._service.Save(news);
                if (result == 409)
                {
                    return StatusCode(409);
                }

                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error");
            }
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int id) 
        {
            try
            {
                var result = this._service.Delete(id);

                if (result)
                {
                    return Ok(result);
                }

                return NotFound(500);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error");
            }
        }
    }
}