# Amiga enhanced disks in SemaTor 1.1.619

This guide covers the **10 Amiga titles in the Enhanced library**, with 13 edition listings and 15 supported launch disks. It also covers the Direct paddle and Direct pointer editions available from the in-game menu. [Amiga games directory](https://sirbaron.github.io/SemaTor/games/index.html).

Check SHA-1 against the **uncompressed disk image**. The first disk in the set determines the edition SemaTor starts with. **Boot** and **direct game boot** mark disks that select the listed options when used to start the session. The remaining hashes identify the companion disks. IPF filenames follow the published SPS records in [MAME’s disk metadata](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml).

Open **F12 → Settings → Game options → Enhancements** after launch. **Smooth motion** offers **Match display** and applies to the supported scenes described below. **Widescreen** offers **16:9** and **21:9** where listed. The Amiga **Cheats** page has no supported cheats in 1.1.619. **Skip manual check** for The Settlers is a Gameplay option and starts On.

## Enhanced library editions

<a id="amiga-buggy-boy"></a>

### Buggy Boy

**Europe, Tenstar Pack** offers **Smooth motion** for the road, scenery and moving tumble, and **Widescreen** on all five courses. Boot the single Tenstar Pack disk. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=444607dd5f01981a9e678c39917de59402e8aad1).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Single disk · boot | `(sps1381)buggyboy.ipf` | `444607dd5f01981a9e678c39917de59402e8aad1` |

<a id="amiga-the-settlers"></a>

### The Settlers

Boot **Disk 1** for the intro and keep **Disks 2 and 3** from the same edition available. **Disk 3** can also boot straight into the game. Both launch disks per edition use the same options. SemaTor starts either edition with 1 MB of chip RAM. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=ec4a230472fa741572667db1a21b296028fa8210).

- **Europe** offers **Smooth motion** for horizontal, vertical and diagonal settlement camera drags, **Mouse sensitivity** and **Skip manual check**.
- **France** offers **Mouse sensitivity** and **Skip manual check**.

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Europe, Disk 1 · boot | `(sps143)settlers,the_disk1-3.ipf` | `ec4a230472fa741572667db1a21b296028fa8210` |
| Europe, Disk 2 · companion | `(sps143)settlers,the_disk2-3.ipf` | `97e8233b5087d0c1c61e3584cc5851d20d5a62b6` |
| Europe, Disk 3 · direct game boot | `(sps143)settlers,the_disk3-3.ipf` | `b414df1d95844a7b2a552b2768589aa5db2b1fc7` |
| France, Disk 1 · boot | `(sps2378)settlers,the_disk1.ipf` | `96f53960986947578ffd7e87863099280461d9d6` |
| France, Disk 2 · companion | `(sps2378)settlers,the_disk2.ipf` | `2e5d249465eb830159a77b5c5865c86878bd9dd3` |
| France, Disk 3 · direct game boot | `(sps2378)settlers,the_disk3.ipf` | `43f37d69640ea019370c717f95f06233662f2d07` |

<a id="amiga-superfrog"></a>

### Superfrog

**Europe** offers **Smooth motion** for verified motion in all six worlds, **Widescreen** in verified Forest, Castle and Ancient stages, **Separate music and effects**, and **Jump button** on the right shoulder. Load **Disk One**, **Disk Two**, then **Story Disk** in that order. The Story Disk also boots separately for the optional prologue. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=5df4df1361d70285686f74f1fe1e2e8d3c84d239).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk One · boot | `(sps35)superfrog_diskone.ipf` | `5df4df1361d70285686f74f1fe1e2e8d3c84d239` |
| Disk Two | `(sps35)superfrog_disktwo.ipf` | `3b54c4b7f6debc3faf5065704648d3e2f271a061` |
| Story Disk · optional prologue | `(sps35)superfrog_storydisk.ipf` | `bfe040a8d6a66a72c25d954339a2614ae2d3b1de` |

