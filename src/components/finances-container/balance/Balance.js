import React from 'react'

const Balance = (props) => {
	let { balance } = props
	return (
		<div>
			<h4>Your Balance</h4>
			<p id="balance" className="balance">${balance}</p>
		</div>
	)
}

export default Balance
