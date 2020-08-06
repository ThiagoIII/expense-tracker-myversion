import React from 'react'
import pullFromLocalStorage from '../../helpers/pullFromLocalStorage'
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button'
import styles from './styles';

const FormNewTransaction = (props) => {

	let { setAdd } = props

	const handleAddTransaction = () => {
		let inputAmount = parseFloat(document.body.querySelector('#input-amount').value)
		let inputDescription = document.body.querySelector('#input-description').value
		let storage = pullFromLocalStorage()
		let newItem
		if(storage === false) {
			newItem = [{[inputDescription] : inputAmount}]
		} else {
			newItem = [...storage, {[inputDescription]: inputAmount}]
		} 
		localStorage.setItem('finances', JSON.stringify(newItem))
		setAdd(true)
	}

	const { classes } = props
	return (
		<>
			<h3>Add new transaction</h3>
			<form noValidate autoComplete="off" className={classes.formStyle} id="form">
				<FormControl className={classes.formChildren}>
					<InputLabel htmlFor="input-description">Description</InputLabel>
					<Input type="text" id="input-description" placeholder="Enter description here, please" aria-describedby="input-description-text" />
					<FormHelperText>Enter your description here</FormHelperText>
				</FormControl>
				<FormControl className={classes.formChildren}>
					<InputLabel htmlFor="input-amount">Amount</InputLabel>
					<Input type="number" id="input-amount" placeholder="Enter amount, please" aria-describedby="component-helper-amount" />
					<FormHelperText>Enter your amount here</FormHelperText>
				</FormControl>
				<Button className={classes.addButton} onClick={() => handleAddTransaction()}>Add transaction</Button>
			</form>
		</>
	)
}

export default  withStyles(styles)(FormNewTransaction)