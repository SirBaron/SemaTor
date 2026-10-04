![SemaTor](./banner.png)

# SemaTor

**Your Atari ST library. A new way to play.**

SemaTor is an Atari ST translation layer: it runs 68000 game code, reproduces the hardware and operating-system interfaces it needs, and adds native enhancements for supported titles. No Atari TOS ROM is required.

Created by David Baron with AI assistance in development, research, documentation and this website.

[Download the public preview](https://github.com/SirBaron/SemaTor/releases) · [Website](https://sirbaron.github.io/SemaTor/) · [Discord](https://discord.gg/DdHfSGrdFc) · [YouTube](https://www.youtube.com/@SemaTorST) · [Report a problem](https://github.com/SirBaron/SemaTor/issues)

**1.1.528 public preview — Linux x86-64 and Windows x64.** This repository hosts the website, public documentation and issue tracker. SemaTor's source is private.

The update button stays in the library header: it shows the current status and highlights available updates in gold. Select it to download with progress in the update popup, then choose **Install and restart**. You can also check under **Library Settings → Updates**. Optional daily startup checks include public previews. Choose **Download update**, then **Install and restart**: signed Linux/Windows updates preserve your games, saves, settings and custom artwork. GitHub downloads remain available. Public updates omit optional artwork.

## New in 1.1.528

**Most ST disks now run.** Games, demos and menu disks that never started do now. SemaTor's start-up follows TOS's own: the AUTO folder on every boot, programs where TOS loads them, the boot sector's stack, the reset vector. The 68000 runs to the ST's bus timing, so counted delays, raster effects and opened borders land where they should. SemaTor is tested against a library of over 14,000 disks.

**SemaOS is how SemaTor starts.** A desktop of its own opens first, with Games, Drives, Music, Pictures, Notes and more. Prefer the classic library? Switch under Settings.

**Music on the ST, old and new.** The Jukebox browses the SNDH archive and plays tunes live, with channel scopes and favourites. SemaSynth is a music studio that makes what real ST tunes make: play it from a MIDI keyboard and save your songs as real SNDH tunes.

**Your disks, labelled.** Handwritten labels like a copy from a mate, covers for every disk of a game, and a card size you choose.

**SDL3, carried with it.** Nothing to install for graphics or sound on Linux. On Wayland the window no longer freezes when it is covered.

[Download optional Dungeon Master artwork](https://github.com/SirBaron/SemaTor/releases/download/v1.1.502/SemaTor-Dungeon-Master-artwork-addon-1.zip)

**Optional Dungeon Master artwork:** extract the separate artwork add-on ZIP into the SemaTor application folder. It creates `Add-ons/dungeon-master`. Restart and enable Native Party Interface under F12 → Enhancements. Main program downloads omit this artwork. Existing artwork installations remain supported.

Dungeon Master's optional native interface remains available for wider testing and is still experimental.

Read the [release notes and testing guidance](./CHANGELOG.md).

## Game guides

Browse the [Enhanced Games overview](https://sirbaron.github.io/SemaTor/games/) for all 17 profiled titles. Each guide lists the game's options, its original controls and an interactive SemaTor controller showing the default mappings. Saved remaps take priority.

## A library that feels like home

Browse covers or lists, search your collection, keep favourites and return to recently played games. Supported titles stand out with a gold **ENHANCED** badge. Add game folders and choose custom covers using a file browser; fetch artwork for one game or the whole library.

![Desktop library](./desktop-library.png)
*Desktop UI example rendered with sample entries and placeholder covers; no games are bundled.*

![Ultrawide library](./desktop-ultrawide.png)
*Room for a larger collection on a wider display.*

## Make it your ST

- **Enhanced titles:** per-game options for supported games, including native improvements, sound options and cheats where available.
- **Picture controls:** sharp pixels, simple filters and CRT presets with controls for the look of the screen and bezel.
- **Smoother motion:** optional frame generation, with availability and results depending on the graphics backend, GPU and driver.
- **Pick up where you left off:** four manual save slots with previews, plus rewind and session features where supported.
- **A more comfortable desktop:** F11 is an overlay along the bottom of the game - save and load with a picture of every slot, rewind, disks and controls, with Resume, Library and Quit on its bar. Arrow keys or the D-pad reach every button. **F11 → Controls** shows the live controller picture with each button's action in the game you are playing. Public builds include basic diagnostics and an optional local support report.
- **Your own disk collection:** ST, IMG, MSA, full-sector DIM, STX and supported disk images inside ZIP archives.

![Session controls](./session-overview.png)
*Desktop header actions stay within reach: click, or use LB/RB then A. Sample game label shown.*

![Settings](./settings-overview.png)
*F12 settings in the public build.*

## Install the desktop preview

| Platform | Release attachment | Start here |
| --- | --- | --- |
| Linux x86-64 | `SemaTor-1_1_528-linux-public-preview.zip` | Extract, open a terminal in that folder and run `sh install.sh`. The default installation is `~/Games/SemaTor`. |
| Windows x64 | `SemaTor-1_1_528-windows-public-preview.zip` | Extract the whole ZIP to a writable folder, then run `SemaTor.exe`. Keep `SDL3.dll` beside it. |

The Linux installer copies the application into its installation folder; it does not rely on a link back to Downloads. Double-clicking a shell script may open an editor, depending on your file manager. Running `sh install.sh` executes it directly. SemaTor carries its own SDL3; Linux needs only Python 3 for the installer.

**Library maintenance:** Settings → Refresh library (or F5) rechecks your collections. Removing a collection folder removes its entries immediately; your game files stay where they are.

**Optional drive sounds:** F12 → Sound → ST Drive Sounds adds floppy-drive noise during virtual disk activity. Switch it off there, or adjust Effects / speech volume.

Keep your **Games**, **Media**, **User** and **Add-ons** folders when updating. Games holds your disk collection, Media holds artwork and runtime resources, and User holds settings and saves. Add your game folders from the library after starting the app.

**Bring your own disk images.** No commercial game disk images or Atari TOS ROM are supplied. Most ST disks run; if one does not, please report it. This public release continues the preview series: Linux has received hands-on testing; Windows has been built and checked automatically but still needs broader real-machine testing.

## Phone and dual-screen development

Android and AYN Thor interfaces are also in development. They are **not included in the desktop downloads**. Earlier ARM64 test builds include Mega lo Mania controls for Thor. No 1.1.302 APK is included; the Android fixes still need a full build and physical-device validation. These earlier development screenshots show the phone library and lower-screen interface; their appearance may change.

![Phone library, development preview](./phone-library.png)
![AYN Thor lower screen, development preview](./thor-deck.png)

## Help improve compatibility

Select a game and use **Report a problem** in its action menu (or press **U**) to open a prefilled GitHub draft. The compatibility notice also offers **Request compatibility check** before launching. You review and submit the draft using your GitHub account; no disks or logs are uploaded automatically.

Open a [bug or game report](https://github.com/SirBaron/SemaTor/issues). Include the SemaTor version, OS, GPU and driver, game and the disk's name, steps to reproduce, relevant CRT/frame-generation/sound settings, and the last version that worked if known. Screenshots help. An optional report is available under **F12 → Support & diagnostics**; review it before attaching. Please do not upload game disks or ROMs.

## Credits and licence

SemaTor © 2026 David Baron. All rights reserved; see [LICENSE](./LICENSE). Third-party notices are included under `Media/licenses` in the public builds. Atari and Atari ST are trademarks of their respective owners. SemaTor is not affiliated with Atari.

### Source reconstruction

F12 > CRT & picture > Simple screen filters includes optional per-game dither blending, gentle gradients and corner smoothing. These process completed source pictures before frame generation and work independently of CRT mode. Split comparison temporarily suspends interpolation. Effects default off. Xorg reconstructs GPU endpoints and uses RGB blending for its CPU fallback when enabled. Dungeon Master reconstructs the guest source; native HD artwork stays separate.

Drive B is independent of A: use **Session & exit** to insert/eject a companion, or `--disk-b FILE` to mount another image. **Sound > MIDI synthesis** enables the optional procedural synth; no external sound bank is required. Both colour reconstruction and MIDI default off.
