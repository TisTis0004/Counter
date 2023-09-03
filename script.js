let count = 0
document.getElementById('dec').onclick = function(){
    // if(count != 0)
    count--
    document.getElementById('cnt').innerText = count
}
document.getElementById('reset').onclick = function() {
    count = 0
    document.getElementById('cnt').innerText = count;
}
document.getElementById('inc').onclick = function() {
    count++
    document.getElementById('cnt').innerText = count;
}