import { useState, useEffect } from 'react'
import axios from 'axios'

const useAxios = (url) => {
	const [data, setData] = useState([])
	
	useEffect(()=> {
		axios(url)
		.then(res => {
			setData(res.data)
		})
	}, [url])
	
	return data
}

export default useAxios