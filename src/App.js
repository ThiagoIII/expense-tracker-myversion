import React, { useState } from 'react'

import FinancesContainer from './components/finances-container/FinancesContainer'
import FormNewTransaction from './components/form-new-transaction/FormNewTransaction'
import CashList from './components/cash-list/CashList';
import Container from '@material-ui/core/Container';
import './App.css'

const App = () => {
  let [add, setAdd] = useState(false)
  const [remove, setRemove] = useState(false)

  return (
    <Container component="main" maxWidth="md" >
      <h2>Expense Tracker</h2>
      <Container component="section" maxWidth="xs">
        <FinancesContainer add={add} remove={remove}/>
        <h3>History</h3>
        <CashList add={add} setAdd={val => setAdd(val)} remove={remove} setRemove={val => setRemove(val)}  />  
        <FormNewTransaction setAdd={val => setAdd(val)}/>
      </Container>
    </Container>
  )
}

export default App