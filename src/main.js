
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault()
    var length = parseInt(document.getElementById("lor").value)
    var width = parseInt(document.getElementById("wor").value)
    let temp = length + width
    console.log(parseInt(length) * parseInt(width))
    document.getElementById("area").innerHTML = `Area is ${length * width} sq.mtr`
    document.getElementById("perimeter").innerHTML = `Perimeter is ${2 * temp} mtr`
})