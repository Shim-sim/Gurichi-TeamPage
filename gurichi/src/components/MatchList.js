/*eslint-disable*/

import React from 'react';
import MatchDetail from "./MatchDetail";
import  './MatchList.css';

const MatchList = ({matchs, onAddToggle, onChangeSelectedMatch}) => {
	return (
	<div className="matchList">
		{matchs.map(game => (
			<MatchDetail
				game={game}
				key={game.id}
				onAddToggle={onAddToggle}
				onChangeSelectedMatch={onChangeSelectedMatch}
			/>
		))}
	</div>
	)
}

export default MatchList