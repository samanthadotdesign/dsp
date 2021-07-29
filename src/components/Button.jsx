import React from 'react';

export default function Button({ message, onSubmit }) {
  return (
    <button type="button" onClick={onSubmit}>{message}</button>
  );
}
