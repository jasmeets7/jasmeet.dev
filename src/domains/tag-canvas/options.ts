export interface TagCanvasOptions extends Record<string, unknown> {
  textColour?: string;
  textFont: string;
  textHeight?: number;
  maxSpeed: number;
  freezeActive: boolean;
  shuffleTags: boolean;
  shape?: string;
  zoom: number;
  wheelZoom: boolean;
  noSelect: boolean;
  noMouse?: boolean;
  freezeDecel: boolean;
  fadeIn: number;
  initial: number[];
  depth: number;
  stretchX?: number;
  stretchY?: number;
  pinchZoom?: boolean;
  scrollPause?: number;
}
