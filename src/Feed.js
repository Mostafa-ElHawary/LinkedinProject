import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Post from "./Post";
import "./Feed.css";
// import firebase from 'firebase';
import { db } from "./firebase";
import firebase from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "sanny",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContaier">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <butotm onClick={sendPost} type="submit">
              Send
            </butotm>
          </form>
        </div>

        <div className="feed__inputOption">
          <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
          <InputOption Icon={SubscriptionsIcon} color="#E7A33E" title="Video" />
          <InputOption Icon={EventNoteIcon} color="#C0CBCD" title="Event" />
          <InputOption
            Icon={CalendarMonthIcon}
            color="#7FC15E"
            title="Write article"
          />
        </div>
      </div>

      {/*POSTS */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
