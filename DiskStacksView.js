/* glabal $ script.js */
class DiskStacksView {
  constructor (stacksModel) {
    this.stacksModel = stacksModel;
  }//end of constructor

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


  listens()
  {
    this.buttonGo.on('click', this.startModel.bind(this) );
    this.stack1.on('click', this.stk1.bind(this) );
    this.stack2.on('click', this.stk2.bind(this) );
    this.stack3.on('click', this.stk3.bind(this) );

  }



stk1()
{
  this.movesHistory.push(1);
  if(this.movesHistory.length%2==0 && this.movesHistory.length !== undefined && this.movesHistory.length !== null )
  {
  this.stacksModel.move(this.movesHistory[this.movesHistory.length-2], this.movesHistory[this.movesHistory.length-1]);
  this.continueGame();
  }
}
stk2()
{
  this.movesHistory.push(2);
  if(this.movesHistory.length%2==0 && this.movesHistory.length !== undefined && this.movesHistory.length !== null )
  {
  this.stacksModel.move(this.movesHistory[this.movesHistory.length-2], this.movesHistory[this.movesHistory.length-1]);
  this.continueGame();
  }
}
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



  startModel()
  {
    this.stacksModel.emptyStack();
    this.stack1.empty();
    this.stack2.empty();
    this.stack3.empty();
    this.movesHistory = [];


    var num = parseInt(this.inputText.val());
    this.stacksModel.initialize(num);
    this.render();
  }


  continueGame()
  {

    this.stack1.empty();
    this.stack2.empty();
    this.stack3.empty();
    this.render();
  }




  render()
  {
    this.renderStack1();
    this.renderStack2();
    this.renderStack3();

  }



  renderStack1()
  {

    //  the following is an example of how it could have been done differently
    //    this.stacksModel.posting[0].forEach(function (info){
    //   this.stack1.prepend(`<div class="stk${info}"></div>`)
    // }.bind(this))

    this.stacksModel.posting[0].forEach((info) => {
      this.stack1.prepend(`<div class="stk${info}"></div>`)
    })

  }//renderStack1



  renderStack2()
  {
    this.stacksModel.posting[1].forEach((info) => {
      this.stack2.prepend(`<div class="stk${info}"></div>`)
    })

  }//renderStack2

  renderStack3()
  {
    this.stacksModel.posting[2].forEach((info) => {
      this.stack3.prepend(`<div class="stk${info}"></div>`)
    })

  }//renderStack2


}//end of class DiskStacksView




















$(document).ready(function () {
  const stackModel = new DiskStacks();
  const stackView = new DiskStacksView(stackModel);
  stackView.init();
})
