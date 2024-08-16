import data from '../../data/data.json'

const Realizations = () => {
	return (
		<div className='table-realization'>
			<table>
				<thead>
					<tr>
						<th className='table-realization__header'>Project Name</th>
						<th className='table-realization__header'>Year</th>
						<th className='table-realization__header'>City, Country</th>
						<th className='table-realization__header'>Total Area</th>
						<th className='table-realization__header'>Description</th>
					</tr>
				</thead>
				<tbody>
					{data.map((project, index) => (
						<tr key={index} className='table-realization__row'>
							<td className='table-realization__cell'>{project.projectName}</td>
							<td className='table-realization__cell'>{project.year}</td>
							<td className='table-realization__cell'>
								{project.city}, {project.country}
							</td>
							<td className='table-realization__cell'>{project.totalArea}</td>
							<td className='table-realization__cell'>{project.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Realizations
