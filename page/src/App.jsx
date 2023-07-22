import React from "react"
import axios from "axios"
import "./App.css"
import hydrangea from "./hydrangea.png"

class App extends React.Component {

    text = React.createRef()
    marginX = React.createRef()
    marginY = React.createRef()
    fontSize = React.createRef()
    lineSpace = React.createRef()
    width = React.createRef()
    color = React.createRef()

    componentDidMount() {
        this.submit = this.submit.bind(this)
    }

    render() {
        return (
            <div className="container">

                <div className="row">

                    <div className="d-flex col-4 align-content-center" style={{height: "100vh"}}>
                        <img src={hydrangea} alt="" style={{ margin: "auto", border: "solid rgba(0,0,0,0.2) 1px" }} className="col-12" />
                    </div>
                    <div className="col-8">
                        <div class="input-group mb-3">
                            <span class="input-group-text">Source Text</span>
                            <textarea className="form-control" aria-label="Source Text" ref={this.text} defaultValue={"# Please input your text here."}></textarea>
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Margin X</span>
                            <input type="text" className="form-control" placeholder="marginX" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.marginX} defaultValue={10} />
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Margin Y</span>
                            <input type="text" className="form-control" placeholder="marginY" aria-describedby="button-addon2" ref={this.marginY} defaultValue={10} />
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Font Size</span>
                            <input type="text" className="form-control" placeholder="fontSize" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.fontSize} defaultValue={16} />
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Line Space</span>
                            <input type="text" className="form-control" placeholder="lineSpace" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.lineSpace} defaultValue={4} />
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Width</span>
                            <input type="text" className="form-control" placeholder="width" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.width} defaultValue={576} />
                        </div>

                        <div className="input-group mb-3">
                            <span class="input-group-text">Color</span>
                            <input type="text" className="form-control" placeholder="color" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.color} defaultValue={"black"} />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.submit} >Button</button>
                        </div>
                    </div>

                </div>



                <a href="http://127.0.0.1:15371/textshoter/api/downloadImage">Download</a>


            </div>
        );
    }

    submit = () => {
        axios.post(`http://127.0.0.1:15371/textshoter/api/submitText?marginX=${this.marginX.current.value}&marginY=${this.marginY.current.value}&fontSize=${this.fontSize.current.value}&lineSpace=${this.lineSpace.current.value}&width=${this.width.current.value}&color=${this.color.current.value}`, {
            "q": this.text.current.value
        }).then(res => {
            console.log(res)
            window.alert("Successful")
        }).catch(err => {
            console.log("ERROR", err)
            window.alert("ERROR " + err)
        })
    }

}

export default App