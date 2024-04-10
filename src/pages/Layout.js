import { Outlet } from "react-router-dom";
import logo from '../assets/img/icons8-fancy-voxel-48.png';
import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBlog, faTable } from '@fortawesome/free-solid-svg-icons'
import '../css/Layout.css';
import { Sidebar, Navbar, Avatar, Dropdown } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';


// import type { ModalOptions, ModalInterface } from 'flowbite'

function Layout() {
	const [isClicked, setIsClicked] = useState(0);
	// useEffect(()=>{
	//     setIsClicked(0);
	// },[])
	const handleToggle = (index) => {
		setIsClicked(index);
	}

	const itemMenu = [
			{id: 0, name: 'Home', path: '/home', icon: faHouse},
			{id: 1, name: 'Blogs', path: '/blogs', icon: faBlog},
			{id: 2, name: 'Tables', path: '/tables', icon: faTable},
			{id: 3, name: 'Example', path: '/example', icon: faTable},
	]
	return (
		<>
			<div className='full flex'>
				<Sidebar aria-label="Default sidebar example" className=''>
						<Sidebar.Logo href="#" img={logo} imgAlt="Flowbite logo">
								Dmodel
						</Sidebar.Logo>
						<Sidebar.Items>
								<Sidebar.ItemGroup>
										{itemMenu.map((item,index) =>(
												
											<Sidebar.Item
												key = {item.id}
												href={item.path}
												labelColor={isClicked === index ? '':'dark'}
												onClick={()=> handleToggle(index)}
												className='m-0 pl-0'
											>
													<FontAwesomeIcon icon={item.icon} className='me-3 text-black icon'/>
													{item.name}
											</Sidebar.Item>
												
										))}
										<Sidebar.Item href="#" icon={HiChartPie}>
												Dashboard
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
												Kanban
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiInbox} label="3">
												Inbox
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiUser}>
												Users
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiShoppingBag}>
												Products
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiArrowSmRight}>
												Sign In
										</Sidebar.Item>
										<Sidebar.Item href="#" icon={HiTable}>
												Sign Up
										</Sidebar.Item>
								</Sidebar.ItemGroup>
						</Sidebar.Items>
				</Sidebar>
				<div className='w-full overflow-y-auto size-full'>
					{/* rounded */}
					<Navbar fluid className='border-b-2 border-indigo-500 shadow-md'>
						<div className="flex md:order-last">
							<Dropdown
								arrowIcon={false}
								inline
								label={
									<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
								}
							>
								<Dropdown.Header>
									<span className="block text-sm">Bonnie Green</span>
									<span className="block truncate text-sm font-medium">name@flowbite.com</span>
								</Dropdown.Header>
								<Dropdown.Item>Dashboard</Dropdown.Item>
								<Dropdown.Item>Settings</Dropdown.Item>
								<Dropdown.Item>Earnings</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item>Sign out</Dropdown.Item>
							</Dropdown>
							<Navbar.Toggle />
						</div>
						<form className="flex items-center md:max-w-32 lg:max-w-xs ms-auto max-w-28 md:order-2 mr-3">   
							<label htmlFor="simple-search" className="sr-only">Search</label>
							<div className="relative w-full">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
									</svg>
								</div>
								<input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
							</div>
							<button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								<svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
								</svg>
								<span className="sr-only">Search</span>
							</button>
						</form>
						<Navbar.Collapse className=''>
			  {itemMenu.map((item,index) =>(
				<Navbar.Link key={item.id} href={item.path}>{item.name}</Navbar.Link>
			  ))}
							{/* <Navbar.Link href="/home" active>Home</Navbar.Link>
							<Navbar.Link href="/blogs">About</Navbar.Link> */}
							{/* <Navbar.Link href="#">Services</Navbar.Link>
							<Navbar.Link href="#">Pricing</Navbar.Link>
							<Navbar.Link href="#">Contact</Navbar.Link> */}
						
						</Navbar.Collapse>	
						
					</Navbar>
					<div className='container mx-auto'>
							<Outlet />
					</div>
				</div>
			</div>
		</>
	)
}

export default Layout;