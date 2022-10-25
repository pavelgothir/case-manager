import React from "react";
import "./footer.css";
const Footer = ()=>{
    return(
        <footer>
            <div className="footer">
                <p className="footer__contact">Якшо виникли проблеми, пропозиції - пишіть на поштову скриньку <a href="mailto:teenitclub@gmail.com">teenitclub@gmail.com</a></p>
                <p className="footer__contact">Якшо питання супер термінове дзвоніть за номером <a href="tel:+380932080760">+380932080760</a></p>
                <p className="copyright">© Case Manager | 2022 | powered by <a href="https://studio.itclub.in.ua">Studio IT Club</a></p>
            </div>
        </footer>
    )
}
export default Footer;