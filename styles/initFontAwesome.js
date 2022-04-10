import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faLinkedin, faGithub, faTelegram} from "@fortawesome/free-brands-svg-icons";
import { fas, faHouse } from '@fortawesome/free-solid-svg-icons'

function initFontAwesome() {
    library.add(fab, faLinkedin, faGithub, faTelegram, fas, faHouse);
}
export default initFontAwesome;