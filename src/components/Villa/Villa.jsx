import { useLoaderData } from "react-router-dom";
import HomeProperty from "../HomeProperty/HomeProperty";
import { useEffect } from "react";

const Villa = () => {
  const properties = useLoaderData();
  const villas = properties.filter(
    (property) => property.segment_name === "Villa"
  );

  useEffect(() => {
    document.title = "Home - Villa";
  });
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {villas.map((property) => (
        <HomeProperty key={property.id} property={property}></HomeProperty>
      ))}
    </div>
  );
};

export default Villa;
