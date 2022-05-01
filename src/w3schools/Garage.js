import Car from './Car'

function Garage() {
	const cars = ['Ford', 'BMW', 'Audi']

	return (
		<ul>
			{cars.map((car, index) => (
				<Car key={index} brand={car} />
			))}
		</ul>
	)
}

export default Garage
