/* 모달과 관련된 스크립트들 */

const hunimodal = document.querySelector('#hunimodalid');
const huniopenbutton = document.querySelector('#hunibutton');
const huniclossbutton = document.querySelector('.huniclossbutton');
const hunistartbutton = document.querySelector('#hunistart');
/* 속성 가져오기 이때 getElementById 혹은 getElementsByClassName으로도 가능하지만, querySelector도 가능하다. (id는 #으로 표기, class는 .으로 표기)*/

huniopenbutton.addEventListener('click', huniopenmodal);
/* 클릭하면 모달이 열리는 huniopenmodal를 실행하는 이벤트 */

huniclossbutton.addEventListener('click', huniclossmodal);
/* 클릭하면 모달이 닫히는 huniclossmodal를 실행하는 이벤트 */

window.addEventListener('click', outsideclick);
/* 모달 바깥쪽을 클릭하면 모달이 닫히는 outsideclick을 실행하는 이벤트 */

/* hunistartbutton.addEventListener('click', hunigamestart); */
/* 클릭하면 모달이 닫히면서 화면이 밑으로 내려가는 hunigamestart을 실행하는 이벤트 */

function huniopenmodal(){
    hunimodal.style.display ='block';
}
/* 클릭하면 모달이 열리는 함수 */

function huniclossmodal(){
    hunimodal.style.display ='none';
}
/* 클릭하면 모달이 닫히는 함수 */

function outsideclick(e){
    if(e.target == hunimodal){
        hunimodal.style.display ='none';
    }
}
/* 모달 바깥쪽을 클릭하면 모달이 닫히는 함수 */

function hunigamestart(){
    hunimodal.style.display ='none';
}
/* 클릭하면 모달이 닫히는 함수 */