import React from 'react'
import { useState } from 'react'

function Content() {
    const [displayText, setDisplayText] = useState('');

    const handleClick = () => {
        setDisplayText(document.getElementById('textArea').value);
    };

  return (
    <div>
        <main>
            <div>
            <button onClick={handleClick}>Display Text</button>
            </div>
            <div>
            <textarea id="textArea" rows={5} cols={50}></textarea>
            </div>
            <div>
            <p>{displayText}</p>
            </div>
        </main>
    </div>
  )
}

export default Content;
