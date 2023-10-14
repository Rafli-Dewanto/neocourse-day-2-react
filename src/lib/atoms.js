import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const searchAtom = atom("");

const darkModeAtom = atomWithStorage("dark-theme", false);

const userAtom = atom({
  id: 1,
  username: "Francisco",
  fullname: "Francisco Higgins",
  age: 22,
  address: "Jakarta",
  phone_number: "123456789",
  email: "mieme@ku.nu",
  field: "tech",
  applied_jobs: [
    {
      position: "Internal Accountability Manager",
      salary: 3,
      company: "company 1",
      description: "Central",
      category: "Analyst",
      area: "Accountability",
      id: "1",
      status: "accepted",
    },
    {
      position: "Human Program Coordinator",
      salary: 11,
      company: "company 2",
      description: "Investor",
      category: "Manager",
      area: "Research",
      id: "2",
      status: "rejected",
    },
  ],
});

export { searchAtom, userAtom, darkModeAtom };
