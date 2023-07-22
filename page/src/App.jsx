import React from "react"
import axios from "axios"

class App extends React.Component {

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

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="marginX" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.marginX} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="marginY" aria-describedby="button-addon2" ref={this.marginY} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="fontSize" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.fontSize} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="lineSpace" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.lineSpace} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="width" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.width} />
                </div>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="color" aria-label="Recipient's username" aria-describedby="button-addon2" ref={this.color} />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.submit} >Button</button>
                </div>

            </div>
        );
    }

    submit = () => {
        axios.get(`http://127.0.0.1:15371/textshoter/api?marginX=${this.marginX.current.value}&marginY=${this.marginY.current.value}&fontSize=${this.fontSize.current.value}&lineSpace=${this.lineSpace.current.value}&width=${this.width.current.value}&color=${this.color.current.value}`).then(res => {
            console.log(res)
        }).catch(err => {
            console.log("ERROR", err)
        })
    }

}

export default App