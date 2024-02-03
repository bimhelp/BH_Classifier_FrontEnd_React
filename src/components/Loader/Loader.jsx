import React from "react";
import ContentLoader from "react-content-loader";
const Loader = () => {
  return (
    <ContentLoader
      speed={2}
      width={1415}
      height={78}
      viewBox="0 0 1415 78"
      backgroundColor="#e3e3e3"
      foregroundColor="#c7c7c7"
    >
      <rect x="15" y="0" rx="5" ry="5" width="110" height="24" />
      <rect x="130" y="0" rx="5" ry="5" width="1285" height="24" />
      <rect x="15" y="27" rx="5" ry="5" width="110" height="24" />
      <rect x="130" y="27" rx="5" ry="5" width="1285" height="24" />
      <rect x="15" y="54" rx="5" ry="5" width="110" height="24" />
      <rect x="130" y="54" rx="5" ry="5" width="1285" height="24" />
    </ContentLoader>
  );
};

export default Loader;
