import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedin, faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faLinkedin, faGithub, faTelegram);
}
export default initFontAwesome;