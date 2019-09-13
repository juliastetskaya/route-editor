import React from 'react';

const RoutesListItem = ({ route }) => (
  <div className="d-flex justify-content-between align-items-center">
    <span>{route}</span>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

export default RoutesListItem;
