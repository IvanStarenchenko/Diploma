import './sign/verification.scss'
import varification from '../../img/sign/verification/verifycation.png'
const Verification = () => {
    return (
        <div className="sign__inner inner-sign">
            <img src={varification} className="inner-sign__image" alt="" />
            <div className="inner-sign__body verification">
                <div className="container">
                    <div className="verification__text sign-text">
                        <h2 className="sign-text__title">Verification</h2>
                        <p className="sign-text__subtitle">Verify your code.</p>
                    </div>
                    <div className="verification__form">
                        <form>
                            <div className="inner-sign__code verification__code">
                                <label for="email">Verification Code </label>
                                <input className="inner-sign__input" id="code" name="code" type="number" />
                            </div>
                            <button type="submit" className="inner-sign__button">Verify Code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification