import React from "react";
import Media from "../components/Media";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery";

const MediaPage: React.FC = () => {
  return (
    <div>
      <Media />
      <Blog />
      {/* <Gallery /> */}
    </div>
  );
};

export default MediaPage;
