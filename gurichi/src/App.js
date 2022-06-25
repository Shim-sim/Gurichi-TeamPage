/*eslint-disable*/

import { useState } from 'react'
import Template from './components/Template'
import MatchList from './components/MatchList'
import MatchAdd from './components/MatchAdd'
import { MdAddCircle } from "react-icons/md"
import './App.scss'

let nextId = 4
function App() {
	
	const [selectedMatch, setSelectedMatch] = useState(null)
	const [addToggle, setAddToggle] = useState(false)
	const [matchs, setMatchs] = useState([
		{
			id: 1,
			text: " 마르틴스",
			result: "7:7 무",
			mvp: "김동민"
		},
		{
			id: 2,
			text: " 상록FC",
			result: "12:1 승",
			mvp: "윤상균"
		},
		{
			id: 3,
			text: " 두진FC",
			result: "9:1 승",
			mvp: "이은종"
		},
	])
	
	const onAddToggle = () => {
		if (selectedMatch) {
			setSelectedMatch(null)
		}
		setAddToggle(!addToggle)
	}
	
	// onAddMatch 이 부분의 result랑 mvp 추가는 연구하기
	const onAddMatch = (text) => {
		if(!text) return;
		const match = {
			id: nextId,
			text,
			result: '',
			mvp: ''
		};
		setMatchs(matchs => matchs.concat(match));
		nextId++
	}
	
	const onChangeSelectedMatch = (match) => {
		setSelectedMatch(match)
	}
	
	
	return ( 
	<Template matchLength={matchs.length}>
		<MatchList
			matchs={matchs}
			onAddToggle={onAddToggle}
			onChangeSelectedMatch={onChangeSelectedMatch}/>
			
		<div className="add-todo-button"><MdAddCircle onClick={onAddToggle}/></div>
		
			{addToggle &&(
				<MatchAdd 
					onAddToggle={onAddToggle}
					onAddMatch={onAddMatch}
					selectedMatch={selectedMatch}
				/>
			)}
		
	</Template>
	
	)
}
export default App;


