import { Component } from 'react';
import ThemeContext from '../../contexts/ThemeContext';
import Button from './Button';
import TextWithFunctionalContext from './TextWithFunctionalContext';

//ne mu puka za props, a samo gi prenasq
class ThemedButton extends Component {
    //super props si idwat po default i bez da pisha izlishen constructor tuk!!!! Ako nqma da pravq 
    //inicialization na state ili bind na functions, ne mi trqbwa constructor!!!!
    componentDidMount() {
        console.log('The context is :' + this.context.theme);
    }

    //attached to context with this: ThemedButton.contextType = ThemeContext;
    render() {
        // //with handler in context:
        // return <Button theme={this.context.theme} onButtonClickHandler = {this.context.onButtonClickHandler}/>;

        //without handler in context:
        //podawam na Button currentTheme ot contexta:
        // return <Button theme={this.context} onButtonClickHandler={this.props.onButtonClickHandler} />;

        //not providing theme to Button - Button will take the context as a consumer:
        return (
            <>
                <Button theme={this.context.theme} />
                <TextWithFunctionalContext theme={this.context.theme} />
            </>
        )
    }

    // //context consumer example: the component must NOT be attached to context with this ThemedButton.contextType = ThemeContext;
    // render() {
    //     return (
    //         <ThemeContext.Consumer>
    //             {
    //                 value => <Button theme={value.theme} onButtonClickHandler={value.onButtonClickHandler} />
    //             }
    //         </ThemeContext.Consumer>
    //     )
    // }
}


//zakacham rychno contexta ThemeContext za componenta ThemedButton:
ThemedButton.contextType = ThemeContext;

export default ThemedButton;