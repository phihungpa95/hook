import React, { useEffect, useState } from 'react';
import Content from "./components/content";
import Team from "./components/team";
import Studies from "./components/studies";
import Offline from "./components/offline";
import Video from "./components/video";
import ImageGroup from "./components/imageGroup";

export default function Index() {

    return (
      <div>
        <Content />
        <Team />
        <Studies />
        <Offline />
        <Video />
        <ImageGroup />
      </div>
    );
}