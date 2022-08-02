import { useState } from "react";
export const getComments = async (text) => {
  return [
    {
      id: "1",
      body: 'd',
      username: "Admin",
      userId: "1",
      parentId: null,
      createdAt: "2022-08-02T23:00:33.010+02:00",
    },
   
  ];
};

export const CreateComment = async (text, parentId = null) => {
  // let data = { 
  //   id: '1', 
  //   comment: text, 
  // }
  // const response =fetch('http://localhost:8000/api/addcomments', {
  // method: 'POST',
  // headers: {
  // ContentType: 'application/json',
  // },
  // body: JSON.stringify({ id: '2' , comment:text }),
  // })
  // .then(response => response.json())
  // .catch(error => console.error('Error:', error))
  // .then(response => console.log('Success:', JSON.stringify(response)));
  // if(response.ok){
  //   alert('Replay Added Successfully');
  //  }else{
  //   alert('There is something wrong');
  //  }


  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Admin",
    createdAt: new Date().toISOString(),
  };
};
// };

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
