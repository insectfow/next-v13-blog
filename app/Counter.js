'use client';

import { useState } from 'react';

export default function() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>클릭했당 {count} 번!</p>
      <button type='button' onClick={() => setCount(count+1)}>날 눌러줘!</button>
    </div>
  )
}