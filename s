
const Home = () =>{
    return(
        <>
        <Header />
            <div className="container">
                <div className="about row">
                    <div className="title col-12 col-md-5">
                        <h2>About Me</h2>
                        <hr className="w-50" />
                    </div>
                    <div className="description col-12 col-md-7">
                        <p>
                            I’m a Software Engineer with experience in designing
                            the frontend and implementing the backend of your
                            next favorite website. Whether you’re trying to
                            kickstart your business, list your services or
                            create an online store – I will help!
                        </p>
                        <p>
                            I'm very flexible with the techs I use and have no
                            problem in adapting to your project's needs. I can
                            and will deliver great results with a process that's
                            timely and collaborative with great value.
                        </p>
                    </div>
                    <div className="row my-3">
                        <div className="col-12 col-md-5"></div>
                        <div className="col-12 col-md-7 text-left">
                            <Button
                                linkTo="/assets/files/cv.pdf"
                                text="Download Resume"
                            />
                        </div>
                    </div>
                </div>

                <div className="my-skills row mb-3">
                    <div className="my-focus col-12 col-md-5">
                        <h3>My focus</h3>
                        <hr className="w-50" />
                        <ul className="list-unstyled">
                            <li>
                                <h5>Laravel</h5>
                            </li>
                            <li>
                                <h5>Nodejs/Expressjs</h5>
                            </li>
                            <li>
                                <h5>MySQL</h5>
                            </li>
                            <li>
                                <h5>Mongodb</h5>
                            </li>
                            <li>
                                <h5>HTML</h5>
                            </li>
                            <li>
                                <h5>CSS</h5>
                            </li>
                            <li>
                                <h5>Git/Github</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="my-progress col-12 col-md-7">
                        <div className="skill-progress">
                            <h5>Laravel</h5>
                            <ProgressBar variant="success" now={95} />
                        </div>
                        <div className="skill-progress">
                            <h5>Nodejs/Expressjs</h5>
                            <ProgressBar variant="success" now={80} />
                        </div>
                        <div className="skill-progress">
                            <h5>MySQL</h5>
                            <ProgressBar variant="success" now={90} />
                        </div>
                        <div className="skill-progress">
                            <h5>Mongodb</h5>
                            <ProgressBar variant="success" now={75} />
                        </div>
                        <div className="skill-progress">
                            <h5>HTML</h5>
                            <ProgressBar variant="success" now={90} />
                        </div>
                        <div className="skill-progress">
                            <h5>CSS</h5>
                            <ProgressBar variant="success" now={90} />
                        </div>
                        <div className="skill-progress">
                            <h5>Git/Github</h5>
                            <ProgressBar variant="success" now={95} />
                        </div>
                    </div>
                </div>

                <div className="portfolio">
                    <div className="row">
                        <div className="col-12 col-md-4 title">
                            <h3>Portfolio</h3>
                            <hr className="w-50" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                        <div className="card col-md-4 col-12">
                            <img
                                src="/assets/images/portfolio.webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <p className="card-text">Web Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
    );
}

export default Home;

==================================
this is css (i dont want css in my project) 

.about {
    padding: 5rem 0;
}
.about .title {
    text-align: left;
}

.about .description {
    text-align: left;
}
.about button {
    text-align: left !important;
}

.progress {
    background-color: rgb(246, 229, 195) !important;
    width: 100%;
}
.skill-progress {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.skill-progress > h5 {
    margin-right: 0.5rem;
}

hr {
    width: 50%;
}
.my-focus {
    text-align: left;
}

.my-focus > ul {
    list-style: none;
    padding: 0 !important;
    margin: 0 !important;
}

.portfolio {
    padding-top: 4rem;
}

.portfolio .card {
    margin-bottom: 4rem;
    background-color: rgb(246, 229, 195);
}
=====================
make all stayle is a bootstrab 