<a id="amiga-sensible-world-of-soccer-96-97"></a>

### Sensible World of Soccer ’96–’97

**Europe ’96–’97** offers **Smooth motion** for matched players, the ball and verified pitch-camera travel during kickoff. Boot **Disk 1** and keep **Disk 2** available. The team editor can use a separate writable disk. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=9c9abe9335d9a5163afd4072c81f94488fd87c22).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk 1 · boot | `(sps842)sensibleworldofsoccer96-97_disk1of2.ipf` | `9c9abe9335d9a5163afd4072c81f94488fd87c22` |
| Disk 2 | `(sps842)sensibleworldofsoccer96-97_disk2of2.ipf` | `c9ddb5846b0276b5ca311c28be85da03dffb9212` |

<a id="amiga-ufo-enemy-unknown"></a>

### UFO: Enemy Unknown

**Europe OCS/ECS (English, French, German)** offers **Smooth motion** for verified Battlescape camera steps and hardware cursor movement, plus **Mouse sensitivity**. Keep all five disks in numerical order and boot **Disk 1**. At the equipment-screen request, remove **Disk 3** and leave **Disk 5** inserted. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=5928bc762d674e6834f427ef0e42489e7fcd242d).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk 1 · boot | `(sps1677)ufo-enemyunknown_disk1.ipf` | `5928bc762d674e6834f427ef0e42489e7fcd242d` |
| Disk 2 | `(sps1677)ufo-enemyunknown_disk2.ipf` | `b513d890ea03eeacaadcac553f9193ba2a5cd03d` |
| Disk 3 | `(sps1677)ufo-enemyunknown_disk3.ipf` | `c2b109374f6867327ce09672676d52f353bd2029` |
| Disk 4 | `(sps1677)ufo-enemyunknown_disk4.ipf` | `29203547cc0bb2b54b07a5b0ea65a83cd3698345` |
| Disk 5 | `(sps1677)ufo-enemyunknown_disk5.ipf` | `0cf550c0ce105936579dee4d57cc70a75dd3ce21` |

<a id="amiga-mortal-kombat-ii"></a>

### Mortal Kombat II

**Europe** offers **Smooth motion** for matched fighters and verified arena motion, and **Separate music and effects** during fights. It starts with 1 MB of chip RAM only. Boot **Disk I** in **DF0**. When prompted for the first fight, put **Disk III** in **DF1**, then **Disk II** in **DF0**, pressing Fire after each change. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=44ca02c44c71ae880480688056ff288236b7e53c).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk I · boot | `(sps1105)mortalkombatii_disk1.ipf` | `44ca02c44c71ae880480688056ff288236b7e53c` |
| Disk II | `(sps1105)mortalkombatii_disk2.ipf` | `f156b2d67e9961742840a79378c90612e2a2833b` |
| Disk III | `(sps1105)mortalkombatii_disk3.ipf` | `5c1c47c040ef9646ed65320b52a04b4b3838796b` |

<a id="amiga-syndicate"></a>

### Syndicate

Each edition has four disks. Start with **Disk 1** and keep **Disks 2–4** from the same set in numerical order. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=8f348d4f3fda5279f6a507ee438db85ef2ca4ebb).

