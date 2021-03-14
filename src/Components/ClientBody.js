import React from 'react'
import stockData from 'assets/data/loyalty.json'
import Moment from 'react-moment'
import hotel from 'assets/images/hotel.jpg'
import plane from 'assets/images/plane.jpg'
import issuer from 'assets/images/issuer.jpg'
import defaultImage from 'assets/images/defaultBackground.jpg'
import {Link} from 'react-router-dom'

const ClientBody = () => {
  console.log(stockData)
  const parseImage = (entry) => {
    switch(entry) {
      case "airline":
        return plane
      case "hotel":
        return hotel
      case "issuer":
        return issuer
      default:
        return defaultImage
    }
  }

  return(
    <section className="container">
      <ul>
        <div className="row">
          {stockData.map((entry) =>
              <div className="col s2 m4">
                <div className="card">
                  <div className="card-image">
                    <img height="200" src={parseImage(entry.type)} />
                    <span className="card-title">{entry.name}</span>
                  </div>
                  <div className="card-content">
                    <p>I am a very simple card. I am good at containing small bits of information.
                      I am convenient because I require little markup to use effectively.</p>
                    <span className="card-title activator grey-text text-darken-4"><i className="material-icons right ion-information"></i></span>
                  </div>
                  <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{entry.name}<i className="material-icons right">close</i></span>
                    <p>Created at: <Moment format="hh:mm MM/DD/YYYY">{entry.create_date}</Moment></p>
                    <p>Last updated: <Moment format="hh:mm MM/DD/YYYY">{entry.update_date}</Moment></p>
                  </div>
                  <div className="card-action">
                    <a href={entry.website_url} target="_blank">Website</a>
                  </div>
                </div>
              </div>
          )}
        </div>

      </ul>
    </section>
  )
}

export default ClientBody
