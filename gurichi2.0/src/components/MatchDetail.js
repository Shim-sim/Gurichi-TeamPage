/* eslint-disable */
import styled from 'styled-components'
import Match from './Match'
import useAxios from './../Hooks/useAxios'
import { Link, useParams } from 'react-router-dom'

const Wrapper = styled.div`
    margin-top: 1.5rem;
		font-size: 1.3rem;
		color: #0c3b4e;
`;

const MatchDetail = () => {
	
	const { id } = useParams()
	const matchList = useAxios(`https://gurichi-teampage-data.run.goorm.io/data?id=${id}`)
	
	return (
		<Wrapper>
			{matchList.map(data => (
				<Match data={data}  key={data.id} />
			))}
		</Wrapper>
	)
}

export default MatchDetail