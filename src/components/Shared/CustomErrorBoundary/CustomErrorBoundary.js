import { Component } from 'react';

class CustomErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error) {
        // osnovnata ideq na componentDidCatch e da logne error-a!!!
        //send the error to the server - server will log it (in file or DB)
        console.log('Error from componentDidCatch: ', error);
    }

    static getDerivedStateFromError(error, errorInfo) {
        //v errorInfo imam po-podrobna info za error-a.
        // kakvoto return-na tuk, shte se zapazi avtomatichno kato nov state v this.state, nqma nujda ot setState!
        return {
            hasError: true,
        };
    }

    render() {
        if (this.state.hasError) {
            //nasochvam tuk kym custom error page, ili component, koito sym napravila specialno za tozi sluchaj
            return <h1>I'm so sorry, but some error has happenned!</h1>
        }
        return this.props.children;
    }
}

export default CustomErrorBoundary;