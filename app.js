"use strict"
const input = document.querySelector('.input')
const result = document.querySelector(' .result')
const deletebtn = document.querySelector(' .delete')
const keys = document.querySelectorAll('.bottom span')

let operation = ""
let answer 
let decimslAdded = false

const operators = [ '+', '-','x','/']

function handleKeyPress(e){
    const key = e.target.dataset.key
     const lastChar = operation[operation.length - 1]

        if (key === '='){
            return
        }

        if (key === '.'&& decicamalAdded){

        }

        if (operators.indexOf(key) !== -1){
            decimalAdded = false
        }

        if (operation.length === 0 && key === '-') {
            operation += key
            input.innerHTML = operation
            return
        }

        if (operation.length === 0 && operators.indexOf(key) !== -1) {
            input.innerHTML = operation 
            return
        
        }
        
        if (operation.indexOf(lastChar) !== -1 && operators.indexOf(key) !== -1) {
             operation = operation.replace(/.$/,key)
             input.innerHTML = operation
             return
        }





    
    }

    keys.forEach(key => {
        key.addEventListener(' click', handelkeypress)
     } 