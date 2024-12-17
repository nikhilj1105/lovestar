"use client";
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const router = useRouter();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inp: HTMLInputElement | null = document.querySelector("#searchbar");
    if(inp){
      const search = inp.value.trim().replaceAll(" ", "-")
      router.push(`/search/${search}`)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar sm:block hidden flex">
      <input
        type="text"
        placeholder="Search videos..."
        className="search-input p-2 inline-block"
        id="searchbar"
      />
      <button type="submit" className="search-button ml-4 p-2 bg-zinc-50 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