- **Europe** offers **Smooth motion** for verified Mercenary Camp camera pans and matched walking agents, plus **Mouse sensitivity**.
- **Germany** and **Europe, Chaos Pack** offer **Mouse sensitivity** saved separately for each edition.

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Europe, Disk 1 · boot | `(sps739)syndicate_disk1.ipf` | `8f348d4f3fda5279f6a507ee438db85ef2ca4ebb` |
| Europe, Disk 2 | `(sps739)syndicate_disk2.ipf` | `396560c98d8827a23eb232471a3c73052b6bf649` |
| Europe, Disk 3 | `(sps739)syndicate_disk3.ipf` | `3e2e6cf4897258bad30ae895368b494f33ca75f7` |
| Europe, Disk 4 | `(sps739)syndicate_disk4.ipf` | `944368e4d469cccf34bb106dfe2aaf34626ecc53` |
| Germany, Disk 1 · boot | `(sps405)syndicate_disk1.ipf` | `705c0cff4dbf0024326636639617f87204cc0eaf` |
| Germany, Disk 2 | `(sps405)syndicate_disk2.ipf` | `90556dd2eef501d0401ff468ba890f2446a2583a` |
| Germany, Disk 3 | `(sps405)syndicate_disk3.ipf` | `4a0278c1de36b8f7ede376001f5f8d954d7bcea6` |
| Germany, Disk 4 | `(sps405)syndicate_disk4.ipf` | `11bebb747b0a89823617c0498c00cc406b53ac91` |
| Chaos Pack, Disk 1 · boot | `(sps1887)syndicate_disk1.ipf` | `129dbf51b56ccd5fb256d16349245e1ec7d8d54f` |
| Chaos Pack, Disk 2 | `(sps1887)syndicate_disk2.ipf` | `35e380ecff285fabfb63a23a3a6db2158a97694f` |
| Chaos Pack, Disk 3 | `(sps1887)syndicate_disk3.ipf` | `5ac9cc884f30d111cee3dd32a2638779dad8d7d9` |
| Chaos Pack, Disk 4 | `(sps1887)syndicate_disk4.ipf` | `9f4856c1201a54bacbc39b15a9dbb874d7773c58` |

<a id="amiga-legion"></a>

### Legion

The supported set is the **four-disk ADF installation of Gobi Software’s full English edition**. Boot **Disk 1** and keep **Disks 2, 3 and 4** in order. SemaTor starts the set with 2 MB of chip RAM and four drives. It offers **Smooth motion** for verified campaign map pans, **Widescreen** for the native campaign map, and **Mouse sensitivity**. Town dialogs keep their original width. [Gobi Software’s full English release notes](https://aminet.net/game/role/Legion-exe.readme) and [original data release notes](https://aminet.net/game/role/legion.readme).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk 1 · boot | `Legion (English) (Disk 1).adf` | `26ef24325c8f1dc481a7ee425c8acbc0111af03e` |
| Disk 2 | `Legion (English) (Disk 2).adf` | `2ea8cfde648e566f188841f31a30518cbf3eac84` |
| Disk 3 | `Legion (English) (Disk 3).adf` | `572e16de2bf992286a35914d050f5b9974f1aae0` |
| Disk 4 | `Legion (English) (Disk 4).adf` | `0ee9cbe08f36672f700b935b23103a62fee1577e` |

<a id="amiga-moonstone"></a>

### Moonstone: A Hard Days Knight

**Europe** offers **Smooth motion** for matched knights and effects in Practice and the verified Wheat Field encounter, plus **Overhead chop button** on the right shoulder. Boot **Disk A** and keep **Disk B** and **Disk C** available in that order. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=745f265d9d486c6f68ba7048198b29ccb4b61db9).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk A · boot | `(sps360)moonstone_diska.ipf` | `745f265d9d486c6f68ba7048198b29ccb4b61db9` |
| Disk B | `(sps360)moonstone_diskb.ipf` | `aafc1e1d3a14c59eb10a4e23f77384b8a3271de6` |
| Disk C | `(sps360)moonstone_diskc.ipf` | `bdcaff72dd319f6584d67c726377de3f3e4677ba` |

<a id="amiga-ruff-n-tumble"></a>

### Ruff ’n’ Tumble

**Europe** offers **Smooth motion** for matched forest camera movement, actors and projectiles, **Widescreen** in the verified forest, **Separate music and effects**, and **Jump button** on the right shoulder. Boot **Disk 1** and keep **Disk 2** available. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=55f38cd5cd98717ed844a7e15c5255672ca6b7fc).

