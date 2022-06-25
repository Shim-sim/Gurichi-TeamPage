/*eslint-disable*/

import React from "react";
import { useState, useEffect } from 'react'
import { MdAddCircle } from "react-icons/md"
import { TiTrash, TiPencil } from "react-icons/ti";
import './MatchAdd.css'



//나중에 input 창을 하나 더 만들어서 경기 입력창 + 경기결과를 추가해도 될듯
const MatchAdd = ({
	onAddToggle,
	onAddMatch,
	selectedMatch,
	onRemove,
	onUpdate
}) => {
	const [value, setValue] = useState('')
	
	const onChange = (e) => {
		setValue(e.target.value)
	}
	
	const onSubmit = (e) => {
		e.preventDefault();
		onAddMatch(value);
		setValue('');
		onAddToggle();
	}
	
	//setValue를 변경한다는 것은 즉, value의 값이 변경된다는 것이고, 그러면 form이 열렸을 때 value의 값은 해당 ele의 값이다.
	useEffect(() => {
		if(selectedMatch) {
			setValue(selectedMatch.text)
		}
	},[selectedMatch])

	
	
	return (
		<div>
		<div className="background" onClick={onAddToggle}></div>
		<form onSubmit={
				selectedMatch ? 
					(e) => {
					e.preventDefault()
					onUpdate(selectedMatch.id, value)
				}
			: onSubmit
		}>
			
			<input
				placeholder="경기를 입력하세요"
				value={value}
				onChange={onChange}
			></input>
			
			{selectedMatch ? (
				<div className="rewrite">
					<TiPencil onClick={()=>{onUpdate(selectedMatch.id, value)}}/>
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