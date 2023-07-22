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

                    <div id="left-content" className="d-flex col-md-4 col-12">
                        <div id="sub-left-content" className="d-flex">
                            <img id="hydrangea" src={hydrangea} alt="" className="col-8 col-md-12 mb-5" />
                            <h2 id="heading" className="col-12 text-center mb-4">Hydrangea Textshoter</h2>
                            <h5 id="signing" className="col-12 text-center mb-3">By Acan</h5>
                            {/* <h4 className="col-12 text-center">Texts to JPEG</h4> */}
                            
                        </div>

                    </div>
                    <div id="right-content" className="d-flex col-md-8 col-12">
                        <div id="sub-right-content" className="d-flex col-10 col-md-8 col-lg-6">
                            <div className="input-group mb-5">
                                <textarea rows={5} id="source-text" className="form-control" aria-label="Source Text" ref={this.text} defaultValue={"# Please input your text here."}></textarea>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">M-X</span>
                                <input type="text" className="form-control" placeholder="marginX" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.marginX} defaultValue={10} />
                                <span className="input-group-text">M-Y</span>
                                <input type="text" className="form-control" placeholder="marginY" aria-describedby="button-addon2" ref={this.marginY} defaultValue={10} />
                                <span className="input-group-text">Width</span>
                                <input type="text" className="form-control" placeholder="width" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.width} defaultValue={576} />
                            </div>



                            <div className="input-group mb-3">
                                <span className="input-group-text">Font Size</span>
                                <input type="text" className="form-control" placeholder="fontSize" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.fontSize} defaultValue={16} />
                                <span className="input-group-text">Line Space</span>
                                <input type="text" className="form-control" placeholder="lineSpace" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.lineSpace} defaultValue={4} />
                            </div>




                            <div className="input-group mb-5">
                                <span className="input-group-text">Color</span>
                                <input type="text" className="form-control" placeholder="color" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.color} defaultValue={"black"} />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">Operate</span>
                                <input type="text" className="form-control" defaultValue={"Please Click here 👉"} readOnly />
                                <a className="btn btn-outline-secondary" type="button" href="http://127.0.0.1:15371/textshoter/api/downloadImage">⏬</a>

                                <button className="btn btn-outline-secondary" type="button" onClick={this.submit}>⏫</button>
                            </div>

                        </div>
                    </div>

                </div>





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