# SemaTor — changes since public 1.1.230 (through 1.1.337)

Windows x64 and Linux x86-64 desktop preview. Normal optical-flow modes remain available. No new Android or macOS binary is included.

**Public downloads:** expanded artwork is omitted. Both platform ZIPs and signed `.supdate` files are provided; existing artwork and user data are preserved.

Compatibility remains game- and disk-edition-specific. Bounded test runs are not full-game certification; some tested titles still have graphics or loader problems.

## 1.1.337

F11 > Controls has two tabs, Gamepad and Keyboard. The pad's own settings - dead zone, autofire, left stick, mouse speed and restore defaults - sit under the button bindings beside the controller picture. The bar's Shot button is now called Screenshot.

## 1.1.336

F11 is now an overlay along the bottom of the game instead of a separate page. It opens on Save / Load, with Rewind, Disks and Controls beside it on a bar, then Shot, Fast fwd and Pause, then Resume, Library and Quit. Arrow keys and the D-pad move to whatever is next in that direction, so every button can be reached from the keyboard or a pad; Left and Right change a setting, Enter or A presses, Escape or B closes, Tab or the shoulder buttons change section, and F12 or Start opens settings.

Save / Load shows every slot with its picture, which slot quick save and quick load use, and warns when a save will replace one. Keys 1 to 4 choose a slot. Rewind sets how far back rewind reaches and how far each step goes. Disks names each disk by its number, shows which is in drive A, and offers drive B, eject and Restart game. Controls has the live controller picture with its bindings, the keyboard keys, and the pad's own settings. Controls has moved out of F12 into F11.

Restart, Library and Quit ask in a small box in the middle of the screen, and going back puts you where you were.

Ejecting a disk, loading, rewinding or restarting no longer announces that a recording ended when nothing was recording.

## 1.1.331

Native motion now draws its in-between frames on your display's own rate instead of the Atari's 50 Hz field rate. On a 60 Hz display one frame in five used to be a repeat of the one before, and on a 120 Hz display nearly three in five; both are now around one in twenty. Original game timing and physics are unchanged - only which in-between positions get drawn.

## 1.1.330

Added MOTION FEEL under F12 > Screen & frame rate, for games using frame generation or native motion. SMOOTHEST keeps the present behaviour; BALANCED and RESPONSIVE show the newest picture sooner, which makes controls feel tighter.

Measured on Fire and Ice with the game's own frame timing, 60 to 240 Hz displays: the picture sits 50 ms behind the game's newest frame on SMOOTHEST, 45 ms on BALANCED and 38 ms on RESPONSIVE. When the game itself has a long frame, the delay used to spike to 120 ms; BALANCED holds that spike to 99 ms and RESPONSIVE to 78 ms. None of the three shows fewer in-between frames than before.

Interpolation cannot show the newest frame immediately - it has to hold it back while the in-between frames play - so some delay remains by design. The original game's own input timing is unchanged.

## 1.1.329

Fixed the CRT cabinet drawing hard pixel edges instead of the blended picture a tube gives. Filtering now follows the picture mode alone: the CRT cabinet and the screen filters both blend, frame generation never changes it, and the plain picture keeps the ST's own sharp pixels.

Fixed the Picture & CRT page hiding its list of sections (glass, focus, phosphor mask, tube, persistence, calibration, brightness, beam) on wider windows, which left four settings and no visible way to the rest. Every section is reachable from the list at any window size; the side rail remains a shortcut.

Both faults were introduced in 1.1.328. Each is now held in place by a test.

## 1.1.328

Install this release from the full platform ZIP once: it adds a new artwork file that older updaters will not accept.

Install note: this release adds the controller artwork, which updaters from 1.1.327 and earlier refuse. Install the full platform ZIP once; your settings, saves and games are preserved.

The F12 Controls page now shows a live picture of your controller. Buttons glow as you press them, the D-pad glows in the direction you push, the sticks lean the way you move them, and every control is labelled with what it does in the game you are playing. It fills the window instead of sitting in a corner.

F11 and F12 are grouped and quieter: sections are separated, only the row you are on is highlighted, and the Picture page no longer repeats the list of sections already shown beside it.

The Mega lo Mania command centre no longer offers INSIDE BEZEL, which covered the game's own screen. A saved setting that used it opens as the side panel.

Fixed the SemaTor badge on the CRT bezel drawing as diagonal streaks under OpenGL.

Fixed the DISK LOADING option being hidden unless a game profile was loaded.

The website's game guides use the new controller artwork, with each control seated on the picture by measurement, and are easier to read.

## 1.1.328

A live controller page: F12 > Controls > Controller layout draws your pad, lights up each control as you press it - including each D-pad direction and the sticks, which lean the way you push them - and labels every control with what it does in the game you are playing.

Optional fast disk loading, off by default: F12 > Speed & loading > DISK LOADING. It shortens only the drive's waiting, keeps the real data rate, leaves timing-sensitive commands alone and switches itself back off if a game starts re-reading. Measured: Speedball 2 spent 106.5 seconds waiting on the drive, now 0.4.

Switchblade II now loads: a disk whose last track image is a few bytes shorter than declared is no longer refused.

Fixed the SemaTor badge on the CRT bezel drawing as diagonal streaks under OpenGL.

Menus: clearer names throughout, one duplicate brightness entry removed, the Picture & CRT page reordered so the picture mode comes first and no longer repeating its own section list, and a live example on the scanlines, blur and glow page. The Mega lo Mania command centre no longer offers INSIDE BEZEL, which covered the game's own screen; saved settings open as the side panel.

