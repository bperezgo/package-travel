import React from 'react';

export default function Clickable<T>(Component: React.FC<T>) {
  return function (props: T) {
    return (
      <div style={{ cursor: 'pointer' }}>
        <Component {...props} />
      </div>
    );
  };
}
