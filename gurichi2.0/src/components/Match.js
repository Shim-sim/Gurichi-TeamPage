/* eslint-disable */

import styled from 'styled-components'
import UpdateMatch from './UpdateMatch'
import { MdAddCircle } from "react-icons/md"
import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'

const Match = ({data: d, url}) => {
	const [data, setData] = useState(d)
	const [insertToggle, setInsertToggle] = useState(false)
	const navigate = useNavigate()
	
	const onDeleteMatch = () => {
		if (window.confirm('삭제 하시겠습니까?')) {
			axios.delete(`https://gurichi-teampage-data.run.goorm.io/data/${data.id}`)
			.then(res => {
				navigate("/")
			})
		}
	}
	
	const onSetInsertToggle = () => {
	setInsertToggle(!insertToggle)
}
	
	return (
	<>	
		<Card className="text-center">
			<Card.Header>{data.day}</Card.Header>
				<Card.Body>
					<Card.Title>{data.competitor}</Card.Title>
					<Card.Text className="result">
						{data.result}
					</Card.Text>
					<p>
						{data.scored}
					</p>
				</Card.Body>
			<Card.Footer className="text-muted detail-mvp">MVP: {data.mvp}</Card.Footer>
			<button onClick={onDeleteMatch}>삭제하기</button>
			<button onClick={onSetInsertToggle}>수정하기</button>
			{insertToggle &&	<UpdateMatch onSetInsertToggle={onSetInsertToggle} data={data} /> }
		</Card>	
		
			<div className="paginate">
			 <Link to={`/detail/${data.id-1}`}><IoIosArrowBack /></Link>
			 <Link to={`/detail/${data.id+1}`}><IoIosArrowForward/></Link>
			</div>
	</>	
	)
}

export default Match

