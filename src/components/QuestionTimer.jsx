import { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('TIMEOUT EFFECT');
    const timeoutRef = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log('INTERVAL EFFECT');
    const interval = setInterval(() => {
      setRemainingTime((time) => time - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
