/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faInfinity,
  faHistory,
  faBullseye,
  faMedal,
  faChevronRight,
  faMousePointer,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCog,
  faInfinity,
  faHistory,
  faBullseye,
  faMedal,
  faChevronRight,
  faMousePointer,
  faFileDownload
);

export default FontAwesomeIcon;
