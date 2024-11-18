import { TypewriterProps } from '@portfolio/domains/typewriter';

const name = "<span class='text-primary-300'>Jasmeet</span>";

export const DEFAULT_TYPEWRITER: TypewriterProps = {
  text: `Hello, I'm ${name}`,
  typingSpeed: 60,
  cursor: ' _',
};
