import ContentLoader from "react-content-loader";
import React from "react";

export default function SearchUserSkeleton() {
  return (
    <ContentLoader
      speed={2}
      height={96}
      foregroundColor="#2c1376"
      backgroundColor="#11053b"
      className="bg-111729 rounded-xl relative top-24 w-3/4 lg:w-2/4 xl:w-[38%]"
    >
      <rect x={8} y={8} rx={12} ry={12} width={80} height={80}/>
      <rect x={100} y={20} rx={12} ry={12} width={60} height={24}/>
      <rect x={100} y={50} rx={12} ry={12} width={200} height={24}/>
    </ContentLoader>
  );
}
