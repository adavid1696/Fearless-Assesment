import React, { useEffect, useState } from 'react'
import './Counter.css'


const URL = 'https://api.countapi.xyz/hit/mysite.com/1ccb732e-b55a-4404-ad3f-0f99c02fe44e'

function Counter() {

	const [data, setdata] = useState()

	const fetchAPI = async () => {
			const response = await fetch(URL);
			const responseJSON = await response.json()

			setdata(responseJSON.value)
		}

	useEffect(() => {

		fetchAPI()
	
	}, [])
	
	return (
		<div className='Counter'>
			<h3 className='data'>Counter: {data} </h3>
			<button className='hit' onClick={() => fetchAPI()}>Hit</button>
		</div>
		
	)
}

export default Counter