import { SPRITE } from '@/lib/sprite';

/** Hidden SVG symbol sprite — <use href="#i-..."> references resolve document-wide. */
export default function Sprite() {
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}
