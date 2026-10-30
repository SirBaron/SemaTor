# SemaTor 1.1.587 — A clearer Creator studio, faithful hardware checks and library repairs

Changes since public **1.1.586**. This update concentrates on desktop authoring, clearer editing workflows, native-game correctness and reliable disk/library handling.

- Damaged SCP disk images now reject out-of-range track and flux offsets safely. Failed magnetic-image decoding also releases its temporary storage.

### Maker: desktop workspaces and navigation

- Redesigned the project dashboard, workspace pages and project library with clearer grouping, quieter panels and useful shortcuts in both Violet and GEM themes.
- Replaced text dropdown markers with proper menu indicators. Improved page headings, spacing, responsive layouts and Build feedback.
- The project library has dedicated filters for rooms, scenes, artwork, code, rules, types and sounds. Search includes named modules, object/game code and disabled rule drafts.
- Exposed the complete artwork bank, all 48 code units and all 64 rules in navigation. Late pages and filtered lists select the right asset after project changes.
- Rebuilt the Code page around the editor: more visible lines, a line gutter and status, tools alongside on wide desktops and below on compact windows. Code-unit controls are paged to keep the editor in view.
- Code editing adds block indent/outdent, automatic indentation on Enter and Ctrl+/ to toggle SemaBASIC or assembly comments. Selected code is preserved, full-buffer edits are atomic and each block edit supports Undo.
- Fixed overlapping command IDs that could make ordinary Code commands select an unrelated unit.
- Object properties can open or create each type event's SemaBASIC code, retaining the correct owner and existing source.
- Object types now show the objects you have defined, with unused slots available on demand. New type creation and duplication include clear capacity checks; duplication copies the type's rules and event code together and supports a single Undo.
- Fixed module shortcuts opening the wrong Code control, sprite selection stopping at the original bank and room-audio panels stacking unnecessarily on wide desktops.
- Fixed rule selection, paging, reordering and room duplication/remapping that still assumed the old 32-rule limit.
- The sprite workspace adds independent animation preview, onion skin, grid controls and frame reordering, with Undo and responsive layouts for all supported sprite sizes.

### Native Creator games

- Fixed winning and losing pictures that could remain erased, incomplete or hidden by the player's damage flash.
- One-screen arcade games now present completed buffered pictures, preventing active bullets from disappearing between erase and redraw. The extra screen buffer is included in the target memory budget.
- Fixed disappearing sprites when a fixed-screen game draws text or graphics in its Draw event. Completed pictures are presented from a hidden screen, persistent drawings keep their existing behaviour and game logic follows the native field clock. The additional memory is included in build limits.
- Added the SemaBASIC `SOLID(x, y)` terrain query. It uses world pixel coordinates, follows live `MAP` changes and treats points outside the room as blocked.
- The two-player starter now checks the second player's corners against painted internal walls, including diagonal sliding.
- Build failures remain readable on the Build page, with navigation back to the offending rule or source line.

### SemaPaint and palette editing

- Refined the painting workspace, tools, palette and preview presentation.
- Added pixel-level grid support and clearer zoom/grid controls for ST-resolution artwork.
- Exposed the ST's 512-colour and STE's 4,096-colour choices while retaining the indexed palette limits of the selected picture mode.
- Separated adding a colour from editing an existing palette entry. Used slots and available capacity are visible; changing a used entry clearly affects the pixels that reference it.

### SemaOS, Capture Gallery and Hardware Check

- Reworked Capture Gallery's composition and browsing workspace, with clearer framing, caption and export controls.
- Refined the top menus, removed duplicated View/Create app destinations, added keyboard navigation and kept long menus reachable on small windows.
- Redesigned Hardware Check and clarified the difference between observed activity, estimates and physical-machine verification.
- Hardware Check now enforces the selected RAM boundary for CPU reads, writes and instruction fetches, device transfers and OS file buffers. A 512 KB test runs with the 512 KB boundary enforced.
- Auto Space now uses emulated time, reliably pressing at intervals during the test. Previously its instruction-based timing could put every press after the run had ended.
- Restored Hardware Check’s captured-screen preview by decoding its PPM output on desktop and Android. In-memory picture decoding now uses the same pixel limit as file decoding.
- Explorer refuses overlong paths instead of silently navigating to or exporting a truncated filename.

### Games, Android and library reliability

- Fire and Ice's recognized ICS edition detects its initial DATA disk request directly and inserts the uniquely matched disk 2 earlier. The game's Space/Fire confirmation remains under the player's control.
- Next disk follows disk numbers among exact companions and wraps to disk 1. Missing or ambiguous twins leave the current disk inserted; loose same-title variants and save disks are excluded.
- Refined companion matching for secondary Disk A/B labels while preserving edition/crack identities. Android provider-only paths are covered in both directions.
- New games start with Frame Generation Off; an explicitly saved choice remains in effect.
- Fixed Rick Dangerous 2's Android title-screen input route and Double Dragon's Smooth Motion visibility during enemy death flashing.
- Unreadable or incomplete linked-folder scans retain unavailable catalogue entries and favourites until access returns, instead of treating the missing listing as an empty folder. Incomplete scans do not replace the saved catalogue.
- Linked folders consistently remain read-only with Android All files access as well as the document provider. Explorer still allows copying files out to a writable folder.
- Android disk copying rejects incomplete or changed-size provider streams and cleans up partial files. Long Unicode filenames are shortened on complete characters within the filesystem byte budget, keeping their disk extension.
- Android folder operations recover cleanly after Java allocation/provider exceptions, releasing temporary references and rejecting incomplete metadata instead of carrying the failure into later reads.

Validation includes automated desktop, native 68000 and host-side Android checks. Physical-phone and real ST/STE verification remain pending.

See the [Creator tools guide](https://sirbaron.github.io/SemaTor/creator.html) for the updated workspaces and current limits.
