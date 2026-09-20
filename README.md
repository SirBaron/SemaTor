![SemaTor](./banner.png)

# SemaTor · 1.1.227 public preview

**Your Atari ST collection. A wider horizon.**

SemaTor runs Atari ST 68000 game code, provides the hardware and operating-system interfaces it needs, and adds optional enhancements for supported titles. Browse your disks in a visual library, tune the picture, and return to the games you remember. **No Atari TOS ROM required.**

[Download 1.1.227](https://github.com/SirBaron/SemaTor/releases/tag/v1.1.227) · [Website](https://sirbaron.github.io/SemaTor/) · [Discord](https://discord.gg/DdHfSGrdFc) · [YouTube](https://www.youtube.com/@SemaTorST) · [Report a problem](https://github.com/SirBaron/SemaTor/issues)

Linux x86-64 and Windows x64 desktop previews. This repository contains the website, public documentation and issue tracker; SemaTor's source is private. Created by David Baron with AI assistance in development, research, documentation and this website.

## What's new in 1.1.227

- **An update button that keeps you informed.** A gently pulsing gold button shows when an update is available, and the last successful check survives a restart.
- **One popup from download to restart.** Click the gold button to download, follow progress and verification, then choose **Install and restart**. Close the popup to keep browsing while it downloads; reopen it whenever you like.
- **Clear retry states.** Failed checks and downloads are shown honestly, with a way to retry. Games, saves, settings and artwork remain preserved.

Also included from 1.1.226: steadier Time Bandit widescreen framing, the early 0.96 level-selection fix, readable game-named save folders, and the refreshed desktop website and documentation.

[Read the release notes](https://github.com/SirBaron/SemaTor/releases/tag/v1.1.227).

## Browse, play, come back later

Choose cover or list views, search your collection, keep favourites, and return to recent games. Add your existing game folders; fetch artwork for one title or the collection, or pick your own covers. Supported titles stand out with an **ENHANCED** badge.

![Desktop library preview](./desktop-library.png)
*Library layout preview with sample entries and placeholder covers. No games are bundled.*

Four manual save slots with previews, auto suspend and rewind help you return to a session. New save filenames include the game, a short edition identifier and the slot, with previews kept alongside them. Old hash-named saves remain readable. Keep your complete **User** folder when moving your setup.

## Enhancements built around the game

Features depend on the **exact game and disk edition**. A profile is not a promise that every dump works or that every title has every option. Open the game's enhancement and control pages to see what is available.

| Game | Examples for supported editions |
| --- | --- |
| Time Bandit | 16:9 / 21:9 gameplay, energy shield, early-cycle pace option in supported later editions |
| Turrican II | Wider gameplay views, drawing improvements and audio options |
| Return to Genesis | Wider world views and independent music/effects |
| Arkanoid II | Ball visibility and practice options, plus the Xorg Unbound campaign |
| Xenon / Xenon 2 | Game-specific sound and gameplay improvements |
| Black Lamp / SWIV | Title-specific sound, timing or gameplay options |
| Zak McKracken / Mega lo Mania | Game-specific controls and compatibility handling |

**Make the picture yours.** Keep sharp pixels, choose a simple filter, or tune CRT presets, phosphors and a bezel. Optional frame generation can smooth motion; results and availability depend on the renderer, GPU and driver. Widescreen is a game-specific feature, not a universal stretch mode.

![Ultrawide library layout](./desktop-ultrawide.png)
*More room for the collection on a wide display.*

## Know your way around

| Action | Where to find it |
| --- | --- |
| Resume, save, return to the library or quit | **F11** session menu |
| See the game's live button mappings and notes | **F11 → Controls for this game** |
| Picture, sound and enhancement settings | **F12** |
| Insert a companion disk without leaving the game | **F12 → Disks, restart & exit** |
| Check the release status or install an update | **Updates** in the library header, or **Library Settings → Updates** |
| Create an optional local support report | **F12 → Support & diagnostics** |

Gamepad users can select session header actions with **LB/RB**, then **A**. Game-specific mappings are shown on the control page, including mouse-based games where applicable.

![Session controls](./session-overview.png)
*Session layout preview with a sample game label.*

![Picture and game settings](./settings-overview.png)
*Public settings layout preview.*

## Install 1.1.227

| Platform | Download | Start here |
| --- | --- | --- |
| Linux x86-64 | [Linux public preview](https://github.com/SirBaron/SemaTor/releases/download/v1.1.227/SemaTor-1_1_227-linux-public-preview.zip) | Extract the ZIP and run `sh install.sh`. SDL2 runtime and Python 3 are required. |
| Windows x64 | [Windows public preview](https://github.com/SirBaron/SemaTor/releases/download/v1.1.227/SemaTor-1_1_227-windows-public-preview.zip) | Extract into a writable folder and launch `SemaTor.exe`. Keep `SDL2.dll` beside it. |

The Linux installer defaults to `~/Games/SemaTor`. Run the command from the extracted folder; double-clicking a shell script may open it in an editor instead.

**Already using SemaTor?** Click the gold **Update available** button to start downloading, then choose **Install and restart** in the same popup once verification finishes. The update control also shows when you're up to date. Optional daily startup checks include public previews. Builds from 1.1.219 onward support signed in-app updates; older installations need a manual update first.

Keep your **Games**, **Media** and **User** folders. Updates preserve games, saves, settings and custom artwork. Add game folders from the library after starting the app.

**Bring your own disks.** Supported formats include ST, IMG, MSA, full-sector DIM, STX and supported images inside ZIPs. No commercial game disks or TOS ROM are supplied. Compatibility varies by disk edition. Linux has received hands-on testing; Windows builds are checked automatically and need broader real-machine testing.

## Phone and dual-screen development

Android and AYN Thor interfaces remain in development and are **not included in this desktop release**. The images below are earlier development previews, not a mobile release announcement.

![Earlier phone library preview](./phone-library.png)
![Earlier AYN Thor lower-screen preview](./thor-deck.png)

## Help improve compatibility

[Report a game or bug](https://github.com/SirBaron/SemaTor/issues) with your SemaTor version, OS, GPU/driver, game and disk edition, steps to reproduce, relevant picture/sound settings, and the last working version if known. A screenshot or save state can help reproduce the problem. Review support reports before attaching them; please do not upload game disks or ROMs.

## Credits and licence

SemaTor © 2026 David Baron. All rights reserved; see [LICENSE](./LICENSE). Third-party notices are included under `Media/licenses` in the public builds. Atari and Atari ST are trademarks of their respective owners. SemaTor is not affiliated with Atari.
