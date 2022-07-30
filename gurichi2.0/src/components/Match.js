import { Card } from 'react-bootstrap';

const Match = ({data}) => {
	
	return (
		<Card className="text-center">
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
	)
}

export default Match