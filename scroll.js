window.onload = function(){
        var canvas = document.getElementById("paper"),
            c = canvas.getContext("2d");
        
        // Scrolling
        
        var backgroundPosXProgress = 0;
        var DEFAULT_PIPE_HEIGHT = canvas.height/4,
            DEFAULT_PIPE_WIDTH = canvas.width/8,
            DEFAULT_PIPE_FLUCT = canvas.height/6;
        var pipe1Height = DEFAULT_PIPE_HEIGHT,
            pipe2Height = DEFAULT_PIPE_HEIGHT;
        var pipe1X = 0,
            pipe2X = canvas.width/2;
        
        setInterval(function(){
          
          // Check to see if pipe has left screen
          
          if(pipe1X + DEFAULT_PIPE_WIDTH <= 0){
            pipe1X = canvas.width;
            pipe1Height = getRandPipeHeight();
          }
          
          if(pipe2X + DEFAULT_PIPE_WIDTH <= 0){
            pipe2X = canvas.width;
            pipe2Height = getRandPipeHeight();
          }
          
          // Paint background at proper position
          
          // Wipe
          c.fillStyle = "black";
          c.fillRect(0, 0, canvas.width, canvas.height);
          
          // Add Elements
          
          // Pipe 1
          c.fillStyle = "green";
          pipe1X --;
          c.fillRect(pipe1X, 0, 50, pipe1Height);
          
          // Pipe 2
          c.fillStyle = "green";
          pipe2X --;
          c.fillRect(pipe2X, canvas.height - pipe2Height, 50, pipe2Height);
          
          // Add Static X Element
          c.fillStyle = "red";
          c.fillRect(canvas.width/10, canvas.height/2, 40, 40);
          
        }, 30);
        
        function getRandPipeHeight(){
          var pipeFluct = Math.floor((Math.random()*3)+1);
          return DEFAULT_PIPE_HEIGHT + pipeFluct * DEFAULT_PIPE_FLUCT;
        }