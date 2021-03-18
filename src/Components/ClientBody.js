import React from 'react'
import EntryList from './EntryList'
import EntryShow from './EntryShow.js'
import {Switch, Route} from 'react-router-dom'

const ClientBody = () => {
  return(
    <section>
      <Switch>
        <Route exact path="/" render={EntryList} />
        <Route exact path="/entry/:id" component={EntryShow} new />
      </Switch>
    </section>
  )
}

export default ClientBody
