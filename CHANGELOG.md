# SemaTor release history

## 1.1.545 — Faster libraries, scoped artwork and Linux startup

**Changes since the previous public release, 1.1.544.**

- **Linux startup fixed:** removes an accidental AVX-512 / x86-64-v4 requirement introduced by the build machine's startup libraries. Builds now target baseline x86-64, including SDL and the updater. Normal operating-system and driver requirements still apply.
- **Keep your library cache:** product updates retain known disk identities, including migration from 544. A separate internal compatibility revision retries unreadable or no-startup disks after relevant disk/core changes; UI and music updates do not trigger that retry. Background folder checks still find additions, deletions and edits, and manual full Rescan remains available.
- **Large-library metadata:** collection overrides are read once per collection during a scan instead of reopening and parsing the same file for every disk.
- **Artwork for one window:** right-click a SemaOS game window or a game inside it and choose Fetch artwork for this window. Choose only missing artwork or replace existing fetched artwork; custom covers stay intact. The request respects search, includes offscreen titles and compilation contents, and shows its title count before starting. Both Retro and GEM use their own prompt styling.
- **Less idle CPU use:** SemaOS waits for input when it has no frame to present, avoiding a busy loop after a previous vsync measurement.
- **Safer music recording:** SemaSynth writes WAV files on a worker rather than in the audio callback. Write failures and queue overflow stop recording with a visible error; incomplete files remain separate from finished recordings.
- **Faster app browsing:** Workshop reuses directory listings until the disk or folder changes. SemaSynth reuses unchanged song headers and keeps the selected song when the list reorders. Windows song lists use the metadata already returned by directory enumeration.
- **Jukebox stability:** fixes allocation-failure handling while growing track metadata.

The expanded creative tools, embedded playtests, desktop organisation, scaling and both themes from 544 are retained. Linux x86-64 and Windows x64 ZIPs and signed in-app updates are supplied; games, saves, settings and custom artwork are preserved. No game disks or new Android/macOS binaries are included.

Validation covers generated large libraries, cache migration and selective retry, recording failures, both artwork-dialog themes, Linux and Windows under Wine. Baseline and Zen 3 CPU emulation supplement the Linux startup checks; the reported physical Ryzen 5800X and native Windows hardware are not available locally.

## 1.1.544 — SemaOS studio and desktop update

**Changes since the previous public release, 1.1.538.**

1.1.544 brings the expanded SemaOS creative tools, embedded playtesting, desktop scaling, themes and reliability work developed across builds 539–544 into one public update. The Windows interface fix from 538 is retained.

### SemaOS desktop, scaling and themes

- Whole-desktop percentage scaling keeps text, buttons, borders and icons together. Settings offers 75%, 100%, 125%, 150%, 175% and 200%; Ctrl+/− adjusts by 5% and Ctrl+0 resets. These shortcuts also work while app editors have focus. Smaller windows apply a fit limit, shown in Settings, to keep controls reachable.
- Small, normal and large desktop icons have consistent label placement, wrapping and spacing. Reflow preserves saved icon positions and also handles custom folders and game shortcuts.
- Settings is reorganised into Appearance, Display, Behaviour and System, with persistent navigation and scrollable content.
- Violet, Teal, Amber and Crimson Retro palettes now cover controls, windows and the animated sky, sun, mountains, stars and grid. GEM retains its own Atari-style typography, light windows and green desktop.
- Buttons, fields, window controls, menus, taskbar and scrollbars have consistent hover, pressed, selected and disabled states in both styles. Labels fit their controls, narrow toolbars wrap, and smaller app windows remain usable.
- Folder renaming supports selection, clipboard shortcuts and caret movement; renamed items stay visible. Folder contents scroll below their search bar, with a visible scrollbar and more room at the minimum window size.

### SemaPaint and disk artwork

- The 320 × 200 editor gains quieter 8/16/32-pixel grids, independent snap, selection/cut/copy/paste, flips, rotation, colour replacement, improved undo/redo and corrected ST/STE palette editing. Grid and snap sizes refer to image pixels; drawing guides are not exported.
- Browse supported artwork on the selected game disk, a drive or the Workshop disk. Edit PI1, NEO and recognised raw screens, then save into a new named disk copy while preserving the original disk and unrelated files.
- Inspect unpacked planar artwork inside ordinary disk files using a chosen byte offset, dimensions, one/two/four planes, three planar layouts and an optional palette offset. Writes are restricted to the selected file bytes in the new disk copy.
- Snapped selections cover the intended tile without an extra pixel. Paint strokes finish correctly on mouse release or focus loss, including when there is no final motion event.

### Maker: larger intros and games

- Save named projects containing artwork, settings and embedded music, with undo/redo and complete generated 68000 assembly that reassembles to the exported program. Builds create separate ST disk images.
- Intros support up to eight editable scenes, individual backgrounds, scrollers, cut/fade/reveal/palette-cycle effects and four moving sprite layers per scene.
- Games support up to eight levels, a 20 × 12 tile playfield, walls, hazards, collectibles, patrols, exits, timers, lives and three objective types. The playfield uses 192 lines, leaving eight for the HUD.
- Edit sixteen 16 × 16 assets with up to four animation frames each, and exchange backgrounds and sprite selections with Paint. The larger preview, scrolling controls and corrected file-picker input improve editing on smaller windows.

### Program Lab and embedded playtesting

