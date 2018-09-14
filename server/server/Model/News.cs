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
      
        public string Title { get; set; }
      
        public string Author { get; set; }
      
        public string Description { get; set; }
       
        public string Url { get; set; }
      
        public string UrlToImage { get; set; }
     
        public DateTime PublishedAt { get; set; }
      
        public string Category { get; set; }
       
        public int Id { get; set; }
      
        public bool IsExist { get; set; }
    }
}
