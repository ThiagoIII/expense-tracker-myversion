import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './styles';
import pullFromLocalStorage from '../../helpers/pullFromLocalStorage'
//import ItemList from './item-list/ItemList'

const CashList = (props) => {
	let [listItens, setListItens] = useState([])
	let { add, setAdd, remove, setRemove, classes } = props

	const handleRemoveItem = e => {
		let storage = pullFromLocalStorage()
		if(e.target.nodeName === 'path') {
			let li = e.target.closest('li')
			let indexToRemove = li.getAttribute('dataremove')
			console.log(li, indexToRemove)
			storage.splice(indexToRemove, 1)

			if(storage.length === 0){
				localStorage.clear()
			} else {
				localStorage.setItem('finances', JSON.stringify(storage));
			}
			setListItens(storage)
			setRemove(true)
		} else {
			return
		}
	}

	useEffect(() => {
		
		let storage = pullFromLocalStorage()
		if(storage === false){
			return
		} else {
			if(storage.length !== listItens.length) {
				setListItens(storage)
			}
			if(add !== false){
				setAdd(false)
			} 
			if(remove !== false){
				setRemove(false)
			}
		}

	}, [add, setAdd , remove, setRemove])
	
	return (
	<List>
		{ 
		listItens === null ? null : listItens.map((item , index) => {
			let entry = Object.entries(item) 
			return (
				<ListItem className={classes.minus} key={index} dataremove={index} onClick={(e) => handleRemoveItem(e)}>
					<ListItemText primary={entry[0][0]} className={classes.listItem}/>
					<ListItemText primary={entry[0][1]} className={classes.listItem}/>
					<DeleteIcon className={classes.deleteIcon}/> 
				</ListItem>
			)
		})
		} 
	</List>
	)
}

export default withStyles(styles)(CashList)
