# SemaTor 1.1.604 — Three desktop homes, Amiga themes and compatibility fixes

- SemaOS, SemaDrive and SemaBench share Continue actions, saved-game cards, notes and correctly scoped Find results. Amiga Details opens its own settings and imported soundtrack albums. ST drive commands stay on the ST desktop.
- All five Amiga looks are included: SemaBench Night, Blue Four, Dark Violet, Grey Bevel and Moonlit Workbench. Moonlit scenery and Dark Violet stars have optional GPU animation with a still fallback. New ivory Amiga disks support printed and marker labels; SemaDrive now respects printed labels too.
- Hunter retains enhanced scenery behind its hover inventory. Controls offers a per-game Keyboard mode: SemaTor or Native ST; Hunter defaults to Native ST to avoid clashes with original game keys.
- Simulcra improves object and shadow continuity, including far geometry at maximum 8x draw distance. This is picture-only; no new general refresh-rate certification is claimed.
- Amiga Jukebox scans the configured games folder and subfolders for compatible game soundtracks and modules, preserving existing albums and avoiding duplicates.
- Amiga compatibility corrections cover 68000 instruction fetch, audio DMA completion, Workbench/copper ownership, graphics masks, fonts, DOS lists and shell startup. The core remains experimental; coverage varies by game and edition. Incompatible older Amiga state layouts are rejected rather than loaded unsafely.
- Shared loader identity now requires disk proof, preventing unrelated ST games using the same menu loader from receiving the wrong game identity. Shared phone libraries also retain their system's desktop styling and import scope.

Update from 1.1.603 for the larger theme package. Users on older versions can install the full public-preview ZIP, preserving their User folder. No games are included. Android and Spectrum Next test builds remain separate private distributions.
