let btns = document.getElementsByClassName("list-itens");
let divs = document.getElementsByClassName('hide-div');

const arrydiv = Array.from(divs);

if (divs && divs.lenght > 0) {
    divs[0].style.display = 'block';
}

  console.log('saiu:' + arrydiv[0]);

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(index) {
        for (let j = 0; j < divs.length; j++) {
            if (j === index) 
                divs[j].style.display = 'block';
            else
                divs[j].style.display = "none";
        }
    }.bind(null, i));
}
