import "./footer.css"
import {Buttonstyle} from "./component.js"
function Footer() {
    return (
        <footer className = "footer">
            <div>
                <p>&copy; 2023 copyright. All rights reserved.</p>
            </div>
            <Buttonstyle>Contact</Buttonstyle>
        </footer>
    )
}
export default Footer;