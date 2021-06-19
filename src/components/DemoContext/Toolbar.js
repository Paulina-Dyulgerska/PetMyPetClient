import ThemedButton from './ThemedButton';

//ne mu puka za props, a samo gi prenasq
function Toolbar(props) {
    return (
        <div>
            {/* with handler in Context: */}
            <ThemedButton />

            {/* without handler in Context: */}
            {/* <ThemedButton theme={props.theme} onButtonClickHandler={props.onButtonClickHandler} /> */}
            {/* <ThemedButton {...props} /> //taka moga da podam pros, no shte podam vsichko, a ne samo towa,
            koeto e nujno na ThemedButton, a towa da podawam izlishni neshta e typo. Osven towa, ako izsipq 
            vsichko ot props, pri debugvane nqma da razbera kakwo tochno i kak e podadeno nadolu i pod kakwo ime*/}
        </div>
    );
}

export default Toolbar;