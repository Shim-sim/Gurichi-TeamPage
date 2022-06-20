/*eslint-disable*/

import { useState } from 'react'
import './App.scss'

function App() {
	const newDate = new Date().toLocaleString();
	
	let [mode, setMode] = useState(false);
	let [matchResult, setMatchResult] = useState([
		{id:1, title:'구리치 승', body:'mvp: 박광윤'},
    {id:2, title:'구리치 무 ', body:'심성보 3골'},
    {id:3, title:'고알레 승', body:'7:3 패배'}
	])
	let [addLike, setAddLike] = useState([0,0,0])
	let [modal, setModal] = useState(false)
	let [updateModal, setUpdateModal] = useState(false)
	let [title, setTitle] = useState(0)
	let [inputValue, setInputValue] = useState('')
	
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
								}}>{matchResult[i].title} <span onClick={(e)=> {
										e.stopPropagation()
										let copy = [...addLike]
										copy[i] += 1
										setAddLike(copy)
									}}>🖐</span> {addLike[i]} </h3>
							<h4>{ matchResult[i].body }</h4>
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
					<h4>{props.matchResult[props.title].title}</h4>
					<p>{props.matchResult[props.title].body}</p>
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
					<h4>{props.matchResult[props.title].title}</h4>
					<p>{props.matchResult[props.title].body}</p>
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


