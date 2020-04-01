import $ from 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css' // Import precompiled Bootstrap css
import '@fortawesome/fontawesome-free/css/all.css'
import '../scss/main.scss';
import {myFunct} from './testFunct';

$(()=>{
    myFunct('.emph','white');
    function copyToClipboard(text) {
        var text = $('.link-repo').text()
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        alert('text copied!')
    }
    $('.copy-repo').on('click', copyToClipboard)
}
)