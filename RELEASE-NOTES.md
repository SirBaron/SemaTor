# SemaTor 1.1.603 — SemaBench, expanded Jukebox, farther horizons and better controls

### Music and the shared desktop

- Mega Drive Jukebox: adds a generated catalogue for 275 supported cartridges with 4,100 track entries, alongside the existing hand-checked soundtracks. Music is found on supported cartridges you supply and played through SemaDrive's own sound chips. Generated entries use numbered track names; catalogue support is revision-specific, and not every entry has been individually auditioned.
- One Jukebox across the Atari ST, Mega Drive and Amiga desktops, with a way back to the desktop you opened it from. The new Amiga tab includes game albums, Favourites, Recent, music found on disks and module playback through our own Paula emulation. Its visualiser shows Paula's four voices, with three looks and a larger view.
- Shared desktop apps across all three systems: Continue, Pictures, Notes, Help, Documents, settings and backups. Amiga disk documents are read in the background. SemaDrive can resume directly into a saved game through Continue.
- Faster library and desktop drawing: game cards are drawn on the GPU, unchanged window contents are reused, Jukebox redraws are reduced, and filtering very large game libraries is faster.

### Experimental Amiga preview

- SemaBench brings our own Amiga 500 core, our own Kickstart replacement written from scratch, and our own Workbench-style desktop into SemaTor. No original Amiga Kickstart ROM code or file is included or required. Select Amiga from the desktop's system menu and add your own ADF or IPF disks.
- Desktop drawers, favourites, recent games and shared apps, plus four moving backdrops: Copper Rain, Vector Bobs, Plasma Pool and Mix. Backdrops can react to music. The public release includes the built-in desktop look; extra theme files are deferred to a later update.
- Configurable Amiga memory and external drives, Amiga 500 sound filtering, and a Disk boot choice of Real A500 or Fast, with Real A500 the default. Improvements to disk booting, system calls, graphics, input and interrupts help games including Ishar, Bunny Bricks, Millennium 2.2, Quadralien, Zoom, Test Drive, Monkey Island II and Operation Wolf.

### Atari ST game enhancements

- Midwinter and Midwinter II: extend draw distance up to 16x using the island's own terrain levels, including farther objects and extended haze. Improve motion during turns and newly revealed terrain, and make Terrain Shading's grain stay attached to the ground.
- Hunter: draw distance includes farther objects, vehicles and people in the supported edition; adds a Retro waves sea option. Objects beyond active sectors do not gain extra game simulation and can remain stationary.
- F1GP: extended draw distance includes farther cars in cockpit view. ALL CARS IN VIEW can show all 26 race cars instead of the original 12 when extended draw distance is enabled.
- No Second Prize: extends draw distance to scenery and riders as well as the track, and fixes rejected extended-distance frames. Armour-Geddon extends it to vehicles and smoke; Virus adds a 16x choice and draws craft and scenery farther away. Simulcra improves distant sparks, debris and camera motion for unpaired objects.
- Interphase: adds 16:9, 21:9 and 32:9 views for 3D flight, extended draw distance with farther objects and enemies, and render resolution and anti-aliasing independent of Smooth Motion. Fixed screens remain 4:3.
- Powermonger: adds a GPU scene-rendering path, a 32:9 widescreen choice and FAR LAND to show bare terrain to the map edge. Improves object sizing and movement, and carries rain and snow across the wider view.
- Starglider 1 and 2: improve Match display with variable refresh, higher render resolution and independent picture options. Add INVERT Y AXIS. Starglider fixes lost keyboard/mouse input after firing; Starglider 2 improves ground and clipped-face motion and avoids dropping to 4:3 when particles appear. Starglider 2's experimental draw-distance work is not exposed as a release option.
- Infestation: render resolution and anti-aliasing draw at the higher resolution again; adds 2x draw distance including farther moving objects.
- Buggy Boy: improves continuous road and wall motion and analog steering. Shadow of the Beast improves predicted motion and adds an experimental AMIGA ART option using artwork from supported Amiga disks supplied by you; scene coverage remains incomplete and unmatched artwork falls back to the ST version.
- Separate music and effects for IK+, Rick Dangerous and Rick Dangerous II, off by default.

### Controls, display and loading

- Improved gamepad layouts and stick steering for Hard Drivin', Buggy Boy, F1GP, Virus, Starglider 1 and 2, No Second Prize, Midwinter I and II, Powermonger, Armour-Geddon and RoboCop 3. Corrects absolute mouse reports used by Hard Drivin'. Existing customised layouts are preserved.
- Mouse light guns: automatically detected RS-232 West Phaser support on the ST, plus Menacer and Justifier support on SemaDrive. Aim follows the presented picture, including aspect ratio, cropping and CRT borders; SemaDrive includes automatic gun calibration.
- More consistent F12 display options across systems, including Variable refresh screen and an automatic frame-generation multiplier. Frame generation better follows the game's actual drawing rate and the display refresh rate; results still depend on the game, scene and hardware.
- Per-game Original / Fast disk loading in Game Details and F12. Games whose disks require original drive timing remember that requirement. Automatic disk changes improve for Afterburner, Civilization and Forgotten Worlds; one-off file probes no longer trigger unwanted swaps, and save disks inserted into drive A are writable again.
- CPU BOOST backs down when extra emulation work would make the ST clock fall behind real time. Picture and gameplay enhancements, CPU BOOST and run-ahead start off unless you previously chose them; per-game choices are remembered. STEADY SPEED stays on.

### Core and reliability fixes

- SemaDrive: cartridge loading and mapper compatibility improvements, battery RAM fixes, 240-line video support, more accurate 68000/VDP/Z80 timing, and YM2612 sound improvements with Model 1 and Model 2 output filtering.
- Atari ST: more accurate YM2149 tone counting, lower overhead in rendering and emulation, and clearer screenshot-save failures. Shared fixes include a run-ahead thread race and unnecessary display-rate queries.
- The updater now accepts up to 65,536 files and 1 GB per update.

### Known limits

SemaBench is experimental: many games still do not work, Datastorm keeps rebooting, some Amiga music may not import, and saves from older SemaBench builds cannot be loaded. Extra SemaBench desktop themes are not included in 603. Interphase's 32:9 view with 3x draw distance has known floor-rendering gaps; extended scenes and experimental artwork are not universally validated. The SemaDrive sound comparison against BlastEm is unfinished. This release does not claim every game has passed a complete visual audit or achieves every display rate. No games or original Amiga ROMs are bundled. Desktop downloads are Windows x64, Linux x64 and Linux ARM64; Android is not part of this public release.
