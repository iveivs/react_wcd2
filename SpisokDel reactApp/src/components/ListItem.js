import { Component } from 'react'

class ListItem extends Component {

	// state = {
	// 	important: false,
	// 	done: false
	// }

	// onImportantClick = () => {
	// 	this.setState((state) => {
	// 		return {
	// 			important: !state.important
	// 		}
	// 	})
	// }

	// onDoneClick = () => {
	// 	this.setState((state) => {
	// 		return {
	// 			important: false,
	// 			done: !state.done
	// 		}
	// 	})
	// }

	render() {

		const { task, onToggleDone, onToggleImportant, deleteItem } = this.props 

		let classNames = 'todo-item'

		if(task.important) {
			classNames += ' important'
		}

		if(task.done) {
			classNames += ' done'
		}


		return (
			<li className={classNames}>
			<span onClick={() => {onToggleDone(task.id)}} className="todo-item-text">{task.title}</span>
			<div className="btn-group">
				<button onClick={() => {onToggleImportant(task.id)}} className="btn btn-outline-dark btn-sm">
					Важное
				</button>
				<button onClick={()=>{deleteItem(task.id)}} className="btn btn-outline-danger btn-sm">
					Удалить
				</button>
			</div>
		</li>
		)
	} 
}
// function ListItem(props) {
// 	return (
// 		<li className="todo-item">
// 			<span className="todo-item-text">{props.task.title}</span>
// 			<div className="btn-group">
// 				<button className="btn btn-outline-dark btn-sm">
// 					Важное
// 				</button>
// 				<button className="btn btn-outline-danger btn-sm">
// 					Удалить
// 				</button>
// 			</div>
// 		</li>
// 	);
// }

export default ListItem;
