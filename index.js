var app = new Vue({
    el: '#app',
    data: {
        seen: true
    }
});


app.seen = true;



// ------------------------


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});




// ------------------------



var app3 = new Vue({
    el: '#app-3',
    data: {
        todos: [
            { text: 'Learn Javascript'},
            { text: 'Learn Vue'},
            { text: 'Build Something Awesome'}
        ]
    }
});


app3.todos.push({text: 'New Item'});


// ------------------------



var app4 = new Vue({
    el: '#app-4',
    data: {
        message: 'Hello Vue!'
    }
});



// ------------------------



Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
});
