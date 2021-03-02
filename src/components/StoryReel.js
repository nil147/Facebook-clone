import React from "react";
import Story from "./Story";
import "../styles/StoryReel.css";
import { Avatar } from "@material-ui/core";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=OgWdN5bcV8UAX-pAZbq&_nc_ht=scontent.fhfa1-2.fna&oh=0157f0aa303567597fa92dc6e7390481&oe=600859F5"
        profileSrc={Avatar}
        title="Nil Feinstein"
      />
      <Story
        image="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=OgWdN5bcV8UAX-pAZbq&_nc_ht=scontent.fhfa1-2.fna&oh=0157f0aa303567597fa92dc6e7390481&oe=600859F5"
        profileSrc={Avatar}
        title="Nil Feinstein"
      />
      <Story
        image="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=OgWdN5bcV8UAX-pAZbq&_nc_ht=scontent.fhfa1-2.fna&oh=0157f0aa303567597fa92dc6e7390481&oe=600859F5"
        profileSrc={Avatar}
        title="Nil Feinstein"
      />
      <Story
        image="https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/47026336_2159452730753187_8522979273080832000_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=OgWdN5bcV8UAX-pAZbq&_nc_ht=scontent.fhfa1-2.fna&oh=0157f0aa303567597fa92dc6e7390481&oe=600859F5"
        profileSrc={Avatar}
        title="Nil Feinstein"
      />
    </div>
  );
}

export default StoryReel;
