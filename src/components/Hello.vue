
<template>
  <div class="hello">
  
<!-- Use in component(Vue.js2.X) && event callback -->
  <video-player :options="videoOptions" @state="playerStateChanged" ref="videoPlayer" :config="{ youtube: true }" id="vvv"></video-player>



<br clear="all"><br>
<!--
<input type="button" id="prev" name="" value="<<PREV" @click="prev" >
<input type="button" id="next" name="" value="NEXT>>" @click="next">
-->

<input type="button" id="rem-time" name="" value="Remaining time" @click="rem_time"><!-- logs remaining time-->

<input type="button" id="fs" name="" value="Error" @click="err">

<input type="button" id="lp" name="" value="Log Player" @click="chck"><!-- logs the current player -->


</div>
</template>

<script>


 export default { //different sources of video
    name: 'hello',
    data() {
      return {
        videoOptions: {
           source: [{
            type: "video/youtube",
            src: "https://www.youtube.com/watch?v=iD_MyDbP_ZE",
            label: "Video 1",
            res: 1
          },{
            type: "video/youtube",
            src: "https://www.youtube.com/watch?v=G4t6TqG5LM8",
            label: "Video 2",
            res: 2
          },{
            type: "video/youtube",
            src: "https://www.youtube.com/watch?v=PdCylcA_c40",
            label: "Video 3",
            res: 3
          }],
          techOrder: ["youtube"],
          autoplay: true,
          controls: true,
          ytcontrols:false,
          playsinline:true,
          controlBar: true,
          start: 10, // This thing isn't working 
          customEventName: 'state'
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: 
    {
      playerStateChanged(playerCurrentState) {
  //      console.log(playerCurrentState)
      //  console.log(JSON.stringify(playerCurrentState, null, 8))

//        console.log(this.player)

var time = parseInt(playerCurrentState["currentTime"])// time is stored in seconds
        

        console.log(time)// logs current time

        if(playerCurrentState["loadeddata"]=="true")
        {
          console.log("Video is loaded") //logged when video is loaded
        }

        if(playerCurrentState["play"])
        {
          console.log("Video is played") //logged when video is plaued
        }

        if(playerCurrentState["pause"])
        {
          console.log("Video is paused") //logged when video is passed
        }


        if(this.player.controlBar.progressControl.seekBar.LoadProgressBar)
        {
          console.log("Video is seeked") //logged when video is seeked

          this.player.updateSrc()
        }

        if(this.player.controlBar.FullscreenToggle)
        {
          console.log("Full screen toggle") //logged when video is toggled btwn full and small screen
        }


        if(playerCurrentState["resolutionchange"])
        {
          console.log("Video's source is being changed") // when video source is being changed
          this.player.videoOptions.start = time;
        }
      },

      rem_time(){
        console.log(this.player.controlBar.remainingTimeDisplay.formattedTime_)
      },

      crnt_src()
      {
        console.log(this.player.controlBar)  // logs current video player to the console
      },

      chck()
      {
        console.log(this.player)  // logs current video player to the console
      },


      err()
      {
      console.log(this.player.ErrorDisplay)
      }




    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
