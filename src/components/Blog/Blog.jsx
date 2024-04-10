import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { title, author, date, category, tags, content, image } = blog;
  return (
    <div className='card p-3 md:p-6 rounded-2xl border border-[#13131326]'>
      <div>
        <h3 className='playfair text-colorTertiary text-xl font-semibold mt-4'>
          {title}
        </h3>
        <div className='flex flex-row-reverse justify-end gap-4 items-center my-5'>
          <p className='work-sans text-colorSecondary text-base font-medium'>
            By: {author}
          </p>
          <img src={image} className='w-14 rounded-full' alt='' />
        </div>
        <div className='flex flex-wrap gap-3'>
          {tags.map((tag, idx) => (
            <p
              className='work-sans text-base font-medium text-colorPrimary px-4 py-2 bg-[#23BE0A0D] rounded-full'
              key={idx}>
              {tag}
            </p>
          ))}
        </div>
        <div className='border border-dashed border-colorSecondary my-4'></div>
      </div>
      <div className='card-body px-0 py-0'>
        <p className=' work-sans text-base font-normal text-colorSecondary'>
          {content} <span className='font-bold'>...</span>{" "}
          <span className='cursor-pointer font-bold text-lg underline text-[#0039b8]'>
            See More
          </span>
        </p>
      </div>
      <div className='justify-end'>
        <div className='border border-dashed border-[#13131326] my-4'></div>
        <div className='flex justify-between'>
          <p className='text-colorSecondary text-base font-normal'>
            <span className='font-semibold'>Publish Date:</span> {date}
          </p>
          <p className='text-colorSecondary text-base font-normal'>
            <span className='font-semibold'>Category:</span> {category}
          </p>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
