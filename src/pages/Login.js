
import {useState, useEffect} from 'react';
import logo from '../assets/img/icons8-fancy-voxel-48.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBlog,faCircleCheck  } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

function Login(){
	const [formData, setFormData] = useState({
		username: localStorage.getItem('username') || '',
		password: localStorage.getItem('password') || ''
	});
	const [errorMessage, setErrorMessage] = useState('');
	const [showError, setShowError] = useState(false);
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [rememberMe, setRememberMe] = useState(false);
	const handleRememberChange = (e) => {
		setRememberMe(e.target.checked);
	  };
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value
		});
	};
	// When user unchecks "Remember me"
	
	useEffect(() => {
		if (document.getElementById('remember').checked) {
		  setRememberMe(true);
		} else{
		  setRememberMe(false);
		  localStorage.removeItem('username');
		  localStorage.removeItem('password');
		  setFormData({
			username: '',
			password: ''
		  });
		}
	  }, []);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted', formData);
		console.log('Form submitted');
		if (rememberMe) {
			localStorage.setItem('username', formData.username);
			localStorage.setItem('password', formData.password);
		} else{
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}
		const url = 'http://localhost:8000/api/v1/login';
		const option = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': `multipart/form-data`,
			},
		};
		axios.post(url,formData,option)
		.then(res => {
			console.log('res',res)
			localStorage.setItem('token', res.data.token);
			// console.log('token',localStorage.getItem('token'));
			setErrorMessage('Login successful');
			setLoginSuccess(true);
			setShowError(true);
			setTimeout(() => {
				setShowError(false);
			}, 3000);
			window.location.href = '/home'
		})
		.catch(err => {
			localStorage.removeItem('token');
			console.log('err',err);
			setErrorMessage(err.message || 'Something went wrong');
			setShowError(true);

			setTimeout(() => {
				setShowError(false);
			}, 3000);

		})
	}
	const handleClose = () => {
		setShowError(false);
	};
	return (
		<>
			{
				showError && errorMessage &&
				<div className={`fixed top-5 right-5 flex items-center w-full max-w-xs p-4 bg-white rounded-lg shadow dark:text-red-400 ${loginSuccess ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`} role="alert">
					<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
						<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"/>
						</svg>
						<span className="sr-only">Fire icon</span>
					</div>
					<div className="ms-3 text-sm font-normal">{errorMessage}</div>
					<button onClick={handleClose} type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-default" aria-label="Close">
						<span className="sr-only">Close</span>
						<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
						</svg>
					</button>
				</div>
			}
			<div className='h-screen items-center grid sm:grid-cols-2 bg-gray-50'>
				<div className='max-w-lg sm:w-full mx-auto sm:p-5'>
					<div className='logo flex items-center sm:mb-5'>
						<img src={logo} alt='logo' />
						<span className='ml-3 font-semibold dark:text-white text-2xl'>DModel</span>
					</div>
					<div className='hidden sm:block'>
						<div className='flex mb-5'>
							<div className='mr-3'>
							<FontAwesomeIcon icon={faCircleCheck} style={{color: "#00b37d",}} />
							</div>
							<div className=''>
								<div className='mb-2'>
									<span className='font-semibold text-gray-900 leading-none tracking-tight text-2xl'>Get started quickly</span>
								</div>
								<div>
									<span className='font-semibold text-sm line-clamp-3 text-gray-500'>Integrate with developer-friendly APIs or choose low-code.</span>
								</div>
							</div>
						</div>
						<div className='flex mb-5'>
							<div className='mr-3'>
							<FontAwesomeIcon icon={faCircleCheck} style={{color: "#00b37d",}} />
							</div>
							<div className=''>
								<div className='mb-2'>
									<span className='font-semibold text-gray-900 leading-none tracking-tight text-2xl'>Support any business model</span>
								</div>
								<div>
									<span className='font-semibold text-sm line-clamp-3  text-gray-500'>Host code that you don't want to share with the world in private.</span>
								</div>
							</div>
						</div>
						<div className='flex mb-5'>
							<div className='mr-3'>
							<FontAwesomeIcon icon={faCircleCheck} style={{color: "#00b37d",}} />
							</div>
							<div className=''>
								<div className='mb-2'>
									<span className='font-semibold text-gray-900 leading-none tracking-tight text-2xl'>Join millions of businesses</span>
								</div>
								<div>
									<span className='font-semibold text-gray-500 text-sm line-clamp-3'>Flowbite is trusted by ambitious startups and enterprises of every size.</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			
				<div className='w-full'>
					<form className="w-10/12 md:w-10/12 max-w-lg mx-auto border border-gray shadow rounded-lg p-7 bg-white" onSubmit={handleSubmit}>
						<div className='mb-5'>
							<span className='font-bold text-1xl text-gray-900 leading-tight tracking-tight sm:text-2xl'>Welcom back</span>
						</div>
						<div className="mb-5">
							<label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
							<div className="flex">
								<span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
									</svg>
								</span>
								<input type="text" id="username" className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="BonnieGreen" value={formData.username} onChange={handleChange}/>
							</div>
						</div>
						<div className="mb-5">
							<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
							<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" value={formData.password} onChange={handleChange} required />
						</div>
						<div className="flex items-start mb-5">
							<div className="flex items-center h-5">
							<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" onChange={handleRememberChange} />
							</div>
							<label htmlFor="remember" className="ms-2 text-sm font-semibold text-gray-500 dark:text-gray-300">Remember me</label>
						</div>
						<button type="submit" className="bg-green-500 text-white bg-blue-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Login</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login;