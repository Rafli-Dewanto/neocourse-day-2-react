export default function filteredJobs(jobsData, searchJobs) {
  const filtered = jobsData.filter((job) => {
    return job.position.toLowerCase().includes(searchJobs.toLowerCase());
  });

  return filtered;
}
