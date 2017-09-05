var ul = document.querySelector('.bookmarks');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var val = this.link.value;
    var text = this.notes.value;
    localStorage.setItem(val, text);
    this.reset();
    display();
});

var display = function() {
    var keys = Object.keys(localStorage),
        values = Object.values(localStorage);
    var outPut = keys.map(function(el, i) {
        var key = keys[i],
            value = values[i];
        return `<li class="bookmark">
                 <div>
                   <a href="${key}" target="_blank">${key}</a>
                   <p>${value}</p>
                 </div>
                 <button class="remove">X</button>
                </li>`;
    }).join('');
    ul.innerHTML = outPut;

    var remove = document.querySelectorAll('.remove');
    var list = document.querySelectorAll('.bookmark');
    remove.forEach(function(btn, i) {
        btn.addEventListener('click', function() {
            ul.removeChild(list[i]);
            localStorage.removeItem(keys[i]);
        });
    });
}