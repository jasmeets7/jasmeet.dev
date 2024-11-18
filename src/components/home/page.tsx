import { DEFAULT_OPTIONS, DEFAULT_TAGS } from '@portfolio/defaults/tag-canvas';

import TagCanvasComponent from '@portfolio/shared/tag-canvas';
import Intro from './intro';

import style from './page.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.tags}>
        <TagCanvasComponent
          tags={DEFAULT_TAGS}
          options={DEFAULT_OPTIONS}
        />
      </div>
      <Intro />
    </div>
  );
};

export default HomePage;
