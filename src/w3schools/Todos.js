const Todos = props => {
	console.log('child render')
	return (
		<>
			<h2>My Todos</h2>
			{props.todos.map((todo, index) => {
				return <p key={index}>{todo}</p>
			})}
		</>
	)
}

export default Todos
