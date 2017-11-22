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
var vm2 = new Vue({
  el: '#root-3',

  data: {
    names: ['Kate', 'Ann', 'Rita', 'Janett']
  },

  mounted() {
    document.querySelector('#root-2-btn').addEventListener('click', () => {
      let newName = document.querySelector('#root-2-input');
      vm2.names.push(newName.value);
      newName.value = '';
    });
  }
});

vm2.names.push('Susan');

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 03 — Lists */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
