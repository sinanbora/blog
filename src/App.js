import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
//styles
import './App.css'
//pages and components
import Dashboard from './pages/dashboard/Dashboard'
import Create from './pages/create/Create'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Project from './pages/project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

import { useAuthContext } from './hooks/useAuthContext'

function App() {

	const { user, authIsReady } = useAuthContext();
	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					{user && <Sidebar/>}
					<div className='container'>
						<Navbar></Navbar>
						<Switch>
							<Route exact path='/'>
								{user && <Dashboard/>}
								{!user && <Redirect to="login"/>}
							</Route>
							<Route path='/create'>
								{user && <Create/>}
								{!user && <Redirect to="login"/>}
							</Route>
							<Route path='/login'>
								{!user && <Login/>}
								{user && <Redirect to="/"/>}
							</Route>
							<Route path='/signup'>
								{!user && <Signup/>}
								{user && <Redirect to="/"/>}
							</Route>
							<Route path='/projects/:id'>
								{user && <Project/>}
								{!user && <Redirect to="login"/>}
							</Route>
						</Switch>
					</div>
					{user && <OnlineUsers />}
				</BrowserRouter>
			)}

		</div>
	);
}

export default App
