# Sega cartridge enhancements in SemaTor 1.1.619

Open **F12 → Game options → Enhancements** while playing to find the cartridge’s picture, gameplay and direct-control options. On Android, open **Game options** from the in-game menu. **Music volume** and **Sound effects volume** are under **Settings → Sound** on eligible Mega Drive editions. Sega cartridge sessions in this release have no built-in per-game cheats. The Altered Beast full-stage setting is an optional gameplay rule in Enhancements.

The SHA-1 values below identify the cartridge data SemaTor loads. For a ZIP, match the supported cartridge inside the archive. Mega Drive SMD images are deinterleaved and their copier header is removed. Recognized 512-byte copier headers on Master System and Game Gear cartridges are stripped before matching. Exact SHA-1 matches gate the listed game enhancements, with an additional size check for Sonic 3, Sonic & Knuckles and their combined cartridge and a system check for Master System and Game Gear direct controls. Names in the **Dump label** column are catalogue labels for bytes with the same SHA-1. Your file can have a different name. Labels are from the MAME software lists unless a row names another source. [Mega Drive / Genesis](https://github.com/mamedev/mame/blob/master/hash/megadriv.xml) · [Master System](https://github.com/mamedev/mame/blob/master/hash/sms.xml) · [Game Gear](https://github.com/mamedev/mame/blob/master/hash/gamegear.xml)

A cartridge with a different hash may still play and appear in the library.

## Mega Drive / Genesis

**Widescreen** starts Off. The table lists the choices as shown in the running game. Supported scenes expand within the original maps, and a fixed or unsupported scene can return to its native framing. Where the game has wider object activation, it follows the Widescreen choice automatically. **Frame generation** is a shared display option in **Settings → Display & motion**. The title-specific **Smooth motion** toggle is available in Road Rash II. The separate volume sliders alongside each supported audio edition control the original soundtrack and effects independently. Both start at 100%.

The [public game catalogue](https://sirbaron.github.io/SemaTor/games/index.html) lists 29 widescreen-capable Mega Drive entries plus OutRun. The options below also cover the Europe edition of Thunder Force IV, the independent audio controls in OutRun, and cartridge-specific controls outside the catalogue.

<a id="md-altered-beast"></a>

### Altered Beast

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| Europe / USA (MAME label) | `mpr-12538f.ic1` | `38945360d824d2fb9535b4fd7f25b9aa9b32f019` | Widescreen (Off / Fit window) · Hard mode: full stage · Separate music and effects · Battle music · Music volume and Sound effects volume |

MAME confirms the European cartridge for this dump label. **Hard mode: full stage** skips optional early boss encounters for both players. **Separate music and effects** enables the two volume sliders and **Battle music** (Default themes, Boss music, Beast theme). The last two choices preserve stage music through transformation and switch themes at the actual boss fight.

<a id="md-road-rash-ii"></a>

### Road Rash II

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe, v1.2 | `road rash 2 rr206.bin` | `9afea43ed627671b50dd4a2abdd043b235414b91` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume · Smooth motion |

**Smooth motion** is an Off / On toggle. Its Vulkan mode draws in-between pictures for supported racing scenes and adds scene latency. The original race simulation and audio timing are preserved.

<a id="md-sonic-the-hedgehog"></a>

### Sonic the Hedgehog

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe, original revision | `MPR-13913-F.ic1` | `6ddb7de1e17e7f6cdb88927bd906352030daa194` | Widescreen (Off / Fit window) · Music volume and Sound effects volume |

Regular stages widen inside their level bounds. The rotating special-stage maze is centred.

<a id="md-sonic-the-hedgehog-2"></a>

### Sonic the Hedgehog 2

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| World, Rev A | `mpr-15000a w99.u1` | `8bca5dcef1af3e00098666fd892dc1c2a76333f9` | Widescreen (Off / Fit window) · Music volume and Sound effects volume |

The special-stage halfpipe keeps its original framing. The Chemical Plant and Aquatic Ruin backdrops extend into the wide margins.

<a id="md-dynamite-headdy"></a>

### Dynamite Headdy

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe | `mpr-16990-u.ic1` | `e843decdff262791b1237f1545f5b17c56712d5f` | Widescreen (Off / Fit window) |

Picture only, capped at 16:9. Locked rooms and boss arenas keep native framing.

<a id="md-golden-axe"></a>

### Golden Axe

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| World v1.1 | `mpr-12806a s33.ic1` | `2ce17105ca916fbbe3ac9ae3a2086e66b07996dd` | Widescreen (Off / Fit window) · Music volume and Sound effects volume |

Supported scrolling areas widen within the map bounds.

<a id="md-golden-axe-ii"></a>

### Golden Axe II

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| World | `mpr-14272 w39.ic1` | `31f12a21af018cdf88b3f2170af5389b84fba7e7` | Widescreen (Off / Fit window) · Music volume and Sound effects volume · Polished floor reflections |

**Polished floor reflections** adds faded player and enemy reflections on the throne-room floor.

<a id="md-streets-of-rage"></a>

### Streets of Rage

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| Bare Knuckle: Ikari no Tetsuken / Streets of Rage (World, Rev A) | `mpr-14125a-sm.ic1` | `731cdf182fe647e4977477ba4dd2e2b46b9b878a` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Scrolling stages widen within their authored bounds. Fixed lift scenes and transitions keep their authored framing.

<a id="md-streets-of-rage-2"></a>

### Streets of Rage 2

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `streets of rage 2 (usa).bin` | `8b656eec9692d88bbbb84787142aa732b44ce0be` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Supported scrolling stages widen within their map and camera bounds. Fixed rooms keep their original framing.

<a id="md-streets-of-rage-3"></a>

### Streets of Rage 3

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `streets of rage 3 (usa).bin` | `40a33dd6f9dab0aff26c7525c9b8f342482c7af6` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Supports selected routes and encounters. Fixed rooms and victory scenes retain their framing.

<a id="md-shinobi-iii"></a>

### Shinobi III: Return of the Ninja Master

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-15674-f.u1` | `1e07d7998e3048fcfba4238ae96496460e91b3a5` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Supports scrolling scenes and selected boss encounters. Small rooms and the final arena retain their original bounds.

<a id="md-gunstar-heroes"></a>

### Gunstar Heroes

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-15813 t59.u1` | `7721e302555f16e3242ad4a47ed87a1de1882122` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Supports scrolling gameplay scenes. Dialogue and fixed fights retain original framing. Supported scenes can contribute actor pose data to the shared Frame generation option.

<a id="md-castlevania-bloodlines"></a>

### Castlevania: Bloodlines

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-16380 w42.u1` | `4809cf80ced70e77bc7479bb652a9d9fe22ce7e6` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Verified widescreen coverage is for John Morris route checkpoints. Transitions and narrow rooms retain native framing.

<a id="md-rocket-knight-adventures"></a>

### Rocket Knight Adventures

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `rocket knight adventures (usa).bin` | `49634bb09c38fa03549577f977e6afb6cebaac48` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Enemies remain active across supported wide scrolling areas. Fixed shafts and scripted departure scenes retain native framing.

<a id="md-aladdin"></a>

### Aladdin

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-15750-s.ic1` | `d21c085b8429edc2c5092cd74ef3c36d01bf987f` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Supports scrolling gameplay. Abu bonus rooms, Carpet flight and scripted transitions retain native framing.

<a id="md-sonic-the-hedgehog-3"></a>

### Sonic the Hedgehog 3

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA, 2,097,152 bytes | `mpr-16263 w43.ic1` | `75e9c4705259d84112b3e697a6c00a0813d47d71` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Widescreen applies to supported regular stages. Special stages and fixed screens retain their native views.

<a id="md-sonic-knuckles"></a>

### Sonic & Knuckles

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| World, 2,097,152 bytes | `mpr-16910-u.ic1` | `88d6499d874dcb5721ff58d76fe1b9af811192e3` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

Widescreen applies to supported regular stages. Special stages and fixed screens retain their native views.

<a id="md-sonic-3-knuckles"></a>

### Sonic 3 & Knuckles

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| Combined lock-on image, 4,194,304 bytes | `Sonic & Knuckles + Sonic The Hedgehog 3 (USA).bin` ([TASVideos](https://tasvideos.org/Games/127/Versions/View/95)) | `cfbf98c36c776677290a872547ac47c53d2761d6` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |

The combined cartridge has its own exact match. Supported regular stages include Sky Sanctuary.

<a id="md-lightening-force-thunder-force-iv"></a>

### Lightening Force / Thunder Force IV

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| Lightening Force — USA | `mpr-15210-s.u1` | `ab5bd9ddbfc07d860f44b9c72d098aef2581d1d8` | Widescreen (Off / 16:9 / 21:9 / Fit window) · Music volume and Sound effects volume |
| Thunder Force IV (Europe) | `mpr-15209-sm.u1` | `ecbc2bfc4f3d8bbd46b398274ed2f5cc3db68454` | Music volume and Sound effects volume. Original framing. |

The USA edition widens supported stages, including reverse scrolling. Boss and ending sequences follow their authored bounds.

<a id="md-outrun"></a>

### OutRun

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe | `mpr-14171a w01.u1` | `95d2055ffd679ab19f0d4ca0af62a0d565bc258e` | Music volume and Sound effects volume. Original framing. |

<a id="md-vectorman"></a>

### Vectorman

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA, Europe | `mpr-18330-u.ic1` | `57a64d08028b539dc236a693d383f2e1269a5dd4` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

The wider view includes the level’s own map and objects. Title and story screens stay 4:3.

<a id="md-vectorman-2"></a>

### Vectorman 2

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-19092-u.ic1` | `c5adca10408f055c0431e1ffc01d4fbab53ade01` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

The wider view includes the level’s own map and objects. Title and story screens stay 4:3.

<a id="md-ristar"></a>

### Ristar

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe, September 1994 build | `mpr-17288-f.ic1` | `1d15ff596dd4f3b2c1212a2e0c6e2b72f62c001e` | Widescreen (Off / Fit window) |

The wider view stays centred. Fixed and special scenes retain their original framing.

<a id="md-earthworm-jim"></a>

### Earthworm Jim

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `earthworm jim (usa).bin` | `a544211d1ebab1f096f6e72a0d724f74f9ddbce8` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

The wider view applies to supported scrolling stages.

<a id="md-kid-chameleon"></a>

### Kid Chameleon

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe | `mpr-14557 w29.u1` | `28b904000b2863b6760531807760b571f1a5fc1d` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

Picture only, capped at 21:9. The original game already activates objects beyond the native viewport.

<a id="md-sparkster"></a>

### Sparkster

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `sparkster (usa).bin` | `d6e2f4aa87633aeea2ec1c05a6100b8905549095` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

The wider view applies to supported scrolling stages.

<a id="md-mickey-mania"></a>

### Mickey Mania: The Timeless Adventures of Mickey Mouse

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA | `mpr-17086-u.ic1` | `20779867821bab019f63ce42e3067ffafb4fe480` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

The wider view applies to supported scrolling stages.

<a id="md-ecco-the-dolphin"></a>

### Ecco the Dolphin

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe | `mpr-15265-sm.u1` | `2cad130f3118c189d39fd1d46c5c31a5060ce894` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

Picture only, capped at 21:9.

<a id="md-toejam-earl"></a>

### ToeJam & Earl

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| World (Rev A) | `mpr-14236a-h.u1` | `85e8d0a4fac591b25b77c35680ac4175976f251b` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

Supported map views widen up to 21:9.

<a id="md-sonic-3d-blast"></a>

### Sonic 3D Blast

| Cartridge edition | Dump label | SHA-1 | Options |
| --- | --- | --- | --- |
| USA / Europe / Korea | `Sonic 3D Blast (USA, Europe, Korea) (En).md` ([No-Intro label cross-reference](https://romhackplaza.org/translations/sonic-3d-blast-spanish-translation-genesis/)) | `89957568386a5023d198ac2251ded9dfb2ab65e7` | Widescreen (Off / 16:9 / 21:9 / Fit window) |

Supported map views widen up to 21:9.

### Direct pointer and paddles

These Controls switches start Off and are saved for the matching cartridge. Move the mouse or drag on the playfield to aim. Use the original pad for movement and menus whenever the game leaves its pointer-controlled scene.

| Cartridge edition | Dump label | SHA-1 | Option and behaviour |
| --- | --- | --- | --- |
| Devilish: The Next Possession (USA) | `mpr-14669-s.ic1` | `bc6f346a162cf91a788a88e44daa246d3d31ee8b` | **Direct paddles** steers the lower bat during one-player play. Left and right click use the original C and A formation changes. |
| Populous (USA) | `populous (usa).bin` | `89907c4ba4fd9db4e8ef2271c0253bb0e4b6d52d` | **Direct pointer** moves the original hand on the playfield, minimap and interface while the cursor is active. Left and right click use C and A. |
| Two Tribes: Populous II (Europe) | `mpr-15652-s.u1` | `556a79febff1fe4beb41e4e8a2629ff02b20c38f` | **Direct pointer** targets selectable corners in the standard terrain view. Left and right click use A and B. |

### Automatic light-gun selection

**Settings → Controls → Light gun** defaults to **Auto**. SemaTor reads the exact 14-character cartridge product code to select the device, including the trailing spaces shown as `␠` in the table. Point with the mouse or left stick and fire with the left mouse button. Aim away from the picture to reload in games that use off-screen reloading.

| Cartridge | Product code | Automatic device and game-specific options |
| --- | --- | --- |
| Menacer 6-Game Cartridge | `GM MK-1658 -00` | Menacer |
| Body Count | `GM MK-1533 -00` | Menacer |
| T2: The Arcade Game | `GM T-081156 01` | Menacer |
| Lethal Enforcers | `GM T-95096-00␠` | Justifier. **Auto-calibrate gun** defaults to On and applies when no manual calibration is present. With a Justifier connected, this option matches the first 13 characters of the code. |
| Lethal Enforcers II: Gun Fighters | `GM T-95136-00␠` | Justifier |

### Cartridge recognition and compatibility

Game titles, cover art, control labels, Jukebox albums and cartridge hardware recognition can apply to their own supported editions. The library's **Enhanced** badge uses the widescreen profile matches. The game can still offer audio-only or direct controls without that badge.

Three product codes select a three-button controller automatically for compatibility. They are **TNN Bass Tournament of Champions** (`GM T137056 -01`), **TNN Outdoors Bass ’96** (`GM T137066 -00`) and **Tecmo Super Baseball** (`GM T-36046-00␠`). **Virtua Racing** (USA, `mpr-16419-t.ic2`, SHA-1 `ff969ae53120cc4e7cb1a8a7e47458f2eb8a2165`) has experimental SVP cartridge startup and save-state support, as described in the [changelog](CHANGELOG.md#11607--nearby-wi-fi-pairing-amiga-semasynth-and-compatibility-fixes).

## Master System

| Cartridge edition | Dump label | SHA-1 | Game-specific options |
| --- | --- | --- | --- |
| Populous (Europe) | `populous (europe).bin` | `d6142584b9796a96941b6a95bda14cf137b47085` | **Direct pointer** (Off / On, starts Off). Aim at a visible terrain corner. Click or tap to raise land, or right-click to lower it. The original pad scrolls the map and operates menus. |
| Tennis Ace (Europe) | `tennis ace (europe).bin` | `0d202166d4a3bdfcf90514c711c77e4f20764552` | **FM sound unit** (Off / On, starts Off). This verified edition uses FM with its original console region. |

The **FM sound unit** option can also appear on export cartridges that use the FM chip during a short startup check. SemaTor tries the original export console first, then a Japanese console. Turning the option on uses the region in which the game played FM and restarts the cartridge. Japanese Master System cartridges have FM hardware by default. **Light Phaser** is a shared Master System Controls option that connects the emulated gun in port 1. It supports mouse aiming and firing in compatible games.

## Game Gear

| Cartridge edition | Dump label | SHA-1 | Game-specific options |
| --- | --- | --- | --- |
| Devilish (USA) | `devilish (usa).bin` | `421a416c71dd245d80b362af57d01c80547cf042` | **Direct paddles** (Off / On, starts Off). Mouse or touch controls the upper paddle on both axes. Click or press Button 1 to change formation. Button 2 changes speed. |
| Woody Pop (USA / Europe, v1.1) | `mpr-13808.ic1` | `4efbfa1d3234d8f1800a06ab72b2177fba6914cb` | **Direct paddle** (Off / On, starts Off). Move the mouse or drag horizontally. Click or press Button 1 to launch. |

**Screen** is available across Game Gear games and is remembered per cartridge. Choose **Sharp pixels**, **Game Gear LCD**, **LCD + Game Gear bezel** or **CRT cabinet**. Sharp pixels is the initial setting.
