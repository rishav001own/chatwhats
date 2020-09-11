import React from 'react';
import { Avatar} from "@material-ui/core";
import "./SidebarChat.css"

const SidebarChat = () => {
    return (
        <div className="sidebarChat">
          <Avatar/>
            <div className="sidebarChat__info">
                <h3>Name</h3>
                <p>Message .....</p>
            </div>
        </div>
    );
};

export default SidebarChat;