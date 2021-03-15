import React, {useState, useRef} from 'react'
import stockData from 'assets/data/loyalty.json'

const EntryShow = (props) => {
  console.log(props)
  let selectedEntry = stockData.find((entry) => entry.id === props.match.params.id)
  let formRef = useRef();
  let [points, setPoints] = useState(0)
  let [price, setPrice] = useState(0)
  let [fees, setFees] = useState(0)
  let [choice, setChoice] = useState("0")

  const changePoints = (e) => {
    setPoints(e.target.value)
  }

  const changeFees = (e) => {
    setFees(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const clearFields = () => {
    formRef.clear()
  }

  return(
    <section className="container">
      <div className="row">
        <button className="btn btn-primary" onClick={props.history.goBack}>Return</button>
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
        <form formRef={formRef}>
          <div className="input-field col s1">
            <input defaultValue={points} min={0} id="ticket-price" type="number" className="validate" onChange={(e) => changePrice(e)} />
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
            <button className="btn btn-primary" onClick={() => clearFields()}>Clear</button>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col s4 m12 grey-text text-darken-2">
          <div className="card white">
            <div className="card-panel">
              <div className="card-content">
                <h6>Ticket: ${price}</h6>
                <h6>Total Points: {points}</h6>
                <h6>Points Value: ${(parseFloat((points * selectedEntry.tpg_valuation)) + parseFloat(fees)).toFixed(2)}</h6>
                <div className="row">
                  <div className="col m4 center">
                    <h3>Points</h3>
                  </div>
                  <div className="col m4 center">
                    {choice === "cash" ?
                    <h3 className="ion-arrow-right-a" width={100}></h3>
                    :
                    <h3 className="ion-arrow-left-a" width={100}></h3>
                    }
                  </div>
                  <div className="col m4 center">
                    <h3>Cash</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EntryShow
