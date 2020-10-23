const axios = require('axios');

export default {
  search: function(serchTerm,searchLimit,sortBy) {
    axios({
      method: 'get',
      url: `http://www.reddit.com/search.json?q=${serchTerm}&sort=${sortBy}&limit=${searchLimit}`
    })
      .then(res => res.data.data.children.map(data => data.data))
      .then(data => {
        if(data){
          let output ="";
        data.forEach(post => {
          output += `
          <div class="card mb-2">
            <img class="card-img-top" src=${post.thumbnail} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.title}</p>
              <a href="${post.url}" target="_blank
              " class="btn btn-primary">Read More</a>
              <hr>
              <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
              <span class="badge badge-dark">Score: ${post.score}</span>
            </div>
          </div>
          `;
        });
          output += '</div>';
          document.getElementById('results').innerHTML = output;
        }
      });
  }
};