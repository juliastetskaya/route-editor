import React from 'react';

const RoutesListItem = ({ route, onRemove }) => {
  console.log(route);
  return (
    <div className="d-flex justify-content-between align-items-center">
      <span>{route.address}</span>
      <button
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
        onClick={() => onRemove(route.id)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default RoutesListItem;
