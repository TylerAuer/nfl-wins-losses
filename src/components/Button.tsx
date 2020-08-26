import * as React from 'react';
import './Button.scss';

interface Props {
  className?: string;
  text: string;
  onClick: () => void;
}

export default function ({ className, text, onClick }: Props) {
  return (
    <button onClick={onClick} className={`${className} button`}>
      {text}
    </button>
  );
}
