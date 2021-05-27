import { useState, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import * as petService from '../../services/petsService';
import './DemoFormControlledRef.css';

const Demo = () => {
    const [count, setCount] = useState(111);
    const [step, setStep] = useState(1);
    const [pet, setPet] = useState({ name: 'Nobody' });
    //taka iznasqm logika v custom Hook, no s nego mi se rerender-va 2 pyti componentata, zashtoto
    //edin pyt se rerender zaradi smqnata na step, a vtori pyt mi se rerender zaradi smqnata na 
    //character, zatowa v dolniq console.log hvashtam po 2 zapisa na edna smqna na step!!!! Towa e typo!
    //da vnimawam dalis useEffect iznesen v custom Hook nqma da se zastrelqm v kraka i da si vdigna 
    //rabota na prilojenieto - izliza, che takiwa useEffects izneseni v custom Hook trqbwa da se pravqt 
    //samo kogato izneseniqt Hook shte zavisi na neshto lokalno za componentata mi, a ne za neshto ot 
    //nejnite props ili state!!!!!!!!!!!!
    // Custom Hooks sa opasni - vodqt do nqkolkokratno prerenderirane na componenta, ako dependency na 
    //custom Hook e dependency i na samata componenta, koqto polzwa Hook-a - da ne polzwam edno i syshto 
    //dependency i za custom Hook i za componentata, koqto polzwa tozi custom Hook!!!!

    const [character, isCharacterLoading] =
        useFetch(`https://swapi.dev/api/people/${step}`, { name: 'Somebody' });

    console.log(character.name)
    //izpylnqwa se sled vsqko mountvane na componentata.
    // useEffect(()=> {
    //     console.log("UseEffect"); 
    // });

    //izpylnqwa se sled vsqko updatevane na neshtata v [] kakto i 1 pyt v nachaloto na zarejdane na component.
    useEffect(() => {
        console.log("UseEffect");
        petService.getOne('5bb0888ee1d636567dc9f627')
            .then(pet => setPet(pet))
            .catch(err => console.error(err));
        console.log(pet);

        return () => {
            console.log('Component is updated or unmounted')
        }
    }, [count]);

    //tozi e samo za chist ComponentWillUnmount:
    useEffect(() => {
        return () => {
            console.log('Component Will Unmount')
        }
    }, []);

    const onCounterButtonClickHandler = () => {
        console.log('IncreaseB' + count);
        setCount(currentCount => currentCount + 1);
        console.log('IncreaseA' + count);
    }

    const onStepChangeHandler = (e) => {
        const stepValue = Number(e.target.value);
        setStep(currentStep => stepValue);
    }

    return (
        <div className="demo">
            <h1>{pet?.name} - Counter</h1>
            <h1>{character.name} - Counter</h1>
            <h1>{isCharacterLoading ? 'Loading.....' : `${character.name}'s Counter`}</h1>
            <label htmlFor="step">Step</label>
            <select name="step" id="step" onChange={onStepChangeHandler}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="14">14</option>
                <option value="11">11</option>
            </select>
            <div>{count * step}</div>
            <button onClick={onCounterButtonClickHandler}>Increment</button>
        </div>
    )
}

// const Demo = () => {
//     const [demoState, setDemoState] = useState({
//         count: 111,
//         step: 1,
//     });

//     const onCounterButtonClickHandler = () => {
//         console.log('IncreaseB' + demoState.count);
//         // setDemoState(currentState => ({ step: currentState.step, count: currentState.count + 1 })); //towa e === na towa:
//         setDemoState(currentState => ({...currentState, count: currentState.count + 1})); //iskam da 
//         //vzemesh vsichko ot currentState i da mu prezapishe stojnostta na count s currentState.count + 1!!!!
//         console.log('IncreaseA' + demoState.count);
//     }

//     const onStepChangeHandler = (e) => {
//         const stepValue = Number(e.target.value);
//         // setDemoState(currentState => ({ step: stepValue, count: currentState.count })); //towa e === na towa:
//         setDemoState(currentState => ({...currentState, step: stepValue})); //iskam da vzemesh vsichko ot 
//         //currentState i da mu prezapishe stojnostta na step s stepValue!!!!!!
//     }

//     return (
//         <div className="demo">
//             <h1>Counter</h1>
//             <label htmlFor="step">Step</label>
//             <select name="step" id="step" onChange={onStepChangeHandler}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//             </select>
//             <div>{demoState.count * demoState.step}</div>
//             <button onClick={onCounterButtonClickHandler}>Increment</button>
//         </div>
//     )
// }
// // V coda po-gore moga da imam mnogo po-lesno reshenie i da si imam prosto 2 promenlivi, chiito stojnosti da sledq i pazq v state-yt i tolkowa:
// // const [count, setCount] = useState(0);
// // const [step, setStep] = useState(1);
// // Towa e mnogo po-lesno i pravilno, otkolkoto da prawq edin slojen object s count i step za propertyta!!!!!!!!!!!


//Example - the right way:
// const Demo = () => {
//     const [count, setCount] = useState(0);

//     const onCounterButtonClickHandler = () => {
//         console.log('Increase');
//         // setCount(count + 1); //taka NE SE PRAVI!!!! To raboti, no NE SE PRAVI!
//         // setCount(count++); //taka ne se pravi
//         // setCount(++count); //taka ne se prawi
//         setCount(currentCount => currentCount + 1); //taka SE pravi! tova e === na towa:
//         // setCount(oldCount => oldCount + 1); //taka SE pravi!
//     }

//     return (
//         <div className="demo">
//             <h1>Counter</h1>
//             <div>{count}</div>
//             <button onClick={onCounterButtonClickHandler}>Increment</button>
//         </div>
//     )
// }

// const Demo = () => {
//     let counter = 0;

//     const onCounterButtonClickHandler = () => {
//         console.log(counter);
//         counter++;
//     }

//     return (
//         <div className="demo">
//             <h1>Counter</h1>
//             <div>{counter}</div>
//             <button onClick={onCounterButtonClickHandler}>Increment</button>
//         </div>
//     )
// }
// //tova vryshta 0,1,2,3 i t.n. - qwno raboti,no na page-yt mi stoi samo 0. Zashto? Zashtoto componentata 
// // ne se prerenderira pri moqta promqna na counter!!!! Zashtoto samo ako zapisvam counter v state, promqna
// // v state shte nakara componentata da se prerenderira i SHTE mi pokaje novata stojnost na counter I NA 
// // stranicata, a ne samo da si q dyrji vytreshno vyv functiona!!!!!! Zatowa trqbwa da pazq takwia neshta, 
// // koito iskam da se pokazwat pri promqnata im, kakto i componentite da se prerenderirat pri promqnta im,
// // trqwa da gi pazq takiwa neshta v STATE, pravq go chrez useState!!!!!

// //Example how to forceUpdate a functional component:
// let count = 0; //tuk pazq count, zashtoto ako e vytre v Demo, pri vseki rerender, shte se inicializira 
// //sys stojnost 0 i na praktika nqma da mi se promenq!!!!!! Zatowa trqbwa da e izvyn Demo!!! Towa e 
// // edinstveniqt nachin da pazq w pametta neshto, koeto da ne se zagubi, kogato se rerender Demo!!!!!
// // navqrno i React taka go pazi!!!!!!
// const Demo = () => {
//     const [forceUpdater, setForceUpdater] = useState(true);

//     const onCounterButtonClickHandler = () => {
//         console.log('Increase');
//         count +=1;
//         console.log(count);
//         setForceUpdater(oldState => !oldState); //tova e starate stojnost na forceUpdater
//     }

//     return (
//         <div className="demo">
//             <h1>Counter</h1>
//             <div>{count}</div>
//             <button onClick={onCounterButtonClickHandler}>Increment</button>
//         </div>
//     )
// }

export default Demo;