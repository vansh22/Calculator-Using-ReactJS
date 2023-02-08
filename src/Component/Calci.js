import React from 'react'
import { useState } from 'react'

const st = {
  height: "40px", width: "70px", fontSize: "22px"
  , margin: "10px", border: "0px", cursor: "pointer",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  borderRadius: "8px"
}

const st1 = {
  height: "110px", width: "70px", fontSize: "22px", border: "0px"
  , margin: "10px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  cursor: "pointer", borderRadius: "8px"
}

export default function Calci() {
  const [value, setValue] = useState("");

  const fn = (val) => {
    if (val === "DEL") {
      setValue("");
    }
    else if (val === "CE"){
      let newValue=value.substring(0, value.length-1);
      setValue(newValue);
    }
    else if (value === 0) {
      setValue(val);
    }
    else {
      setValue(value + val);
    }
  }

  const calculate = () => {
    const newValue = value.replace("^", "**");
    setValue(eval(newValue));
  }

  function disable(e) {
    const reg = /^\d+$/;
    if (!reg.test(e.key)) {
      e.preventDefault();
    }
  }

  const handleOnChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className='position' style={{ margin: 'auto', width: "370px" }}>
      <h1 style={{ textAlign: 'center', paddingBottom: "5px", color:"skyblue"}}>Calculate Karlo Guys!</h1>
      <div style={{ border: '2px solid black', borderRadius: "8px"}}>
        <textarea name="input_output" style={{ padding: "2px", caretColor: "#4a6ee0", margin: 'auto', width: "100%", height: "145px", fontSize: "35px", textAlign: "right", resize: "none", borderRadius: "8px 8px 0px 0px", border:"none", borderBottom: "2px solid skyblue"}}
          placeholder="0" onKeyDown={(e) => { disable(e) }} value={value} onChange={handleOnChange}
        />
        <div style={{ margin: "4px 2px" }} id="oncolour">
          <div className="firstRow">
            <input type="button" placeholder='^' value="^" style={st} onClick={() => fn("^")} />
            <input type="button" placeholder='(' value="(" style={st} onClick={() => fn("(")} />
            <input type="button" placeholder=')' value=")" style={st} onClick={() => fn(")")} />
            <input type="button" placeholder='%' value="%" style={st} onClick={() => fn("%")} />
          </div>
          <div className="secondRow">
            <input type="button" placeholder='7' value="7" style={st} onClick={() => fn("7")} />
            <input type="button" placeholder='8' value="8" style={st} onClick={() => fn("8")} />
            <input type="button" placeholder='9' value="9" style={st} onClick={() => fn("9")} />
            <input type="button" placeholder='/' value="/" style={st} onClick={() => fn("/")} />
          </div>
          <div className="thirdRow">
            <input type="button" placeholder='4' value="4" style={st} onClick={() => fn("4")} />
            <input type="button" placeholder='5' value="5" style={st} onClick={() => fn("5")} />
            <input type="button" placeholder='6' value="6" style={st} onClick={() => fn("6")} />
            <input type="button" placeholder='*' value="*" style={st} onClick={() => fn("*")} />
          </div>
          <div className="fourthRow">
            <input type="button" placeholder='1' value="1" style={st} onClick={() => fn("1")} />
            <input type="button" placeholder='2' value="2" style={st} onClick={() => fn("2")} />
            <input type="button" placeholder='3' value="3" style={st} onClick={() => fn("3")} />
            <input type="button" placeholder='-' value="-" style={st} onClick={() => fn("-")} />
          </div>
          <div className="fifthRow" style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="f1">
                <input type="button" placeholder='0' value="0" style={{ borderRadius: "8px", margin: "10px", height: "40px", width: "160px", fontSize: "22px", boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", border: "0px" }} onClick={() => fn("0")} />
                <input type="button" placeholder='.' value="." style={st} onClick={() => fn(".")} />
                <input type="button" placeholder='+' value="+" style={st} onClick={() => fn("+")} />
              </div>
              <div className="f2">
                <input type="button" placeholder='DEL' value="DEL" className="DEL" onClick={() => fn("DEL")} />
                <input type="button" placeholder='=' value="=" id="equal1" onClick={() => calculate()} />
                <input type="button" placeholder='CE' value="CE" className="DEL" onClick={() => fn("CE")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


// what are component life cycle
// what is pure component
// what is redux thunk
// what is benifits of redux component
// what is benifits of redux toolkit