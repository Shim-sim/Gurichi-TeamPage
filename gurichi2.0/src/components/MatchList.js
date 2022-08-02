/* eslint-disable */
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAxios from './../Hooks/useAxios'


const MatchList = () => {
	const data = useAxios('https://gurichi-teampage-data.run.goorm.io/data?_sort=day&_order=ASC')

	return (
	<>
		<h2>2022년의 경기 수({data.length})</h2>
		<ul className="match_list">
			{data.map(day => (
				<li key={day.id}>
					<Link to={`/detail/${day.id}`}>{day.day}</Link>
				</li>
			))}
		</ul>
		<Link to="/create_match" className="link">
			경기추가
		</Link>
	</>	
		
)}

export default MatchList