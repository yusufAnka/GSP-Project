import React from 'react';
import { Waveform } from '@uiball/loaders'

const Loader = ({ isLoading }) => {
  return (
    <div aria-live="polite" aria-busy={isLoading}>
      {isLoading && <Waveform />}
    </div>
  )
};

export default Loader;
