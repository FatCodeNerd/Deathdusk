// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('basicaiots:stone_aiot')
    event.player.give('woodarmor:stone_helmet')
	event.player.give('woodarmor:stone_chestplate')
	event.player.give('woodarmor:stone_leggings')
	event.player.give('woodarmor:stone_boots')
	event.player.give('ftbquests:book')
	event.player.give('dehydration:leather_flask')
	event.player.give('30x yummy:cheese_sandwich')
  }
})