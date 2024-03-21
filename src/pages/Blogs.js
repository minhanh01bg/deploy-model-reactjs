import React from 'react';
import { useState, useEffect,useRef } from 'react';
import axios from 'axios';
function Blogs() {

  const url_default = 'http://localhost:8000';
  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  }
  const [imageUrl, setImageUrl] = useState(url_default+'/media/detect/k9bk9vihmquk-license-plate_ccY9wyK.jpg');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return;
    const url = url_default+'/submit_image';
    const formData = new FormData();
    formData.append('image', file);
    formData.append('fileName', file.name);
    console.log('formData',formData);

    const option = {
      headers: {
        Accept: 'application/json',
        'Content-Type': `multipart/form-data;`,
      },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      }
    };
    
    axios.post(url,formData,option)
    .then(res => {
      console.log('res',res)
      setImageUrl(url_default+res.data.image_url);
    })
    .catch(err => {
      console.log('err',err)
    })
    
  }
  return (
    <>
      <div className='p-0 m-5'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 my-4'>
          <div className='col-span-2 rounded-lg'>
            <img src={imageUrl} alt='' />
          </div>
          <div className='col-span-1'>
            <div className='mb-5'>
              <span className='font-medium text-gray-900 dark:text-white'>Function</span>
            </div>
            <form className="" onSubmit={handleSubmit}>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blur</label>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Detect car and plate</label>
              </div>
              
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="user_avatar">Upload file</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file" name='image'  onChange={handleChange}  />
              <div className="mb-5 mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
              
              <button type="submit" className="mb-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              
              <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:`${uploadProgress}%`}}> {uploadProgress}%</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;