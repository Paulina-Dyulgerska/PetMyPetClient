import { useEffect, useState } from 'react';

import * as petsService from '../../services/petsService';

const PetEdit = ({
    match
}) => {
    const petId = match.params.id;
    //setvam da e {} pet, setvam go oshte predi da sym fetchnala requesta!!!!!
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(petId)
            .then(res => setPet(res))
    }, [match, petId]); //match da mi se podawa vinagi aktualen tuk, zatowa go slagam, zashtoto zawisi ot nego
    //kawko shte vzema kato danni! petId syshto e dependency i e hubawo i nego da go podam v tozi array ot
    //dependencyta!!!

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: <i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <form>
                <textarea type="text" name="description" defaultValue={pet.description}></textarea>
                <button className="button">Save</button>
            </form>
        </section>);
}

export default PetEdit;