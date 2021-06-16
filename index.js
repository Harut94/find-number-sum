// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var sumBtn = document.querySelector('.sumBtn');
var myInput = document.querySelector('#myInput');
var sumInput = document.querySelector('#sumInput');
var i;
var numsList = [];


for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    numsList.push({ value: +inputValue, id: Math.random() });

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function newSumOfNumbers() {
    var sumDiv = document.querySelector("#sumDiv");
    var inputValue = document.getElementById("sumInput").value;
    var t = document.createTextNode(inputValue);

    if (sumDiv.innerText) {
        alert("You already have sum number!");
        return;
    }

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        sumDiv.appendChild(t);
    }
    document.getElementById("sumInput").value = "";

}

sumBtn.addEventListener('click', findFourElements)

myInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        newElement()
    }
});

sumInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        newSumOfNumbers()
    }
});

function findFourElements() {
    let X = +document.querySelector('#sumDiv').innerText;
    let A = numsList.map(item => item.value);
    let n = A.length
    // Fix the first element and find other three
    for (let i = 0; i < n; i++) {
        // Fix the second element and find other two
        for (let j = i + 1; j < n; j++) {
            // Fix the third element and find the fourth
            if (A[i] + A[j] == X) {
                alert(A[i] + ", " + A[j]);
            }
            for (let k = j + 1; k < n; k++) {
                // find the fourth
                if (A[i] + A[j] + A[k] == X) {
                    alert(A[i] + ", " + A[j] + ", " + A[k]);
                }
                for (let l = k + 1; l < n; l++) {
                    //find the five
                    if (A[i] + A[j] + A[k] + A[l] == X) {
                        alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l]);
                    }
                    for (let z = l + 1; z < n; z++) {
                        //find the six
                        if (A[i] + A[j] + A[k] + A[l] + A[z] == X) {
                            alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z]);
                        }
                        for (let h = z + 1; h < n; h++) {
                            //find the seventh
                            if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] == X) {
                                alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h]);
                            }
                            for (let q = h + 1; q < n; q++) {
                                //find the eight
                                if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] + A[q] == X) {
                                    alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h] + ", " + A[q]);
                                }
                                for (let f = q + 1; f < n; f++) {
                                    //find the ninth
                                    if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] + A[q] + A[f] == X) {
                                        alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h] + ", " + A[q] + ", " + A[f]);
                                    }
                                    for (let v = f + 1; v < n; v++) {
                                        //find the tenth
                                        if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] + A[q] + A[f] + A[v] == X) {
                                            alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h] + ", " + A[q] + ", " + A[f] + ", " + A[v]);
                                        }
                                        for (let l = v + 1; l < n; l++) {
                                            if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] + A[q] + A[f] + A[v] + A[l] == X) {
                                                alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h] + ", " + A[q] + ", " + A[f] + ", " + A[v] + ", " + A[l]);
                                            }
                                            for (let y = l + 1; y < n; y++) {
                                                if (A[i] + A[j] + A[k] + A[l] + A[z] + A[h] + A[q] + A[f] + A[v] + A[l] + A[y] == X) {
                                                    alert(A[i] + ", " + A[j] + ", " + A[k] + ", " + A[l] + ", " + A[z] + ", " + A[h] + ", " + A[q] + ", " + A[f] + ", " + A[v] + ", " + A[l] + ", " + A[y]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};