import LeftSidebar from '../components/LeftSidebar';
import Content from '../components/Content';
import RightSidebar from '../components/RightSidebar';

const Home = ({ searchQuery }) => {
  return (
    <div className='grid grid-cols-[15rem_3fr_20rem]'>
      <LeftSidebar />
      <Content searchQuery={searchQuery} />
      <div className=''>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
