import $ from 'jquery';
import 'popper.js';
import 'bootstrap';


import SmoothScrolling from './modules/SmoothScrolling';
import PreLoader from './modules/PreLoader';
import GoogleMap from './modules/GoogleMap';
import ProgressBars from './modules/ProgressBars';
import Isotope from './modules/IsotopeLayout';
import MagnificPopup from './modules/MagnificPopup';
import CodingTools from './modules/DesignAndDev/CodingTools';
import Frameworks from './modules/DesignAndDev/Frameworks';
import DatabaseTools from './modules/DesignAndDev/DatabaseTools';
import Resources from './modules/DesignAndDev/Resources';
import Acronyms from './modules/DesignAndDev/Acronyms';
import WorkExperience from './modules/WorkExperience';
import TinySlider from './modules/TinySlider';
import TinySliderPopup from './modules/TinySliderPopup';


const smoothScrolling = new SmoothScrolling();
const preLoader = new PreLoader();
const googleMap = new GoogleMap();
const mobileNav = new MobileNav();
const isotope = new Isotope();
const magnificPopup = new MagnificPopup();
const codingTools = new CodingTools();
const frameworks = new Frameworks();
const databaseTools = new DatabaseTools();
const resources = new Resources();
const acronyms = new Acronyms();
const workExperience = new WorkExperience();
const tinySlider = new TinySlider();
const tinySliderPopup = new TinySliderPopup();


import MobileNav from './modules/MobileNav';
new ProgressBars($("#progress-bar-elements"), "bottom-in-view");