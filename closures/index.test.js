/*
Write a function pingPongTracker that accepts no arguments and returns an object with the
following methods:
- timeSpentPlaying() should return the total amount of time you have played pingpong.
- playOneGame() should increase the total time you played pingpong by 15 minutes
  and return a string "Game played"
- myLevel() should return your experience level based on how much time you have spent playing
  pingpong. These are the levels: a) Less than 30 minutes - "I need to improve my game"
                                  b) 30-100 minutes - "You need to improve your game"
                                  c) More than 100 minutes - "Wow, I have wasted a lot of time"
Example:
var myGame = pingPongTracker();
myGame.playOneGame();//should return "Game played";
myGame.playOneGame();//should return "Game played";
myGame.timeSpentPlaying(); //should return 30;
myGame.myLevel(); //should return "You need to improve your game"
*/

function pingPongTracker () {
  this.time = 0;
  return {
    playOneGame: () => {
      this.time += 15
      return "Game played"
    },
    timeSpentPlaying: () => this.time,
    myLevel: () => this.time < 30 ? "I need to improve my game" : this.time >= 30 && this.time < 100 ? "You need to improve your game" : "Wow, I have wasted a lot of time"
  }
}

describe("pingPongTracker", () => {
	it("test pingPongTracker", () => {
    const newGame = pingPongTracker();

		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.timeSpentPlaying()).toEqual(15)
		expect(newGame.myLevel()).toEqual("I need to improve my game")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.timeSpentPlaying()).toEqual(30)
		expect(newGame.myLevel()).toEqual("You need to improve your game")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.playOneGame()).toEqual("Game played")
		expect(newGame.timeSpentPlaying()).toEqual(105)
		expect(newGame.myLevel()).toEqual("Wow, I have wasted a lot of time")
	})
})
