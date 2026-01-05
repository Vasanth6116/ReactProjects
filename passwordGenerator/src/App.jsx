import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (symbolAllowed) str += "!@#$%^&*()_";
    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, symbolAllowed]);
  useEffect(()=>{
    generatePassword()
  },[length,numAllowed,symbolAllowed]);
  const copyPassword = () =>{
    window.navigator.clipboard.writeText(password);
    // alert("copied");
    passRef.current?.select();
    
}
const passRef = useRef(null)
  return (
    <div className=" h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-amber-500">
        <h1 className="text-3xl font-bold mb-2 text-center">
          password generator
        </h1>
        <div className="flex  shadow rounded-lg overflow-hidden mb-4 justify-between ">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-70% py-1 px-3
     "
            placeholder="password"
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 w-25% rounded-lg" onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
          <div className="flex items-center gap-x-1 ml-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">number</label>
          </div>
          <div className="flex items-center gap-x-1 ml-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={symbolAllowed}
              onChange={() => {
                setSymbolAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="symbol">symbol</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
