<template>
  <div id="app">
      <top></top>
      <div id="test">
        <h3>我是h3呀。。。。</h3>
        <p>
          
        </p>
      </div>
  </div>
</template>

<script>
import Top from './components/Top';
import Rank from './components/Rank';
//import axios from 'axios';
import CGI  from './lib/cgi';

export default {
  name: 'app',
  components: {
    Top,
    Rank
  },
  data(){
    return {
      CGI:'http://api.live.nagezan.net',
      remainTime: {
         time: 0,
         h: '0',
         m: '0',
         s: '0'
      },
    }
  },
  created(){
    CGI.init();
    this.getData();
  },
  methods:{
    getData(){
        var params={
          data:{
             campaign:"campaign20170125"
          }
        };
        CGI.post(this.CGI+'/cgi-bin/get_top_list',params,(resp)=>{
          console.log(resp);
        },'text/plain');
    },
    cutDown(leftTime){
      clearInterval(this.timer);
      if( this.status ===0 ){
       this.remainTime.time = parseInt((leftTime) / 1000);
           CGI.remainInterval(this.remainTime);
           this.timer = setInterval(() =>{
            CGI.remainInterval(this.remainTime);
         }, 1000)
      } 
   
    }
 },
  computed:{

  }
}
</script>

<style>
  body,html,p,h3{
    margin:0;
    padding:0;
  }
  body{
    background:#fff;
    max-width: 520px;
    margin:0 auto;
  }
  img {
    width:100%;
    vertical-align: top;
  }
  a{
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
    background-color: transparent;
    display: inline-block;
  }
  .one-line{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  [v-cloak]{
    display: none;
  }
  .refresh {
      position: fixed;
      width: 2.1rem;
      right: 0;
      top: 15rem;
      z-index: 5;
  }
  #loading {
      position: fixed;
      top: 10rem;
      left: 50%;
      margin-left: -35px;
      width: 70px;
      z-index: 9999;
  }
  #loading img:nth-child(2){
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      animation: loading 1s linear infinite;
  }

  @keyframes loading {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(360deg);
      }
  }
</style>
<style lang="scss">
   @import './lib/function';
    #test {
      width:100%;
      height:300px;
      color:red;
      font-size: rem(20);
    }
    #test  h3{
      font-size: rem(48,48);
    }
      
</style>
