using Newtonsoft.Json;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Model
{
   
    public class News
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
     
        public int NewsId { get; set; }
        [JsonProperty(PropertyName = "title")]
        public string Title { get; set; }
        [JsonProperty(PropertyName = "author")]
        public string Author { get; set; }
        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }
        [JsonProperty(PropertyName = "url")]
        public string Url { get; set; }
        [JsonProperty(PropertyName = "urlToImage")]
        public string UrlToImage { get; set; }
        [JsonProperty(PropertyName = "publishedAt")]
        public DateTime PublishedAt { get; set; }
        [JsonProperty(PropertyName = "category")]
        public string Category { get; set; }
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }      
        public bool IsExist { get; set; }
    }
}
