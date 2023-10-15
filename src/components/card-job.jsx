import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const fadeInFromBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09 * index,
    },
  }),
};

export const CardJob = ({ job, index }) => {
  const { id, position, salary, area, company } = job;

  return (
    <motion.div
      variants={fadeInFromBottom}
      animate={"animate"}
      initial={"initial"}
      custom={index}
      className="
      relative mt-6 w-full max-w-[50rem] 
      cursor-pointer rounded-r-lg
      border-l-[10px]
      border-lochmara-100
      border-l-[#224CBD]
      bg-white from-blue-800 p-4
      shadow-lg
      transition-all
      hover:bg-slate-100"
    >
      <NavLink to={`/jobs/${id}`}>
        <li>
          <h2 className="mb-2 text-lg font-bold sm:text-2xl">{position}</h2>
          <p className="capitalize sm:text-lg">
            {company}
            <br />
            Area: {area}
          </p>
          <p className="mt-4 w-full text-right sm:mt-0 sm:text-2xl">
            <b>Salary: ${salary},000</b>
          </p>
        </li>
      </NavLink>
    </motion.div>
  );
};
