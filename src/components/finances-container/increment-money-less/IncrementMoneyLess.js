import React from 'react'

const IncrementMoneyLess = ({ expense }) => {
	
	return (
		<div>
			<h4>Expense</h4>
			<p id="money-less" className="money less">-${expense * (-1)}</p>
        </div>
	)
}

export default IncrementMoneyLess