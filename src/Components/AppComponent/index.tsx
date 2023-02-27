import React, {Component} from "react";
import "./index.css";

export default class AppComponent extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            name: props.object.name,
            uri: props.object.uri,
        };
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ this.props.logo } className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href={ this.state.uri }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn { this.state.name }
                    </a>
                </header>
            </div>
        );
    }
}
