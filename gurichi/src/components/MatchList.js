/*eslint-disable*/

import React from 'react';
import MatchDetail from "./MatchDetail";

const MatchList = ({match}) => {
	return (
	<div className="matchList">
		{match.map(game => (
			<MatchDetail
				game={game}
				key={game.id}
			/>
		))}
	</div>
	)
}

export default MatchList