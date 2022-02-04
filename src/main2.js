function result(res) {
    document.getElementById("ans").innerHTML = res
}
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    var x = document.getElementsByName("op")[0].checked
    if (x) { //if hour to seconds is selected
        var time = parseInt(document.getElementById("time").value)
        result(`${time} hours = ${time * 60} mins`)
    }
    else {
        var time = parseInt(document.getElementById("time").value)
        console.log(time > 60, time)
        //if minutes to seconds is selected
        result(`${time} hours = ${time * 60 * 60} seconds`)
    }
})