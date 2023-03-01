const timeElement = document.getElementById('time')
const startButton = document.getElementById('start_button');
const stopButton = document.getElementById('stop_button');
const resetButton = document.getElementById('reset_button');

//初期値設定
let startTime = 0;
let elapsedTime = 0;//経過時間

//クリック時のタイマー表示の動き
const displayTimer = function(){
    timerInterval = setInterval(() =>{
    elapsedTime = Date.now() - startTime; //経過時間は今の時間-スタートタイム

    //タイムスタンプを時間に変換する
    const currentTime = new Date(elapsedTime);//現在の時間=経過時間の時刻
    const h = String(currentTime.getUTCHours()).padStart(1,"0");
    const m = String(currentTime.getMinutes()).padStart(1,"0");
    const s = String(currentTime.getSeconds()).padStart(1,"0");
    const ms = String(currentTime.getMilliseconds()).padStart(1,"0");

    time.textContent = `${h} : ${m} : ${s} : ${ms.slice(0,1)}`;
    },10);
}

//スタートボタン押下時のイベント
startButton.addEventListener('click',function(){
    startTime = Date.now() - elapsedTime;
    displayTimer();
    //ボタンの制御
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
})
//ストップボタン押下時のイベント
stopButton.addEventListener('click',function(){
    window.clearInterval(timerInterval); //clearIntervalメソッド、インターバル処理の停止
    //ボタンの制御
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
})
//リセットボタン押下時のイベント
resetButton.addEventListener('click',function(){
    elapsedTime = 0;
    time.textContent = "0 : 0 : 0 : 0";
    startButton.disabled = false;
    window.clearInterval(timerInterval);

    //ボタンの制御
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
})

