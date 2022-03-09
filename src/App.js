import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component
{
	state={advice:''};
	
	componentDidMount()
	{
		//for checking purpose
		console.log('Component Did Mount');
		axios.get();
	}
	
	fetchAdvice=() => 
	{
		axios.get('https://api.adviceslip.com/advice')
			.then((response) => 
			{
				const {advice}
			})
			.catch((error)=>
			{
				
			}
			);
			
	}
	
	render()
	{
		
		const {advice} = this.state;
		return (
			
			<div className="app">
				<div className="card">
					<h1 className="heading">{advice}
			
		);
	}
}


export default App;