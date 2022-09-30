import React, {useState} from "react";

const Calcy = () => {
    const [input, setInput] = useState("");
    const inputHandler = (event) => {
        setInput(event.target.value);
    }
    return (
        <div className='Mains'>
        <div className="MainCalcy">
            <div className="titled"> Calculator </div>
            <div className="inputCancel">
                <div className="inpCan">
                    <div className="inputed"> {input} </div>
                    <button className="BlueShort1"onClick={() => setInput('')}> C </button>
                </div>
            </div>
            <div className="num123/">
                <button className="BlueLong" onClick={() => setInput(input+'1')}> 1 </button>
                <button className="BlueLong" onClick={() => setInput(input+'2')}> 2 </button>
                <button className="BlueLong" onClick={() => setInput(input+'3')}> 3 </button>
                <button className="BlueShort" onClick={() => setInput(input+'/')}> / </button>
            </div>
            <div className="num456-">
                <button className="BlueLong" onClick={() => setInput(input+'4')}> 4 </button>
                <button className="BlueLong" onClick={() => setInput(input+'5')}> 5 </button>
                <button className="BlueLong" onClick={() => setInput(input+'6')}> 6 </button>
                <button className="BlueShort" onClick={() => setInput(input+'-')}> - </button>
            </div>
            <div className="num789+">
                <button className="BlueLong" onClick={() => setInput(input+'7')}> 7 </button>
                <button className="BlueLong" onClick={() => setInput(input+'8')}> 8 </button>
                <button className="BlueLong" onClick={() => setInput(input+'9')}> 9 </button>
                <button className="BlueShort" onClick={() => setInput(input+'+')}> + </button>
            </div>
            <div className="num0*">
                <button className="BlueLong" onClick={() => setInput(input+'.')}> . </button>
                <button className="BlueLong" onClick={() => setInput(input+'0')}> 0 </button>
                <button className="BlueLong1" onClick={() => setInput(eval(input))}> = </button>
                <button className="BlueShort"onClick={() => setInput(input+'*')}> * </button>
            </div>
        </div>
        </div>
    )
}

export default Calcy;