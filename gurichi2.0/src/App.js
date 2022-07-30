/* eslint-disable */

import Header from './components/Header';
import MatchList from './components/MatchList';
import MatchDetail from './components/MatchDetail';
import EmptyPage from './component/EmptyPage'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
	
  return (
		<>
			<Header/>
			<Routes>
				<Route path="/" element={ <MatchList/> } />
				<Route path="/detail/:id" element={ <MatchDetail/> } />
				<Route path="*" element={ <EmptyPage /> } />
			</Routes>
		</>
  );
}

export default App;
