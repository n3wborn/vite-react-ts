import ReactDOM from "react-dom/client";
import React from "react";

function Plop({name, children}) {
    return (
        <div>
            <h1>Plop a comme nom: {name}</h1>
            <p>ses enfants sont: {children}</p>
        </div>
    )
}

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        console.log(`les props: ${props}`)
    }

    render() {
        return (
            <div>
                <h1>Class Welcome</h1>
                <pre>
                    Name: {this.props.name}<br/>
                    Children: {this.props.children}<br/>
                </pre>
            </div>
        )
    }

    Home(): JSX.Element {
        return (
            <div>
                <Welcome name='John Doe'/>
                <Welcome name='Billy'/>
                <Clock/>
                <Incrementer start='0'/>
            </div>
        )
    }
}

class Clock extends React.Component {

    constructor(props) {
        // recupere les props du parent
        super(props);
        // ajoute date aus states
        this.state = {date: new Date()}
        this.timer = null
    }

    // quand on s'attache au DOM
    componentDidMount(): void {
        this.state.timer = window.setInterval(() => {
            // bind au contexte de la classe
            this.tick.bind(this)
        }, 1000)
    }

    // quand on va s'extraire du DOM
    componentWillUnmount(): void {
        window.clearInterval(this.timer)
    }

    tick(): void {
        this.setState((state, props) => {
            return {date: new Date()}
        })
    }

    render(): JSX.Element {
        return <div>
            Il est {this.state.date.toLocaleString()} {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            n: props.start,
        }
        this.timer = null
    }

    componentDidMount(): void {
        window.setInterval(() => {
            // bind au contexte de la classe
            this.increment().bind(this).n
        }, 1000)
    }

    componentWillUnmount(): void {
        window.clearInterval(this.timer)
    }

    increment(step: number = 1): void {
        this.setState((state, props) => {
            return {n: state.n + step}
        })
    }

    render(): JSX.Element {
        return (
            <div>
                {this.state.n}
            </div>
        )
    }
}


// affiche Welcome dans #app
ReactDOM.render(<Home/>, document.querySelector('#app'))

