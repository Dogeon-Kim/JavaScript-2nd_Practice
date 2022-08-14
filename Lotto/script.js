let lotto_num_sub_id, lotto_btn_id;
let lottoArr, index, delay;

init();

function init(){
  lotto_num_sub_id = document.getElementById("lotto_num_sub_id");
  lotto_btn_id = document.getElementById("lotto_btn_id");
}

function lottoFunc(){
  lottoArr = new Array();
  lotto_num_sub_id.innerHTML = "";
  index = 0;
  delay = 0;
  runLottoSys();
}

function runLottoSys(){
  for(let i=0; i<7; i++){
    let lotto = Math.floor(Math.random() * 45) + 1;
    while(true){
      if(lottoArr.indexOf(lotto) < 0) {
        lottoArr[index] = lotto;
        index++;
        break;
      } 
      else {
        lotto = Math.floor(Math.random() * 45) + 1;
      }
    }
  }

  for(let i=0; i<index; i++){
    setTimeout(function(){
      if(i == 6){
        lotto_num_sub_id.innerHTML += "<div class='lotto_num_plus'><span style='top:22.5px;'> + </span></div>"
      }
      if (i==6){
        lotto_num_sub_id.innerHTML += "<div class='lotto_num_part' style='background-color:#aed8ff;'>" + "<span style='top:22.5px;'>" + lottoArr[i] + "</span>" + "</div>"
      }
      else {
        lotto_num_sub_id.innerHTML += "<div class='lotto_num_part' style='background-color:#f1bbba;'>" + "<span style='top:22.5px;'>" + lottoArr[i] + "</span>" + "</div>"
      }
    }, delay);
    delay = delay + 1000;
  }
}