/* eslint-disable */

import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom'
import dummy from './../db/data.json'

const Wrapper = styled.div`
    margin-top: 1.5rem;
		font-size: 1.3rem;
		color: #0c3b4e;
`;

const MatchDetail = () => {
	const { id } = useParams()

	const matchList = dummy.data.filter(data => data.id === Number(id))
	
	return (
		<Wrapper>
			{matchList.map(data => (
			<Card className="text-center" key={data.id}>
				<Card.Header>{data.day}</Card.Header>
					<Card.Body>
						<Card.Title>{data.competitor}</Card.Title>
						<Card.Text className="result">
							{data.result}
						</Card.Text>
						<p>
							{data.scored}
						</p>
					</Card.Body>
				<Card.Footer className="text-muted detail-mvp">MVP: {data.mvp}</Card.Footer>
			</Card>
			))}
		</Wrapper>
	)
}

export default MatchDetail