import { useAtom } from "jotai";
import { userAtom } from "../lib/atoms";
import AppliedJobsTable from "../components/applied-jobs-table";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useAtom(userAtom);
  const [username, setUsername] = useState(user.username);
  const [fullName, setFullName] = useState(user.fullname);
  const [address, setAddress] = useState(user.address);
  const [field, setField] = useState(user.field);
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [email, setEmail] = useState(user.email);
  const [isEditing, setIsEditing] = useState(false);
  const profilePic =
    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";

  function handleFormSubmit(e) {
    e.preventDefault();
    setUser({
      ...user,
      username: username,
      email: email,
      fullname: fullName,
      field: field,
      address: address,
      phone_number: phoneNumber,
    });
    setIsEditing(!isEditing);
  }

  return (
    <>
      <section className="mt-10 flex flex-wrap items-center justify-center gap-x-12">
        <img
          width={100}
          height={100}
          src={profilePic}
          className="rounded-full"
          alt="avatar user"
        />
        <div className="flex flex-col justify-start px-2 max-[450px]:items-center">
          <p className="text-2xl font-bold tracking-wide">{user.fullname}</p>
          <p className="text-xl font-bold capitalize tracking-wide text-lochmara-500">
            {user.username} | {user.field}
          </p>

          <pre className="whitespace-normal text-sm">
            {user.address} | {user.phone_number} | {user.email}
          </pre>

          <button
            onClick={() => setIsEditing(!isEditing)}
            disabled={isEditing}
            className={`
        mt-4 w-fit rounded-full 
        border-2
        border-lochmara-300
        ${isEditing ? "hidden" : "block"}
        px-3 py-2`}
          >
            Edit Profile
          </button>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {!isEditing ? (
          <motion.section
            key={"tables"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <p className="mb-4 px-4 font-semibold">Jobs Applied</p>
            <AppliedJobsTable />
          </motion.section>
        ) : (
          <motion.div
            key={"edit"}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mt-2 px-6 pb-6 md:mt-6 md:px-20 "
          >
            <form
              onSubmit={handleFormSubmit}
              className="mb-24 rounded-lg px-4 py-3 dark:bg-slate-700"
            >
              <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
                {/* email */}
                <div className="mb-6 ">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={email}
                    type="email"
                    id="email"
                    className="block w-full rounded-lg border border-gray-300 
                bg-gray-50 p-2.5 text-sm text-gray-900 
                focus:border-blue-500 focus:ring-blue-500"
                    placeholder="johndoe@gmail.com"
                    required
                  />
                </div>
                {/* fullname */}
                <div className="mb-6">
                  <label
                    htmlFor="fullname"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Fullname
                  </label>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    defaultValue={fullName}
                    id="fullname"
                    className="
                block w-full rounded-lg border border-gray-300 
                bg-gray-50 p-2.5 text-sm text-gray-900 
                focus:border-blue-500 
                focus:ring-blue-500 
                "
                    required
                  />
                </div>
                {/* username */}
                <div className="mb-6">
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    defaultValue={username}
                    type="text"
                    id="username"
                    className="block w-full 
                rounded-lg border border-gray-300 bg-gray-50 p-2.5 
                text-sm text-gray-900 
                focus:border-blue-500 
                focus:ring-blue-500"
                    required
                  />
                </div>
                {/* field */}
                <div className="mb-6">
                  <label
                    htmlFor="field"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Field
                  </label>
                  <input
                    onChange={(e) => setField(e.target.value)}
                    defaultValue={field}
                    type="text"
                    id="field"
                    className="block 
                w-full rounded-lg 
                border border-gray-300 
                bg-gray-50 p-2.5 
                text-sm text-gray-900 
                focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* phonenumber */}
                <div className="mb-6">
                  <label
                    htmlFor="phonenumber"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    defaultValue={phoneNumber}
                    type="telp"
                    id="phonenumber"
                    className="block w-full rounded-lg 
                border border-gray-300 
                bg-gray-50 p-2.5 text-sm text-gray-900 
                focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                {/* address */}
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Address
                  </label>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    defaultValue={address}
                    type="text"
                    id="address"
                    className="block w-full 
                rounded-lg border 
                border-gray-300 
                bg-gray-50 p-2.5 
                text-sm text-gray-900 
                focus:border-blue-500 
                focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <button
                  type="submit"
                  className="w-fit rounded-lg 
              bg-lochmara-700 px-5 py-2.5 text-center 
              text-sm font-medium text-white 
              hover:bg-lochmara-800 
              focus:outline-none 
              sm:w-auto"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(!isEditing)}
                  className="w-fit rounded-lg 
              bg-red-700 px-5 py-2.5 
              text-center text-sm 
              font-medium 
              text-white 
              hover:bg-red-800 
              focus:outline-none 
              sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
