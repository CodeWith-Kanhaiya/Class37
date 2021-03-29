class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');

  }
  hide(){
      this.input.hide();//DOM 
      this.button.hide(); 
      this.greeting.hide();
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0); 
       
    
    this.input.position(130, 160);
    this.button.position(250, 200);

      // after player enters name and presses on PLAY - button is pressed
        this.button.mousePressed(()=>{
        // hide the name and button
        this.input.hide();
        this.button.hide();
        // register that player  - add the players name to database , increase the playercount
        player.name = this.input.value();//take the name entered from the input
        playerCount += 1;
        player.updateCount(playerCount);

        this.greeting.html("Hello" + player.name);
        this.greeting.position(250,200);

      })

    
    };

  }
