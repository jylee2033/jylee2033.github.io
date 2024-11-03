---
layout: post
title: Embedded Pacman Game with BeagleBone
date: 2023-04-12 05:10 -0800
categories: [Embedded Systems]
tags: [Embedded Systems, Pacman, Beaglebone]
---
![Demo](/assets/images/embedded/demo.png)

## Motivation
We started this project to apply what we learned in Embedded Systems using Pacman, a game that we enjoyed playing when we were young.

## System Explanation
We developed a Pacman game on a Beaglebone using an external USB joystick for input, a 16x32 LED matrix panel for display, a headset connected to Zen Cape's audio jack for game music, and a web page to display the game map, guide, and scores.

## Contribution
I implemented the following features for our Pacman game:
- play the game music sound through the Zen Cape audio jack, using a headset connected to it
- display the game map on a 16x32 LED matrix panel, using an external USB joystick for input
- develop the Pacman game logic, including the movement of the Pacman and the ghosts, the scoring system, and the game over condition

## Code Explanation

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

## Web Server
Display the game map, a guide showing the mapping of characters to colour, current score, and high score. The server sends out udp datagram every 100ms to udp.c module in order to update the game map and scores.

![Web Server](/assets/images/embedded/web-server.png)

## Extra Hardware Used
1.	Xbox Controller:
We installed libusb on the host to compile the driver code for the controller on the target. libusb is a C library that our driver code can use to provide access to USB devices on the target. To cross-compile for the target, we installed the armhf binary of libusb.

2.	LED 16x32 Matrix Panel:
Referred past student’s guide to connecting the display to the BeagleBone’s pins using jumper wires.

## Alternative BeagleBone Demo
<div style="text-align: center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/_qAAcO7V7kE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br>
  <sub>The demo video for this project has expired, so I brought in a video from another project using a BeagleBone.</sub>
</div>