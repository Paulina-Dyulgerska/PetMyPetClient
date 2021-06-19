import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
// import React from 'react';
// import ReactDOM from 'react-dom';

import PetInfoLi from './PetInfoLi';

describe('PetInfoLi Component', () => {

    test('Test a helper function', () => {
        expect(1).toBe(1);
    })

    it('Should display name with document', () => {
        //// without testing-library/react:
        // console.log(document);
        // console.log(process.env.NODE_ENV);
        // let divElement = document.createElement('div');
        // ReactDOM.render(<PetInfoLi name='Pesho'></PetInfoLi>, divElement);
        // expect(divElement.querySelector('h3').textContent).toBe('Pesho');

        //with testing-library/react:
        render(
            <BrowserRouter>
                <PetInfoLi name='Pesho' />
            </BrowserRouter>
        );
        expect(document.querySelector('h3').textContent).toBe('Name: Pesho');
    });

    it('Should display name with screen', () => {
        render(
            <BrowserRouter>
                <PetInfoLi name='Pesho' />
            </BrowserRouter>
        );
        expect(screen.getByText('Name: Pesho')).toBeInTheDocument();
    });

    test('Should increase pet likes counter', () => {
        render(
            <BrowserRouter>
                <PetInfoLi likes={10}/>
            </BrowserRouter>
        );
        expect(document.getElementsByClassName('likesCounter')[0].textContent.trim()).toBe('10');
        expect(document.getElementsByClassName('likesCounter')[0].textContent.trim()).not.toBe('1');
    });

    test('Should increase pet likes counter', async () => {
        render(
            <BrowserRouter>
                <PetInfoLi likes={10}/>
            </BrowserRouter>
        );

        // fireEvent.click(document.getElementsByClassName('button')[0]);

        // await waitFor(()=> {document.getElementsByClassName('likesCounter')[0];})
        await waitFor(()=> {fireEvent.click(document.getElementsByClassName('button')[0]);})
        expect(document.getElementsByClassName('likesCounter')[0].textContent.trim()).toBe('11');
    });
});