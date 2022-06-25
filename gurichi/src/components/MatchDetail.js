import React from 'react';

const MatchDetail = ({game}) => {
	const { text } = game
	return(
		<div className="MatchDetail">
			{text}
		</div>
	)	
}
export default MatchDetail