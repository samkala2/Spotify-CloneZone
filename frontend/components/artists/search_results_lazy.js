import React, { Component, Suspense, lazy } from 'react';

const LazyResults = lazy(() => import('./artists_container'));

class LazySearchResults extends Component {

    render () {
      return (
     <Suspense fallback={<div> Loading... </div>}> 
      <span className="midhome-span">
          <LazyResults></LazyResults>
      </span> 
     </Suspense>)
    }
  }
  
  export default LazySearchResults;