# SemaTor 1.1.561 — Every game shows its picture with OpenGL, Vulkan by default; smooth motion for Strider, Gods and Toki; settings reset

Changes since 1.1.559, the last public release. Unless noted, each enhancement is an option that is off until chosen; it is drawn by the game's own code and leaves the game exactly as it was when off.

**If you saw sound but no picture:** that was the OpenGL backend, the default on Windows until now. It is fixed, and this version moves everyone to Vulkan once (OpenGL remains a choice).

### 1.1.561

- **No picture with OpenGL, fixed:** with the OpenGL backend - the default on Windows and Linux until now - games played their sound but showed a black picture. They show it again. Vulkan is now the default everywhere, and the first start of this version moves every existing installation to Vulkan once; choosing OpenGL afterwards sticks, and SemaTor still falls back to OpenGL by itself when Vulkan cannot start.
- **Choose the graphics backend and reset to factory defaults:** SemaOS (Settings > System) and the library's Graphics & reset page offer OpenGL or Vulkan (a restart switches), and two resets - game settings, or everything including the look - each confirmed on the page, with the old files kept in a dated backup folder. Your games, library folders, save states, play times, favourites, notes, covers and the Jukebox are never touched; a game-settings reset keeps the backend you chose.
- **F12 no longer crashes** on the Performance HUD row; Vulkan now dims the game behind F11/F12 and draws SemaOS's GEM pointer, as OpenGL did.
- **Smooth motion** for Strider (motion every blank instead of every fifth), Gods and Toki, alongside 1.1.560's games.
- **Widescreen to 32:9:** FIT THE WINDOW for Out Run and Kick Off 2. In Turrican, Toki, Batman and The New Zealand Story the wide view now stops at a level's edge - the original picture moves aside instead of the view showing past the level.
- **Xenon:** INFINITE LIVES and INVINCIBLE; it now runs on the accurate TOS machine.
- **Screenshots** are saved at the ST's real resolution (320x200 for low resolution) by default; F11 > Save / Load > Screenshot size offers "As shown" with filters.
- **TOS 1.62:** SemaTor now reports itself as TOS 1.62 and keeps the running program and the keyboard's shift state where TOS does, so programs that check the TOS version take the right path.
- **Front ends:** clearer library status lines and labels, filter lists that keep keyboard focus, no doubled library folders, and settings, favourites, play times and folder lists that are never replaced when they cannot be read; the library's old "Reset window layout" button, which actually reset every setting, is gone.
- **Stability:** wide pictures up to 32:9 in every widescreen game are held safely, and a number of rare crashes and races found by an audit are fixed.
- **Profiles:** Captive, Damocles, Defender of the Crown, Hunter, Last Ninja 2, North & South, Lombard RAC Rally, Nebulus, Oids, Mega lo Mania and Falcon (F16.IMG) now run on the accurate TOS machine with every option checked.
- **Saves:** save states from earlier versions still load.

### 1.1.560

- **Smooth motion:** a new SMOOTH MOTION option draws pictures in between the game's own frames - scenery and characters placed part of the way to the next frame, drawn by the game's own drawing code - for The New Zealand Story, Batman - The Movie (platform levels, the Batmobile and the Batwing), Xenon 2 and Sensible Soccer. Anything that appears, vanishes or jumps is shown on the game's own frames. Lotus gets real extra frames: 50 frames a second for one player and in two-player races.
- **Widescreen to 32:9:** FIT THE WINDOW fills the window's shape, up to 32:9, for Batman (now including the Batmobile and the Batwing), Lotus, The New Zealand Story, Sensible Soccer, and new 16:9 / 21:9 / FIT views for Toki and Turrican. The side strips now always belong to the frame on screen (they could be a frame ahead), and Lotus and Sensible Soccer can put their HUD at the screen edges.
- **Separate music and effects:** Toki, Turrican, Batman and The New Zealand Story play their music and sound effects at the same time without one cutting into the other; Batman no longer makes you choose between music and effects.
- **Speed and cheats:** steady speed, FAST and ST SPEED EXACT options for Lotus, The New Zealand Story (FAST 25 fps), Batman (including the vehicles) and Sensible Soccer (a 2x boost by default); infinite energy and time for Batman; cheats for Toki and Turrican.
- **Lotus presentation:** RACE VIEW ONLY (one player, the race alone) and GARAGE PICTURE in a corner.
- **Filters:** every SemaOS games window and folder, and the library, can be filtered - Cheats, Enhanced, Widescreen, publisher, year, genre, format, played, favourites - quickly even with 14,000 games. A Cheats icon on the desktop in both styles; the library's side panel shows saves and notes.
- **Stability:** a crash now leaves a report in support.log (kept as support-crash.log at the next start) instead of closing silently. Every other reason a game session ends is written down, and SemaTor returns to the library instead of closing. Background work (covers, scans, music) pauses while a game starts and runs. The library and SemaOS retry instead of closing or blocking when the window, the graphics device or a slow network drive fails, and brief graphics-device losses are retried.
- **Disks that now start or get further:** a .zip opened directly (command line, Open with, drag and drop); program names with a colon on Automation and other menu disks; Automation 169 (Fusion); Spectrum 512 (and its keyboard); Atomic Disk 1's reboot; The New Zealand Story's one-disk crack; the Strider half of Black Tiger & Strider; GEM programs installed on the desktop start with their document; 3D Construction Kit II and other Setscreen users. After a disk's AUTO programs, SemaTor now does what TOS's desktop does: a folder program starts only when DESKTOP.INF names it, or when it is the disk's only program after helper-only AUTO programs.
- **Profiles:** about 30 older profiles - Xenon 2, Speedball 1 and 2, Rainbow Islands, Lemmings, Gods, Turrican II, Dungeon Master, Chaos Strikes Back, Kick Off 2, Populous, IK+, Elite, Prince of Persia, Monkey Island, Out Run, Stunt Car Racer, The Chaos Engine - now run on the accurate TOS machine with every option checked, and more disk editions of profiled games get their profile (the French and German Kick Off 2 cracks, Dungeon Master v1.0, the Turrican demo with its own identity).
- **Saves:** save states from earlier versions still load.

You must supply your own supported game disks. No game artwork or music is bundled.
