//Juhlinta alkaa
function createCustomTimer(targetDate, elementId, expiredMessage) {
    var countDownDate = new Date(targetDate).getTime()
    
    var timer = setInterval(function() {
        var now = Date.now() // Use actual computer time
        
        var distance = countDownDate - now
        
        if (distance < 0) {
            clearInterval(timer)
            document.getElementById(elementId).innerHTML = expiredMessage
            return
        }
        
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)

        document.getElementById(elementId).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
    }, 1000)
    
    return timer
}

// Create all timers (removed the startDate parameter)
var timer1 = createCustomTimer("2025-06-19T18:00:00", "torstaiStart", "JUHLITAAN")
var timer2 = createCustomTimer("2025-06-20T14:00:00", "perjantaiStart", "NYT JUHLITAAN KOKO PORUKLLA")
var timer3 = createCustomTimer("2025-06-22T11:00:00", "secret", "EN JUO ENÄÄ KOSKAAN &#129314; (paitsi seuraavan kerran)")
// var timer4 = createCustomTimer("Jun 22, 2025 10:00", "Jun 13, 2025 22:07", "olympialaiset", "Vain parhaat voittaa)")

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
