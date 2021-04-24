var v = new Vue({
  el:"#task",
  data:{
      name:"",
      task:"",
      time:"2021-01-01T00:00",
      c:0,
      warn:0,
      check:false,
      list:[],
      dateNow:new Date(),
      //disign
      fontsize:20,
      fontList:['Zen Dots' ,
                'Fantasy','Cursive', 'Serif', 'Sans-serif', 'Robot', 'Monospace'],
      back:["back.jpg","back4.jpg","back5.jpg", "back3.jpg", "back1.jpg", "back6.jpg"]     ,
      Color:["rgba(18, 82, 179, 0.568)", "rgba(20, 68, 68, 0.822)","rgba(43, 20, 25, 0.479)"
      ,"rgba(29, 10, 19, 0.22)", "rgba(20, 13, 114, 0.63)","rgba(220, 13, 114, 0.63)",
      "rgba(210, 213, 214, 0.63)","rgba(20, 113, 114, 0.63)","rgba(120, 113, 114, 0.63)","rgba(2, 1, 14, 0.73)"] ,
      Fcolor:"",    
    },
  methods:{
   
      printTask:function(){
        if(this.checkInput()==false)
        return;
        else
        {
        this.check=!this.check;
            this.c=1;
            this.list.push({
            name:this.name,
            task:this.task,
            time:this.time
        });
        
    }
      },
      checkInput:function(){
              if(this.name=="" || this.task=="" || this.time==""){
                  return false
              }
         
          
      }
      ,
      changeFont:function(font){
        document.getElementsByClassName('font')[0].style.fontFamily=font+'';
      },
      changeBackC:function(C){
        document.body.style.backgroundSize=C+'';
      },
      changeBack:function(back){
        document.body.style.background=`url(${back}) fixed center`+'';
        this.changeBackC('cover');
      },
      changeBackColor:function(color){
        for (let i = 0; i < 10; i++) {
        document.getElementsByClassName('color')[i].style.backgroundColor=color+'';
        }
       
      },
      
  }
});