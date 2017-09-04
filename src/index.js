var saveBtn = document.querySelector('.save');
var ul = document.querySelector('.bookmarks');
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var val = this.link.value;
    var text = this.notes.value;
    localStorage.setItem(val, text);
    // localStorage.setItem('text', text);
    this.reset();
    display();
});

var display = function() {
    // var link = localStorage.link;
    // var note = localStorage.getItem('text');
    var keys = Object.keys(localStorage);
    var values = Object.values(localStorage);
    var outPut = keys.map(function(el, i) {
        var key = keys[i];
        var value = values[i];
        return `<li class="bookmark">
                      <div>
                        <a href="${key}" target='_blank'>${key}</a>
                        <p>${value}</p>
                      </div>
                      <button class="remove">X</button>
                    </li> `;
    }).join('');
    ul.innerHTML = outPut;

    document.querySelectorAll('.remove').forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.parentNode.parentNode.textContent = '';
        });
    });
}