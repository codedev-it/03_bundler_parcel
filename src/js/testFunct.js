import $ from 'jquery';
const myFunct = (colorWord,color) =>{
    const theWord = $(colorWord)
    console.log(theWord)
    theWord.css('color',color)
}
export {myFunct}