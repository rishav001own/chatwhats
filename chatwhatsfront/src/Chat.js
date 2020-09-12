import React from 'react';
import './Chat.css';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import { Avatar, IconButton} from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = ({ messages }) => {
    console.log(messages)
    return (
        <div className="chat">
            <div className="chat__header">
                 <Avatar />
                <div className="chat__headerInfo">
                    <h3>Name</h3>
                    <p>Last Seen at.....</p>
                    </div>                
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
            {messages.map((message)=>(
                <p className={`chat__message ${message.recevied && "chat__reciever"}`}>
                    <span className="chat__name">{message.name}</span>
                        {message.message}
                    <span className="chat__timestamp">{message.timestamp}</span>
                </p>
            ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input placeholder="type a message" type="text"/>
                    <button type="submit">Send</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
};

export default Chat;