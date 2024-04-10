import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Header from "../../components/Shared/Header/Header";

const Blogs = () => {
  const blogs = useLoaderData();

  useEffect(() => {
    document.title = "Blogs";
  });
  return (
    <div>
      <Header />
      <div className='max-w-screen-xl mx-auto mt-32 mb-20'>
        <section className='bg-[#1313130D] px-5 py-5  rounded-3xl mt-12 mb-24 text-center'>
          <div className='space-y-6 md:space-y-8 w-full'>
            <h1 className='playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#131313]'>
              Your Gateway to Dream Homes: Explore Residential Real Estate with
              Us
            </h1>
            <p className='text-lg font-normal work-sans w-full md:w-3/4 lg:w-1/2 mx-auto'>
              Discover your perfect home with our comprehensive residential real
              estate services. From buying and selling to investment advice and
              neighborhood insights, we are here to guide you every step of the
              way. Start your search today and let us help you find the home of
              your dreams
            </p>
            <button className='bg-colorPrimary text-[#fff] uppercase inline-block cursor-pointer px-7 py-4 rounded-lg border-0 text-white work-sans text-lg font-semibold'>
              Share Your Idea
            </button>
          </div>
        </section>
        <section className='my-20 p-5 lg:p-0'>
          <h2 className='work-sans text-3xl lg:text-3xl text-center font-bold text-colorTertiary mb-10'>
            All Blogs
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {blogs.map((blog) => (
              <Blog key={blog.id} blog={blog}></Blog>
            ))}
          </div>
          <div className='text-center'>
            <button className='bg-white uppercase inline-block cursor-pointer px-7 py-4 rounded-lg border-2 border-colorPrimary text-colorPrimary work-sans text-lg font-semibold mt-10'>
              See More Blogs
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
