import ContentLoader from "react-content-loader";
import React from "react";

export default function RepoSkeleton() {
  return (
    <ContentLoader
      speed={2}
      height={700}
      foregroundColor="#2c1376"
      backgroundColor="#11053b"
      className="mt-[34px] mb-[46px] grid grid-cols-1 w-full lg:grid-cols-2 gap-x-8 gap-y-[34px]"
    >
      <rect x={8} y={8} rx={12} ry={12} width={500} height={150}/>      
    </ContentLoader>
  );
}
