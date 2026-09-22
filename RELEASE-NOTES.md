# SemaTor 1.1.328

A live controller page: F12 > Controls > Controller layout draws your pad, lights up each control as you press it - including each D-pad direction and the sticks, which lean the way you push them - and labels every control with what it does in the game you are playing.

Optional fast disk loading, off by default: F12 > Speed & loading > DISK LOADING. It shortens only the drive's waiting, keeps the real data rate, leaves timing-sensitive commands alone and switches itself back off if a game starts re-reading. Measured: Speedball 2 spent 106.5 seconds waiting on the drive, now 0.4.

Switchblade II now loads: a disk whose last track image is a few bytes shorter than declared is no longer refused.

Fixed the SemaTor badge on the CRT bezel drawing as diagonal streaks under OpenGL.

Menus: clearer names throughout, one duplicate brightness entry removed, the Picture & CRT page reordered so the picture mode comes first and no longer repeating its own section list, and a live example on the scanlines, blur and glow page. The Mega lo Mania command centre no longer offers INSIDE BEZEL, which covered the game's own screen; saved settings open as the side panel.

Correction: a package built after 1.1.326 was released briefly carried the 1.1.326 version number as well. Everything it added is in this release; no 1.1.326 download is changed by it.

Installing this one: the controller artwork is a new file, and updaters from 1.1.327 and earlier only accept files they already know about, so they will refuse this update rather than install a package they cannot check. Install the full platform ZIP once; automatic updates work normally again afterwards.

Public Windows/Linux packages include signed .supdate files and omit expanded artwork. Dungeon Master artwork add-on version 1 remains compatible. No new Android/macOS binary is supplied.
