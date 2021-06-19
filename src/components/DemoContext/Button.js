////as a dummy component:
// function Button(props) {
//     return (
//         <button onClick={props.onButtonClickHandler}
//             style={{ backgroundColor: props.theme == 'dark' ? 'darkblue' : 'lightcoral', color: 'white' }}>
//             Theme Button in {props.theme}
//         </button>
//     )
// }

// export default Button;

import ThemeContext from '../../contexts/ThemeContext';

//as a context consumer:
function Button(props) {
    return (
        <ThemeContext.Consumer>
            {
                value =>
                    <button onClick={value.onButtonClickHandler}
                        style={{ backgroundColor: props.theme == 'dark' ? 'darkblue' : 'lightcoral', color: 'white' }}>
                        Theme Button in {props.theme}
                    </button>
            }
        </ThemeContext.Consumer>
    )
}

export default Button;


