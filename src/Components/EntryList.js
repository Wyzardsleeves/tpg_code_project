import React from 'react'
import stockData from 'assets/data/loyalty.json'
import Moment from 'react-moment'
import hotel from 'assets/images/hotel.jpg'
import plane from 'assets/images/plane.jpg'
import issuer from 'assets/images/issuer.jpg'
import defaultImage from 'assets/images/defaultBackground.jpg'
import {Link} from 'react-router-dom'

const EntryList = () => {

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
                <div className="col s2 m4" key={entry.id}>
                  <div className="card">
                    <div className="card-image">
                      <img className="no-squash" style={{display: "inline"}} height="200" width="auto" src={parseImage(entry.type)} alt="card-img" />
                      {entry.tpg_valuation ? <Link to={`/entry/${entry.id}`}><span className="card-title">{entry.name}</span></Link> : <span className="card-title">{entry.name}</span> }
                    </div>
                    <div className="card-content">
                      <div className="row">
                        <h5 style={{margin:"0"}}>TPG: {entry.tpg_valuation ? entry.tpg_valuation : "None"}</h5>
                      </div>
                    </div>
                    <div className="card-reveal">
                      <i className="card-title activator grey-text text-darken-4 material-icons right"><i className="ion-android-cancel"></i></i>
                      <a href={`http://${entry.website_url}`} target="_blank" rel="noreferrer">Website</a>
                      <p>Created at: <Moment format="hh:mm MM/DD/YYYY">{entry.create_date}</Moment></p>
                      <p>Last updated: <Moment format="hh:mm MM/DD/YYYY">{entry.update_date}</Moment></p>
                    </div>
                    <div className="card-action">
                      {entry.tpg_valuation ? <Link className="m11" to={`/entry/${entry.id}`}>Evaluate</Link> : <i className="m10" style={{color: "#7f7f7f"}}>Unavailable</i>}
                      <i className="card-title activator grey-text text-darken-4 m1"><i className="material-icons right ion-information"></i></i>
                    </div>
                  </div>
                </div>
            )}
          </div>
        </ul>
      </section>
    )
}

export default EntryList
