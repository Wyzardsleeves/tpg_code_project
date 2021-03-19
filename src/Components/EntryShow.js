import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import News from './News'
import stockData from 'assets/data/loyalty.js'
import tpg from 'assets/images/tpg.png'

const EntryShow = (props) => {
  let selectedEntry = stockData.find((entry) => entry.id === props.match.params.id)
  let formRef = useRef();
  let [points, setPoints] = useState(0)
  let [price, setPrice] = useState(0)
  let [fees, setFees] = useState(5.60)
  let [choice, setChoice] = useState("Use Cash")
  formRef = React.createRef();

  useEffect(() => {
    updateChoice()
  })

  const changePoints = (e) => {
    setPoints(e.target.value)
  }

  const changeFees = (e) => {
    setFees(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const updateChoice = (e) => {
    let tpg_valuation = selectedEntry.tpg_valuation;
    if(parseFloat(points * tpg_valuation) + parseFloat(fees) > price && tpg_valuation < 1){
      setChoice("Use Points")
    }
    else if(parseFloat(points * tpg_valuation) + parseFloat(fees) > price && tpg_valuation >= 1){
      setChoice("Definitely use Points!!")
    }
    else if(parseFloat(points * tpg_valuation) + parseFloat(fees) < price && tpg_valuation >= 1){
      setChoice("Use Cash")
    }
    else if(parseFloat(points * tpg_valuation) + parseFloat(fees) < price && tpg_valuation < 1){
      setChoice("Definitely use Cash!")
    }
  }

  const clearFields = () => {
    setPoints(0)
    setFees(5.60)
    setPrice(0.00)
    setChoice("Use Cash")
    formRef.current.reset()
  }


  return(
    <section className="container">
      <div className="row">
        <Link to="/">{"<"} Home</Link>
      </div>
      <div className="row">
          <span>
            <h5>{selectedEntry.name} ({selectedEntry.tpg_valuation})</h5>
            {selectedEntry.active ?
            <span><i className="ion-ios-circle-filled green-text"></i> Active</span>
            :
            <span><i className="ion-ios-circle-outline grey-text"></i> Inactive</span>
            }
          </span>
      </div>
      <div className="row">
        <form ref={formRef} onChange={updateChoice}>
          <div className="input-field col s1">
            <input defaultValue={price} min={0} id="ticket-price" type="number" step="0.01" className="validate" onChange={(e) => changePrice(e)} />
            <label for="ticket-price">Ticket Price</label>
          </div>
          <div className="input-field col s1">
            <input defaultValue={points} min={0} id="points" type="number" className="validate" onChange={(e) => changePoints(e)} />
            <label for="points">Points</label>
          </div>
          <div className="input-field col s1">
            <input defaultValue={5.60} min={0} id="fees" type="number" step="0.01" className="validate" onChange={(e) => changeFees(e)} />
            <label for="fees">Fees</label>
          </div>
          <div className="input-field col s1">
            <input className="btn btn-primary" onClick={clearFields} type="button" value="Clear" />
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s4 m12 grey-text text-darken-2">
          <div className="card white">
            <div className="card-panel">
              <div className="card-content">
                <div className="row" style={{padding: "0 0 20px 0"}}>
                  <h6>Ticket: ${price}</h6>
                  <h6>Total Points: {points}</h6>
                  <h6>Total Points Value: ${(parseFloat(points * selectedEntry.tpg_valuation)).toFixed(2)}</h6>
                  <h6 style={{padding: "0 0 25px 0"}}>Points with Fees: ${(parseFloat(points * selectedEntry.tpg_valuation) + parseFloat(fees)).toFixed(2)}</h6>
                  <span><img src={tpg} height={40} style={{margin: 0}} alt={"tpg-logo.png"} /><h4 style={{margin: "5px", display: "inline-block", color: "black"}}>'s choice: {choice}</h4></span>
                </div>
                <div className="row">
                  <div className="col m4 center points">
                    <h3 className="pad-mar-zero"><i className="ion-card"> </i>Points</h3>
                  </div>
                  <div className="col m4 center">
                    {choice === "Definitely use Cash!" &&
                      <h3 className="ion-arrow-left-a rotate180" style={{color: "#65c56d"}}></h3>
                    }
                    {choice === "Use Cash" &&
                      <h3 className="ion-arrow-left-a rotate135" style={{color: "#20c9b0"}}></h3>
                    }
                    {choice === "Use Points" &&
                      <h3 className="ion-arrow-left-a rotate45" style={{color: "#0dcbd0"}}></h3>
                    }
                    {choice === "Definitely use Points!!" &&
                      <h3 className="ion-arrow-left-a" style={{color: "#46cdf7"}}></h3>
                    }
                  </div>
                  <div className="col m4 center cash">
                    <h3 className="pad-mar-zero"><i className="ion-social-usd-outline"> </i>Cash</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s4 m12 grey-text text-darken-2">
          <h5>Articles</h5>
          <News entry={selectedEntry.name} />
        </div>
      </div>
    </section>
  )
}

export default EntryShow
