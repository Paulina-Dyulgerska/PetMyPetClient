import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

import * as petsService from '../../services/petsService';
import CustomLink from '../CustomLink/CustomLink';

const PetDetails = ({
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

    const onPetLikeClickHandler = () => {
        //zapisvam si novata stojnost za like-ovete:
        const newLikes = parseInt(pet.likes) + 1;

        //prashtam patch request, za da se zapishe novata stojnost za likes
        petsService.patch(pet.id, { likes: newLikes })
        //patch requesta vryshta fetch, t.e. promise, ako e resolvnat tozi promise, prodyljavam nadolu i edva 
        //pri resolvnat promise, updatevam state-yt na componentata, t.e. sled kato servera na BE-da e updatenal
        //stojnostta za likes, edwa togawa shte promenq stojnostta na likes, koqto se pokazwa na usera!!!!:
            .then(() => {
                // setPet(oldState => ({ ...oldState, likes: parseInt(oldState.likes) + 1 }));
                //vzimam stariq state i mu slagam nova stojnost za likes!!!!
                setPet(oldState => ({ ...oldState, likes: newLikes }));
            })
            .catch(err => console.error(err));
    }

    return (
        <section className="detailsOtherPet">
            <h3>{pet.name}</h3>
            <p>Pet counter: {pet.likes}
                {/* by default tozi buttonn nqma da refreshva, zashtoto ne se namira vyv forma, nishto, 
                     che e type="button"!! Zatowa nqma kakwo da go preventvam!*/}
                <button className="button" onClick={onPetLikeClickHandler}>
                    <i className="fas fa-heart"></i>Pet
                </button>
            </p>
            <p className="img"><img src={pet.imageURL} alt="" /></p>
            <p className="description">{pet.description}</p>
            <div className="pet-info">
                {/* <Link to={`/pets/edit/${pet.id}`}>
                    <button className="button">
                        <i className="fas fa-heart"></i> Edit
                    </button>
                </Link>
                <Link to={`/pets/delete/${pet.id}`}>
                    <button className="button">
                        <i className="fas fa-heart"></i> Delete
                    </button>
                </Link> */}

                <CustomLink
                    tag='button' // tag name
                    to={`/pets/edit/${pet.id}`} // path
                    className="button" //className
                >
                    <i className="fas fa-heart"></i> Edit
                </CustomLink>
                <CustomLink
                    tag='button' // tag name
                    to={`/pets/delete/${pet.id}`} // path
                    className="button" //className
                >
                    <i className="fas fa-heart"></i> Delete
                </CustomLink>
            </div>
        </section>);
}

export default PetDetails;