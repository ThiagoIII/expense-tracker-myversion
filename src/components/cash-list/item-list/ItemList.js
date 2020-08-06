import React from 'react'
import pullFromLocalStorage from '../../../helpers/pullFromLocalStorage'
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './styles';

const ItemList = (props) => {
	const { anything, description, addedAmount, setRemove, classes } = props

	const handleRemoveItem = e => {
		let storage = pullFromLocalStorage()
		let actualTarget = e.target.nodeName
		let ulItem = e.target.closest('ul')
		let liItem = e.target.closest('li')
		let indexToRemove = liItem.getAttribute('dataremove')
		console.log(ulItem, liItem, actualTarget, indexToRemove)
		storage.splice(indexToRemove, 1)
		if(storage.length === 0){
			localStorage.clear()
		} else {
			localStorage.setItem('finances', JSON.stringify(storage));
		}
		ulItem.removeChild(liItem)
		setRemove(true)
	}
		
	
	return (
		<ListItem className={classes.minus} key={anything} dataremove={anything} >
			<ListItemText primary={description} className={classes.listItem}/>
			<ListItemText primary={addedAmount} className={classes.listItem}/>
			<DeleteIcon className={classes.deleteIcon} onClick={(e) => handleRemoveItem(e)}/> 
		</ListItem>
	)
}

export default withStyles(styles)(ItemList)
