import './sign/verification.scss'
import varification from '../../img/sign/verification/verifycation.png'
const Verification = () => {
    return(
        <div class="sign__inner inner-sign">
            <img src={varification} class="inner-sign__image" alt=""/>
            <div class="inner-sign__body verification">
                <div class="container">
                    <div class="verification__text sign-text">
                        <h2 class="sign-text__title">Verification</h2>
                        <p class="sign-text__subtitle">Verify your code.</p>
                    </div>
                    <div class="verification__form">
                        <form>
                            <div class="inner-sign__code verification__code">
                                <label for="email">Verification Code </label> 
                                <input class="inner-sign__input" id="code" name="code" type="number" />
                            </div>
                            <button type="submit" class="inner-sign__button">Verify Code</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verification