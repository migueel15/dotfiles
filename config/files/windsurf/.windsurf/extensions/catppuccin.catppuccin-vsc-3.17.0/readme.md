<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://code.visualstudio.com">VSCode</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
    <a href="https://github.com/catppuccin/vscode/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/vscode?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/vscode/issues"><img src="https://img.shields.io/github/issues/catppuccin/vscode?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://github.com/catppuccin/vscode/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/vscode?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
  <img src="https://github.com/catppuccin/vscode/raw/HEAD/assets/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://github.com/catppuccin/vscode/raw/HEAD/assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://github.com/catppuccin/vscode/raw/HEAD/assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://github.com/catppuccin/vscode/raw/HEAD/assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://github.com/catppuccin/vscode/raw/HEAD/assets/mocha.webp"/>
</details>

## Usage

### Preferred method of installation

Install the extension from a Marketplace:

- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc)
- [Open-VSX](https://open-vsx.org/extension/Catppuccin/catppuccin-vsc)

### Manual method for installation

Download the VSIX from
[the latest GitHub release](https://github.com/catppuccin/vscode/releases/latest).
Open the Command Palette and select "Extensions: Install from VSIX...", then open the file you just downloaded.

### Using the JSON files

If you need to use the JSON files for libraries like [Shiki](https://www.npmjs.com/package/shiki), the theme files are published to NPM as [`@catppuccin/vscode`](https://www.npmjs.com/package/@catppuccin/vscode).

### Nix (Home-Manager) users

If you would like to change the theme configuration, the theme expects to have a mutable directory to write its JSON files into.
This means that you will have to either:

- Install this extension in a non-declarative way so that the extension has permissions to write files.\
  This means fully excluding `nixpkgs.vscode-extensions.catppuccin.catppuccin-vsc` from your configuration; Just using `programs.vscode.mutableExtensionsDir = true;` will **NOT WORK**.
- Use our [catppuccin/nix](https://github.com/catppuccin/nix) module to build it with your VSCode configuration, using overrides.\
  This is a declarative way to compile the theme with your preferred options. **Please refer to the example below for a sample configuration.**

```nix
{
  # in your inputs:
  inputs.catppuccin.url = "github:catppuccin/nix";

  # in your home-manager options:
  catppuccin = {
    enable = true;
    # optionally change the accent color
    # vscode.accent = "pink";
  };
  programs.vscode = {
    enable = true;
    # settings can be configured as normal, see extension defaults below:
    # userSettings = {
    #  "catppuccin.boldKeywords": true;
    #  "catppuccin.italicComments": true;
    #  "catppuccin.italicKeywords": true;
    #  "catppuccin.colorOverrides": {},
    #  "catppuccin.customUIColors": {},
    #  "catppuccin.workbenchMode": "default",
    #  "catppuccin.bracketMode": "rainbow",
    #  "catppuccin.extraBordersEnabled": false,
    #  "catppuccin.syncWithIconPack": true,
    #  ...
    # };
  };
}
```

## Customization

> [!Note]
> We also have a [Catppuccin Icon Pack](https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc-icons)!

### VSCode settings

The following settings inside your `settings.json` are recommended for this plugin:

```jsonc
{
  // we try to make semantic highlighting look good
  "editor.semanticHighlighting.enabled": true,
  // prevent VSCode from modifying the terminal colors
  "terminal.integrated.minimumContrastRatio": 1,
  // make the window's titlebar use the workbench colors
  "window.titleBarStyle": "custom",

  // applicable if you use Go, this is an opt-in flag!
  "gopls": {
    "ui.semanticTokens": true,
  },
}
```

### Catppuccin settings

Catppuccin for VSCode can be customized to your liking. If you like the Catppuccin colors but feel that they are a bit too bright for working at night, customization got you covered!

```jsonc
{
  // use Mocha as the base
  "workbench.colorTheme": "Catppuccin Mocha",
  // pink as the accent color
  "catppuccin.accentColor": "pink",
  // make Mocha specifically very dark
  // (this preserves other flavors!)
  "catppuccin.colorOverrides": {
    "mocha": {
      "base": "#000000",
      "mantle": "#010101",
      "crust": "#020202",
    },
  },
  // use your accent (pink) on the statusBar as well
  "catppuccin.customUIColors": {
    "mocha": {
      "statusBar.foreground": "accent",
    },
  },
}
```

<details>
<summary>📸 Preview</summary>
<img width="1488" alt="oldeppuccin-pink-accent" src="https://user-images.githubusercontent.com/79978224/265295206-47d0c993-5d61-4e93-aa96-6d0d95a24f33.png">
</details>

To see all available options, open your settings and look for `Extensions > Catppuccin`.

### Custom accent color

`catppuccin.accentColor`

You can choose any color as your "accent" color. `mauve` is our default, but you can add more personality by using your favorite!

### Disable italics & bold fonts

You can toggle whether to use

- italics for keywords: `catppuccin.italicKeywords`
- italics for comments: `catppuccin.italicComments`
- bold for keywords: `catppuccin.boldKeywords`

### Flat appearance

`catppuccin.workbenchMode`

By default, Catppuccin for VSCode uses three shades of our `base` color for the workbench.
For example, in Mocha:

- `base`: #1e1e2e - the editor background
- `mantle`: \#181825 - the sidebar
- `crust`: #11111b - the activity bar, status bar, and title bar

<details>
<summary>📸 Preview</summary>
<img width="1488" alt="default-mocha" src="https://github.com/catppuccin/vscode/raw/HEAD/assets/mocha.webp">
</details>

If you'd like a more flat look, you can change it to `flat`! This only uses `base` and `mantle`, reducing it to 2 shades:

- `base`: #1e1e2e - the editor background
- `mantle`: \#181825 - the sidebar, the activity bar, status bar, and title bar

<details>
<summary>📸 Preview</summary>
<img width="1488" alt="flat-mocha" src="https://user-images.githubusercontent.com/79978224/265295217-e20e6195-2969-44db-aa57-8e901bc52817.png">
</details>

For absolute minimalism, you can go with `minimal`; a single shade for the whole workbench.

- This only uses `base` (#1e1e2e)

<details>
<summary>📸 Preview</summary>
<img width="1488" alt="minimal-mocha" src="https://user-images.githubusercontent.com/79978224/265295213-e04f74fc-48a2-4d3e-b379-5d5a4d15da8a.png">
</details>

### Paired Brackets

`catppuccin.bracketMode`

By default, we use `red`, `peach`, `yellow`, `green`, `blue`, and `mauve` for matching bracket pairs. You can change that option if you want different colors:

- `rainbow` is our default setting, using the colors described above.
- `dimmed` uses the same rainbow colors, but muted by 20%.
- `monochromatic` only uses grayish colors, from `subtext1` to `surface2`.
- `neovim` uses the same colors that [`nvim-ts-rainbow`](https://github.com/p00f/nvim-ts-rainbow) uses in our [Neovim port](https://github.com/catppuccin/nvim).

### Override palette colors

`catppuccin.colorOverrides`

Colors can be overwritten in the JSON user settings, like so:

```jsonc
{
  // ...your other settings...
  "catppuccin.colorOverrides": {
    // make text red red all flavors
    "all": {
      "text": "#ff0000",
    },
    // make Mocha "OLEDppuccin" - use black editor background
    "mocha": {
      "base": "#000000",
      "mantle": "#010101",
      "crust": "#020202",
    },
  },
}
```

### Use palette colors on workbench elements (UI)

`catppuccin.customUIColors`

If you want to customize where certain palette colors appear, you can change it like so:

```jsonc
{
  "catppuccin.customUIColors": {
    // make the breadcrumb "text" on "overlay0" for all flavors
    "all": {
      "breadcrumb.background": "overlay0",
      "breadcrumb.foreground": "text",
    },
    // but for mocha, use "crust" on your currently selected accent.
    "mocha": {
      // "accent" selects your current accent color.
      "breadcrumb.background": "accent",
      "breadcrumb.foreground": "crust",
      // you can use opacity, by specifying it after a space
      // "rosewater 0.5" would mean 50% opacity, here it's 20%
      "minimap.background": "rosewater 0.2",
    },
  },
}
```

You can find all the available keys [here](https://code.visualstudio.com/api/references/theme-color).

> [!Note]
> This respects your [color overrides](#override-palette-colors).

## Extension Support

Catppuccin for VSCode also themes the following extensions:

- [ErrorLens](https://github.com/usernamehw/vscode-error-lens)
- [GitHub Pull Requests and Issues](https://github.com/microsoft/vscode-pull-request-github)
- [GitLens](https://github.com/gitkraken/vscode-gitlens)

## Support

If you have any questions regarding this port, feel free to [open an issue](https://github.com/catppuccin/vscode/issues) or ask in [our Discord](https://discord.catppuccin.com), where we have a [dedicated forum](https://discord.com/channels/907385605422448742/1020275848940626002) for support.

## Development

1. Clone and open this repository in VSCode.
2. Launch the "Debug & Watch Files" configuration from "Run and Debug". This
   will spawn a new instance and also start a task watching the files in `./src`.
   The watch task allows for the theme to be hot reloaded based on changes to the
   TypeScript instead of the generated JSON.
3. Make modifications in `./src` to see the changes immediately.

## 💝 Thanks to

**Current maintainers**

- [backwardspy](https://github.com/backwardspy)

**Contributions**

- [Lichthagel](https://github.com/Lichthagel) - GitLens extension support
- [suppayami](https://github.com/suppayami) - Workbench appearances

**Previous maintainer(s)**

- [ghostx31](https://github.com/ghostx31)
- [VictorTennekes](https://github.com/VictorTennekes)
- [winston](https://github.com/nekowinston)

&nbsp;

<p align="center"><img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.png" /></p>
<p align="center">Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
<p align="center"><a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a></p>
