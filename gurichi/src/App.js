/*eslint-disable*/

import { useState } from 'react'
import Template from './components/Template'
import MatchList from './components/MatchList'
import './App.scss'

function App() {
	const [match, setMatch] = useState([
		{
			id: 1,
			text: "vs 마르틴스",
			result: "7:7 무",
			mvp: "김동민"
		},
		{
			id: 2,
			text: "vs 상록FC",
			result: "12:1 승",
			mvp: "윤상균"
		},
		{
			id: 3,
			text: "vs 두진FC",
			result: "9:1 승",
			mvp: "이은종"
		},
	])
	
	
	return ( 
	<Template matchLength={match.length}>
		<MatchList match={match}/>
	</Template>
	)
}
export default App;


