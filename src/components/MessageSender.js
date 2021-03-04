import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import '../styles/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from '../firebase';
import firebase from 'firebase';
import Post from './Post';


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };




    return (
        <>
            <div className="messageSender">
                <div className="messageSender-top">
                    <Avatar src={user.photoURL} />
                    <form onSubmit={handleSubmit}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender-input" placeholder={`What's on your mind, ${user.displayName}?`} />
                        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL (optional)" />
                        <button onClick={handleSubmit} type="submit">Hidden submit</button>
                    </form>
                </div>
                <div className="messageSender-bottom">
                    <div className="messageSender-option">
                        <VideocamIcon style={{ color: "red" }} />
                        <h3>Live Video</h3>
                    </div>
                    <div className="messageSender-option">
                        <PhotoLibraryIcon style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                    </div>
                    <div className="messageSender-option">
                        <InsertEmoticonIcon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>



            </div>
            <div className="allPosts">
                {posts.map(({ id, data: { photoUrl, image, name, timestamp, message } }) => (
                    <Post style={{ paddingBottom: "10px" }}
                        key={id}
                        username={name}


                        message={message}
                        profilePic={photoUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default MessageSender
