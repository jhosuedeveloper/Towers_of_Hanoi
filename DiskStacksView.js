//class:       DiskStacksView
//Description: renders with the DiskStacks class model to render into the DOM
//Date:        July 17th, 2017
//Author:      Josue Rosales
/* global $ DiskStacksView.js DiskStacks.js */

class DiskStacksView
{
  constructor (stacksModel)
  {
    this.stacksModel = stacksModel;
    this.startTime=0;
    this.score=0;

  }//end of constructor


  //Method Name : init
  //input       : none
  //ouput       : none
  //description: initializes everything, and kicks the game to start
  init()
  {

    //inputs
    this.buttonGo = $('button');
    this.inputText = $('#inputtxt');

    //ouputs
    this.stack1 = $('.stack1');
    this.stack2 = $('.stack2');
    this.stack3 = $('.stack3');
    this.movesHistory = [];


    //event Listener for button
    this.listens();

    //action when button is pressed


  }//end of init

  //Method Name : listens
  //input       : none
  //ouput       : none
  //description : It is listening to the button, inputtext and  clicks on the stacks
  listens()
  {
    this.buttonGo.on('click', this.startModel.bind(this) );
    this.stack1.on('click', this.stk1.bind(this) );
    this.stack2.on('click', this.stk2.bind(this) );
    this.stack3.on('click', this.stk3.bind(this) );

  }


  //Method Name : skt1
  //input       : none
  //ouput       : none
  //description : prints first stack into the DOM
  stk1()
  {
    this.movesHistory.push(1);
    if(this.movesHistory.length%2==0 && this.movesHistory.length !== undefined && this.movesHistory.length !== null )
    {
      this.stacksModel.move(this.movesHistory[this.movesHistory.length-2], this.movesHistory[this.movesHistory.length-1]);
      this.continueGame();

    }
  }

  //Method Name : skt2
  //input       : none
  //ouput       : none
  //description : prints second stack into the DOM
  stk2()
  {
    this.movesHistory.push(2);
    if(this.movesHistory.length%2==0 && this.movesHistory.length !== undefined && this.movesHistory.length !== null )
    {
      this.stacksModel.move(this.movesHistory[this.movesHistory.length-2], this.movesHistory[this.movesHistory.length-1]);
      this.continueGame();
    }
  }


  //Method Name : skt3
  //input       : none
  //ouput       : none
  //description : prints third stack into the DOM
  stk3()
  {
    this.movesHistory.push(3);
    if(this.movesHistory.length%2==0 && this.movesHistory.length !== undefined && this.movesHistory.length !== null )
    {
      // var origin =this.movesHistory[this.movesHistory.length-2]
      // var destiny =
      this.stacksModel.move(this.movesHistory[this.movesHistory.length-2], this.movesHistory[this.movesHistory.length-1]);
      this.continueGame();
    }
  }


  //Method Name : startModel
  //input       : none
  //ouput       : none
  //description : initializes the field of stacks to the specipied user input
  startModel()
  {
    this.stacksModel.emptyStack();
    this.stack1.empty();
    this.stack2.empty();
    this.stack3.empty();
    this.movesHistory = [];
    this.stacksModel.validity=true;


    this.startTime =  new Date();
    var num = parseInt(this.inputText.val());
    this.stacksModel.initialize(num);
    this.render();
  }

  //Method Name : continueGame
  //input       : none
  //ouput       : none
  //description : this is a helper method for printing the stacks inthe DOM, after teh first move.
  continueGame()
  {

    this.stack1.empty();
    this.stack2.empty();
    this.stack3.empty();
    this.render();
  }



  //Method Name : render
  //input       : none
  //ouput       : none
  //description : displays stacks into the DOM
  render()
  {
    this.renderStack1();
    this.renderStack2();
    this.renderStack3();
    if(this.stacksModel.checkWin() === true )
    {
      if(this.movesHistory.length%2===0)
      if(this.movesHistory[this.movesHistory.length-2]!==this.movesHistory[this.movesHistory.length-1])
      {
       $('.winx').remove();
      $('#inputinfo').append(`<div class="winx">COMPLETE</div>`)
      this.score = new Date() - this.startTime;
      $('.scorex').remove();
     $('#inputinfo').append(`<div class="scorex">SCORE: ${this.score}</div>`)
      sound.play();
      }
    }
    else
    {
     $('.winx').remove();
     $('.scorex').remove();
    }


    if( this.stacksModel.validity===false && this.stacksModel.checkWin()==false)
    {
      $('.loosex').remove();
      $('#inputinfo').append(`<div class="loosex">INVALID MOVE</div>`)
    }
    else
    {
     $('.loosex').remove();
    }




  }


  //Method Name : renderStack1
  //input       : none
  //ouput       : none
  //description : prints first stack into the DOM
  renderStack1()
  {

    //  the following is an example of how it could have been done differently
    //    this.stacksModel.posting[0].forEach(function (info){
    //   this.stack1.prepend(`<div class="stk${info}"></div>`)
    // }.bind(this))

    this.stacksModel.posting[0].forEach((info) => {
      this.stack1.append(`<div class="stk${info}"></div>`)
    })

  }//renderStack1


  //Method Name : renderStack2
  //input       : none
  //ouput       : none
  //description : prints second stack into the DOM
  renderStack2()
  {
    this.stacksModel.posting[1].forEach((info) => {
      this.stack2.append(`<div class="stk${info}"></div>`)
    })

  }//renderStack2



  //Method Name : renderStack3
  //input       : none
  //ouput       : none
  //description : prints third stack into the DOM
  renderStack3()
  {
    this.stacksModel.posting[2].forEach((info) => {
      this.stack3.append(`<div class="stk${info}"></div>`)
    })

  }//renderStack3


}//end of class DiskStacksView