| Disk or role | Disk image | SHA-1 |
| --- | --- | --- |
| Disk 1 · boot | `(sps199)ruffntumble_disk1.ipf` | `55f38cd5cd98717ed844a7e15c5255672ca6b7fc` |
| Disk 2 | `(sps199)ruffntumble_disk2.ipf` | `c00c7d524fcc2a5764c91d24886c0d985b69ff31` |

## Additional in-game controls

These A500 editions offer their own Controls rows in 1.1.619. The Enhanced library badge and catalogue use the editions in the preceding section.

### Direct paddle

On these single-disk editions, turn on **Direct paddle** to steer with the mouse or touch. Fire or a left click launches the ball or shoots. [Arkanoid disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=08f29d9a11960f558aaaffbc89b9b289e413cfea). [Amegas disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=3628f78bf942a9be167d60ca1f7230d9441e291a). [Impact disk record](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=551e75f036a69f06b9da73c3b17e4af72532e77c).

| Edition | Boot disk image | SHA-1 |
| --- | --- | --- |
| Arkanoid, Europe v1.04 (1988-02-28) | `(sps954)arkanoid.ipf` | `08f29d9a11960f558aaaffbc89b9b289e413cfea` |
| Arkanoid, USA v1.05 (1988-03-31) | `(sps1136)arkanoid.ipf` | `198ab3c83f34aa7432a7a2be091f12e7c688da4b` |
| Arkanoid, USA v1.05 ADOS (1988-03-31) | `(sps1519)arkanoid.ipf` | `62891686cfd06e437c9e20f3b50276231b0723ac` |
| Arkanoid – Revenge of Doh, Europe | `(sps765)arkanoidrevengeofdoh.ipf` | `b62e4efc48e4dcdd6ca161b14d997c2621e71026` |
| Arkanoid – Revenge of Doh, Europe Budget | `(sps1159)arkanoid-revengeofdoh.ipf` | `0f7d7c566e06c0b6f5737f136b419789f47ec625` |
| Amegas, Europe Tenstar Pack | `(sps1655)amegas.ipf` | `3628f78bf942a9be167d60ca1f7230d9441e291a` |
| Amegas, Europe Tenstar Pack (alternate) | `(sps1656)amegas.ipf` | `abe3430a41a48926e40e9c9cf02672a7f39e6cf9` |
| Impact!, Europe | `(sps2462)impact.ipf` | `551e75f036a69f06b9da73c3b17e4af72532e77c` |

### Direct pointer

Turn on **Direct pointer** to point and click with the desktop mouse or touch. The Cannon Fodder games support orders in their mission playfields. Lemmings targets the one-player crosshair as well as the main menu. The World Editor uses its native window coordinates. [Populous disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=b0fa34f2a266547484a7d0728ac33104cae96e7b). [Cannon Fodder disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=268e831e45fdc9d4f70ace23be7811f8611f9d29). [Lemmings disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=784de36f1e14ec25722444192d59ded5f0019ea3).

