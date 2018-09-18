using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Model
{
    public class NewsList
    {
        [JsonProperty(PropertyName = "articles")]
        public List<News> ListOfNews { get; set; }

    }
}
