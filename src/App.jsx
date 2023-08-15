import React, { useRef, useState } from "react"
import html2canvas from "html2canvas"
import "./App.css"

const App = () => {

    const input = useRef(null)
    const middle = useRef(null)
    const submit = useRef(null)
    const img = useRef(null)
    const a = useRef(null)

    const [_text, set_Text] = useState("")
    const fontSize = useRef(null)
    const [_fontSize, set_fontSize] = useState("24px")
    const width = useRef(null)
    const [_width, set_width] = useState("300px")
    const letterSpace = useRef(null)
    const [_letterSpace, set_letterSpace] = useState("1px")
    const lineHeight = useRef(null)
    const [_lineHeight, set_lineHeight] = useState("1.5")

    const output = () => {
        html2canvas(document.getElementById("middle")).then(canvas => {
            const url = canvas.toDataURL("image/png")
            img.current.src = url
            a.current.href = url
        })
    }

    return (
        <div className="container my-3">
            <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea" ref={input} onChange={() => { console.log(input.current.value); set_Text(input.current.value) }}></textarea>
            </div>

            <br /><br />
            <label for="customRange1" className="form-label">Font Size</label>
            <input type="range" className="form-range" min="10" max="26" id="customRange1" ref={fontSize} onChange={() => {
                set_fontSize(fontSize.current.value.toString() + "px")
            }}></input>
            <label for="customRange2" className="form-label">Width</label>
            <input type="range" className="form-range" min="100" max="1000" id="customRange2" ref={width} onChange={() => {
                set_width(width.current.value.toString() + "px")
            }}></input>
            <label for="customRange3" className="form-label">Letter Space</label>
            <input type="range" className="form-range" min="0" max="10" id="customRange3" ref={letterSpace} onChange={() => {
                set_letterSpace(letterSpace.current.value.toString() + "px")
            }}></input>
            <label for="customRange4" className="form-label">Line Height</label>
            <input type="range" className="form-range" min="1" max="2" step="0.1" id="customRange4" ref={lineHeight} onChange={() => {
                set_lineHeight(lineHeight.current.value)
            }}></input>
            <br />
            <br />
            <div id="middle" style={{

                // position: "absolute",
                width: _width
            }}>
                <p ref={middle} style={{
                    width: "100%",
                    fontSize: _fontSize,
                    lineHeight: _lineHeight,
                    letterSpacing: _letterSpace,
                }}>
                    {
                        _text
                    }
                </p>
            </div>
            <br /><br />
            <button className="btn btn-outline-success" id="submit" ref={submit} onClick={output}>Submit</button>
            <a className="btn btn-outline-success" href="#" ref={a} download="output">Download</a>
            <img id="img" src="" alt="" ref={img} style={{
                width: _width,
                display: "none"
            }} />
            
        </div>
    )
}

export default App