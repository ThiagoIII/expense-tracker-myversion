const pullFromLocalStorage = () => {
	try {
		let localStorage = window.localStorage
		if(localStorage.length > 0) { 
			return JSON.parse(localStorage.getItem('finances'))
		} 
		return false
	} catch (error) {
		alert(error)
	}
}

export default pullFromLocalStorage
