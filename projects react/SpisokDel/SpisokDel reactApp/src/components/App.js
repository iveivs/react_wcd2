import { Component } from 'react'
import Header from './Header';
import Search from './Search';
import List from './List';
import Footer from './Footer';
import StatusBar from './StatusBar';

class App extends Component {

	state = {
		todoData: [
			{ id: 0, title: 'Выпить кофе' , important: false, done: false},
			{ id: 1, title: 'Сделать React приложение' , important: true, done: false},
			{ id: 2, title: 'Позавтракать', important: false, done: true },
		],
		term: '',
		status: ''
	}

	onToggleImportant = (id) => {
		console.log(id);
		this.setState((state) => {
			// // 1) найти индекс задачи в массиве todoData
			// const index = state.todoData.findIndex((el) => {return el.id === id})
			// // 2) сформировать новый {} но с обратным значением important
			// const oldItem = state.todoData[index]

			// const newItem = {...oldItem, important: !oldItem.important}
			// // 3) формируем новый массив todos в него новый {} с задачей на то же место где был предшествующий
			// const part1 = state.todoData.slice(0, index)
			// const part2 = state.todoData.slice(index + 1)

			// const newArray = [...part1, newItem, ...part2]

			// через map
			const newArray = state.todoData.map((task) => {
				return {
					...task,
					important: id === task.id ? !task.important : task.important
				}
			})
			return {
				todoData: newArray
			}
		})
	}

	onToggleDone = (id) => {
		this.setState((state) => {
			// 1) найти индекс задачи в массиве todoData
			const index = state.todoData.findIndex((el) => {return el.id === id})
			// 2) сформировать новый {} но с обратным значением important
			const oldItem = state.todoData[index]
			
			const newItem = {...oldItem, done: !oldItem.done, important: false }

			// старый, более длинный вариант
			// 3) формируем новый массив todos в него новый {} с задачей на то же место где был предшествующий
			// const part1 = state.todoData.slice(0, index)
			// const part2 = state.todoData.slice(index + 1)
			// const newArray = [...part1, newItem, ...part2]
			// return {
			// 	todoData: newArray
			// }

			// через map
			// const newArray = state.todoData.map((task) => {
			// 	return {
			// 		...task,
			// 		done: id === task.id ? !task.done : task.done
			// 	}
			// })

			// новый вариант, чуть короче
			const newArray = state.todoData.toSpliced(index, 1, newItem)


			return {
				todoData: newArray
			}
			
		})
	}

	deleteItem = (id) => {
		this.setState((state) =>{
			// const index = state.todoData.findIndex((el) =>  el.id === id)

			// // старый
			// const part1 = state.todoData.slice(0, index)
			// const part2 = state.todoData.slice(index + 1)
			// const newArray = [...part1, ...part2]
			// return {
			// 	todoData: newArray
			// }

			// новый 
			// const newArray = state.todoData.toSpliced(index, 1)
			// return {
			// 	todoData: newArray
			// }

			// Через фильтр
			const newArray = state.todoData.filter((task) => task.id !== id)
			return {
				todoData: newArray
			}
		}) 
	}

	addItem = (title) => {

		this.setState((state) => {

			const id = state.todoData[state.todoData.length - 1]['id'] + 1

			const newItem = { id: id, title: title, important: false, done: false}

			const newArray = [...state.todoData, newItem]

			return {
				todoData: newArray
			}
		})
	}

	

	search = (items, term) => {
		if(term.trim().length === 0){
			return items
		}

		return items.filter((item) => {
			if(item.title.toLowerCase().indexOf(term.toLowerCase().trim()) > -1){
				return true
			}
		})
	}

	changeTerm = (term) => {
		this.setState({
			term: term
		})
	}

	filterByStatus = (items, status) => {
		switch (status) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => {return item.done === false});
			case 'done':
				return items.filter((item) => {return item.done === true});
			default:
				return items;
		}
	}

	changeStatus = (status ) => {
		this.setState({status: status})
	}

	render() {

		const filteredBySearchItems = this.search(this.state.todoData, this.state.term )

		const filteredByStatusItems = this.filterByStatus(filteredBySearchItems, this.state.status)

		return (
			<div>
				<Header />
				<div className="search"> 
					<Search changeTerm={this.changeTerm} term={this.state.term}/>
					<StatusBar changeStatus={this.changeStatus} status={this.state.status}/>
				</div>
				<List 
					data={filteredByStatusItems} 
					onToggleImportant={this.onToggleImportant} 
					onToggleDone={this.onToggleDone}
					deleteItem={this.deleteItem}
				/>
				<Footer addItem={this.addItem}/>
				
			</div>
		)
	}
}

export default App;
