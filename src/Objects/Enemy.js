cursors = this.input.keyboard.createCursorKeys();
// Horizontal movement
if (cursors.left.isDown) {
  player.setVelocityX(-300);
} else if (cursors.right.isDown) {
  player.setVelocityX(300);
} else {
  player.setVelocityX(0);
}

// Vertical movement
if (cursors.up.isDown) {
  player.setVelocityY(-300);
} else if (cursors.down.isDown) {
  player.setVelocityY(300);
} else {
  player.setVelocityY(0);
}
