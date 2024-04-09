import { useLoaderData } from "react-router-dom";
import HomeProperty from "../HomeProperty/HomeProperty";
import { useEffect } from "react";

const HomeProperties = () => {
  const properties = useLoaderData();
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {properties.map((property) => (
        <HomeProperty key={property.id} property={property}></HomeProperty>
      ))}
    </div>
  );
};

export default HomeProperties;
