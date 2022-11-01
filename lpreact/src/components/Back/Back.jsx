import React, {useState} from 'react';
  
const Back = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'

    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <button id="back-to-top" className="btp " onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#2771e0" className="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"/>
    </svg>
    </button>
  );
}
  
export default Back;