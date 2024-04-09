import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs";
  });
  return (
    <div>
      <h1>This is Blogs Page</h1>
    </div>
  );
};

export default Blogs;
