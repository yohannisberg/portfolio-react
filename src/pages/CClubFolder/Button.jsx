import React, { useState } from 'react';

export function Button(props) {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button onClick={() => setShowPopup(true)} className={props.className} data-ctainfo={props.dataCtainfo}>
        {props.name}
      </button>

      {showPopup && (
        <div className="button-popup-wrapper">
          <div className='button-popup'>
            <div className="btn-p">(Button functionality disabled)</div>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
