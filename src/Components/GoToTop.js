import React from 'react';
import '../CSS-Files/Home.css';
const GoToTop = () => {

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    };
  return (
    <div ClassName="top-btn" onClick={goToBtn}>
        <div className="move-up">
            <i class="fa-solid fa-arrow-up fa-bounce"></i>
        </div>
    </div>
  )
};

export default GoToTop;