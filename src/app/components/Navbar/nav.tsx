import mockVideos from "./../../mock/videos";
import { TVideo } from "./../../components/interfaces";
import "./nav.scss";
import Link from "next/link";
const videos: TVideo[] = mockVideos;


function Nav(): React.ReactElement  {

  const uniqueCategories = videos.reduce((categories, video) => {
    if (!categories.includes(video.category)) {
      categories.push(video.category);
    }
    return categories;
  }, [] as string[]);

  return (
    <>
    <nav className={`bg-zinc-900 border-gray-200 mb-10`} id="navbar">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 rounded md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-gray-50">
                  Category <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      {uniqueCategories.map((cat, index) => (
                        cat && (
                          <li key={index}>
                            <Link href={`/category/${cat.replaceAll(" ", "-").toLowerCase()}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{cat}</Link>
                          </li>
                        )
                      ))}
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                    </ul>
                </div>
            </li>
            {/* <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
    </>

  );
};

export default Nav;
