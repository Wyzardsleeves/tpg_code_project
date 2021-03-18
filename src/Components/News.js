import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const News = (props) => {
  let [articles, setArticles] = useState([])
  useState(() => {
    let url = `https://newsapi.org/v2/everything?q=${props.entry}&apiKey=bc3bdd2a04ac4a9b9a8df46348e6b758`
    axios.get(url)
    // .then((response) => console.log(response.data.articles)) //data.totalResults available
    .then((response) => setArticles(response.data.articles))//data.totalResults available
    .catch((error) => console.log(error.message))
  })

  return(
    <ul>
      {articles.map((article, index) =>
        <li className="row" key={index /* THIS IS BAD PRACTICE but there's no ids coming from the api */}>
          <div className="col m3">
            <img src={article.urlToImage} alt={article.title} width="100%"/>
          </div>
          <div className="col m9">
            <a href={article.url} target="_blank" rel="noreferrer"><h5>{article.title}</h5></a>
            {article.author && <p className="left-align">by {article.author}</p>}
            {article.description && <p>{article.description}</p>}
            {article.source.name && <p className="right-align">Source: {article.source.name}</p>}
          </div>
        </li>
      )}
    </ul>
  )
}

export default News
