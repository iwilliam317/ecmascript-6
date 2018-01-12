var games = [
	{name: 'Horizon Zero Dawn' , category: 'action/rpg'},
	{name: 'Need for Speed: Payback' , category: 'race'},
	{name: 'Assassins Creed' , category: 'action/rpg'},
	{name: 'Dying Light' , category: 'action/rpg'}
]

var ActionRpgGames = [];
ActionRpgGames = games.every(function(game){
	return game.category === 'action/rpg';
});

console.log(ActionRpgGames)

