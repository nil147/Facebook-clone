import React from "react";
import Story from "./Story";
import "../styles/StoryReel.css";
import { Avatar } from "@material-ui/core";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.randomlists.com/img/people/usain_bolt.webp"
        profileSrc={"http://www.gstatic.com/tv/thumb/persons/609024/609024_v9_ba.jpg"}
        title="Usain Bolt "
      />
      <Story
        image="https://www.randomlists.com/img/people/the_rock.webp"
        profileSrc={"https://images.news18.com/ibnlive/uploads/2019/08/Sports-61.png"}
        title="The Rock"
      />
      <Story
        image="https://www.randomlists.com/img/people/daniel_radcliffe.webp"
        profileSrc={"https://pyxis.nymag.com/v1/imgs/3be/658/bbf861bc300312b8062768c239ae4251dc-21-daniel-radcliffe.2x.rhorizontal.w710.jpg"}
        title="Daniel Radcliffe"
      />
      <Story
        image="https://www.randomlists.com/img/people/mark_wahlberg.webp"
        profileSrc={"https://m.media-amazon.com/images/M/MV5BMTU0MTQ4OTMyMV5BMl5BanBnXkFtZTcwMTQxOTY1NA@@._V1_UY1200_CR145,0,630,1200_AL_.jpg"}
        title="Mark Wahlberg"
      />
    </div>
  );
}

export default StoryReel;
