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
/* Step 08 — Components Within Components */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('task-list', {
  template: `
    <ul class="demo__ul">
      <task v-for="task in tasks" :key="task.id">{{ task.name }}</task>
    </ul>
  `,

  data() {
    return {
      tasks: [
        { name: 'Go to the store', completed: true },
        { name: 'Finish screencast', completed: false },
        { name: 'Make donation', completed: false },
        { name: 'Clear inbox', completed: true },
        { name: 'Make dinner', completed: false },
        { name: 'Learn Vue', completed: false }
      ]
    }
  }
});

var vm8 = new Vue({
  el: '#root-8'
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 09 — Practical Component Exercise #1: Message */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('message', {
  props: ['title', 'body'],

  data() {
    return {
      isVisible: true
    };
  },

  template: `
    <article class="message" v-show="isVisible">
      <div class="message-header">
        <p> {{ title }} </p>
        <button class="delete" aria-label="delete" @click="isVisible = false"></button>
      </div>
      <div class="message-body"> {{ body }} </div>
    </article>
  `
})

var vm9 = new Vue({
  el: '#root-9'
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 10 — Practical Component Exercise #2: Modal */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <slot></slot>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
  `
});

var vm10 = new Vue({
  el: '#root-10',

  data: {
    showModal: false
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 11 — Practical Component Exercise #3: Tabs */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('tabs', {
  template: `
    <div class="tabs__wrapper">
      <div class="tabs">
        <ul>
          <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">
            <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
          </li>
        </ul>
      </div>

      <div class="tabs__details">
        <slot></slot>
      </div>
    </div>
  `,

  data() {
    return {
      tabs: []
    };
  },

  // mounted() {
  //   console.log(this.$children);
  // },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.name == selectedTab.name);
      });
    }
  }
});

Vue.component('tab', {
  template: `
    <div class="" v-show="isActive"><slot></slot></div>
  `,

  props: {
    name: { required: true },
    selected: { default: false }
  },

  data() {
    return {
      isActive: false
    }
  },

  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ /g, '-');
    }
  },

  mounted() {
    this.isActive = this.selected;
  }
})

var vm11 = new Vue({
  el: '#root-11',
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 12 — Component Communication Example #1: Custom Events */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('coupon', {
  template: '<input class="demo__input" type="text" @keyup.enter="onCouponApplied" placeholder="Your code">',

  methods: {
    onCouponApplied() {
      this.$emit('applied');
    }
  }
});

var vm12 = new Vue({
  el: '#root-12',

  data: {
    couponApplied: false
  },

  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    }
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 13 — Component Communication Example #2: Event Dispatcher */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
window.Event = new class {
  constructor() {
    this.vue = new Vue();
  }

  fire(event, data = null) {
    this.vue.$emit(event, data);
  }

  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

Vue.component('promo-code', {
  template: '<input class="demo__input" type="text" @keyup.enter="onCouponAppliedPromo" placeholder="Promo-code">',

  methods: {
    onCouponAppliedPromo() {
      Event.fire('appliedPromo');
    }
  }
});

// var vm13 = new Vue({
//   el: '#root-13',
//
//   data: {
//     couponAppliedPromo: false
//   },
//
//   created() {
//     Event.listen('appliedPromo', () => alert('Hey'));
//   }
// });

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 14 — Named Slots in a Nutshell */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('full-modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="header-content"></slot>
          </p>
          <button class="delete" aria-label="close" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">
          <slot name="body-content"></slot>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">
            <slot name="footer-first-button"></slot>
          </button>
          <button class="button" aria-label="close" @click="$emit('close')">
            <slot name="footer-second-button"></slot>
          </button>
        </footer>
      </div>
    </div>
  `
});

var vm14 = new Vue({
  el: '#root-14',

  data: {
    showModal: false
  }
});

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/* Step 15 — Single-Use Components and Inline Templates */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
Vue.component('', {
  data() {
    return {
      completionRate: 0
    }
  }
})

/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */


/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
/*  */
/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */
