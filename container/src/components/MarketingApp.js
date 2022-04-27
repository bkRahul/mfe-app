import { mount } from 'marketing/MarketingApp';
import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div className='marketing' ref={ref} />;
};
