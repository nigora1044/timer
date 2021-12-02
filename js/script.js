const sekund = document.querySelector('.s'),
    minut = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNum = document.querySelector('.hours'),
    minNum = document.querySelector('.minutes')

function clock() {
    const time = new Date(),
        sek = time.getSeconds() * 6,
        min = time.getMinutes() * 6,
        hours = time.getHours() * 30
    sekund.style.transform = `rotate(${sek}deg)`

    minut.style.transform = `rotate(${min}deg)`
    hour.style.transform = `rotate(${hours}deg)`
    setTimeout(() => {
        clock()
    }, 1000);

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem ')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}


/* uyga vazifa */


const t_hour = document.querySelector('.stopwatch__hours'),
    t_min = document.querySelector('.stopwatch__minutes'),
    t_sec = document.querySelector('.stopwatch__seconds'),
    t_btn = document.querySelector('.stopwatch__btn')
let int = document.querySelector('.tabsLink__span')




t_btn.addEventListener('click', () => {
    if (t_btn.innerHTML == 'start') {
        t_btn.innerHTML = 'stop';
        int.classList.add('active')
    } else if (t_btn.innerHTML == 'stop') {
        t_btn.innerHTML = 'clear';
        int.classList.remove('active');
        int.classList.add('active_clear');
    } else if (t_btn.innerHTML == 'clear') {
        t_btn.innerHTML = 'start'
        t_sec.innerHTML = 0;
        t_min.innerHTML = 0;
        t_hour.innerHTML = 0;
        int.classList.remove('active_clear')
    }
})

function second() {

    if (t_btn.innerHTML == 'stop') {
        t_sec.innerHTML++;
    }
    if (t_sec.innerHTML >= 60) {
        t_sec.innerHTML = 0;
        t_min.innerHTML++;

    }
    if (t_sec.innerHTML >= 60) {
        t_min.innerHTML = 0;
        t_hour.innerHTML++;
        
    }else if (t_btn.innerHTML == 'start'){
        t_hour.innerHTML = 0;
        t_min.innerHTML = 0;
        t_sec.innerHTML = 0;
    }

    setTimeout(() => {
        second()
    }, 1000);

  
}
second()