import "./style.css"
import flaskImg from "../assets/images/flask.png"
import keysImg from "../assets/images/keys.png"
import pharmacyImg from "../assets/images/pharmacy.png"
import programingImg from "../assets/images/programming.png"


const Home = () => {
    return (
        <div>
            <div className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-start">
                            <div className="left-logo">
                                <a href="#.">
                                    SKP <span>Developers</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center">
                            <div className="center-logo">
                                <a href="#.">Praxisio</a>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-end">
                            <div className="login-button">
                                <input type="radio" className="btn-check" name="options-base" id="option5" autocomplete="off" />
                                <label className="btn rounded-pill" htmlFor="option5">
                                    LOGIN
                                </label>

                                <input type="radio" className="btn-check btn" name="options-base" id="option6" autocomplete="off" checked />
                                <label className="btn rounded-pill" htmlFor="option6">
                                    SIGNUP
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner Start Here */}
            <div className="banner">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <div className="banner-left-text">
                                <h2>PRAXISIO</h2>
                                <p>We provide you ChatGPT-4.0 based information in a convenient way.</p>
                            </div>
                        </div>
                        <div className="col-md-5 p-0">
                            <div className="banner-right-text d-flex align-items-center ">
                                <div className="banner-image text-center">
                                    <img src={programingImg} className="img-fluid" alt="" />
                                    <h6>Codes</h6>
                                </div>
                                <div className="banner-text">
                                    <ul>
                                        <li>Compile more then 25 languages.</li>
                                        <li>Convert code into different languages.</li>
                                        <li>Learn detail of each line of code.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>.</li>
                                        <li>Any many more.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="button-box text-end">
                                <a href="#." className="btn rounded-pill btn-primary">
                                    DIVE IN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Box Start Here */}
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <div className="services-box">
                                <div className="services-icon">
                                    <img src={flaskImg} className="img-fluid" alt="" />
                                </div>
                                <div className="services-text">
                                    <h5>CHEMICALS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <div className="services-box text-center">
                                <div className="services-icon">
                                    <img src={programingImg} className="img-fluid" alt="" />
                                </div>
                                <div className="services-text">
                                    <h5>CODES</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <div className="services-box">
                                <div className="services-icon">
                                    <img src={keysImg} className="img-fluid" alt="" />
                                </div>
                                <div className="services-text">
                                    <h5>CALCULATIONS</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <div className="services-box">
                                <div className="services-icon">
                                    <img src={pharmacyImg} className="img-fluid" alt="" />
                                </div>
                                <div className="services-text">
                                    <h5>MEDICINES</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home