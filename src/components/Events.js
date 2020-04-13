import React, { useContext } from 'react';
import Event from '../components/Event';
import AppContext from '../contexts/AppContext';

const Events = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* stateが配列だから一個ずつ取り出している。それはeventが受け取っている */}
          {state.events.map((event, index) => {
            return <Event key={index} event={event} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Events;
