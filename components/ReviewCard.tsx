'use client';

import { useState } from 'react';

const LIMIT = 200; // characters before a long review is collapsed

type Props = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
  delay: string;
  moreLabel: string;
  lessLabel: string;
};

export default function ReviewCard({ author, rating, text, relativeTime, delay, moreLabel, lessLabel }: Props) {
  const isLong = text.length > LIMIT;
  const [open, setOpen] = useState(false);
  const shown = !isLong || open ? text : `${text.slice(0, LIMIT).replace(/\s+\S*$/, '')}… `;

  return (
    <figure className={`review reveal ${delay}`.trim()}>
      <div className="stars" aria-label={`${rating} / 5`}>{'★'.repeat(Math.round(rating))}</div>
      <blockquote>
        {shown}
        {isLong && (
          <button type="button" className="review-more" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? lessLabel : moreLabel}
          </button>
        )}
      </blockquote>
      <figcaption className="review-by">
        <span className="review-av">{author.charAt(0).toUpperCase()}</span>
        <span><b>{author}</b><span>{relativeTime}</span></span>
        <svg className="flag" width="18" height="18" aria-label="Google review"><use href="#i-google" /></svg>
      </figcaption>
    </figure>
  );
}
