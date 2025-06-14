import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lenght, setlenght] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}`~";

    console.log(str);

    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    // console.log(pass);
    setPassword(pass);
  }, [lenght, charAllowed, numberAllowed, setPassword]);

  const passwordRef = useRef()

  const copyToClipBoard = useCallback(() => {
    const len = passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    generatePassword();
  }, [lenght, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-center p-2 text-orange-500 bg-gray-600">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-1">
          <input
            onChange={(e) => {
              setlenght(e.target.value);
            }}
            type="range"
            min={6}
            max={264}
            value={lenght}
            className="cursor-pointer"
          />
          <label>Lenght: {lenght}</label>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


// Learn Methods in JavaScripts