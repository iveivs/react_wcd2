import ListItem from './ListItem';

function List(props) {
	// const tasks = [
	// 	{ id: 0, title: 'Выпить кофе' },
	// 	{ id: 1, title: 'Сделать React приложение' },
	// 	{ id: 2, title: 'Позавтракать' },
	// ];

	const render = props.data.map((task) => {
		return <ListItem 
			onToggleImportant={props.onToggleImportant} 
			onToggleDone={props.onToggleDone}
			deleteItem={props.deleteItem}  
			key={task.id} 
			task={task} />;
	});

	const emptyList = (
		<li className="todo-item justify-content-center">
			<span className="todo-item-text">Список дел пуст</span>
		</li>
	);
	
	

	return <ul  className="todo-list">{props.data.length > 0 ? render : emptyList}</ul>;
}

export default List;