- Open assembly source directly and start from four editable examples. The editor follows the caret across long lines, preserves syntax colours and reports unreadable or oversized source files. Builds use their own disk without disturbing Workshop edits.
- Maker and Lab offer **Build & playtest** inside a movable SemaOS window. Create > Playtest also opens disk copies, so editors stay available while the program runs.
- Pause, step one frame, stop, or rebuild and restart. Test ST 512 KB, ST 1 MB and STE 1 MB presets. Each session has its own working disk copy and data directory.
- Inspect and change Maker game lives, score, timer and player position. Lab can expose up to sixteen unsigned byte, word or long values through `live_` declarations. Compatible edits to those source values can be applied while the program runs; other code or layout changes require rebuild/restart.
- Click the game picture to capture keyboard, mouse and controller input; Ctrl+Esc or a click outside returns control to SemaOS. Game colours remain intact in both themes, guidance stays readable, and stopped inspector values are labelled and read-only.

### Disk Workshop, files and everyday apps

- Workshop gains a direct file picker, nested folders, file import/replace/move/rename/delete, recursive extraction and undo/redo. Invalid directory links, cross-linked chains and failed full-disk edits are rejected without changing the working disk.
- Explorer keeps complete filenames and handles larger lists, with path entry, search, history and sorting. Documents searches nested folders; Pictures exposes older screenshots and Continue retains more saved games.
- Notes adds selection, find, word wrap, copy/cut and export. Viewer adds search, wrapping, text size and image zoom, and keeps disk context when sending artwork to Paint.
- Code Reader adds bookmarks, line copy and routine navigation, and rejects malformed PRGs. Help adds search and contents; Console adds export and horizontal navigation.
- Jukebox gains named playlists, reordering and available-song playback. Missing tracks stay listed, and removing a playlist entry leaves the music file intact. Naming, scrolling and navigation fixes keep all 32 playlists reachable.
- SemaSynth saves report failures and avoid filename collisions. Keyboard notes release correctly after app or host focus changes, while intentionally latched Hold notes remain held. GEM keeps distinct channel colours.
- Details, Statistics, Jukebox and Synth fit smaller windows more reliably. Hardware Check keeps each run's configuration fixed and improves cancellation, report readability and incomplete-result handling. Machine and Video panels scroll, with Windows system-settings links.

### Reliability and interaction fixes

- Maximised windows follow desktop size and percentage scaling while retaining their restore size. Closed window slots can be reused without corrupting window order; reaching the 40-open-window limit produces a clear message.
- Saved layouts reject unsupported views and overflowing numbers. Desktop shortcuts preserve long paths. Deeply nested folders cannot be moved into their descendants, and damaged parent links recover items onto the desktop.
- Losing host focus releases transient drags and input cleanly. Shared shading respects clipping; empty artwork and music lists open safely.
- Find has clearer titles and context, includes Playtest and Interface scale, and opens the relevant Settings page. Find, update status and clock fit together on smaller desktops.
- Fixed reversed Notes/Console scrollbar dragging, unscrollable code/source pickers, long-line filtering, blank overscroll and overlapping controls. Failed saves retain edits, with improved recovery and exit checks across the creative apps.

### Updating and current limits

Windows x64 and Linux x86-64 public preview. The release provides both platform ZIPs and signed updates for the existing in-app updater. Settings, saves, artwork and library data are preserved. No game disks or new Android/macOS binaries are included.

Disk-art editing requires supported standalone pictures or known unpacked layouts; arbitrary compressed/protected graphics still need specific decoding. Live editing is limited to supported values. Automatic ST-to-STE conversion, general code hot reload and Windows/Linux game exports are not included.

Verified on Linux and Windows under Wine, including creative workflows, both themes, scaling, embedded playtests and signed update packages. Native Windows graphics/audio hardware testing remains outstanding.

## 1.1.538

Fixes black panels and unreadable text in SemaOS and the library on Windows. The fix also applies to other affected rendering backends and remains active after changing the interface scale.

## 1.1.537

Elite v1.01 on SuperGAU Compilation 386 gets its own profile: SemaTor tells it apart from Elite v1.3, which uses the same loader, and switches to the right options when the game is in memory. Two builds that share an options file keep each other's saved settings. 99 profiles for 75 games.

## 1.1.536

More disks run: a disk whose first file table is damaged is read through its second copy (Vectronix 910), a disk's shape comes from its boot sector when the rest is not a filesystem (SuperGAU 521), and a menu's chosen game loads right above the menu as on an ST (Blue Software 19, A-Ha Menu, Vectronix 745, Circus Games). Keyboard checks take an ST's time, so games that time their screens by them show them for as long as they should (Out Run's title and hall of fame). A save state made with a game's second disk in drive B loads in a new session and puts that disk back by itself (Gods). Profiles can tell apart two builds of a game behind the same loader (Elite v1.3 and v1.01).

## 1.1.535

Profiles: 12 new profiles cover more versions of the profiled games - Chaos Strikes Back, Stunt Car Racer on the E.M.T. compilation, Elite v1.01, F-19 v1.02, Kick Off 2 v1.4e, Starglider [a], Captain Blood (Mindscape), Hunter (Replicants), Populous II (D-Bug 078), Llamatron's menu-disk builds and Time Bandit 0.96b - and every profiled game's other editions were checked and fixed; 98 profiles for 75 games in all. A program asked for with its folder starts exactly that file (a compilation with two programs of the same name). Disk sets lettered A, B, C change disks by themselves like numbered ones (F-19 Europe). A save state that needs another disk now says which drive it wants.

## 1.1.534

