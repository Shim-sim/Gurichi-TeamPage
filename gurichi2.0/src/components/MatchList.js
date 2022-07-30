/* eslint-disable */
import dummy from './../db/data.json'
import { Link } from 'react-router-dom'

const MatchList = () => (
	<ul className="match_list">
		{dummy.data.map(day => (
			<li key={day.id}>
				<Link to={`/detail/${day.id}`}>{day.day}</Link>
			</li>
		))}
	</ul>
)

export default MatchList