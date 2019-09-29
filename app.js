const items = JSON.parse(localStorage.getItem('thingstodo')) || [];

console.log(items);

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});


var app = new Vue({
    el: '#app',
    data: {
        thingsToDo: [
            { text: 'Learn Javascript'},
            { text: 'Learn Vue'},
            { text: 'Build Something Awesome'}
        ]
    },
    methods: {
        addItem: function (e) {
            e.preventDefault();
            var theValue = (document.querySelector('[name=item]')).value;

            if (theValue !== '') {
                this.thingsToDo.push({text: theValue});
                console.log(theValue);
                document.getElementById('myform').reset();
    
                localStorage.setItem('thingstodo', JSON.stringify(this.thingsToDo));
            } else {
                alert('please add an item');
                return;
            }
          
        },


        removeAll: function (e) {
            e.preventDefault();
            this.thingsToDo = [];
            localStorage.setItem('thingstodo', JSON.stringify(this.thingsToDo));
        }

    }
});
