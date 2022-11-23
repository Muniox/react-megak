
const fn = function() {
    "use strict"
    console.log(this)
}

fn() //undefined


const fn2 = function() {
    console.log(this)
}

fn2() //window - dla przeglądarki, global - dla node


const myObj = {
    id: 'MA011124',
    showName: function() {
        (function() {
            console.log(this.id);
        })()
    }
}

myObj.showName() //undefined

const myObj2 = {
    id: 'MA011124',
    showName: function() {
        (() => {
            console.log(this.id);
        })()
    }
}

myObj2.showName() //MA011124