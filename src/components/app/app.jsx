import React from 'react';
import Map from '../map';
import RoutesList from '../routes-list';

const App = () => (
  <main role="main" className="container flex">
    <RoutesList routes={[
      {
        id: 1,
        address: 'Матросова',
      },
      {
        id: 2,
        address: 'Ленина',
      },
      {
        id: 3,
        address: 'Комсомольская',
      }]}
    />
    <Map />
  </main>
);

export default App;
