# SemaTor changelog — 1.1.300 to 1.1.320

Windows x64 and Linux x86-64 desktop preview. Normal optical-flow modes remain available. No new Android or macOS binary is included.

**Upgrading to 1.1.320:** install the full platform ZIP once, preserving Games, Media and User. Older update helpers cannot accept the expanded artwork file list. The new helper supports the accompanying signed `.supdate` packages.

Compatibility remains game- and disk-edition-specific. Bounded test runs are not full-game certification; some tested titles still have graphics or loader problems.

## 1.1.320

Fixed Vulkan descriptor exhaustion during busy rendering and optical-flow frames. Improved protected-disk reading and library rescans; corrected Lombard Rally data-disk file lookup and Arkanoid II launcher selection. Added enhanced-edition checksums to the game guides. Dungeon Master now repeats the supplied dark stone background seamlessly, with softer torch lighting. Public packages include the latest artwork and expanded signed-update support.

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

## 1.1.300

Starting point for this changelog; subsequent compatibility, interface and packaging changes are listed above.
