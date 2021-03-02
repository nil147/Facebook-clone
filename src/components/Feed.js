import React from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "../styles/Feed.css";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/122741010_3670034729687018_5321943571976772732_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=-WHNOxg7uLMAX-oFuaE&_nc_ht=scontent.fhfa1-1.fna&oh=86078412d606d2a0f27a666faed3dfe4&oe=600A16F7"
      message="I like this"
      time="A few sec"
      username="Shon"
      image="https://cdn.vox-cdn.com/thumbor/H1DZ0R_44CsPJO8XZynMuAzdMfI=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10595581/jbareham_180405_1777_facebook_0003.jpg"
      />
      <Post
      profilePic="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/19990372_10206933330010760_5370725166805229661_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=dGjSEj7ijfwAX9IAwxl&_nc_ht=scontent.fhfa1-2.fna&oh=cf9da940dcea5d74c37cbaf0f2334e4e&oe=600865E7"
      message="This is Nice"
      time="A few sec"
      username="Roei"
      image=""
      />
      <Post
      profilePic="https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/183274_458134360875652_1417717168_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=07_u0-pIk_AAX_JNOUZ&_nc_ht=scontent.fhfa1-1.fna&oh=51b4eb75b4690eea63353651de095f2b&oe=60095861"
      message="Good"
      time="A few sec"
      username="Eldar"
      image=""
      />
    </div>
  );
}

export default Feed;
