import style from './page.module.css';
import ShootingStars from './shooting-stars';
import Intro from './intro';

const HomePage: React.FC = () => {
  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,rgba(0,0,0,0)_80%)]' />
        <div className={`${style.stars} absolute inset-0`} />
      </div>
      <Intro />
      <ShootingStars
        starColor='#9E00FF'
        trailColor='#2EB9DF'
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor='#FF0099'
        trailColor='#FFB800'
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor='#00FF9E'
        trailColor='#00B8FF'
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
    </div>
  );
};

export default HomePage;
