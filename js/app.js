'use strict';
// calling classes
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnColseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// open modal
const OpenModal = function(){
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');    
};

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', OpenModal
        // function(){
        //     modal.classList.remove('hidden');
        //     overLay.classList.remove('hidden');
        // }
    )
};
// colse modal
const closeModal = function(){
    modal.classList.add('hidden');
    overLay.classList.add('hidden');    
};
btnColseModal.addEventListener('click', closeModal
    // function(){
    //     modal.classList.add('hidden');
    //     overLay.classList.add('hidden');
    // }
);

overLay.addEventListener('click', closeModal
    // function(){
    //     modal.classList.add('hidden');
    //     overLay.classList.add('hidden');
    // }
);