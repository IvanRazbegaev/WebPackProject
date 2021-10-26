const newYearTimer = () => {

    const pTimeOfDay = document.getElementById('time-of-day');
    const pDayOfWeek = document.getElementById('day-of-week');
    const pCurrentTime = document.getElementById('current-time');
    const pUntilNewYear = document.getElementById('until-new-year');

    const getDate = () => {
        let timeOfDay;
        let dayOfWeek;
        let currentTime;
        let dateNow = new Date();
        let untilNewYear;

        const newYear = new Date('01 January 2022');
        const weekArray = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'];

        switch (true){
            case (dateNow.getHours() >= 0 && dateNow.getHours() < 6):
                timeOfDay = 'Доброй ночи'
                break;
            case (dateNow.getHours() >= 6 && dateNow.getHours() < 12):
                timeOfDay = 'Доброе утро'
                break;
            case (dateNow.getHours() >= 12 && dateNow.getHours() < 18):
                timeOfDay = 'Добрый день'
                break;
            default:
                timeOfDay = 'Добрый вечер'
                break;
        }

        dayOfWeek = `Сегодня: ${weekArray[dateNow.getDay()]}`;

        currentTime = `Текущее время: ${dateNow.toLocaleTimeString('en-US')}`;

        untilNewYear = `До нового года осталось: ${Math.floor(((newYear.getTime() - dateNow.getTime()) / 1000)/60/60/24)}`;

        return {
            timeOfDay,
            dayOfWeek,
            currentTime,
            untilNewYear
        }
    }

    const render = () => {

        let data = getDate();
        pTimeOfDay.textContent = data.timeOfDay;
        pDayOfWeek.textContent = data.dayOfWeek;
        pCurrentTime.textContent = data.currentTime;
        pUntilNewYear.textContent = data.untilNewYear;
    }
render();
}
newYearTimer();