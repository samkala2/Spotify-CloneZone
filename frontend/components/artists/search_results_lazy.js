import React, { Component, Suspense, lazy } from 'react';

const LazyResults = lazy(() => import('./artists_container'));

class LazySearchResults extends Component {

    render () {
      return (
     <Suspense fallback={<div> Loading... </div>}> 
      <div className="midhome-div">
          <LazyResults></LazyResults>
      </div> 
     </Suspense>)
    }
  }
  
  export default LazySearchResults;