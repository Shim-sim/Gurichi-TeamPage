/*eslint-disable*/

import React from "react";
import { useState, useEffect } from 'react'
import { MdAddCircle } from "react-icons/md"
import { TiTrash, TiPencil } from "react-icons/ti";
import './MatchAdd.css'


const MatchAdd = ({
	onAddToggle,
	onAddMatch,
	selectedMatch,
	onRemove,
	onUpdate
}) => {
	
	//value, setValue
	const [data, setdata] = useState({
		text: '',
		mvp: '',
		result: ''
	})
	
	const { text, mvp, result} = data;
	
	
	// const [mvpValue, setMvpValue] = useState('')
	// const [matchResult, setMatchResult] = useState('')
	

	
	const onChange = (e) => {
		const { value, name} = e.target
		setdata({
			...data, [name]: value
		})
	}
	
	// const onChangeMvp = (e) => {
	// 	setMvpValue(e.target.value)
	// }
	
	// const onChangeResult = (e) => {
	// 	setMatchResult(e.target.value)
	// }
	
	
	const onSubmit = (e) => {
		e.preventDefault();
		onAddMatch(text, result, mvp);
		setdata('');
		onAddToggle();
	}
	
	//setValue를 변경한다는 것은 즉, value의 값이 변경된다는 것이고, 그러면 form이 열렸을 때 value의 값은 해당 ele의 값이다.
	useEffect(() => {
		if(selectedMatch) {
			setdata(selectedMatch)
		}
	},[selectedMatch])

	
	return (
		<div>
		<div className="background" onClick={onAddToggle}></div>
		<form onSubmit={
				selectedMatch ? 
					(e) => {
					e.preventDefault()
					onUpdate(selectedMatch.id, text, result, mvp)
				}
			: onSubmit
		}>
			
			<input
				name="text"
				placeholder="경기를 입력하세요"
				value={text}
				onChange={onChange}
			/>
			<input
				name="mvp"
				placeholder="Mvp를 입력하세요"
				value={mvp}
				onChange={onChange}
			/>
			<input
				name="result"
				placeholder="경기결과를 입력하세요"
				value={result}
				onChange={onChange}
			/>
			
			{selectedMatch ? (
				<div className="rewrite">
					<TiPencil onClick={()=>{onUpdate(selectedMatch.id, text, result, mvp)}}/>
					<TiTrash onClick={()=>{onRemove(selectedMatch.id)}}/>
				</div>) :
			
				(<button type="submit">
					<MdAddCircle />
				</button>)}
			
		</form>
		</div>
	)
}

export default MatchAdd;