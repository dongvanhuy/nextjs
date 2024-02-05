"use client";

import { useRouter } from "next/navigation";

const ContactComponent = () => {
  const router = useRouter();
  const handleClickBack = () => {
    router.push("/");
  };
  return (
    <>
      <div>Contact Component</div>
      <button onClick={() => handleClickBack()}>Back to Home</button>
    </>
  );
};

export default ContactComponent;
