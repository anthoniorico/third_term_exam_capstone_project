import React from 'react';
import { useRouter } from 'next/router';
import '../app/globals.css';

const Home: React.FC = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/hospitals');
  };

  return (
    <div>
      <h1>Welcome to CAREFINDER</h1>
      <p>Your go-to platform for finding hospitals in Nigeria.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default Home;