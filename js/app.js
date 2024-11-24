'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnColseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for(let i = 0; i < btnsOpenModal.length; i++){
    document.addEventListener('click',
        function(){
            modal.classList.remove('hidden');
            overLay.classList.remove('hidden');
        }
    )
};