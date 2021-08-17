/* To Do List
    -To be built
        - Construct CSS class to do the position relative and absolute stuff (see instructions)(1a)
    -Questions
        - Where should the div population code go?(1a)
            -should it go in th for loop so that it is run everytime form data is pulled? 
            Will that mess up the look of the existing memes on the DOM?
    
*/
//Global Variables
let memes = [];
let form = document.getElementById("form");
let rowCount = 0;
let memesHolder = document.getElementById("memesHolder");

//------1. Function Declaration-----------------------------
//------1a. Populate Meme Data--------
let pasteMemesToDOM = function() {
    let i = memes.length - 1;
        if (i % 3 === 0){
            let newRow = document.createElement("div");

            newRow.className = "row";
            rowCount += 1;
            newRow.id = "row-" + rowCount.toString();
            newRow.innerHTML = `
                <div id=${i.toString()} class='col meme'>
                    <div class='topText'>${memes[i].topText}</div>
                    <div class='bottomText'>${memes[i].bottomText}</div>
                    <img class='img' src='${memes[i].img}'>
                </div>`;
            
            memesHolder.insertAdjacentElement('beforeend',newRow);
        } else {
            let row = document.getElementById(`row-${rowCount}`);
            row.insertAdjacentHTML('beforeend',`
                <div id=${i.toString()} class='col meme'>
                    <div class='topText'>${memes[i].topText}</div>
                    <div class='bottomText'>${memes[i].bottomText}</div>
                    <img class='img' src='${memes[i].img}' width='500' height='500'>
                </div>`);
        }
}
//------1b. Delete Meme--------
let deleteMeme = function(Event){
    let memeToDelete = Event.currentTarget.children[0].children[0].id;
    let b4Delete =  memes.slice(0,memeToDelete);
    let afterDelete = memes.slice(memeToDelete + 1,memes.length);
    memes = b4Delete.concat(afterDelete);
    memesHolder.innerHTML = '';
    let rowCount = 0;

    for (let i = 0; i < memes.length; i++){
        if (i % 3 === 0){
            let newRow = document.createElement("div");
            newRow.className = "row";
            rowCount +=1;
            newRow.id = "row-" + rowCount.toString();
            newRow.innerHTML = `
                <div id=${i.toString()} class='col meme'>
                    <div class='topText'>${memes[i].topText}</div>
                    <div class='bottomText'>${memes[i].bottomText}</div>
                    <img class='img' src='${memes[i].img}'>
                </div>`;
            console.log(newRow);

            memesHolder.insertAdjacentElement('beforeend',newRow);
        } else {
            let row = document.getElementById(`row-${rowCount}`);
            row.insertAdjacentHTML('beforeend',`
                <div id=${i.toString()} class='col meme'>
                    <div class='topText'>${memes[i].topText}</div>
                    <div class='bottomText'>${memes[i].bottomText}</div>
                    <img class='img' src='${memes[i].img}' width='500' height='500'>
                </div>`);
        }
    }
    console.log("deletion worked. You just need to refresh");

};

//------1c. Get Form Inputs--------
let getFormInputs = function (){
    let topText = document.getElementById("topText");
    let bottomText = document.getElementById("bottomText");
    let img = document.getElementById("imgURL");
    
    let meme = {
        topText: topText.value,
        bottomText: bottomText.value,
        img: img.value

    };
    memes.push(meme);
    event.preventDefault();
    form.reset();

    pasteMemesToDOM();
}

//------2. Function Call-----------------------------
form.addEventListener('submit',getFormInputs);
memesHolder.addEventListener('click',deleteMeme);

