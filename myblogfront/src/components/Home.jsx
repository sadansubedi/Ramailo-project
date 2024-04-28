import React from 'react';
import { useBlogpostQuery,useGetRegisterUserQuery } from '../services/userAuthApi';

const Profile = () => {
  const { data, isSuccess, isLoading } = useBlogpostQuery();
console.log(data)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess || !data) {
    return <div>No data found</div>;
  }

//   const isoDateString = data.creation_date;
//   const date = new Date(isoDateString);
//   const month = date.getMonth() + 1;
//   const day = date.getDate();
//   const year = date.getFullYear();
//   const shortDate = `${month}/${day}/${year}`;

  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      {data.map((post) => (
        <div key={post.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4 ">
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2">Profile Details</div>
            <div className="mb-2 ">
              <h1 className="text-gray-700">Profile Title: {post.title}</h1>
              <h1 className="text-gray-700">Profile Content: {post.content}</h1>
              <h1 className="text-gray-700">Creation Date: {post.creation_date}</h1>
              <h1 className="text-gray-700">Author: {post.author}</h1>
              <h1 className="text-gray-700">Category: {post.category}</h1>
              <h1 className="text-gray-700">Tags: {post.tags}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
