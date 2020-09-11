import React from 'react';
import './Chat.css';
import {SearchOutlined,AttachFile,MoreVert} from '@material-ui/icons';
import { Avatar, IconButton} from "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

const Chat = () => {
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
                <p className="chat__message">
                    <span className="chat__name">rishava</span>
                        message...... 
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">rishava</span>
                        message...... 
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
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