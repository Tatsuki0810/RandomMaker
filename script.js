function getValue(){
    var min = parseInt(document.getElementById("min").value, 10);
    var max = parseInt(document.getElementById("max").value, 10);
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!isNaN(min)) {
        if (!isNaN(max)) {
            insert(rand);
        } else {
            alert("ERROR: 値を入力してください");
        }
    } else {
        alert("ERROR: 値を入力してください");
    }
}

function insert(val) {
    target = document.getElementById("result");
    target.innerHTML = val;
}