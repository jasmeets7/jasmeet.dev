import FadeIn from '@portfolio/shared/fade-in';
import style from './about.module.css';

const About: React.FC<{ delay?: string }> = ({ delay }) => {
  return (
    <FadeIn delay={delay}>
      <div className={style.container}>
        <h2 className={style.header}>About Me</h2>
        <p className='text-accent-50'>
          I&apos;m a full-stack developer with over six years of experience
          creating innovative, user-centered digital solutions. My work sits at
          the intersection of technology, design, and artistry, where I
          specialize in transforming ideas into effective, impactful digital
          products that elevate everyday life. I&apos;ve helped companies
          validate concepts, build prototypes, and bring polished products to
          market, continually refining user experiences for maximum engagement
          and efficiency.
        </p>
        <p className='text-accent-50'>
          In my professional journey, I&apos;ve developed a comprehensive
          expertise across front-end and back-end technologies. I have a strong
          command of software architecture, design patterns, and scalable
          development, allowing me to contribute meaningfully to projects of any
          size and complexity. Problem-solving is my forte, and I thrive on
          challenges that require both technical skill and creative insight.
        </p>
      </div>
    </FadeIn>
  );
};

export default About;
