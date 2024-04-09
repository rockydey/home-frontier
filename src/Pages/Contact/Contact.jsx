import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <div>
      <h1>This is Contact Page</h1>
    </div>
  );
};

export default Contact;
