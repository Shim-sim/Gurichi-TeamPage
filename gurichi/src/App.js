/*eslint-disable*/

import { useState } from 'react'
import './App.css'

function App() {
	
	let [matchResult, setMatchResult] = useState(['구리치 3:0', '구리치 5:1', '구리치 0:3'])
	let [addLike, setAddLike] = useState([0,0,0])
	let [modal, setModal] = useState(false)
	let [title, setTitle] = useState(0)
	let [inputValue, setInputValue] = useState('')
	
  return (
	<>
		<div className="App">
			<div className="nav-bar">
				<h3>
					<img src="img/logo_transparent.png" className="main-logo" alt="logo" />
				</h3>
			</div>
			{
				matchResult.map((a,i)=> {
					return (
						<div className="list" key={i}>
							<h4 onClick={()=> {
									setTitle(i)
									setModal(!modal)
								}}>{matchResult[i]} <span onClick={(e)=> {
										e.stopPropagation()
										let copy = [...addLike]
										copy[i] += 1
										setAddLike(copy)
									}}>🖐</span> {addLike[i]} </h4>
							<button onClick={()=> {
									let copy = [...matchResult]
									copy.splice(i,1)
									setMatchResult(copy)
								}}>X</button>
							<p>5월 15일 경기</p>
						</div>
					)
				})
			}
			
			<input type="text" onChange={(e)=> {
					setInputValue(e.target.value)
				}}/>
			<button onClick={()=> {
					let copy = [...matchResult]
					copy.push(inputValue)
					setMatchResult(copy)
				}}>경기결과 추가하기</button>
			
			{
				modal == true ? <Modal setMatchResult={setMatchResult}  matchResult={matchResult} title={title}/> : null
			}
			
		</div>
	</>	
  );
}

const Modal = (props) => {
	return(
		<div className="modal">
			<h4>{props.matchResult[props.title]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;


