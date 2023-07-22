import React from "react"

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
        console.log("777888")
    }

}

export default App