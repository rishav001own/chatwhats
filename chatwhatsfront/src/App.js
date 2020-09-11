import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js';
import  axios from './axios';

function App() {
  const [messages,setMessages]= useState('');


  useEffect(()=>{
    axios.get("./message/sync")
    .then((response) =>{
      // console.log(response.data)
      setMessages(response.data);
    });
  },[]);

  useEffect(() => {
    var pusher = new Pusher('b81c8ca60301b38c2ee3', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage]);
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);

  console.log(messages)


  return (
    <div className="app">
    <div className='app__body'>
    <Sidebar/>
    <Chat/>
    </div>
    </div>
  );
}

export default App;
