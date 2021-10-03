const app = new Vue ({
  el:"#app",
  data:{
    change:"??",
    value:"",
    isActive:false
  },
  methods: {
    calc:function(){
      this.change = Math.floor((this.value * 0.01) * (this.value * 0.01) * 22)
      
    },
    changeState:function(){
      this.isActive = !this.isActive
    }
  }
})