 export function timer() {
    if (this.remainingTime <= 0) return;
  
    // Decrement by 20 ticks (1 second) instead of 1
    this.remainingTime -= 20;
  
    // Convert ticks to minutes and seconds
    const totalSeconds = Math.floor(this.remainingTime / 20);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    this.players.forEach((player) => {
      player.onScreenDisplay.setActionBar(
        `Level: ${this.currentLevelIndex + 1} | ` +
        `Time: ${minutes}m ${seconds.toString().padStart(2, '0')}s | ` + // Added leading zero
        `Lives: ${this.lives} | ` +
        `Score: ${this.score}/${this.currentLevel.goal}`
      );
    });
  
    if (this.remainingTime <= 0) {
      this.onLevelTimeout();
    }
  }
