/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 01 — Basic Data Binding */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var vm1 = new Vue({
  el: '#root-1',

  data: {
    message: "Hello, world!"
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 03 — Lists */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var vm3 = new Vue({
  el: '#root-3',

  data: {
    names: ['Kate', 'Ann', 'Rita', 'Janett']
  },

  mounted() {
    document.querySelector('#root-3-btn').addEventListener('click', () => {
      let newName = document.querySelector('#root-3-input');
      vm2.names.push(newName.value);
      newName.value = '';
    });
  }
});

vm3.names.push('Susan');

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 04 — Vue Event Listeners */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var vm4 = new Vue({
  el: '#root-4',

  data: {
    newName: '',
    names: ['Karen', 'Mary', 'Angela', 'Janna']
  },

  methods: {
    addName: function() {
      this.names.push(this.newName);
      this.newName = '';
    }
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* 05 — Attribute and Class Binding */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var vm5 = new Vue({
  el: '#root-5',

  data: {
    title: 'Now the title is beingset through JavaScript',
    isLoading: false
  },

  methods: {
    toggleClass() {
      this.isLoading = true;
    }
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 06 — The Need for Computed Properties */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
var vm6part1 = new Vue({
  el: '#root-6-1',

  data: {
    message: 'Hello, Vue!'
  },

  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  }
});

var vm6part2 = new Vue({
  el: '#root-6-2',

  data: {
    tasks: [
      { description: 'Go to the store', completed: true },
      { description: 'Finish screencast', completed: false },
      { description: 'Make donation', completed: false },
      { description: 'Clear inbox', completed: true },
      { description: 'Make dinner', completed: false },
      { description: 'Learn Vue', completed: false }
    ]
  },

  computed: {
    incompleteTasks() {
      return this.tasks.filter( task => !task.completed );
    }
  }

});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 07 — Components 101 */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('task', {
  template: '<li><slot></slot></li>'
});

var vm7 = new Vue({
  el: '#root-7'
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* 05 — Attribute and Class Binding */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */



/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* 05 — Attribute and Class Binding */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */



/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* 05 — Attribute and Class Binding */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
