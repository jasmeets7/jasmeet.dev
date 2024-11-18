'use client';

import { Tag, TagCanvasOptions } from '@portfolio/domains/tag-canvas';
import { useTagCanvas } from '@portfolio/hooks/tag-canvas';

export const TagCanvasComponent: React.FC<{
  options: TagCanvasOptions;
  tags: Tag[];
}> = ({ options, tags }) => {
  const canvasRef = useTagCanvas('tagCanvas', options);

  return (
    <>
      <canvas
        id='tagCanvas'
        ref={canvasRef}
        width='2500'
        height='2500'
        className='!text-primary-300'
        style={{ maxWidth: '100%', margin: '0 auto' }}
      />
      <ul
        id='tags'
        className='!text-primary-300'
        style={{ display: 'none' }}
      >
        {tags.map((tag, index) => (
          <li
            className='!text-primary-300'
            key={index}
          >
            <a href={tag.href}>{tag.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
