import React, {useEffect} from 'react';
import Router from 'next/router';

// Temp, for Sep 1st 2022 BAMPFA talk
const Bampfa = () => {
  useEffect(() => {
    Router.push('https://berkeley.zoom.us/webinar/register/WN_hQpeNvpSQeu8qG3KWhK-yg')
  });

  return (
    null
  );
}

export default Bampfa;
