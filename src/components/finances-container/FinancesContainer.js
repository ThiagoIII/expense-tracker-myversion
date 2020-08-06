import React, { useState, useEffect }  from 'react'
import Balance from './balance/Balance'
import IncrementMoneyPlus  from './increment-money-plus/IncrementMoneyPlus'
import IncrementMoneyLess  from './increment-money-less/IncrementMoneyLess'
import pullFromLocalStorage from '../../helpers/pullFromLocalStorage'
import balanceSum from '../../helpers/balanceSum'


const FinancesContainer = (props) => {
	let [balance, setBalance] = useState(0)
	let [income, setIncome] = useState(0)
	let [expense, setExpense] = useState(0)
	let { add, remove } = props

	useEffect(() => {
		let storage = pullFromLocalStorage()
		let newBalance = balanceSum(storage)
		/* if(newBalance[0] === balance) {
			return
		} else {
			let balanceDif = newBalance[0] - balance
			if(balanceDif > 0){
				setIncome(prev => prev + balanceDif)
			} else {
				setExpense(prev => prev + balanceDif)
			}
			setBalance(newBalance)
		} */
			setBalance(parseFloat(newBalance[0]))
			setIncome(parseFloat(newBalance[1]))
			setExpense(parseFloat(newBalance[2]))
		
	}, [add, remove])

	return (
		<>	     
			<Balance balance={balance}/>
			<IncrementMoneyPlus income={income}/>
			<IncrementMoneyLess expense={expense}/>
		</>
	)
}

export default FinancesContainer