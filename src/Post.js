import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import "./post.css";
function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>Messages HERE</p>
      </div>

      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="Share" />
        <InputOption Icon={SendIcon} title="Send" color="Send" />
      </div>
    </div>
  );
}

export default Post;
