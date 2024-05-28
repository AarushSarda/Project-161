AFRAME.registerComponent("ball",{
    init: function(){
    this.shootBowlingBall()
},
  shootBowlingBall: function(){
    window.addEventListener("keydown",(e)=>{
        if (e.key==="z"){
        var ball = document.createElement("a-entity")
        ball.setAttribute("geometry",{
            primitive:"sphere",
            radius:0.1,
       })
       ball.setAttribute("material",{
        color:"orange",
       })
       ball.setAttribute("dynamic-body",{})

       var cam = document.querySelector("#camera")
       var camera = document.querySelector("#camera").object3D

       var direction = new THREE.Vector3()

       camera.getWorldDirection(direction)
       pos = cam.getAttribute("position")

       ball.setAttribute("position",pos)
       ball.setAttribute("velocity",direction.multiplyScalar(-10))

       var scene = document.querySelector("#scene")
       scene.appendChild(ball)}
    })
  }
})  