import { useEffect, useState } from 'react';
import * as petsService from '../../services/petsService';

const PetDetails = ({
    match
}) => {
    const petId = match.params.id;
    let [pet, setPet] = useState({});

    useEffect(() => {
        petsService.getOne(petId)
            .then(res => setPet(res))
    }, [match]);

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                <button className="button">
                    <i className="fas fa-heart"></i>Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} /></p>
            <p className="description">{pet.description}</p>
        </section>);
}

export default PetDetails;