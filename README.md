![SemaTor](https://sirbaron.github.io/SemaTor/readme/banner.png)

# SemaTor

**An Atari ST compatibility and translation layer built for games.**

SemaTor runs Atari ST games using a 68000 interpreter: the game code executes,
the ST's hardware and operating-system interface are reproduced, and where
a game's hot routines are understood they can be replaced with native code
that does the same job faster. There is no Atari TOS ROM inside it and none
is required — the GEMDOS, BIOS and XBIOS calls a game makes are answered by
SemaTor's own implementations, written from scratch for this project.

You supply the disk image. SemaTor supplies the machine.

> **Bring your own games.** Public builds contain no Atari TOS ROM or playable
> game disk images. Compatibility profiles include identifiers and small
> executable patches; third-party components carry their own licences.

<p align="center">
  <a href="https://discord.gg/DdHfSGrdFc"><b>Discord</b></a> &nbsp;·&nbsp;
  <a href="https://www.youtube.com/@SemaTorST"><b>YouTube</b></a> &nbsp;·&nbsp;
  <a href="https://github.com/SirBaron/SemaTor/releases/latest"><b>Windows / Linux releases</b></a>
</p>

---

Documentation checked against development build **1.1.211**. Public downloads
are compiled Windows and Linux builds; the source remains private. The public
Releases page may lag behind development.

## What makes it different

**It is not trying to be a general-purpose ST.** It uses CPU interpretation
and hardware emulation alongside game-specific native replacements. SemaTor
aims to run *games* well —
and for the ones it knows, better than the original hardware could — by
understanding what the game is doing and meeting it halfway.

- **Native routines with comparison tools.** Profiles can identify hot 68000
  routines for native replacements. `--audit-native` compares supported,
  exercised routines against interpreter execution and retains the reference
  result. These isolated comparisons can find differences; they do not prove
  every game path or interrupt-timing case correct.
- **Enhancements, per game.** Where a game is understood, its profile can
  offer things the ST never had: cleaner scrolling, extended play areas
  (including supported widescreen profiles), audio fixes and cheats. Use the
  game’s settings to disable these. `--safe` is a diagnostic startup mode,
  not an all-enhancements-off switch.
- **No TOS.** The operating-system interface is documented behaviour, and
  SemaTor implements it. That is why it needs no ROM — and why it is not a
  copy of one.
- **Frame generation.** Optional generated in-between frames using CPU methods,
  GPU compute or NVIDIA optical flow where supported.
  Availability and fallbacks depend on the selected backend and driver.
- **Presentation built for the ST's picture.** Sharp pixels, simple
  filters, or a full CRT studio — beam, phosphor, mask, glass, colour —
  with HDR on supported desktop Vulkan/display combinations. Experimental
  temporal Beam depends on timing support, refresh rate and configuration;
  it is not guaranteed merely because a device supports Vulkan.
- **A project-developed core.** The 68000 interpreter, the
  video and YM2149 and MFP, the WD1772 and its disk formats, the ACIA and
  IKBD, the scheduler, the cycle clock, the profile system, the debugger
  and the test suites are developed for this project. Third-party components
  are separately credited. Historical provenance notes describe earlier
  comparisons; they are not a certification of every subsequent build.

---

## Platforms

| | |
|---|---|
| **Linux** | Public x86-64 build. Requires SDL2 and appropriate graphics drivers. PNG/JPEG/BMP decoding is bundled; network artwork fetching uses `curl`. |
| **Windows** | Public build: `SemaTor.exe` with `SDL2.dll` beside it. |
| **Android** | ARM64 development/test build for phones and supported dual-screen handhelds, including **AYN Thor**. Android is not part of the stated public Windows/Linux release offering. |

Debug builds ship for Linux and Windows alongside the release builds; they
support full capture with ten matching diagnostic files per game session.
Run a debug build or pass `--debug`; `--debug-log` alone is the trace option,
not the complete capture. Reports update during play and finish on normal exit.

![The library on a desktop](https://sirbaron.github.io/SemaTor/readme/desktop-library.png)

<sub>Screenshots illustrate the interface; appearance can vary by version and
selected layout.</sub>

---

## Features

### The library
- A menu of lists — recently played, all games, enhanced, favourites,
  compilations, hidden — with one list on screen at a time.
- Cards that carry their own name, a brass **ENHANCED** plate on any game
  with available enhancements, and a mark for saved games; the focused game described
  beside them.
- Cover art fetched per game or for the whole collection, from
  libretro-thumbnails, with your own covers kept.
- Alternate sources grouped under one title share its Enhanced badge and
  enhancement settings. Launch still verifies executable compatibility; the
  badge alone does not verify an unknown disk version.
- Desktop cover import and game-folder selection open built-in file browsers.
  Several folders can be scanned without moving the disks.
- Search as you type, an A–Z jump that offers only the letters you own games
  under, sort by title, year, publisher or last played, and *Surprise me*.
- Saved games with previews, and *Continue* straight into the latest.
- A desktop layout with a permanent details rail, hover, mouse-wheel
  scrolling and a cover-size slider; a phone layout built for a thumb; and
  the AYN Thor's second screen used as a disk sleeve for the chosen game.
  Desktop and classic library layouts are a keypress apart (F9).
- Starting a game flies its cover into the dark before the ST takes over.

![The library on a phone](https://sirbaron.github.io/SemaTor/readme/phone-library.png)

### The machine
- 68000 interpreter with cycle clock and scheduler; ST video, YM2149, MFP,
  ACIA/IKBD, and the WD1772 with **ST / IMG, MSA, full-sector DIM and
  Pasti STX** disk images.
- GEMDOS, BIOS and XBIOS implemented directly — no TOS ROM.
- Companion disks: when a game asks for another disk, insert it from the
  menu without leaving the game.
- Save states with previews, ten slots per game, and rewind.
- Joystick, keyboard and mouse; game controllers with per-game mappings;
  an on-screen analogue stick and buttons on phones.

### The picture
- **Sharp pixels**, **simple filters** (scanlines, blur, glow, curvature,
  mask, motion) and a **CRT studio** — beam, phosphor persistence, mask
  type, tube glass and reflections, calibration — each a page of steppers.
- **HDR** through supported desktop Vulkan/display configurations, with white
  and peak controls. OpenGL and current Android presentation use SDR.
- **Frame generation** with an NVIDIA optical-flow path (`VK_NV_optical_flow`)
  alongside GPU compute and CPU modes. The chosen mode and hardware determine
  availability; generated frames can still show artefacts.
- OpenGL and Vulkan backends. Temporal Beam is experimental and requires
  compatible timing/presentation support; it may remain unavailable.
- In 1.1.211, the full CRT preserves finer frame-generated movement while
  retaining the original ST scanline spacing. This does not eliminate every
  optical-flow artefact.

![The AYN Thor's lower screen](https://sirbaron.github.io/SemaTor/readme/thor-deck.png)

### Sound
- YM2149 synthesis, separate music/effects options for supported profiles,
  and WAV recording. Sound compatibility is still per game. Xenon’s modern
  engine received a repeated-envelope-trigger fix in 1.1.210; all effects
  have not yet been verified in a gameplay test.

### For understanding games
The debugger is part of the product, not a build option:
`--debug-log` (continuous machine trace with hot code and stall detection),
`--watch-writes` ("what writes this?"), `--find-vars` (which words behave
like engine counters), `--watch-range`, `--trace-state`, `--trace-io`,
`--capture` and `--frames-to` for watching a title sequence frame by frame,
scripted input with `--press`, `--joy` and `--mouse`, and `--stress-gameplay`
for soak testing. `--inspect` says what is on a disk and exits.

---

## Games with profiles

A profile teaches SemaTor a specific game: what its routines are, which can
go native, what enhancements fit it, and how its sound driver works.
Profiles identify a game by the hash of its program, not by its file name.

| Game | |
|---|---|
| Arkanoid II: Revenge of Doh | native routines, wide mode, enhancements |
| Black Lamp | |
| Return to Genesis | independent music/effects; 16:9 and 21:9 world-view options |
| SWIV | profile-specific enhancements and cheats |
| Turrican II | guarded drawing acceleration, widescreen options and audio controls |
| Xenon | sound driver |
| Xenon 2: Megablast | |
| Zynaps | |

Everything else runs through the interpreter and the hardware layer. Many
games work; some will not, and a game without a profile gets none of the
native or enhancement work. See the caveats below.

---

## Caveats — read these

- **No games are included. None ever will be.** You need your own disk
  images. Put them in a folder and point SemaTor at it (`--dir`, or add the
  folder from the library).
- **No TOS ROM is needed, and none is included.** This is a design choice,
  not a gap: the operating-system interface is reproduced, not copied.
- **Compatibility is per game.** Eight titles have profiles and have been
  worked on in depth. Anything else is running on the general machine and
  may be perfect, imperfect or not start at all. A disk that decodes but
  has no recognised startup is reported as such rather than guessed at.
- **Profiles target particular executable versions.** Native replacements
  and patches require a compatible match. A modified or unusual version
  may run without those enhancements or may not work.
- **Frame generation is optional and, on mobile, experimental.** Original
  frames are recommended there and are one press away.
- **NVIDIA optical flow needs an NVIDIA GPU and driver that expose
  `VK_NV_optical_flow`.** Other modes are available; fallback behavior depends
  on the selected mode and backend.
- **Simple filters and the CRT studio depend on the GPU driver.** The
  OpenGL chain performs a controlled startup output check, and detected CRT
  setup failures retain normal rendering. These checks cannot catch every
  driver or runtime rendering fault.
- **Cover art comes from the network** (libretro-thumbnails) and only when
  you ask for it. Nothing is fetched without a press.
- **Android needs "All files access"** so it can read your games folder in
  internal storage. Everything lives under `SemaTor/` in the PC layout.
- **Not legal advice.** COPYRIGHT.txt says what the code is and is not; it
  was written by the people who built it, not by lawyers.

---

## Getting started

**Linux** — extract the desktop download, open a terminal in its folder, then:
```sh
sh install-linux.sh
```
The installer requires Python 3 and defaults to `~/Games/SemaTor`. Double-clicking
an `.sh` file may open an editor because of your file-manager association;
running the command above executes it.

For portable use, run `sh run-semator.sh`, or:
```sh
chmod +x semator-linux-x86_64
./semator-linux-x86_64
```

**Windows** — run `SemaTor.exe` with `SDL2.dll` beside it.

**Android test builds** — if supplied an APK, sideload it, grant "All files access", and put disks into
`Internal storage/SemaTor/games`.

Then add your games folder in the library, or:
```sh
./semator-linux-x86_64 --disk "Xenon 2.st"
```

Settings, saves, imported covers and registered game-folder locations live
outside the release folder: normally `~/.local/share/semator` on Linux
(or `$XDG_DATA_HOME/semator`) and `%LOCALAPPDATA%/SemaTor` on Windows.
Replacing application files should therefore retain your setup. The in-app
**Settings → User data** page identifies the active location.

Full notes ship with the download: `RUNNING.txt` for each platform and
`INPUT.txt` for the controls.

---

## About the source

SemaTor's source remains private. Public releases are compiled Windows and
Linux builds, not source distributions. Android ARM64 builds are developed and
tested separately.

The project has an extensive automated test suite. Each release receives
checks relevant to its changes; this does not mean every test, game, graphics
driver or device was exercised for every release. Hardware gameplay reports
remain essential.

Faults and compatibility reports are very welcome through
[Issues](https://github.com/SirBaron/SemaTor/issues) or on Discord, and get
looked at properly — see the templates for what makes a report easy to act
on.

---

## Come and say hello

- **Discord** — https://discord.gg/DdHfSGrdFc — questions, game reports, and
  what is being worked on.
- **YouTube** — https://www.youtube.com/@SemaTorST — the thing running, which
  is worth more than any description of it.
- **Issues** — bugs and compatibility reports. The templates ask for the logs
  and for which earlier version worked, because that is what turns a search
  into a diff.

## Credits and licence

SemaTor © David Baron. Written from scratch. All rights reserved — see
[LICENSE](LICENSE): the binaries are free to download and use, and the code
is not licensed for reuse.

It uses SDL2, Vulkan headers and bundled image-decoding code, with platform
system libraries where appropriate. Third-party notices and licences remain
in the download. Historical `COPYRIGHT.txt`, `LICENSING.txt` and provenance
notes should be read alongside those component notices, rather than as a
current independent certification of the entire build.

Atari and Atari ST are trademarks of their respective owners. This project
is not affiliated with them.
