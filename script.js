document.addEventListener('DOMContentLoaded', function() {
    let timer = document.querySelector('.timer')
    let play = document.querySelector('.fa-play')
    let pause = document.querySelector('.fa-pause')
    let stop = document.querySelector('.fa-stop')
    let min = document.querySelector('.timer__min')
    let sec = document.querySelector('.timer__sec')
    let clouds = document.querySelectorAll('.cloud')
    let standardTime = 2

    class Counter{
        constructor(min, sec){
            // this.time = time * 60
            this.min = min
            this.sec = sec
            this.runtimer
        }
        count() {
            
            this.runtimer = setInterval(() => {
                let total_time = parseInt(this.min.innerHTML * 60) + parseInt(this.sec.innerHTML)
                console.log(total_time)
                total_time -= 1
                if(total_time >= 0 ){
                    let new_min = parseInt(total_time / 60, 10)
                    let new_sec = parseInt(total_time % 60, 10)
                    this.min.innerHTML = new_min < 10 ? '0' + new_min: new_min 
                    this.sec.innerHTML = new_sec < 10 ? '0' + new_sec: new_sec
                }
                else {
                    clearInterval(this.runtimer)
                    let audio = new Audio('leopard7.mp3')
                    audio.play()
                    this.min.innerHTML = '02'
                    this.sec.innerHTML = '00'
                    play.style.display = 'inline-block'
                    pause.style.display = 'none'
                    smoke.stop()
                }

            }, 
            1000)
        }

        pause() { 
            clearInterval(this.runtimer)
        }

        refresh() {
            clearInterval(this.runtimer)
            this.min.innerHTML = '0' + standardTime
            this.sec.innerHTML = '00'
        }

    }
    class Active {
        // constructor(data, currentClass) {
        //     this.data = data
        //     this.currentClass = currentClass
        // }
        remove() {
            let options = document.querySelectorAll('.time__option')
            options.forEach(element => {
                element.className = 'time__option'
            })
        }
        setActive(currentClass) {
            currentClass.classList.add('active')
        }
        activate(currentClass, data){
            this.remove()
            this.setActive(currentClass)
            min.innerHTML = '0'+ data
            sec.innerHTML = '00'
            standardTime = data
        }

    }

    class Smoke {
        constructor(elements)
        {
            this.elements = elements
        }
        start() {
            let i
            console.log(this.elements)
            for (i = 0; i < this.elements.length; i++) {
                // console.log(elements[i])
                this.elements[i].classList.add(`cloud__${i}`)
            }
        }
        stop() {
            let i
            for (i = 0; i < this.elements.length; i++) {
                this.elements[i].classList.remove(`cloud__${i}`)
            }
        }
    }

    let counter = new Counter(min, sec)
    let active = new Active
    let smoke = new Smoke(clouds)
    
    let options = document.querySelectorAll('.time__option')
    options.forEach(element => {
        element.addEventListener('click', function(){
            play.style.display = 'inline-block'
            pause.style.display = 'none'
            counter.refresh()
            smoke.stop()
            active.activate(element, this.dataset.time)

            // alert(element)

        })
    })

    play.addEventListener('click', function(){
        play.style.display = 'none'
        pause.style.display = 'inline-block'
        counter.count()
        console.log(clouds)
        smoke.start()
    })
    pause.addEventListener('click', function(){
        play.style.display = 'inline-block'
        pause.style.display = 'none'
        counter.pause()
        smoke.stop()
    })
    stop.addEventListener('click', function() {
        play.style.display = 'inline-block'
        pause.style.display = 'none'
        counter.refresh()
    })

})


// click
// clickbtn remove all actives
// set active on click btn
// set numbers to value of click btn 
