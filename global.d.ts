// global.d.ts

interface Window {
  TagCanvas?: {
    Start: (
      canvasId: string,
      textId: string,
      options: Record<string, unknown>
    ) => void;
  };
}
