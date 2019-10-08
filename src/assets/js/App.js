import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

import PreLoader from './modules/PreLoader';
import GoogleMap from './modules/GoogleMap';
import MobileNav from './modules/MobileNav';
import ProgressBars from './modules/ProgressBars';
import Isotope from './modules/IsotopeLayout';
import MagnificPopup from './modules/MagnificPopup';


const preLoader = new PreLoader();
const googleMap = new GoogleMap();
const mobileNav = new MobileNav();
const isotope = new Isotope();
const magnificPopup = new MagnificPopup();
new ProgressBars($("#progress-bar-elements"), "bottom-in-view");
