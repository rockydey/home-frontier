import notFoundImg from "../../assets/images/404.jpg";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className='max-w-screen-xl mx-auto flex justify-center items-center'>
        <img className='w-3/5 mt-20 lg:mt-0' src={notFoundImg} alt='' />
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
