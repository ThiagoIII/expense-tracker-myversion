const balanceSum = (storage) => {
	let balanceTotal = [0,0,0]
	let acc1 = 0
	let acc2 = 0
	if(storage !== false){
		balanceTotal = storage.map((item) => {
			let entry = Object.entries(item) 
			if(entry[0][1] > 0){
				acc1 = entry[0][1] + acc1
			} else {
				acc2 = entry[0][1] + acc2
			}
			return [acc1 + acc2 , acc1 , acc2]
		})
		let balanceTotalLength = balanceTotal.length
		return balanceTotal[balanceTotalLength - 1]
	}
	return balanceTotal

}

export default balanceSum