Fixes. Game options and cheats beyond the 16th in a profile now work (Wizball's US edition cheats among them). A program chosen from SemaOS or a compilation starts in its own folder, so it finds its files. A profile recognised through a game's launcher or a menu waits for the game itself before it applies. Profiles load in the same order everywhere. Files whose disk chain is shorter than their listed size open as on an ST (custom Dungeon Master dungeons). Running SemaTor with --help no longer sets up a data folder. Out Run: widescreen stays on under the in-race menu, the title loads in about 15 seconds instead of 41, and on a gamepad Y starts a race / opens the menu and the right stick pauses.

## 1.1.533

Picture: SUPER ST COLOUR (F12 > Picture, per game) shows the game at 2x, 3x or 4x its pixel count: every original pixel stays, and the new pixels between two close colours take their mix, so dithered shades turn smooth while outlines and text stay sharp - on every resolution, including widescreen views. It replaces the old dither blending and smoother-gradient options. Frame generation now works at any picture size and in every mode (CPU, GPU, NVIDIA optical flow): widescreen views, medium and high resolution, opened borders and Super ST colour all get in-between pictures. AUTO HDR for the CRT cabinet turns ordinary pictures into HDR highlights on an HDR display. Colours changed in the middle of a line (Spectrum 512 pictures) appear where they belong. The CRT picture no longer softens when the F12 menu is open, while paused or in widescreen views.

Games: Enhancement profiles now cover 86 versions of 69 games - see the new list of every profile and the disk it was made for on the website. Out Run: widescreen 16:9 and 21:9, smooth 3D at 25 or 50 fps, the radio and the engine together, and the joystick works from the start. Blood Money: disk 2 goes in by itself and a second gamepad is player 2. Widescreen views for Lemmings, Kick Off, Kick Off 2 and Oids. Newly working or fixed include Civilization, SimCity, Damocles, Starglider 2, Stunt Car Racer, Pirates!, North & South, Defender of the Crown, Deuteros, Llamatron and The Chaos Engine's status panel. Multi-disk games get their next disk automatically in many more cases, a save state made on a game's second disk loads in a new session, and F12 > Disks offers a blank disk for games that save to one.

Library: When a game has several versions, SemaTor starts the one its profile was made for. The Enhanced shelf shows enhanced games kept in zips and games with cheats only. Game options and cheats are remembered reliably (they could be forgotten when a game loaded at another address), and options can be on by default.

SemaOS: A Create menu with new tools: SemaPaint (an ST pixel editor), the Maker (turn a picture, a song and a scroll text into a real Atari ST intro or a small game disk), the Code Reader, a Hardware Check that tells whether a disk would run on a real 520 ST, 1040 ST or 1040 STE, and Statistics. SemaSynth exports WAV, YM, SNDH and MP3. A second look for SemaOS in Atari's own GEM desktop style (Settings > Style). Surprise me picks a random game.

Fixes: SemaTor no longer freezes when a widescreen view is switched on with NVIDIA optical flow, and a game no longer stops when the F12 menu stays open. The VERY FAST disk loading setting is removed - games could crash on it; FAST remains.

## 1.1.532

Compatibility: hundreds more disks start or show their picture. SemaTor's 68000, floppy drive, interrupts and TOS now behave much more like a real ST - boot-sector entry registers, bus-error status, Supexec, the AUTO folder's load address, I/O access times and wait states, VBL and HBL interrupt timing, exact divide timing, DMA and WD1772 details, GEMDOS memory and wait behaviour - each measured against a reference. Newly working include the Medway Boys and Cynix protected menus (Dizzy, Creatures, Mean Machine), many Fuzion and Automation menus, OXYD on SuperGAU 355, 1st Division Manager, Marble Madness and Special Forces.

SemaOS: it no longer crashes after a while when SemaSynth and the Jukebox have both played (a tune ending shut the sound down under SemaSynth), or when you seek in a YM tune. Also: pad A opens desktop folders and icons, Compilations browse with the keyboard, taskbar buttons shrink instead of vanishing, minimised folders reopen, Details > Music shows exactly the game's tunes, saves reload for the selected game, a failed resume says so, per-game notes, and many smaller fixes.

## 1.1.531

Jukebox: tunes from the SNDH archive play again. The index kept the archive's old location, so after SemaTor was moved or installed elsewhere every tune "could not be read or unpacked" - the Jukebox now follows the archive to its new place (User/sndh or a games folder), and a missing archive is reported as missing.

## 1.1.530

SemaOS with a gamepad: the D-pad moves a focus over everything, A opens or starts, B goes back, X details, Y favourite, LB / RB switch windows, Start the menu, the right stick scrolls and its press opens a game's menu. A hint when a game waits on its title for one input. What's new after an update, with Restore my previous look. Report a problem from a game's menu. Details gathers the play count and time, the saves with their pictures, your notes, the enhancements and the game's music. New shelves: recently added, most played, never played. Next disk for games on several disks (F11 Disks, F12 Session). The joystick in the mouse port fires with the right button. Saves of disks that boot from their boot sector show in the library and Continue. Return to Genesis: Return, then 1 or 2, starts a game. Windows minimise; the Jukebox minimised is a mini player in the menu bar. An update button in the menu bar installs new releases. Each game window keeps its own sort order; Fetch all artwork from the File menu; a redesigned What's new; the question about a game not yet confirmed answers to the keyboard (Enter plays anyway, Esc goes back); a deep round of SemaOS fixes.

## 1.1.529

Dungeon Master runs again (1.1.528 showed a white screen). SemaOS shows its own icons and disk labels on every install: installs that began before SemaOS, and Linux installs made with the installer, showed stand-in shapes and blank floppies. The handwritten disk labels are in the public download. SCP flux images load, and READ TRACK reads a track as the drive does - Return to Genesis's flux dump passes its protection. Untested editions of profiled games boot from their own boot sector (Buggy Boy & Ikari Warriors shows its menu). The retro desktop is the default and the desktop icons sit in pairs that belong together; SemaOS's look settings are refreshed once, your library, saves, music and desktop folders kept. The Windows program and its update file are much smaller.

## 1.1.528

Start-up as TOS does it: the AUTO folder on every boot and AUTO programs where TOS loads them, the reset vector, the boot sector's stack, the floppy lines and sound chip as TOS leaves them, Setscreen's registers. 9-sector filesystems on 10-sector disks; the program named after the disk starts first; writes above RAM no longer stop a game. Kick Off 2, Alpha Waves, Sapiens, Crazy Boy, Rock Star and many menu disks now run. SemaOS: two-line desktop labels, fuller Help, quieter logs.

## 1.1.527

SemaOS is how SemaTor starts (the classic library is a setting away). No more freezes on Wayland when the window is covered. The Jukebox keeps playing your favourites in order. A SemaSynth crash fixed.

## 1.1.526

The public release is built on SDL3.

## 1.1.524

SemaOS's Video window: screen resolution and refresh rate, variable refresh, HDR and pointer speed.

## 1.1.521

An I/O address nothing answers is a bus error, as on a real ST: programs probing for hardware find what an ST has.

## 1.1.520

SemaTor moves to SDL3 3.4.18, carried with the app; sound through SDL3 streams.

## 1.1.519

A MIDI keyboard for SemaSynth, and Find.

## 1.1.518

Save as SNDH: SemaSynth songs as real ST tunes.

## 1.1.517

SemaSynth: A/B comparison, the song library, the screensaver.

## 1.1.516

SemaSynth makes what real ST tunes make.

## 1.1.515

Open a tune in SemaSynth without playing it first.

## 1.1.514

SemaSynth becomes a music studio.

## 1.1.513

Covers for files named by hand; favourites in the Jukebox.

## 1.1.512

Covers for every disk of a game, covers that stay put while resizing, launch sources in SemaOS.

## 1.1.511

Compatibility from a library-wide test run: disks that never started now do.

## 1.1.510

Bigger disks, a card size you choose, scroll bars that work, look-alike disks told apart.

## 1.1.509

Pictures no longer sit too high; your floppy on the handwritten labels.

## 1.1.508

Disks labelled by hand, like a copy from a mate; game cards drawn twice as fast.

## 1.1.507

SNDH tunes play live, with everything their timers do; SemaOS and the Jukebox much lighter.

## 1.1.506

The Jukebox's channel scopes, windows that stand off the desktop, typing that stays typing.

## 1.1.505

The 68000 runs on the ST's bus: counted delays, borders and raster effects land where they should.

## 1.1.504

Menu disks boot as on an ST, mouse clicks reach VDI programs, the Jukebox browses the SNDH archive.

## 1.1.503

SemaOS polished: the Jukebox rebuilt (search, filters, sort, trim, remove, shuffle/repeat, seek, the archive found by itself); every window checked and given a minimum size; compilation counts and disk numbers; David's new icons, folders, floppy cards and full-resolution logo; a new retro wallpaper. Fixed: Enter swallowed by SemaSynth.

## 1.1.502

The SNDH archive in the Jukebox (index once, add a game's tunes or all games); ICE depacking fixed and proven on 613 real files; the SNDH player plays 89% of real archive tunes (OS calls, timer interrupts); tunes inside files on disks.

## 1.1.501

SemaOS: the Jukebox plays SNDH on the 68000, unpacks LHA YM files, ICE depacking (unproven), records a game's music; a Disk Workshop (open, extract, import, delete, blank, save .st); a Program Lab (editor, 68000 assembler, put on disk and run).

## 1.1.500

SemaOS: visible, draggable scrollbars; search bars with a caret and hint on games and folder windows; Documents from the selected game's disk; Details disk line; Home/End/Page keys. SemaSynth: 32 patches, a 16-step sequencer with a piano roll, Record to WAV.

## 1.1.499

Boot sector first (TOS order; profiled games keep the program path; SEMATOR_BOOT_FIRST=0 for the old order); STOP is a wait, not an end; a stack in the TOS variable area is served by the ROM trap gate; an unhandled ILLEGAL stops with a report. Brat plays.

## 1.1.498

'Nam plays through to the campaign map: the AES counts double-clicks, the Line-A mouse position follows the AES one, headless pictures of medium/high resolution are 640x400. SemaOS: wrapped Help, richer game cards, View > Sort, window snapping.

## 1.1.497

The boot sequence: after the start program ends, the rest of the AUTO folder runs in order, then the desktop autostart (Air Strike USA, Chaos Strikes Back play through). Writes above RAM are swallowed as Hatari does; SEMATOR_STRICT_BUS=1 for the real ST's bus error.

## 1.1.496

Timer C now saves all registers around a game's timer handler, as TOS does (Dogfight and babytor's group B); default handlers for exception vectors 2-9 and the unused TRAPs; STX revision 1 and unformatted tracks accepted.

## 1.1.495

Frame generation for any size made good: scrolling scenes work (1.1.494 treated them as cuts), quality measured against the truth beats the 320x200 generator, analysis on a worker thread, medium/high resolution on the GPU with a GPU method.

## 1.1.494

Frame generation for a picture of any size: wide views, medium and high resolution get in-between pictures, the same size as the source, on the CPU or the GPU. Test build - wide views not yet run in a game.

## 1.1.493

SemaOS game windows show a search field.

## 1.1.492

Programs that call or chain to the OS's disk and critical-error hooks no longer jump to address 0.

## 1.1.491

Disks whose boot sector says 0 reserved sectors are no longer refused as an unrecognised format.

## 1.1.490

IPF disk images play (5th Gear); Angel Nieto Pole 500 gets past Space; 'Nam shows its picture; SemaOS has desktop folders, a right-click menu and icons on a grid, and windowed SemaOS's Settings button works.

## 1.1.489

SemaOS: drag the desktop icons anywhere; they stay where you put them.

## 1.1.488

SemaOS's desktop icons grouped, the Bin top right; Drives, Documents and Console off the desktop.

## 1.1.487

Programs calling the Line-A mouse and timer vectors no longer crash at $28 - 1000 Bornes runs.

## 1.1.486

A save state that will not load now says exactly why; keyboard and save-state tests up to date.

## 1.1.485

68000 bus/address error frames match the manual again; 33 silently broken tests run again.

## 1.1.484

OpenGL and Vulkan draw identical pixels through every effect; a Vulkan wrapper fault with other renderers' textures fixed.

## 1.1.483

The YM2149 no longer aliases: folded harmonics went from 16-27 dB down to 61-83 dB down.

## 1.1.482

The YM2149 envelope has its real 32 steps; release checks for the sound chip and the CRT settings.

## 1.1.481

Diagnostic runs end with the last 32 OS calls a program made and their answers.

## 1.1.480

SemaSynth is a YM2149 suite of sixteen ST-style patches; SemaOS no longer opens the Games window every time.

## 1.1.479

SemaOS: Explorer, Documents, Notes, Help and Console; Drives, Eject and Shutdown icons; drive sounds and icon size in Settings; two fixes.

## 1.1.478

SemaOS: a damaged or unusual disk in a drive window no longer crashes SemaTor.

## 1.1.477

Buggy Boy keeps its 16:9 and 21:9 views and its speeds with the game's own motion; the smooth-motion options are removed.

## 1.1.476

Buggy Boy: RUN-AHEAD MOTION removed - the picture jumped between run-ahead's guess and the real frames.

## 1.1.475

The F12 menu walk is a release check; tools/burst-check.py checks a burst the same way every time.

## 1.1.474

From the first library check: false unimplemented reports removed, the CPU's last jumps logged when it stops, log floods folded and capped.

## 1.1.473

Buggy Boy: the in-between playhead no longer goes back, and the HUD comes from the game's own frame; bursts name each in-between's source.

## 1.1.472

Buggy Boy: in-between pictures no longer jump back in time; its speed options are one choice; bursts save the game's own frame at each step.

## 1.1.471

The Tools crash is fixed; crashes leave a report in the log; enhancements are named in the log; Alt+F12 burst capture; Dragon Ninja boots.

## 1.1.470

SemaOS: David's icon set with soft shadows, the logo on the desktop with a retro shine; HFE and SCP disks; a disk report; CRT on the new frame types.

## 1.1.469

HFE and SCP disk images play; a disk report says why a disk would or would not start on a real ST; CRT on medium / high-res and border frames.

## 1.1.468

SemaOS: the retro launch scene as a live backdrop, GEM-style window chrome and buttons; the big-library check no longer lags the desktop.

## 1.1.467

SemaTor's workspace out of the ST's RAM (the top of memory is the program's, as on a real ST); left and right borders shown at full width.

## 1.1.466

Games that open the top or bottom border show their extra lines; the sync register is a real register now.

## 1.1.465

Medium (640x200) and high (640x400) resolution shown properly; checked pixel by pixel.

## 1.1.464

What a game writes to its disk is kept and loaded next time (the original image untouched); each game's files in their own folder.

## 1.1.463

The boot reaches the same instruction on every machine and run (the intro ran the machine by host time); proven identical under load, interrupt by interrupt.

## 1.1.462

CPU core reads plain memory inline, the MFP is asked less, Buggy Boy captures filtered by a bitmap; proven identical on the saved stretch.

## 1.1.461

Rewind stores only the memory that changed since the last snapshot: a third of the memory, less time, checked byte for byte.

## 1.1.460

Every game cheaper: the ST's chips serviced when due instead of after every instruction (93% fewer checks), proven identical on a 60-million-instruction stretch.

## 1.1.459

Faster for every game: adapter checks once per game, display colours once per line; Buggy Boy's rows from a table. Checked bit for bit.

## 1.1.458

Profiled and cut: rewind snapshots less than half the cost; Buggy Boy's renderer reads rows, not pixels (real tick 17.6 -> 9.6 ms here).

## 1.1.457

Run-ahead groundwork: whole-program audit of what a guess touches; interrupt statistics and the panel no longer count guessed ticks.

## 1.1.456

Run-ahead groundwork: the running machine's state in one place, a guess proven to leave nothing behind, and counters a guess could change restored.

## 1.1.455

AES: editable dialog fields (G_FTEXT / G_FBOXTEXT) were drawn blank - drawn now, and redrawn by objc_edit.

## 1.1.454

SemaOS: disk windows as on TOS; disk reads timed and sounded as a real ST drive would (motor, steps, sectors).

## 1.1.453

SemaOS: folders on disks can be opened; double-clicking a program starts it, from any folder.

## 1.1.452

GEM programs can start the next program when they end (shel_write), tested with a two-program disk.

## 1.1.451

AES: evnt_dclick, clipboard, shel_get/put, graf_rubberbox and objc_edit implemented and tested; SemaOS arrow keys without a click first.

## 1.1.450

Buggy Boy's in-between frames drawn on their own thread; SemaOS driven by keyboard or pad, and remembers its windows.

## 1.1.449

Buggy Boy: run-ahead re-predicts on a change of input, so steering reaches the picture about twice as fast.

## 1.1.448

Buggy Boy gates hold together; F12 tabs fit their content; SemaOS at the display's refresh rate; Details keeps the covers; run-ahead's gain said plainly.

## 1.1.447

Run-ahead's state and gain on the performance panel; sound no longer drops out during run-ahead guesses; SemaOS starts a .PRG on double-click.

## 1.1.446

SemaOS fast with big libraries (category windows no longer re-sort the library every frame); Xenon run-ahead no longer switches off in pauses and menus.

## 1.1.445

Buggy Boy wide view: the horizon no longer slips a pixel at the wing seams in smooth motion.

## 1.1.444

Buggy Boy smooth motion: objects reused within a pair of real frames; panel rates no longer garbage with run-ahead; run-ahead cost measured without the idle wait.

## 1.1.443

SemaOS polish: clicks no longer reach the hidden library (the top-right corner could quit SemaTor); the Bin works; menus reach every window and the selected game; maximise; Esc.

## 1.1.442

Buggy Boy smooth/remastered much cheaper and an object-cache height bug fixed; run-ahead snapshot several times cheaper; F12 Picture: CRT Simple and CRT Advanced; SemaOS pacing and cheaper shadows, clicks and frame times logged.

## 1.1.441

SemaSynth: play the YM2149 or the SemaTor synth from the SemaOS desktop, with the computer keyboard or on-screen keys.

## 1.1.440

SemaOS Jukebox and Pictures; Tiny pictures in the viewer; screenshots no longer overwrite earlier sessions' shots.

## 1.1.439

F11: Record / Replay tab and a Discord button on the main menu; the lower row fits its buttons when split.

## 1.1.438

SemaOS: drag games onto drives, type-to-search, Details and Continue windows, disk sets, accent themes and wallpaper, Spectrum 512 pictures.

## 1.1.437

SemaOS: Insert into Drive A / B with Eject (Drive B goes into the ST's second drive), a file viewer for text, Degas and NEOchrome pictures and hex.

## 1.1.436

SemaOS: fades into a game and back; covers fade in as they load.

## 1.1.435

SemaOS visual pass: glass menu bar and taskbar, vignetted desktop, rounded shadowed windows that open and close with animation, dark menus.

## 1.1.434

F12 reorganised into seven tabs (Display, Picture, Motion, Sound, Machine, Game, Tools); game-specific settings only under Game. Crop black borders is per game (Game > View), off by default.

## 1.1.433

Buggy Boy races at the ST's own speed by default (10 fps steady); FAST SPEED, ST SPEED EXACT and 60 HZ MACHINE options; SemaOS window drags paced by the display, titles fitted to their cards.

## 1.1.432

RUN-AHEAD for 50 fps games, switched on by measurement: kept while a guess fits in a quarter of a frame on your computer.

## 1.1.431

RUN-AHEAD motion setting for any game: frame generation gets the next picture early (Buggy Boy: 88 ms -> 8 ms behind the game); detects tick rate and buffering itself; leaves no trace.

## 1.1.430

Buggy Boy: remastered objects move and grow continuously until they pass the player; the tunnel is drawn again and walls sit between far and near objects - pixel-identical to the game on both test stretches.

## 1.1.429

Buggy Boy: REMASTERED OBJECTS (TEST) - sub-pixel object growth from close-up art, supersampled; run-ahead now smooths the game's alternate-tick object steps without lag.

## 1.1.428

Buggy Boy: RUN-AHEAD MOTION (TEST) - smooth motion without holding the picture behind the game (input lag as on a real ST); proven to leave no trace in the machine.

## 1.1.427

Buggy Boy: BB2 is now the adapter (wide view and smooth motion in one path, pixel-identical to the game at 4:3); smooth motion's rate estimate fixed; water drawn; LOW LATENCY MOTION option.

## 1.1.426

User data in a User folder beside SemaTor (existing data copied in once); recording status reworded and the file named in the log; no empty saves folders per library title; "Buggy Boy motion" statistics line; BB2, the rewritten Buggy Boy adapter, behind a private switch (pixel-identical to the game at 4:3; one path for wide view and smooth motion).

## 1.1.425

Buggy Boy smooth object scaling: sizes from the game's own per-type table (no shape guess), tall pictures no longer cut at capture, lamp posts follow the game's quarter-row sizes; in-between frames paced by a continuous playhead on host time (no hitch at every game frame); "motion clock" line in the session log.

## 1.1.424

SemaOS: one card per title, clicks and right-click menu, clipped covers, window animation; AES form_alert/form_do/file selector/pointer.

## 1.1.423

screenpt starts at zero (the flickering menu since 1.1.416; old states migrated); Buggy Boy in-between frames whole; SemaOS 2 part 1: AES windows and menus.

## 1.1.422

screenpt starts at zero (the flickering menu since 1.1.416; old states migrated); Buggy Boy in-between frames: HUD lines from the pass, gate rows whole.

## 1.1.421

SemaOS polish: resize from any edge, X close box, category windows with the Enhanced glow, compilation folders, right-click menu, the logo.

## 1.1.420

Native picture is the frame at the last VBL (no more half-drawn menus at high frame caps); Buggy Boy wings keep objects whole in the HUD lines.

## 1.1.419

SemaOS 1: Boot into SemaOS, a GEM-shaped desktop drawn by SemaTor - Games, Drives, Settings, windows and menus.

## 1.1.418

SemaTor's guest workspace moved from $e000-$ffff to the top of RAM; programs load where TOS does. Switchblade (Replicants) plays.

## 1.1.417

OS audit: deferred Setpalette, GEMDOS/XBIOS clocks in step, keypad key tables, CON:/AUX:/PRN: names and negative handles; honest sweep labels.

## 1.1.416

OS audit fixes: Getmpb/BPB memory collisions, root DTA, VBL stub to TOS's contract (vblsem, vbclock, screenpt to hardware).

## 1.1.415

Disk sets by trailing number; automatic insertion into drive B. War in Middle Earth plays with all three disks.

## 1.1.414

GEMDOS 8.3 names keep their extension; Line-A honours the program's screen variables; a stand-in Line-A font; Malloc(-1) capped at a 1 MB ST's. War in Middle Earth comes up.

## 1.1.413

F12 from a pad no longer opens and shuts on one Start press.

## 1.1.412

Buggy Boy wings: objects from the game's sprite calls (no more sky-to-road posts); Lombard WIDE WINDSCREEN 21:9 (TEST).

## 1.1.411

Desktop library add-on card (diagonal gold-green glow, ADDON plate); no frame generation on Wizball's wide picture.

## 1.1.410

Sharp sampling for the 3x picture (Lombard road, Wizball art) - the overall blur is gone.

## 1.1.409

Library: add-on games get ENHANCED on top, ADDON below and a diagonal gold-green glow; Wizball pack tiles' holes filled at load.

## 1.1.408

Lombard RAC Rally: HIGH RES ROAD (TEST) - the road redrawn at 3x from the game's own road spans, no art.

## 1.1.407

Wizball: SemaTor draws objects from the table as the game drew them (copied when its object routine returns) - no more split enemies at the join.

## 1.1.406

F11 Restart on the bottom bar; Wizball: ground in front of tile bases from row 15, edge strips draw only culled objects, tiles stay within the map.

## 1.1.405

Wizball intro: the overlaid face, ball and mask parts are the pack's redraws too.

## 1.1.404

TOS call sweep (132 checks; Getmpb and Ssbrk added); the whole core suite passes.

## 1.1.403

Wizball: no camera hold at a level's edge - the backdrop and fixed pieces stay put; a side view past the map shows backdrop only.

## 1.1.403

Wizball: no camera hold at a level's edge, solid cans/pipes in the side views; 68000 bus-error frame I/N bit fixed.

## 1.1.402

Wizball wide view rebuilt: the game's routines draw only floor and tiles; SemaTor draws every object from the object table.

## 1.1.401

Wizball: the intro's wizard frames are the pack's redraws; the intro no longer passes as a level (1.1.400 fault).

## 1.1.400

Wizball: no extra ball at a level's edge (the middle is the game's own frame moved); wide view and art through the warp's fades.

## 1.1.398

Wizball: landscape = floor and tile routines only; the Wizball and pickups are sprites (no copies in the wings, not under the ground band).

## 1.1.397

Sealed, signed add-on packs; Wizball: front ground band before the landscape, no enemy-culling strip beside the score panels.

## 1.1.396

Artwork add-ons are sealed, signed .semapack files (encrypted; SemaTor loads only packs signed with its key).

## 1.1.395

Glowing green ADDON tag for games with artwork add-ons; Wizball side-view drawings no longer fail (OS traps return at once in a drawing).

## 1.1.394

Artwork add-ons are Discord-only (F12 > Advanced > Get add-ons on Discord; "On / no pack"); Getbpb from a mounted image.

## 1.1.393

Dungeon Master artwork add-on in the private package; F12 audited across every game (EXPERIMENTAL badge, SWIV help).

## 1.1.392

F12 > This game holds every game option (motion options moved in; test-thisgame390); Wizball pack: level art only, banded pebble ground.

## 1.1.391

Wizball side views: no more failing drawings (shot list no longer blanked), fixed pieces and the Wizball kept out of the wings, the moon stays put at a level's edge.

## 1.1.390

Sound: a device left paused with nothing holding it is resumed (Lombard alt-tab).

## 1.1.389

Wizball: side views drawn as landscape plus objects (no more wiped cans/pipes); pack sprites keyed by graphics address; the Wizball's picture turned per frame.

## 1.1.388

Wizball art pack: no more dark cans and towers (tile pixels without a colour step keep their own colour); floor past the map's end replaced by the pack's ground.

## 1.1.387

Wizball: no holes round swapped sprites, left-side spawns at the wide edge, pause keeps the wide picture, tune volume as gain; tests brought up to date.

## 1.1.386

Wizball: no more last-level objects over the title and credits pages (the 3x art layer only on the adapter's own frames).

## 1.1.385

Wizball ADD-ON MUSIC on a second virtual YM2149; level-start wing fix; F12 hover and steady height.

## 1.1.384

Wizball art pack at 3x: the pack's tiles and sprites over its panoramas and sky.

## 1.1.384

F12 holds its height across a topic's parts; menu text size fixed; the Wizball pack ships in the private package's Add-ons folder.

## 1.1.383

Wizball art pack, stage A: panoramas, ground, twinkling sky, galaxy and exact colour restore behind the landscape.

## 1.1.382

Lombard's frame-rate modes really switch now (patches can keep their own variables: work = ...). Every profile checked for the same trap.

## 1.1.381

F12: each topic's parts in a list on the left (like the CRT studio), the chosen part on the right.

## 1.1.380

Lombard RAC Rally profile: SMOOTH MODE (50 fps), STEADY 25, ARCADE SPEED, half-speed clock. Zynaps STEADY SPEED.

## 1.1.379

Xenon layered sound: no louder music after fire presses (the music ghost only fills channels an effect owns). Zynaps: INFINITE LIVES.

## 1.1.378

Beam simulation in F12; F11-style save naming; toasts in the menus' type; SESSION header; HUD fits short windows.

## 1.1.377

HUD: frame-time graph against the display's own pacing, 1% low, recent counts, wrapped values; sound dropouts counted only while playing.

## 1.1.376

Wizball: the wide camera stops at a level's ends; the drifting hills no longer flicker.

## 1.1.375

Wizball: the laser shows again with the drifting backdrop and in redrawn frames.

## 1.1.374

F12 sub-pages in the new style with Back; buttons in columns; CRT studio header trimmed; Wizball wing shots fixed; backdrop capture.

## 1.1.373

F12 in five tabs; game motion beside frame generation; This game in sections; one-line help where it fits.

## 1.1.372

Wizball: no see-through holes in the wings, no junk past the map's ends, shots redrawn, shadows and layers in the wings.

## 1.1.372

F12 sized to its tab bar and topic, Picture in columns, Display grouped; Fire and Ice score bar centred again; Wizball wing holes, level-start garbage and missing shots fixed.

## 1.1.371

F12 sized to its content, tiles for settings and compact buttons for actions; F11 saves, rewind and disks compact.

## 1.1.370

Wizball looks restyled: pixel shadows, palette-step explosion light on surfaces only, dithered backdrop join.

## 1.1.369

Wizball EXPLOSION LIGHT (TEST): explosions (object types $18-$1f) light the landscape and backdrop.

## 1.1.368

Wizball layer map; SMOOTH OUTLINES and COLOUR FADE-IN (TEST); profiles hold 24 options.

## 1.1.367

Wizball SUB-PIXEL SCROLLING (TEST) with smooth motion; spawn edge moved into the adapter.

## 1.1.366

Wizball looks: BACKDROP PARALLAX, GROUND SHADOWS, FULL-WIDTH PANELS (all TEST).

## 1.1.365

Wizball: pickups stay until they leave the wider view; smooth motion draws the Wizball and Catellite with the game's own sprite routine (no grey square); wings at level ends.

## 1.1.364

Wizball SMOOTH MOTION; enemies arrive at the wider view's edge; 21:9 buffer overrun fixed (560 wide); wide/smooth frames only in play.

## 1.1.363

Wizball wider view: floor strips reach the edges, the backdrop continues instead of repeating.

## 1.1.362

Wizball: WIDER VIEW (TEST) 16:9 and 21:9 - the game's own draw list re-run with the camera moved. Zynaps needs its disk.

## 1.1.361

F12 check at all text sizes: ALL GAMES tags complete, no clipped names, two-line help, correct tab notes, mouse wheel and Home/End.

## 1.1.360

Performance HUD (Shift+F12) with 68000 work rate, ST blank rate, sound buffer, drive and patch state; open the log folder from F12; docs/DEBUG.md and a list of every debug switch.

## 1.1.359

Performance HUD (Shift+F12): FPS and frame times, the game's own speed, CPU boost and STEADY SPEED at work, motion, sound and disk, beside the picture. F12 Display order list fixed.

## 1.1.358

F12 deep check: help of its own on every tile, calmer values, resets ask twice, Effects / speech volume for every game.

## 1.1.357

Buggy Boy SMOOTH MOTION moves at an even speed: one more game frame of look-ahead evens out the game's 1-2-1 steps (frame-to-frame speed varies ~7% instead of 2x).

## 1.1.356

F12 laid out like F11: topic bar at the bottom, F11's tiles and help line; This game gets Reset to the shared settings and Use for all games; one Escape leaves the CRT studio.

## 1.1.355

F12 settings are tiles like F11's; F12 rises from the bottom with a slide; Enter picks a setting up and Left/Right change it.

## 1.1.354

F12 rebuilt like F11: tabs for Display, Picture, Smoothness, This game, Speed, Sound and Advanced; every setting in one place; ALL GAMES tags; the CRT studio unchanged.

## 1.1.353

Buggy Boy widescreen: walls near the end of Offroad drawn properly in the wings; no extra buggies beside yours when jumping.

## 1.1.352

Buggy Boy: SMOOTH MOTION lets the game draw every object again (no gate or board glitches); continuous object scaling moves to its own experimental option, off by default.

## 1.1.351

Buggy Boy SMOOTH MOTION: objects no longer hop at the game's rate; gates drawn in the game's order; no extra buggies when jumping in widescreen; lamp heads kept at the old edge.

## 1.1.350

Buggy Boy SMOOTH MOTION: roadside objects grow smoothly as they approach - SemaTor draws them itself, scaled between the game's own sizes.

## 1.1.349

Buggy Boy widescreen: posts, gates and roadside objects stay whole as they cross into the wide area.

## 1.1.348

F12 > Speed & loading: CPU boost and Steady speed get proper names and help; Disk loading is no longer labelled Native replacements.

## 1.1.347

Buggy Boy: the HUD no longer loses its black parts (map outline, flag numbers, gear knob) in widescreen with SMOOTH MOTION.

## 1.1.346

STEADY SPEED now covers Fire and Ice: busy scenes keep the game's own pace (late frames 59 to 2 in the same play-through).

## 1.1.345

STEADY SPEED (F12 > Speed & loading, on by default): busy scenes no longer slow the game - the CPU gets more time just for those frames. Buggy Boy's race runs at its designed 12.5 frames a second. Buggy Boy SMOOTH MOTION draws a picture for every screen refresh, up to 240 Hz.

## 1.1.344

Buggy Boy SMOOTH MOTION: every step of the roadside objects glides now, all twelve rows, including the step where the game moves its object grid on a row.

## 1.1.343

Buggy Boy SMOOTH MOTION: road stripes slide continuously and roadside objects glide towards you instead of stepping; the game's own frames are unchanged.

## 1.1.342

Buggy Boy SMOOTH MOTION (test): in-between frames drawn by the game's own code, at 4:3 or with the wider views; speed, timing and controls stay original.

## 1.1.341

Game profiles can make one option change several places at once, written together or not at all - ready for Lombard RAC Rally's smoother frame-rate modes. Wizball's cauldron cheat uses it.

## 1.1.340

CPU BOOST in F12 > Speed & loading (AUTO, OFF, 2X to 16X): more CPU per frame while the ST's clocks, sound and disk keep real time. Profiles can link several patches into one option and make options exclude each other. Wizball gets PAUSE+C FILLS CAULDRON.

## 1.1.339

Buggy Boy in 16:9 and 21:9 (test, F12 > Enhancements > WIDER VIEW): the road, horizon and roadside objects carry on beyond the old screen edge, drawn by the game's own code on a private copy of its memory, with the original speed, timing and controls.

## 1.1.338

WINDOW SIZE replaces WINDOW SCALE: 1.0x is 1200 x 800, in steps of 0.1x from 0.5x to 3.0x. SemaTor checks for updates every time it starts, and falls back to the releases page when GitHub's API is busy. New profiles for Wizball (seven cheats) and Buggy Boy (infinite time). Fire and Ice in 16:9 and 21:9 moves the score bar to the far left and draws the world beside it (test).

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

The historical public baseline for these notes. The entries above cover subsequent builds; version numbers do not imply that every intervening number was publicly released. No separate change records for 1.1.231–1.1.299 are present in this source history.
