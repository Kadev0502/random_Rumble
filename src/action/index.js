import React from 'react'


export  function hitMonster(payload) {

    return { type: "HIT_MONSTER", payload }
};
export  function hitBack(payload) {

  return { type: "HIT_BACK", payload }
};
export  function addPlayerTurn(payload) {

    return { type: "ADD_PLAYER_TURN", payload }
};
export  function resetTour(payload) {

    return { type: "RESET_TOUR", payload }
};
  