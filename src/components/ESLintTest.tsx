"use client";

import React, { useState, useEffect } from "react";

export default function ESLintTest() {
  const [count, setCount] = useState(0);
  
  // This is purposely wrong to test ESLint
  useEffect(() => {
    console.log(count);
    // Missing dependency intentionally
  }, []);
  
  return (
    <div>
      <h1>ESLint Test</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} 