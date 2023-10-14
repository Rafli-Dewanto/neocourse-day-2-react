import { useAtom } from "jotai";
import { searchAtom } from "../lib/atoms";

const Search = () => {
  const [searchJobs, setSearchJobs] = useAtom(searchAtom);

  return (
    <input
      onChange={(e) => setSearchJobs(e.target.value)}
      value={searchJobs}
      className={`sticky top-6 z-50 mx-auto -mt-5 flex h-12 w-full max-w-[18rem] items-center rounded-md border-2 border-lochmara-500 bg-slate-50 p-2 shadow outline-none focus:border-4`}
      type="text"
      placeholder="Search Job"
    />
  );
};

export default Search;
