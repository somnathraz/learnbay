import { useEffect } from 'react';

const InteractiveComponent = () => {
  useEffect(() => {
    // Create the script element and set its attributes
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = '//dyv6f9ner1ir9.cloudfront.net/assets/js/nloader.js';

    // Define the onload function
    script.onload = function () {
      // Initialize the iframe when the script is loaded
      initIframe('651b85fa0e05e85a980d6eab');
    };

    // Append the script to the head of the document
    document.querySelector('head').appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.querySelector('head').removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className='op-interactive'
        id='651b85fa0e05e85a980d6eab'
        data-title='Career Roadmap Guide V 2.0'
        data-url='https://learnbay404.outgrow.us/651b85fa0e05e85a980d6eab?vHeight=1'
        data-width='100%'
      ></div>
    </div>
  );
};

export default InteractiveComponent;
