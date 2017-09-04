(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var saveBtn = document.querySelector('.save');
var ul = document.querySelector('.bookmarks');
var form = document.querySelector('form');
var array = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var val = this.link.value;
    var text = this.notes.value;
    localStorage.setItem(val, text);
    array.push(val);
    array.push(text);
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
},{}]},{},[1]);
