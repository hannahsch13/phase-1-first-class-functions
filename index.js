
function myCat() {
    console.log(`Hi Freddie!`)
}


function receivesAFunction(myCat) {
   console.log ('Hi Pablo!');
    myCat();
}


function returnsANamedFunction () {
    return myCat;
}

function returnsAnAnonymousFunction () {
    return function (){
        console.log("That's my dog, hi Linda!")
    }
}