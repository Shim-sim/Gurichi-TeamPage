/* eslint-disable */

import styled from 'styled-components';
import Match from './Match.js'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    margin-top: 1.5rem;
		font-size: 1.3rem;
		color: #0c3b4e;
`;

const MatchDetail = () => {
	const { id } = useParams()
	const [matchlist, setMatchList] = useState([])
 //const matchList = dummy.data.filter(data => data.id === Number(id))
	
	useEffect(() => {
		axios.get(`https://gurichi-teampage-data.run.goorm.io/data?id=${id}`)
		.then((res)=>{
			setMatchList(res.data)
		})
	}, [id])
	
	
	return (
		<Wrapper>
			{matchlist.map(data => (
				<Match data={data}  key={data.id}/>
			))}
		</Wrapper>
	)
}

export default MatchDetail