import React, { useState } from 'react';
import ReactSwitch from 'react-switch';


const PasswordGen = () => {
//using useState:
const [pass,setPass] = useState("");
const [passLength,setPassLenght] = useState(8);
const [Uppercase,setUppercase] = useState(true);
const [number,setnumber] = useState(true);
const [specialchar,setSpecialchar] = useState(true); 
const [successMessage, setSuccessMessage] = useState("");

const gentpass = () => {
    const lcase= "abcdefghijklmnopqrstuvwxyz";
    const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numb = '1234567890';
    const spcl = "!@#$%^&*()";

    let validpass = lcase;

    if(Uppercase){
        validpass += ucase;
    }
    if(number){
        validpass += numb;
    }
    if(specialchar){
        validpass += spcl;
    }
    let gentpass = "";
    for(let i=0;i<passLength;i++){
        const randomIndex = Math.floor(Math.random()* validpass.length);
        gentpass += validpass.charAt(randomIndex);
    }
    console.log(gentpass)
    setPass(gentpass);
}
const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = pass;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    setTimeout(() => setSuccessMessage(""), 2000);
    // Hide message after 2 seconds
};

  return (
    <div className="pt-10 font-bold text-black">
        <div className="flex flex-col items-center">
            <div className="w-[350px] shadow-2xl hover:shadow-slate-400 rounded-xl bg-pink-300 p-4">
        <div className="flex items-center justify-between mb-4">
            <label>Password Length:</label>
            <input 
            value={passLength}
            onChange={(e)=>setPassLenght(e.target.value)}
            className="w-12 pl-2 bg-stone-300" type="number"/>
        </div>
        <div className="flex items-center justify-between mb-4">
            <label>INCLUDE UPPERCASE:</label>
            <ReactSwitch 
            checked ={Uppercase}
            onChange={() => setUppercase(!Uppercase)}
            height={25}
            width={45}
            handleDiameter={20}/>
        </div>
        <div className="flex items-center justify-between mb-4">
            <label>INCLUDE SPECIAL CHARACTERS:</label>
            <ReactSwitch 
            checked ={specialchar}
            onChange={() => setSpecialchar(!specialchar)}
            height={25}
            width={45}
            handleDiameter={20}/>
        </div>
        <div className="flex items-center justify-between mb-4">
            <label>INCLUDE NUMBER:</label>
            <ReactSwitch 
            checked = {number}
            onChange={() => setnumber(!number)}
            height={25}
            width={45}
            handleDiameter={20}/>
        </div>
        <div>
            
        <button onClick={gentpass} className="bg-gradient-to-r from-purple-50 to-purple-300 hover:from-purple-300 hover:to-purple-400">GENERATOR PASSWORD</button>
          {pass && <p className="mt-2 font-extrabold text-black"><span className="font-bold">Generated Password : {pass}</span>
         </p>
          }
          <div>
         <button
                     
                        onClick={copyToClipboard}
                    >
                        copy</button>
                        {successMessage && (
                <p
                    style={{
                        color: "green",
                        textAlign: "center",
                    }}
                >
                    {successMessage}
                </p>
            )}
            </div>
        </div>
    </div>
    </div>
    </div>
  );
};

export default PasswordGen;