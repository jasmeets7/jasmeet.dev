import About from './about';
import Technologies from './technologies';
import style from './page.module.css';

const AboutPage: React.FC = () => {
  return (
    <div className={style.container}>
      <About delay='100ms' />
      <Technologies delay='200ms' />
    </div>
  );
};

export default AboutPage;
