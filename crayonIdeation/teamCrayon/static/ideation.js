


/* 페이지를 스크롤다운하게 하는 스크립트들 */

const nextpage = document.querySelector('#hunistart');
/* 속성 가져오기 */

/* nextpage.addEventListener('click', function(){
    window.scrollBy({left:0, top: 1080, behavior:'smooth'});
}); */

/* nextpage.addEventListener('click',scrolldown); */
/* 클릭하면 내려가는 scrolldown을 실행하는 이벤트 */

function scrolldown(){
    window.scrollBy({left:0, top: 1080, behavior:'smooth'});
}
/* 클릭하면 내려가는 scrolldown함수 */

/*     imgs[x].onclick = function(){
        window.scrollBy({left : 0, top: 1070, behavior:'smooth'}); */

var imgs = document.getElementsByTagName("img");
for( var x=0; x < 4; x++ ) {
    imgs[x].onclick = function(){
        window.scrollBy({left : 0, top: 1070, behavior:'smooth'});
        setInterval(timer,1000);
        };}

/* 현재시간을 나타내는 스크립트들 */

const clockTarget = document.getElementById("clock");
/* 속성 가져오기 */

function clock() {
    const date = new Date();
    /* 시간 데이터 가져오기 */
    
    const hours = date.getHours();
    /* 시간 정의 */ 
    const minutes = date.getMinutes();
    /* 분 정의 */
    const seconds = date.getSeconds();
    /* 초 정의 */
    
    clockTarget .innerText =`현재시간은?  ${hours < 10 ? `0${hours}` : hours}시${minutes < 10 ? `0${minutes }`  : minutes }분${seconds < 10 ? `0${seconds }`  : seconds }초`;
    /* innerText를 이용하여 html에 시간 표시 */
    /* 시간 분 초를 두자리 수로 만들기 위해 10보다 작으면 앞에0을 붙혀주는 작업을 3항연산으로 활용 */ 
}


/* 시간이 매 시간흐르게 설정 */
function init() {

clock();

/* 최초에 함수를 한번 실행시켜주고  */
setInterval(clock, 1000);

/* setInterval이라는 함수로 clock 함수를 매초마다 실행 => setInterval(적용하고자 하는 함수, 시간단위)*/
/* setInterval은 첫번째 파라메터는 함수이고 두번째는 시간인데 밀리초단위로 받는다. 1000 = 1초 */ 

}
init();