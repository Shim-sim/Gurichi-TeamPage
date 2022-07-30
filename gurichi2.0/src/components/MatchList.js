/* eslint-disable */
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const MatchList = () => {
	const [data, setData] = useState([])
	
	useEffect(() => {
		axios.get('https://gurichi-teampage-data.run.goorm.io/data')
		.then((res)=>{
			setData(res.data)
		})
	}, [])
	return (
	
	<ul className="match_list">
		{data.map(day => (
			<li key={day.id}>
				<Link to={`/detail/${day.id}`}>{day.day}</Link>
			</li>
		))}
	</ul>
		
)}

export default MatchList