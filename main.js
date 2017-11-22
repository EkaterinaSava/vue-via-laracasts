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
