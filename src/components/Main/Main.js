const Main = () => {
    return (
        <main id="site-content">
            <section className="basic">
                <h1> Welcome to pet my pet!</h1>
            </section>


            <section className="myPet">
                <h3>Name: Pesho</h3>
                <p>Category: Cat</p>
                <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
                <p className="description">This is my cat Pesho</p>
                <div className="pet-info">
                    <a href="/"><button className="button">Edit</button></a>
                    <a href="/"><button className="button">Delete</button></a>
                    <i className="fas fa-heart"></i> <span>5</span>
                </div>
            </section>
            <section className="otherPet">
                <h3>Name: Gosho</h3>
                <p>Category: Cat</p>
                {/* <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png" alt=""/></p> */}
                <p className="img"><img src="" alt=""/></p>
                <p className="description">This is not my cat Gosho</p>
                <div className="pet-info">
                    <a href="/"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
                    <a href="/"><button className="button">Details</button></a>
                    <i className="fas fa-heart"></i> <span> 2</span>
                </div>
            </section>
            <section className="deletePet">
                <h3>Pesho</h3>
                <p>Pet counter: <i className="fas fa-heart"></i> 5</p>
                <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
                <form action="#" method="POST">
                    <p className="description">This is my cat Pesho</p>
                    <button className="button">Delete</button>
                </form>
            </section>
            <section className="my-pets">
                <h1>My Pets</h1>
                <ul className="my-pets-list">
                    <section className="myPet">
                        <h3>Name: Pesho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
                        <p className="description">This is my cat Pesho</p>
                        <div className="pet-info">
                            <a href="/"><button className="button">Details</button></a>
                            <a href="/"><button className="button">Delete</button></a>
                            <i className="fas fa-heart"></i> <span>5</span>
                        </div>
                    </section>
                    <section className="myPet">
                        <h3>Name: Pesho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
                        <p className="description">This is my cat Pesho</p>
                        <div className="pet-info">
                            <a href="/"><button className="button">Details</button></a>
                            <a href="/"><button className="button">Delete</button></a>
                            <i className="fas fa-heart"></i> <span>5</span>
                        </div>
                    </section>
                    <section className="myPet">
                        <h3>Name: Pesho</h3>
                        <p>Category: Cat</p>
                        <p className="img"><img src="http://pngimg.com/uploads/cat/cat_PNG50491.png" alt=""/></p>
                        <p className="description">This is my cat Pesho</p>
                        <div className="pet-info">
                            <a href="/"><button className="button">Details</button></a>
                            <a href="/"><button className="button">Delete</button></a>
                            <i className="fas fa-heart"></i> <span>5</span>
                        </div>
                    </section>
                </ul>
            </section>
        </main>
    )
}

export default Main;