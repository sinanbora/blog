import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Sidebar></Sidebar>
				<div className='container'>
					<Navbar></Navbar>
					<Switch>
						<Route exact path='/'>
							<Dashboard></Dashboard>
						</Route>
						<Route path='/create'>
							<Create></Create>
						</Route>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<Route path='/signup'>
							<Signup></Signup>
						</Route>
						<Route path='/project/:id'>
							<Project></Project>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>

		</div>
	);
}

export default App
