import { TagCanvasOptions } from '@portfolio/domains/tag-canvas';

export const DEFAULT_OPTIONS: TagCanvasOptions = {
  textFont: 'Rany',
  maxSpeed: 0.03,
  freezeActive: true,
  shuffleTags: true,
  zoom: 1,
  wheelZoom: true,
  noSelect: true,
  noMouse: true,
  freezeDecel: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 1,
  pinchZoom: true,
  scrollPause: 0,
};
