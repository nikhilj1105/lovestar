import { TVideo } from "./../../components/interfaces";
import mockVideos from "./../../mock/videos";
import Link from "next/link";
import { getTime } from "./../../components/helper";

const allVideos: TVideo[] = mockVideos;

export default async function Page({params}: {params: Promise<{ slug: string }>}) {
  const cat = (await params).slug.replaceAll("-", " ");
  const videos = allVideos.filter((video) => {
    return video.category.toLowerCase() === cat;
  }, [] as string[]);


  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-center text-4xl font-bold mb-8"><span className="capitalize">{cat}</span> - Videos ({videos.length})</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {videos.map((video, index) => (
          video && (
            <Link href={`/category/${video.category}`} key={index}>
              <div className="bg-gray-800 hover:bg-gray-700 text-white pb-2 rounded">
                <div className="img" />
                <h2 className="text-xl font-bold my-2 px-2">{video.title}</h2>
                <span className="text-sm px-2">{`${getTime(video.duration, "mm:ss")} min`}</span>
              </div>
            </Link>
          )
        ))}
      </div>
    </div>
  </div>
  );
}