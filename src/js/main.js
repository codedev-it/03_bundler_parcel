import $ from 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'
import '../scss/main.scss';
import {myFunct} from './testFunct';
$(()=>{
    myFunct('.emph','white');
}
)