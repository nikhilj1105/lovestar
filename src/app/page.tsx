import "./page.scss";

import Link from "next/link";
import videos from "./mock/videos";

export default function Home() {
  const uniqueCategories = videos.reduce((categories, video) => {
    if (!categories.includes(video.category)) {
      categories.push(video.category);
    }
    return categories;
  }, [] as string[]);


  const categoryThumbnails = uniqueCategories.map(category => {
    const firstVideo = videos.find(video => video.category === category);
    const totalVideos = videos.filter(video => video.category === category).length;
    return { firstVideo, totalVideos };
  });

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto py-4 px-4">
        <h1 className="text-2xl font-bold mb-8">Most Popular Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {categoryThumbnails.map((category, index) => (
            category.firstVideo && (
              <Link href={`/category/${category.firstVideo.category.toLowerCase().replaceAll(" ","-")}`} key={index} className="" passHref>
                <div className="bg-gray-800 hover:bg-gray-700 text-white pb-4 rounded">
                  <div className="img" />
                  <h2 className="font-bold mb-2 px-2 pt-3 inline-block">{category.firstVideo.category}</h2>
                  <span className="text-sm">{`(${category.totalVideos})`}</span>
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}