| Edition | Disk image | SHA-1 | Disk or role |
| --- | --- | --- | --- |
| Populous, Europe v2.7 (1989-03-17) | `(sps69)populous.ipf` | `b0fa34f2a266547484a7d0728ac33104cae96e7b` | Boot |
| Populous, USA v2.7 (1989-03-30) | `(sps70)populous.ipf` | `d1499ddc6f33c3b24734b9cba4e534c3d5ab67d4` | Boot |
| Populous, Europe Budget v2.7 (1989-03-17) | `(sps2898)populous.ipf` | `60ecc33c2174a0f46eb7dcf1be92b54e5f7fcca5` | Boot |
| Populous II, Europe | `(sps79)populousii.ipf` | `03e5c85a2d6f63c4150f104e0f64f0d0bb4e294f` | Boot |
| Populous II – The Challenge Games, Europe | `(sps2775)populousii-thechallengegames.ipf` | `5503373ce7b55ff0fb9afce8c3b46abc6ee6bc8c` | Boot expansion program · follow the prompts for the original Populous II disk and the expansion disk |
| Populous World Editor, Europe v1.0 | `(sps711)populousworldeditor.ipf` | `f3c1b57a204197d177272abae7a1c162ac37cced` | Boot |
| Cannon Fodder Plus, Europe (Amiga Power 31) | `(sps60)cannonfodderplus_ap31.ipf` | `07921b80a4072ba39a8bda3d00f710800cdaf8b5` | Boot |
| Cannon Fodder, Europe | `(sps860)cannonfodder_disk1of3.ipf` | `268e831e45fdc9d4f70ace23be7811f8611f9d29` | Disk 1 · boot |
| Cannon Fodder, Europe | `(sps860)cannonfodder_disk2of3.ipf` | `9f822a2f3e19de50a188b16feda2192de23b3574` | Disk 2 |
| Cannon Fodder, Europe | `(sps860)cannonfodder_disk3of3.ipf` | `bad4d7ffc01e4f22ffb442c7d78d55baa17f9b1e` | Disk 3 |
| Cannon Fodder 2, Europe | `(sps104)cannonfodder2_disk1of3.ipf` | `d7c5cc45847f21c6791f26ad44d6fe80b3492a3a` | Disk 1 · boot |
| Cannon Fodder 2, Europe | `(sps104)cannonfodder2_disk2of3.ipf` | `80fb27e188c24a4f9685b2bd28d48b0553cb1205` | Disk 2 |
| Cannon Fodder 2, Europe | `(sps104)cannonfodder2_disk3of3.ipf` | `91ac97c8c544cc56dde69ad26cba821cd7853231` | Disk 3 |
| Lemmings, Europe | `(sps132)lemmings_disk1.ipf` | `784de36f1e14ec25722444192d59ded5f0019ea3` | Disk 1 · boot |
| Lemmings, Europe | `(sps132)lemmings_disk2.ipf` | `1a1744fb52e7e3daa50872e25dcc14f0806d7d68` | Disk 2 |

**Populous – The Promised Lands** supplies extra landscapes for the original game. Start the supported Populous program and use the expansion disk as data. Its Europe Budget disk is `(sps1217)populous-thepromisedlands.ipf` with SHA-1 `0dd8977c49d9bc4bfcb24ba4d97a49d05dc3d274`. [SPS disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=0dd8977c49d9bc4bfcb24ba4d97a49d05dc3d274).

## Named editions without verified enhancements

| Edition | 1.1.619 status |
| --- | --- |
| Buggy Boy, **Les Fous du Volant** | Reached racing in testing. Uses a different game build from Tenstar and gets the original presentation. Its one-disk SHA-1 is `c166fbfe1813957cc4e492fc19e883f404ae82ad`. |
| Buggy Boy, **plain Europe** and **The Story So Far Vol. 1** | Different disks from Tenstar. The plain Europe IPF stopped before racing in the tested boot. Its SHA-1 is `0b732fb7ec610cd5eebae4731808e4e13ff5b1d3`. The compilation’s recorded hash starts with `6624bd2c`. |
| **Legion**, Polish release | The published options are verified for the four-disk English installation. The Polish disks were unavailable for that verification. |
| **UFO: Enemy Unknown**, AGA or CD32 | The verified enhancement profile uses the five-disk OCS/ECS set. |
| **Slam Tilt**, Europe AGA | The Mean Machines table was used in a development replay. The released game menu has no live Smooth motion option for it. |

[Buggy Boy disk records](https://raw.githubusercontent.com/mamedev/mame/master/hash/amigaocs_flop.xml#:~:text=0b732fb7ec610cd5eebae4731808e4e13ff5b1d3).

## Recognition-only matches

A library title or filename can prompt SemaTor to check a disk for an enhancement. This applies to title variants such as **SWOS**, **Mortal Kombat** and **Ruff and Tumble**. A game option becomes available for a matching launch-disk SHA-1. A matching title, cover or Jukebox entry can appear on another pressing, compilation, reissue or converted image while it keeps its original gameplay options.
