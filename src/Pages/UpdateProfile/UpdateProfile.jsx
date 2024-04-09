import { useEffect } from "react";

const UpdateProfile = () => {
  useEffect(() => {
    document.title = "Update Profile";
  });
  return (
    <div>
      <h1>This is Update Profile Page</h1>
    </div>
  );
};

export default UpdateProfile;
