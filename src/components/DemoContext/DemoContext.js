import { Component } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Toolbar from './Toolbar';

class DemoContext extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTheme: 'dark',
        }
    }

    onButtonClickHandler() {
        // e.preventDefault();
        this.setState(oldState => oldState.currentTheme == 'dark' ?
            { currentTheme: 'light' } : { currentTheme: 'dark' });
        // this.setState(oldState => ({ currentTheme: oldState.currentTheme == 'dark' ? 'light' : 'dark' }))
    }

    render() {
        return (
            // //with handler in Context:
            <ThemeContext.Provider value={{
                theme: this.state.currentTheme,
                onButtonClickHandler: this.onButtonClickHandler.bind(this),
            }}>
                <Toolbar/>
            </ThemeContext.Provider>

            // //without handler in Context:
            // <ThemeContext.Provider value={this.state.currentTheme}>
            //     < Toolbar
            //         onButtonClickHandler={this.onButtonClickHandler.bind(this)}
            //     />
            // </ThemeContext.Provider>
        )
    }
}






//this demo is with props drilling instead of Context:

// class DemoContext extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentTheme: 'dark',
//         }
//     }

//     onButtonClickHandler() {
//         // e.preventDefault();
//         // this.setState(oldState => oldState.currentTheme == 'dark' ?
//         //     {currentTheme:'light'} : {currentTheme: 'dark'});
//         this.setState(oldState => ({ currentTheme: oldState.currentTheme == 'dark' ? 'light' : 'dark' }))
//     }

//     render() {
//         return <Toolbar theme={this.state.currentTheme}
//             onButtonClickHandler={this.onButtonClickHandler.bind(this)} />;
//     }
// }

// //ne mu puka za props, a samo gi prenasq
// function Toolbar(props) {
//     return (
//         <div>
//             <ThemedButton theme={props.theme} onButtonClickHandler={props.onButtonClickHandler} />
//             {/* <ThemedButton {...props} /> //taka moga da podam pros, no shte podam vsichko, a ne samo towa,
//             koeto e nujno na ThemedButton, a towa da podawam izlishni neshta e typo. Osven towa, ako izsipq 
//             vsichko ot props, pri debugvane nqma da razbera kakwo tochno i kak e podadeno nadolu i pod kakwo ime*/}
//         </div>
//     );
// }

// //ne mu puka za props, a samo gi prenasq
// class ThemedButton extends Component {
//     //super props si idwat po default i bez da pisha izlishen constructor tuk!!!! Ako nqma da pravq 
//     //inicialization na state ili bind na functions, ne mi trqbwa constructor!!!!
//     render() {
//         return <Button theme={this.props.theme} onButtonClickHandler={this.props.onButtonClickHandler} />;
//     }
// }

// function Button(props) {
//     return (
//         <button onClick={props.onButtonClickHandler}
//             style={{ backgroundColor: props.theme == 'dark' ? 'darkblue' : 'lightcoral', color: 'white' }}>
//             Theme Button in {props.theme}
//         </button>
//     )
// }

export default DemoContext;