/*eslint-disable*/

import { useState } from 'react'
import './App.css'

function App() {
	
	let [matchResult, setMatchResult] = useState(['구리치 3:0', '구리치 5:1', '구리치 0:3'])
	let [addLike, setAddLike] = useState([0,0,0])
	let [modal, setModal] = useState(false)
	let [title, setTitle] = useState(0)
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
									setModal(!modal)
								}}>{matchResult[i]} <span onClick={()=> {
										let copy = [...addLike]
										copy[i] += 1
										setAddLike(copy)
									}}>🖐</span> {addLike[i]} </h4>
							<p>5월 15일 경기</p>
						</div>
					)
				})
			}
			
			{
				modal == true ? <Modal  matchResult={matchResult} title={title}/> : null
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


