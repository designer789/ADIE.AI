"use client";

import React, { useState, useEffect } from "react";

export default function ESLintTest() {
  const [count, setCount] = useState(0);
  
  // Fixed the missing dependency
  useEffect(() => {
    console.log(count);
  }, [count]);
  
  return (
    <div>
      <h1>ESLint Test</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
} 