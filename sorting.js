



const arraysize=document.querySelector("#arr_sz");
console.log(arraysize);

let array=[];

arraysize.addEventListener('input', function(){
    createnewarray(parseInt(arraysize.value));
});


function deletearray(){
    const bars = document.querySelector("#bars");
    bars.innerHTML='';

}
createnewarray(arraysize.value);

function createnewarray(noofbar){
    deletearray();

    for (let index = 0; index < noofbar; index++) {
         array.push(Math.floor(Math.random() * 100) + 1);
        
    }

    // console.log(array);

    const bars = document.querySelector("#bars");

    for (let index = 0; index < noofbar; index++) {
        
        const bar=document.createElement("div");


        bar.style.height=`${array[index]*2}px`;
    
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${index}`);


        bars.appendChild(bar);

    }


}




const newarray=document.querySelector("#newArray");
newarray.addEventListener("click",function(){
    createnewarray(arraysize.value);
})





function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}


function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}


function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}








function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}


function enableSizeSlider(){
    document.querySelector("#arr_sz").disabled = false;
}


function disableNewArrayBtn(){
    document.querySelector(".newArray").disabled = true;
}


function enableNewArrayBtn(){
    document.querySelector(".newArray").disabled = false;
}


function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


let delay = 260;


let delayElement = document.querySelector('#speed_input');


delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

