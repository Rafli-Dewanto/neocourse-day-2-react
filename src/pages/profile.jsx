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
    // todo update user
  }

  return (
   <div>profile</div>
  );
}
