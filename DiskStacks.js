//class:       DiskStacks
//Description: Creates the 3 stacks for the popular game of "Towers of Hanoi" with the
//             the given parameter of the number of disks
//Date:        July 17th, 2017
//Author:      Josue Rosales
/* global $ DiskStacksView.js DiskStacks.js */


class DiskStacks
{
  constructor()//constructor
  {
    this.numDisks;
    this.posting = [[], [], [] ] // the 3 stacks of disks
    this.validity=true;


  }

    //Method Name : initialize
    //input       : number of disks
    //ouput       : none
  initialize(numDisks)
  {
    this.numDisks = numDisks;
    for(var i =0; i<numDisks; i++)
    {
      this.posting[0].push(numDisks-i);
    }
  }

  //Method Name : move
  //input       : origin, destination
  //ouput       : none
  move (origin, destination)
  {
    if(this.checkValidMove(origin, destination)===true)
    {
      this.posting[destination-1].push(this.posting[origin-1][this.posting[origin-1].length-1]);
      this.posting[origin-1].pop();
      this.validity=true;
    }
    else
    {
      // alert('Move is not possible, either there are no disks at the origin stack, or the size of disk you are trying to put on top is greater than the bottom');
      this.validity=false;
    }
  }

  //Method Name : checkValidMove
  //input       : origin, destination
  //ouput       : returns true if the move is valid
  checkValidMove(origin, destination)
  {

    if(this.checkEmptyStack(origin))
    {
      return false;
    }
    else if(this.posting[origin-1][this.posting[origin-1].length-1] > this.posting[destination-1][this.posting[destination-1].length-1])//checks for big disks that are on top of smaller disks
    {
      console.log(this.posting[origin-1][this.posting[origin-1].length-1]);
      console.log(this.posting[destination-1][this.posting[destination-1].length-1]);
      return false;
    }
    else
    {
      return true;
    }
  }//end of checkValidMove Method



  //Method Name : checkEmptyStack
  //input       : number of stack from 1-3
  //ouput       : returns true if the specific stack is empty.
  checkEmptyStack(numstack)
  {
    return (this.posting[numstack-1].length===0 || this.posting[numstack-1].length===null)
  }


  //Method Name : CheckWin
  //input       : none
  //ouput       : returns true if all disks are in the most left stack
  checkWin()
  {
    return (this.posting[2].length === this.numDisks)
  }

  //Method Name : emptyStack
  //input       : none
  //ouput       : none
  emptyStack()
  {
    this.posting = [[], [], [] ]
  }



}//end DiskStacks class
