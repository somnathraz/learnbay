import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function Home() {
  const emailInputRef = useRef(null);
  const [validationResult, setValidationResult] = useState('');

  useEffect(() => {
    // Load the NeverBounce JavaScript library
    const script = document.createElement('script');
    script.src = 'https://cdn.neverbounce.com/widget/dist/NeverBounce.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => initializeNeverBounce();
  }, []);

  // Initialize NeverBounce and validate email on button click
  function initializeNeverBounce() {
    window._NBSettings = {
      apiKey: 'public_0cc0c3bae15428336b197d9e5c59ccf7'
    };
  }

  // Validate the email using NeverBounce API
  function validateEmail() {
    const email = emailInputRef.current.value;

    // Use the NeverBounce API to validate the email
    window.NeverBounce.singleCheck(email, function (response) {
      if (response.result === 'valid') {
        setValidationResult('Email is valid!');
      } else {
        setValidationResult('Email is not valid.');
      }
    });
  }

  return (
    <div>
      <input type="text" ref={emailInputRef} name="email" />
      <button onClick={validateEmail}>Validate Email</button>
      <p>{validationResult}</p>
      <Script src="https://cdn.neverbounce.com/widget/dist/NeverBounce.js" strategy="afterInteractive" />
    </div>
  );
}