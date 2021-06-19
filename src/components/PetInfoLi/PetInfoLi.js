import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petsService';

const PetInfoLi = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes,
}) => {
    const [pet, setPet] = useState({});
    const [currentLikes, setCurrentLikes] = useState(likes);

    useEffect(() => {
        petsService.getOne(id)
            .then(res => setPet(res))
    }, [id]); //match da mi se podawa vinagi aktualen tuk, zatowa go slagam, zashtoto zawisi ot nego
    //kawko shte vzema kato danni! petId syshto e dependency i e hubawo i nego da go podam v tozi array ot
    //dependencyta!!!

    const onPetLikeClickHandler = () => {
        //zapisvam si novata stojnost za like-ovete:
        const newLikes = parseInt(pet.likes) + 1;
        //prashtam patch request, za da se zapishe novata stojnost za likes

        petsService.patch(pet.id, { likes: newLikes })
            //patch requesta vryshta fetch, t.e. promise, ako e resolvnat tozi promise, prodyljavam nadolu i edva 
            //pri resolvnat promise, updatevam state-yt na componentata, t.e. sled kato servera na BE-da e updatenal
            //stojnostta za likes, edwa togawa shte promenq stojnostta na likes, koqto se pokazwa na usera!!!!
            //Sled uspeshen update na servera, toj mi vyshta response v kojto kato json e samiqt obekt ot DB-to na 
            //servera, kojto obekt toku shto sym promenila!!! Ot tozi obekt moga da vzema aktualnata i updatenata
            //stojnost na likes!!!! Taka e naj-pravilno da q wzema, a ne da uvelichawam oldState, zashtoto ako drug 
            //user e like-nal zaedno s men edno i syshto jivotno, az nqma da polucha aktualnata stojnost, koqto 
            //shte e +2, a shte polucha samo moqta stojnsto +1, koqto NQMA da e vqrna!!! Zatowa pri vseki 
            //update, trqbwa da wzimam ot servera i DB-to aktualnite danni, a ne da si rabotq s moq si state i
            //i da si razchitam samo na nego, zashtoto nqma samo az da rabotq s towa prilojenie!!!!
            .then((res) => res.json())
            .then((res) => {
                //towa e mnogo greshno da go prawq taka:!!!!!!
                // setPet(oldState => ({ ...oldState, likes: parseInt(oldState.likes) + 1 }));
                //pravilno e da vzimam stariq state i mu slagam nova stojnost za likes ot servera!!!!
                setPet(oldState => ({ ...oldState, likes: res.likes }));
                setCurrentLikes(res.likes);
            })
            .catch(err => console.error(err));
    }

    return (
        < li className="otherPet" >
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} alt="" /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <Link to={'#'}>
                    <button className="button" onClick={onPetLikeClickHandler}>
                        <i className="fas fa-heart"></i> Pet
                    </button>
                </Link>
                <Link to={`/pets/details/${id}`}>
                    <button className="button">
                        Details
                        </button>
                </Link>
                <i className="fas fa-heart"></i> <span className="likesCounter"> {currentLikes}</span>
            </div>
        </li >
    )
}

export default PetInfoLi;