/*eslint-disable*/

import { useState } from 'react'
import './App.scss'

function App() {
	const newDate = new Date().toLocaleString();
	
	let [mode, setMode] = useState(false);
	let [matchResult, setMatchResult] = useState(['구리치 3:0', '구리치 5:1', '구리치 0:3'])
	let [addLike, setAddLike] = useState([0,0,0])
	let [modal, setModal] = useState(false)
	let [updateModal, setUpdateModal] = useState(false)
	let [title, setTitle] = useState(0)
	let [inputValue, setInputValue] = useState('')
	let [boardTime, setBoardTime] = useState(['1월경기', '2월경기', '3월경기'])
	
	const addList = () => {
		if (!inputValue) return
			let copy = [...matchResult]
					copy.push(inputValue)
			let addLikeCopy = [...addLike]
					addLikeCopy.push(0)
			let copyBoardTime = [...boardTime]
					copyBoardTime.push(newDate)
				setMatchResult(copy)
				setAddLike(addLikeCopy)
				setBoardTime(copyBoardTime)
	}
	

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
							<h3 onClick={()=> {
									setTitle(i)
									setModal(!modal)
								}}>{matchResult[i]} <span onClick={(e)=> {
										e.stopPropagation()
										let copy = [...addLike]
										copy[i] += 1
										setAddLike(copy)
									}}>🖐</span> {addLike[i]} </h3>
							<h4>{ boardTime[i] }</h4>
							<div className="click__btn">
							<button onClick={()=> {
									let copy = [...matchResult]
									copy.splice(i,1)
									let addLikeCopy = [...addLike]
									addLikeCopy.splice(i,1)
									setAddLike(addLikeCopy)
									setMatchResult(copy)
								}}>❌</button>
							<button onClick={()=>{setUpdateModal(!updateModal)}}>수정하기</button>
							</div>
							<p>5월 15일 경기</p>
						</div>
					)
				})
			}
			<input type="text" onChange={(e)=> {
					setInputValue(e.target.value)
				}}/>
			<button onClick={ addList }>경기결과 추가하기</button>
			{
				updateModal == true ?
					<Update matchResult={matchResult} title={title} setUpdateModal={setUpdateModal}
				updateModal={updateModal} setMode={setMode} mode={mode}/> : null
			}
			
			{
				modal == true ? <Modal setModal={setModal} modal={modal} matchResult={matchResult} 
				title={title}/> : null
			}
			
		</div>
	</>	
  );
}

const Modal = (props) => {
	return(
		<div className="modal">
			<div className="modal__overlay"></div>
				<div className="modal__content">
					<h4>{props.matchResult[props.title]}</h4>
					<p>날짜</p>
					<p>상세내용</p>
					<p><button onClick={()=>{props.setModal(!props.modal)}} className="modal__close">❌</button></p>
				</div>
		</div>
	)
}

function Update(props) {
		return(
			<div className="update">
			<div className="update__overlay"></div>
				<div className="update__content">
					<h4>{props.matchResult[props.title]}</h4>
					<p>상세내용 추가예정</p>
					<p><button onClick={()=>{
								props.setUpdateModal(!props.updateModal)
								props.setMode(!props.mode)
							}
						}	
				  className="update__close">❌</button></p>
				</div>
		</div>
		)
	}
export default App;


