/* eslint-disable */

import React from 'react'
import Header from './components/Header';
import MatchList from './components/MatchList';
import MatchDetail from './components/MatchDetail';
import EmptyPage from './components/EmptyPage'
import CreateMatch from './components/CreateMatch'
import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

function App() {

  return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={ <MatchList/> } />
				<Route path="/detail/:id" element={ <MatchDetail /> } />
				<Route path="create_match" element={ <CreateMatch /> } />
				<Route path="*" element={ <EmptyPage /> } />
			</Routes>
		</>
  );
}

export default App;
