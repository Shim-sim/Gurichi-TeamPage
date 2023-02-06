import React from 'react';
import './MatchDetail.css';

const MatchDetail = ({ game, onAddToggle, onChangeSelectedMatch }) => {
  const { id, text, result, mvp } = game;

  return (
    <div
      className="MatchDetail"
      onClick={() => {
        onChangeSelectedMatch(game);
        onAddToggle();
      }}
    >
      {`vs ${text}`}
    </div>
  );
};
export default MatchDetail;