Correction: a package built after 1.1.326 was released briefly carried the 1.1.326 version number as well. Everything it added is in this release; no 1.1.326 download is changed by it.

## 1.1.326

Frame generation in Turrican II, Return to Genesis, Zak McKracken and Time Bandit widescreen now keeps producing in-between frames when the game and display timing drift slightly apart; previously it could fall back to the game's own frame rate. Fire and Ice native motion uses the same improved pacing. Widescreen gameplay now receives the same CRT shader filtering as 4:3, instead of looking sharp in play and blended in the menu. Returning to the library from a game now opens the same tab and game you launched, without replaying the intro; the next start also opens there.

Correction: earlier frame-generation timing tests assumed exactly matched game and display clocks.

## 1.1.325

Fixed Fire and Ice native motion falling back to stepping at the original frame rate after a few seconds of smooth motion. The presentation clock now paces each source frame pair to the measured arrival of the next, so small timing differences between the game and the display no longer push it out of step. With native motion on, the session log records how much time was interpolated. Correction: the 1.1.324 clock validation did not cover timing drift or the game's irregular frame cadence.

## 1.1.324

Changed Fire and Ice native motion to a 50 Hz presentation clock instead of four fixed steps per source frame. Slower supported source frames receive additional samples, repeated display refreshes reuse the existing sample, and playback speed is respected. Original physics and input timing remain unchanged. Corrected the native-motion FPS label.

## 1.1.323

Fixed Fire and Ice widescreen bounds for shorter and narrower maps, including partial tile rows. Prevented stale motion frames across level loads and corrected late terrain updates appearing one frame early. Validated all 27 distinct map layouts across 4:3, 16:9 and 21:9 with edge and full-map rendering sweeps. Original gameplay and enemy activation rules remain.

## 1.1.322

Added experimental Fire and Ice 16:9/21:9 world rendering and native motion interpolation. Intermediate views redraw terrain and actors while preserving original simulation timing and the HUD. Unsupported scenes fall back to the original view. Existing optical-flow modes remain available.

## 1.1.321

Fixed Dungeon Master held-item replacement artwork when picking up and moving inventory objects. Fixed two startup blockers in Fire and Ice; the supplied ICS two-disk edition now reaches playable gameplay. Added its edition profile, jump-button default and stable uncropped display. Fixed Bubble Bobble gameplay corruption by honoring its verified loader placement and preventing fixed-buffer overlap. Added a separate Dungeon Master artwork add-on, including inventory and held items. Public downloads omit expanded artwork; existing installed artwork is preserved. Update errors distinguish downloading from verification failures.

## 1.1.320

Fixed Vulkan descriptor exhaustion during busy rendering and optical-flow frames. Improved protected-disk reading and library rescans; corrected Lombard Rally data-disk file lookup and Arkanoid II launcher selection. Added enhanced-edition checksums to the game guides. Dungeon Master now repeats the supplied dark stone background seamlessly, with softer torch lighting. The original package included expanded artwork; a smaller public package was subsequently provided.

## 1.1.319

Brighter Dungeon Master interface, corrected spell and party alignment, updated close-up mirror portraits, repaired items and HD cursors. Added warm torch lighting and party-formation dragging.

## 1.1.318

Restored complete desktop packages with Windows/Linux release and debug builds, debug launchers, tools, installers and an offline source/build kit.

## 1.1.317

Expanded Dungeon Master UI artwork, character portraits, inventory items and controls; repaired mouse-event delivery and interaction handling.

## 1.1.316

Fixed register preservation across guest VBL callbacks, helping games that rely on those callbacks. Expanded compatibility checks across varied disk editions.

## 1.1.315

Tightened public packaging and removed development metadata from public binaries.

## 1.1.314

Improved frame generation for small moving objects and after rewinding. Fixed graphics-copy and clipping issues.

## 1.1.313

Improved fine-detail preservation with optional graphics filters and their interaction with frame generation.

## 1.1.312

Corrected CPU bus accesses and floppy seek verification; added text queries and clipping fixes.

## 1.1.311

Added classic GEM resource loading, relocation, lookup and lifecycle handling, with malformed-file checks.

## 1.1.310

Expanded GEM bitmap conversion, graphics attributes, dialog layout and image drawing.

## 1.1.309

Expanded TOS and graphics services; improved drive access, MIDI, file handling and save-state validation.

## 1.1.308

Added independent drive B, optional procedural MIDI synthesis and per-game dither, gradient and edge controls.

## 1.1.307

Added live keyboard buffering, guest-timed key repeat and waiting console input; improved save-state handling.

## 1.1.306

Added loader execution modes, inherited environments and ST-RAM allocation support; improved console errors.

## 1.1.305

Corrected CPU error-handler information, protected-sector reads, disk swapping and sector-write handling.

## 1.1.304

Improved floppy timing and hardware/CPU compatibility; made unsupported services report failures consistently.

## 1.1.303

Improved library sorting/search, F11/F12 navigation, save naming and keyboard/controller focus.

## 1.1.302

Added clearer compatibility notices and prefilled game-report drafts; improved library empty states, disk-picker cancellation and screenshot saving.

## 1.1.301

Introduced the experimental Dungeon Master native party interface, packaged its artwork and fixed its Vulkan presentation. Corrected system calls, keyboard waits and stale palettes.

## Public baseline: 1.1.230

The last published release. The entries above cover subsequent development builds; version numbers do not imply that every intervening number was publicly released. No separate change records for 1.1.231–1.1.299 are present in this source history.
