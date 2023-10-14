import React from "react";
import { CardJob } from "../components/card-job";
import filteredJobs from "../utils/filtered-jobs";
import MainLayout from "../layouts/main-layout";
import useJobs from "../hooks/use-jobs";
import { useAtom } from "jotai";
import { searchAtom, userAtom } from "../lib/atoms";
import Banner from "../components/Banner";
import Search from "../components/Search";

export default function Home() {
  const { jobs } = useJobs();
  const [user, setUser] = useAtom(userAtom);
  const [searchJobs, setSearchJobs] = useAtom(searchAtom);
  const jobData = filteredJobs(jobs, searchJobs);

  const idsToRemove = [];

  user.applied_jobs.forEach((value) => {
    idsToRemove.push(value.id);
  });

  // remove semua job yang sudah ada diapply
  const filteredItems = jobData.filter(
    (item) => !idsToRemove.includes(item.id),
  );

  return (
    <>
      <Banner />
      <Search />
      {/* Job Lists */}
      <ul className="container mx-auto mt-5 grid w-full place-items-center px-4 pb-24">
        {filteredItems.map((job, index) => (
          <CardJob key={job.id} job={job} index={index} />
        ))}
      </ul>
    </>
  );
}
