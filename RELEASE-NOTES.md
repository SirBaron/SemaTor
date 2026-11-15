# 1.1.610 — Clearer Wi-Fi sharing and Android game controls

Wi-Fi Transfer is easier to reach and use: a focused desktop popup, a full-screen phone view, and a matching launch icon on Atari ST, Mega Drive and Amiga. Guided pairing, clear game selection and explicit transfer decisions keep the next step obvious.

Android SemaDrive and Amiga use the shared touch-control and layout-editing interface. The shared overlay renderer also handles Vulkan-only presentation, restoring controls that were missing from the game view.

Android builds remain private tests; no physical-device transfer or performance validation is claimed.

## 1.1.609 — Resumable desktops and safer interrupted music scans

- SemaOS resumes the last desktop you visited. Each system keeps its own window positions, sizes and minimized state, including empty desktops; Explorer windows retain their stacking order.
- If a library scan is interrupted, completed soundtrack checks are retained. Unfinished generated album sources are checked again next time. New or changed files are still checked.
- Default desktop icons use compact visible spacing, so hidden tools leave no gaps. Line Up fills the available height before starting another column. Saved custom positions take priority; Reset affects only the current desktop.

## 1.1.608 — Amiga copper skies and reliable library scanning

- Drag the Jukebox divider to resize the game-name sidebar in every music system. The width is remembered; double-click restores the default.

- Amiga's moving desktop backgrounds now use a richer AGA-style copper sky, replacing the three broad blue bands while retaining crisp pixels and the existing stars and bobs.
- Game-library scans checkpoint completed discoveries, including interrupted scans and unavailable folders. Unchanged soundtrack sources are cached so routine checks do not repeatedly open the same disks.
- Library scanning distinguishes disk checks, soundtrack checks, album/track preparation and saving. Preparing Amiga game music can involve running the game's own player; cancellation now interrupts that startup work.
- Xenon's obsolete layered-music control is removed from the menu and old saved layered settings are ignored. Modern Sound Engine and the separate 60 Hz music clock remain available.

Windows x64, Linux x86-64 and Linux ARM64 packages and signed updates. No games included. Android APK/AAB remain private; no Play Console upload.
