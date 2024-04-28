import React, { useState } from 'react';
import {NavLink,useNavigate} from "react-router-dom"
import { useCreateblogpostMutation, useGetLoggedUserQuery } from '../services/userAuthApi';
import { getToken,removeToken } from "../services/LocalStorageService";
const Blog = () => {
  const {access_token}= getToken();
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  //  const names = data.id
  // console.log( useGetLoggedUserQuery(access_token))

  //  console.log(names)
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [createblogpost,{ isLoading }] = useCreateblogpostMutation();
  // console.log(useCreateblogpostMutation())

  const handleSubmit = async(e) => {
    e.preventDefault();
    const datas = new FormData(e.currentTarget);
    // const tagsString = datas.get('tags');
    // const tagsArray = tagsString.split(',').map(tag => parseInt(tag));

    const actualData = {
      title: datas.get('title'),
      content: datas.get('content'),
      creation_date: datas.get('creation_date'),
      // category: datas.get('category'),
      // tags : tagsArray,
      // tags:datas.get('tags'),
      author: data.id
    }
    const res = await createblogpost(actualData);
    console.log(res);
  if(res.error){
    setServerError(res.error.datas.errors);
  }
  if(res.datas){
  //  console.log(res.datas);
    // storeToken(res.datas.token);
    navigate('/');
  }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="creation_date" className="block text-gray-700 font-bold mb-2">Creation Date</label>
        <input
          type="date"
          id="creation_date"
          name="creation_date"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {/* <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div> */}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Blog;
