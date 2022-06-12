/*eslint-disable*/

import { useState } from 'react'
import './App.css'

function App() {
	
	let post = '구리치 승';
	let [matchResult, setMatchResult] = useState(['구리치 3:0', '구리치 5:1', '구리치 0:3'])
	let [like, setLike] = useState(0)
	let [modal, setModal] = useState(false)

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
						<div className="list">
							<h4 onClick={()=> {
									setModal(!modal)
								}}>{matchResult[i]} <span onClick={()=>{setLike(like+1)}}>🖐</span> {like} </h4>
							<p>5월 15일 경기</p>
						</div>
					)
				})
			}
			
			{
				modal == true ? <Modal  matchResult={matchResult}/> : null
			}
			
		</div>
	</>	
  );
}

const Modal = () => {
	return(
		<div className="modal">
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;


