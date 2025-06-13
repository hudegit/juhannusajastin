//Juhlinta alkaa
var countDownDate1 = new Date("Jun 19, 2025 14:00").getTime()
var startTime = new Date("Jun 13, 2025 20:31").getTime() // Your hardcoded "current" time
var scriptStartTime = Date.now() // When the script actually started

var timer1 = setInterval(function() {
    var elapsedTime = Date.now() - scriptStartTime // How long script has been running
    var now = startTime + elapsedTime // Hardcoded start + elapsed time
    
    var distance = countDownDate1 - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("torstaiStart").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    if (distance < 0) {
        clearInterval(timer1)
        document.getElementById("torstaiStart").innerHTML = "JUHLITAAN"
    }
}, 1000)


var countDownDate2 = new Date("Jun 20, 2025 14:00").getTime()
var startTime = new Date("Jun 13, 2025 20:31").getTime()
var scriptStartTime = Date.now()

var timer2 = setInterval(function() {
    var elapsedTime = Date.now() - scriptStartTime
    var now = startTime + elapsedTime
    
    var distance = countDownDate2 - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("perjantaiStart").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    if (distance < 0) {
        clearInterval(timer2)
        document.getElementById("perjantaiStart").innerHTML = "VIHDOIN LOPUTKIN PAIKALLA"
    }
}, 1000)


var countDownDate3 = new Date("Jun 22, 2025 10:00").getTime()
var startTime = new Date("Jun 13, 2025 20:31").getTime()
var scriptStartTime = Date.now()

var timer3 = setInterval(function() {
    var elapsedTime = Date.now() - scriptStartTime
    var now = startTime + elapsedTime
    
    var distance = countDownDate3 - now
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    document.getElementById("secret").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

    if (distance < 0) {
        clearInterval(timer3)
        document.getElementById("secret").innerHTML = "EN JUO ENÄÄ KOSKAAN &#129314 (paitsi seuraavan kerran)"
    }
}, 1000)


// ALKUPERÄINEN
// var countDownDate = new Date("Jun 19, 2025 14:00").getTime()
// var x = setInterval(function() {
//     var now = new Date().getTime()  // Changed GetTime() to getTime()
//     var distance = countDownDate - now  // Changed countDowndate to countDownDate
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24))
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000)

//     document.getElementById("juhannusStartTime").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

//     if (distance < 0) {
//         clearInterval(x)
//         document.getElementById("juhannusStartTime").innerHTML = "JUHLITAAN"
//     }
// }, 1000)