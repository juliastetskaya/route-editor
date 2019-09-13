import React from 'react';
import Map from '../map';
import RoutesList from '../routes-list';
import TextBox from '../text-box';

const App = () => (
  <main role="main" className="container flex">
    <div className="jumbotron">
      <TextBox />
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
    </div>
    <Map />
  </main>
);

export default App;
