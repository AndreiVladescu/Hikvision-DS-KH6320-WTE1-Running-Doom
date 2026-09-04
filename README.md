# Hikvision-DS-KH6320-WTE1-Running-Doom

Running DOOM and a Minecraft server on a Hikvision DS-KH6320-WTE1 video
intercom indoor station — chip-off root access, then a native port of
[doomgeneric](https://github.com/ozkl/doomgeneric) to the panel's
framebuffer and touchscreen, then a cross-compiled
[UCraft](https://github.com/vimpop/UCraft) Minecraft server running off an
inserted SD card.

📄 **[Read the write-up →](https://andreivladescu.github.io/Hikvision-DS-KH6320-WTE1-Running-Doom/)**

## What this is

The DS-KH6320-WTE1 is a wall-mounted video intercom panel: an ARM SoC, a
1024×600 touchscreen, and a locked-down vendor Linux build behind a
challenge-gated debug console. This project chip-off reads the flash,
turns that gated console into a real root shell, and then uses the
resulting access purely for the fun part — porting real, unrelated
software to hardware that was never meant to run any of it.

This page is deliberately **not** the security write-up. Getting root is
covered here only as far as it took to make the DOOM/Minecraft porting
possible; a broader security assessment of the same device exists and is
kept separate from this repository.

## Repository layout

| Path | Contents |
|---|---|
| `index.md`, `js/`, `img/` | GitHub Pages site — the write-up |
| `_config.yml` | Jekyll config (remote theme: `pages-themes/slate`) |

## Legal

Security research. All testing was performed on hardware owned outright by
the researcher. No third-party device was accessed.
