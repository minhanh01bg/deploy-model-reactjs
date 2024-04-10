import  img1  from '../assets/images/wallhaven-1poo61.jpg';
import img2 from '../assets/images/wallhaven-jxd1x5.jpg';
import img3 from '../assets/images/wallhaven-jxlwpm.jpg'; 
import img4 from '../assets/images/wallhaven-werowr.png'; 
import img5 from '../assets/images/wallhaven-zyp5yo.jpg';

function Home() {
    return (
        <div className='p-0 m-5'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 my-4'>
              <div className='col-span-2 rounded-lg'>
								{/* <img src='http://localhost:8000/video_feed' alt='' /> */}
							</div>
              <div className='col-span-1'>
                <form className="">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
                  <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file" />
                  <div className="mb-5 mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
                  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
							<div>
								<img className='object-cover h-48 w-96 rounded-lg' src={img1} alt='' />
							</div>
							<div>
								<img className='object-cover h-48 w-96 rounded-lg' src={img2} alt='' />
							</div>
							<div>
								<img className='object-cover h-48 w-96 rounded-lg' src={img3} alt='' />
							</div>
							<div>
								<img className='object-cover h-48 w-96 rounded-lg' src={img4} alt='' />
							</div>
              <div>
								<img className='object-cover h-48 w-96 rounded-lg' src={img5} alt='' />
							</div>
            </div>
            
        </div>
    )
}

export default Home;