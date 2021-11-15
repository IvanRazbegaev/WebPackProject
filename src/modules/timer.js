const timer = function (deadline) {

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateNow = Date.now();
        let dateStop = new Date(deadline).getTime();
        let timeRemaining = (dateStop - dateNow)/1000;
        let hours = Math.floor((timeRemaining/60/60));
        let minutes = Math.floor((timeRemaining/60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        if (dateStop < dateNow){
            return {
                timeRemaining: 0,
                hours: `00`,
                minutes: `00`,
                seconds: `00`
            }
        } else {
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            }
        }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining()
        if(getTime.hours.length == 1){
            timerHours.textContent = ('0' + getTime.hours).slice(-2);
        } else {
            timerHours.textContent = getTime.hours
        }
        timerMinutes.textContent = ('0' + getTime.minutes).slice(-2);
        timerSeconds.textContent = ('0' + getTime.seconds).slice(-2);

        if (getTime.timeRemaining <= 0){
            clearInterval(intervalID)
        }
    };
    updateClock();
    const intervalID = setInterval(updateClock, 1000);
}

export default timer;