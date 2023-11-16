---
layout: post
title: Embedded Pacman Game with BeagleBone
date: 2023-11-12 05:10 -0800
---
<img src="/assets/images/image.png" alt="Demo Picture" width="300" style="margin-right: 10px;"> <br>

<a href="https://clipchamp.com/watch/kbTIQFkowRK?utm_source=share&utm_medium=social&utm_campaign=watch">Demo Video</a>

**NOTE:** This is not the most up to date demo video. Project was more completed like having a Game Over screen and less flickering on our demo day.

## System Explanation
We developed a Pacman game on a Beaglebone using an external USB joystick for input, a 16x32 LED matrix panel for display, a headset connected to Zen Cape's audio jack for game music, and a web page to display the game map, guide, and scores.

### gameManager.c
This module initializes the 2D game map array and maintains its state using a static variable. During initialization, GameManager registers necessary callbacks to JoyCon.c, LedDisplay.c, and Ghost.c modules for accessing and manipulating the game map and character locations. It also tracks the current and high scores, and displays "WIN" or "GAME OVER" on the LED panel accordingly.

### ghost.c
This module, running on a separate thread, manages the locations, current direction, mode, ID, and names of the four ghosts using an array of Ghost structs. It moves the ghosts using the registered callback, with two modes: Frightened and Chase. At intersections, the ghosts make decisions based on their mode, the available pathways, and Pacman's location. In both modes, ghosts move based on various rules and their interaction with Pacman, leading to either Pacman earning points or the game ending.

### joycon.c
This module, running on a separate thread, continuously reads input from the Xbox controller. It uses the registered callback to move Pacman and handle collisions with other game elements like wall, dot, and ghost. It also provides controls for shutting down using the B button or restarting the game using the Y button.

### ledDisplay.c
This module, running on a separate thread, constantly accesses the game map from GameManager using its callback to display the game map on the LED panel.

### map.h
Contains map-related type-defined struct.

### shutdown.c
Lock other modules from cleaning up their resources and thread until its clean-up function is invoked by JoyCon.c module.

### types.h
Contains shared types.

### udp.c
Receives data in udp datagram and sends a corresponding reply to its source. For a game map, an int 1D array with a size of 512 bytes(16x32) and elements that ranges from 0-7 is sent. Since it is small enough, it is sent at once.

### utility.c
Contains miscellaneous functions like sleeping and configuring GPIO pins to be shared among various modules.

### wave_player.c
Plays various game music sounds through the audio jack in Zen Cape . It is not running on a separate thread. It supports music on game start, eating a ghost, eating super dot, and on the game over.

### zenCapeJoyStick.c
This module, running on a separate thread, reads GPIO inputs for the Zen Cape joystick and moves Pacman. This is only for development purposes as it frees us from the need for an Xbox controller. It is not shipped in our demo to free up computation resources.

### main.c
Initializes every necessary module and calls shutdown.c module to lock them from cleaning up. Once unlocked, clean up functions are called.

### Web Server
Display the game map, a guide showing the mapping of characters to colour, current score, and high score. The server sends out udp datagram every 100ms to udp.c module in order to update the game map and scores.

![Web Server](/assets/images/web-server.png)