/* eslint-disable */

import styled from 'styled-components';
import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


const Button = styled.button`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border: 0 none;
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #18b3d1;
	margin-left: 1rem;
`


const CreateMatch = () => {
	const navigate = useNavigate()
	
	const onSubmit = (e) => {
		e.preventDefault()
		axios.post('https://gurichi-teampage-data.run.goorm.io/data/', {
			day: dayRef.current.value,
			competitor: competitorRef.current.value,
			result: resultRef.current.value,
			mvp: mvpRef.current.value,
			scored: scoreRef.current.value
		})
		.then(res => {
			alert('경기정보가 추가 됐습니다')
			navigate(`/detail/${res.data.id}`)
		})
	}
	
	const dayRef = useRef(null)
	const competitorRef = useRef(null)
	const resultRef = useRef(null)
	const mvpRef = useRef(null)
	const scoreRef = useRef(null)
	
	return (
		<form onSubmit={onSubmit}>
			<div className="input_area">
				<label>경기날짜</label>
				<input type="text" placeholder="2022년 00월 00일" ref={dayRef}/>
			</div>
			<div className="input_area">
				<label>경기상대</label>
				<input type="text" placeholder="FC구리치" ref={competitorRef}/>
			</div>
			<div className="input_area">
				<label>경기결과</label>
				<input type="text" placeholder="ex) 12:1 승, 3:0 패" ref={resultRef}/>
			</div>
			<div className="input_area">
				<label>경기MOM</label>
				<input type="text" placeholder="심성보" ref={mvpRef}/>
			</div>
			<div className="input_area">
				<label>득점자</label>
				<input type="text" placeholder="심성보 2골, 박광윤 3골 ..." ref={scoreRef}/>
			</div>
			<Button>경기 저장</Button>
		</form>
	)
}

export default CreateMatch