import React from 'react';

const Results = (props) => {
    return  (
      <div>
        <p>{props.end_message}</p>
         <div class="animated slideInDown ">
        <p>Your score was: {props.score}</p>
        <button className="btn" onClick={props.retry}>Retry</button>
      </div>
      </div>
    )
}
export default Results;
