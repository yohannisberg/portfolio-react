import React, { useState } from 'react';

export function Button(props) {

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <button onClick={() => setShowPopup(true)} className={props.class} data-ctainfo={props.dataCtainfo} message="hi">
        {props.name}
      </button>

      {showPopup && (
        <div className="button-popup-wrapper">
          <div className='button-popup'>
            <div class="btn-p">(Button functionality disabled)</div>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
