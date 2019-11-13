import React, { Component, Suspense, lazy } from 'react';

// const LazyHome = lazy(() => import('./web_launcher_midhome'));

// class LazyMidHome extends Component {

//   render () {
//     return (
//    <Suspense fallback={<div> Loading... </div>}> 
//     <div>
//         <LazyHome></LazyHome>
//     </div> 
//    </Suspense>)
//   }
// }

const LazyHome = lazy(() => import('./web_laucher_homecontainer'));

class LazyMidHome extends Component {

  render () {
    return (
   <Suspense fallback={<div> Loading... </div>}> 
    <span className="midhome-span">
        <LazyHome></LazyHome>
    </span> 
   </Suspense>)
  }
}

export default LazyMidHome;