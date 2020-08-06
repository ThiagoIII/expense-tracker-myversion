import React from 'react'

const IncrementMoneyPlus = ({ income }) => {
	
	return (
		<div>
			<h4>Income</h4>
			<p id="money-plus" className="money plus">+${income}</p>
        </div>
	)
}

export default IncrementMoneyPlus