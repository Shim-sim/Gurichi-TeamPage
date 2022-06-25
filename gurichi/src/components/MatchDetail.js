/*eslint-disable*/

import React from 'react';
import './MatchDetail.css';

const MatchDetail = ({game, onAddToggle, onChangeSelectedMatch}) => {
	const { id, text, result, mvp } = game
	//onChangeSelectedMatch(game) 이 부분은 내가 선택한 element의 객체를 담고있다.
	return(
		<div
			className="MatchDetail"
			onClick={()=> {
				onChangeSelectedMatch(game)
				onAddToggle()
			}}>
			{`vs ${text}`}
		</div>
	)	
}
export default MatchDetail