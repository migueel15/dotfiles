'use strict';

var require$$0 = require('vscode');
var fs = require('node:fs');
var node_child_process = require('node:child_process');
var process$1 = require('node:process');
var os = require('node:os');
var node_module = require('node:module');
var node_path = require('node:path');
var require$$0$2 = require('child_process');
var require$$1$1 = require('fs');
var require$$1 = require('path');
var require$$0$1 = require('util');
var require$$2 = require('os');
var require$$3 = require('crypto');
var require$$4 = require('net');

var LIB;(()=>{var t={975:t=>{function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function r(t,e){for(var r,n="",i=0,o=-1,s=0,h=0;h<=t.length;++h){if(h<t.length)r=t.charCodeAt(h);else {if(47===r)break;r=47;}if(47===r){if(o===h-1||1===s);else if(o!==h-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var a=n.lastIndexOf("/");if(a!==n.length-1){ -1===a?(n="",i=0):i=(n=n.slice(0,a)).length-1-n.lastIndexOf("/"),o=h,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=h,s=0;continue}e&&(n.length>0?n+="/..":n="..",i=2);}else n.length>0?n+="/"+t.slice(o+1,h):n=t.slice(o+1,h),i=h-o-1;o=h,s=0;}else 46===r&&-1!==s?++s:s=-1;}return n}var n={resolve:function(){for(var t,n="",i=false,o=arguments.length-1;o>=-1&&!i;o--){var s;o>=0?s=arguments[o]:(void 0===t&&(t=process.cwd()),s=t),e(s),0!==s.length&&(n=s+"/"+n,i=47===s.charCodeAt(0));}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(t){if(e(t),0===t.length)return ".";var n=47===t.charCodeAt(0),i=47===t.charCodeAt(t.length-1);return 0!==(t=r(t,!n)).length||n||(t="."),t.length>0&&i&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return ".";for(var t,r=0;r<arguments.length;++r){var i=arguments[r];e(i),i.length>0&&(void 0===t?t=i:t+="/"+i);}return void 0===t?".":n.normalize(t)},relative:function(t,r){if(e(t),e(r),t===r)return "";if((t=n.resolve(t))===(r=n.resolve(r)))return "";for(var i=1;i<t.length&&47===t.charCodeAt(i);++i);for(var o=t.length,s=o-i,h=1;h<r.length&&47===r.charCodeAt(h);++h);for(var a=r.length-h,c=s<a?s:a,f=-1,u=0;u<=c;++u){if(u===c){if(a>c){if(47===r.charCodeAt(h+u))return r.slice(h+u+1);if(0===u)return r.slice(h+u)}else s>c&&(47===t.charCodeAt(i+u)?f=u:0===u&&(f=0));break}var l=t.charCodeAt(i+u);if(l!==r.charCodeAt(h+u))break;47===l&&(f=u);}var g="";for(u=i+f+1;u<=o;++u)u!==o&&47!==t.charCodeAt(u)||(0===g.length?g+="..":g+="/..");return g.length>0?g+r.slice(h+f):(h+=f,47===r.charCodeAt(h)&&++h,r.slice(h))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return ".";for(var r=t.charCodeAt(0),n=47===r,i=-1,o=true,s=t.length-1;s>=1;--s)if(47===(r=t.charCodeAt(s))){if(!o){i=s;break}}else o=false;return  -1===i?n?"/":".":n&&1===i?"//":t.slice(0,i)},basename:function(t,r){if(void 0!==r&&"string"!=typeof r)throw new TypeError('"ext" argument must be a string');e(t);var n,i=0,o=-1,s=true;if(void 0!==r&&r.length>0&&r.length<=t.length){if(r.length===t.length&&r===t)return "";var h=r.length-1,a=-1;for(n=t.length-1;n>=0;--n){var c=t.charCodeAt(n);if(47===c){if(!s){i=n+1;break}}else  -1===a&&(s=false,a=n+1),h>=0&&(c===r.charCodeAt(h)?-1==--h&&(o=n):(h=-1,o=a));}return i===o?o=a:-1===o&&(o=t.length),t.slice(i,o)}for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!s){i=n+1;break}}else  -1===o&&(s=false,o=n+1);return  -1===o?"":t.slice(i,o)},extname:function(t){e(t);for(var r=-1,n=0,i=-1,o=true,s=0,h=t.length-1;h>=0;--h){var a=t.charCodeAt(h);if(47!==a) -1===i&&(o=false,i=h+1),46===a?-1===r?r=h:1!==s&&(s=1):-1!==r&&(s=-1);else if(!o){n=h+1;break}}return  -1===r||-1===i||0===s||1===s&&r===i-1&&r===n+1?"":t.slice(r,i)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var r=e.dir||e.root,n=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+n:r+"/"+n:n}(0,t)},parse:function(t){e(t);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return r;var n,i=t.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,h=0,a=-1,c=true,f=t.length-1,u=0;f>=n;--f)if(47!==(i=t.charCodeAt(f))) -1===a&&(c=false,a=f+1),46===i?-1===s?s=f:1!==u&&(u=1):-1!==s&&(u=-1);else if(!c){h=f+1;break}return  -1===s||-1===a||0===u||1===u&&s===a-1&&s===h+1?-1!==a&&(r.base=r.name=0===h&&o?t.slice(1,a):t.slice(h,a)):(0===h&&o?(r.name=t.slice(1,s),r.base=t.slice(1,a)):(r.name=t.slice(h,s),r.base=t.slice(h,a)),r.ext=t.slice(s,a)),h>0?r.dir=t.slice(0,h-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,t.exports=n;}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:true,get:e[n]});},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:true});};var n={};let i;if(r.r(n),r.d(n,{URI:()=>l,Utils:()=>I}),"object"==typeof process)i="win32"===process.platform;else if("object"==typeof navigator){let t=navigator.userAgent;i=t.indexOf("Windows")>=0;}const o=/^\w[\w\d+.-]*$/,s=/^\//,h=/^\/\//;function a(t,e){if(!t.scheme&&e)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${t.authority}", path: "${t.path}", query: "${t.query}", fragment: "${t.fragment}"}`);if(t.scheme&&!o.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!s.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(h.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}const c="",f="/",u=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class l{static isUri(t){return t instanceof l||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString}scheme;authority;path;query;fragment;constructor(t,e,r,n,i,o=false){"object"==typeof t?(this.scheme=t.scheme||c,this.authority=t.authority||c,this.path=t.path||c,this.query=t.query||c,this.fragment=t.fragment||c):(this.scheme=function(t,e){return t||e?t:"file"}(t,o),this.authority=e||c,this.path=function(t,e){switch(t){case "https":case "http":case "file":e?e[0]!==f&&(e=f+e):e=f;}return e}(this.scheme,r||c),this.query=n||c,this.fragment=i||c,a(this,o));}get fsPath(){return v(this)}with(t){if(!t)return this;let{scheme:e,authority:r,path:n,query:i,fragment:o}=t;return void 0===e?e=this.scheme:null===e&&(e=c),void 0===r?r=this.authority:null===r&&(r=c),void 0===n?n=this.path:null===n&&(n=c),void 0===i?i=this.query:null===i&&(i=c),void 0===o?o=this.fragment:null===o&&(o=c),e===this.scheme&&r===this.authority&&n===this.path&&i===this.query&&o===this.fragment?this:new d(e,r,n,i,o)}static parse(t,e=false){const r=u.exec(t);return r?new d(r[2]||c,w(r[4]||c),w(r[5]||c),w(r[7]||c),w(r[9]||c),e):new d(c,c,c,c,c)}static file(t){let e=c;if(i&&(t=t.replace(/\\/g,f)),t[0]===f&&t[1]===f){const r=t.indexOf(f,2);-1===r?(e=t.substring(2),t=f):(e=t.substring(2,r),t=t.substring(r)||f);}return new d("file",e,t,c,c)}static from(t){const e=new d(t.scheme,t.authority,t.path,t.query,t.fragment);return a(e,true),e}toString(t=false){return b(this,t)}toJSON(){return this}static revive(t){if(t){if(t instanceof l)return t;{const e=new d(t);return e._formatted=t.external,e._fsPath=t._sep===g?t.fsPath:null,e}}return t}}const g=i?1:void 0;class d extends l{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=v(this)),this._fsPath}toString(t=false){return t?b(this,true):(this._formatted||(this._formatted=b(this,false)),this._formatted)}toJSON(){const t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=g),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t}}const p={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function m(t,e,r){let n,i=-1;for(let o=0;o<t.length;o++){const s=t.charCodeAt(o);if(s>=97&&s<=122||s>=65&&s<=90||s>=48&&s<=57||45===s||46===s||95===s||126===s||e&&47===s||r&&91===s||r&&93===s||r&&58===s) -1!==i&&(n+=encodeURIComponent(t.substring(i,o)),i=-1),void 0!==n&&(n+=t.charAt(o));else { void 0===n&&(n=t.substr(0,o));const e=p[s];void 0!==e?(-1!==i&&(n+=encodeURIComponent(t.substring(i,o)),i=-1),n+=e):-1===i&&(i=o);}}return  -1!==i&&(n+=encodeURIComponent(t.substring(i))),void 0!==n?n:t}function y(t){let e;for(let r=0;r<t.length;r++){const n=t.charCodeAt(r);35===n||63===n?(void 0===e&&(e=t.substr(0,r)),e+=p[n]):void 0!==e&&(e+=t[r]);}return void 0!==e?e:t}function v(t,e){let r;return r=t.authority&&t.path.length>1&&"file"===t.scheme?`//${t.authority}${t.path}`:47===t.path.charCodeAt(0)&&(t.path.charCodeAt(1)>=65&&t.path.charCodeAt(1)<=90||t.path.charCodeAt(1)>=97&&t.path.charCodeAt(1)<=122)&&58===t.path.charCodeAt(2)?t.path[1].toLowerCase()+t.path.substr(2):t.path,i&&(r=r.replace(/\//g,"\\")),r}function b(t,e){const r=e?y:m;let n="",{scheme:i,authority:o,path:s,query:h,fragment:a}=t;if(i&&(n+=i,n+=":"),(o||"file"===i)&&(n+=f,n+=f),o){let t=o.indexOf("@");if(-1!==t){const e=o.substr(0,t);o=o.substr(t+1),t=e.lastIndexOf(":"),-1===t?n+=r(e,false,false):(n+=r(e.substr(0,t),false,false),n+=":",n+=r(e.substr(t+1),false,true)),n+="@";}o=o.toLowerCase(),t=o.lastIndexOf(":"),-1===t?n+=r(o,false,true):(n+=r(o.substr(0,t),false,true),n+=o.substr(t));}if(s){if(s.length>=3&&47===s.charCodeAt(0)&&58===s.charCodeAt(2)){const t=s.charCodeAt(1);t>=65&&t<=90&&(s=`/${String.fromCharCode(t+32)}:${s.substr(3)}`);}else if(s.length>=2&&58===s.charCodeAt(1)){const t=s.charCodeAt(0);t>=65&&t<=90&&(s=`${String.fromCharCode(t+32)}:${s.substr(2)}`);}n+=r(s,true,false);}return h&&(n+="?",n+=r(h,false,false)),a&&(n+="#",n+=e?a:m(a,false,false)),n}function C(t){try{return decodeURIComponent(t)}catch{return t.length>3?t.substr(0,3)+C(t.substr(3)):t}}const A=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function w(t){return t.match(A)?t.replace(A,(t=>C(t))):t}var x=r(975);const P=x.posix||x,_="/";var I;!function(t){t.joinPath=function(t,...e){return t.with({path:P.join(t.path,...e)})},t.resolvePath=function(t,...e){let r=t.path,n=false;r[0]!==_&&(r=_+r,n=true);let i=P.resolve(r,...e);return n&&i[0]===_&&!t.authority&&(i=i.substring(1)),t.with({path:i})},t.dirname=function(t){if(0===t.path.length||t.path===_)return t;let e=P.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},t.basename=function(t){return P.basename(t.path)},t.extname=function(t){return P.extname(t.path)};}(I||(I={})),LIB=n;})();const{URI,Utils}=LIB;

var version = "3.1.0";
var displayName = "Biome";

let isDockerCached;

function hasDockerEnv() {
	try {
		fs.statSync('/.dockerenv');
		return true;
	} catch {
		return false;
	}
}

function hasDockerCGroup() {
	try {
		return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
	} catch {
		return false;
	}
}

function isDocker() {
	// TODO: Use `??=` when targeting Node.js 16.
	if (isDockerCached === undefined) {
		isDockerCached = hasDockerEnv() || hasDockerCGroup();
	}

	return isDockerCached;
}

let cachedResult;

// Podman detection
const hasContainerEnv = () => {
	try {
		fs.statSync('/run/.containerenv');
		return true;
	} catch {
		return false;
	}
};

function isInsideContainer() {
	// TODO: Use `??=` when targeting Node.js 16.
	if (cachedResult === undefined) {
		cachedResult = hasContainerEnv() || isDocker();
	}

	return cachedResult;
}

const isWsl = () => {
	if (process$1.platform !== 'linux') {
		return false;
	}

	if (os.release().toLowerCase().includes('microsoft')) {
		if (isInsideContainer()) {
			return false;
		}

		return true;
	}

	try {
		return fs.readFileSync('/proc/version', 'utf8').toLowerCase().includes('microsoft')
			? !isInsideContainer() : false;
	} catch {
		return false;
	}
};

var isWSL = process$1.env.__IS_WSL_TEST__ ? isWsl : isWsl();

const supportedLanguages = [
  "astro",
  "css",
  "graphql",
  "html",
  "javascript",
  "javascriptreact",
  "json",
  "jsonc",
  "snippets",
  "svelte",
  "tailwindcss",
  "typescript",
  "typescriptreact",
  "vue"
];
const isMusl = (() => {
  if (process.platform !== "linux" || isWSL) {
    return false;
  }
  try {
    const output = node_child_process.spawnSync("ldd", ["--version"], { encoding: "utf8" });
    return output.stdout.includes("musl");
  } catch {
    return false;
  }
})();
const platformIdentifier = (() => {
  let flavor = "";
  if (isMusl) {
    flavor = "-musl";
  }
  return `${process.platform}-${process.arch}${flavor}`;
})();
const platformSpecificBinaryName = (() => {
  return `biome${process.platform === "win32" ? ".exe" : ""}`;
})();
const platformSpecificPackageName = (() => {
  return `cli-${platformIdentifier}`;
})();
const platformSpecificNodePackageName = (() => {
  return `@biomejs/${platformSpecificPackageName}`;
})();

const fileExists = async (uri) => {
  try {
    const stat = await require$$0.workspace.fs.stat(uri);
    return (stat.type & require$$0.FileType.File) > 0;
  } catch (_err) {
    return false;
  }
};
const config = (key, options) => {
  if ((options == null ? void 0 : options.default) !== void 0)
    return require$$0.workspace.getConfiguration("biome", options == null ? void 0 : options.scope).get(key) ?? options.default;
  return require$$0.workspace.getConfiguration("biome", options == null ? void 0 : options.scope).get(key);
};
const getLspBin = (workspaceFolder) => {
  const lspBin = config("lsp.bin", {
    scope: workspaceFolder
  }) || config("lspBin", { scope: workspaceFolder });
  const resolvePath = (lspBin2, workspaceFolder2) => {
    if (workspaceFolder2 && !node_path.isAbsolute(lspBin2)) {
      return require$$0.Uri.file(Utils.resolvePath(workspaceFolder2.uri, lspBin2).fsPath);
    }
    return require$$0.Uri.file(lspBin2);
  };
  if (typeof lspBin === "string") {
    if (!lspBin) return;
    return resolvePath(lspBin, workspaceFolder);
  }
  if (typeof lspBin === "object") {
    const result = {};
    for (const key in lspBin) {
      result[key] = resolvePath(lspBin[key], workspaceFolder);
    }
    return result;
  }
};
const debounce = (fn, delay = 300) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
const safeSpawnSync = (command, args = []) => {
  let output;
  if (node_path.extname(command) === ".ps1") {
    args = [command, ...args];
    command = "powershell.exe";
  }
  try {
    const result = node_child_process.spawnSync(command, args, { encoding: "utf8" });
    if (result.error || result.status !== 0) {
      output = void 0;
    } else {
      const trimmed = result.stdout.trim();
      output = trimmed ? trimmed : void 0;
    }
  } catch {
    output = void 0;
  }
  return output;
};

class Locator {
  /**
   * Creates a new Locator
   */
  constructor(biome) {
    this.biome = biome;
  }
  get globalNodeModulesPaths() {
    const npmGlobalNodeModulesPath = safeSpawnSync("npm", ["root", "-g"]);
    const pnpmGlobalNodeModulesPath = safeSpawnSync("pnpm", ["root", "-g"]);
    const bunGlobalNodeModulesPath = Utils.resolvePath(
      require$$0.Uri.file(os.homedir()),
      ".bun/install/global/node_modules"
    );
    return {
      npm: npmGlobalNodeModulesPath ? require$$0.Uri.file(npmGlobalNodeModulesPath) : void 0,
      pnpm: pnpmGlobalNodeModulesPath ? require$$0.Uri.file(pnpmGlobalNodeModulesPath) : void 0,
      bun: bunGlobalNodeModulesPath
    };
  }
  /**
   * Unshims the Biome binary if it is a shim.
   *
   * Sometimes, users specify the path to what they think is the Biome binary,
   * but it is actually a shim to the real binary. This can also happen when
   * package managers create shims that they place in the PATH.
   *
   * In these cases, we need to attempt to resolve the real Biome binary
   * by executing the shim with the `__where_am_i` command. This only works
   * from Biome v2 onwards, so if the shim is from an earlier version,
   * we will return the original path.
   */
  async unshim(biome) {
    var _a, _b;
    if (!biome) {
      return biome;
    }
    this.biome.logger.debug(`\u{1F50D} Unshimming Biome binary at "${biome.fsPath}"`);
    try {
      const version = (_b = (_a = safeSpawnSync(biome.fsPath, ["--version"])) == null ? void 0 : _a.split("Version: ")[1]) == null ? void 0 : _b.trim();
      if (!version) {
        this.biome.logger.warn(
          `\u{1F50D} Could not determine the version of Biome binary at "${biome.fsPath}"`
        );
        return biome;
      }
      if (version.startsWith("1")) {
        this.biome.logger.warn(
          `\u{1F50D} Cannot unshim Biome binary at "${biome.fsPath}" because it is version 1.x.x. Please update to version 2 or higher.`
        );
        return biome;
      }
      const realPath = safeSpawnSync(biome.fsPath, ["__where_am_i"]);
      if (!realPath) {
        this.biome.logger.warn(
          `\u{1F50D} Could not resolve the real path for Biome binary at "${biome.fsPath}"`
        );
        return biome;
      }
      if (realPath !== biome.fsPath) {
        this.biome.logger.warn(
          `\u{1F50D} Unshimmed Biome binary from "${biome.fsPath}" to "${realPath}"`
        );
        return require$$0.Uri.file(realPath);
      }
    } catch (error) {
      this.biome.logger.warn(
        `\u{1F50D} Error while unshimming Biome binary at "${biome.fsPath}": ${error}`
      );
    }
    return biome;
  }
  /**
   * Attempts to locate the Biome binary in the context of a workspace folder.
   *
   * This method will try to find the Biome binary using the following strategies:
   *
   * 1. Check the user's settings for a custom Biome binary path.
   * 2. Check the project's `node_modules` directory for a Biome binary.
   * 3. Check the project's `yarn` PnP configuration for a Biome binary.
   * 4. Check the system's PATH environment variable for a Biome binary.
   */
  async findBiomeForWorkspaceFolder() {
    const biome = await this.findBiomeInSettings() ?? await this.findBiomeInNodeModules() ?? await this.findBiomeInGlobalNodeModules() ?? await this.findBiomeInYarnPnp() ?? await this.findBiomeInPath();
    return await this.unshim(biome);
  }
  /**
   * Attempts to locate the Biome binary in the context of a global instance.
   *
   * This method will try to find the Biome binary using the following strategies:
   *
   * 1. Check the user's settings for a custom Biome binary path.
   * 2. Check the system's PATH environment variable for a Biome binary.
   */
  async findBiomeForGlobalInstance() {
    return await this.findBiomeInSettings() ?? await this.findBiomeInGlobalNodeModules() ?? await this.findBiomeInPath() ?? await this.suggestInstallingBiomeGlobally();
  }
  /**
   * Finds the Biome binary in the user's settings.
   *
   * This strategy is responsible for finding the Biome binary as specified
   * in the user's settings in the `biome.lsp.bin` configuration option.
   * 
   * This strategy supports platform-specific settings, meaning that the user can
   * specify different binaries for different combos of OS, architecture and libc.
   * 
   * If the `biome.lsp.bin` setting is specified as a string, the strategy will
   * attempt to locate the binary at the specified path. If the binary is not found
   * at the specified path, the strategy will return `undefined`.
   * 
   * If the `biome.lsp.bin` setting is specified as an object, the strategy will
  	 * attempt to locate the binary at the specified path for the current platform
      * (OS, architecture and libc). If the binary is not found at the specified path,
      * the strategy will return `undefined`. The keys of the object are the OS, architecture
      * and libc combos, concatenated with a dash (`-`), and the values are the paths to
      * the binaries.
   * 
   * Example:
   *
   * ```json
   * {
   *   "biome.lsp.bin": {
   *   	"linux-x64": "/path/to/biome",
   *      "linux-arm64-musl": "/path/to/biome",
   *      "darwin-arm64": "/path/to/biome",
   *      "win32-x64": "/path/to/biome.exe"
   *   }
   * }
   * ```
   *
   + General VS Code settings overriding rules apply.
   */
  async findBiomeInSettings() {
    this.biome.logger.debug(`\u{1F50D} Looking for a Biome binary in "biome.lsp.bin"`);
    const biomeLspBin = getLspBin(this.biome.workspaceFolder);
    if (!biomeLspBin) {
      this.biome.logger.debug(
        `\u{1F50D} Biome binary could not be found in "biome.lsp.bin"`
      );
      return;
    }
    this.biome.logger.debug(
      `Setting "biome.lsp.bin" is set to: ${JSON.stringify(biomeLspBin)}`
    );
    const findBinary = async (biomeLspBin2) => {
      if (!biomeLspBin2) {
        this.biome.logger.debug(
          `\u{1F50D} Biome binary could not be found in "biome.lsp.bin"`
        );
        return;
      }
      this.biome.logger.debug(
        `\u{1F50D} Checking if Biome binary exists at "${biomeLspBin2.fsPath}"`
      );
      if (await fileExists(biomeLspBin2)) {
        this.biome.logger.debug(
          `\u{1F50D} Found existing Biome binary at "${biomeLspBin2.fsPath}"`
        );
        return biomeLspBin2;
      }
      this.biome.logger.debug(
        `\u{1F50D} Biome binary could not be found in "biome.lsp.bin"`
      );
    };
    const findPlatformSpecificBinary = async (biomeLspBin2) => {
      if (platformIdentifier in biomeLspBin2) {
        this.biome.logger.debug(
          `\u{1F50D} Found platform-specific "biome.lsp.bin" setting for "${platformIdentifier}".`
        );
        return await findBinary(biomeLspBin2[platformIdentifier]);
      }
    };
    return biomeLspBin instanceof require$$0.Uri ? await findBinary(biomeLspBin) : await findPlatformSpecificBinary(biomeLspBin);
  }
  /**
   * Finds the Biome binary in the project's dependencies
   *
   * The Node Modules Locator Strategy is responsible for finding a suitable
   * Biome binary from the project's dependencies in the `node_modules` directory
   * by looking for a `@biomejs/cli-{platform}-{arch}{libc}` package, which would
   * usually have been installed as a transitive dependency by the user's package
   * manager.
   *
   * The locator is implemented in such a way that it should work with most if
   * not all packages managers, including npm, pnpm, yarn and bun. Using node's
   *  built-in `createRequire`, we create a require function that is scoped to the
   * root `@biomejs/biome` package, which allows us to resolve the platform-specific
   * `@biomejs/cli-{platform}-{arch}{libc}` package. We then resolve the path to the
   * `biome` binary by looking for the `biome` executable in the root of the package.
   *
   * On Linux, we always use the `musl` variant of the binary because it has the
   * advantage of having been built statically. This is meant to improve the
   * compatibility with various systems such as NixOS, which handle dynamically
   * linked binaries differently.
   */
  async findBiomeInNodeModules(rootPath) {
    var _a;
    const searchRoot = rootPath ?? ((_a = this.biome.workspaceFolder) == null ? void 0 : _a.uri);
    if (!searchRoot) {
      return;
    }
    this.biome.logger.debug(
      `\u{1F50D} Looking for a Biome binary in Node Modules ${searchRoot.fsPath}`
    );
    try {
      const pathToRootBiomePackage = require.resolve(
        "@biomejs/biome/package.json",
        {
          paths: [searchRoot.fsPath]
        }
      );
      const rootBiomePackage = node_module.createRequire(pathToRootBiomePackage);
      const pathToBiomeCliPackage = require$$0.Uri.file(
        node_path.dirname(
          rootBiomePackage.resolve(
            `${platformSpecificNodePackageName}/package.json`
          )
        )
      );
      const biome = require$$0.Uri.joinPath(
        pathToBiomeCliPackage,
        platformSpecificBinaryName
      );
      if (await fileExists(biome)) {
        this.biome.logger.debug(`\u{1F50D} Found Biome binary at "${biome.fsPath}"`);
        return biome;
      }
    } catch (error) {
      this.biome.logger.debug(
        `\u{1F50D} Error while looking for Biome binary in node modules: ${error}`
      );
    }
  }
  async findBiomeInGlobalNodeModules() {
    this.biome.logger.debug(
      "\u{1F50D} Looking for a Biome binary in global Node Modules"
    );
    const globalNodeModulesPaths = this.globalNodeModulesPaths;
    for (const [key, path] of Object.entries(globalNodeModulesPaths)) {
      this.biome.logger.debug(
        `\u{1F50D} Found global Node Modules path for ${key}: ${path}`
      );
      if (!path) {
        this.biome.logger.warn(
          `\u{1F50D} Could not find global Node Modules path for ${key}`
        );
        return;
      }
      const biome = await this.findBiomeInNodeModules(path);
      if (biome) {
        return biome;
      }
    }
    return void 0;
  }
  async findBiomeInYarnPnp() {
    const folder = this.biome.workspaceFolder;
    if (!folder) {
      return;
    }
    this.biome.logger.debug("\u{1F50D} Looking for a Biome binary in Yarn PnP");
    for (const extension of ["cjs", "js"]) {
      const yarnPnpFile = require$$0.Uri.joinPath(folder.uri, `.pnp.${extension}`);
      if (!await fileExists(yarnPnpFile)) {
        continue;
      }
      try {
        const yarnPnpApi = require(yarnPnpFile.fsPath);
        const rootBiomePackage = yarnPnpApi.resolveRequest(
          "@biomejs/biome/package.json",
          folder.uri.fsPath
        );
        if (!rootBiomePackage) {
          continue;
        }
        const biome = require$$0.Uri.file(
          yarnPnpApi.resolveRequest(
            `${platformSpecificNodePackageName}/${platformSpecificBinaryName}`,
            rootBiomePackage
          )
        );
        if (await fileExists(biome)) {
          this.biome.logger.debug(`\u{1F50D} Found Biome binary at "${biome.fsPath}"`);
          return biome;
        }
      } catch {
        return void 0;
      }
    }
  }
  /**
   * Finds the Biome binary in the PATH.
   *
   * This method will attempt to find the Biome binary in the directories
   * listed in the PATH environment variable. The PATH environment variable
   * is scanned from left to right, and the first Biome binary that is found
   * will be returned.
   */
  async findBiomeInPath() {
    this.biome.logger.debug("\u{1F50D} Looking for a Biome binary in PATH");
    const path = process$1.env.PATH;
    if (!path) {
      this.biome.logger.warn("The PATH environment variable is not set.");
      return;
    }
    for (const dir of path.split(node_path.delimiter)) {
      const biome = require$$0.Uri.joinPath(require$$0.Uri.file(dir), platformSpecificBinaryName);
      if (await fileExists(biome)) {
        this.biome.logger.debug(
          `\u{1F50D} Found Biome binary at "${biome.fsPath}" in PATH`
        );
        return biome;
      }
    }
    return void 0;
  }
  async suggestInstallingBiomeGlobally() {
    if (config("suggestInstallingGlobally") === false) {
      return;
    }
    const result = await require$$0.window.showWarningMessage(
      "Please install Biome globally on your system so the extension can start a global LSP session for files that are not part of any workspace.",
      "See instructions",
      "Do not show again"
    );
    if (result === "See instructions") {
      require$$0.env.openExternal(
        require$$0.Uri.parse("https://biomejs.dev/guides/manual-installation/")
      );
    }
    if (result === "Do not show again") {
      await require$$0.workspace.getConfiguration("biome").update("suggestInstallingGlobally", false, require$$0.ConfigurationTarget.Global);
    }
    return void 0;
  }
}

class Logger {
  /**
   * Creates a new logger for the given Biome instance
   */
  constructor(name) {
    this.name = name;
    this.outputChannel = require$$0.window.createOutputChannel(name, {
      log: true
    });
  }
  show(preserveFocus = false) {
    this.outputChannel.show(preserveFocus);
  }
  /**
   * Logs a message to the output channel.
   *
   * @param message The message to log.
   */
  info(message) {
    var _a;
    (_a = this.outputChannel) == null ? void 0 : _a.info(` ${message}`);
  }
  /**
   * Logs an error message to the output channel.
   *
   * @param message The error message to log.
   */
  error(message) {
    this.outputChannel.error(message ?? "");
  }
  /**
   * Logs a warning message to the output channel.
   *
   * @param message The warning message to log.
   */
  warn(message) {
    this.outputChannel.warn(message ?? "");
  }
  /**
   * Logs a debug message to the output channel.
   *
   * @param message The debug message to log.
   */
  debug(message) {
    this.outputChannel.debug(message ?? "");
  }
  /**
   * Logs a verbose message to the output channel.
   *
   * @param message The verbose message to log.
   */
  trace(message) {
    this.outputChannel.trace(message ?? "");
  }
}

var main$3 = {};

var is$2 = {};

var hasRequiredIs$2;

function requireIs$2 () {
	if (hasRequiredIs$2) return is$2;
	hasRequiredIs$2 = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(is$2, "__esModule", { value: true });
	is$2.asPromise = is$2.thenable = is$2.typedArray = is$2.stringArray = is$2.array = is$2.func = is$2.error = is$2.number = is$2.string = is$2.boolean = void 0;
	function boolean(value) {
	    return value === true || value === false;
	}
	is$2.boolean = boolean;
	function string(value) {
	    return typeof value === 'string' || value instanceof String;
	}
	is$2.string = string;
	function number(value) {
	    return typeof value === 'number' || value instanceof Number;
	}
	is$2.number = number;
	function error(value) {
	    return value instanceof Error;
	}
	is$2.error = error;
	function func(value) {
	    return typeof value === 'function';
	}
	is$2.func = func;
	function array(value) {
	    return Array.isArray(value);
	}
	is$2.array = array;
	function stringArray(value) {
	    return array(value) && value.every(elem => string(elem));
	}
	is$2.stringArray = stringArray;
	function typedArray(value, check) {
	    return Array.isArray(value) && value.every(check);
	}
	is$2.typedArray = typedArray;
	function thenable(value) {
	    return value && func(value.then);
	}
	is$2.thenable = thenable;
	function asPromise(value) {
	    if (value instanceof Promise) {
	        return value;
	    }
	    else if (thenable(value)) {
	        return new Promise((resolve, reject) => {
	            value.then((resolved) => resolve(resolved), (error) => reject(error));
	        });
	    }
	    else {
	        return Promise.resolve(value);
	    }
	}
	is$2.asPromise = asPromise;
	return is$2;
}

var client = {};

var main$2 = {};

var main$1 = {};

var ril = {};

var api$2 = {};

var messages$1 = {};

var is$1 = {};

var hasRequiredIs$1;

function requireIs$1 () {
	if (hasRequiredIs$1) return is$1;
	hasRequiredIs$1 = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(is$1, "__esModule", { value: true });
	is$1.stringArray = is$1.array = is$1.func = is$1.error = is$1.number = is$1.string = is$1.boolean = void 0;
	function boolean(value) {
	    return value === true || value === false;
	}
	is$1.boolean = boolean;
	function string(value) {
	    return typeof value === 'string' || value instanceof String;
	}
	is$1.string = string;
	function number(value) {
	    return typeof value === 'number' || value instanceof Number;
	}
	is$1.number = number;
	function error(value) {
	    return value instanceof Error;
	}
	is$1.error = error;
	function func(value) {
	    return typeof value === 'function';
	}
	is$1.func = func;
	function array(value) {
	    return Array.isArray(value);
	}
	is$1.array = array;
	function stringArray(value) {
	    return array(value) && value.every(elem => string(elem));
	}
	is$1.stringArray = stringArray;
	return is$1;
}

var hasRequiredMessages$1;

function requireMessages$1 () {
	if (hasRequiredMessages$1) return messages$1;
	hasRequiredMessages$1 = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(messages$1, "__esModule", { value: true });
	messages$1.Message = messages$1.NotificationType9 = messages$1.NotificationType8 = messages$1.NotificationType7 = messages$1.NotificationType6 = messages$1.NotificationType5 = messages$1.NotificationType4 = messages$1.NotificationType3 = messages$1.NotificationType2 = messages$1.NotificationType1 = messages$1.NotificationType0 = messages$1.NotificationType = messages$1.RequestType9 = messages$1.RequestType8 = messages$1.RequestType7 = messages$1.RequestType6 = messages$1.RequestType5 = messages$1.RequestType4 = messages$1.RequestType3 = messages$1.RequestType2 = messages$1.RequestType1 = messages$1.RequestType = messages$1.RequestType0 = messages$1.AbstractMessageSignature = messages$1.ParameterStructures = messages$1.ResponseError = messages$1.ErrorCodes = void 0;
	const is = requireIs$1();
	/**
	 * Predefined error codes.
	 */
	var ErrorCodes;
	(function (ErrorCodes) {
	    // Defined by JSON RPC
	    ErrorCodes.ParseError = -32700;
	    ErrorCodes.InvalidRequest = -32600;
	    ErrorCodes.MethodNotFound = -32601;
	    ErrorCodes.InvalidParams = -32602;
	    ErrorCodes.InternalError = -32603;
	    /**
	     * This is the start range of JSON RPC reserved error codes.
	     * It doesn't denote a real error code. No application error codes should
	     * be defined between the start and end range. For backwards
	     * compatibility the `ServerNotInitialized` and the `UnknownErrorCode`
	     * are left in the range.
	     *
	     * @since 3.16.0
	    */
	    ErrorCodes.jsonrpcReservedErrorRangeStart = -32099;
	    /** @deprecated use  jsonrpcReservedErrorRangeStart */
	    ErrorCodes.serverErrorStart = -32099;
	    /**
	     * An error occurred when write a message to the transport layer.
	     */
	    ErrorCodes.MessageWriteError = -32099;
	    /**
	     * An error occurred when reading a message from the transport layer.
	     */
	    ErrorCodes.MessageReadError = -32098;
	    /**
	     * The connection got disposed or lost and all pending responses got
	     * rejected.
	     */
	    ErrorCodes.PendingResponseRejected = -32097;
	    /**
	     * The connection is inactive and a use of it failed.
	     */
	    ErrorCodes.ConnectionInactive = -32096;
	    /**
	     * Error code indicating that a server received a notification or
	     * request before the server has received the `initialize` request.
	     */
	    ErrorCodes.ServerNotInitialized = -32002;
	    ErrorCodes.UnknownErrorCode = -32001;
	    /**
	     * This is the end range of JSON RPC reserved error codes.
	     * It doesn't denote a real error code.
	     *
	     * @since 3.16.0
	    */
	    ErrorCodes.jsonrpcReservedErrorRangeEnd = -32e3;
	    /** @deprecated use  jsonrpcReservedErrorRangeEnd */
	    ErrorCodes.serverErrorEnd = -32e3;
	})(ErrorCodes || (messages$1.ErrorCodes = ErrorCodes = {}));
	/**
	 * An error object return in a response in case a request
	 * has failed.
	 */
	class ResponseError extends Error {
	    constructor(code, message, data) {
	        super(message);
	        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
	        this.data = data;
	        Object.setPrototypeOf(this, ResponseError.prototype);
	    }
	    toJson() {
	        const result = {
	            code: this.code,
	            message: this.message
	        };
	        if (this.data !== undefined) {
	            result.data = this.data;
	        }
	        return result;
	    }
	}
	messages$1.ResponseError = ResponseError;
	class ParameterStructures {
	    constructor(kind) {
	        this.kind = kind;
	    }
	    static is(value) {
	        return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
	    }
	    toString() {
	        return this.kind;
	    }
	}
	messages$1.ParameterStructures = ParameterStructures;
	/**
	 * The parameter structure is automatically inferred on the number of parameters
	 * and the parameter type in case of a single param.
	 */
	ParameterStructures.auto = new ParameterStructures('auto');
	/**
	 * Forces `byPosition` parameter structure. This is useful if you have a single
	 * parameter which has a literal type.
	 */
	ParameterStructures.byPosition = new ParameterStructures('byPosition');
	/**
	 * Forces `byName` parameter structure. This is only useful when having a single
	 * parameter. The library will report errors if used with a different number of
	 * parameters.
	 */
	ParameterStructures.byName = new ParameterStructures('byName');
	/**
	 * An abstract implementation of a MessageType.
	 */
	class AbstractMessageSignature {
	    constructor(method, numberOfParams) {
	        this.method = method;
	        this.numberOfParams = numberOfParams;
	    }
	    get parameterStructures() {
	        return ParameterStructures.auto;
	    }
	}
	messages$1.AbstractMessageSignature = AbstractMessageSignature;
	/**
	 * Classes to type request response pairs
	 */
	class RequestType0 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 0);
	    }
	}
	messages$1.RequestType0 = RequestType0;
	class RequestType extends AbstractMessageSignature {
	    constructor(method, _parameterStructures = ParameterStructures.auto) {
	        super(method, 1);
	        this._parameterStructures = _parameterStructures;
	    }
	    get parameterStructures() {
	        return this._parameterStructures;
	    }
	}
	messages$1.RequestType = RequestType;
	class RequestType1 extends AbstractMessageSignature {
	    constructor(method, _parameterStructures = ParameterStructures.auto) {
	        super(method, 1);
	        this._parameterStructures = _parameterStructures;
	    }
	    get parameterStructures() {
	        return this._parameterStructures;
	    }
	}
	messages$1.RequestType1 = RequestType1;
	class RequestType2 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 2);
	    }
	}
	messages$1.RequestType2 = RequestType2;
	class RequestType3 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 3);
	    }
	}
	messages$1.RequestType3 = RequestType3;
	class RequestType4 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 4);
	    }
	}
	messages$1.RequestType4 = RequestType4;
	class RequestType5 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 5);
	    }
	}
	messages$1.RequestType5 = RequestType5;
	class RequestType6 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 6);
	    }
	}
	messages$1.RequestType6 = RequestType6;
	class RequestType7 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 7);
	    }
	}
	messages$1.RequestType7 = RequestType7;
	class RequestType8 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 8);
	    }
	}
	messages$1.RequestType8 = RequestType8;
	class RequestType9 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 9);
	    }
	}
	messages$1.RequestType9 = RequestType9;
	class NotificationType extends AbstractMessageSignature {
	    constructor(method, _parameterStructures = ParameterStructures.auto) {
	        super(method, 1);
	        this._parameterStructures = _parameterStructures;
	    }
	    get parameterStructures() {
	        return this._parameterStructures;
	    }
	}
	messages$1.NotificationType = NotificationType;
	class NotificationType0 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 0);
	    }
	}
	messages$1.NotificationType0 = NotificationType0;
	class NotificationType1 extends AbstractMessageSignature {
	    constructor(method, _parameterStructures = ParameterStructures.auto) {
	        super(method, 1);
	        this._parameterStructures = _parameterStructures;
	    }
	    get parameterStructures() {
	        return this._parameterStructures;
	    }
	}
	messages$1.NotificationType1 = NotificationType1;
	class NotificationType2 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 2);
	    }
	}
	messages$1.NotificationType2 = NotificationType2;
	class NotificationType3 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 3);
	    }
	}
	messages$1.NotificationType3 = NotificationType3;
	class NotificationType4 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 4);
	    }
	}
	messages$1.NotificationType4 = NotificationType4;
	class NotificationType5 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 5);
	    }
	}
	messages$1.NotificationType5 = NotificationType5;
	class NotificationType6 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 6);
	    }
	}
	messages$1.NotificationType6 = NotificationType6;
	class NotificationType7 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 7);
	    }
	}
	messages$1.NotificationType7 = NotificationType7;
	class NotificationType8 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 8);
	    }
	}
	messages$1.NotificationType8 = NotificationType8;
	class NotificationType9 extends AbstractMessageSignature {
	    constructor(method) {
	        super(method, 9);
	    }
	}
	messages$1.NotificationType9 = NotificationType9;
	var Message;
	(function (Message) {
	    /**
	     * Tests if the given message is a request message
	     */
	    function isRequest(message) {
	        const candidate = message;
	        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
	    }
	    Message.isRequest = isRequest;
	    /**
	     * Tests if the given message is a notification message
	     */
	    function isNotification(message) {
	        const candidate = message;
	        return candidate && is.string(candidate.method) && message.id === void 0;
	    }
	    Message.isNotification = isNotification;
	    /**
	     * Tests if the given message is a response message
	     */
	    function isResponse(message) {
	        const candidate = message;
	        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
	    }
	    Message.isResponse = isResponse;
	})(Message || (messages$1.Message = Message = {}));
	return messages$1;
}

var linkedMap = {};

var hasRequiredLinkedMap;

function requireLinkedMap () {
	if (hasRequiredLinkedMap) return linkedMap;
	hasRequiredLinkedMap = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	var _a;
	Object.defineProperty(linkedMap, "__esModule", { value: true });
	linkedMap.LRUCache = linkedMap.LinkedMap = linkedMap.Touch = void 0;
	var Touch;
	(function (Touch) {
	    Touch.None = 0;
	    Touch.First = 1;
	    Touch.AsOld = Touch.First;
	    Touch.Last = 2;
	    Touch.AsNew = Touch.Last;
	})(Touch || (linkedMap.Touch = Touch = {}));
	class LinkedMap {
	    constructor() {
	        this[_a] = 'LinkedMap';
	        this._map = new Map();
	        this._head = undefined;
	        this._tail = undefined;
	        this._size = 0;
	        this._state = 0;
	    }
	    clear() {
	        this._map.clear();
	        this._head = undefined;
	        this._tail = undefined;
	        this._size = 0;
	        this._state++;
	    }
	    isEmpty() {
	        return !this._head && !this._tail;
	    }
	    get size() {
	        return this._size;
	    }
	    get first() {
	        return this._head?.value;
	    }
	    get last() {
	        return this._tail?.value;
	    }
	    has(key) {
	        return this._map.has(key);
	    }
	    get(key, touch = Touch.None) {
	        const item = this._map.get(key);
	        if (!item) {
	            return undefined;
	        }
	        if (touch !== Touch.None) {
	            this.touch(item, touch);
	        }
	        return item.value;
	    }
	    set(key, value, touch = Touch.None) {
	        let item = this._map.get(key);
	        if (item) {
	            item.value = value;
	            if (touch !== Touch.None) {
	                this.touch(item, touch);
	            }
	        }
	        else {
	            item = { key, value, next: undefined, previous: undefined };
	            switch (touch) {
	                case Touch.None:
	                    this.addItemLast(item);
	                    break;
	                case Touch.First:
	                    this.addItemFirst(item);
	                    break;
	                case Touch.Last:
	                    this.addItemLast(item);
	                    break;
	                default:
	                    this.addItemLast(item);
	                    break;
	            }
	            this._map.set(key, item);
	            this._size++;
	        }
	        return this;
	    }
	    delete(key) {
	        return !!this.remove(key);
	    }
	    remove(key) {
	        const item = this._map.get(key);
	        if (!item) {
	            return undefined;
	        }
	        this._map.delete(key);
	        this.removeItem(item);
	        this._size--;
	        return item.value;
	    }
	    shift() {
	        if (!this._head && !this._tail) {
	            return undefined;
	        }
	        if (!this._head || !this._tail) {
	            throw new Error('Invalid list');
	        }
	        const item = this._head;
	        this._map.delete(item.key);
	        this.removeItem(item);
	        this._size--;
	        return item.value;
	    }
	    forEach(callbackfn, thisArg) {
	        const state = this._state;
	        let current = this._head;
	        while (current) {
	            if (thisArg) {
	                callbackfn.bind(thisArg)(current.value, current.key, this);
	            }
	            else {
	                callbackfn(current.value, current.key, this);
	            }
	            if (this._state !== state) {
	                throw new Error(`LinkedMap got modified during iteration.`);
	            }
	            current = current.next;
	        }
	    }
	    keys() {
	        const state = this._state;
	        let current = this._head;
	        const iterator = {
	            [Symbol.iterator]: () => {
	                return iterator;
	            },
	            next: () => {
	                if (this._state !== state) {
	                    throw new Error(`LinkedMap got modified during iteration.`);
	                }
	                if (current) {
	                    const result = { value: current.key, done: false };
	                    current = current.next;
	                    return result;
	                }
	                else {
	                    return { value: undefined, done: true };
	                }
	            }
	        };
	        return iterator;
	    }
	    values() {
	        const state = this._state;
	        let current = this._head;
	        const iterator = {
	            [Symbol.iterator]: () => {
	                return iterator;
	            },
	            next: () => {
	                if (this._state !== state) {
	                    throw new Error(`LinkedMap got modified during iteration.`);
	                }
	                if (current) {
	                    const result = { value: current.value, done: false };
	                    current = current.next;
	                    return result;
	                }
	                else {
	                    return { value: undefined, done: true };
	                }
	            }
	        };
	        return iterator;
	    }
	    entries() {
	        const state = this._state;
	        let current = this._head;
	        const iterator = {
	            [Symbol.iterator]: () => {
	                return iterator;
	            },
	            next: () => {
	                if (this._state !== state) {
	                    throw new Error(`LinkedMap got modified during iteration.`);
	                }
	                if (current) {
	                    const result = { value: [current.key, current.value], done: false };
	                    current = current.next;
	                    return result;
	                }
	                else {
	                    return { value: undefined, done: true };
	                }
	            }
	        };
	        return iterator;
	    }
	    [(_a = Symbol.toStringTag, Symbol.iterator)]() {
	        return this.entries();
	    }
	    trimOld(newSize) {
	        if (newSize >= this.size) {
	            return;
	        }
	        if (newSize === 0) {
	            this.clear();
	            return;
	        }
	        let current = this._head;
	        let currentSize = this.size;
	        while (current && currentSize > newSize) {
	            this._map.delete(current.key);
	            current = current.next;
	            currentSize--;
	        }
	        this._head = current;
	        this._size = currentSize;
	        if (current) {
	            current.previous = undefined;
	        }
	        this._state++;
	    }
	    addItemFirst(item) {
	        // First time Insert
	        if (!this._head && !this._tail) {
	            this._tail = item;
	        }
	        else if (!this._head) {
	            throw new Error('Invalid list');
	        }
	        else {
	            item.next = this._head;
	            this._head.previous = item;
	        }
	        this._head = item;
	        this._state++;
	    }
	    addItemLast(item) {
	        // First time Insert
	        if (!this._head && !this._tail) {
	            this._head = item;
	        }
	        else if (!this._tail) {
	            throw new Error('Invalid list');
	        }
	        else {
	            item.previous = this._tail;
	            this._tail.next = item;
	        }
	        this._tail = item;
	        this._state++;
	    }
	    removeItem(item) {
	        if (item === this._head && item === this._tail) {
	            this._head = undefined;
	            this._tail = undefined;
	        }
	        else if (item === this._head) {
	            // This can only happened if size === 1 which is handle
	            // by the case above.
	            if (!item.next) {
	                throw new Error('Invalid list');
	            }
	            item.next.previous = undefined;
	            this._head = item.next;
	        }
	        else if (item === this._tail) {
	            // This can only happened if size === 1 which is handle
	            // by the case above.
	            if (!item.previous) {
	                throw new Error('Invalid list');
	            }
	            item.previous.next = undefined;
	            this._tail = item.previous;
	        }
	        else {
	            const next = item.next;
	            const previous = item.previous;
	            if (!next || !previous) {
	                throw new Error('Invalid list');
	            }
	            next.previous = previous;
	            previous.next = next;
	        }
	        item.next = undefined;
	        item.previous = undefined;
	        this._state++;
	    }
	    touch(item, touch) {
	        if (!this._head || !this._tail) {
	            throw new Error('Invalid list');
	        }
	        if ((touch !== Touch.First && touch !== Touch.Last)) {
	            return;
	        }
	        if (touch === Touch.First) {
	            if (item === this._head) {
	                return;
	            }
	            const next = item.next;
	            const previous = item.previous;
	            // Unlink the item
	            if (item === this._tail) {
	                // previous must be defined since item was not head but is tail
	                // So there are more than on item in the map
	                previous.next = undefined;
	                this._tail = previous;
	            }
	            else {
	                // Both next and previous are not undefined since item was neither head nor tail.
	                next.previous = previous;
	                previous.next = next;
	            }
	            // Insert the node at head
	            item.previous = undefined;
	            item.next = this._head;
	            this._head.previous = item;
	            this._head = item;
	            this._state++;
	        }
	        else if (touch === Touch.Last) {
	            if (item === this._tail) {
	                return;
	            }
	            const next = item.next;
	            const previous = item.previous;
	            // Unlink the item.
	            if (item === this._head) {
	                // next must be defined since item was not tail but is head
	                // So there are more than on item in the map
	                next.previous = undefined;
	                this._head = next;
	            }
	            else {
	                // Both next and previous are not undefined since item was neither head nor tail.
	                next.previous = previous;
	                previous.next = next;
	            }
	            item.next = undefined;
	            item.previous = this._tail;
	            this._tail.next = item;
	            this._tail = item;
	            this._state++;
	        }
	    }
	    toJSON() {
	        const data = [];
	        this.forEach((value, key) => {
	            data.push([key, value]);
	        });
	        return data;
	    }
	    fromJSON(data) {
	        this.clear();
	        for (const [key, value] of data) {
	            this.set(key, value);
	        }
	    }
	}
	linkedMap.LinkedMap = LinkedMap;
	class LRUCache extends LinkedMap {
	    constructor(limit, ratio = 1) {
	        super();
	        this._limit = limit;
	        this._ratio = Math.min(Math.max(0, ratio), 1);
	    }
	    get limit() {
	        return this._limit;
	    }
	    set limit(limit) {
	        this._limit = limit;
	        this.checkTrim();
	    }
	    get ratio() {
	        return this._ratio;
	    }
	    set ratio(ratio) {
	        this._ratio = Math.min(Math.max(0, ratio), 1);
	        this.checkTrim();
	    }
	    get(key, touch = Touch.AsNew) {
	        return super.get(key, touch);
	    }
	    peek(key) {
	        return super.get(key, Touch.None);
	    }
	    set(key, value) {
	        super.set(key, value, Touch.Last);
	        this.checkTrim();
	        return this;
	    }
	    checkTrim() {
	        if (this.size > this._limit) {
	            this.trimOld(Math.round(this._limit * this._ratio));
	        }
	    }
	}
	linkedMap.LRUCache = LRUCache;
	return linkedMap;
}

var disposable = {};

var hasRequiredDisposable;

function requireDisposable () {
	if (hasRequiredDisposable) return disposable;
	hasRequiredDisposable = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(disposable, "__esModule", { value: true });
	disposable.Disposable = void 0;
	var Disposable;
	(function (Disposable) {
	    function create(func) {
	        return {
	            dispose: func
	        };
	    }
	    Disposable.create = create;
	})(Disposable || (disposable.Disposable = Disposable = {}));
	return disposable;
}

var events = {};

var ral = {};

var hasRequiredRal;

function requireRal () {
	if (hasRequiredRal) return ral;
	hasRequiredRal = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(ral, "__esModule", { value: true });
	let _ral;
	function RAL() {
	    if (_ral === undefined) {
	        throw new Error(`No runtime abstraction layer installed`);
	    }
	    return _ral;
	}
	(function (RAL) {
	    function install(ral) {
	        if (ral === undefined) {
	            throw new Error(`No runtime abstraction layer provided`);
	        }
	        _ral = ral;
	    }
	    RAL.install = install;
	})(RAL || (RAL = {}));
	ral.default = RAL;
	return ral;
}

var hasRequiredEvents;

function requireEvents () {
	if (hasRequiredEvents) return events;
	hasRequiredEvents = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(events, "__esModule", { value: true });
	events.Emitter = events.Event = void 0;
	const ral_1 = requireRal();
	var Event;
	(function (Event) {
	    const _disposable = { dispose() { } };
	    Event.None = function () { return _disposable; };
	})(Event || (events.Event = Event = {}));
	class CallbackList {
	    add(callback, context = null, bucket) {
	        if (!this._callbacks) {
	            this._callbacks = [];
	            this._contexts = [];
	        }
	        this._callbacks.push(callback);
	        this._contexts.push(context);
	        if (Array.isArray(bucket)) {
	            bucket.push({ dispose: () => this.remove(callback, context) });
	        }
	    }
	    remove(callback, context = null) {
	        if (!this._callbacks) {
	            return;
	        }
	        let foundCallbackWithDifferentContext = false;
	        for (let i = 0, len = this._callbacks.length; i < len; i++) {
	            if (this._callbacks[i] === callback) {
	                if (this._contexts[i] === context) {
	                    // callback & context match => remove it
	                    this._callbacks.splice(i, 1);
	                    this._contexts.splice(i, 1);
	                    return;
	                }
	                else {
	                    foundCallbackWithDifferentContext = true;
	                }
	            }
	        }
	        if (foundCallbackWithDifferentContext) {
	            throw new Error('When adding a listener with a context, you should remove it with the same context');
	        }
	    }
	    invoke(...args) {
	        if (!this._callbacks) {
	            return [];
	        }
	        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
	        for (let i = 0, len = callbacks.length; i < len; i++) {
	            try {
	                ret.push(callbacks[i].apply(contexts[i], args));
	            }
	            catch (e) {
	                // eslint-disable-next-line no-console
	                (0, ral_1.default)().console.error(e);
	            }
	        }
	        return ret;
	    }
	    isEmpty() {
	        return !this._callbacks || this._callbacks.length === 0;
	    }
	    dispose() {
	        this._callbacks = undefined;
	        this._contexts = undefined;
	    }
	}
	class Emitter {
	    constructor(_options) {
	        this._options = _options;
	    }
	    /**
	     * For the public to allow to subscribe
	     * to events from this Emitter
	     */
	    get event() {
	        if (!this._event) {
	            this._event = (listener, thisArgs, disposables) => {
	                if (!this._callbacks) {
	                    this._callbacks = new CallbackList();
	                }
	                if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
	                    this._options.onFirstListenerAdd(this);
	                }
	                this._callbacks.add(listener, thisArgs);
	                const result = {
	                    dispose: () => {
	                        if (!this._callbacks) {
	                            // disposable is disposed after emitter is disposed.
	                            return;
	                        }
	                        this._callbacks.remove(listener, thisArgs);
	                        result.dispose = Emitter._noop;
	                        if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
	                            this._options.onLastListenerRemove(this);
	                        }
	                    }
	                };
	                if (Array.isArray(disposables)) {
	                    disposables.push(result);
	                }
	                return result;
	            };
	        }
	        return this._event;
	    }
	    /**
	     * To be kept private to fire an event to
	     * subscribers
	     */
	    fire(event) {
	        if (this._callbacks) {
	            this._callbacks.invoke.call(this._callbacks, event);
	        }
	    }
	    dispose() {
	        if (this._callbacks) {
	            this._callbacks.dispose();
	            this._callbacks = undefined;
	        }
	    }
	}
	events.Emitter = Emitter;
	Emitter._noop = function () { };
	return events;
}

var cancellation = {};

var hasRequiredCancellation;

function requireCancellation () {
	if (hasRequiredCancellation) return cancellation;
	hasRequiredCancellation = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(cancellation, "__esModule", { value: true });
	cancellation.CancellationTokenSource = cancellation.CancellationToken = void 0;
	const ral_1 = requireRal();
	const Is = requireIs$1();
	const events_1 = requireEvents();
	var CancellationToken;
	(function (CancellationToken) {
	    CancellationToken.None = Object.freeze({
	        isCancellationRequested: false,
	        onCancellationRequested: events_1.Event.None
	    });
	    CancellationToken.Cancelled = Object.freeze({
	        isCancellationRequested: true,
	        onCancellationRequested: events_1.Event.None
	    });
	    function is(value) {
	        const candidate = value;
	        return candidate && (candidate === CancellationToken.None
	            || candidate === CancellationToken.Cancelled
	            || (Is.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested));
	    }
	    CancellationToken.is = is;
	})(CancellationToken || (cancellation.CancellationToken = CancellationToken = {}));
	const shortcutEvent = Object.freeze(function (callback, context) {
	    const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
	    return { dispose() { handle.dispose(); } };
	});
	class MutableToken {
	    constructor() {
	        this._isCancelled = false;
	    }
	    cancel() {
	        if (!this._isCancelled) {
	            this._isCancelled = true;
	            if (this._emitter) {
	                this._emitter.fire(undefined);
	                this.dispose();
	            }
	        }
	    }
	    get isCancellationRequested() {
	        return this._isCancelled;
	    }
	    get onCancellationRequested() {
	        if (this._isCancelled) {
	            return shortcutEvent;
	        }
	        if (!this._emitter) {
	            this._emitter = new events_1.Emitter();
	        }
	        return this._emitter.event;
	    }
	    dispose() {
	        if (this._emitter) {
	            this._emitter.dispose();
	            this._emitter = undefined;
	        }
	    }
	}
	class CancellationTokenSource {
	    get token() {
	        if (!this._token) {
	            // be lazy and create the token only when
	            // actually needed
	            this._token = new MutableToken();
	        }
	        return this._token;
	    }
	    cancel() {
	        if (!this._token) {
	            // save an object by returning the default
	            // cancelled token when cancellation happens
	            // before someone asks for the token
	            this._token = CancellationToken.Cancelled;
	        }
	        else {
	            this._token.cancel();
	        }
	    }
	    dispose() {
	        if (!this._token) {
	            // ensure to initialize with an empty token if we had none
	            this._token = CancellationToken.None;
	        }
	        else if (this._token instanceof MutableToken) {
	            // actually dispose
	            this._token.dispose();
	        }
	    }
	}
	cancellation.CancellationTokenSource = CancellationTokenSource;
	return cancellation;
}

var sharedArrayCancellation = {};

var hasRequiredSharedArrayCancellation;

function requireSharedArrayCancellation () {
	if (hasRequiredSharedArrayCancellation) return sharedArrayCancellation;
	hasRequiredSharedArrayCancellation = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(sharedArrayCancellation, "__esModule", { value: true });
	sharedArrayCancellation.SharedArrayReceiverStrategy = sharedArrayCancellation.SharedArraySenderStrategy = void 0;
	const cancellation_1 = requireCancellation();
	var CancellationState;
	(function (CancellationState) {
	    CancellationState.Continue = 0;
	    CancellationState.Cancelled = 1;
	})(CancellationState || (CancellationState = {}));
	class SharedArraySenderStrategy {
	    constructor() {
	        this.buffers = new Map();
	    }
	    enableCancellation(request) {
	        if (request.id === null) {
	            return;
	        }
	        const buffer = new SharedArrayBuffer(4);
	        const data = new Int32Array(buffer, 0, 1);
	        data[0] = CancellationState.Continue;
	        this.buffers.set(request.id, buffer);
	        request.$cancellationData = buffer;
	    }
	    async sendCancellation(_conn, id) {
	        const buffer = this.buffers.get(id);
	        if (buffer === undefined) {
	            return;
	        }
	        const data = new Int32Array(buffer, 0, 1);
	        Atomics.store(data, 0, CancellationState.Cancelled);
	    }
	    cleanup(id) {
	        this.buffers.delete(id);
	    }
	    dispose() {
	        this.buffers.clear();
	    }
	}
	sharedArrayCancellation.SharedArraySenderStrategy = SharedArraySenderStrategy;
	class SharedArrayBufferCancellationToken {
	    constructor(buffer) {
	        this.data = new Int32Array(buffer, 0, 1);
	    }
	    get isCancellationRequested() {
	        return Atomics.load(this.data, 0) === CancellationState.Cancelled;
	    }
	    get onCancellationRequested() {
	        throw new Error(`Cancellation over SharedArrayBuffer doesn't support cancellation events`);
	    }
	}
	class SharedArrayBufferCancellationTokenSource {
	    constructor(buffer) {
	        this.token = new SharedArrayBufferCancellationToken(buffer);
	    }
	    cancel() {
	    }
	    dispose() {
	    }
	}
	class SharedArrayReceiverStrategy {
	    constructor() {
	        this.kind = 'request';
	    }
	    createCancellationTokenSource(request) {
	        const buffer = request.$cancellationData;
	        if (buffer === undefined) {
	            return new cancellation_1.CancellationTokenSource();
	        }
	        return new SharedArrayBufferCancellationTokenSource(buffer);
	    }
	}
	sharedArrayCancellation.SharedArrayReceiverStrategy = SharedArrayReceiverStrategy;
	return sharedArrayCancellation;
}

var messageReader = {};

var semaphore = {};

var hasRequiredSemaphore;

function requireSemaphore () {
	if (hasRequiredSemaphore) return semaphore;
	hasRequiredSemaphore = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(semaphore, "__esModule", { value: true });
	semaphore.Semaphore = void 0;
	const ral_1 = requireRal();
	class Semaphore {
	    constructor(capacity = 1) {
	        if (capacity <= 0) {
	            throw new Error('Capacity must be greater than 0');
	        }
	        this._capacity = capacity;
	        this._active = 0;
	        this._waiting = [];
	    }
	    lock(thunk) {
	        return new Promise((resolve, reject) => {
	            this._waiting.push({ thunk, resolve, reject });
	            this.runNext();
	        });
	    }
	    get active() {
	        return this._active;
	    }
	    runNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
	    }
	    doRunNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        const next = this._waiting.shift();
	        this._active++;
	        if (this._active > this._capacity) {
	            throw new Error(`To many thunks active`);
	        }
	        try {
	            const result = next.thunk();
	            if (result instanceof Promise) {
	                result.then((value) => {
	                    this._active--;
	                    next.resolve(value);
	                    this.runNext();
	                }, (err) => {
	                    this._active--;
	                    next.reject(err);
	                    this.runNext();
	                });
	            }
	            else {
	                this._active--;
	                next.resolve(result);
	                this.runNext();
	            }
	        }
	        catch (err) {
	            this._active--;
	            next.reject(err);
	            this.runNext();
	        }
	    }
	}
	semaphore.Semaphore = Semaphore;
	return semaphore;
}

var hasRequiredMessageReader;

function requireMessageReader () {
	if (hasRequiredMessageReader) return messageReader;
	hasRequiredMessageReader = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(messageReader, "__esModule", { value: true });
	messageReader.ReadableStreamMessageReader = messageReader.AbstractMessageReader = messageReader.MessageReader = void 0;
	const ral_1 = requireRal();
	const Is = requireIs$1();
	const events_1 = requireEvents();
	const semaphore_1 = requireSemaphore();
	var MessageReader;
	(function (MessageReader) {
	    function is(value) {
	        let candidate = value;
	        return candidate && Is.func(candidate.listen) && Is.func(candidate.dispose) &&
	            Is.func(candidate.onError) && Is.func(candidate.onClose) && Is.func(candidate.onPartialMessage);
	    }
	    MessageReader.is = is;
	})(MessageReader || (messageReader.MessageReader = MessageReader = {}));
	class AbstractMessageReader {
	    constructor() {
	        this.errorEmitter = new events_1.Emitter();
	        this.closeEmitter = new events_1.Emitter();
	        this.partialMessageEmitter = new events_1.Emitter();
	    }
	    dispose() {
	        this.errorEmitter.dispose();
	        this.closeEmitter.dispose();
	    }
	    get onError() {
	        return this.errorEmitter.event;
	    }
	    fireError(error) {
	        this.errorEmitter.fire(this.asError(error));
	    }
	    get onClose() {
	        return this.closeEmitter.event;
	    }
	    fireClose() {
	        this.closeEmitter.fire(undefined);
	    }
	    get onPartialMessage() {
	        return this.partialMessageEmitter.event;
	    }
	    firePartialMessage(info) {
	        this.partialMessageEmitter.fire(info);
	    }
	    asError(error) {
	        if (error instanceof Error) {
	            return error;
	        }
	        else {
	            return new Error(`Reader received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
	        }
	    }
	}
	messageReader.AbstractMessageReader = AbstractMessageReader;
	var ResolvedMessageReaderOptions;
	(function (ResolvedMessageReaderOptions) {
	    function fromOptions(options) {
	        let charset;
	        let contentDecoder;
	        const contentDecoders = new Map();
	        let contentTypeDecoder;
	        const contentTypeDecoders = new Map();
	        if (options === undefined || typeof options === 'string') {
	            charset = options ?? 'utf-8';
	        }
	        else {
	            charset = options.charset ?? 'utf-8';
	            if (options.contentDecoder !== undefined) {
	                contentDecoder = options.contentDecoder;
	                contentDecoders.set(contentDecoder.name, contentDecoder);
	            }
	            if (options.contentDecoders !== undefined) {
	                for (const decoder of options.contentDecoders) {
	                    contentDecoders.set(decoder.name, decoder);
	                }
	            }
	            if (options.contentTypeDecoder !== undefined) {
	                contentTypeDecoder = options.contentTypeDecoder;
	                contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
	            }
	            if (options.contentTypeDecoders !== undefined) {
	                for (const decoder of options.contentTypeDecoders) {
	                    contentTypeDecoders.set(decoder.name, decoder);
	                }
	            }
	        }
	        if (contentTypeDecoder === undefined) {
	            contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
	            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
	        }
	        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
	    }
	    ResolvedMessageReaderOptions.fromOptions = fromOptions;
	})(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
	class ReadableStreamMessageReader extends AbstractMessageReader {
	    constructor(readable, options) {
	        super();
	        this.readable = readable;
	        this.options = ResolvedMessageReaderOptions.fromOptions(options);
	        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
	        this._partialMessageTimeout = 10000;
	        this.nextMessageLength = -1;
	        this.messageToken = 0;
	        this.readSemaphore = new semaphore_1.Semaphore(1);
	    }
	    set partialMessageTimeout(timeout) {
	        this._partialMessageTimeout = timeout;
	    }
	    get partialMessageTimeout() {
	        return this._partialMessageTimeout;
	    }
	    listen(callback) {
	        this.nextMessageLength = -1;
	        this.messageToken = 0;
	        this.partialMessageTimer = undefined;
	        this.callback = callback;
	        const result = this.readable.onData((data) => {
	            this.onData(data);
	        });
	        this.readable.onError((error) => this.fireError(error));
	        this.readable.onClose(() => this.fireClose());
	        return result;
	    }
	    onData(data) {
	        try {
	            this.buffer.append(data);
	            while (true) {
	                if (this.nextMessageLength === -1) {
	                    const headers = this.buffer.tryReadHeaders(true);
	                    if (!headers) {
	                        return;
	                    }
	                    const contentLength = headers.get('content-length');
	                    if (!contentLength) {
	                        this.fireError(new Error(`Header must provide a Content-Length property.\n${JSON.stringify(Object.fromEntries(headers))}`));
	                        return;
	                    }
	                    const length = parseInt(contentLength);
	                    if (isNaN(length)) {
	                        this.fireError(new Error(`Content-Length value must be a number. Got ${contentLength}`));
	                        return;
	                    }
	                    this.nextMessageLength = length;
	                }
	                const body = this.buffer.tryReadBody(this.nextMessageLength);
	                if (body === undefined) {
	                    /** We haven't received the full message yet. */
	                    this.setPartialMessageTimer();
	                    return;
	                }
	                this.clearPartialMessageTimer();
	                this.nextMessageLength = -1;
	                // Make sure that we convert one received message after the
	                // other. Otherwise it could happen that a decoding of a second
	                // smaller message finished before the decoding of a first larger
	                // message and then we would deliver the second message first.
	                this.readSemaphore.lock(async () => {
	                    const bytes = this.options.contentDecoder !== undefined
	                        ? await this.options.contentDecoder.decode(body)
	                        : body;
	                    const message = await this.options.contentTypeDecoder.decode(bytes, this.options);
	                    this.callback(message);
	                }).catch((error) => {
	                    this.fireError(error);
	                });
	            }
	        }
	        catch (error) {
	            this.fireError(error);
	        }
	    }
	    clearPartialMessageTimer() {
	        if (this.partialMessageTimer) {
	            this.partialMessageTimer.dispose();
	            this.partialMessageTimer = undefined;
	        }
	    }
	    setPartialMessageTimer() {
	        this.clearPartialMessageTimer();
	        if (this._partialMessageTimeout <= 0) {
	            return;
	        }
	        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
	            this.partialMessageTimer = undefined;
	            if (token === this.messageToken) {
	                this.firePartialMessage({ messageToken: token, waitingTime: timeout });
	                this.setPartialMessageTimer();
	            }
	        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
	    }
	}
	messageReader.ReadableStreamMessageReader = ReadableStreamMessageReader;
	return messageReader;
}

var messageWriter = {};

var hasRequiredMessageWriter;

function requireMessageWriter () {
	if (hasRequiredMessageWriter) return messageWriter;
	hasRequiredMessageWriter = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(messageWriter, "__esModule", { value: true });
	messageWriter.WriteableStreamMessageWriter = messageWriter.AbstractMessageWriter = messageWriter.MessageWriter = void 0;
	const ral_1 = requireRal();
	const Is = requireIs$1();
	const semaphore_1 = requireSemaphore();
	const events_1 = requireEvents();
	const ContentLength = 'Content-Length: ';
	const CRLF = '\r\n';
	var MessageWriter;
	(function (MessageWriter) {
	    function is(value) {
	        let candidate = value;
	        return candidate && Is.func(candidate.dispose) && Is.func(candidate.onClose) &&
	            Is.func(candidate.onError) && Is.func(candidate.write);
	    }
	    MessageWriter.is = is;
	})(MessageWriter || (messageWriter.MessageWriter = MessageWriter = {}));
	class AbstractMessageWriter {
	    constructor() {
	        this.errorEmitter = new events_1.Emitter();
	        this.closeEmitter = new events_1.Emitter();
	    }
	    dispose() {
	        this.errorEmitter.dispose();
	        this.closeEmitter.dispose();
	    }
	    get onError() {
	        return this.errorEmitter.event;
	    }
	    fireError(error, message, count) {
	        this.errorEmitter.fire([this.asError(error), message, count]);
	    }
	    get onClose() {
	        return this.closeEmitter.event;
	    }
	    fireClose() {
	        this.closeEmitter.fire(undefined);
	    }
	    asError(error) {
	        if (error instanceof Error) {
	            return error;
	        }
	        else {
	            return new Error(`Writer received error. Reason: ${Is.string(error.message) ? error.message : 'unknown'}`);
	        }
	    }
	}
	messageWriter.AbstractMessageWriter = AbstractMessageWriter;
	var ResolvedMessageWriterOptions;
	(function (ResolvedMessageWriterOptions) {
	    function fromOptions(options) {
	        if (options === undefined || typeof options === 'string') {
	            return { charset: options ?? 'utf-8', contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
	        }
	        else {
	            return { charset: options.charset ?? 'utf-8', contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
	        }
	    }
	    ResolvedMessageWriterOptions.fromOptions = fromOptions;
	})(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
	class WriteableStreamMessageWriter extends AbstractMessageWriter {
	    constructor(writable, options) {
	        super();
	        this.writable = writable;
	        this.options = ResolvedMessageWriterOptions.fromOptions(options);
	        this.errorCount = 0;
	        this.writeSemaphore = new semaphore_1.Semaphore(1);
	        this.writable.onError((error) => this.fireError(error));
	        this.writable.onClose(() => this.fireClose());
	    }
	    async write(msg) {
	        return this.writeSemaphore.lock(async () => {
	            const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
	                if (this.options.contentEncoder !== undefined) {
	                    return this.options.contentEncoder.encode(buffer);
	                }
	                else {
	                    return buffer;
	                }
	            });
	            return payload.then((buffer) => {
	                const headers = [];
	                headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
	                headers.push(CRLF);
	                return this.doWrite(msg, headers, buffer);
	            }, (error) => {
	                this.fireError(error);
	                throw error;
	            });
	        });
	    }
	    async doWrite(msg, headers, data) {
	        try {
	            await this.writable.write(headers.join(''), 'ascii');
	            return this.writable.write(data);
	        }
	        catch (error) {
	            this.handleError(error, msg);
	            return Promise.reject(error);
	        }
	    }
	    handleError(error, msg) {
	        this.errorCount++;
	        this.fireError(error, msg, this.errorCount);
	    }
	    end() {
	        this.writable.end();
	    }
	}
	messageWriter.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
	return messageWriter;
}

var messageBuffer = {};

var hasRequiredMessageBuffer;

function requireMessageBuffer () {
	if (hasRequiredMessageBuffer) return messageBuffer;
	hasRequiredMessageBuffer = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(messageBuffer, "__esModule", { value: true });
	messageBuffer.AbstractMessageBuffer = void 0;
	const CR = 13;
	const LF = 10;
	const CRLF = '\r\n';
	class AbstractMessageBuffer {
	    constructor(encoding = 'utf-8') {
	        this._encoding = encoding;
	        this._chunks = [];
	        this._totalLength = 0;
	    }
	    get encoding() {
	        return this._encoding;
	    }
	    append(chunk) {
	        const toAppend = typeof chunk === 'string' ? this.fromString(chunk, this._encoding) : chunk;
	        this._chunks.push(toAppend);
	        this._totalLength += toAppend.byteLength;
	    }
	    tryReadHeaders(lowerCaseKeys = false) {
	        if (this._chunks.length === 0) {
	            return undefined;
	        }
	        let state = 0;
	        let chunkIndex = 0;
	        let offset = 0;
	        let chunkBytesRead = 0;
	        row: while (chunkIndex < this._chunks.length) {
	            const chunk = this._chunks[chunkIndex];
	            offset = 0;
	            while (offset < chunk.length) {
	                const value = chunk[offset];
	                switch (value) {
	                    case CR:
	                        switch (state) {
	                            case 0:
	                                state = 1;
	                                break;
	                            case 2:
	                                state = 3;
	                                break;
	                            default:
	                                state = 0;
	                        }
	                        break;
	                    case LF:
	                        switch (state) {
	                            case 1:
	                                state = 2;
	                                break;
	                            case 3:
	                                state = 4;
	                                offset++;
	                                break row;
	                            default:
	                                state = 0;
	                        }
	                        break;
	                    default:
	                        state = 0;
	                }
	                offset++;
	            }
	            chunkBytesRead += chunk.byteLength;
	            chunkIndex++;
	        }
	        if (state !== 4) {
	            return undefined;
	        }
	        // The buffer contains the two CRLF at the end. So we will
	        // have two empty lines after the split at the end as well.
	        const buffer = this._read(chunkBytesRead + offset);
	        const result = new Map();
	        const headers = this.toString(buffer, 'ascii').split(CRLF);
	        if (headers.length < 2) {
	            return result;
	        }
	        for (let i = 0; i < headers.length - 2; i++) {
	            const header = headers[i];
	            const index = header.indexOf(':');
	            if (index === -1) {
	                throw new Error(`Message header must separate key and value using ':'\n${header}`);
	            }
	            const key = header.substr(0, index);
	            const value = header.substr(index + 1).trim();
	            result.set(lowerCaseKeys ? key.toLowerCase() : key, value);
	        }
	        return result;
	    }
	    tryReadBody(length) {
	        if (this._totalLength < length) {
	            return undefined;
	        }
	        return this._read(length);
	    }
	    get numberOfBytes() {
	        return this._totalLength;
	    }
	    _read(byteCount) {
	        if (byteCount === 0) {
	            return this.emptyBuffer();
	        }
	        if (byteCount > this._totalLength) {
	            throw new Error(`Cannot read so many bytes!`);
	        }
	        if (this._chunks[0].byteLength === byteCount) {
	            // super fast path, precisely first chunk must be returned
	            const chunk = this._chunks[0];
	            this._chunks.shift();
	            this._totalLength -= byteCount;
	            return this.asNative(chunk);
	        }
	        if (this._chunks[0].byteLength > byteCount) {
	            // fast path, the reading is entirely within the first chunk
	            const chunk = this._chunks[0];
	            const result = this.asNative(chunk, byteCount);
	            this._chunks[0] = chunk.slice(byteCount);
	            this._totalLength -= byteCount;
	            return result;
	        }
	        const result = this.allocNative(byteCount);
	        let resultOffset = 0;
	        let chunkIndex = 0;
	        while (byteCount > 0) {
	            const chunk = this._chunks[chunkIndex];
	            if (chunk.byteLength > byteCount) {
	                // this chunk will survive
	                const chunkPart = chunk.slice(0, byteCount);
	                result.set(chunkPart, resultOffset);
	                resultOffset += byteCount;
	                this._chunks[chunkIndex] = chunk.slice(byteCount);
	                this._totalLength -= byteCount;
	                byteCount -= byteCount;
	            }
	            else {
	                // this chunk will be entirely read
	                result.set(chunk, resultOffset);
	                resultOffset += chunk.byteLength;
	                this._chunks.shift();
	                this._totalLength -= chunk.byteLength;
	                byteCount -= chunk.byteLength;
	            }
	        }
	        return result;
	    }
	}
	messageBuffer.AbstractMessageBuffer = AbstractMessageBuffer;
	return messageBuffer;
}

var connection$1 = {};

var hasRequiredConnection$1;

function requireConnection$1 () {
	if (hasRequiredConnection$1) return connection$1;
	hasRequiredConnection$1 = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createMessageConnection = exports.ConnectionOptions = exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.RequestCancellationReceiverStrategy = exports.IdCancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
		const ral_1 = requireRal();
		const Is = requireIs$1();
		const messages_1 = requireMessages$1();
		const linkedMap_1 = requireLinkedMap();
		const events_1 = requireEvents();
		const cancellation_1 = requireCancellation();
		var CancelNotification;
		(function (CancelNotification) {
		    CancelNotification.type = new messages_1.NotificationType('$/cancelRequest');
		})(CancelNotification || (CancelNotification = {}));
		var ProgressToken;
		(function (ProgressToken) {
		    function is(value) {
		        return typeof value === 'string' || typeof value === 'number';
		    }
		    ProgressToken.is = is;
		})(ProgressToken || (exports.ProgressToken = ProgressToken = {}));
		var ProgressNotification;
		(function (ProgressNotification) {
		    ProgressNotification.type = new messages_1.NotificationType('$/progress');
		})(ProgressNotification || (ProgressNotification = {}));
		class ProgressType {
		    constructor() {
		    }
		}
		exports.ProgressType = ProgressType;
		var StarRequestHandler;
		(function (StarRequestHandler) {
		    function is(value) {
		        return Is.func(value);
		    }
		    StarRequestHandler.is = is;
		})(StarRequestHandler || (StarRequestHandler = {}));
		exports.NullLogger = Object.freeze({
		    error: () => { },
		    warn: () => { },
		    info: () => { },
		    log: () => { }
		});
		var Trace;
		(function (Trace) {
		    Trace[Trace["Off"] = 0] = "Off";
		    Trace[Trace["Messages"] = 1] = "Messages";
		    Trace[Trace["Compact"] = 2] = "Compact";
		    Trace[Trace["Verbose"] = 3] = "Verbose";
		})(Trace || (exports.Trace = Trace = {}));
		var TraceValues;
		(function (TraceValues) {
		    /**
		     * Turn tracing off.
		     */
		    TraceValues.Off = 'off';
		    /**
		     * Trace messages only.
		     */
		    TraceValues.Messages = 'messages';
		    /**
		     * Compact message tracing.
		     */
		    TraceValues.Compact = 'compact';
		    /**
		     * Verbose message tracing.
		     */
		    TraceValues.Verbose = 'verbose';
		})(TraceValues || (exports.TraceValues = TraceValues = {}));
		(function (Trace) {
		    function fromString(value) {
		        if (!Is.string(value)) {
		            return Trace.Off;
		        }
		        value = value.toLowerCase();
		        switch (value) {
		            case 'off':
		                return Trace.Off;
		            case 'messages':
		                return Trace.Messages;
		            case 'compact':
		                return Trace.Compact;
		            case 'verbose':
		                return Trace.Verbose;
		            default:
		                return Trace.Off;
		        }
		    }
		    Trace.fromString = fromString;
		    function toString(value) {
		        switch (value) {
		            case Trace.Off:
		                return 'off';
		            case Trace.Messages:
		                return 'messages';
		            case Trace.Compact:
		                return 'compact';
		            case Trace.Verbose:
		                return 'verbose';
		            default:
		                return 'off';
		        }
		    }
		    Trace.toString = toString;
		})(Trace || (exports.Trace = Trace = {}));
		var TraceFormat;
		(function (TraceFormat) {
		    TraceFormat["Text"] = "text";
		    TraceFormat["JSON"] = "json";
		})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
		(function (TraceFormat) {
		    function fromString(value) {
		        if (!Is.string(value)) {
		            return TraceFormat.Text;
		        }
		        value = value.toLowerCase();
		        if (value === 'json') {
		            return TraceFormat.JSON;
		        }
		        else {
		            return TraceFormat.Text;
		        }
		    }
		    TraceFormat.fromString = fromString;
		})(TraceFormat || (exports.TraceFormat = TraceFormat = {}));
		var SetTraceNotification;
		(function (SetTraceNotification) {
		    SetTraceNotification.type = new messages_1.NotificationType('$/setTrace');
		})(SetTraceNotification || (exports.SetTraceNotification = SetTraceNotification = {}));
		var LogTraceNotification;
		(function (LogTraceNotification) {
		    LogTraceNotification.type = new messages_1.NotificationType('$/logTrace');
		})(LogTraceNotification || (exports.LogTraceNotification = LogTraceNotification = {}));
		var ConnectionErrors;
		(function (ConnectionErrors) {
		    /**
		     * The connection is closed.
		     */
		    ConnectionErrors[ConnectionErrors["Closed"] = 1] = "Closed";
		    /**
		     * The connection got disposed.
		     */
		    ConnectionErrors[ConnectionErrors["Disposed"] = 2] = "Disposed";
		    /**
		     * The connection is already in listening mode.
		     */
		    ConnectionErrors[ConnectionErrors["AlreadyListening"] = 3] = "AlreadyListening";
		})(ConnectionErrors || (exports.ConnectionErrors = ConnectionErrors = {}));
		class ConnectionError extends Error {
		    constructor(code, message) {
		        super(message);
		        this.code = code;
		        Object.setPrototypeOf(this, ConnectionError.prototype);
		    }
		}
		exports.ConnectionError = ConnectionError;
		var ConnectionStrategy;
		(function (ConnectionStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.cancelUndispatched);
		    }
		    ConnectionStrategy.is = is;
		})(ConnectionStrategy || (exports.ConnectionStrategy = ConnectionStrategy = {}));
		var IdCancellationReceiverStrategy;
		(function (IdCancellationReceiverStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && (candidate.kind === undefined || candidate.kind === 'id') && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
		    }
		    IdCancellationReceiverStrategy.is = is;
		})(IdCancellationReceiverStrategy || (exports.IdCancellationReceiverStrategy = IdCancellationReceiverStrategy = {}));
		var RequestCancellationReceiverStrategy;
		(function (RequestCancellationReceiverStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && candidate.kind === 'request' && Is.func(candidate.createCancellationTokenSource) && (candidate.dispose === undefined || Is.func(candidate.dispose));
		    }
		    RequestCancellationReceiverStrategy.is = is;
		})(RequestCancellationReceiverStrategy || (exports.RequestCancellationReceiverStrategy = RequestCancellationReceiverStrategy = {}));
		var CancellationReceiverStrategy;
		(function (CancellationReceiverStrategy) {
		    CancellationReceiverStrategy.Message = Object.freeze({
		        createCancellationTokenSource(_) {
		            return new cancellation_1.CancellationTokenSource();
		        }
		    });
		    function is(value) {
		        return IdCancellationReceiverStrategy.is(value) || RequestCancellationReceiverStrategy.is(value);
		    }
		    CancellationReceiverStrategy.is = is;
		})(CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = CancellationReceiverStrategy = {}));
		var CancellationSenderStrategy;
		(function (CancellationSenderStrategy) {
		    CancellationSenderStrategy.Message = Object.freeze({
		        sendCancellation(conn, id) {
		            return conn.sendNotification(CancelNotification.type, { id });
		        },
		        cleanup(_) { }
		    });
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.sendCancellation) && Is.func(candidate.cleanup);
		    }
		    CancellationSenderStrategy.is = is;
		})(CancellationSenderStrategy || (exports.CancellationSenderStrategy = CancellationSenderStrategy = {}));
		var CancellationStrategy;
		(function (CancellationStrategy) {
		    CancellationStrategy.Message = Object.freeze({
		        receiver: CancellationReceiverStrategy.Message,
		        sender: CancellationSenderStrategy.Message
		    });
		    function is(value) {
		        const candidate = value;
		        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
		    }
		    CancellationStrategy.is = is;
		})(CancellationStrategy || (exports.CancellationStrategy = CancellationStrategy = {}));
		var MessageStrategy;
		(function (MessageStrategy) {
		    function is(value) {
		        const candidate = value;
		        return candidate && Is.func(candidate.handleMessage);
		    }
		    MessageStrategy.is = is;
		})(MessageStrategy || (exports.MessageStrategy = MessageStrategy = {}));
		var ConnectionOptions;
		(function (ConnectionOptions) {
		    function is(value) {
		        const candidate = value;
		        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy) || MessageStrategy.is(candidate.messageStrategy));
		    }
		    ConnectionOptions.is = is;
		})(ConnectionOptions || (exports.ConnectionOptions = ConnectionOptions = {}));
		var ConnectionState;
		(function (ConnectionState) {
		    ConnectionState[ConnectionState["New"] = 1] = "New";
		    ConnectionState[ConnectionState["Listening"] = 2] = "Listening";
		    ConnectionState[ConnectionState["Closed"] = 3] = "Closed";
		    ConnectionState[ConnectionState["Disposed"] = 4] = "Disposed";
		})(ConnectionState || (ConnectionState = {}));
		function createMessageConnection(messageReader, messageWriter, _logger, options) {
		    const logger = _logger !== undefined ? _logger : exports.NullLogger;
		    let sequenceNumber = 0;
		    let notificationSequenceNumber = 0;
		    let unknownResponseSequenceNumber = 0;
		    const version = '2.0';
		    let starRequestHandler = undefined;
		    const requestHandlers = new Map();
		    let starNotificationHandler = undefined;
		    const notificationHandlers = new Map();
		    const progressHandlers = new Map();
		    let timer;
		    let messageQueue = new linkedMap_1.LinkedMap();
		    let responsePromises = new Map();
		    let knownCanceledRequests = new Set();
		    let requestTokens = new Map();
		    let trace = Trace.Off;
		    let traceFormat = TraceFormat.Text;
		    let tracer;
		    let state = ConnectionState.New;
		    const errorEmitter = new events_1.Emitter();
		    const closeEmitter = new events_1.Emitter();
		    const unhandledNotificationEmitter = new events_1.Emitter();
		    const unhandledProgressEmitter = new events_1.Emitter();
		    const disposeEmitter = new events_1.Emitter();
		    const cancellationStrategy = (options && options.cancellationStrategy) ? options.cancellationStrategy : CancellationStrategy.Message;
		    function createRequestQueueKey(id) {
		        if (id === null) {
		            throw new Error(`Can't send requests with id null since the response can't be correlated.`);
		        }
		        return 'req-' + id.toString();
		    }
		    function createResponseQueueKey(id) {
		        if (id === null) {
		            return 'res-unknown-' + (++unknownResponseSequenceNumber).toString();
		        }
		        else {
		            return 'res-' + id.toString();
		        }
		    }
		    function createNotificationQueueKey() {
		        return 'not-' + (++notificationSequenceNumber).toString();
		    }
		    function addMessageToQueue(queue, message) {
		        if (messages_1.Message.isRequest(message)) {
		            queue.set(createRequestQueueKey(message.id), message);
		        }
		        else if (messages_1.Message.isResponse(message)) {
		            queue.set(createResponseQueueKey(message.id), message);
		        }
		        else {
		            queue.set(createNotificationQueueKey(), message);
		        }
		    }
		    function cancelUndispatched(_message) {
		        return undefined;
		    }
		    function isListening() {
		        return state === ConnectionState.Listening;
		    }
		    function isClosed() {
		        return state === ConnectionState.Closed;
		    }
		    function isDisposed() {
		        return state === ConnectionState.Disposed;
		    }
		    function closeHandler() {
		        if (state === ConnectionState.New || state === ConnectionState.Listening) {
		            state = ConnectionState.Closed;
		            closeEmitter.fire(undefined);
		        }
		        // If the connection is disposed don't sent close events.
		    }
		    function readErrorHandler(error) {
		        errorEmitter.fire([error, undefined, undefined]);
		    }
		    function writeErrorHandler(data) {
		        errorEmitter.fire(data);
		    }
		    messageReader.onClose(closeHandler);
		    messageReader.onError(readErrorHandler);
		    messageWriter.onClose(closeHandler);
		    messageWriter.onError(writeErrorHandler);
		    function triggerMessageQueue() {
		        if (timer || messageQueue.size === 0) {
		            return;
		        }
		        timer = (0, ral_1.default)().timer.setImmediate(() => {
		            timer = undefined;
		            processMessageQueue();
		        });
		    }
		    function handleMessage(message) {
		        if (messages_1.Message.isRequest(message)) {
		            handleRequest(message);
		        }
		        else if (messages_1.Message.isNotification(message)) {
		            handleNotification(message);
		        }
		        else if (messages_1.Message.isResponse(message)) {
		            handleResponse(message);
		        }
		        else {
		            handleInvalidMessage(message);
		        }
		    }
		    function processMessageQueue() {
		        if (messageQueue.size === 0) {
		            return;
		        }
		        const message = messageQueue.shift();
		        try {
		            const messageStrategy = options?.messageStrategy;
		            if (MessageStrategy.is(messageStrategy)) {
		                messageStrategy.handleMessage(message, handleMessage);
		            }
		            else {
		                handleMessage(message);
		            }
		        }
		        finally {
		            triggerMessageQueue();
		        }
		    }
		    const callback = (message) => {
		        try {
		            // We have received a cancellation message. Check if the message is still in the queue
		            // and cancel it if allowed to do so.
		            if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
		                const cancelId = message.params.id;
		                const key = createRequestQueueKey(cancelId);
		                const toCancel = messageQueue.get(key);
		                if (messages_1.Message.isRequest(toCancel)) {
		                    const strategy = options?.connectionStrategy;
		                    const response = (strategy && strategy.cancelUndispatched) ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
		                    if (response && (response.error !== undefined || response.result !== undefined)) {
		                        messageQueue.delete(key);
		                        requestTokens.delete(cancelId);
		                        response.id = toCancel.id;
		                        traceSendingResponse(response, message.method, Date.now());
		                        messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
		                        return;
		                    }
		                }
		                const cancellationToken = requestTokens.get(cancelId);
		                // The request is already running. Cancel the token
		                if (cancellationToken !== undefined) {
		                    cancellationToken.cancel();
		                    traceReceivedNotification(message);
		                    return;
		                }
		                else {
		                    // Remember the cancel but still queue the message to
		                    // clean up state in process message.
		                    knownCanceledRequests.add(cancelId);
		                }
		            }
		            addMessageToQueue(messageQueue, message);
		        }
		        finally {
		            triggerMessageQueue();
		        }
		    };
		    function handleRequest(requestMessage) {
		        if (isDisposed()) {
		            // we return here silently since we fired an event when the
		            // connection got disposed.
		            return;
		        }
		        function reply(resultOrError, method, startTime) {
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id
		            };
		            if (resultOrError instanceof messages_1.ResponseError) {
		                message.error = resultOrError.toJson();
		            }
		            else {
		                message.result = resultOrError === undefined ? null : resultOrError;
		            }
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        function replyError(error, method, startTime) {
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id,
		                error: error.toJson()
		            };
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        function replySuccess(result, method, startTime) {
		            // The JSON RPC defines that a response must either have a result or an error
		            // So we can't treat undefined as a valid response result.
		            if (result === undefined) {
		                result = null;
		            }
		            const message = {
		                jsonrpc: version,
		                id: requestMessage.id,
		                result: result
		            };
		            traceSendingResponse(message, method, startTime);
		            messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
		        }
		        traceReceivedRequest(requestMessage);
		        const element = requestHandlers.get(requestMessage.method);
		        let type;
		        let requestHandler;
		        if (element) {
		            type = element.type;
		            requestHandler = element.handler;
		        }
		        const startTime = Date.now();
		        if (requestHandler || starRequestHandler) {
		            const tokenKey = requestMessage.id ?? String(Date.now()); //
		            const cancellationSource = IdCancellationReceiverStrategy.is(cancellationStrategy.receiver)
		                ? cancellationStrategy.receiver.createCancellationTokenSource(tokenKey)
		                : cancellationStrategy.receiver.createCancellationTokenSource(requestMessage);
		            if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
		                cancellationSource.cancel();
		            }
		            if (requestMessage.id !== null) {
		                requestTokens.set(tokenKey, cancellationSource);
		            }
		            try {
		                let handlerResult;
		                if (requestHandler) {
		                    if (requestMessage.params === undefined) {
		                        if (type !== undefined && type.numberOfParams !== 0) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(cancellationSource.token);
		                    }
		                    else if (Array.isArray(requestMessage.params)) {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byName) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
		                    }
		                    else {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
		                            return;
		                        }
		                        handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
		                    }
		                }
		                else if (starRequestHandler) {
		                    handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
		                }
		                const promise = handlerResult;
		                if (!handlerResult) {
		                    requestTokens.delete(tokenKey);
		                    replySuccess(handlerResult, requestMessage.method, startTime);
		                }
		                else if (promise.then) {
		                    promise.then((resultOrError) => {
		                        requestTokens.delete(tokenKey);
		                        reply(resultOrError, requestMessage.method, startTime);
		                    }, error => {
		                        requestTokens.delete(tokenKey);
		                        if (error instanceof messages_1.ResponseError) {
		                            replyError(error, requestMessage.method, startTime);
		                        }
		                        else if (error && Is.string(error.message)) {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
		                        }
		                        else {
		                            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
		                        }
		                    });
		                }
		                else {
		                    requestTokens.delete(tokenKey);
		                    reply(handlerResult, requestMessage.method, startTime);
		                }
		            }
		            catch (error) {
		                requestTokens.delete(tokenKey);
		                if (error instanceof messages_1.ResponseError) {
		                    reply(error, requestMessage.method, startTime);
		                }
		                else if (error && Is.string(error.message)) {
		                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
		                }
		                else {
		                    replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
		                }
		            }
		        }
		        else {
		            replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
		        }
		    }
		    function handleResponse(responseMessage) {
		        if (isDisposed()) {
		            // See handle request.
		            return;
		        }
		        if (responseMessage.id === null) {
		            if (responseMessage.error) {
		                logger.error(`Received response message without id: Error is: \n${JSON.stringify(responseMessage.error, undefined, 4)}`);
		            }
		            else {
		                logger.error(`Received response message without id. No further error information provided.`);
		            }
		        }
		        else {
		            const key = responseMessage.id;
		            const responsePromise = responsePromises.get(key);
		            traceReceivedResponse(responseMessage, responsePromise);
		            if (responsePromise !== undefined) {
		                responsePromises.delete(key);
		                try {
		                    if (responseMessage.error) {
		                        const error = responseMessage.error;
		                        responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
		                    }
		                    else if (responseMessage.result !== undefined) {
		                        responsePromise.resolve(responseMessage.result);
		                    }
		                    else {
		                        throw new Error('Should never happen.');
		                    }
		                }
		                catch (error) {
		                    if (error.message) {
		                        logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
		                    }
		                    else {
		                        logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
		                    }
		                }
		            }
		        }
		    }
		    function handleNotification(message) {
		        if (isDisposed()) {
		            // See handle request.
		            return;
		        }
		        let type = undefined;
		        let notificationHandler;
		        if (message.method === CancelNotification.type.method) {
		            const cancelId = message.params.id;
		            knownCanceledRequests.delete(cancelId);
		            traceReceivedNotification(message);
		            return;
		        }
		        else {
		            const element = notificationHandlers.get(message.method);
		            if (element) {
		                notificationHandler = element.handler;
		                type = element.type;
		            }
		        }
		        if (notificationHandler || starNotificationHandler) {
		            try {
		                traceReceivedNotification(message);
		                if (notificationHandler) {
		                    if (message.params === undefined) {
		                        if (type !== undefined) {
		                            if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
		                                logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
		                            }
		                        }
		                        notificationHandler();
		                    }
		                    else if (Array.isArray(message.params)) {
		                        // There are JSON-RPC libraries that send progress message as positional params although
		                        // specified as named. So convert them if this is the case.
		                        const params = message.params;
		                        if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
		                            notificationHandler({ token: params[0], value: params[1] });
		                        }
		                        else {
		                            if (type !== undefined) {
		                                if (type.parameterStructures === messages_1.ParameterStructures.byName) {
		                                    logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
		                                }
		                                if (type.numberOfParams !== message.params.length) {
		                                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
		                                }
		                            }
		                            notificationHandler(...params);
		                        }
		                    }
		                    else {
		                        if (type !== undefined && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
		                            logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
		                        }
		                        notificationHandler(message.params);
		                    }
		                }
		                else if (starNotificationHandler) {
		                    starNotificationHandler(message.method, message.params);
		                }
		            }
		            catch (error) {
		                if (error.message) {
		                    logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
		                }
		                else {
		                    logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
		                }
		            }
		        }
		        else {
		            unhandledNotificationEmitter.fire(message);
		        }
		    }
		    function handleInvalidMessage(message) {
		        if (!message) {
		            logger.error('Received empty message.');
		            return;
		        }
		        logger.error(`Received message which is neither a response nor a notification message:\n${JSON.stringify(message, null, 4)}`);
		        // Test whether we find an id to reject the promise
		        const responseMessage = message;
		        if (Is.string(responseMessage.id) || Is.number(responseMessage.id)) {
		            const key = responseMessage.id;
		            const responseHandler = responsePromises.get(key);
		            if (responseHandler) {
		                responseHandler.reject(new Error('The received response has neither a result nor an error property.'));
		            }
		        }
		    }
		    function stringifyTrace(params) {
		        if (params === undefined || params === null) {
		            return undefined;
		        }
		        switch (trace) {
		            case Trace.Verbose:
		                return JSON.stringify(params, null, 4);
		            case Trace.Compact:
		                return JSON.stringify(params);
		            default:
		                return undefined;
		        }
		    }
		    function traceSendingRequest(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
		                data = `Params: ${stringifyTrace(message.params)}\n\n`;
		            }
		            tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
		        }
		        else {
		            logLSPMessage('send-request', message);
		        }
		    }
		    function traceSendingNotification(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.params) {
		                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
		                }
		                else {
		                    data = 'No parameters provided.\n\n';
		                }
		            }
		            tracer.log(`Sending notification '${message.method}'.`, data);
		        }
		        else {
		            logLSPMessage('send-notification', message);
		        }
		    }
		    function traceSendingResponse(message, method, startTime) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.error && message.error.data) {
		                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
		                }
		                else {
		                    if (message.result) {
		                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
		                    }
		                    else if (message.error === undefined) {
		                        data = 'No result returned.\n\n';
		                    }
		                }
		            }
		            tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
		        }
		        else {
		            logLSPMessage('send-response', message);
		        }
		    }
		    function traceReceivedRequest(message) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if ((trace === Trace.Verbose || trace === Trace.Compact) && message.params) {
		                data = `Params: ${stringifyTrace(message.params)}\n\n`;
		            }
		            tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
		        }
		        else {
		            logLSPMessage('receive-request', message);
		        }
		    }
		    function traceReceivedNotification(message) {
		        if (trace === Trace.Off || !tracer || message.method === LogTraceNotification.type.method) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.params) {
		                    data = `Params: ${stringifyTrace(message.params)}\n\n`;
		                }
		                else {
		                    data = 'No parameters provided.\n\n';
		                }
		            }
		            tracer.log(`Received notification '${message.method}'.`, data);
		        }
		        else {
		            logLSPMessage('receive-notification', message);
		        }
		    }
		    function traceReceivedResponse(message, responsePromise) {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        if (traceFormat === TraceFormat.Text) {
		            let data = undefined;
		            if (trace === Trace.Verbose || trace === Trace.Compact) {
		                if (message.error && message.error.data) {
		                    data = `Error data: ${stringifyTrace(message.error.data)}\n\n`;
		                }
		                else {
		                    if (message.result) {
		                        data = `Result: ${stringifyTrace(message.result)}\n\n`;
		                    }
		                    else if (message.error === undefined) {
		                        data = 'No result returned.\n\n';
		                    }
		                }
		            }
		            if (responsePromise) {
		                const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : '';
		                tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
		            }
		            else {
		                tracer.log(`Received response ${message.id} without active response promise.`, data);
		            }
		        }
		        else {
		            logLSPMessage('receive-response', message);
		        }
		    }
		    function logLSPMessage(type, message) {
		        if (!tracer || trace === Trace.Off) {
		            return;
		        }
		        const lspMessage = {
		            isLSPMessage: true,
		            type,
		            message,
		            timestamp: Date.now()
		        };
		        tracer.log(lspMessage);
		    }
		    function throwIfClosedOrDisposed() {
		        if (isClosed()) {
		            throw new ConnectionError(ConnectionErrors.Closed, 'Connection is closed.');
		        }
		        if (isDisposed()) {
		            throw new ConnectionError(ConnectionErrors.Disposed, 'Connection is disposed.');
		        }
		    }
		    function throwIfListening() {
		        if (isListening()) {
		            throw new ConnectionError(ConnectionErrors.AlreadyListening, 'Connection is already listening');
		        }
		    }
		    function throwIfNotListening() {
		        if (!isListening()) {
		            throw new Error('Call listen() first.');
		        }
		    }
		    function undefinedToNull(param) {
		        if (param === undefined) {
		            return null;
		        }
		        else {
		            return param;
		        }
		    }
		    function nullToUndefined(param) {
		        if (param === null) {
		            return undefined;
		        }
		        else {
		            return param;
		        }
		    }
		    function isNamedParam(param) {
		        return param !== undefined && param !== null && !Array.isArray(param) && typeof param === 'object';
		    }
		    function computeSingleParam(parameterStructures, param) {
		        switch (parameterStructures) {
		            case messages_1.ParameterStructures.auto:
		                if (isNamedParam(param)) {
		                    return nullToUndefined(param);
		                }
		                else {
		                    return [undefinedToNull(param)];
		                }
		            case messages_1.ParameterStructures.byName:
		                if (!isNamedParam(param)) {
		                    throw new Error(`Received parameters by name but param is not an object literal.`);
		                }
		                return nullToUndefined(param);
		            case messages_1.ParameterStructures.byPosition:
		                return [undefinedToNull(param)];
		            default:
		                throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
		        }
		    }
		    function computeMessageParams(type, params) {
		        let result;
		        const numberOfParams = type.numberOfParams;
		        switch (numberOfParams) {
		            case 0:
		                result = undefined;
		                break;
		            case 1:
		                result = computeSingleParam(type.parameterStructures, params[0]);
		                break;
		            default:
		                result = [];
		                for (let i = 0; i < params.length && i < numberOfParams; i++) {
		                    result.push(undefinedToNull(params[i]));
		                }
		                if (params.length < numberOfParams) {
		                    for (let i = params.length; i < numberOfParams; i++) {
		                        result.push(null);
		                    }
		                }
		                break;
		        }
		        return result;
		    }
		    const connection = {
		        sendNotification: (type, ...args) => {
		            throwIfClosedOrDisposed();
		            let method;
		            let messageParams;
		            if (Is.string(type)) {
		                method = type;
		                const first = args[0];
		                let paramStart = 0;
		                let parameterStructures = messages_1.ParameterStructures.auto;
		                if (messages_1.ParameterStructures.is(first)) {
		                    paramStart = 1;
		                    parameterStructures = first;
		                }
		                let paramEnd = args.length;
		                const numberOfParams = paramEnd - paramStart;
		                switch (numberOfParams) {
		                    case 0:
		                        messageParams = undefined;
		                        break;
		                    case 1:
		                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
		                        break;
		                    default:
		                        if (parameterStructures === messages_1.ParameterStructures.byName) {
		                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
		                        }
		                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
		                        break;
		                }
		            }
		            else {
		                const params = args;
		                method = type.method;
		                messageParams = computeMessageParams(type, params);
		            }
		            const notificationMessage = {
		                jsonrpc: version,
		                method: method,
		                params: messageParams
		            };
		            traceSendingNotification(notificationMessage);
		            return messageWriter.write(notificationMessage).catch((error) => {
		                logger.error(`Sending notification failed.`);
		                throw error;
		            });
		        },
		        onNotification: (type, handler) => {
		            throwIfClosedOrDisposed();
		            let method;
		            if (Is.func(type)) {
		                starNotificationHandler = type;
		            }
		            else if (handler) {
		                if (Is.string(type)) {
		                    method = type;
		                    notificationHandlers.set(type, { type: undefined, handler });
		                }
		                else {
		                    method = type.method;
		                    notificationHandlers.set(type.method, { type, handler });
		                }
		            }
		            return {
		                dispose: () => {
		                    if (method !== undefined) {
		                        notificationHandlers.delete(method);
		                    }
		                    else {
		                        starNotificationHandler = undefined;
		                    }
		                }
		            };
		        },
		        onProgress: (_type, token, handler) => {
		            if (progressHandlers.has(token)) {
		                throw new Error(`Progress handler for token ${token} already registered`);
		            }
		            progressHandlers.set(token, handler);
		            return {
		                dispose: () => {
		                    progressHandlers.delete(token);
		                }
		            };
		        },
		        sendProgress: (_type, token, value) => {
		            // This should not await but simple return to ensure that we don't have another
		            // async scheduling. Otherwise one send could overtake another send.
		            return connection.sendNotification(ProgressNotification.type, { token, value });
		        },
		        onUnhandledProgress: unhandledProgressEmitter.event,
		        sendRequest: (type, ...args) => {
		            throwIfClosedOrDisposed();
		            throwIfNotListening();
		            let method;
		            let messageParams;
		            let token = undefined;
		            if (Is.string(type)) {
		                method = type;
		                const first = args[0];
		                const last = args[args.length - 1];
		                let paramStart = 0;
		                let parameterStructures = messages_1.ParameterStructures.auto;
		                if (messages_1.ParameterStructures.is(first)) {
		                    paramStart = 1;
		                    parameterStructures = first;
		                }
		                let paramEnd = args.length;
		                if (cancellation_1.CancellationToken.is(last)) {
		                    paramEnd = paramEnd - 1;
		                    token = last;
		                }
		                const numberOfParams = paramEnd - paramStart;
		                switch (numberOfParams) {
		                    case 0:
		                        messageParams = undefined;
		                        break;
		                    case 1:
		                        messageParams = computeSingleParam(parameterStructures, args[paramStart]);
		                        break;
		                    default:
		                        if (parameterStructures === messages_1.ParameterStructures.byName) {
		                            throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
		                        }
		                        messageParams = args.slice(paramStart, paramEnd).map(value => undefinedToNull(value));
		                        break;
		                }
		            }
		            else {
		                const params = args;
		                method = type.method;
		                messageParams = computeMessageParams(type, params);
		                const numberOfParams = type.numberOfParams;
		                token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : undefined;
		            }
		            const id = sequenceNumber++;
		            let disposable;
		            if (token) {
		                disposable = token.onCancellationRequested(() => {
		                    const p = cancellationStrategy.sender.sendCancellation(connection, id);
		                    if (p === undefined) {
		                        logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
		                        return Promise.resolve();
		                    }
		                    else {
		                        return p.catch(() => {
		                            logger.log(`Sending cancellation messages for id ${id} failed`);
		                        });
		                    }
		                });
		            }
		            const requestMessage = {
		                jsonrpc: version,
		                id: id,
		                method: method,
		                params: messageParams
		            };
		            traceSendingRequest(requestMessage);
		            if (typeof cancellationStrategy.sender.enableCancellation === 'function') {
		                cancellationStrategy.sender.enableCancellation(requestMessage);
		            }
		            return new Promise(async (resolve, reject) => {
		                const resolveWithCleanup = (r) => {
		                    resolve(r);
		                    cancellationStrategy.sender.cleanup(id);
		                    disposable?.dispose();
		                };
		                const rejectWithCleanup = (r) => {
		                    reject(r);
		                    cancellationStrategy.sender.cleanup(id);
		                    disposable?.dispose();
		                };
		                const responsePromise = { method: method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
		                try {
		                    await messageWriter.write(requestMessage);
		                    responsePromises.set(id, responsePromise);
		                }
		                catch (error) {
		                    logger.error(`Sending request failed.`);
		                    // Writing the message failed. So we need to reject the promise.
		                    responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, error.message ? error.message : 'Unknown reason'));
		                    throw error;
		                }
		            });
		        },
		        onRequest: (type, handler) => {
		            throwIfClosedOrDisposed();
		            let method = null;
		            if (StarRequestHandler.is(type)) {
		                method = undefined;
		                starRequestHandler = type;
		            }
		            else if (Is.string(type)) {
		                method = null;
		                if (handler !== undefined) {
		                    method = type;
		                    requestHandlers.set(type, { handler: handler, type: undefined });
		                }
		            }
		            else {
		                if (handler !== undefined) {
		                    method = type.method;
		                    requestHandlers.set(type.method, { type, handler });
		                }
		            }
		            return {
		                dispose: () => {
		                    if (method === null) {
		                        return;
		                    }
		                    if (method !== undefined) {
		                        requestHandlers.delete(method);
		                    }
		                    else {
		                        starRequestHandler = undefined;
		                    }
		                }
		            };
		        },
		        hasPendingResponse: () => {
		            return responsePromises.size > 0;
		        },
		        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
		            let _sendNotification = false;
		            let _traceFormat = TraceFormat.Text;
		            if (sendNotificationOrTraceOptions !== undefined) {
		                if (Is.boolean(sendNotificationOrTraceOptions)) {
		                    _sendNotification = sendNotificationOrTraceOptions;
		                }
		                else {
		                    _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
		                    _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
		                }
		            }
		            trace = _value;
		            traceFormat = _traceFormat;
		            if (trace === Trace.Off) {
		                tracer = undefined;
		            }
		            else {
		                tracer = _tracer;
		            }
		            if (_sendNotification && !isClosed() && !isDisposed()) {
		                await connection.sendNotification(SetTraceNotification.type, { value: Trace.toString(_value) });
		            }
		        },
		        onError: errorEmitter.event,
		        onClose: closeEmitter.event,
		        onUnhandledNotification: unhandledNotificationEmitter.event,
		        onDispose: disposeEmitter.event,
		        end: () => {
		            messageWriter.end();
		        },
		        dispose: () => {
		            if (isDisposed()) {
		                return;
		            }
		            state = ConnectionState.Disposed;
		            disposeEmitter.fire(undefined);
		            const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, 'Pending response rejected since connection got disposed');
		            for (const promise of responsePromises.values()) {
		                promise.reject(error);
		            }
		            responsePromises = new Map();
		            requestTokens = new Map();
		            knownCanceledRequests = new Set();
		            messageQueue = new linkedMap_1.LinkedMap();
		            // Test for backwards compatibility
		            if (Is.func(messageWriter.dispose)) {
		                messageWriter.dispose();
		            }
		            if (Is.func(messageReader.dispose)) {
		                messageReader.dispose();
		            }
		        },
		        listen: () => {
		            throwIfClosedOrDisposed();
		            throwIfListening();
		            state = ConnectionState.Listening;
		            messageReader.listen(callback);
		        },
		        inspect: () => {
		            // eslint-disable-next-line no-console
		            (0, ral_1.default)().console.log('inspect');
		        }
		    };
		    connection.onNotification(LogTraceNotification.type, (params) => {
		        if (trace === Trace.Off || !tracer) {
		            return;
		        }
		        const verbose = trace === Trace.Verbose || trace === Trace.Compact;
		        tracer.log(params.message, verbose ? params.verbose : undefined);
		    });
		    connection.onNotification(ProgressNotification.type, (params) => {
		        const handler = progressHandlers.get(params.token);
		        if (handler) {
		            handler(params.value);
		        }
		        else {
		            unhandledProgressEmitter.fire(params);
		        }
		    });
		    return connection;
		}
		exports.createMessageConnection = createMessageConnection; 
	} (connection$1));
	return connection$1;
}

var hasRequiredApi$2;

function requireApi$2 () {
	if (hasRequiredApi$2) return api$2;
	hasRequiredApi$2 = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		/// <reference path="../../typings/thenable.d.ts" />
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.AbstractMessageBuffer = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.SharedArrayReceiverStrategy = exports.SharedArraySenderStrategy = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
		exports.MessageStrategy = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = void 0;
		const messages_1 = requireMessages$1();
		Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return messages_1.Message; } });
		Object.defineProperty(exports, "RequestType", { enumerable: true, get: function () { return messages_1.RequestType; } });
		Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function () { return messages_1.RequestType0; } });
		Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function () { return messages_1.RequestType1; } });
		Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function () { return messages_1.RequestType2; } });
		Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function () { return messages_1.RequestType3; } });
		Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function () { return messages_1.RequestType4; } });
		Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function () { return messages_1.RequestType5; } });
		Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function () { return messages_1.RequestType6; } });
		Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function () { return messages_1.RequestType7; } });
		Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function () { return messages_1.RequestType8; } });
		Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function () { return messages_1.RequestType9; } });
		Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function () { return messages_1.ResponseError; } });
		Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function () { return messages_1.ErrorCodes; } });
		Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function () { return messages_1.NotificationType; } });
		Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function () { return messages_1.NotificationType0; } });
		Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function () { return messages_1.NotificationType1; } });
		Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function () { return messages_1.NotificationType2; } });
		Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function () { return messages_1.NotificationType3; } });
		Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function () { return messages_1.NotificationType4; } });
		Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function () { return messages_1.NotificationType5; } });
		Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function () { return messages_1.NotificationType6; } });
		Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function () { return messages_1.NotificationType7; } });
		Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function () { return messages_1.NotificationType8; } });
		Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function () { return messages_1.NotificationType9; } });
		Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function () { return messages_1.ParameterStructures; } });
		const linkedMap_1 = requireLinkedMap();
		Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function () { return linkedMap_1.LinkedMap; } });
		Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function () { return linkedMap_1.LRUCache; } });
		Object.defineProperty(exports, "Touch", { enumerable: true, get: function () { return linkedMap_1.Touch; } });
		const disposable_1 = requireDisposable();
		Object.defineProperty(exports, "Disposable", { enumerable: true, get: function () { return disposable_1.Disposable; } });
		const events_1 = requireEvents();
		Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return events_1.Event; } });
		Object.defineProperty(exports, "Emitter", { enumerable: true, get: function () { return events_1.Emitter; } });
		const cancellation_1 = requireCancellation();
		Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function () { return cancellation_1.CancellationTokenSource; } });
		Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function () { return cancellation_1.CancellationToken; } });
		const sharedArrayCancellation_1 = requireSharedArrayCancellation();
		Object.defineProperty(exports, "SharedArraySenderStrategy", { enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArraySenderStrategy; } });
		Object.defineProperty(exports, "SharedArrayReceiverStrategy", { enumerable: true, get: function () { return sharedArrayCancellation_1.SharedArrayReceiverStrategy; } });
		const messageReader_1 = requireMessageReader();
		Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function () { return messageReader_1.MessageReader; } });
		Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function () { return messageReader_1.AbstractMessageReader; } });
		Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function () { return messageReader_1.ReadableStreamMessageReader; } });
		const messageWriter_1 = requireMessageWriter();
		Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function () { return messageWriter_1.MessageWriter; } });
		Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function () { return messageWriter_1.AbstractMessageWriter; } });
		Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function () { return messageWriter_1.WriteableStreamMessageWriter; } });
		const messageBuffer_1 = requireMessageBuffer();
		Object.defineProperty(exports, "AbstractMessageBuffer", { enumerable: true, get: function () { return messageBuffer_1.AbstractMessageBuffer; } });
		const connection_1 = requireConnection$1();
		Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function () { return connection_1.ConnectionStrategy; } });
		Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function () { return connection_1.ConnectionOptions; } });
		Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function () { return connection_1.NullLogger; } });
		Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function () { return connection_1.createMessageConnection; } });
		Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function () { return connection_1.ProgressToken; } });
		Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function () { return connection_1.ProgressType; } });
		Object.defineProperty(exports, "Trace", { enumerable: true, get: function () { return connection_1.Trace; } });
		Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function () { return connection_1.TraceValues; } });
		Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function () { return connection_1.TraceFormat; } });
		Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function () { return connection_1.SetTraceNotification; } });
		Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function () { return connection_1.LogTraceNotification; } });
		Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function () { return connection_1.ConnectionErrors; } });
		Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function () { return connection_1.ConnectionError; } });
		Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function () { return connection_1.CancellationReceiverStrategy; } });
		Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function () { return connection_1.CancellationSenderStrategy; } });
		Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function () { return connection_1.CancellationStrategy; } });
		Object.defineProperty(exports, "MessageStrategy", { enumerable: true, get: function () { return connection_1.MessageStrategy; } });
		const ral_1 = requireRal();
		exports.RAL = ral_1.default; 
	} (api$2));
	return api$2;
}

var hasRequiredRil;

function requireRil () {
	if (hasRequiredRil) return ril;
	hasRequiredRil = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(ril, "__esModule", { value: true });
	const util_1 = require$$0$1;
	const api_1 = requireApi$2();
	class MessageBuffer extends api_1.AbstractMessageBuffer {
	    constructor(encoding = 'utf-8') {
	        super(encoding);
	    }
	    emptyBuffer() {
	        return MessageBuffer.emptyBuffer;
	    }
	    fromString(value, encoding) {
	        return Buffer.from(value, encoding);
	    }
	    toString(value, encoding) {
	        if (value instanceof Buffer) {
	            return value.toString(encoding);
	        }
	        else {
	            return new util_1.TextDecoder(encoding).decode(value);
	        }
	    }
	    asNative(buffer, length) {
	        if (length === undefined) {
	            return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
	        }
	        else {
	            return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
	        }
	    }
	    allocNative(length) {
	        return Buffer.allocUnsafe(length);
	    }
	}
	MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
	class ReadableStreamWrapper {
	    constructor(stream) {
	        this.stream = stream;
	    }
	    onClose(listener) {
	        this.stream.on('close', listener);
	        return api_1.Disposable.create(() => this.stream.off('close', listener));
	    }
	    onError(listener) {
	        this.stream.on('error', listener);
	        return api_1.Disposable.create(() => this.stream.off('error', listener));
	    }
	    onEnd(listener) {
	        this.stream.on('end', listener);
	        return api_1.Disposable.create(() => this.stream.off('end', listener));
	    }
	    onData(listener) {
	        this.stream.on('data', listener);
	        return api_1.Disposable.create(() => this.stream.off('data', listener));
	    }
	}
	class WritableStreamWrapper {
	    constructor(stream) {
	        this.stream = stream;
	    }
	    onClose(listener) {
	        this.stream.on('close', listener);
	        return api_1.Disposable.create(() => this.stream.off('close', listener));
	    }
	    onError(listener) {
	        this.stream.on('error', listener);
	        return api_1.Disposable.create(() => this.stream.off('error', listener));
	    }
	    onEnd(listener) {
	        this.stream.on('end', listener);
	        return api_1.Disposable.create(() => this.stream.off('end', listener));
	    }
	    write(data, encoding) {
	        return new Promise((resolve, reject) => {
	            const callback = (error) => {
	                if (error === undefined || error === null) {
	                    resolve();
	                }
	                else {
	                    reject(error);
	                }
	            };
	            if (typeof data === 'string') {
	                this.stream.write(data, encoding, callback);
	            }
	            else {
	                this.stream.write(data, callback);
	            }
	        });
	    }
	    end() {
	        this.stream.end();
	    }
	}
	const _ril = Object.freeze({
	    messageBuffer: Object.freeze({
	        create: (encoding) => new MessageBuffer(encoding)
	    }),
	    applicationJson: Object.freeze({
	        encoder: Object.freeze({
	            name: 'application/json',
	            encode: (msg, options) => {
	                try {
	                    return Promise.resolve(Buffer.from(JSON.stringify(msg, undefined, 0), options.charset));
	                }
	                catch (err) {
	                    return Promise.reject(err);
	                }
	            }
	        }),
	        decoder: Object.freeze({
	            name: 'application/json',
	            decode: (buffer, options) => {
	                try {
	                    if (buffer instanceof Buffer) {
	                        return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
	                    }
	                    else {
	                        return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
	                    }
	                }
	                catch (err) {
	                    return Promise.reject(err);
	                }
	            }
	        })
	    }),
	    stream: Object.freeze({
	        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
	        asWritableStream: (stream) => new WritableStreamWrapper(stream)
	    }),
	    console: console,
	    timer: Object.freeze({
	        setTimeout(callback, ms, ...args) {
	            const handle = setTimeout(callback, ms, ...args);
	            return { dispose: () => clearTimeout(handle) };
	        },
	        setImmediate(callback, ...args) {
	            const handle = setImmediate(callback, ...args);
	            return { dispose: () => clearImmediate(handle) };
	        },
	        setInterval(callback, ms, ...args) {
	            const handle = setInterval(callback, ms, ...args);
	            return { dispose: () => clearInterval(handle) };
	        }
	    })
	});
	function RIL() {
	    return _ril;
	}
	(function (RIL) {
	    function install() {
	        api_1.RAL.install(_ril);
	    }
	    RIL.install = install;
	})(RIL || (RIL = {}));
	ril.default = RIL;
	return ril;
}

var hasRequiredMain$3;

function requireMain$3 () {
	if (hasRequiredMain$3) return main$1;
	hasRequiredMain$3 = 1;
	(function (exports) {
		var __createBinding = (main$1 && main$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (main$1 && main$1.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createMessageConnection = exports.createServerSocketTransport = exports.createClientSocketTransport = exports.createServerPipeTransport = exports.createClientPipeTransport = exports.generateRandomPipeName = exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.PortMessageWriter = exports.PortMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ----------------------------------------------------------------------------------------- */
		const ril_1 = requireRil();
		// Install the node runtime abstract.
		ril_1.default.install();
		const path = require$$1;
		const os = require$$2;
		const crypto_1 = require$$3;
		const net_1 = require$$4;
		const api_1 = requireApi$2();
		__exportStar(requireApi$2(), exports);
		class IPCMessageReader extends api_1.AbstractMessageReader {
		    constructor(process) {
		        super();
		        this.process = process;
		        let eventEmitter = this.process;
		        eventEmitter.on('error', (error) => this.fireError(error));
		        eventEmitter.on('close', () => this.fireClose());
		    }
		    listen(callback) {
		        this.process.on('message', callback);
		        return api_1.Disposable.create(() => this.process.off('message', callback));
		    }
		}
		exports.IPCMessageReader = IPCMessageReader;
		class IPCMessageWriter extends api_1.AbstractMessageWriter {
		    constructor(process) {
		        super();
		        this.process = process;
		        this.errorCount = 0;
		        const eventEmitter = this.process;
		        eventEmitter.on('error', (error) => this.fireError(error));
		        eventEmitter.on('close', () => this.fireClose);
		    }
		    write(msg) {
		        try {
		            if (typeof this.process.send === 'function') {
		                this.process.send(msg, undefined, undefined, (error) => {
		                    if (error) {
		                        this.errorCount++;
		                        this.handleError(error, msg);
		                    }
		                    else {
		                        this.errorCount = 0;
		                    }
		                });
		            }
		            return Promise.resolve();
		        }
		        catch (error) {
		            this.handleError(error, msg);
		            return Promise.reject(error);
		        }
		    }
		    handleError(error, msg) {
		        this.errorCount++;
		        this.fireError(error, msg, this.errorCount);
		    }
		    end() {
		    }
		}
		exports.IPCMessageWriter = IPCMessageWriter;
		class PortMessageReader extends api_1.AbstractMessageReader {
		    constructor(port) {
		        super();
		        this.onData = new api_1.Emitter;
		        port.on('close', () => this.fireClose);
		        port.on('error', (error) => this.fireError(error));
		        port.on('message', (message) => {
		            this.onData.fire(message);
		        });
		    }
		    listen(callback) {
		        return this.onData.event(callback);
		    }
		}
		exports.PortMessageReader = PortMessageReader;
		class PortMessageWriter extends api_1.AbstractMessageWriter {
		    constructor(port) {
		        super();
		        this.port = port;
		        this.errorCount = 0;
		        port.on('close', () => this.fireClose());
		        port.on('error', (error) => this.fireError(error));
		    }
		    write(msg) {
		        try {
		            this.port.postMessage(msg);
		            return Promise.resolve();
		        }
		        catch (error) {
		            this.handleError(error, msg);
		            return Promise.reject(error);
		        }
		    }
		    handleError(error, msg) {
		        this.errorCount++;
		        this.fireError(error, msg, this.errorCount);
		    }
		    end() {
		    }
		}
		exports.PortMessageWriter = PortMessageWriter;
		class SocketMessageReader extends api_1.ReadableStreamMessageReader {
		    constructor(socket, encoding = 'utf-8') {
		        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
		    }
		}
		exports.SocketMessageReader = SocketMessageReader;
		class SocketMessageWriter extends api_1.WriteableStreamMessageWriter {
		    constructor(socket, options) {
		        super((0, ril_1.default)().stream.asWritableStream(socket), options);
		        this.socket = socket;
		    }
		    dispose() {
		        super.dispose();
		        this.socket.destroy();
		    }
		}
		exports.SocketMessageWriter = SocketMessageWriter;
		class StreamMessageReader extends api_1.ReadableStreamMessageReader {
		    constructor(readable, encoding) {
		        super((0, ril_1.default)().stream.asReadableStream(readable), encoding);
		    }
		}
		exports.StreamMessageReader = StreamMessageReader;
		class StreamMessageWriter extends api_1.WriteableStreamMessageWriter {
		    constructor(writable, options) {
		        super((0, ril_1.default)().stream.asWritableStream(writable), options);
		    }
		}
		exports.StreamMessageWriter = StreamMessageWriter;
		const XDG_RUNTIME_DIR = process.env['XDG_RUNTIME_DIR'];
		const safeIpcPathLengths = new Map([
		    ['linux', 107],
		    ['darwin', 103]
		]);
		function generateRandomPipeName() {
		    const randomSuffix = (0, crypto_1.randomBytes)(21).toString('hex');
		    if (process.platform === 'win32') {
		        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
		    }
		    let result;
		    if (XDG_RUNTIME_DIR) {
		        result = path.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
		    }
		    else {
		        result = path.join(os.tmpdir(), `vscode-${randomSuffix}.sock`);
		    }
		    const limit = safeIpcPathLengths.get(process.platform);
		    if (limit !== undefined && result.length > limit) {
		        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
		    }
		    return result;
		}
		exports.generateRandomPipeName = generateRandomPipeName;
		function createClientPipeTransport(pipeName, encoding = 'utf-8') {
		    let connectResolve;
		    const connected = new Promise((resolve, _reject) => {
		        connectResolve = resolve;
		    });
		    return new Promise((resolve, reject) => {
		        let server = (0, net_1.createServer)((socket) => {
		            server.close();
		            connectResolve([
		                new SocketMessageReader(socket, encoding),
		                new SocketMessageWriter(socket, encoding)
		            ]);
		        });
		        server.on('error', reject);
		        server.listen(pipeName, () => {
		            server.removeListener('error', reject);
		            resolve({
		                onConnected: () => { return connected; }
		            });
		        });
		    });
		}
		exports.createClientPipeTransport = createClientPipeTransport;
		function createServerPipeTransport(pipeName, encoding = 'utf-8') {
		    const socket = (0, net_1.createConnection)(pipeName);
		    return [
		        new SocketMessageReader(socket, encoding),
		        new SocketMessageWriter(socket, encoding)
		    ];
		}
		exports.createServerPipeTransport = createServerPipeTransport;
		function createClientSocketTransport(port, encoding = 'utf-8') {
		    let connectResolve;
		    const connected = new Promise((resolve, _reject) => {
		        connectResolve = resolve;
		    });
		    return new Promise((resolve, reject) => {
		        const server = (0, net_1.createServer)((socket) => {
		            server.close();
		            connectResolve([
		                new SocketMessageReader(socket, encoding),
		                new SocketMessageWriter(socket, encoding)
		            ]);
		        });
		        server.on('error', reject);
		        server.listen(port, '127.0.0.1', () => {
		            server.removeListener('error', reject);
		            resolve({
		                onConnected: () => { return connected; }
		            });
		        });
		    });
		}
		exports.createClientSocketTransport = createClientSocketTransport;
		function createServerSocketTransport(port, encoding = 'utf-8') {
		    const socket = (0, net_1.createConnection)(port, '127.0.0.1');
		    return [
		        new SocketMessageReader(socket, encoding),
		        new SocketMessageWriter(socket, encoding)
		    ];
		}
		exports.createServerSocketTransport = createServerSocketTransport;
		function isReadableStream(value) {
		    const candidate = value;
		    return candidate.read !== undefined && candidate.addListener !== undefined;
		}
		function isWritableStream(value) {
		    const candidate = value;
		    return candidate.write !== undefined && candidate.addListener !== undefined;
		}
		function createMessageConnection(input, output, logger, options) {
		    if (!logger) {
		        logger = api_1.NullLogger;
		    }
		    const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
		    const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
		    if (api_1.ConnectionStrategy.is(options)) {
		        options = { connectionStrategy: options };
		    }
		    return (0, api_1.createMessageConnection)(reader, writer, logger, options);
		}
		exports.createMessageConnection = createMessageConnection; 
	} (main$1));
	return main$1;
}

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node$2;
var hasRequiredNode$2;

function requireNode$2 () {
	if (hasRequiredNode$2) return node$2;
	hasRequiredNode$2 = 1;

	node$2 = requireMain$3();
	return node$2;
}

var api$1 = {};

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var main = {exports: {}};

var hasRequiredMain$2;

function requireMain$2 () {
	if (hasRequiredMain$2) return main.exports;
	hasRequiredMain$2 = 1;
	(function (module, exports) {
		(function (factory) {
		    {
		        var v = factory(commonjsRequire, exports);
		        if (v !== undefined) module.exports = v;
		    }
		})(function (require, exports) {
		    Object.defineProperty(exports, "__esModule", { value: true });
		    exports.TextDocument = exports.EOL = exports.WorkspaceFolder = exports.InlineCompletionContext = exports.SelectedCompletionInfo = exports.InlineCompletionTriggerKind = exports.InlineCompletionList = exports.InlineCompletionItem = exports.StringValue = exports.InlayHint = exports.InlayHintLabelPart = exports.InlayHintKind = exports.InlineValueContext = exports.InlineValueEvaluatableExpression = exports.InlineValueVariableLookup = exports.InlineValueText = exports.SemanticTokens = exports.SemanticTokenModifiers = exports.SemanticTokenTypes = exports.SelectionRange = exports.DocumentLink = exports.FormattingOptions = exports.CodeLens = exports.CodeAction = exports.CodeActionContext = exports.CodeActionTriggerKind = exports.CodeActionKind = exports.DocumentSymbol = exports.WorkspaceSymbol = exports.SymbolInformation = exports.SymbolTag = exports.SymbolKind = exports.DocumentHighlight = exports.DocumentHighlightKind = exports.SignatureInformation = exports.ParameterInformation = exports.Hover = exports.MarkedString = exports.CompletionList = exports.CompletionItem = exports.CompletionItemLabelDetails = exports.InsertTextMode = exports.InsertReplaceEdit = exports.CompletionItemTag = exports.InsertTextFormat = exports.CompletionItemKind = exports.MarkupContent = exports.MarkupKind = exports.TextDocumentItem = exports.OptionalVersionedTextDocumentIdentifier = exports.VersionedTextDocumentIdentifier = exports.TextDocumentIdentifier = exports.WorkspaceChange = exports.WorkspaceEdit = exports.DeleteFile = exports.RenameFile = exports.CreateFile = exports.TextDocumentEdit = exports.AnnotatedTextEdit = exports.ChangeAnnotationIdentifier = exports.ChangeAnnotation = exports.TextEdit = exports.Command = exports.Diagnostic = exports.CodeDescription = exports.DiagnosticTag = exports.DiagnosticSeverity = exports.DiagnosticRelatedInformation = exports.FoldingRange = exports.FoldingRangeKind = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.LocationLink = exports.Location = exports.Range = exports.Position = exports.uinteger = exports.integer = exports.URI = exports.DocumentUri = void 0;
		    var DocumentUri;
		    (function (DocumentUri) {
		        function is(value) {
		            return typeof value === 'string';
		        }
		        DocumentUri.is = is;
		    })(DocumentUri || (exports.DocumentUri = DocumentUri = {}));
		    var URI;
		    (function (URI) {
		        function is(value) {
		            return typeof value === 'string';
		        }
		        URI.is = is;
		    })(URI || (exports.URI = URI = {}));
		    var integer;
		    (function (integer) {
		        integer.MIN_VALUE = -2147483648;
		        integer.MAX_VALUE = 2147483647;
		        function is(value) {
		            return typeof value === 'number' && integer.MIN_VALUE <= value && value <= integer.MAX_VALUE;
		        }
		        integer.is = is;
		    })(integer || (exports.integer = integer = {}));
		    var uinteger;
		    (function (uinteger) {
		        uinteger.MIN_VALUE = 0;
		        uinteger.MAX_VALUE = 2147483647;
		        function is(value) {
		            return typeof value === 'number' && uinteger.MIN_VALUE <= value && value <= uinteger.MAX_VALUE;
		        }
		        uinteger.is = is;
		    })(uinteger || (exports.uinteger = uinteger = {}));
		    /**
		     * The Position namespace provides helper functions to work with
		     * {@link Position} literals.
		     */
		    var Position;
		    (function (Position) {
		        /**
		         * Creates a new Position literal from the given line and character.
		         * @param line The position's line.
		         * @param character The position's character.
		         */
		        function create(line, character) {
		            if (line === Number.MAX_VALUE) {
		                line = uinteger.MAX_VALUE;
		            }
		            if (character === Number.MAX_VALUE) {
		                character = uinteger.MAX_VALUE;
		            }
		            return { line: line, character: character };
		        }
		        Position.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Position} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
		        }
		        Position.is = is;
		    })(Position || (exports.Position = Position = {}));
		    /**
		     * The Range namespace provides helper functions to work with
		     * {@link Range} literals.
		     */
		    var Range;
		    (function (Range) {
		        function create(one, two, three, four) {
		            if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
		                return { start: Position.create(one, two), end: Position.create(three, four) };
		            }
		            else if (Position.is(one) && Position.is(two)) {
		                return { start: one, end: two };
		            }
		            else {
		                throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
		            }
		        }
		        Range.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Range} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
		        }
		        Range.is = is;
		    })(Range || (exports.Range = Range = {}));
		    /**
		     * The Location namespace provides helper functions to work with
		     * {@link Location} literals.
		     */
		    var Location;
		    (function (Location) {
		        /**
		         * Creates a Location literal.
		         * @param uri The location's uri.
		         * @param range The location's range.
		         */
		        function create(uri, range) {
		            return { uri: uri, range: range };
		        }
		        Location.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Location} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
		        }
		        Location.is = is;
		    })(Location || (exports.Location = Location = {}));
		    /**
		     * The LocationLink namespace provides helper functions to work with
		     * {@link LocationLink} literals.
		     */
		    var LocationLink;
		    (function (LocationLink) {
		        /**
		         * Creates a LocationLink literal.
		         * @param targetUri The definition's uri.
		         * @param targetRange The full range of the definition.
		         * @param targetSelectionRange The span of the symbol definition at the target.
		         * @param originSelectionRange The span of the symbol being defined in the originating source file.
		         */
		        function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
		            return { targetUri: targetUri, targetRange: targetRange, targetSelectionRange: targetSelectionRange, originSelectionRange: originSelectionRange };
		        }
		        LocationLink.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link LocationLink} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri)
		                && Range.is(candidate.targetSelectionRange)
		                && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
		        }
		        LocationLink.is = is;
		    })(LocationLink || (exports.LocationLink = LocationLink = {}));
		    /**
		     * The Color namespace provides helper functions to work with
		     * {@link Color} literals.
		     */
		    var Color;
		    (function (Color) {
		        /**
		         * Creates a new Color literal.
		         */
		        function create(red, green, blue, alpha) {
		            return {
		                red: red,
		                green: green,
		                blue: blue,
		                alpha: alpha,
		            };
		        }
		        Color.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Color} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1)
		                && Is.numberRange(candidate.green, 0, 1)
		                && Is.numberRange(candidate.blue, 0, 1)
		                && Is.numberRange(candidate.alpha, 0, 1);
		        }
		        Color.is = is;
		    })(Color || (exports.Color = Color = {}));
		    /**
		     * The ColorInformation namespace provides helper functions to work with
		     * {@link ColorInformation} literals.
		     */
		    var ColorInformation;
		    (function (ColorInformation) {
		        /**
		         * Creates a new ColorInformation literal.
		         */
		        function create(range, color) {
		            return {
		                range: range,
		                color: color,
		            };
		        }
		        ColorInformation.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
		        }
		        ColorInformation.is = is;
		    })(ColorInformation || (exports.ColorInformation = ColorInformation = {}));
		    /**
		     * The Color namespace provides helper functions to work with
		     * {@link ColorPresentation} literals.
		     */
		    var ColorPresentation;
		    (function (ColorPresentation) {
		        /**
		         * Creates a new ColorInformation literal.
		         */
		        function create(label, textEdit, additionalTextEdits) {
		            return {
		                label: label,
		                textEdit: textEdit,
		                additionalTextEdits: additionalTextEdits,
		            };
		        }
		        ColorPresentation.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link ColorInformation} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.string(candidate.label)
		                && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate))
		                && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
		        }
		        ColorPresentation.is = is;
		    })(ColorPresentation || (exports.ColorPresentation = ColorPresentation = {}));
		    /**
		     * A set of predefined range kinds.
		     */
		    var FoldingRangeKind;
		    (function (FoldingRangeKind) {
		        /**
		         * Folding range for a comment
		         */
		        FoldingRangeKind.Comment = 'comment';
		        /**
		         * Folding range for an import or include
		         */
		        FoldingRangeKind.Imports = 'imports';
		        /**
		         * Folding range for a region (e.g. `#region`)
		         */
		        FoldingRangeKind.Region = 'region';
		    })(FoldingRangeKind || (exports.FoldingRangeKind = FoldingRangeKind = {}));
		    /**
		     * The folding range namespace provides helper functions to work with
		     * {@link FoldingRange} literals.
		     */
		    var FoldingRange;
		    (function (FoldingRange) {
		        /**
		         * Creates a new FoldingRange literal.
		         */
		        function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
		            var result = {
		                startLine: startLine,
		                endLine: endLine
		            };
		            if (Is.defined(startCharacter)) {
		                result.startCharacter = startCharacter;
		            }
		            if (Is.defined(endCharacter)) {
		                result.endCharacter = endCharacter;
		            }
		            if (Is.defined(kind)) {
		                result.kind = kind;
		            }
		            if (Is.defined(collapsedText)) {
		                result.collapsedText = collapsedText;
		            }
		            return result;
		        }
		        FoldingRange.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link FoldingRange} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine)
		                && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter))
		                && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter))
		                && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
		        }
		        FoldingRange.is = is;
		    })(FoldingRange || (exports.FoldingRange = FoldingRange = {}));
		    /**
		     * The DiagnosticRelatedInformation namespace provides helper functions to work with
		     * {@link DiagnosticRelatedInformation} literals.
		     */
		    var DiagnosticRelatedInformation;
		    (function (DiagnosticRelatedInformation) {
		        /**
		         * Creates a new DiagnosticRelatedInformation literal.
		         */
		        function create(location, message) {
		            return {
		                location: location,
		                message: message
		            };
		        }
		        DiagnosticRelatedInformation.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link DiagnosticRelatedInformation} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
		        }
		        DiagnosticRelatedInformation.is = is;
		    })(DiagnosticRelatedInformation || (exports.DiagnosticRelatedInformation = DiagnosticRelatedInformation = {}));
		    /**
		     * The diagnostic's severity.
		     */
		    var DiagnosticSeverity;
		    (function (DiagnosticSeverity) {
		        /**
		         * Reports an error.
		         */
		        DiagnosticSeverity.Error = 1;
		        /**
		         * Reports a warning.
		         */
		        DiagnosticSeverity.Warning = 2;
		        /**
		         * Reports an information.
		         */
		        DiagnosticSeverity.Information = 3;
		        /**
		         * Reports a hint.
		         */
		        DiagnosticSeverity.Hint = 4;
		    })(DiagnosticSeverity || (exports.DiagnosticSeverity = DiagnosticSeverity = {}));
		    /**
		     * The diagnostic tags.
		     *
		     * @since 3.15.0
		     */
		    var DiagnosticTag;
		    (function (DiagnosticTag) {
		        /**
		         * Unused or unnecessary code.
		         *
		         * Clients are allowed to render diagnostics with this tag faded out instead of having
		         * an error squiggle.
		         */
		        DiagnosticTag.Unnecessary = 1;
		        /**
		         * Deprecated or obsolete code.
		         *
		         * Clients are allowed to rendered diagnostics with this tag strike through.
		         */
		        DiagnosticTag.Deprecated = 2;
		    })(DiagnosticTag || (exports.DiagnosticTag = DiagnosticTag = {}));
		    /**
		     * The CodeDescription namespace provides functions to deal with descriptions for diagnostic codes.
		     *
		     * @since 3.16.0
		     */
		    var CodeDescription;
		    (function (CodeDescription) {
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.string(candidate.href);
		        }
		        CodeDescription.is = is;
		    })(CodeDescription || (exports.CodeDescription = CodeDescription = {}));
		    /**
		     * The Diagnostic namespace provides helper functions to work with
		     * {@link Diagnostic} literals.
		     */
		    var Diagnostic;
		    (function (Diagnostic) {
		        /**
		         * Creates a new Diagnostic literal.
		         */
		        function create(range, message, severity, code, source, relatedInformation) {
		            var result = { range: range, message: message };
		            if (Is.defined(severity)) {
		                result.severity = severity;
		            }
		            if (Is.defined(code)) {
		                result.code = code;
		            }
		            if (Is.defined(source)) {
		                result.source = source;
		            }
		            if (Is.defined(relatedInformation)) {
		                result.relatedInformation = relatedInformation;
		            }
		            return result;
		        }
		        Diagnostic.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Diagnostic} interface.
		         */
		        function is(value) {
		            var _a;
		            var candidate = value;
		            return Is.defined(candidate)
		                && Range.is(candidate.range)
		                && Is.string(candidate.message)
		                && (Is.number(candidate.severity) || Is.undefined(candidate.severity))
		                && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code))
		                && (Is.undefined(candidate.codeDescription) || (Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)))
		                && (Is.string(candidate.source) || Is.undefined(candidate.source))
		                && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
		        }
		        Diagnostic.is = is;
		    })(Diagnostic || (exports.Diagnostic = Diagnostic = {}));
		    /**
		     * The Command namespace provides helper functions to work with
		     * {@link Command} literals.
		     */
		    var Command;
		    (function (Command) {
		        /**
		         * Creates a new Command literal.
		         */
		        function create(title, command) {
		            var args = [];
		            for (var _i = 2; _i < arguments.length; _i++) {
		                args[_i - 2] = arguments[_i];
		            }
		            var result = { title: title, command: command };
		            if (Is.defined(args) && args.length > 0) {
		                result.arguments = args;
		            }
		            return result;
		        }
		        Command.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link Command} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
		        }
		        Command.is = is;
		    })(Command || (exports.Command = Command = {}));
		    /**
		     * The TextEdit namespace provides helper function to create replace,
		     * insert and delete edits more easily.
		     */
		    var TextEdit;
		    (function (TextEdit) {
		        /**
		         * Creates a replace text edit.
		         * @param range The range of text to be replaced.
		         * @param newText The new text.
		         */
		        function replace(range, newText) {
		            return { range: range, newText: newText };
		        }
		        TextEdit.replace = replace;
		        /**
		         * Creates an insert text edit.
		         * @param position The position to insert the text at.
		         * @param newText The text to be inserted.
		         */
		        function insert(position, newText) {
		            return { range: { start: position, end: position }, newText: newText };
		        }
		        TextEdit.insert = insert;
		        /**
		         * Creates a delete text edit.
		         * @param range The range of text to be deleted.
		         */
		        function del(range) {
		            return { range: range, newText: '' };
		        }
		        TextEdit.del = del;
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate)
		                && Is.string(candidate.newText)
		                && Range.is(candidate.range);
		        }
		        TextEdit.is = is;
		    })(TextEdit || (exports.TextEdit = TextEdit = {}));
		    var ChangeAnnotation;
		    (function (ChangeAnnotation) {
		        function create(label, needsConfirmation, description) {
		            var result = { label: label };
		            if (needsConfirmation !== undefined) {
		                result.needsConfirmation = needsConfirmation;
		            }
		            if (description !== undefined) {
		                result.description = description;
		            }
		            return result;
		        }
		        ChangeAnnotation.create = create;
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Is.string(candidate.label) &&
		                (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === undefined) &&
		                (Is.string(candidate.description) || candidate.description === undefined);
		        }
		        ChangeAnnotation.is = is;
		    })(ChangeAnnotation || (exports.ChangeAnnotation = ChangeAnnotation = {}));
		    var ChangeAnnotationIdentifier;
		    (function (ChangeAnnotationIdentifier) {
		        function is(value) {
		            var candidate = value;
		            return Is.string(candidate);
		        }
		        ChangeAnnotationIdentifier.is = is;
		    })(ChangeAnnotationIdentifier || (exports.ChangeAnnotationIdentifier = ChangeAnnotationIdentifier = {}));
		    var AnnotatedTextEdit;
		    (function (AnnotatedTextEdit) {
		        /**
		         * Creates an annotated replace text edit.
		         *
		         * @param range The range of text to be replaced.
		         * @param newText The new text.
		         * @param annotation The annotation.
		         */
		        function replace(range, newText, annotation) {
		            return { range: range, newText: newText, annotationId: annotation };
		        }
		        AnnotatedTextEdit.replace = replace;
		        /**
		         * Creates an annotated insert text edit.
		         *
		         * @param position The position to insert the text at.
		         * @param newText The text to be inserted.
		         * @param annotation The annotation.
		         */
		        function insert(position, newText, annotation) {
		            return { range: { start: position, end: position }, newText: newText, annotationId: annotation };
		        }
		        AnnotatedTextEdit.insert = insert;
		        /**
		         * Creates an annotated delete text edit.
		         *
		         * @param range The range of text to be deleted.
		         * @param annotation The annotation.
		         */
		        function del(range, annotation) {
		            return { range: range, newText: '', annotationId: annotation };
		        }
		        AnnotatedTextEdit.del = del;
		        function is(value) {
		            var candidate = value;
		            return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
		        }
		        AnnotatedTextEdit.is = is;
		    })(AnnotatedTextEdit || (exports.AnnotatedTextEdit = AnnotatedTextEdit = {}));
		    /**
		     * The TextDocumentEdit namespace provides helper function to create
		     * an edit that manipulates a text document.
		     */
		    var TextDocumentEdit;
		    (function (TextDocumentEdit) {
		        /**
		         * Creates a new `TextDocumentEdit`
		         */
		        function create(textDocument, edits) {
		            return { textDocument: textDocument, edits: edits };
		        }
		        TextDocumentEdit.create = create;
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate)
		                && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument)
		                && Array.isArray(candidate.edits);
		        }
		        TextDocumentEdit.is = is;
		    })(TextDocumentEdit || (exports.TextDocumentEdit = TextDocumentEdit = {}));
		    var CreateFile;
		    (function (CreateFile) {
		        function create(uri, options, annotation) {
		            var result = {
		                kind: 'create',
		                uri: uri
		            };
		            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
		                result.options = options;
		            }
		            if (annotation !== undefined) {
		                result.annotationId = annotation;
		            }
		            return result;
		        }
		        CreateFile.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate && candidate.kind === 'create' && Is.string(candidate.uri) && (candidate.options === undefined ||
		                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
		        }
		        CreateFile.is = is;
		    })(CreateFile || (exports.CreateFile = CreateFile = {}));
		    var RenameFile;
		    (function (RenameFile) {
		        function create(oldUri, newUri, options, annotation) {
		            var result = {
		                kind: 'rename',
		                oldUri: oldUri,
		                newUri: newUri
		            };
		            if (options !== undefined && (options.overwrite !== undefined || options.ignoreIfExists !== undefined)) {
		                result.options = options;
		            }
		            if (annotation !== undefined) {
		                result.annotationId = annotation;
		            }
		            return result;
		        }
		        RenameFile.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate && candidate.kind === 'rename' && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === undefined ||
		                ((candidate.options.overwrite === undefined || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === undefined || Is.boolean(candidate.options.ignoreIfExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
		        }
		        RenameFile.is = is;
		    })(RenameFile || (exports.RenameFile = RenameFile = {}));
		    var DeleteFile;
		    (function (DeleteFile) {
		        function create(uri, options, annotation) {
		            var result = {
		                kind: 'delete',
		                uri: uri
		            };
		            if (options !== undefined && (options.recursive !== undefined || options.ignoreIfNotExists !== undefined)) {
		                result.options = options;
		            }
		            if (annotation !== undefined) {
		                result.annotationId = annotation;
		            }
		            return result;
		        }
		        DeleteFile.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate && candidate.kind === 'delete' && Is.string(candidate.uri) && (candidate.options === undefined ||
		                ((candidate.options.recursive === undefined || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === undefined || Is.boolean(candidate.options.ignoreIfNotExists)))) && (candidate.annotationId === undefined || ChangeAnnotationIdentifier.is(candidate.annotationId));
		        }
		        DeleteFile.is = is;
		    })(DeleteFile || (exports.DeleteFile = DeleteFile = {}));
		    var WorkspaceEdit;
		    (function (WorkspaceEdit) {
		        function is(value) {
		            var candidate = value;
		            return candidate &&
		                (candidate.changes !== undefined || candidate.documentChanges !== undefined) &&
		                (candidate.documentChanges === undefined || candidate.documentChanges.every(function (change) {
		                    if (Is.string(change.kind)) {
		                        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
		                    }
		                    else {
		                        return TextDocumentEdit.is(change);
		                    }
		                }));
		        }
		        WorkspaceEdit.is = is;
		    })(WorkspaceEdit || (exports.WorkspaceEdit = WorkspaceEdit = {}));
		    var TextEditChangeImpl = /** @class */ (function () {
		        function TextEditChangeImpl(edits, changeAnnotations) {
		            this.edits = edits;
		            this.changeAnnotations = changeAnnotations;
		        }
		        TextEditChangeImpl.prototype.insert = function (position, newText, annotation) {
		            var edit;
		            var id;
		            if (annotation === undefined) {
		                edit = TextEdit.insert(position, newText);
		            }
		            else if (ChangeAnnotationIdentifier.is(annotation)) {
		                id = annotation;
		                edit = AnnotatedTextEdit.insert(position, newText, annotation);
		            }
		            else {
		                this.assertChangeAnnotations(this.changeAnnotations);
		                id = this.changeAnnotations.manage(annotation);
		                edit = AnnotatedTextEdit.insert(position, newText, id);
		            }
		            this.edits.push(edit);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        TextEditChangeImpl.prototype.replace = function (range, newText, annotation) {
		            var edit;
		            var id;
		            if (annotation === undefined) {
		                edit = TextEdit.replace(range, newText);
		            }
		            else if (ChangeAnnotationIdentifier.is(annotation)) {
		                id = annotation;
		                edit = AnnotatedTextEdit.replace(range, newText, annotation);
		            }
		            else {
		                this.assertChangeAnnotations(this.changeAnnotations);
		                id = this.changeAnnotations.manage(annotation);
		                edit = AnnotatedTextEdit.replace(range, newText, id);
		            }
		            this.edits.push(edit);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        TextEditChangeImpl.prototype.delete = function (range, annotation) {
		            var edit;
		            var id;
		            if (annotation === undefined) {
		                edit = TextEdit.del(range);
		            }
		            else if (ChangeAnnotationIdentifier.is(annotation)) {
		                id = annotation;
		                edit = AnnotatedTextEdit.del(range, annotation);
		            }
		            else {
		                this.assertChangeAnnotations(this.changeAnnotations);
		                id = this.changeAnnotations.manage(annotation);
		                edit = AnnotatedTextEdit.del(range, id);
		            }
		            this.edits.push(edit);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        TextEditChangeImpl.prototype.add = function (edit) {
		            this.edits.push(edit);
		        };
		        TextEditChangeImpl.prototype.all = function () {
		            return this.edits;
		        };
		        TextEditChangeImpl.prototype.clear = function () {
		            this.edits.splice(0, this.edits.length);
		        };
		        TextEditChangeImpl.prototype.assertChangeAnnotations = function (value) {
		            if (value === undefined) {
		                throw new Error("Text edit change is not configured to manage change annotations.");
		            }
		        };
		        return TextEditChangeImpl;
		    }());
		    /**
		     * A helper class
		     */
		    var ChangeAnnotations = /** @class */ (function () {
		        function ChangeAnnotations(annotations) {
		            this._annotations = annotations === undefined ? Object.create(null) : annotations;
		            this._counter = 0;
		            this._size = 0;
		        }
		        ChangeAnnotations.prototype.all = function () {
		            return this._annotations;
		        };
		        Object.defineProperty(ChangeAnnotations.prototype, "size", {
		            get: function () {
		                return this._size;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        ChangeAnnotations.prototype.manage = function (idOrAnnotation, annotation) {
		            var id;
		            if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
		                id = idOrAnnotation;
		            }
		            else {
		                id = this.nextId();
		                annotation = idOrAnnotation;
		            }
		            if (this._annotations[id] !== undefined) {
		                throw new Error("Id ".concat(id, " is already in use."));
		            }
		            if (annotation === undefined) {
		                throw new Error("No annotation provided for id ".concat(id));
		            }
		            this._annotations[id] = annotation;
		            this._size++;
		            return id;
		        };
		        ChangeAnnotations.prototype.nextId = function () {
		            this._counter++;
		            return this._counter.toString();
		        };
		        return ChangeAnnotations;
		    }());
		    /**
		     * A workspace change helps constructing changes to a workspace.
		     */
		    var WorkspaceChange = /** @class */ (function () {
		        function WorkspaceChange(workspaceEdit) {
		            var _this = this;
		            this._textEditChanges = Object.create(null);
		            if (workspaceEdit !== undefined) {
		                this._workspaceEdit = workspaceEdit;
		                if (workspaceEdit.documentChanges) {
		                    this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
		                    workspaceEdit.changeAnnotations = this._changeAnnotations.all();
		                    workspaceEdit.documentChanges.forEach(function (change) {
		                        if (TextDocumentEdit.is(change)) {
		                            var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
		                            _this._textEditChanges[change.textDocument.uri] = textEditChange;
		                        }
		                    });
		                }
		                else if (workspaceEdit.changes) {
		                    Object.keys(workspaceEdit.changes).forEach(function (key) {
		                        var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
		                        _this._textEditChanges[key] = textEditChange;
		                    });
		                }
		            }
		            else {
		                this._workspaceEdit = {};
		            }
		        }
		        Object.defineProperty(WorkspaceChange.prototype, "edit", {
		            /**
		             * Returns the underlying {@link WorkspaceEdit} literal
		             * use to be returned from a workspace edit operation like rename.
		             */
		            get: function () {
		                this.initDocumentChanges();
		                if (this._changeAnnotations !== undefined) {
		                    if (this._changeAnnotations.size === 0) {
		                        this._workspaceEdit.changeAnnotations = undefined;
		                    }
		                    else {
		                        this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
		                    }
		                }
		                return this._workspaceEdit;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        WorkspaceChange.prototype.getTextEditChange = function (key) {
		            if (OptionalVersionedTextDocumentIdentifier.is(key)) {
		                this.initDocumentChanges();
		                if (this._workspaceEdit.documentChanges === undefined) {
		                    throw new Error('Workspace edit is not configured for document changes.');
		                }
		                var textDocument = { uri: key.uri, version: key.version };
		                var result = this._textEditChanges[textDocument.uri];
		                if (!result) {
		                    var edits = [];
		                    var textDocumentEdit = {
		                        textDocument: textDocument,
		                        edits: edits
		                    };
		                    this._workspaceEdit.documentChanges.push(textDocumentEdit);
		                    result = new TextEditChangeImpl(edits, this._changeAnnotations);
		                    this._textEditChanges[textDocument.uri] = result;
		                }
		                return result;
		            }
		            else {
		                this.initChanges();
		                if (this._workspaceEdit.changes === undefined) {
		                    throw new Error('Workspace edit is not configured for normal text edit changes.');
		                }
		                var result = this._textEditChanges[key];
		                if (!result) {
		                    var edits = [];
		                    this._workspaceEdit.changes[key] = edits;
		                    result = new TextEditChangeImpl(edits);
		                    this._textEditChanges[key] = result;
		                }
		                return result;
		            }
		        };
		        WorkspaceChange.prototype.initDocumentChanges = function () {
		            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
		                this._changeAnnotations = new ChangeAnnotations();
		                this._workspaceEdit.documentChanges = [];
		                this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
		            }
		        };
		        WorkspaceChange.prototype.initChanges = function () {
		            if (this._workspaceEdit.documentChanges === undefined && this._workspaceEdit.changes === undefined) {
		                this._workspaceEdit.changes = Object.create(null);
		            }
		        };
		        WorkspaceChange.prototype.createFile = function (uri, optionsOrAnnotation, options) {
		            this.initDocumentChanges();
		            if (this._workspaceEdit.documentChanges === undefined) {
		                throw new Error('Workspace edit is not configured for document changes.');
		            }
		            var annotation;
		            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
		                annotation = optionsOrAnnotation;
		            }
		            else {
		                options = optionsOrAnnotation;
		            }
		            var operation;
		            var id;
		            if (annotation === undefined) {
		                operation = CreateFile.create(uri, options);
		            }
		            else {
		                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
		                operation = CreateFile.create(uri, options, id);
		            }
		            this._workspaceEdit.documentChanges.push(operation);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        WorkspaceChange.prototype.renameFile = function (oldUri, newUri, optionsOrAnnotation, options) {
		            this.initDocumentChanges();
		            if (this._workspaceEdit.documentChanges === undefined) {
		                throw new Error('Workspace edit is not configured for document changes.');
		            }
		            var annotation;
		            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
		                annotation = optionsOrAnnotation;
		            }
		            else {
		                options = optionsOrAnnotation;
		            }
		            var operation;
		            var id;
		            if (annotation === undefined) {
		                operation = RenameFile.create(oldUri, newUri, options);
		            }
		            else {
		                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
		                operation = RenameFile.create(oldUri, newUri, options, id);
		            }
		            this._workspaceEdit.documentChanges.push(operation);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        WorkspaceChange.prototype.deleteFile = function (uri, optionsOrAnnotation, options) {
		            this.initDocumentChanges();
		            if (this._workspaceEdit.documentChanges === undefined) {
		                throw new Error('Workspace edit is not configured for document changes.');
		            }
		            var annotation;
		            if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
		                annotation = optionsOrAnnotation;
		            }
		            else {
		                options = optionsOrAnnotation;
		            }
		            var operation;
		            var id;
		            if (annotation === undefined) {
		                operation = DeleteFile.create(uri, options);
		            }
		            else {
		                id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
		                operation = DeleteFile.create(uri, options, id);
		            }
		            this._workspaceEdit.documentChanges.push(operation);
		            if (id !== undefined) {
		                return id;
		            }
		        };
		        return WorkspaceChange;
		    }());
		    exports.WorkspaceChange = WorkspaceChange;
		    /**
		     * The TextDocumentIdentifier namespace provides helper functions to work with
		     * {@link TextDocumentIdentifier} literals.
		     */
		    var TextDocumentIdentifier;
		    (function (TextDocumentIdentifier) {
		        /**
		         * Creates a new TextDocumentIdentifier literal.
		         * @param uri The document's uri.
		         */
		        function create(uri) {
		            return { uri: uri };
		        }
		        TextDocumentIdentifier.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link TextDocumentIdentifier} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.uri);
		        }
		        TextDocumentIdentifier.is = is;
		    })(TextDocumentIdentifier || (exports.TextDocumentIdentifier = TextDocumentIdentifier = {}));
		    /**
		     * The VersionedTextDocumentIdentifier namespace provides helper functions to work with
		     * {@link VersionedTextDocumentIdentifier} literals.
		     */
		    var VersionedTextDocumentIdentifier;
		    (function (VersionedTextDocumentIdentifier) {
		        /**
		         * Creates a new VersionedTextDocumentIdentifier literal.
		         * @param uri The document's uri.
		         * @param version The document's version.
		         */
		        function create(uri, version) {
		            return { uri: uri, version: version };
		        }
		        VersionedTextDocumentIdentifier.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link VersionedTextDocumentIdentifier} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
		        }
		        VersionedTextDocumentIdentifier.is = is;
		    })(VersionedTextDocumentIdentifier || (exports.VersionedTextDocumentIdentifier = VersionedTextDocumentIdentifier = {}));
		    /**
		     * The OptionalVersionedTextDocumentIdentifier namespace provides helper functions to work with
		     * {@link OptionalVersionedTextDocumentIdentifier} literals.
		     */
		    var OptionalVersionedTextDocumentIdentifier;
		    (function (OptionalVersionedTextDocumentIdentifier) {
		        /**
		         * Creates a new OptionalVersionedTextDocumentIdentifier literal.
		         * @param uri The document's uri.
		         * @param version The document's version.
		         */
		        function create(uri, version) {
		            return { uri: uri, version: version };
		        }
		        OptionalVersionedTextDocumentIdentifier.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link OptionalVersionedTextDocumentIdentifier} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
		        }
		        OptionalVersionedTextDocumentIdentifier.is = is;
		    })(OptionalVersionedTextDocumentIdentifier || (exports.OptionalVersionedTextDocumentIdentifier = OptionalVersionedTextDocumentIdentifier = {}));
		    /**
		     * The TextDocumentItem namespace provides helper functions to work with
		     * {@link TextDocumentItem} literals.
		     */
		    var TextDocumentItem;
		    (function (TextDocumentItem) {
		        /**
		         * Creates a new TextDocumentItem literal.
		         * @param uri The document's uri.
		         * @param languageId The document's language identifier.
		         * @param version The document's version number.
		         * @param text The document's text.
		         */
		        function create(uri, languageId, version, text) {
		            return { uri: uri, languageId: languageId, version: version, text: text };
		        }
		        TextDocumentItem.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link TextDocumentItem} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
		        }
		        TextDocumentItem.is = is;
		    })(TextDocumentItem || (exports.TextDocumentItem = TextDocumentItem = {}));
		    /**
		     * Describes the content type that a client supports in various
		     * result literals like `Hover`, `ParameterInfo` or `CompletionItem`.
		     *
		     * Please note that `MarkupKinds` must not start with a `$`. This kinds
		     * are reserved for internal usage.
		     */
		    var MarkupKind;
		    (function (MarkupKind) {
		        /**
		         * Plain text is supported as a content format
		         */
		        MarkupKind.PlainText = 'plaintext';
		        /**
		         * Markdown is supported as a content format
		         */
		        MarkupKind.Markdown = 'markdown';
		        /**
		         * Checks whether the given value is a value of the {@link MarkupKind} type.
		         */
		        function is(value) {
		            var candidate = value;
		            return candidate === MarkupKind.PlainText || candidate === MarkupKind.Markdown;
		        }
		        MarkupKind.is = is;
		    })(MarkupKind || (exports.MarkupKind = MarkupKind = {}));
		    var MarkupContent;
		    (function (MarkupContent) {
		        /**
		         * Checks whether the given value conforms to the {@link MarkupContent} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
		        }
		        MarkupContent.is = is;
		    })(MarkupContent || (exports.MarkupContent = MarkupContent = {}));
		    /**
		     * The kind of a completion entry.
		     */
		    var CompletionItemKind;
		    (function (CompletionItemKind) {
		        CompletionItemKind.Text = 1;
		        CompletionItemKind.Method = 2;
		        CompletionItemKind.Function = 3;
		        CompletionItemKind.Constructor = 4;
		        CompletionItemKind.Field = 5;
		        CompletionItemKind.Variable = 6;
		        CompletionItemKind.Class = 7;
		        CompletionItemKind.Interface = 8;
		        CompletionItemKind.Module = 9;
		        CompletionItemKind.Property = 10;
		        CompletionItemKind.Unit = 11;
		        CompletionItemKind.Value = 12;
		        CompletionItemKind.Enum = 13;
		        CompletionItemKind.Keyword = 14;
		        CompletionItemKind.Snippet = 15;
		        CompletionItemKind.Color = 16;
		        CompletionItemKind.File = 17;
		        CompletionItemKind.Reference = 18;
		        CompletionItemKind.Folder = 19;
		        CompletionItemKind.EnumMember = 20;
		        CompletionItemKind.Constant = 21;
		        CompletionItemKind.Struct = 22;
		        CompletionItemKind.Event = 23;
		        CompletionItemKind.Operator = 24;
		        CompletionItemKind.TypeParameter = 25;
		    })(CompletionItemKind || (exports.CompletionItemKind = CompletionItemKind = {}));
		    /**
		     * Defines whether the insert text in a completion item should be interpreted as
		     * plain text or a snippet.
		     */
		    var InsertTextFormat;
		    (function (InsertTextFormat) {
		        /**
		         * The primary text to be inserted is treated as a plain string.
		         */
		        InsertTextFormat.PlainText = 1;
		        /**
		         * The primary text to be inserted is treated as a snippet.
		         *
		         * A snippet can define tab stops and placeholders with `$1`, `$2`
		         * and `${3:foo}`. `$0` defines the final tab stop, it defaults to
		         * the end of the snippet. Placeholders with equal identifiers are linked,
		         * that is typing in one will update others too.
		         *
		         * See also: https://microsoft.github.io/language-server-protocol/specifications/specification-current/#snippet_syntax
		         */
		        InsertTextFormat.Snippet = 2;
		    })(InsertTextFormat || (exports.InsertTextFormat = InsertTextFormat = {}));
		    /**
		     * Completion item tags are extra annotations that tweak the rendering of a completion
		     * item.
		     *
		     * @since 3.15.0
		     */
		    var CompletionItemTag;
		    (function (CompletionItemTag) {
		        /**
		         * Render a completion as obsolete, usually using a strike-out.
		         */
		        CompletionItemTag.Deprecated = 1;
		    })(CompletionItemTag || (exports.CompletionItemTag = CompletionItemTag = {}));
		    /**
		     * The InsertReplaceEdit namespace provides functions to deal with insert / replace edits.
		     *
		     * @since 3.16.0
		     */
		    var InsertReplaceEdit;
		    (function (InsertReplaceEdit) {
		        /**
		         * Creates a new insert / replace edit
		         */
		        function create(newText, insert, replace) {
		            return { newText: newText, insert: insert, replace: replace };
		        }
		        InsertReplaceEdit.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link InsertReplaceEdit} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
		        }
		        InsertReplaceEdit.is = is;
		    })(InsertReplaceEdit || (exports.InsertReplaceEdit = InsertReplaceEdit = {}));
		    /**
		     * How whitespace and indentation is handled during completion
		     * item insertion.
		     *
		     * @since 3.16.0
		     */
		    var InsertTextMode;
		    (function (InsertTextMode) {
		        /**
		         * The insertion or replace strings is taken as it is. If the
		         * value is multi line the lines below the cursor will be
		         * inserted using the indentation defined in the string value.
		         * The client will not apply any kind of adjustments to the
		         * string.
		         */
		        InsertTextMode.asIs = 1;
		        /**
		         * The editor adjusts leading whitespace of new lines so that
		         * they match the indentation up to the cursor of the line for
		         * which the item is accepted.
		         *
		         * Consider a line like this: <2tabs><cursor><3tabs>foo. Accepting a
		         * multi line completion item is indented using 2 tabs and all
		         * following lines inserted will be indented using 2 tabs as well.
		         */
		        InsertTextMode.adjustIndentation = 2;
		    })(InsertTextMode || (exports.InsertTextMode = InsertTextMode = {}));
		    var CompletionItemLabelDetails;
		    (function (CompletionItemLabelDetails) {
		        function is(value) {
		            var candidate = value;
		            return candidate && (Is.string(candidate.detail) || candidate.detail === undefined) &&
		                (Is.string(candidate.description) || candidate.description === undefined);
		        }
		        CompletionItemLabelDetails.is = is;
		    })(CompletionItemLabelDetails || (exports.CompletionItemLabelDetails = CompletionItemLabelDetails = {}));
		    /**
		     * The CompletionItem namespace provides functions to deal with
		     * completion items.
		     */
		    var CompletionItem;
		    (function (CompletionItem) {
		        /**
		         * Create a completion item and seed it with a label.
		         * @param label The completion item's label
		         */
		        function create(label) {
		            return { label: label };
		        }
		        CompletionItem.create = create;
		    })(CompletionItem || (exports.CompletionItem = CompletionItem = {}));
		    /**
		     * The CompletionList namespace provides functions to deal with
		     * completion lists.
		     */
		    var CompletionList;
		    (function (CompletionList) {
		        /**
		         * Creates a new completion list.
		         *
		         * @param items The completion items.
		         * @param isIncomplete The list is not complete.
		         */
		        function create(items, isIncomplete) {
		            return { items: items ? items : [], isIncomplete: !!isIncomplete };
		        }
		        CompletionList.create = create;
		    })(CompletionList || (exports.CompletionList = CompletionList = {}));
		    var MarkedString;
		    (function (MarkedString) {
		        /**
		         * Creates a marked string from plain text.
		         *
		         * @param plainText The plain text.
		         */
		        function fromPlainText(plainText) {
		            return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
		        }
		        MarkedString.fromPlainText = fromPlainText;
		        /**
		         * Checks whether the given value conforms to the {@link MarkedString} type.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.string(candidate) || (Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value));
		        }
		        MarkedString.is = is;
		    })(MarkedString || (exports.MarkedString = MarkedString = {}));
		    var Hover;
		    (function (Hover) {
		        /**
		         * Checks whether the given value conforms to the {@link Hover} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) ||
		                MarkedString.is(candidate.contents) ||
		                Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === undefined || Range.is(value.range));
		        }
		        Hover.is = is;
		    })(Hover || (exports.Hover = Hover = {}));
		    /**
		     * The ParameterInformation namespace provides helper functions to work with
		     * {@link ParameterInformation} literals.
		     */
		    var ParameterInformation;
		    (function (ParameterInformation) {
		        /**
		         * Creates a new parameter information literal.
		         *
		         * @param label A label string.
		         * @param documentation A doc string.
		         */
		        function create(label, documentation) {
		            return documentation ? { label: label, documentation: documentation } : { label: label };
		        }
		        ParameterInformation.create = create;
		    })(ParameterInformation || (exports.ParameterInformation = ParameterInformation = {}));
		    /**
		     * The SignatureInformation namespace provides helper functions to work with
		     * {@link SignatureInformation} literals.
		     */
		    var SignatureInformation;
		    (function (SignatureInformation) {
		        function create(label, documentation) {
		            var parameters = [];
		            for (var _i = 2; _i < arguments.length; _i++) {
		                parameters[_i - 2] = arguments[_i];
		            }
		            var result = { label: label };
		            if (Is.defined(documentation)) {
		                result.documentation = documentation;
		            }
		            if (Is.defined(parameters)) {
		                result.parameters = parameters;
		            }
		            else {
		                result.parameters = [];
		            }
		            return result;
		        }
		        SignatureInformation.create = create;
		    })(SignatureInformation || (exports.SignatureInformation = SignatureInformation = {}));
		    /**
		     * A document highlight kind.
		     */
		    var DocumentHighlightKind;
		    (function (DocumentHighlightKind) {
		        /**
		         * A textual occurrence.
		         */
		        DocumentHighlightKind.Text = 1;
		        /**
		         * Read-access of a symbol, like reading a variable.
		         */
		        DocumentHighlightKind.Read = 2;
		        /**
		         * Write-access of a symbol, like writing to a variable.
		         */
		        DocumentHighlightKind.Write = 3;
		    })(DocumentHighlightKind || (exports.DocumentHighlightKind = DocumentHighlightKind = {}));
		    /**
		     * DocumentHighlight namespace to provide helper functions to work with
		     * {@link DocumentHighlight} literals.
		     */
		    var DocumentHighlight;
		    (function (DocumentHighlight) {
		        /**
		         * Create a DocumentHighlight object.
		         * @param range The range the highlight applies to.
		         * @param kind The highlight kind
		         */
		        function create(range, kind) {
		            var result = { range: range };
		            if (Is.number(kind)) {
		                result.kind = kind;
		            }
		            return result;
		        }
		        DocumentHighlight.create = create;
		    })(DocumentHighlight || (exports.DocumentHighlight = DocumentHighlight = {}));
		    /**
		     * A symbol kind.
		     */
		    var SymbolKind;
		    (function (SymbolKind) {
		        SymbolKind.File = 1;
		        SymbolKind.Module = 2;
		        SymbolKind.Namespace = 3;
		        SymbolKind.Package = 4;
		        SymbolKind.Class = 5;
		        SymbolKind.Method = 6;
		        SymbolKind.Property = 7;
		        SymbolKind.Field = 8;
		        SymbolKind.Constructor = 9;
		        SymbolKind.Enum = 10;
		        SymbolKind.Interface = 11;
		        SymbolKind.Function = 12;
		        SymbolKind.Variable = 13;
		        SymbolKind.Constant = 14;
		        SymbolKind.String = 15;
		        SymbolKind.Number = 16;
		        SymbolKind.Boolean = 17;
		        SymbolKind.Array = 18;
		        SymbolKind.Object = 19;
		        SymbolKind.Key = 20;
		        SymbolKind.Null = 21;
		        SymbolKind.EnumMember = 22;
		        SymbolKind.Struct = 23;
		        SymbolKind.Event = 24;
		        SymbolKind.Operator = 25;
		        SymbolKind.TypeParameter = 26;
		    })(SymbolKind || (exports.SymbolKind = SymbolKind = {}));
		    /**
		     * Symbol tags are extra annotations that tweak the rendering of a symbol.
		     *
		     * @since 3.16
		     */
		    var SymbolTag;
		    (function (SymbolTag) {
		        /**
		         * Render a symbol as obsolete, usually using a strike-out.
		         */
		        SymbolTag.Deprecated = 1;
		    })(SymbolTag || (exports.SymbolTag = SymbolTag = {}));
		    var SymbolInformation;
		    (function (SymbolInformation) {
		        /**
		         * Creates a new symbol information literal.
		         *
		         * @param name The name of the symbol.
		         * @param kind The kind of the symbol.
		         * @param range The range of the location of the symbol.
		         * @param uri The resource of the location of symbol.
		         * @param containerName The name of the symbol containing the symbol.
		         */
		        function create(name, kind, range, uri, containerName) {
		            var result = {
		                name: name,
		                kind: kind,
		                location: { uri: uri, range: range }
		            };
		            if (containerName) {
		                result.containerName = containerName;
		            }
		            return result;
		        }
		        SymbolInformation.create = create;
		    })(SymbolInformation || (exports.SymbolInformation = SymbolInformation = {}));
		    var WorkspaceSymbol;
		    (function (WorkspaceSymbol) {
		        /**
		         * Create a new workspace symbol.
		         *
		         * @param name The name of the symbol.
		         * @param kind The kind of the symbol.
		         * @param uri The resource of the location of the symbol.
		         * @param range An options range of the location.
		         * @returns A WorkspaceSymbol.
		         */
		        function create(name, kind, uri, range) {
		            return range !== undefined
		                ? { name: name, kind: kind, location: { uri: uri, range: range } }
		                : { name: name, kind: kind, location: { uri: uri } };
		        }
		        WorkspaceSymbol.create = create;
		    })(WorkspaceSymbol || (exports.WorkspaceSymbol = WorkspaceSymbol = {}));
		    var DocumentSymbol;
		    (function (DocumentSymbol) {
		        /**
		         * Creates a new symbol information literal.
		         *
		         * @param name The name of the symbol.
		         * @param detail The detail of the symbol.
		         * @param kind The kind of the symbol.
		         * @param range The range of the symbol.
		         * @param selectionRange The selectionRange of the symbol.
		         * @param children Children of the symbol.
		         */
		        function create(name, detail, kind, range, selectionRange, children) {
		            var result = {
		                name: name,
		                detail: detail,
		                kind: kind,
		                range: range,
		                selectionRange: selectionRange
		            };
		            if (children !== undefined) {
		                result.children = children;
		            }
		            return result;
		        }
		        DocumentSymbol.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link DocumentSymbol} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return candidate &&
		                Is.string(candidate.name) && Is.number(candidate.kind) &&
		                Range.is(candidate.range) && Range.is(candidate.selectionRange) &&
		                (candidate.detail === undefined || Is.string(candidate.detail)) &&
		                (candidate.deprecated === undefined || Is.boolean(candidate.deprecated)) &&
		                (candidate.children === undefined || Array.isArray(candidate.children)) &&
		                (candidate.tags === undefined || Array.isArray(candidate.tags));
		        }
		        DocumentSymbol.is = is;
		    })(DocumentSymbol || (exports.DocumentSymbol = DocumentSymbol = {}));
		    /**
		     * A set of predefined code action kinds
		     */
		    var CodeActionKind;
		    (function (CodeActionKind) {
		        /**
		         * Empty kind.
		         */
		        CodeActionKind.Empty = '';
		        /**
		         * Base kind for quickfix actions: 'quickfix'
		         */
		        CodeActionKind.QuickFix = 'quickfix';
		        /**
		         * Base kind for refactoring actions: 'refactor'
		         */
		        CodeActionKind.Refactor = 'refactor';
		        /**
		         * Base kind for refactoring extraction actions: 'refactor.extract'
		         *
		         * Example extract actions:
		         *
		         * - Extract method
		         * - Extract function
		         * - Extract variable
		         * - Extract interface from class
		         * - ...
		         */
		        CodeActionKind.RefactorExtract = 'refactor.extract';
		        /**
		         * Base kind for refactoring inline actions: 'refactor.inline'
		         *
		         * Example inline actions:
		         *
		         * - Inline function
		         * - Inline variable
		         * - Inline constant
		         * - ...
		         */
		        CodeActionKind.RefactorInline = 'refactor.inline';
		        /**
		         * Base kind for refactoring rewrite actions: 'refactor.rewrite'
		         *
		         * Example rewrite actions:
		         *
		         * - Convert JavaScript function to class
		         * - Add or remove parameter
		         * - Encapsulate field
		         * - Make method static
		         * - Move method to base class
		         * - ...
		         */
		        CodeActionKind.RefactorRewrite = 'refactor.rewrite';
		        /**
		         * Base kind for source actions: `source`
		         *
		         * Source code actions apply to the entire file.
		         */
		        CodeActionKind.Source = 'source';
		        /**
		         * Base kind for an organize imports source action: `source.organizeImports`
		         */
		        CodeActionKind.SourceOrganizeImports = 'source.organizeImports';
		        /**
		         * Base kind for auto-fix source actions: `source.fixAll`.
		         *
		         * Fix all actions automatically fix errors that have a clear fix that do not require user input.
		         * They should not suppress errors or perform unsafe fixes such as generating new types or classes.
		         *
		         * @since 3.15.0
		         */
		        CodeActionKind.SourceFixAll = 'source.fixAll';
		    })(CodeActionKind || (exports.CodeActionKind = CodeActionKind = {}));
		    /**
		     * The reason why code actions were requested.
		     *
		     * @since 3.17.0
		     */
		    var CodeActionTriggerKind;
		    (function (CodeActionTriggerKind) {
		        /**
		         * Code actions were explicitly requested by the user or by an extension.
		         */
		        CodeActionTriggerKind.Invoked = 1;
		        /**
		         * Code actions were requested automatically.
		         *
		         * This typically happens when current selection in a file changes, but can
		         * also be triggered when file content changes.
		         */
		        CodeActionTriggerKind.Automatic = 2;
		    })(CodeActionTriggerKind || (exports.CodeActionTriggerKind = CodeActionTriggerKind = {}));
		    /**
		     * The CodeActionContext namespace provides helper functions to work with
		     * {@link CodeActionContext} literals.
		     */
		    var CodeActionContext;
		    (function (CodeActionContext) {
		        /**
		         * Creates a new CodeActionContext literal.
		         */
		        function create(diagnostics, only, triggerKind) {
		            var result = { diagnostics: diagnostics };
		            if (only !== undefined && only !== null) {
		                result.only = only;
		            }
		            if (triggerKind !== undefined && triggerKind !== null) {
		                result.triggerKind = triggerKind;
		            }
		            return result;
		        }
		        CodeActionContext.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link CodeActionContext} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is)
		                && (candidate.only === undefined || Is.typedArray(candidate.only, Is.string))
		                && (candidate.triggerKind === undefined || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
		        }
		        CodeActionContext.is = is;
		    })(CodeActionContext || (exports.CodeActionContext = CodeActionContext = {}));
		    var CodeAction;
		    (function (CodeAction) {
		        function create(title, kindOrCommandOrEdit, kind) {
		            var result = { title: title };
		            var checkKind = true;
		            if (typeof kindOrCommandOrEdit === 'string') {
		                checkKind = false;
		                result.kind = kindOrCommandOrEdit;
		            }
		            else if (Command.is(kindOrCommandOrEdit)) {
		                result.command = kindOrCommandOrEdit;
		            }
		            else {
		                result.edit = kindOrCommandOrEdit;
		            }
		            if (checkKind && kind !== undefined) {
		                result.kind = kind;
		            }
		            return result;
		        }
		        CodeAction.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate && Is.string(candidate.title) &&
		                (candidate.diagnostics === undefined || Is.typedArray(candidate.diagnostics, Diagnostic.is)) &&
		                (candidate.kind === undefined || Is.string(candidate.kind)) &&
		                (candidate.edit !== undefined || candidate.command !== undefined) &&
		                (candidate.command === undefined || Command.is(candidate.command)) &&
		                (candidate.isPreferred === undefined || Is.boolean(candidate.isPreferred)) &&
		                (candidate.edit === undefined || WorkspaceEdit.is(candidate.edit));
		        }
		        CodeAction.is = is;
		    })(CodeAction || (exports.CodeAction = CodeAction = {}));
		    /**
		     * The CodeLens namespace provides helper functions to work with
		     * {@link CodeLens} literals.
		     */
		    var CodeLens;
		    (function (CodeLens) {
		        /**
		         * Creates a new CodeLens literal.
		         */
		        function create(range, data) {
		            var result = { range: range };
		            if (Is.defined(data)) {
		                result.data = data;
		            }
		            return result;
		        }
		        CodeLens.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link CodeLens} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
		        }
		        CodeLens.is = is;
		    })(CodeLens || (exports.CodeLens = CodeLens = {}));
		    /**
		     * The FormattingOptions namespace provides helper functions to work with
		     * {@link FormattingOptions} literals.
		     */
		    var FormattingOptions;
		    (function (FormattingOptions) {
		        /**
		         * Creates a new FormattingOptions literal.
		         */
		        function create(tabSize, insertSpaces) {
		            return { tabSize: tabSize, insertSpaces: insertSpaces };
		        }
		        FormattingOptions.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link FormattingOptions} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
		        }
		        FormattingOptions.is = is;
		    })(FormattingOptions || (exports.FormattingOptions = FormattingOptions = {}));
		    /**
		     * The DocumentLink namespace provides helper functions to work with
		     * {@link DocumentLink} literals.
		     */
		    var DocumentLink;
		    (function (DocumentLink) {
		        /**
		         * Creates a new DocumentLink literal.
		         */
		        function create(range, target, data) {
		            return { range: range, target: target, data: data };
		        }
		        DocumentLink.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link DocumentLink} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
		        }
		        DocumentLink.is = is;
		    })(DocumentLink || (exports.DocumentLink = DocumentLink = {}));
		    /**
		     * The SelectionRange namespace provides helper function to work with
		     * SelectionRange literals.
		     */
		    var SelectionRange;
		    (function (SelectionRange) {
		        /**
		         * Creates a new SelectionRange
		         * @param range the range.
		         * @param parent an optional parent.
		         */
		        function create(range, parent) {
		            return { range: range, parent: parent };
		        }
		        SelectionRange.create = create;
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === undefined || SelectionRange.is(candidate.parent));
		        }
		        SelectionRange.is = is;
		    })(SelectionRange || (exports.SelectionRange = SelectionRange = {}));
		    /**
		     * A set of predefined token types. This set is not fixed
		     * an clients can specify additional token types via the
		     * corresponding client capabilities.
		     *
		     * @since 3.16.0
		     */
		    var SemanticTokenTypes;
		    (function (SemanticTokenTypes) {
		        SemanticTokenTypes["namespace"] = "namespace";
		        /**
		         * Represents a generic type. Acts as a fallback for types which can't be mapped to
		         * a specific type like class or enum.
		         */
		        SemanticTokenTypes["type"] = "type";
		        SemanticTokenTypes["class"] = "class";
		        SemanticTokenTypes["enum"] = "enum";
		        SemanticTokenTypes["interface"] = "interface";
		        SemanticTokenTypes["struct"] = "struct";
		        SemanticTokenTypes["typeParameter"] = "typeParameter";
		        SemanticTokenTypes["parameter"] = "parameter";
		        SemanticTokenTypes["variable"] = "variable";
		        SemanticTokenTypes["property"] = "property";
		        SemanticTokenTypes["enumMember"] = "enumMember";
		        SemanticTokenTypes["event"] = "event";
		        SemanticTokenTypes["function"] = "function";
		        SemanticTokenTypes["method"] = "method";
		        SemanticTokenTypes["macro"] = "macro";
		        SemanticTokenTypes["keyword"] = "keyword";
		        SemanticTokenTypes["modifier"] = "modifier";
		        SemanticTokenTypes["comment"] = "comment";
		        SemanticTokenTypes["string"] = "string";
		        SemanticTokenTypes["number"] = "number";
		        SemanticTokenTypes["regexp"] = "regexp";
		        SemanticTokenTypes["operator"] = "operator";
		        /**
		         * @since 3.17.0
		         */
		        SemanticTokenTypes["decorator"] = "decorator";
		    })(SemanticTokenTypes || (exports.SemanticTokenTypes = SemanticTokenTypes = {}));
		    /**
		     * A set of predefined token modifiers. This set is not fixed
		     * an clients can specify additional token types via the
		     * corresponding client capabilities.
		     *
		     * @since 3.16.0
		     */
		    var SemanticTokenModifiers;
		    (function (SemanticTokenModifiers) {
		        SemanticTokenModifiers["declaration"] = "declaration";
		        SemanticTokenModifiers["definition"] = "definition";
		        SemanticTokenModifiers["readonly"] = "readonly";
		        SemanticTokenModifiers["static"] = "static";
		        SemanticTokenModifiers["deprecated"] = "deprecated";
		        SemanticTokenModifiers["abstract"] = "abstract";
		        SemanticTokenModifiers["async"] = "async";
		        SemanticTokenModifiers["modification"] = "modification";
		        SemanticTokenModifiers["documentation"] = "documentation";
		        SemanticTokenModifiers["defaultLibrary"] = "defaultLibrary";
		    })(SemanticTokenModifiers || (exports.SemanticTokenModifiers = SemanticTokenModifiers = {}));
		    /**
		     * @since 3.16.0
		     */
		    var SemanticTokens;
		    (function (SemanticTokens) {
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && (candidate.resultId === undefined || typeof candidate.resultId === 'string') &&
		                Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === 'number');
		        }
		        SemanticTokens.is = is;
		    })(SemanticTokens || (exports.SemanticTokens = SemanticTokens = {}));
		    /**
		     * The InlineValueText namespace provides functions to deal with InlineValueTexts.
		     *
		     * @since 3.17.0
		     */
		    var InlineValueText;
		    (function (InlineValueText) {
		        /**
		         * Creates a new InlineValueText literal.
		         */
		        function create(range, text) {
		            return { range: range, text: text };
		        }
		        InlineValueText.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
		        }
		        InlineValueText.is = is;
		    })(InlineValueText || (exports.InlineValueText = InlineValueText = {}));
		    /**
		     * The InlineValueVariableLookup namespace provides functions to deal with InlineValueVariableLookups.
		     *
		     * @since 3.17.0
		     */
		    var InlineValueVariableLookup;
		    (function (InlineValueVariableLookup) {
		        /**
		         * Creates a new InlineValueText literal.
		         */
		        function create(range, variableName, caseSensitiveLookup) {
		            return { range: range, variableName: variableName, caseSensitiveLookup: caseSensitiveLookup };
		        }
		        InlineValueVariableLookup.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate !== undefined && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup)
		                && (Is.string(candidate.variableName) || candidate.variableName === undefined);
		        }
		        InlineValueVariableLookup.is = is;
		    })(InlineValueVariableLookup || (exports.InlineValueVariableLookup = InlineValueVariableLookup = {}));
		    /**
		     * The InlineValueEvaluatableExpression namespace provides functions to deal with InlineValueEvaluatableExpression.
		     *
		     * @since 3.17.0
		     */
		    var InlineValueEvaluatableExpression;
		    (function (InlineValueEvaluatableExpression) {
		        /**
		         * Creates a new InlineValueEvaluatableExpression literal.
		         */
		        function create(range, expression) {
		            return { range: range, expression: expression };
		        }
		        InlineValueEvaluatableExpression.create = create;
		        function is(value) {
		            var candidate = value;
		            return candidate !== undefined && candidate !== null && Range.is(candidate.range)
		                && (Is.string(candidate.expression) || candidate.expression === undefined);
		        }
		        InlineValueEvaluatableExpression.is = is;
		    })(InlineValueEvaluatableExpression || (exports.InlineValueEvaluatableExpression = InlineValueEvaluatableExpression = {}));
		    /**
		     * The InlineValueContext namespace provides helper functions to work with
		     * {@link InlineValueContext} literals.
		     *
		     * @since 3.17.0
		     */
		    var InlineValueContext;
		    (function (InlineValueContext) {
		        /**
		         * Creates a new InlineValueContext literal.
		         */
		        function create(frameId, stoppedLocation) {
		            return { frameId: frameId, stoppedLocation: stoppedLocation };
		        }
		        InlineValueContext.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link InlineValueContext} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Range.is(value.stoppedLocation);
		        }
		        InlineValueContext.is = is;
		    })(InlineValueContext || (exports.InlineValueContext = InlineValueContext = {}));
		    /**
		     * Inlay hint kinds.
		     *
		     * @since 3.17.0
		     */
		    var InlayHintKind;
		    (function (InlayHintKind) {
		        /**
		         * An inlay hint that for a type annotation.
		         */
		        InlayHintKind.Type = 1;
		        /**
		         * An inlay hint that is for a parameter.
		         */
		        InlayHintKind.Parameter = 2;
		        function is(value) {
		            return value === 1 || value === 2;
		        }
		        InlayHintKind.is = is;
		    })(InlayHintKind || (exports.InlayHintKind = InlayHintKind = {}));
		    var InlayHintLabelPart;
		    (function (InlayHintLabelPart) {
		        function create(value) {
		            return { value: value };
		        }
		        InlayHintLabelPart.create = create;
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate)
		                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
		                && (candidate.location === undefined || Location.is(candidate.location))
		                && (candidate.command === undefined || Command.is(candidate.command));
		        }
		        InlayHintLabelPart.is = is;
		    })(InlayHintLabelPart || (exports.InlayHintLabelPart = InlayHintLabelPart = {}));
		    var InlayHint;
		    (function (InlayHint) {
		        function create(position, label, kind) {
		            var result = { position: position, label: label };
		            if (kind !== undefined) {
		                result.kind = kind;
		            }
		            return result;
		        }
		        InlayHint.create = create;
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && Position.is(candidate.position)
		                && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is))
		                && (candidate.kind === undefined || InlayHintKind.is(candidate.kind))
		                && (candidate.textEdits === undefined) || Is.typedArray(candidate.textEdits, TextEdit.is)
		                && (candidate.tooltip === undefined || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip))
		                && (candidate.paddingLeft === undefined || Is.boolean(candidate.paddingLeft))
		                && (candidate.paddingRight === undefined || Is.boolean(candidate.paddingRight));
		        }
		        InlayHint.is = is;
		    })(InlayHint || (exports.InlayHint = InlayHint = {}));
		    var StringValue;
		    (function (StringValue) {
		        function createSnippet(value) {
		            return { kind: 'snippet', value: value };
		        }
		        StringValue.createSnippet = createSnippet;
		    })(StringValue || (exports.StringValue = StringValue = {}));
		    var InlineCompletionItem;
		    (function (InlineCompletionItem) {
		        function create(insertText, filterText, range, command) {
		            return { insertText: insertText, filterText: filterText, range: range, command: command };
		        }
		        InlineCompletionItem.create = create;
		    })(InlineCompletionItem || (exports.InlineCompletionItem = InlineCompletionItem = {}));
		    var InlineCompletionList;
		    (function (InlineCompletionList) {
		        function create(items) {
		            return { items: items };
		        }
		        InlineCompletionList.create = create;
		    })(InlineCompletionList || (exports.InlineCompletionList = InlineCompletionList = {}));
		    /**
		     * Describes how an {@link InlineCompletionItemProvider inline completion provider} was triggered.
		     *
		     * @since 3.18.0
		     * @proposed
		     */
		    var InlineCompletionTriggerKind;
		    (function (InlineCompletionTriggerKind) {
		        /**
		         * Completion was triggered explicitly by a user gesture.
		         */
		        InlineCompletionTriggerKind.Invoked = 0;
		        /**
		         * Completion was triggered automatically while editing.
		         */
		        InlineCompletionTriggerKind.Automatic = 1;
		    })(InlineCompletionTriggerKind || (exports.InlineCompletionTriggerKind = InlineCompletionTriggerKind = {}));
		    var SelectedCompletionInfo;
		    (function (SelectedCompletionInfo) {
		        function create(range, text) {
		            return { range: range, text: text };
		        }
		        SelectedCompletionInfo.create = create;
		    })(SelectedCompletionInfo || (exports.SelectedCompletionInfo = SelectedCompletionInfo = {}));
		    var InlineCompletionContext;
		    (function (InlineCompletionContext) {
		        function create(triggerKind, selectedCompletionInfo) {
		            return { triggerKind: triggerKind, selectedCompletionInfo: selectedCompletionInfo };
		        }
		        InlineCompletionContext.create = create;
		    })(InlineCompletionContext || (exports.InlineCompletionContext = InlineCompletionContext = {}));
		    var WorkspaceFolder;
		    (function (WorkspaceFolder) {
		        function is(value) {
		            var candidate = value;
		            return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
		        }
		        WorkspaceFolder.is = is;
		    })(WorkspaceFolder || (exports.WorkspaceFolder = WorkspaceFolder = {}));
		    exports.EOL = ['\n', '\r\n', '\r'];
		    /**
		     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
		     */
		    var TextDocument;
		    (function (TextDocument) {
		        /**
		         * Creates a new ITextDocument literal from the given uri and content.
		         * @param uri The document's uri.
		         * @param languageId The document's language Id.
		         * @param version The document's version.
		         * @param content The document's content.
		         */
		        function create(uri, languageId, version, content) {
		            return new FullTextDocument(uri, languageId, version, content);
		        }
		        TextDocument.create = create;
		        /**
		         * Checks whether the given literal conforms to the {@link ITextDocument} interface.
		         */
		        function is(value) {
		            var candidate = value;
		            return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount)
		                && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
		        }
		        TextDocument.is = is;
		        function applyEdits(document, edits) {
		            var text = document.getText();
		            var sortedEdits = mergeSort(edits, function (a, b) {
		                var diff = a.range.start.line - b.range.start.line;
		                if (diff === 0) {
		                    return a.range.start.character - b.range.start.character;
		                }
		                return diff;
		            });
		            var lastModifiedOffset = text.length;
		            for (var i = sortedEdits.length - 1; i >= 0; i--) {
		                var e = sortedEdits[i];
		                var startOffset = document.offsetAt(e.range.start);
		                var endOffset = document.offsetAt(e.range.end);
		                if (endOffset <= lastModifiedOffset) {
		                    text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
		                }
		                else {
		                    throw new Error('Overlapping edit');
		                }
		                lastModifiedOffset = startOffset;
		            }
		            return text;
		        }
		        TextDocument.applyEdits = applyEdits;
		        function mergeSort(data, compare) {
		            if (data.length <= 1) {
		                // sorted
		                return data;
		            }
		            var p = (data.length / 2) | 0;
		            var left = data.slice(0, p);
		            var right = data.slice(p);
		            mergeSort(left, compare);
		            mergeSort(right, compare);
		            var leftIdx = 0;
		            var rightIdx = 0;
		            var i = 0;
		            while (leftIdx < left.length && rightIdx < right.length) {
		                var ret = compare(left[leftIdx], right[rightIdx]);
		                if (ret <= 0) {
		                    // smaller_equal -> take left to preserve order
		                    data[i++] = left[leftIdx++];
		                }
		                else {
		                    // greater -> take right
		                    data[i++] = right[rightIdx++];
		                }
		            }
		            while (leftIdx < left.length) {
		                data[i++] = left[leftIdx++];
		            }
		            while (rightIdx < right.length) {
		                data[i++] = right[rightIdx++];
		            }
		            return data;
		        }
		    })(TextDocument || (exports.TextDocument = TextDocument = {}));
		    /**
		     * @deprecated Use the text document from the new vscode-languageserver-textdocument package.
		     */
		    var FullTextDocument = /** @class */ (function () {
		        function FullTextDocument(uri, languageId, version, content) {
		            this._uri = uri;
		            this._languageId = languageId;
		            this._version = version;
		            this._content = content;
		            this._lineOffsets = undefined;
		        }
		        Object.defineProperty(FullTextDocument.prototype, "uri", {
		            get: function () {
		                return this._uri;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        Object.defineProperty(FullTextDocument.prototype, "languageId", {
		            get: function () {
		                return this._languageId;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        Object.defineProperty(FullTextDocument.prototype, "version", {
		            get: function () {
		                return this._version;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        FullTextDocument.prototype.getText = function (range) {
		            if (range) {
		                var start = this.offsetAt(range.start);
		                var end = this.offsetAt(range.end);
		                return this._content.substring(start, end);
		            }
		            return this._content;
		        };
		        FullTextDocument.prototype.update = function (event, version) {
		            this._content = event.text;
		            this._version = version;
		            this._lineOffsets = undefined;
		        };
		        FullTextDocument.prototype.getLineOffsets = function () {
		            if (this._lineOffsets === undefined) {
		                var lineOffsets = [];
		                var text = this._content;
		                var isLineStart = true;
		                for (var i = 0; i < text.length; i++) {
		                    if (isLineStart) {
		                        lineOffsets.push(i);
		                        isLineStart = false;
		                    }
		                    var ch = text.charAt(i);
		                    isLineStart = (ch === '\r' || ch === '\n');
		                    if (ch === '\r' && i + 1 < text.length && text.charAt(i + 1) === '\n') {
		                        i++;
		                    }
		                }
		                if (isLineStart && text.length > 0) {
		                    lineOffsets.push(text.length);
		                }
		                this._lineOffsets = lineOffsets;
		            }
		            return this._lineOffsets;
		        };
		        FullTextDocument.prototype.positionAt = function (offset) {
		            offset = Math.max(Math.min(offset, this._content.length), 0);
		            var lineOffsets = this.getLineOffsets();
		            var low = 0, high = lineOffsets.length;
		            if (high === 0) {
		                return Position.create(0, offset);
		            }
		            while (low < high) {
		                var mid = Math.floor((low + high) / 2);
		                if (lineOffsets[mid] > offset) {
		                    high = mid;
		                }
		                else {
		                    low = mid + 1;
		                }
		            }
		            // low is the least x for which the line offset is larger than the current offset
		            // or array.length if no line offset is larger than the current offset
		            var line = low - 1;
		            return Position.create(line, offset - lineOffsets[line]);
		        };
		        FullTextDocument.prototype.offsetAt = function (position) {
		            var lineOffsets = this.getLineOffsets();
		            if (position.line >= lineOffsets.length) {
		                return this._content.length;
		            }
		            else if (position.line < 0) {
		                return 0;
		            }
		            var lineOffset = lineOffsets[position.line];
		            var nextLineOffset = (position.line + 1 < lineOffsets.length) ? lineOffsets[position.line + 1] : this._content.length;
		            return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
		        };
		        Object.defineProperty(FullTextDocument.prototype, "lineCount", {
		            get: function () {
		                return this.getLineOffsets().length;
		            },
		            enumerable: false,
		            configurable: true
		        });
		        return FullTextDocument;
		    }());
		    var Is;
		    (function (Is) {
		        var toString = Object.prototype.toString;
		        function defined(value) {
		            return typeof value !== 'undefined';
		        }
		        Is.defined = defined;
		        function undefined$1(value) {
		            return typeof value === 'undefined';
		        }
		        Is.undefined = undefined$1;
		        function boolean(value) {
		            return value === true || value === false;
		        }
		        Is.boolean = boolean;
		        function string(value) {
		            return toString.call(value) === '[object String]';
		        }
		        Is.string = string;
		        function number(value) {
		            return toString.call(value) === '[object Number]';
		        }
		        Is.number = number;
		        function numberRange(value, min, max) {
		            return toString.call(value) === '[object Number]' && min <= value && value <= max;
		        }
		        Is.numberRange = numberRange;
		        function integer(value) {
		            return toString.call(value) === '[object Number]' && -2147483648 <= value && value <= 2147483647;
		        }
		        Is.integer = integer;
		        function uinteger(value) {
		            return toString.call(value) === '[object Number]' && 0 <= value && value <= 2147483647;
		        }
		        Is.uinteger = uinteger;
		        function func(value) {
		            return toString.call(value) === '[object Function]';
		        }
		        Is.func = func;
		        function objectLiteral(value) {
		            // Strictly speaking class instances pass this check as well. Since the LSP
		            // doesn't use classes we ignore this for now. If we do we need to add something
		            // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
		            return value !== null && typeof value === 'object';
		        }
		        Is.objectLiteral = objectLiteral;
		        function typedArray(value, check) {
		            return Array.isArray(value) && value.every(check);
		        }
		        Is.typedArray = typedArray;
		    })(Is || (Is = {}));
		}); 
	} (main, main.exports));
	return main.exports;
}

var messages = {};

var hasRequiredMessages;

function requireMessages () {
	if (hasRequiredMessages) return messages;
	hasRequiredMessages = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(messages, "__esModule", { value: true });
	messages.ProtocolNotificationType = messages.ProtocolNotificationType0 = messages.ProtocolRequestType = messages.ProtocolRequestType0 = messages.RegistrationType = messages.MessageDirection = void 0;
	const vscode_jsonrpc_1 = requireMain$3();
	var MessageDirection;
	(function (MessageDirection) {
	    MessageDirection["clientToServer"] = "clientToServer";
	    MessageDirection["serverToClient"] = "serverToClient";
	    MessageDirection["both"] = "both";
	})(MessageDirection || (messages.MessageDirection = MessageDirection = {}));
	class RegistrationType {
	    constructor(method) {
	        this.method = method;
	    }
	}
	messages.RegistrationType = RegistrationType;
	class ProtocolRequestType0 extends vscode_jsonrpc_1.RequestType0 {
	    constructor(method) {
	        super(method);
	    }
	}
	messages.ProtocolRequestType0 = ProtocolRequestType0;
	class ProtocolRequestType extends vscode_jsonrpc_1.RequestType {
	    constructor(method) {
	        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
	    }
	}
	messages.ProtocolRequestType = ProtocolRequestType;
	class ProtocolNotificationType0 extends vscode_jsonrpc_1.NotificationType0 {
	    constructor(method) {
	        super(method);
	    }
	}
	messages.ProtocolNotificationType0 = ProtocolNotificationType0;
	class ProtocolNotificationType extends vscode_jsonrpc_1.NotificationType {
	    constructor(method) {
	        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
	    }
	}
	messages.ProtocolNotificationType = ProtocolNotificationType;
	return messages;
}

var protocol = {};

var is = {};

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var hasRequiredIs;

function requireIs () {
	if (hasRequiredIs) return is;
	hasRequiredIs = 1;
	Object.defineProperty(is, "__esModule", { value: true });
	is.objectLiteral = is.typedArray = is.stringArray = is.array = is.func = is.error = is.number = is.string = is.boolean = void 0;
	function boolean(value) {
	    return value === true || value === false;
	}
	is.boolean = boolean;
	function string(value) {
	    return typeof value === 'string' || value instanceof String;
	}
	is.string = string;
	function number(value) {
	    return typeof value === 'number' || value instanceof Number;
	}
	is.number = number;
	function error(value) {
	    return value instanceof Error;
	}
	is.error = error;
	function func(value) {
	    return typeof value === 'function';
	}
	is.func = func;
	function array(value) {
	    return Array.isArray(value);
	}
	is.array = array;
	function stringArray(value) {
	    return array(value) && value.every(elem => string(elem));
	}
	is.stringArray = stringArray;
	function typedArray(value, check) {
	    return Array.isArray(value) && value.every(check);
	}
	is.typedArray = typedArray;
	function objectLiteral(value) {
	    // Strictly speaking class instances pass this check as well. Since the LSP
	    // doesn't use classes we ignore this for now. If we do we need to add something
	    // like this: `Object.getPrototypeOf(Object.getPrototypeOf(x)) === null`
	    return value !== null && typeof value === 'object';
	}
	is.objectLiteral = objectLiteral;
	return is;
}

var protocol_implementation = {};

var hasRequiredProtocol_implementation;

function requireProtocol_implementation () {
	if (hasRequiredProtocol_implementation) return protocol_implementation;
	hasRequiredProtocol_implementation = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_implementation, "__esModule", { value: true });
	protocol_implementation.ImplementationRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to resolve the implementation locations of a symbol at a given text
	 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
	 * the response is of type {@link Definition} or a Thenable that resolves to such.
	 */
	var ImplementationRequest;
	(function (ImplementationRequest) {
	    ImplementationRequest.method = 'textDocument/implementation';
	    ImplementationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ImplementationRequest.type = new messages_1.ProtocolRequestType(ImplementationRequest.method);
	})(ImplementationRequest || (protocol_implementation.ImplementationRequest = ImplementationRequest = {}));
	return protocol_implementation;
}

var protocol_typeDefinition = {};

var hasRequiredProtocol_typeDefinition;

function requireProtocol_typeDefinition () {
	if (hasRequiredProtocol_typeDefinition) return protocol_typeDefinition;
	hasRequiredProtocol_typeDefinition = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_typeDefinition, "__esModule", { value: true });
	protocol_typeDefinition.TypeDefinitionRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to resolve the type definition locations of a symbol at a given text
	 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
	 * the response is of type {@link Definition} or a Thenable that resolves to such.
	 */
	var TypeDefinitionRequest;
	(function (TypeDefinitionRequest) {
	    TypeDefinitionRequest.method = 'textDocument/typeDefinition';
	    TypeDefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeDefinitionRequest.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest.method);
	})(TypeDefinitionRequest || (protocol_typeDefinition.TypeDefinitionRequest = TypeDefinitionRequest = {}));
	return protocol_typeDefinition;
}

var protocol_workspaceFolder = {};

var hasRequiredProtocol_workspaceFolder;

function requireProtocol_workspaceFolder () {
	if (hasRequiredProtocol_workspaceFolder) return protocol_workspaceFolder;
	hasRequiredProtocol_workspaceFolder = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_workspaceFolder, "__esModule", { value: true });
	protocol_workspaceFolder.DidChangeWorkspaceFoldersNotification = protocol_workspaceFolder.WorkspaceFoldersRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * The `workspace/workspaceFolders` is sent from the server to the client to fetch the open workspace folders.
	 */
	var WorkspaceFoldersRequest;
	(function (WorkspaceFoldersRequest) {
	    WorkspaceFoldersRequest.method = 'workspace/workspaceFolders';
	    WorkspaceFoldersRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    WorkspaceFoldersRequest.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest.method);
	})(WorkspaceFoldersRequest || (protocol_workspaceFolder.WorkspaceFoldersRequest = WorkspaceFoldersRequest = {}));
	/**
	 * The `workspace/didChangeWorkspaceFolders` notification is sent from the client to the server when the workspace
	 * folder configuration changes.
	 */
	var DidChangeWorkspaceFoldersNotification;
	(function (DidChangeWorkspaceFoldersNotification) {
	    DidChangeWorkspaceFoldersNotification.method = 'workspace/didChangeWorkspaceFolders';
	    DidChangeWorkspaceFoldersNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeWorkspaceFoldersNotification.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification.method);
	})(DidChangeWorkspaceFoldersNotification || (protocol_workspaceFolder.DidChangeWorkspaceFoldersNotification = DidChangeWorkspaceFoldersNotification = {}));
	return protocol_workspaceFolder;
}

var protocol_configuration = {};

var hasRequiredProtocol_configuration;

function requireProtocol_configuration () {
	if (hasRequiredProtocol_configuration) return protocol_configuration;
	hasRequiredProtocol_configuration = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_configuration, "__esModule", { value: true });
	protocol_configuration.ConfigurationRequest = void 0;
	const messages_1 = requireMessages();
	//---- Get Configuration request ----
	/**
	 * The 'workspace/configuration' request is sent from the server to the client to fetch a certain
	 * configuration setting.
	 *
	 * This pull model replaces the old push model were the client signaled configuration change via an
	 * event. If the server still needs to react to configuration changes (since the server caches the
	 * result of `workspace/configuration` requests) the server should register for an empty configuration
	 * change event and empty the cache if such an event is received.
	 */
	var ConfigurationRequest;
	(function (ConfigurationRequest) {
	    ConfigurationRequest.method = 'workspace/configuration';
	    ConfigurationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ConfigurationRequest.type = new messages_1.ProtocolRequestType(ConfigurationRequest.method);
	})(ConfigurationRequest || (protocol_configuration.ConfigurationRequest = ConfigurationRequest = {}));
	return protocol_configuration;
}

var protocol_colorProvider = {};

var hasRequiredProtocol_colorProvider;

function requireProtocol_colorProvider () {
	if (hasRequiredProtocol_colorProvider) return protocol_colorProvider;
	hasRequiredProtocol_colorProvider = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_colorProvider, "__esModule", { value: true });
	protocol_colorProvider.ColorPresentationRequest = protocol_colorProvider.DocumentColorRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to list all color symbols found in a given text document. The request's
	 * parameter is of type {@link DocumentColorParams} the
	 * response is of type {@link ColorInformation ColorInformation[]} or a Thenable
	 * that resolves to such.
	 */
	var DocumentColorRequest;
	(function (DocumentColorRequest) {
	    DocumentColorRequest.method = 'textDocument/documentColor';
	    DocumentColorRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentColorRequest.type = new messages_1.ProtocolRequestType(DocumentColorRequest.method);
	})(DocumentColorRequest || (protocol_colorProvider.DocumentColorRequest = DocumentColorRequest = {}));
	/**
	 * A request to list all presentation for a color. The request's
	 * parameter is of type {@link ColorPresentationParams} the
	 * response is of type {@link ColorInformation ColorInformation[]} or a Thenable
	 * that resolves to such.
	 */
	var ColorPresentationRequest;
	(function (ColorPresentationRequest) {
	    ColorPresentationRequest.method = 'textDocument/colorPresentation';
	    ColorPresentationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    ColorPresentationRequest.type = new messages_1.ProtocolRequestType(ColorPresentationRequest.method);
	})(ColorPresentationRequest || (protocol_colorProvider.ColorPresentationRequest = ColorPresentationRequest = {}));
	return protocol_colorProvider;
}

var protocol_foldingRange = {};

var hasRequiredProtocol_foldingRange;

function requireProtocol_foldingRange () {
	if (hasRequiredProtocol_foldingRange) return protocol_foldingRange;
	hasRequiredProtocol_foldingRange = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_foldingRange, "__esModule", { value: true });
	protocol_foldingRange.FoldingRangeRefreshRequest = protocol_foldingRange.FoldingRangeRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide folding ranges in a document. The request's
	 * parameter is of type {@link FoldingRangeParams}, the
	 * response is of type {@link FoldingRangeList} or a Thenable
	 * that resolves to such.
	 */
	var FoldingRangeRequest;
	(function (FoldingRangeRequest) {
	    FoldingRangeRequest.method = 'textDocument/foldingRange';
	    FoldingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    FoldingRangeRequest.type = new messages_1.ProtocolRequestType(FoldingRangeRequest.method);
	})(FoldingRangeRequest || (protocol_foldingRange.FoldingRangeRequest = FoldingRangeRequest = {}));
	/**
	 * @since 3.18.0
	 * @proposed
	 */
	var FoldingRangeRefreshRequest;
	(function (FoldingRangeRefreshRequest) {
	    FoldingRangeRefreshRequest.method = `workspace/foldingRange/refresh`;
	    FoldingRangeRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    FoldingRangeRefreshRequest.type = new messages_1.ProtocolRequestType0(FoldingRangeRefreshRequest.method);
	})(FoldingRangeRefreshRequest || (protocol_foldingRange.FoldingRangeRefreshRequest = FoldingRangeRefreshRequest = {}));
	return protocol_foldingRange;
}

var protocol_declaration = {};

var hasRequiredProtocol_declaration;

function requireProtocol_declaration () {
	if (hasRequiredProtocol_declaration) return protocol_declaration;
	hasRequiredProtocol_declaration = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_declaration, "__esModule", { value: true });
	protocol_declaration.DeclarationRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to resolve the type definition locations of a symbol at a given text
	 * document position. The request's parameter is of type {@link TextDocumentPositionParams}
	 * the response is of type {@link Declaration} or a typed array of {@link DeclarationLink}
	 * or a Thenable that resolves to such.
	 */
	var DeclarationRequest;
	(function (DeclarationRequest) {
	    DeclarationRequest.method = 'textDocument/declaration';
	    DeclarationRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DeclarationRequest.type = new messages_1.ProtocolRequestType(DeclarationRequest.method);
	})(DeclarationRequest || (protocol_declaration.DeclarationRequest = DeclarationRequest = {}));
	return protocol_declaration;
}

var protocol_selectionRange = {};

var hasRequiredProtocol_selectionRange;

function requireProtocol_selectionRange () {
	if (hasRequiredProtocol_selectionRange) return protocol_selectionRange;
	hasRequiredProtocol_selectionRange = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_selectionRange, "__esModule", { value: true });
	protocol_selectionRange.SelectionRangeRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide selection ranges in a document. The request's
	 * parameter is of type {@link SelectionRangeParams}, the
	 * response is of type {@link SelectionRange SelectionRange[]} or a Thenable
	 * that resolves to such.
	 */
	var SelectionRangeRequest;
	(function (SelectionRangeRequest) {
	    SelectionRangeRequest.method = 'textDocument/selectionRange';
	    SelectionRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SelectionRangeRequest.type = new messages_1.ProtocolRequestType(SelectionRangeRequest.method);
	})(SelectionRangeRequest || (protocol_selectionRange.SelectionRangeRequest = SelectionRangeRequest = {}));
	return protocol_selectionRange;
}

var protocol_progress = {};

var hasRequiredProtocol_progress;

function requireProtocol_progress () {
	if (hasRequiredProtocol_progress) return protocol_progress;
	hasRequiredProtocol_progress = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_progress, "__esModule", { value: true });
	protocol_progress.WorkDoneProgressCancelNotification = protocol_progress.WorkDoneProgressCreateRequest = protocol_progress.WorkDoneProgress = void 0;
	const vscode_jsonrpc_1 = requireMain$3();
	const messages_1 = requireMessages();
	var WorkDoneProgress;
	(function (WorkDoneProgress) {
	    WorkDoneProgress.type = new vscode_jsonrpc_1.ProgressType();
	    function is(value) {
	        return value === WorkDoneProgress.type;
	    }
	    WorkDoneProgress.is = is;
	})(WorkDoneProgress || (protocol_progress.WorkDoneProgress = WorkDoneProgress = {}));
	/**
	 * The `window/workDoneProgress/create` request is sent from the server to the client to initiate progress
	 * reporting from the server.
	 */
	var WorkDoneProgressCreateRequest;
	(function (WorkDoneProgressCreateRequest) {
	    WorkDoneProgressCreateRequest.method = 'window/workDoneProgress/create';
	    WorkDoneProgressCreateRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    WorkDoneProgressCreateRequest.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest.method);
	})(WorkDoneProgressCreateRequest || (protocol_progress.WorkDoneProgressCreateRequest = WorkDoneProgressCreateRequest = {}));
	/**
	 * The `window/workDoneProgress/cancel` notification is sent from  the client to the server to cancel a progress
	 * initiated on the server side.
	 */
	var WorkDoneProgressCancelNotification;
	(function (WorkDoneProgressCancelNotification) {
	    WorkDoneProgressCancelNotification.method = 'window/workDoneProgress/cancel';
	    WorkDoneProgressCancelNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkDoneProgressCancelNotification.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification.method);
	})(WorkDoneProgressCancelNotification || (protocol_progress.WorkDoneProgressCancelNotification = WorkDoneProgressCancelNotification = {}));
	return protocol_progress;
}

var protocol_callHierarchy = {};

var hasRequiredProtocol_callHierarchy;

function requireProtocol_callHierarchy () {
	if (hasRequiredProtocol_callHierarchy) return protocol_callHierarchy;
	hasRequiredProtocol_callHierarchy = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_callHierarchy, "__esModule", { value: true });
	protocol_callHierarchy.CallHierarchyOutgoingCallsRequest = protocol_callHierarchy.CallHierarchyIncomingCallsRequest = protocol_callHierarchy.CallHierarchyPrepareRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to result a `CallHierarchyItem` in a document at a given position.
	 * Can be used as an input to an incoming or outgoing call hierarchy.
	 *
	 * @since 3.16.0
	 */
	var CallHierarchyPrepareRequest;
	(function (CallHierarchyPrepareRequest) {
	    CallHierarchyPrepareRequest.method = 'textDocument/prepareCallHierarchy';
	    CallHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest.method);
	})(CallHierarchyPrepareRequest || (protocol_callHierarchy.CallHierarchyPrepareRequest = CallHierarchyPrepareRequest = {}));
	/**
	 * A request to resolve the incoming calls for a given `CallHierarchyItem`.
	 *
	 * @since 3.16.0
	 */
	var CallHierarchyIncomingCallsRequest;
	(function (CallHierarchyIncomingCallsRequest) {
	    CallHierarchyIncomingCallsRequest.method = 'callHierarchy/incomingCalls';
	    CallHierarchyIncomingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyIncomingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest.method);
	})(CallHierarchyIncomingCallsRequest || (protocol_callHierarchy.CallHierarchyIncomingCallsRequest = CallHierarchyIncomingCallsRequest = {}));
	/**
	 * A request to resolve the outgoing calls for a given `CallHierarchyItem`.
	 *
	 * @since 3.16.0
	 */
	var CallHierarchyOutgoingCallsRequest;
	(function (CallHierarchyOutgoingCallsRequest) {
	    CallHierarchyOutgoingCallsRequest.method = 'callHierarchy/outgoingCalls';
	    CallHierarchyOutgoingCallsRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    CallHierarchyOutgoingCallsRequest.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest.method);
	})(CallHierarchyOutgoingCallsRequest || (protocol_callHierarchy.CallHierarchyOutgoingCallsRequest = CallHierarchyOutgoingCallsRequest = {}));
	return protocol_callHierarchy;
}

var protocol_semanticTokens = {};

var hasRequiredProtocol_semanticTokens;

function requireProtocol_semanticTokens () {
	if (hasRequiredProtocol_semanticTokens) return protocol_semanticTokens;
	hasRequiredProtocol_semanticTokens = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_semanticTokens, "__esModule", { value: true });
	protocol_semanticTokens.SemanticTokensRefreshRequest = protocol_semanticTokens.SemanticTokensRangeRequest = protocol_semanticTokens.SemanticTokensDeltaRequest = protocol_semanticTokens.SemanticTokensRequest = protocol_semanticTokens.SemanticTokensRegistrationType = protocol_semanticTokens.TokenFormat = void 0;
	const messages_1 = requireMessages();
	//------- 'textDocument/semanticTokens' -----
	var TokenFormat;
	(function (TokenFormat) {
	    TokenFormat.Relative = 'relative';
	})(TokenFormat || (protocol_semanticTokens.TokenFormat = TokenFormat = {}));
	var SemanticTokensRegistrationType;
	(function (SemanticTokensRegistrationType) {
	    SemanticTokensRegistrationType.method = 'textDocument/semanticTokens';
	    SemanticTokensRegistrationType.type = new messages_1.RegistrationType(SemanticTokensRegistrationType.method);
	})(SemanticTokensRegistrationType || (protocol_semanticTokens.SemanticTokensRegistrationType = SemanticTokensRegistrationType = {}));
	/**
	 * @since 3.16.0
	 */
	var SemanticTokensRequest;
	(function (SemanticTokensRequest) {
	    SemanticTokensRequest.method = 'textDocument/semanticTokens/full';
	    SemanticTokensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRequest.method);
	    SemanticTokensRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(SemanticTokensRequest || (protocol_semanticTokens.SemanticTokensRequest = SemanticTokensRequest = {}));
	/**
	 * @since 3.16.0
	 */
	var SemanticTokensDeltaRequest;
	(function (SemanticTokensDeltaRequest) {
	    SemanticTokensDeltaRequest.method = 'textDocument/semanticTokens/full/delta';
	    SemanticTokensDeltaRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensDeltaRequest.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest.method);
	    SemanticTokensDeltaRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(SemanticTokensDeltaRequest || (protocol_semanticTokens.SemanticTokensDeltaRequest = SemanticTokensDeltaRequest = {}));
	/**
	 * @since 3.16.0
	 */
	var SemanticTokensRangeRequest;
	(function (SemanticTokensRangeRequest) {
	    SemanticTokensRangeRequest.method = 'textDocument/semanticTokens/range';
	    SemanticTokensRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    SemanticTokensRangeRequest.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest.method);
	    SemanticTokensRangeRequest.registrationMethod = SemanticTokensRegistrationType.method;
	})(SemanticTokensRangeRequest || (protocol_semanticTokens.SemanticTokensRangeRequest = SemanticTokensRangeRequest = {}));
	/**
	 * @since 3.16.0
	 */
	var SemanticTokensRefreshRequest;
	(function (SemanticTokensRefreshRequest) {
	    SemanticTokensRefreshRequest.method = `workspace/semanticTokens/refresh`;
	    SemanticTokensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    SemanticTokensRefreshRequest.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest.method);
	})(SemanticTokensRefreshRequest || (protocol_semanticTokens.SemanticTokensRefreshRequest = SemanticTokensRefreshRequest = {}));
	return protocol_semanticTokens;
}

var protocol_showDocument = {};

var hasRequiredProtocol_showDocument;

function requireProtocol_showDocument () {
	if (hasRequiredProtocol_showDocument) return protocol_showDocument;
	hasRequiredProtocol_showDocument = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_showDocument, "__esModule", { value: true });
	protocol_showDocument.ShowDocumentRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to show a document. This request might open an
	 * external program depending on the value of the URI to open.
	 * For example a request to open `https://code.visualstudio.com/`
	 * will very likely open the URI in a WEB browser.
	 *
	 * @since 3.16.0
	*/
	var ShowDocumentRequest;
	(function (ShowDocumentRequest) {
	    ShowDocumentRequest.method = 'window/showDocument';
	    ShowDocumentRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    ShowDocumentRequest.type = new messages_1.ProtocolRequestType(ShowDocumentRequest.method);
	})(ShowDocumentRequest || (protocol_showDocument.ShowDocumentRequest = ShowDocumentRequest = {}));
	return protocol_showDocument;
}

var protocol_linkedEditingRange = {};

var hasRequiredProtocol_linkedEditingRange;

function requireProtocol_linkedEditingRange () {
	if (hasRequiredProtocol_linkedEditingRange) return protocol_linkedEditingRange;
	hasRequiredProtocol_linkedEditingRange = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_linkedEditingRange, "__esModule", { value: true });
	protocol_linkedEditingRange.LinkedEditingRangeRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide ranges that can be edited together.
	 *
	 * @since 3.16.0
	 */
	var LinkedEditingRangeRequest;
	(function (LinkedEditingRangeRequest) {
	    LinkedEditingRangeRequest.method = 'textDocument/linkedEditingRange';
	    LinkedEditingRangeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    LinkedEditingRangeRequest.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest.method);
	})(LinkedEditingRangeRequest || (protocol_linkedEditingRange.LinkedEditingRangeRequest = LinkedEditingRangeRequest = {}));
	return protocol_linkedEditingRange;
}

var protocol_fileOperations = {};

var hasRequiredProtocol_fileOperations;

function requireProtocol_fileOperations () {
	if (hasRequiredProtocol_fileOperations) return protocol_fileOperations;
	hasRequiredProtocol_fileOperations = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_fileOperations, "__esModule", { value: true });
	protocol_fileOperations.WillDeleteFilesRequest = protocol_fileOperations.DidDeleteFilesNotification = protocol_fileOperations.DidRenameFilesNotification = protocol_fileOperations.WillRenameFilesRequest = protocol_fileOperations.DidCreateFilesNotification = protocol_fileOperations.WillCreateFilesRequest = protocol_fileOperations.FileOperationPatternKind = void 0;
	const messages_1 = requireMessages();
	/**
	 * A pattern kind describing if a glob pattern matches a file a folder or
	 * both.
	 *
	 * @since 3.16.0
	 */
	var FileOperationPatternKind;
	(function (FileOperationPatternKind) {
	    /**
	     * The pattern matches a file only.
	     */
	    FileOperationPatternKind.file = 'file';
	    /**
	     * The pattern matches a folder only.
	     */
	    FileOperationPatternKind.folder = 'folder';
	})(FileOperationPatternKind || (protocol_fileOperations.FileOperationPatternKind = FileOperationPatternKind = {}));
	/**
	 * The will create files request is sent from the client to the server before files are actually
	 * created as long as the creation is triggered from within the client.
	 *
	 * The request can return a `WorkspaceEdit` which will be applied to workspace before the
	 * files are created. Hence the `WorkspaceEdit` can not manipulate the content of the file
	 * to be created.
	 *
	 * @since 3.16.0
	 */
	var WillCreateFilesRequest;
	(function (WillCreateFilesRequest) {
	    WillCreateFilesRequest.method = 'workspace/willCreateFiles';
	    WillCreateFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillCreateFilesRequest.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest.method);
	})(WillCreateFilesRequest || (protocol_fileOperations.WillCreateFilesRequest = WillCreateFilesRequest = {}));
	/**
	 * The did create files notification is sent from the client to the server when
	 * files were created from within the client.
	 *
	 * @since 3.16.0
	 */
	var DidCreateFilesNotification;
	(function (DidCreateFilesNotification) {
	    DidCreateFilesNotification.method = 'workspace/didCreateFiles';
	    DidCreateFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidCreateFilesNotification.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification.method);
	})(DidCreateFilesNotification || (protocol_fileOperations.DidCreateFilesNotification = DidCreateFilesNotification = {}));
	/**
	 * The will rename files request is sent from the client to the server before files are actually
	 * renamed as long as the rename is triggered from within the client.
	 *
	 * @since 3.16.0
	 */
	var WillRenameFilesRequest;
	(function (WillRenameFilesRequest) {
	    WillRenameFilesRequest.method = 'workspace/willRenameFiles';
	    WillRenameFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillRenameFilesRequest.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest.method);
	})(WillRenameFilesRequest || (protocol_fileOperations.WillRenameFilesRequest = WillRenameFilesRequest = {}));
	/**
	 * The did rename files notification is sent from the client to the server when
	 * files were renamed from within the client.
	 *
	 * @since 3.16.0
	 */
	var DidRenameFilesNotification;
	(function (DidRenameFilesNotification) {
	    DidRenameFilesNotification.method = 'workspace/didRenameFiles';
	    DidRenameFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidRenameFilesNotification.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification.method);
	})(DidRenameFilesNotification || (protocol_fileOperations.DidRenameFilesNotification = DidRenameFilesNotification = {}));
	/**
	 * The will delete files request is sent from the client to the server before files are actually
	 * deleted as long as the deletion is triggered from within the client.
	 *
	 * @since 3.16.0
	 */
	var DidDeleteFilesNotification;
	(function (DidDeleteFilesNotification) {
	    DidDeleteFilesNotification.method = 'workspace/didDeleteFiles';
	    DidDeleteFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidDeleteFilesNotification.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification.method);
	})(DidDeleteFilesNotification || (protocol_fileOperations.DidDeleteFilesNotification = DidDeleteFilesNotification = {}));
	/**
	 * The did delete files notification is sent from the client to the server when
	 * files were deleted from within the client.
	 *
	 * @since 3.16.0
	 */
	var WillDeleteFilesRequest;
	(function (WillDeleteFilesRequest) {
	    WillDeleteFilesRequest.method = 'workspace/willDeleteFiles';
	    WillDeleteFilesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WillDeleteFilesRequest.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest.method);
	})(WillDeleteFilesRequest || (protocol_fileOperations.WillDeleteFilesRequest = WillDeleteFilesRequest = {}));
	return protocol_fileOperations;
}

var protocol_moniker = {};

var hasRequiredProtocol_moniker;

function requireProtocol_moniker () {
	if (hasRequiredProtocol_moniker) return protocol_moniker;
	hasRequiredProtocol_moniker = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_moniker, "__esModule", { value: true });
	protocol_moniker.MonikerRequest = protocol_moniker.MonikerKind = protocol_moniker.UniquenessLevel = void 0;
	const messages_1 = requireMessages();
	/**
	 * Moniker uniqueness level to define scope of the moniker.
	 *
	 * @since 3.16.0
	 */
	var UniquenessLevel;
	(function (UniquenessLevel) {
	    /**
	     * The moniker is only unique inside a document
	     */
	    UniquenessLevel.document = 'document';
	    /**
	     * The moniker is unique inside a project for which a dump got created
	     */
	    UniquenessLevel.project = 'project';
	    /**
	     * The moniker is unique inside the group to which a project belongs
	     */
	    UniquenessLevel.group = 'group';
	    /**
	     * The moniker is unique inside the moniker scheme.
	     */
	    UniquenessLevel.scheme = 'scheme';
	    /**
	     * The moniker is globally unique
	     */
	    UniquenessLevel.global = 'global';
	})(UniquenessLevel || (protocol_moniker.UniquenessLevel = UniquenessLevel = {}));
	/**
	 * The moniker kind.
	 *
	 * @since 3.16.0
	 */
	var MonikerKind;
	(function (MonikerKind) {
	    /**
	     * The moniker represent a symbol that is imported into a project
	     */
	    MonikerKind.$import = 'import';
	    /**
	     * The moniker represents a symbol that is exported from a project
	     */
	    MonikerKind.$export = 'export';
	    /**
	     * The moniker represents a symbol that is local to a project (e.g. a local
	     * variable of a function, a class not visible outside the project, ...)
	     */
	    MonikerKind.local = 'local';
	})(MonikerKind || (protocol_moniker.MonikerKind = MonikerKind = {}));
	/**
	 * A request to get the moniker of a symbol at a given text document position.
	 * The request parameter is of type {@link TextDocumentPositionParams}.
	 * The response is of type {@link Moniker Moniker[]} or `null`.
	 */
	var MonikerRequest;
	(function (MonikerRequest) {
	    MonikerRequest.method = 'textDocument/moniker';
	    MonikerRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    MonikerRequest.type = new messages_1.ProtocolRequestType(MonikerRequest.method);
	})(MonikerRequest || (protocol_moniker.MonikerRequest = MonikerRequest = {}));
	return protocol_moniker;
}

var protocol_typeHierarchy = {};

var hasRequiredProtocol_typeHierarchy;

function requireProtocol_typeHierarchy () {
	if (hasRequiredProtocol_typeHierarchy) return protocol_typeHierarchy;
	hasRequiredProtocol_typeHierarchy = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) TypeFox, Microsoft and others. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_typeHierarchy, "__esModule", { value: true });
	protocol_typeHierarchy.TypeHierarchySubtypesRequest = protocol_typeHierarchy.TypeHierarchySupertypesRequest = protocol_typeHierarchy.TypeHierarchyPrepareRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to result a `TypeHierarchyItem` in a document at a given position.
	 * Can be used as an input to a subtypes or supertypes type hierarchy.
	 *
	 * @since 3.17.0
	 */
	var TypeHierarchyPrepareRequest;
	(function (TypeHierarchyPrepareRequest) {
	    TypeHierarchyPrepareRequest.method = 'textDocument/prepareTypeHierarchy';
	    TypeHierarchyPrepareRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchyPrepareRequest.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest.method);
	})(TypeHierarchyPrepareRequest || (protocol_typeHierarchy.TypeHierarchyPrepareRequest = TypeHierarchyPrepareRequest = {}));
	/**
	 * A request to resolve the supertypes for a given `TypeHierarchyItem`.
	 *
	 * @since 3.17.0
	 */
	var TypeHierarchySupertypesRequest;
	(function (TypeHierarchySupertypesRequest) {
	    TypeHierarchySupertypesRequest.method = 'typeHierarchy/supertypes';
	    TypeHierarchySupertypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchySupertypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest.method);
	})(TypeHierarchySupertypesRequest || (protocol_typeHierarchy.TypeHierarchySupertypesRequest = TypeHierarchySupertypesRequest = {}));
	/**
	 * A request to resolve the subtypes for a given `TypeHierarchyItem`.
	 *
	 * @since 3.17.0
	 */
	var TypeHierarchySubtypesRequest;
	(function (TypeHierarchySubtypesRequest) {
	    TypeHierarchySubtypesRequest.method = 'typeHierarchy/subtypes';
	    TypeHierarchySubtypesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    TypeHierarchySubtypesRequest.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest.method);
	})(TypeHierarchySubtypesRequest || (protocol_typeHierarchy.TypeHierarchySubtypesRequest = TypeHierarchySubtypesRequest = {}));
	return protocol_typeHierarchy;
}

var protocol_inlineValue = {};

var hasRequiredProtocol_inlineValue;

function requireProtocol_inlineValue () {
	if (hasRequiredProtocol_inlineValue) return protocol_inlineValue;
	hasRequiredProtocol_inlineValue = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_inlineValue, "__esModule", { value: true });
	protocol_inlineValue.InlineValueRefreshRequest = protocol_inlineValue.InlineValueRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide inline values in a document. The request's parameter is of
	 * type {@link InlineValueParams}, the response is of type
	 * {@link InlineValue InlineValue[]} or a Thenable that resolves to such.
	 *
	 * @since 3.17.0
	 */
	var InlineValueRequest;
	(function (InlineValueRequest) {
	    InlineValueRequest.method = 'textDocument/inlineValue';
	    InlineValueRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlineValueRequest.type = new messages_1.ProtocolRequestType(InlineValueRequest.method);
	})(InlineValueRequest || (protocol_inlineValue.InlineValueRequest = InlineValueRequest = {}));
	/**
	 * @since 3.17.0
	 */
	var InlineValueRefreshRequest;
	(function (InlineValueRefreshRequest) {
	    InlineValueRefreshRequest.method = `workspace/inlineValue/refresh`;
	    InlineValueRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    InlineValueRefreshRequest.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest.method);
	})(InlineValueRefreshRequest || (protocol_inlineValue.InlineValueRefreshRequest = InlineValueRefreshRequest = {}));
	return protocol_inlineValue;
}

var protocol_inlayHint = {};

var hasRequiredProtocol_inlayHint;

function requireProtocol_inlayHint () {
	if (hasRequiredProtocol_inlayHint) return protocol_inlayHint;
	hasRequiredProtocol_inlayHint = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_inlayHint, "__esModule", { value: true });
	protocol_inlayHint.InlayHintRefreshRequest = protocol_inlayHint.InlayHintResolveRequest = protocol_inlayHint.InlayHintRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide inlay hints in a document. The request's parameter is of
	 * type {@link InlayHintsParams}, the response is of type
	 * {@link InlayHint InlayHint[]} or a Thenable that resolves to such.
	 *
	 * @since 3.17.0
	 */
	var InlayHintRequest;
	(function (InlayHintRequest) {
	    InlayHintRequest.method = 'textDocument/inlayHint';
	    InlayHintRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlayHintRequest.type = new messages_1.ProtocolRequestType(InlayHintRequest.method);
	})(InlayHintRequest || (protocol_inlayHint.InlayHintRequest = InlayHintRequest = {}));
	/**
	 * A request to resolve additional properties for an inlay hint.
	 * The request's parameter is of type {@link InlayHint}, the response is
	 * of type {@link InlayHint} or a Thenable that resolves to such.
	 *
	 * @since 3.17.0
	 */
	var InlayHintResolveRequest;
	(function (InlayHintResolveRequest) {
	    InlayHintResolveRequest.method = 'inlayHint/resolve';
	    InlayHintResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlayHintResolveRequest.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest.method);
	})(InlayHintResolveRequest || (protocol_inlayHint.InlayHintResolveRequest = InlayHintResolveRequest = {}));
	/**
	 * @since 3.17.0
	 */
	var InlayHintRefreshRequest;
	(function (InlayHintRefreshRequest) {
	    InlayHintRefreshRequest.method = `workspace/inlayHint/refresh`;
	    InlayHintRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    InlayHintRefreshRequest.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest.method);
	})(InlayHintRefreshRequest || (protocol_inlayHint.InlayHintRefreshRequest = InlayHintRefreshRequest = {}));
	return protocol_inlayHint;
}

var protocol_diagnostic = {};

var hasRequiredProtocol_diagnostic;

function requireProtocol_diagnostic () {
	if (hasRequiredProtocol_diagnostic) return protocol_diagnostic;
	hasRequiredProtocol_diagnostic = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_diagnostic, "__esModule", { value: true });
	protocol_diagnostic.DiagnosticRefreshRequest = protocol_diagnostic.WorkspaceDiagnosticRequest = protocol_diagnostic.DocumentDiagnosticRequest = protocol_diagnostic.DocumentDiagnosticReportKind = protocol_diagnostic.DiagnosticServerCancellationData = void 0;
	const vscode_jsonrpc_1 = requireMain$3();
	const Is = requireIs();
	const messages_1 = requireMessages();
	/**
	 * @since 3.17.0
	 */
	var DiagnosticServerCancellationData;
	(function (DiagnosticServerCancellationData) {
	    function is(value) {
	        const candidate = value;
	        return candidate && Is.boolean(candidate.retriggerRequest);
	    }
	    DiagnosticServerCancellationData.is = is;
	})(DiagnosticServerCancellationData || (protocol_diagnostic.DiagnosticServerCancellationData = DiagnosticServerCancellationData = {}));
	/**
	 * The document diagnostic report kinds.
	 *
	 * @since 3.17.0
	 */
	var DocumentDiagnosticReportKind;
	(function (DocumentDiagnosticReportKind) {
	    /**
	     * A diagnostic report with a full
	     * set of problems.
	     */
	    DocumentDiagnosticReportKind.Full = 'full';
	    /**
	     * A report indicating that the last
	     * returned report is still accurate.
	     */
	    DocumentDiagnosticReportKind.Unchanged = 'unchanged';
	})(DocumentDiagnosticReportKind || (protocol_diagnostic.DocumentDiagnosticReportKind = DocumentDiagnosticReportKind = {}));
	/**
	 * The document diagnostic request definition.
	 *
	 * @since 3.17.0
	 */
	var DocumentDiagnosticRequest;
	(function (DocumentDiagnosticRequest) {
	    DocumentDiagnosticRequest.method = 'textDocument/diagnostic';
	    DocumentDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    DocumentDiagnosticRequest.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest.method);
	    DocumentDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
	})(DocumentDiagnosticRequest || (protocol_diagnostic.DocumentDiagnosticRequest = DocumentDiagnosticRequest = {}));
	/**
	 * The workspace diagnostic request definition.
	 *
	 * @since 3.17.0
	 */
	var WorkspaceDiagnosticRequest;
	(function (WorkspaceDiagnosticRequest) {
	    WorkspaceDiagnosticRequest.method = 'workspace/diagnostic';
	    WorkspaceDiagnosticRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    WorkspaceDiagnosticRequest.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest.method);
	    WorkspaceDiagnosticRequest.partialResult = new vscode_jsonrpc_1.ProgressType();
	})(WorkspaceDiagnosticRequest || (protocol_diagnostic.WorkspaceDiagnosticRequest = WorkspaceDiagnosticRequest = {}));
	/**
	 * The diagnostic refresh request definition.
	 *
	 * @since 3.17.0
	 */
	var DiagnosticRefreshRequest;
	(function (DiagnosticRefreshRequest) {
	    DiagnosticRefreshRequest.method = `workspace/diagnostic/refresh`;
	    DiagnosticRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
	    DiagnosticRefreshRequest.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest.method);
	})(DiagnosticRefreshRequest || (protocol_diagnostic.DiagnosticRefreshRequest = DiagnosticRefreshRequest = {}));
	return protocol_diagnostic;
}

var protocol_notebook = {};

var hasRequiredProtocol_notebook;

function requireProtocol_notebook () {
	if (hasRequiredProtocol_notebook) return protocol_notebook;
	hasRequiredProtocol_notebook = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocol_notebook, "__esModule", { value: true });
	protocol_notebook.DidCloseNotebookDocumentNotification = protocol_notebook.DidSaveNotebookDocumentNotification = protocol_notebook.DidChangeNotebookDocumentNotification = protocol_notebook.NotebookCellArrayChange = protocol_notebook.DidOpenNotebookDocumentNotification = protocol_notebook.NotebookDocumentSyncRegistrationType = protocol_notebook.NotebookDocument = protocol_notebook.NotebookCell = protocol_notebook.ExecutionSummary = protocol_notebook.NotebookCellKind = void 0;
	const vscode_languageserver_types_1 = requireMain$2();
	const Is = requireIs();
	const messages_1 = requireMessages();
	/**
	 * A notebook cell kind.
	 *
	 * @since 3.17.0
	 */
	var NotebookCellKind;
	(function (NotebookCellKind) {
	    /**
	     * A markup-cell is formatted source that is used for display.
	     */
	    NotebookCellKind.Markup = 1;
	    /**
	     * A code-cell is source code.
	     */
	    NotebookCellKind.Code = 2;
	    function is(value) {
	        return value === 1 || value === 2;
	    }
	    NotebookCellKind.is = is;
	})(NotebookCellKind || (protocol_notebook.NotebookCellKind = NotebookCellKind = {}));
	var ExecutionSummary;
	(function (ExecutionSummary) {
	    function create(executionOrder, success) {
	        const result = { executionOrder };
	        if (success === true || success === false) {
	            result.success = success;
	        }
	        return result;
	    }
	    ExecutionSummary.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === undefined || Is.boolean(candidate.success));
	    }
	    ExecutionSummary.is = is;
	    function equals(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === null || one === undefined || other === null || other === undefined) {
	            return false;
	        }
	        return one.executionOrder === other.executionOrder && one.success === other.success;
	    }
	    ExecutionSummary.equals = equals;
	})(ExecutionSummary || (protocol_notebook.ExecutionSummary = ExecutionSummary = {}));
	var NotebookCell;
	(function (NotebookCell) {
	    function create(kind, document) {
	        return { kind, document };
	    }
	    NotebookCell.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) &&
	            (candidate.metadata === undefined || Is.objectLiteral(candidate.metadata));
	    }
	    NotebookCell.is = is;
	    function diff(one, two) {
	        const result = new Set();
	        if (one.document !== two.document) {
	            result.add('document');
	        }
	        if (one.kind !== two.kind) {
	            result.add('kind');
	        }
	        if (one.executionSummary !== two.executionSummary) {
	            result.add('executionSummary');
	        }
	        if ((one.metadata !== undefined || two.metadata !== undefined) && !equalsMetadata(one.metadata, two.metadata)) {
	            result.add('metadata');
	        }
	        if ((one.executionSummary !== undefined || two.executionSummary !== undefined) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
	            result.add('executionSummary');
	        }
	        return result;
	    }
	    NotebookCell.diff = diff;
	    function equalsMetadata(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === null || one === undefined || other === null || other === undefined) {
	            return false;
	        }
	        if (typeof one !== typeof other) {
	            return false;
	        }
	        if (typeof one !== 'object') {
	            return false;
	        }
	        const oneArray = Array.isArray(one);
	        const otherArray = Array.isArray(other);
	        if (oneArray !== otherArray) {
	            return false;
	        }
	        if (oneArray && otherArray) {
	            if (one.length !== other.length) {
	                return false;
	            }
	            for (let i = 0; i < one.length; i++) {
	                if (!equalsMetadata(one[i], other[i])) {
	                    return false;
	                }
	            }
	        }
	        if (Is.objectLiteral(one) && Is.objectLiteral(other)) {
	            const oneKeys = Object.keys(one);
	            const otherKeys = Object.keys(other);
	            if (oneKeys.length !== otherKeys.length) {
	                return false;
	            }
	            oneKeys.sort();
	            otherKeys.sort();
	            if (!equalsMetadata(oneKeys, otherKeys)) {
	                return false;
	            }
	            for (let i = 0; i < oneKeys.length; i++) {
	                const prop = oneKeys[i];
	                if (!equalsMetadata(one[prop], other[prop])) {
	                    return false;
	                }
	            }
	        }
	        return true;
	    }
	})(NotebookCell || (protocol_notebook.NotebookCell = NotebookCell = {}));
	var NotebookDocument;
	(function (NotebookDocument) {
	    function create(uri, notebookType, version, cells) {
	        return { uri, notebookType, version, cells };
	    }
	    NotebookDocument.create = create;
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && Is.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is.typedArray(candidate.cells, NotebookCell.is);
	    }
	    NotebookDocument.is = is;
	})(NotebookDocument || (protocol_notebook.NotebookDocument = NotebookDocument = {}));
	var NotebookDocumentSyncRegistrationType;
	(function (NotebookDocumentSyncRegistrationType) {
	    NotebookDocumentSyncRegistrationType.method = 'notebookDocument/sync';
	    NotebookDocumentSyncRegistrationType.messageDirection = messages_1.MessageDirection.clientToServer;
	    NotebookDocumentSyncRegistrationType.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType.method);
	})(NotebookDocumentSyncRegistrationType || (protocol_notebook.NotebookDocumentSyncRegistrationType = NotebookDocumentSyncRegistrationType = {}));
	/**
	 * A notification sent when a notebook opens.
	 *
	 * @since 3.17.0
	 */
	var DidOpenNotebookDocumentNotification;
	(function (DidOpenNotebookDocumentNotification) {
	    DidOpenNotebookDocumentNotification.method = 'notebookDocument/didOpen';
	    DidOpenNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidOpenNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification.method);
	    DidOpenNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidOpenNotebookDocumentNotification || (protocol_notebook.DidOpenNotebookDocumentNotification = DidOpenNotebookDocumentNotification = {}));
	var NotebookCellArrayChange;
	(function (NotebookCellArrayChange) {
	    function is(value) {
	        const candidate = value;
	        return Is.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === undefined || Is.typedArray(candidate.cells, NotebookCell.is));
	    }
	    NotebookCellArrayChange.is = is;
	    function create(start, deleteCount, cells) {
	        const result = { start, deleteCount };
	        if (cells !== undefined) {
	            result.cells = cells;
	        }
	        return result;
	    }
	    NotebookCellArrayChange.create = create;
	})(NotebookCellArrayChange || (protocol_notebook.NotebookCellArrayChange = NotebookCellArrayChange = {}));
	var DidChangeNotebookDocumentNotification;
	(function (DidChangeNotebookDocumentNotification) {
	    DidChangeNotebookDocumentNotification.method = 'notebookDocument/didChange';
	    DidChangeNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidChangeNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification.method);
	    DidChangeNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidChangeNotebookDocumentNotification || (protocol_notebook.DidChangeNotebookDocumentNotification = DidChangeNotebookDocumentNotification = {}));
	/**
	 * A notification sent when a notebook document is saved.
	 *
	 * @since 3.17.0
	 */
	var DidSaveNotebookDocumentNotification;
	(function (DidSaveNotebookDocumentNotification) {
	    DidSaveNotebookDocumentNotification.method = 'notebookDocument/didSave';
	    DidSaveNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidSaveNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification.method);
	    DidSaveNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidSaveNotebookDocumentNotification || (protocol_notebook.DidSaveNotebookDocumentNotification = DidSaveNotebookDocumentNotification = {}));
	/**
	 * A notification sent when a notebook closes.
	 *
	 * @since 3.17.0
	 */
	var DidCloseNotebookDocumentNotification;
	(function (DidCloseNotebookDocumentNotification) {
	    DidCloseNotebookDocumentNotification.method = 'notebookDocument/didClose';
	    DidCloseNotebookDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
	    DidCloseNotebookDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification.method);
	    DidCloseNotebookDocumentNotification.registrationMethod = NotebookDocumentSyncRegistrationType.method;
	})(DidCloseNotebookDocumentNotification || (protocol_notebook.DidCloseNotebookDocumentNotification = DidCloseNotebookDocumentNotification = {}));
	return protocol_notebook;
}

var protocol_inlineCompletion = {};

var hasRequiredProtocol_inlineCompletion;

function requireProtocol_inlineCompletion () {
	if (hasRequiredProtocol_inlineCompletion) return protocol_inlineCompletion;
	hasRequiredProtocol_inlineCompletion = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(protocol_inlineCompletion, "__esModule", { value: true });
	protocol_inlineCompletion.InlineCompletionRequest = void 0;
	const messages_1 = requireMessages();
	/**
	 * A request to provide inline completions in a document. The request's parameter is of
	 * type {@link InlineCompletionParams}, the response is of type
	 * {@link InlineCompletion InlineCompletion[]} or a Thenable that resolves to such.
	 *
	 * @since 3.18.0
	 * @proposed
	 */
	var InlineCompletionRequest;
	(function (InlineCompletionRequest) {
	    InlineCompletionRequest.method = 'textDocument/inlineCompletion';
	    InlineCompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
	    InlineCompletionRequest.type = new messages_1.ProtocolRequestType(InlineCompletionRequest.method);
	})(InlineCompletionRequest || (protocol_inlineCompletion.InlineCompletionRequest = InlineCompletionRequest = {}));
	return protocol_inlineCompletion;
}

var hasRequiredProtocol;

function requireProtocol () {
	if (hasRequiredProtocol) return protocol;
	hasRequiredProtocol = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
		exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRefreshRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangesFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = void 0;
		exports.InlineCompletionRequest = exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
		const messages_1 = requireMessages();
		const vscode_languageserver_types_1 = requireMain$2();
		const Is = requireIs();
		const protocol_implementation_1 = requireProtocol_implementation();
		Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function () { return protocol_implementation_1.ImplementationRequest; } });
		const protocol_typeDefinition_1 = requireProtocol_typeDefinition();
		Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function () { return protocol_typeDefinition_1.TypeDefinitionRequest; } });
		const protocol_workspaceFolder_1 = requireProtocol_workspaceFolder();
		Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function () { return protocol_workspaceFolder_1.WorkspaceFoldersRequest; } });
		Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function () { return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification; } });
		const protocol_configuration_1 = requireProtocol_configuration();
		Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function () { return protocol_configuration_1.ConfigurationRequest; } });
		const protocol_colorProvider_1 = requireProtocol_colorProvider();
		Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function () { return protocol_colorProvider_1.DocumentColorRequest; } });
		Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function () { return protocol_colorProvider_1.ColorPresentationRequest; } });
		const protocol_foldingRange_1 = requireProtocol_foldingRange();
		Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function () { return protocol_foldingRange_1.FoldingRangeRequest; } });
		Object.defineProperty(exports, "FoldingRangeRefreshRequest", { enumerable: true, get: function () { return protocol_foldingRange_1.FoldingRangeRefreshRequest; } });
		const protocol_declaration_1 = requireProtocol_declaration();
		Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function () { return protocol_declaration_1.DeclarationRequest; } });
		const protocol_selectionRange_1 = requireProtocol_selectionRange();
		Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function () { return protocol_selectionRange_1.SelectionRangeRequest; } });
		const protocol_progress_1 = requireProtocol_progress();
		Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgress; } });
		Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCreateRequest; } });
		Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function () { return protocol_progress_1.WorkDoneProgressCancelNotification; } });
		const protocol_callHierarchy_1 = requireProtocol_callHierarchy();
		Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest; } });
		Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest; } });
		Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function () { return protocol_callHierarchy_1.CallHierarchyPrepareRequest; } });
		const protocol_semanticTokens_1 = requireProtocol_semanticTokens();
		Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function () { return protocol_semanticTokens_1.TokenFormat; } });
		Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRequest; } });
		Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensDeltaRequest; } });
		Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRangeRequest; } });
		Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRefreshRequest; } });
		Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function () { return protocol_semanticTokens_1.SemanticTokensRegistrationType; } });
		const protocol_showDocument_1 = requireProtocol_showDocument();
		Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function () { return protocol_showDocument_1.ShowDocumentRequest; } });
		const protocol_linkedEditingRange_1 = requireProtocol_linkedEditingRange();
		Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function () { return protocol_linkedEditingRange_1.LinkedEditingRangeRequest; } });
		const protocol_fileOperations_1 = requireProtocol_fileOperations();
		Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function () { return protocol_fileOperations_1.FileOperationPatternKind; } });
		Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidCreateFilesNotification; } });
		Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillCreateFilesRequest; } });
		Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidRenameFilesNotification; } });
		Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillRenameFilesRequest; } });
		Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function () { return protocol_fileOperations_1.DidDeleteFilesNotification; } });
		Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function () { return protocol_fileOperations_1.WillDeleteFilesRequest; } });
		const protocol_moniker_1 = requireProtocol_moniker();
		Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function () { return protocol_moniker_1.UniquenessLevel; } });
		Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function () { return protocol_moniker_1.MonikerKind; } });
		Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function () { return protocol_moniker_1.MonikerRequest; } });
		const protocol_typeHierarchy_1 = requireProtocol_typeHierarchy();
		Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest; } });
		Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest; } });
		Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function () { return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest; } });
		const protocol_inlineValue_1 = requireProtocol_inlineValue();
		Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRequest; } });
		Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function () { return protocol_inlineValue_1.InlineValueRefreshRequest; } });
		const protocol_inlayHint_1 = requireProtocol_inlayHint();
		Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRequest; } });
		Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintResolveRequest; } });
		Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function () { return protocol_inlayHint_1.InlayHintRefreshRequest; } });
		const protocol_diagnostic_1 = requireProtocol_diagnostic();
		Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticServerCancellationData; } });
		Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticReportKind; } });
		Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.DocumentDiagnosticRequest; } });
		Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.WorkspaceDiagnosticRequest; } });
		Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function () { return protocol_diagnostic_1.DiagnosticRefreshRequest; } });
		const protocol_notebook_1 = requireProtocol_notebook();
		Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCellKind; } });
		Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function () { return protocol_notebook_1.ExecutionSummary; } });
		Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCell; } });
		Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function () { return protocol_notebook_1.NotebookDocument; } });
		Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function () { return protocol_notebook_1.NotebookDocumentSyncRegistrationType; } });
		Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidOpenNotebookDocumentNotification; } });
		Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function () { return protocol_notebook_1.NotebookCellArrayChange; } });
		Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidChangeNotebookDocumentNotification; } });
		Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidSaveNotebookDocumentNotification; } });
		Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function () { return protocol_notebook_1.DidCloseNotebookDocumentNotification; } });
		const protocol_inlineCompletion_1 = requireProtocol_inlineCompletion();
		Object.defineProperty(exports, "InlineCompletionRequest", { enumerable: true, get: function () { return protocol_inlineCompletion_1.InlineCompletionRequest; } });
		/**
		 * The TextDocumentFilter namespace provides helper functions to work with
		 * {@link TextDocumentFilter} literals.
		 *
		 * @since 3.17.0
		 */
		var TextDocumentFilter;
		(function (TextDocumentFilter) {
		    function is(value) {
		        const candidate = value;
		        return Is.string(candidate) || (Is.string(candidate.language) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
		    }
		    TextDocumentFilter.is = is;
		})(TextDocumentFilter || (exports.TextDocumentFilter = TextDocumentFilter = {}));
		/**
		 * The NotebookDocumentFilter namespace provides helper functions to work with
		 * {@link NotebookDocumentFilter} literals.
		 *
		 * @since 3.17.0
		 */
		var NotebookDocumentFilter;
		(function (NotebookDocumentFilter) {
		    function is(value) {
		        const candidate = value;
		        return Is.objectLiteral(candidate) && (Is.string(candidate.notebookType) || Is.string(candidate.scheme) || Is.string(candidate.pattern));
		    }
		    NotebookDocumentFilter.is = is;
		})(NotebookDocumentFilter || (exports.NotebookDocumentFilter = NotebookDocumentFilter = {}));
		/**
		 * The NotebookCellTextDocumentFilter namespace provides helper functions to work with
		 * {@link NotebookCellTextDocumentFilter} literals.
		 *
		 * @since 3.17.0
		 */
		var NotebookCellTextDocumentFilter;
		(function (NotebookCellTextDocumentFilter) {
		    function is(value) {
		        const candidate = value;
		        return Is.objectLiteral(candidate)
		            && (Is.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook))
		            && (candidate.language === undefined || Is.string(candidate.language));
		    }
		    NotebookCellTextDocumentFilter.is = is;
		})(NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = NotebookCellTextDocumentFilter = {}));
		/**
		 * The DocumentSelector namespace provides helper functions to work with
		 * {@link DocumentSelector}s.
		 */
		var DocumentSelector;
		(function (DocumentSelector) {
		    function is(value) {
		        if (!Array.isArray(value)) {
		            return false;
		        }
		        for (let elem of value) {
		            if (!Is.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
		                return false;
		            }
		        }
		        return true;
		    }
		    DocumentSelector.is = is;
		})(DocumentSelector || (exports.DocumentSelector = DocumentSelector = {}));
		/**
		 * The `client/registerCapability` request is sent from the server to the client to register a new capability
		 * handler on the client side.
		 */
		var RegistrationRequest;
		(function (RegistrationRequest) {
		    RegistrationRequest.method = 'client/registerCapability';
		    RegistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		    RegistrationRequest.type = new messages_1.ProtocolRequestType(RegistrationRequest.method);
		})(RegistrationRequest || (exports.RegistrationRequest = RegistrationRequest = {}));
		/**
		 * The `client/unregisterCapability` request is sent from the server to the client to unregister a previously registered capability
		 * handler on the client side.
		 */
		var UnregistrationRequest;
		(function (UnregistrationRequest) {
		    UnregistrationRequest.method = 'client/unregisterCapability';
		    UnregistrationRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		    UnregistrationRequest.type = new messages_1.ProtocolRequestType(UnregistrationRequest.method);
		})(UnregistrationRequest || (exports.UnregistrationRequest = UnregistrationRequest = {}));
		var ResourceOperationKind;
		(function (ResourceOperationKind) {
		    /**
		     * Supports creating new files and folders.
		     */
		    ResourceOperationKind.Create = 'create';
		    /**
		     * Supports renaming existing files and folders.
		     */
		    ResourceOperationKind.Rename = 'rename';
		    /**
		     * Supports deleting existing files and folders.
		     */
		    ResourceOperationKind.Delete = 'delete';
		})(ResourceOperationKind || (exports.ResourceOperationKind = ResourceOperationKind = {}));
		var FailureHandlingKind;
		(function (FailureHandlingKind) {
		    /**
		     * Applying the workspace change is simply aborted if one of the changes provided
		     * fails. All operations executed before the failing operation stay executed.
		     */
		    FailureHandlingKind.Abort = 'abort';
		    /**
		     * All operations are executed transactional. That means they either all
		     * succeed or no changes at all are applied to the workspace.
		     */
		    FailureHandlingKind.Transactional = 'transactional';
		    /**
		     * If the workspace edit contains only textual file changes they are executed transactional.
		     * If resource changes (create, rename or delete file) are part of the change the failure
		     * handling strategy is abort.
		     */
		    FailureHandlingKind.TextOnlyTransactional = 'textOnlyTransactional';
		    /**
		     * The client tries to undo the operations already executed. But there is no
		     * guarantee that this is succeeding.
		     */
		    FailureHandlingKind.Undo = 'undo';
		})(FailureHandlingKind || (exports.FailureHandlingKind = FailureHandlingKind = {}));
		/**
		 * A set of predefined position encoding kinds.
		 *
		 * @since 3.17.0
		 */
		var PositionEncodingKind;
		(function (PositionEncodingKind) {
		    /**
		     * Character offsets count UTF-8 code units (e.g. bytes).
		     */
		    PositionEncodingKind.UTF8 = 'utf-8';
		    /**
		     * Character offsets count UTF-16 code units.
		     *
		     * This is the default and must always be supported
		     * by servers
		     */
		    PositionEncodingKind.UTF16 = 'utf-16';
		    /**
		     * Character offsets count UTF-32 code units.
		     *
		     * Implementation note: these are the same as Unicode codepoints,
		     * so this `PositionEncodingKind` may also be used for an
		     * encoding-agnostic representation of character offsets.
		     */
		    PositionEncodingKind.UTF32 = 'utf-32';
		})(PositionEncodingKind || (exports.PositionEncodingKind = PositionEncodingKind = {}));
		/**
		 * The StaticRegistrationOptions namespace provides helper functions to work with
		 * {@link StaticRegistrationOptions} literals.
		 */
		var StaticRegistrationOptions;
		(function (StaticRegistrationOptions) {
		    function hasId(value) {
		        const candidate = value;
		        return candidate && Is.string(candidate.id) && candidate.id.length > 0;
		    }
		    StaticRegistrationOptions.hasId = hasId;
		})(StaticRegistrationOptions || (exports.StaticRegistrationOptions = StaticRegistrationOptions = {}));
		/**
		 * The TextDocumentRegistrationOptions namespace provides helper functions to work with
		 * {@link TextDocumentRegistrationOptions} literals.
		 */
		var TextDocumentRegistrationOptions;
		(function (TextDocumentRegistrationOptions) {
		    function is(value) {
		        const candidate = value;
		        return candidate && (candidate.documentSelector === null || DocumentSelector.is(candidate.documentSelector));
		    }
		    TextDocumentRegistrationOptions.is = is;
		})(TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = TextDocumentRegistrationOptions = {}));
		/**
		 * The WorkDoneProgressOptions namespace provides helper functions to work with
		 * {@link WorkDoneProgressOptions} literals.
		 */
		var WorkDoneProgressOptions;
		(function (WorkDoneProgressOptions) {
		    function is(value) {
		        const candidate = value;
		        return Is.objectLiteral(candidate) && (candidate.workDoneProgress === undefined || Is.boolean(candidate.workDoneProgress));
		    }
		    WorkDoneProgressOptions.is = is;
		    function hasWorkDoneProgress(value) {
		        const candidate = value;
		        return candidate && Is.boolean(candidate.workDoneProgress);
		    }
		    WorkDoneProgressOptions.hasWorkDoneProgress = hasWorkDoneProgress;
		})(WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = WorkDoneProgressOptions = {}));
		/**
		 * The initialize request is sent from the client to the server.
		 * It is sent once as the request after starting up the server.
		 * The requests parameter is of type {@link InitializeParams}
		 * the response if of type {@link InitializeResult} of a Thenable that
		 * resolves to such.
		 */
		var InitializeRequest;
		(function (InitializeRequest) {
		    InitializeRequest.method = 'initialize';
		    InitializeRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    InitializeRequest.type = new messages_1.ProtocolRequestType(InitializeRequest.method);
		})(InitializeRequest || (exports.InitializeRequest = InitializeRequest = {}));
		/**
		 * Known error codes for an `InitializeErrorCodes`;
		 */
		var InitializeErrorCodes;
		(function (InitializeErrorCodes) {
		    /**
		     * If the protocol version provided by the client can't be handled by the server.
		     *
		     * @deprecated This initialize error got replaced by client capabilities. There is
		     * no version handshake in version 3.0x
		     */
		    InitializeErrorCodes.unknownProtocolVersion = 1;
		})(InitializeErrorCodes || (exports.InitializeErrorCodes = InitializeErrorCodes = {}));
		/**
		 * The initialized notification is sent from the client to the
		 * server after the client is fully initialized and the server
		 * is allowed to send requests from the server to the client.
		 */
		var InitializedNotification;
		(function (InitializedNotification) {
		    InitializedNotification.method = 'initialized';
		    InitializedNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    InitializedNotification.type = new messages_1.ProtocolNotificationType(InitializedNotification.method);
		})(InitializedNotification || (exports.InitializedNotification = InitializedNotification = {}));
		//---- Shutdown Method ----
		/**
		 * A shutdown request is sent from the client to the server.
		 * It is sent once when the client decides to shutdown the
		 * server. The only notification that is sent after a shutdown request
		 * is the exit event.
		 */
		var ShutdownRequest;
		(function (ShutdownRequest) {
		    ShutdownRequest.method = 'shutdown';
		    ShutdownRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    ShutdownRequest.type = new messages_1.ProtocolRequestType0(ShutdownRequest.method);
		})(ShutdownRequest || (exports.ShutdownRequest = ShutdownRequest = {}));
		//---- Exit Notification ----
		/**
		 * The exit event is sent from the client to the server to
		 * ask the server to exit its process.
		 */
		var ExitNotification;
		(function (ExitNotification) {
		    ExitNotification.method = 'exit';
		    ExitNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    ExitNotification.type = new messages_1.ProtocolNotificationType0(ExitNotification.method);
		})(ExitNotification || (exports.ExitNotification = ExitNotification = {}));
		/**
		 * The configuration change notification is sent from the client to the server
		 * when the client's configuration has changed. The notification contains
		 * the changed configuration as defined by the language client.
		 */
		var DidChangeConfigurationNotification;
		(function (DidChangeConfigurationNotification) {
		    DidChangeConfigurationNotification.method = 'workspace/didChangeConfiguration';
		    DidChangeConfigurationNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidChangeConfigurationNotification.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification.method);
		})(DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = DidChangeConfigurationNotification = {}));
		//---- Message show and log notifications ----
		/**
		 * The message type
		 */
		var MessageType;
		(function (MessageType) {
		    /**
		     * An error message.
		     */
		    MessageType.Error = 1;
		    /**
		     * A warning message.
		     */
		    MessageType.Warning = 2;
		    /**
		     * An information message.
		     */
		    MessageType.Info = 3;
		    /**
		     * A log message.
		     */
		    MessageType.Log = 4;
		    /**
		     * A debug message.
		     *
		     * @since 3.18.0
		     */
		    MessageType.Debug = 5;
		})(MessageType || (exports.MessageType = MessageType = {}));
		/**
		 * The show message notification is sent from a server to a client to ask
		 * the client to display a particular message in the user interface.
		 */
		var ShowMessageNotification;
		(function (ShowMessageNotification) {
		    ShowMessageNotification.method = 'window/showMessage';
		    ShowMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		    ShowMessageNotification.type = new messages_1.ProtocolNotificationType(ShowMessageNotification.method);
		})(ShowMessageNotification || (exports.ShowMessageNotification = ShowMessageNotification = {}));
		/**
		 * The show message request is sent from the server to the client to show a message
		 * and a set of options actions to the user.
		 */
		var ShowMessageRequest;
		(function (ShowMessageRequest) {
		    ShowMessageRequest.method = 'window/showMessageRequest';
		    ShowMessageRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		    ShowMessageRequest.type = new messages_1.ProtocolRequestType(ShowMessageRequest.method);
		})(ShowMessageRequest || (exports.ShowMessageRequest = ShowMessageRequest = {}));
		/**
		 * The log message notification is sent from the server to the client to ask
		 * the client to log a particular message.
		 */
		var LogMessageNotification;
		(function (LogMessageNotification) {
		    LogMessageNotification.method = 'window/logMessage';
		    LogMessageNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		    LogMessageNotification.type = new messages_1.ProtocolNotificationType(LogMessageNotification.method);
		})(LogMessageNotification || (exports.LogMessageNotification = LogMessageNotification = {}));
		//---- Telemetry notification
		/**
		 * The telemetry event notification is sent from the server to the client to ask
		 * the client to log telemetry data.
		 */
		var TelemetryEventNotification;
		(function (TelemetryEventNotification) {
		    TelemetryEventNotification.method = 'telemetry/event';
		    TelemetryEventNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		    TelemetryEventNotification.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification.method);
		})(TelemetryEventNotification || (exports.TelemetryEventNotification = TelemetryEventNotification = {}));
		/**
		 * Defines how the host (editor) should sync
		 * document changes to the language server.
		 */
		var TextDocumentSyncKind;
		(function (TextDocumentSyncKind) {
		    /**
		     * Documents should not be synced at all.
		     */
		    TextDocumentSyncKind.None = 0;
		    /**
		     * Documents are synced by always sending the full content
		     * of the document.
		     */
		    TextDocumentSyncKind.Full = 1;
		    /**
		     * Documents are synced by sending the full content on open.
		     * After that only incremental updates to the document are
		     * send.
		     */
		    TextDocumentSyncKind.Incremental = 2;
		})(TextDocumentSyncKind || (exports.TextDocumentSyncKind = TextDocumentSyncKind = {}));
		/**
		 * The document open notification is sent from the client to the server to signal
		 * newly opened text documents. The document's truth is now managed by the client
		 * and the server must not try to read the document's truth using the document's
		 * uri. Open in this sense means it is managed by the client. It doesn't necessarily
		 * mean that its content is presented in an editor. An open notification must not
		 * be sent more than once without a corresponding close notification send before.
		 * This means open and close notification must be balanced and the max open count
		 * is one.
		 */
		var DidOpenTextDocumentNotification;
		(function (DidOpenTextDocumentNotification) {
		    DidOpenTextDocumentNotification.method = 'textDocument/didOpen';
		    DidOpenTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidOpenTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification.method);
		})(DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = DidOpenTextDocumentNotification = {}));
		var TextDocumentContentChangeEvent;
		(function (TextDocumentContentChangeEvent) {
		    /**
		     * Checks whether the information describes a delta event.
		     */
		    function isIncremental(event) {
		        let candidate = event;
		        return candidate !== undefined && candidate !== null &&
		            typeof candidate.text === 'string' && candidate.range !== undefined &&
		            (candidate.rangeLength === undefined || typeof candidate.rangeLength === 'number');
		    }
		    TextDocumentContentChangeEvent.isIncremental = isIncremental;
		    /**
		     * Checks whether the information describes a full replacement event.
		     */
		    function isFull(event) {
		        let candidate = event;
		        return candidate !== undefined && candidate !== null &&
		            typeof candidate.text === 'string' && candidate.range === undefined && candidate.rangeLength === undefined;
		    }
		    TextDocumentContentChangeEvent.isFull = isFull;
		})(TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = TextDocumentContentChangeEvent = {}));
		/**
		 * The document change notification is sent from the client to the server to signal
		 * changes to a text document.
		 */
		var DidChangeTextDocumentNotification;
		(function (DidChangeTextDocumentNotification) {
		    DidChangeTextDocumentNotification.method = 'textDocument/didChange';
		    DidChangeTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidChangeTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification.method);
		})(DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = DidChangeTextDocumentNotification = {}));
		/**
		 * The document close notification is sent from the client to the server when
		 * the document got closed in the client. The document's truth now exists where
		 * the document's uri points to (e.g. if the document's uri is a file uri the
		 * truth now exists on disk). As with the open notification the close notification
		 * is about managing the document's content. Receiving a close notification
		 * doesn't mean that the document was open in an editor before. A close
		 * notification requires a previous open notification to be sent.
		 */
		var DidCloseTextDocumentNotification;
		(function (DidCloseTextDocumentNotification) {
		    DidCloseTextDocumentNotification.method = 'textDocument/didClose';
		    DidCloseTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidCloseTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification.method);
		})(DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = DidCloseTextDocumentNotification = {}));
		/**
		 * The document save notification is sent from the client to the server when
		 * the document got saved in the client.
		 */
		var DidSaveTextDocumentNotification;
		(function (DidSaveTextDocumentNotification) {
		    DidSaveTextDocumentNotification.method = 'textDocument/didSave';
		    DidSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification.method);
		})(DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = DidSaveTextDocumentNotification = {}));
		/**
		 * Represents reasons why a text document is saved.
		 */
		var TextDocumentSaveReason;
		(function (TextDocumentSaveReason) {
		    /**
		     * Manually triggered, e.g. by the user pressing save, by starting debugging,
		     * or by an API call.
		     */
		    TextDocumentSaveReason.Manual = 1;
		    /**
		     * Automatic after a delay.
		     */
		    TextDocumentSaveReason.AfterDelay = 2;
		    /**
		     * When the editor lost focus.
		     */
		    TextDocumentSaveReason.FocusOut = 3;
		})(TextDocumentSaveReason || (exports.TextDocumentSaveReason = TextDocumentSaveReason = {}));
		/**
		 * A document will save notification is sent from the client to the server before
		 * the document is actually saved.
		 */
		var WillSaveTextDocumentNotification;
		(function (WillSaveTextDocumentNotification) {
		    WillSaveTextDocumentNotification.method = 'textDocument/willSave';
		    WillSaveTextDocumentNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    WillSaveTextDocumentNotification.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification.method);
		})(WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = WillSaveTextDocumentNotification = {}));
		/**
		 * A document will save request is sent from the client to the server before
		 * the document is actually saved. The request can return an array of TextEdits
		 * which will be applied to the text document before it is saved. Please note that
		 * clients might drop results if computing the text edits took too long or if a
		 * server constantly fails on this request. This is done to keep the save fast and
		 * reliable.
		 */
		var WillSaveTextDocumentWaitUntilRequest;
		(function (WillSaveTextDocumentWaitUntilRequest) {
		    WillSaveTextDocumentWaitUntilRequest.method = 'textDocument/willSaveWaitUntil';
		    WillSaveTextDocumentWaitUntilRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    WillSaveTextDocumentWaitUntilRequest.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest.method);
		})(WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = WillSaveTextDocumentWaitUntilRequest = {}));
		/**
		 * The watched files notification is sent from the client to the server when
		 * the client detects changes to file watched by the language client.
		 */
		var DidChangeWatchedFilesNotification;
		(function (DidChangeWatchedFilesNotification) {
		    DidChangeWatchedFilesNotification.method = 'workspace/didChangeWatchedFiles';
		    DidChangeWatchedFilesNotification.messageDirection = messages_1.MessageDirection.clientToServer;
		    DidChangeWatchedFilesNotification.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification.method);
		})(DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = DidChangeWatchedFilesNotification = {}));
		/**
		 * The file event type
		 */
		var FileChangeType;
		(function (FileChangeType) {
		    /**
		     * The file got created.
		     */
		    FileChangeType.Created = 1;
		    /**
		     * The file got changed.
		     */
		    FileChangeType.Changed = 2;
		    /**
		     * The file got deleted.
		     */
		    FileChangeType.Deleted = 3;
		})(FileChangeType || (exports.FileChangeType = FileChangeType = {}));
		var RelativePattern;
		(function (RelativePattern) {
		    function is(value) {
		        const candidate = value;
		        return Is.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is.string(candidate.pattern);
		    }
		    RelativePattern.is = is;
		})(RelativePattern || (exports.RelativePattern = RelativePattern = {}));
		var WatchKind;
		(function (WatchKind) {
		    /**
		     * Interested in create events.
		     */
		    WatchKind.Create = 1;
		    /**
		     * Interested in change events
		     */
		    WatchKind.Change = 2;
		    /**
		     * Interested in delete events
		     */
		    WatchKind.Delete = 4;
		})(WatchKind || (exports.WatchKind = WatchKind = {}));
		/**
		 * Diagnostics notification are sent from the server to the client to signal
		 * results of validation runs.
		 */
		var PublishDiagnosticsNotification;
		(function (PublishDiagnosticsNotification) {
		    PublishDiagnosticsNotification.method = 'textDocument/publishDiagnostics';
		    PublishDiagnosticsNotification.messageDirection = messages_1.MessageDirection.serverToClient;
		    PublishDiagnosticsNotification.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification.method);
		})(PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = PublishDiagnosticsNotification = {}));
		/**
		 * How a completion was triggered
		 */
		var CompletionTriggerKind;
		(function (CompletionTriggerKind) {
		    /**
		     * Completion was triggered by typing an identifier (24x7 code
		     * complete), manual invocation (e.g Ctrl+Space) or via API.
		     */
		    CompletionTriggerKind.Invoked = 1;
		    /**
		     * Completion was triggered by a trigger character specified by
		     * the `triggerCharacters` properties of the `CompletionRegistrationOptions`.
		     */
		    CompletionTriggerKind.TriggerCharacter = 2;
		    /**
		     * Completion was re-triggered as current completion list is incomplete
		     */
		    CompletionTriggerKind.TriggerForIncompleteCompletions = 3;
		})(CompletionTriggerKind || (exports.CompletionTriggerKind = CompletionTriggerKind = {}));
		/**
		 * Request to request completion at a given text document position. The request's
		 * parameter is of type {@link TextDocumentPosition} the response
		 * is of type {@link CompletionItem CompletionItem[]} or {@link CompletionList}
		 * or a Thenable that resolves to such.
		 *
		 * The request can delay the computation of the {@link CompletionItem.detail `detail`}
		 * and {@link CompletionItem.documentation `documentation`} properties to the `completionItem/resolve`
		 * request. However, properties that are needed for the initial sorting and filtering, like `sortText`,
		 * `filterText`, `insertText`, and `textEdit`, must not be changed during resolve.
		 */
		var CompletionRequest;
		(function (CompletionRequest) {
		    CompletionRequest.method = 'textDocument/completion';
		    CompletionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CompletionRequest.type = new messages_1.ProtocolRequestType(CompletionRequest.method);
		})(CompletionRequest || (exports.CompletionRequest = CompletionRequest = {}));
		/**
		 * Request to resolve additional information for a given completion item.The request's
		 * parameter is of type {@link CompletionItem} the response
		 * is of type {@link CompletionItem} or a Thenable that resolves to such.
		 */
		var CompletionResolveRequest;
		(function (CompletionResolveRequest) {
		    CompletionResolveRequest.method = 'completionItem/resolve';
		    CompletionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CompletionResolveRequest.type = new messages_1.ProtocolRequestType(CompletionResolveRequest.method);
		})(CompletionResolveRequest || (exports.CompletionResolveRequest = CompletionResolveRequest = {}));
		/**
		 * Request to request hover information at a given text document position. The request's
		 * parameter is of type {@link TextDocumentPosition} the response is of
		 * type {@link Hover} or a Thenable that resolves to such.
		 */
		var HoverRequest;
		(function (HoverRequest) {
		    HoverRequest.method = 'textDocument/hover';
		    HoverRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    HoverRequest.type = new messages_1.ProtocolRequestType(HoverRequest.method);
		})(HoverRequest || (exports.HoverRequest = HoverRequest = {}));
		/**
		 * How a signature help was triggered.
		 *
		 * @since 3.15.0
		 */
		var SignatureHelpTriggerKind;
		(function (SignatureHelpTriggerKind) {
		    /**
		     * Signature help was invoked manually by the user or by a command.
		     */
		    SignatureHelpTriggerKind.Invoked = 1;
		    /**
		     * Signature help was triggered by a trigger character.
		     */
		    SignatureHelpTriggerKind.TriggerCharacter = 2;
		    /**
		     * Signature help was triggered by the cursor moving or by the document content changing.
		     */
		    SignatureHelpTriggerKind.ContentChange = 3;
		})(SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = SignatureHelpTriggerKind = {}));
		var SignatureHelpRequest;
		(function (SignatureHelpRequest) {
		    SignatureHelpRequest.method = 'textDocument/signatureHelp';
		    SignatureHelpRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    SignatureHelpRequest.type = new messages_1.ProtocolRequestType(SignatureHelpRequest.method);
		})(SignatureHelpRequest || (exports.SignatureHelpRequest = SignatureHelpRequest = {}));
		/**
		 * A request to resolve the definition location of a symbol at a given text
		 * document position. The request's parameter is of type {@link TextDocumentPosition}
		 * the response is of either type {@link Definition} or a typed array of
		 * {@link DefinitionLink} or a Thenable that resolves to such.
		 */
		var DefinitionRequest;
		(function (DefinitionRequest) {
		    DefinitionRequest.method = 'textDocument/definition';
		    DefinitionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DefinitionRequest.type = new messages_1.ProtocolRequestType(DefinitionRequest.method);
		})(DefinitionRequest || (exports.DefinitionRequest = DefinitionRequest = {}));
		/**
		 * A request to resolve project-wide references for the symbol denoted
		 * by the given text document position. The request's parameter is of
		 * type {@link ReferenceParams} the response is of type
		 * {@link Location Location[]} or a Thenable that resolves to such.
		 */
		var ReferencesRequest;
		(function (ReferencesRequest) {
		    ReferencesRequest.method = 'textDocument/references';
		    ReferencesRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    ReferencesRequest.type = new messages_1.ProtocolRequestType(ReferencesRequest.method);
		})(ReferencesRequest || (exports.ReferencesRequest = ReferencesRequest = {}));
		/**
		 * Request to resolve a {@link DocumentHighlight} for a given
		 * text document position. The request's parameter is of type {@link TextDocumentPosition}
		 * the request response is an array of type {@link DocumentHighlight}
		 * or a Thenable that resolves to such.
		 */
		var DocumentHighlightRequest;
		(function (DocumentHighlightRequest) {
		    DocumentHighlightRequest.method = 'textDocument/documentHighlight';
		    DocumentHighlightRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentHighlightRequest.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest.method);
		})(DocumentHighlightRequest || (exports.DocumentHighlightRequest = DocumentHighlightRequest = {}));
		/**
		 * A request to list all symbols found in a given text document. The request's
		 * parameter is of type {@link TextDocumentIdentifier} the
		 * response is of type {@link SymbolInformation SymbolInformation[]} or a Thenable
		 * that resolves to such.
		 */
		var DocumentSymbolRequest;
		(function (DocumentSymbolRequest) {
		    DocumentSymbolRequest.method = 'textDocument/documentSymbol';
		    DocumentSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentSymbolRequest.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest.method);
		})(DocumentSymbolRequest || (exports.DocumentSymbolRequest = DocumentSymbolRequest = {}));
		/**
		 * A request to provide commands for the given text document and range.
		 */
		var CodeActionRequest;
		(function (CodeActionRequest) {
		    CodeActionRequest.method = 'textDocument/codeAction';
		    CodeActionRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CodeActionRequest.type = new messages_1.ProtocolRequestType(CodeActionRequest.method);
		})(CodeActionRequest || (exports.CodeActionRequest = CodeActionRequest = {}));
		/**
		 * Request to resolve additional information for a given code action.The request's
		 * parameter is of type {@link CodeAction} the response
		 * is of type {@link CodeAction} or a Thenable that resolves to such.
		 */
		var CodeActionResolveRequest;
		(function (CodeActionResolveRequest) {
		    CodeActionResolveRequest.method = 'codeAction/resolve';
		    CodeActionResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CodeActionResolveRequest.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest.method);
		})(CodeActionResolveRequest || (exports.CodeActionResolveRequest = CodeActionResolveRequest = {}));
		/**
		 * A request to list project-wide symbols matching the query string given
		 * by the {@link WorkspaceSymbolParams}. The response is
		 * of type {@link SymbolInformation SymbolInformation[]} or a Thenable that
		 * resolves to such.
		 *
		 * @since 3.17.0 - support for WorkspaceSymbol in the returned data. Clients
		 *  need to advertise support for WorkspaceSymbols via the client capability
		 *  `workspace.symbol.resolveSupport`.
		 *
		 */
		var WorkspaceSymbolRequest;
		(function (WorkspaceSymbolRequest) {
		    WorkspaceSymbolRequest.method = 'workspace/symbol';
		    WorkspaceSymbolRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    WorkspaceSymbolRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest.method);
		})(WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = WorkspaceSymbolRequest = {}));
		/**
		 * A request to resolve the range inside the workspace
		 * symbol's location.
		 *
		 * @since 3.17.0
		 */
		var WorkspaceSymbolResolveRequest;
		(function (WorkspaceSymbolResolveRequest) {
		    WorkspaceSymbolResolveRequest.method = 'workspaceSymbol/resolve';
		    WorkspaceSymbolResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    WorkspaceSymbolResolveRequest.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest.method);
		})(WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = WorkspaceSymbolResolveRequest = {}));
		/**
		 * A request to provide code lens for the given text document.
		 */
		var CodeLensRequest;
		(function (CodeLensRequest) {
		    CodeLensRequest.method = 'textDocument/codeLens';
		    CodeLensRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CodeLensRequest.type = new messages_1.ProtocolRequestType(CodeLensRequest.method);
		})(CodeLensRequest || (exports.CodeLensRequest = CodeLensRequest = {}));
		/**
		 * A request to resolve a command for a given code lens.
		 */
		var CodeLensResolveRequest;
		(function (CodeLensResolveRequest) {
		    CodeLensResolveRequest.method = 'codeLens/resolve';
		    CodeLensResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    CodeLensResolveRequest.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest.method);
		})(CodeLensResolveRequest || (exports.CodeLensResolveRequest = CodeLensResolveRequest = {}));
		/**
		 * A request to refresh all code actions
		 *
		 * @since 3.16.0
		 */
		var CodeLensRefreshRequest;
		(function (CodeLensRefreshRequest) {
		    CodeLensRefreshRequest.method = `workspace/codeLens/refresh`;
		    CodeLensRefreshRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		    CodeLensRefreshRequest.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest.method);
		})(CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = CodeLensRefreshRequest = {}));
		/**
		 * A request to provide document links
		 */
		var DocumentLinkRequest;
		(function (DocumentLinkRequest) {
		    DocumentLinkRequest.method = 'textDocument/documentLink';
		    DocumentLinkRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentLinkRequest.type = new messages_1.ProtocolRequestType(DocumentLinkRequest.method);
		})(DocumentLinkRequest || (exports.DocumentLinkRequest = DocumentLinkRequest = {}));
		/**
		 * Request to resolve additional information for a given document link. The request's
		 * parameter is of type {@link DocumentLink} the response
		 * is of type {@link DocumentLink} or a Thenable that resolves to such.
		 */
		var DocumentLinkResolveRequest;
		(function (DocumentLinkResolveRequest) {
		    DocumentLinkResolveRequest.method = 'documentLink/resolve';
		    DocumentLinkResolveRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentLinkResolveRequest.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest.method);
		})(DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = DocumentLinkResolveRequest = {}));
		/**
		 * A request to format a whole document.
		 */
		var DocumentFormattingRequest;
		(function (DocumentFormattingRequest) {
		    DocumentFormattingRequest.method = 'textDocument/formatting';
		    DocumentFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest.method);
		})(DocumentFormattingRequest || (exports.DocumentFormattingRequest = DocumentFormattingRequest = {}));
		/**
		 * A request to format a range in a document.
		 */
		var DocumentRangeFormattingRequest;
		(function (DocumentRangeFormattingRequest) {
		    DocumentRangeFormattingRequest.method = 'textDocument/rangeFormatting';
		    DocumentRangeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentRangeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest.method);
		})(DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = DocumentRangeFormattingRequest = {}));
		/**
		 * A request to format ranges in a document.
		 *
		 * @since 3.18.0
		 * @proposed
		 */
		var DocumentRangesFormattingRequest;
		(function (DocumentRangesFormattingRequest) {
		    DocumentRangesFormattingRequest.method = 'textDocument/rangesFormatting';
		    DocumentRangesFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentRangesFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentRangesFormattingRequest.method);
		})(DocumentRangesFormattingRequest || (exports.DocumentRangesFormattingRequest = DocumentRangesFormattingRequest = {}));
		/**
		 * A request to format a document on type.
		 */
		var DocumentOnTypeFormattingRequest;
		(function (DocumentOnTypeFormattingRequest) {
		    DocumentOnTypeFormattingRequest.method = 'textDocument/onTypeFormatting';
		    DocumentOnTypeFormattingRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    DocumentOnTypeFormattingRequest.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest.method);
		})(DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = DocumentOnTypeFormattingRequest = {}));
		//---- Rename ----------------------------------------------
		var PrepareSupportDefaultBehavior;
		(function (PrepareSupportDefaultBehavior) {
		    /**
		     * The client's default behavior is to select the identifier
		     * according the to language's syntax rule.
		     */
		    PrepareSupportDefaultBehavior.Identifier = 1;
		})(PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = PrepareSupportDefaultBehavior = {}));
		/**
		 * A request to rename a symbol.
		 */
		var RenameRequest;
		(function (RenameRequest) {
		    RenameRequest.method = 'textDocument/rename';
		    RenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    RenameRequest.type = new messages_1.ProtocolRequestType(RenameRequest.method);
		})(RenameRequest || (exports.RenameRequest = RenameRequest = {}));
		/**
		 * A request to test and perform the setup necessary for a rename.
		 *
		 * @since 3.16 - support for default behavior
		 */
		var PrepareRenameRequest;
		(function (PrepareRenameRequest) {
		    PrepareRenameRequest.method = 'textDocument/prepareRename';
		    PrepareRenameRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    PrepareRenameRequest.type = new messages_1.ProtocolRequestType(PrepareRenameRequest.method);
		})(PrepareRenameRequest || (exports.PrepareRenameRequest = PrepareRenameRequest = {}));
		/**
		 * A request send from the client to the server to execute a command. The request might return
		 * a workspace edit which the client will apply to the workspace.
		 */
		var ExecuteCommandRequest;
		(function (ExecuteCommandRequest) {
		    ExecuteCommandRequest.method = 'workspace/executeCommand';
		    ExecuteCommandRequest.messageDirection = messages_1.MessageDirection.clientToServer;
		    ExecuteCommandRequest.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest.method);
		})(ExecuteCommandRequest || (exports.ExecuteCommandRequest = ExecuteCommandRequest = {}));
		/**
		 * A request sent from the server to the client to modified certain resources.
		 */
		var ApplyWorkspaceEditRequest;
		(function (ApplyWorkspaceEditRequest) {
		    ApplyWorkspaceEditRequest.method = 'workspace/applyEdit';
		    ApplyWorkspaceEditRequest.messageDirection = messages_1.MessageDirection.serverToClient;
		    ApplyWorkspaceEditRequest.type = new messages_1.ProtocolRequestType('workspace/applyEdit');
		})(ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = ApplyWorkspaceEditRequest = {})); 
	} (protocol));
	return protocol;
}

var connection = {};

var hasRequiredConnection;

function requireConnection () {
	if (hasRequiredConnection) return connection;
	hasRequiredConnection = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(connection, "__esModule", { value: true });
	connection.createProtocolConnection = void 0;
	const vscode_jsonrpc_1 = requireMain$3();
	function createProtocolConnection(input, output, logger, options) {
	    if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
	        options = { connectionStrategy: options };
	    }
	    return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
	}
	connection.createProtocolConnection = createProtocolConnection;
	return connection;
}

var hasRequiredApi$1;

function requireApi$1 () {
	if (hasRequiredApi$1) return api$1;
	hasRequiredApi$1 = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		var __createBinding = (api$1 && api$1.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (api$1 && api$1.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
		__exportStar(requireMain$3(), exports);
		__exportStar(requireMain$2(), exports);
		__exportStar(requireMessages(), exports);
		__exportStar(requireProtocol(), exports);
		var connection_1 = requireConnection();
		Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function () { return connection_1.createProtocolConnection; } });
		var LSPErrorCodes;
		(function (LSPErrorCodes) {
		    /**
		    * This is the start range of LSP reserved error codes.
		    * It doesn't denote a real error code.
		    *
		    * @since 3.16.0
		    */
		    LSPErrorCodes.lspReservedErrorRangeStart = -32899;
		    /**
		     * A request failed but it was syntactically correct, e.g the
		     * method name was known and the parameters were valid. The error
		     * message should contain human readable information about why
		     * the request failed.
		     *
		     * @since 3.17.0
		     */
		    LSPErrorCodes.RequestFailed = -32803;
		    /**
		     * The server cancelled the request. This error code should
		     * only be used for requests that explicitly support being
		     * server cancellable.
		     *
		     * @since 3.17.0
		     */
		    LSPErrorCodes.ServerCancelled = -32802;
		    /**
		     * The server detected that the content of a document got
		     * modified outside normal conditions. A server should
		     * NOT send this error code if it detects a content change
		     * in it unprocessed messages. The result even computed
		     * on an older state might still be useful for the client.
		     *
		     * If a client decides that a result is not of any use anymore
		     * the client should cancel the request.
		     */
		    LSPErrorCodes.ContentModified = -32801;
		    /**
		     * The client has canceled a request and a server as detected
		     * the cancel.
		     */
		    LSPErrorCodes.RequestCancelled = -32800;
		    /**
		    * This is the end range of LSP reserved error codes.
		    * It doesn't denote a real error code.
		    *
		    * @since 3.16.0
		    */
		    LSPErrorCodes.lspReservedErrorRangeEnd = -32800;
		})(LSPErrorCodes || (exports.LSPErrorCodes = LSPErrorCodes = {})); 
	} (api$1));
	return api$1;
}

var hasRequiredMain$1;

function requireMain$1 () {
	if (hasRequiredMain$1) return main$2;
	hasRequiredMain$1 = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		var __createBinding = (main$2 && main$2.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (main$2 && main$2.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.createProtocolConnection = void 0;
		const node_1 = requireNode$2();
		__exportStar(requireNode$2(), exports);
		__exportStar(requireApi$1(), exports);
		function createProtocolConnection(input, output, logger, options) {
		    return (0, node_1.createMessageConnection)(input, output, logger, options);
		}
		exports.createProtocolConnection = createProtocolConnection; 
	} (main$2));
	return main$2;
}

var codeConverter = {};

var async = {};

var hasRequiredAsync;

function requireAsync () {
	if (hasRequiredAsync) return async;
	hasRequiredAsync = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(async, "__esModule", { value: true });
	async.forEach = async.mapAsync = async.map = async.clearTestMode = async.setTestMode = async.Semaphore = async.Delayer = void 0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	class Delayer {
	    constructor(defaultDelay) {
	        this.defaultDelay = defaultDelay;
	        this.timeout = undefined;
	        this.completionPromise = undefined;
	        this.onSuccess = undefined;
	        this.task = undefined;
	    }
	    trigger(task, delay = this.defaultDelay) {
	        this.task = task;
	        if (delay >= 0) {
	            this.cancelTimeout();
	        }
	        if (!this.completionPromise) {
	            this.completionPromise = new Promise((resolve) => {
	                this.onSuccess = resolve;
	            }).then(() => {
	                this.completionPromise = undefined;
	                this.onSuccess = undefined;
	                var result = this.task();
	                this.task = undefined;
	                return result;
	            });
	        }
	        if (delay >= 0 || this.timeout === void 0) {
	            this.timeout = (0, vscode_languageserver_protocol_1.RAL)().timer.setTimeout(() => {
	                this.timeout = undefined;
	                this.onSuccess(undefined);
	            }, delay >= 0 ? delay : this.defaultDelay);
	        }
	        return this.completionPromise;
	    }
	    forceDelivery() {
	        if (!this.completionPromise) {
	            return undefined;
	        }
	        this.cancelTimeout();
	        let result = this.task();
	        this.completionPromise = undefined;
	        this.onSuccess = undefined;
	        this.task = undefined;
	        return result;
	    }
	    isTriggered() {
	        return this.timeout !== undefined;
	    }
	    cancel() {
	        this.cancelTimeout();
	        this.completionPromise = undefined;
	    }
	    cancelTimeout() {
	        if (this.timeout !== undefined) {
	            this.timeout.dispose();
	            this.timeout = undefined;
	        }
	    }
	}
	async.Delayer = Delayer;
	class Semaphore {
	    constructor(capacity = 1) {
	        if (capacity <= 0) {
	            throw new Error('Capacity must be greater than 0');
	        }
	        this._capacity = capacity;
	        this._active = 0;
	        this._waiting = [];
	    }
	    lock(thunk) {
	        return new Promise((resolve, reject) => {
	            this._waiting.push({ thunk, resolve, reject });
	            this.runNext();
	        });
	    }
	    get active() {
	        return this._active;
	    }
	    runNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        (0, vscode_languageserver_protocol_1.RAL)().timer.setImmediate(() => this.doRunNext());
	    }
	    doRunNext() {
	        if (this._waiting.length === 0 || this._active === this._capacity) {
	            return;
	        }
	        const next = this._waiting.shift();
	        this._active++;
	        if (this._active > this._capacity) {
	            throw new Error(`To many thunks active`);
	        }
	        try {
	            const result = next.thunk();
	            if (result instanceof Promise) {
	                result.then((value) => {
	                    this._active--;
	                    next.resolve(value);
	                    this.runNext();
	                }, (err) => {
	                    this._active--;
	                    next.reject(err);
	                    this.runNext();
	                });
	            }
	            else {
	                this._active--;
	                next.resolve(result);
	                this.runNext();
	            }
	        }
	        catch (err) {
	            this._active--;
	            next.reject(err);
	            this.runNext();
	        }
	    }
	}
	async.Semaphore = Semaphore;
	let $test = false;
	function setTestMode() {
	    $test = true;
	}
	async.setTestMode = setTestMode;
	function clearTestMode() {
	    $test = false;
	}
	async.clearTestMode = clearTestMode;
	const defaultYieldTimeout = 15 /*ms*/;
	class Timer {
	    constructor(yieldAfter = defaultYieldTimeout) {
	        this.yieldAfter = $test === true ? Math.max(yieldAfter, 2) : Math.max(yieldAfter, defaultYieldTimeout);
	        this.startTime = Date.now();
	        this.counter = 0;
	        this.total = 0;
	        // start with a counter interval of 1.
	        this.counterInterval = 1;
	    }
	    start() {
	        this.counter = 0;
	        this.total = 0;
	        this.counterInterval = 1;
	        this.startTime = Date.now();
	    }
	    shouldYield() {
	        if (++this.counter >= this.counterInterval) {
	            const timeTaken = Date.now() - this.startTime;
	            const timeLeft = Math.max(0, this.yieldAfter - timeTaken);
	            this.total += this.counter;
	            this.counter = 0;
	            if (timeTaken >= this.yieldAfter || timeLeft <= 1) {
	                // Yield also if time left <= 1 since we compute the counter
	                // for max < 2 ms.
	                // Start with interval 1 again. We could do some calculation
	                // with using 80% of the last counter however other things (GC)
	                // affect the timing heavily since we have small timings (1 - 15ms).
	                this.counterInterval = 1;
	                this.total = 0;
	                return true;
	            }
	            else {
	                // Only increase the counter until we have spent <= 2 ms. Increasing
	                // the counter further is very fragile since timing is influenced
	                // by other things and can increase the counter too much. This will result
	                // that we yield in average after [14 - 16]ms.
	                switch (timeTaken) {
	                    case 0:
	                    case 1:
	                        this.counterInterval = this.total * 2;
	                        break;
	                }
	            }
	        }
	        return false;
	    }
	}
	async function map(items, func, token, options) {
	    if (items.length === 0) {
	        return [];
	    }
	    const result = new Array(items.length);
	    const timer = new Timer(options?.yieldAfter);
	    function convertBatch(start) {
	        timer.start();
	        for (let i = start; i < items.length; i++) {
	            result[i] = func(items[i]);
	            if (timer.shouldYield()) {
	                options?.yieldCallback && options.yieldCallback();
	                return i + 1;
	            }
	        }
	        return -1;
	    }
	    // Convert the first batch sync on the same frame.
	    let index = convertBatch(0);
	    while (index !== -1) {
	        if (token !== undefined && token.isCancellationRequested) {
	            break;
	        }
	        index = await new Promise((resolve) => {
	            (0, vscode_languageserver_protocol_1.RAL)().timer.setImmediate(() => {
	                resolve(convertBatch(index));
	            });
	        });
	    }
	    return result;
	}
	async.map = map;
	async function mapAsync(items, func, token, options) {
	    if (items.length === 0) {
	        return [];
	    }
	    const result = new Array(items.length);
	    const timer = new Timer(options?.yieldAfter);
	    async function convertBatch(start) {
	        timer.start();
	        for (let i = start; i < items.length; i++) {
	            result[i] = await func(items[i], token);
	            if (timer.shouldYield()) {
	                options?.yieldCallback && options.yieldCallback();
	                return i + 1;
	            }
	        }
	        return -1;
	    }
	    let index = await convertBatch(0);
	    while (index !== -1) {
	        if (token !== undefined && token.isCancellationRequested) {
	            break;
	        }
	        index = await new Promise((resolve) => {
	            (0, vscode_languageserver_protocol_1.RAL)().timer.setImmediate(() => {
	                resolve(convertBatch(index));
	            });
	        });
	    }
	    return result;
	}
	async.mapAsync = mapAsync;
	async function forEach(items, func, token, options) {
	    if (items.length === 0) {
	        return;
	    }
	    const timer = new Timer(options?.yieldAfter);
	    function runBatch(start) {
	        timer.start();
	        for (let i = start; i < items.length; i++) {
	            func(items[i]);
	            if (timer.shouldYield()) {
	                options?.yieldCallback && options.yieldCallback();
	                return i + 1;
	            }
	        }
	        return -1;
	    }
	    // Convert the first batch sync on the same frame.
	    let index = runBatch(0);
	    while (index !== -1) {
	        if (token !== undefined && token.isCancellationRequested) {
	            break;
	        }
	        index = await new Promise((resolve) => {
	            (0, vscode_languageserver_protocol_1.RAL)().timer.setImmediate(() => {
	                resolve(runBatch(index));
	            });
	        });
	    }
	}
	async.forEach = forEach;
	return async;
}

var protocolCompletionItem = {};

var hasRequiredProtocolCompletionItem;

function requireProtocolCompletionItem () {
	if (hasRequiredProtocolCompletionItem) return protocolCompletionItem;
	hasRequiredProtocolCompletionItem = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolCompletionItem, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolCompletionItem extends code.CompletionItem {
	    constructor(label) {
	        super(label);
	    }
	}
	protocolCompletionItem.default = ProtocolCompletionItem;
	return protocolCompletionItem;
}

var protocolCodeLens = {};

var hasRequiredProtocolCodeLens;

function requireProtocolCodeLens () {
	if (hasRequiredProtocolCodeLens) return protocolCodeLens;
	hasRequiredProtocolCodeLens = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolCodeLens, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolCodeLens extends code.CodeLens {
	    constructor(range) {
	        super(range);
	    }
	}
	protocolCodeLens.default = ProtocolCodeLens;
	return protocolCodeLens;
}

var protocolDocumentLink = {};

var hasRequiredProtocolDocumentLink;

function requireProtocolDocumentLink () {
	if (hasRequiredProtocolDocumentLink) return protocolDocumentLink;
	hasRequiredProtocolDocumentLink = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolDocumentLink, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolDocumentLink extends code.DocumentLink {
	    constructor(range, target) {
	        super(range, target);
	    }
	}
	protocolDocumentLink.default = ProtocolDocumentLink;
	return protocolDocumentLink;
}

var protocolCodeAction = {};

var hasRequiredProtocolCodeAction;

function requireProtocolCodeAction () {
	if (hasRequiredProtocolCodeAction) return protocolCodeAction;
	hasRequiredProtocolCodeAction = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolCodeAction, "__esModule", { value: true });
	const vscode = require$$0;
	class ProtocolCodeAction extends vscode.CodeAction {
	    constructor(title, data) {
	        super(title);
	        this.data = data;
	    }
	}
	protocolCodeAction.default = ProtocolCodeAction;
	return protocolCodeAction;
}

var protocolDiagnostic = {};

var hasRequiredProtocolDiagnostic;

function requireProtocolDiagnostic () {
	if (hasRequiredProtocolDiagnostic) return protocolDiagnostic;
	hasRequiredProtocolDiagnostic = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolDiagnostic, "__esModule", { value: true });
	protocolDiagnostic.ProtocolDiagnostic = protocolDiagnostic.DiagnosticCode = void 0;
	const vscode = require$$0;
	const Is = requireIs$2();
	var DiagnosticCode;
	(function (DiagnosticCode) {
	    function is(value) {
	        const candidate = value;
	        return candidate !== undefined && candidate !== null && (Is.number(candidate.value) || Is.string(candidate.value)) && Is.string(candidate.target);
	    }
	    DiagnosticCode.is = is;
	})(DiagnosticCode || (protocolDiagnostic.DiagnosticCode = DiagnosticCode = {}));
	class ProtocolDiagnostic extends vscode.Diagnostic {
	    constructor(range, message, severity, data) {
	        super(range, message, severity);
	        this.data = data;
	        this.hasDiagnosticCode = false;
	    }
	}
	protocolDiagnostic.ProtocolDiagnostic = ProtocolDiagnostic;
	return protocolDiagnostic;
}

var protocolCallHierarchyItem = {};

var hasRequiredProtocolCallHierarchyItem;

function requireProtocolCallHierarchyItem () {
	if (hasRequiredProtocolCallHierarchyItem) return protocolCallHierarchyItem;
	hasRequiredProtocolCallHierarchyItem = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolCallHierarchyItem, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolCallHierarchyItem extends code.CallHierarchyItem {
	    constructor(kind, name, detail, uri, range, selectionRange, data) {
	        super(kind, name, detail, uri, range, selectionRange);
	        if (data !== undefined) {
	            this.data = data;
	        }
	    }
	}
	protocolCallHierarchyItem.default = ProtocolCallHierarchyItem;
	return protocolCallHierarchyItem;
}

var protocolTypeHierarchyItem = {};

var hasRequiredProtocolTypeHierarchyItem;

function requireProtocolTypeHierarchyItem () {
	if (hasRequiredProtocolTypeHierarchyItem) return protocolTypeHierarchyItem;
	hasRequiredProtocolTypeHierarchyItem = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolTypeHierarchyItem, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolTypeHierarchyItem extends code.TypeHierarchyItem {
	    constructor(kind, name, detail, uri, range, selectionRange, data) {
	        super(kind, name, detail, uri, range, selectionRange);
	        if (data !== undefined) {
	            this.data = data;
	        }
	    }
	}
	protocolTypeHierarchyItem.default = ProtocolTypeHierarchyItem;
	return protocolTypeHierarchyItem;
}

var protocolWorkspaceSymbol = {};

var hasRequiredProtocolWorkspaceSymbol;

function requireProtocolWorkspaceSymbol () {
	if (hasRequiredProtocolWorkspaceSymbol) return protocolWorkspaceSymbol;
	hasRequiredProtocolWorkspaceSymbol = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolWorkspaceSymbol, "__esModule", { value: true });
	const code = require$$0;
	class WorkspaceSymbol extends code.SymbolInformation {
	    constructor(name, kind, containerName, locationOrUri, data) {
	        const hasRange = !(locationOrUri instanceof code.Uri);
	        super(name, kind, containerName, hasRange ? locationOrUri : new code.Location(locationOrUri, new code.Range(0, 0, 0, 0)));
	        this.hasRange = hasRange;
	        if (data !== undefined) {
	            this.data = data;
	        }
	    }
	}
	protocolWorkspaceSymbol.default = WorkspaceSymbol;
	return protocolWorkspaceSymbol;
}

var protocolInlayHint = {};

var hasRequiredProtocolInlayHint;

function requireProtocolInlayHint () {
	if (hasRequiredProtocolInlayHint) return protocolInlayHint;
	hasRequiredProtocolInlayHint = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolInlayHint, "__esModule", { value: true });
	const code = require$$0;
	class ProtocolInlayHint extends code.InlayHint {
	    constructor(position, label, kind) {
	        super(position, label, kind);
	    }
	}
	protocolInlayHint.default = ProtocolInlayHint;
	return protocolInlayHint;
}

var hasRequiredCodeConverter;

function requireCodeConverter () {
	if (hasRequiredCodeConverter) return codeConverter;
	hasRequiredCodeConverter = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(codeConverter, "__esModule", { value: true });
	codeConverter.createConverter = void 0;
	const code = require$$0;
	const proto = requireMain$1();
	const Is = requireIs$2();
	const async = requireAsync();
	const protocolCompletionItem_1 = requireProtocolCompletionItem();
	const protocolCodeLens_1 = requireProtocolCodeLens();
	const protocolDocumentLink_1 = requireProtocolDocumentLink();
	const protocolCodeAction_1 = requireProtocolCodeAction();
	const protocolDiagnostic_1 = requireProtocolDiagnostic();
	const protocolCallHierarchyItem_1 = requireProtocolCallHierarchyItem();
	const protocolTypeHierarchyItem_1 = requireProtocolTypeHierarchyItem();
	const protocolWorkspaceSymbol_1 = requireProtocolWorkspaceSymbol();
	const protocolInlayHint_1 = requireProtocolInlayHint();
	var InsertReplaceRange;
	(function (InsertReplaceRange) {
	    function is(value) {
	        const candidate = value;
	        return candidate && !!candidate.inserting && !!candidate.replacing;
	    }
	    InsertReplaceRange.is = is;
	})(InsertReplaceRange || (InsertReplaceRange = {}));
	function createConverter(uriConverter) {
	    const nullConverter = (value) => value.toString();
	    const _uriConverter = uriConverter || nullConverter;
	    function asUri(value) {
	        return _uriConverter(value);
	    }
	    function asTextDocumentIdentifier(textDocument) {
	        return {
	            uri: _uriConverter(textDocument.uri)
	        };
	    }
	    function asTextDocumentItem(textDocument) {
	        return {
	            uri: _uriConverter(textDocument.uri),
	            languageId: textDocument.languageId,
	            version: textDocument.version,
	            text: textDocument.getText()
	        };
	    }
	    function asVersionedTextDocumentIdentifier(textDocument) {
	        return {
	            uri: _uriConverter(textDocument.uri),
	            version: textDocument.version
	        };
	    }
	    function asOpenTextDocumentParams(textDocument) {
	        return {
	            textDocument: asTextDocumentItem(textDocument)
	        };
	    }
	    function isTextDocumentChangeEvent(value) {
	        const candidate = value;
	        return !!candidate.document && !!candidate.contentChanges;
	    }
	    function isTextDocument(value) {
	        const candidate = value;
	        return !!candidate.uri && !!candidate.version;
	    }
	    function asChangeTextDocumentParams(arg0, arg1, arg2) {
	        if (isTextDocument(arg0)) {
	            const result = {
	                textDocument: {
	                    uri: _uriConverter(arg0.uri),
	                    version: arg0.version
	                },
	                contentChanges: [{ text: arg0.getText() }]
	            };
	            return result;
	        }
	        else if (isTextDocumentChangeEvent(arg0)) {
	            const uri = arg1;
	            const version = arg2;
	            const result = {
	                textDocument: {
	                    uri: _uriConverter(uri),
	                    version: version
	                },
	                contentChanges: arg0.contentChanges.map((change) => {
	                    const range = change.range;
	                    return {
	                        range: {
	                            start: { line: range.start.line, character: range.start.character },
	                            end: { line: range.end.line, character: range.end.character }
	                        },
	                        rangeLength: change.rangeLength,
	                        text: change.text
	                    };
	                })
	            };
	            return result;
	        }
	        else {
	            throw Error('Unsupported text document change parameter');
	        }
	    }
	    function asCloseTextDocumentParams(textDocument) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument)
	        };
	    }
	    function asSaveTextDocumentParams(textDocument, includeContent = false) {
	        let result = {
	            textDocument: asTextDocumentIdentifier(textDocument)
	        };
	        if (includeContent) {
	            result.text = textDocument.getText();
	        }
	        return result;
	    }
	    function asTextDocumentSaveReason(reason) {
	        switch (reason) {
	            case code.TextDocumentSaveReason.Manual:
	                return proto.TextDocumentSaveReason.Manual;
	            case code.TextDocumentSaveReason.AfterDelay:
	                return proto.TextDocumentSaveReason.AfterDelay;
	            case code.TextDocumentSaveReason.FocusOut:
	                return proto.TextDocumentSaveReason.FocusOut;
	        }
	        return proto.TextDocumentSaveReason.Manual;
	    }
	    function asWillSaveTextDocumentParams(event) {
	        return {
	            textDocument: asTextDocumentIdentifier(event.document),
	            reason: asTextDocumentSaveReason(event.reason)
	        };
	    }
	    function asDidCreateFilesParams(event) {
	        return {
	            files: event.files.map((fileUri) => ({
	                uri: _uriConverter(fileUri),
	            })),
	        };
	    }
	    function asDidRenameFilesParams(event) {
	        return {
	            files: event.files.map((file) => ({
	                oldUri: _uriConverter(file.oldUri),
	                newUri: _uriConverter(file.newUri),
	            })),
	        };
	    }
	    function asDidDeleteFilesParams(event) {
	        return {
	            files: event.files.map((fileUri) => ({
	                uri: _uriConverter(fileUri),
	            })),
	        };
	    }
	    function asWillCreateFilesParams(event) {
	        return {
	            files: event.files.map((fileUri) => ({
	                uri: _uriConverter(fileUri),
	            })),
	        };
	    }
	    function asWillRenameFilesParams(event) {
	        return {
	            files: event.files.map((file) => ({
	                oldUri: _uriConverter(file.oldUri),
	                newUri: _uriConverter(file.newUri),
	            })),
	        };
	    }
	    function asWillDeleteFilesParams(event) {
	        return {
	            files: event.files.map((fileUri) => ({
	                uri: _uriConverter(fileUri),
	            })),
	        };
	    }
	    function asTextDocumentPositionParams(textDocument, position) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument),
	            position: asWorkerPosition(position)
	        };
	    }
	    function asCompletionTriggerKind(triggerKind) {
	        switch (triggerKind) {
	            case code.CompletionTriggerKind.TriggerCharacter:
	                return proto.CompletionTriggerKind.TriggerCharacter;
	            case code.CompletionTriggerKind.TriggerForIncompleteCompletions:
	                return proto.CompletionTriggerKind.TriggerForIncompleteCompletions;
	            default:
	                return proto.CompletionTriggerKind.Invoked;
	        }
	    }
	    function asCompletionParams(textDocument, position, context) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument),
	            position: asWorkerPosition(position),
	            context: {
	                triggerKind: asCompletionTriggerKind(context.triggerKind),
	                triggerCharacter: context.triggerCharacter
	            }
	        };
	    }
	    function asSignatureHelpTriggerKind(triggerKind) {
	        switch (triggerKind) {
	            case code.SignatureHelpTriggerKind.Invoke:
	                return proto.SignatureHelpTriggerKind.Invoked;
	            case code.SignatureHelpTriggerKind.TriggerCharacter:
	                return proto.SignatureHelpTriggerKind.TriggerCharacter;
	            case code.SignatureHelpTriggerKind.ContentChange:
	                return proto.SignatureHelpTriggerKind.ContentChange;
	        }
	    }
	    function asParameterInformation(value) {
	        // We leave the documentation out on purpose since it usually adds no
	        // value for the server.
	        return {
	            label: value.label
	        };
	    }
	    function asParameterInformations(values) {
	        return values.map(asParameterInformation);
	    }
	    function asSignatureInformation(value) {
	        // We leave the documentation out on purpose since it usually adds no
	        // value for the server.
	        return {
	            label: value.label,
	            parameters: asParameterInformations(value.parameters)
	        };
	    }
	    function asSignatureInformations(values) {
	        return values.map(asSignatureInformation);
	    }
	    function asSignatureHelp(value) {
	        if (value === undefined) {
	            return value;
	        }
	        return {
	            signatures: asSignatureInformations(value.signatures),
	            activeSignature: value.activeSignature,
	            activeParameter: value.activeParameter
	        };
	    }
	    function asSignatureHelpParams(textDocument, position, context) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument),
	            position: asWorkerPosition(position),
	            context: {
	                isRetrigger: context.isRetrigger,
	                triggerCharacter: context.triggerCharacter,
	                triggerKind: asSignatureHelpTriggerKind(context.triggerKind),
	                activeSignatureHelp: asSignatureHelp(context.activeSignatureHelp)
	            }
	        };
	    }
	    function asWorkerPosition(position) {
	        return { line: position.line, character: position.character };
	    }
	    function asPosition(value) {
	        if (value === undefined || value === null) {
	            return value;
	        }
	        return { line: value.line > proto.uinteger.MAX_VALUE ? proto.uinteger.MAX_VALUE : value.line, character: value.character > proto.uinteger.MAX_VALUE ? proto.uinteger.MAX_VALUE : value.character };
	    }
	    function asPositions(values, token) {
	        return async.map(values, asPosition, token);
	    }
	    function asPositionsSync(values) {
	        return values.map(asPosition);
	    }
	    function asRange(value) {
	        if (value === undefined || value === null) {
	            return value;
	        }
	        return { start: asPosition(value.start), end: asPosition(value.end) };
	    }
	    function asRanges(values) {
	        return values.map(asRange);
	    }
	    function asLocation(value) {
	        if (value === undefined || value === null) {
	            return value;
	        }
	        return proto.Location.create(asUri(value.uri), asRange(value.range));
	    }
	    function asDiagnosticSeverity(value) {
	        switch (value) {
	            case code.DiagnosticSeverity.Error:
	                return proto.DiagnosticSeverity.Error;
	            case code.DiagnosticSeverity.Warning:
	                return proto.DiagnosticSeverity.Warning;
	            case code.DiagnosticSeverity.Information:
	                return proto.DiagnosticSeverity.Information;
	            case code.DiagnosticSeverity.Hint:
	                return proto.DiagnosticSeverity.Hint;
	        }
	    }
	    function asDiagnosticTags(tags) {
	        if (!tags) {
	            return undefined;
	        }
	        let result = [];
	        for (let tag of tags) {
	            let converted = asDiagnosticTag(tag);
	            if (converted !== undefined) {
	                result.push(converted);
	            }
	        }
	        return result.length > 0 ? result : undefined;
	    }
	    function asDiagnosticTag(tag) {
	        switch (tag) {
	            case code.DiagnosticTag.Unnecessary:
	                return proto.DiagnosticTag.Unnecessary;
	            case code.DiagnosticTag.Deprecated:
	                return proto.DiagnosticTag.Deprecated;
	            default:
	                return undefined;
	        }
	    }
	    function asRelatedInformation(item) {
	        return {
	            message: item.message,
	            location: asLocation(item.location)
	        };
	    }
	    function asRelatedInformations(items) {
	        return items.map(asRelatedInformation);
	    }
	    function asDiagnosticCode(value) {
	        if (value === undefined || value === null) {
	            return undefined;
	        }
	        if (Is.number(value) || Is.string(value)) {
	            return value;
	        }
	        return { value: value.value, target: asUri(value.target) };
	    }
	    function asDiagnostic(item) {
	        const result = proto.Diagnostic.create(asRange(item.range), item.message);
	        const protocolDiagnostic = item instanceof protocolDiagnostic_1.ProtocolDiagnostic ? item : undefined;
	        if (protocolDiagnostic !== undefined && protocolDiagnostic.data !== undefined) {
	            result.data = protocolDiagnostic.data;
	        }
	        const code = asDiagnosticCode(item.code);
	        if (protocolDiagnostic_1.DiagnosticCode.is(code)) {
	            if (protocolDiagnostic !== undefined && protocolDiagnostic.hasDiagnosticCode) {
	                result.code = code;
	            }
	            else {
	                result.code = code.value;
	                result.codeDescription = { href: code.target };
	            }
	        }
	        else {
	            result.code = code;
	        }
	        if (Is.number(item.severity)) {
	            result.severity = asDiagnosticSeverity(item.severity);
	        }
	        if (Array.isArray(item.tags)) {
	            result.tags = asDiagnosticTags(item.tags);
	        }
	        if (item.relatedInformation) {
	            result.relatedInformation = asRelatedInformations(item.relatedInformation);
	        }
	        if (item.source) {
	            result.source = item.source;
	        }
	        return result;
	    }
	    function asDiagnostics(items, token) {
	        if (items === undefined || items === null) {
	            return items;
	        }
	        return async.map(items, asDiagnostic, token);
	    }
	    function asDiagnosticsSync(items) {
	        if (items === undefined || items === null) {
	            return items;
	        }
	        return items.map(asDiagnostic);
	    }
	    function asDocumentation(format, documentation) {
	        switch (format) {
	            case '$string':
	                return documentation;
	            case proto.MarkupKind.PlainText:
	                return { kind: format, value: documentation };
	            case proto.MarkupKind.Markdown:
	                return { kind: format, value: documentation.value };
	            default:
	                return `Unsupported Markup content received. Kind is: ${format}`;
	        }
	    }
	    function asCompletionItemTag(tag) {
	        switch (tag) {
	            case code.CompletionItemTag.Deprecated:
	                return proto.CompletionItemTag.Deprecated;
	        }
	        return undefined;
	    }
	    function asCompletionItemTags(tags) {
	        if (tags === undefined) {
	            return tags;
	        }
	        const result = [];
	        for (let tag of tags) {
	            const converted = asCompletionItemTag(tag);
	            if (converted !== undefined) {
	                result.push(converted);
	            }
	        }
	        return result;
	    }
	    function asCompletionItemKind(value, original) {
	        if (original !== undefined) {
	            return original;
	        }
	        return value + 1;
	    }
	    function asCompletionItem(item, labelDetailsSupport = false) {
	        let label;
	        let labelDetails;
	        if (Is.string(item.label)) {
	            label = item.label;
	        }
	        else {
	            label = item.label.label;
	            if (labelDetailsSupport && (item.label.detail !== undefined || item.label.description !== undefined)) {
	                labelDetails = { detail: item.label.detail, description: item.label.description };
	            }
	        }
	        let result = { label: label };
	        if (labelDetails !== undefined) {
	            result.labelDetails = labelDetails;
	        }
	        let protocolItem = item instanceof protocolCompletionItem_1.default ? item : undefined;
	        if (item.detail) {
	            result.detail = item.detail;
	        }
	        // We only send items back we created. So this can't be something else than
	        // a string right now.
	        if (item.documentation) {
	            if (!protocolItem || protocolItem.documentationFormat === '$string') {
	                result.documentation = item.documentation;
	            }
	            else {
	                result.documentation = asDocumentation(protocolItem.documentationFormat, item.documentation);
	            }
	        }
	        if (item.filterText) {
	            result.filterText = item.filterText;
	        }
	        fillPrimaryInsertText(result, item);
	        if (Is.number(item.kind)) {
	            result.kind = asCompletionItemKind(item.kind, protocolItem && protocolItem.originalItemKind);
	        }
	        if (item.sortText) {
	            result.sortText = item.sortText;
	        }
	        if (item.additionalTextEdits) {
	            result.additionalTextEdits = asTextEdits(item.additionalTextEdits);
	        }
	        if (item.commitCharacters) {
	            result.commitCharacters = item.commitCharacters.slice();
	        }
	        if (item.command) {
	            result.command = asCommand(item.command);
	        }
	        if (item.preselect === true || item.preselect === false) {
	            result.preselect = item.preselect;
	        }
	        const tags = asCompletionItemTags(item.tags);
	        if (protocolItem) {
	            if (protocolItem.data !== undefined) {
	                result.data = protocolItem.data;
	            }
	            if (protocolItem.deprecated === true || protocolItem.deprecated === false) {
	                if (protocolItem.deprecated === true && tags !== undefined && tags.length > 0) {
	                    const index = tags.indexOf(code.CompletionItemTag.Deprecated);
	                    if (index !== -1) {
	                        tags.splice(index, 1);
	                    }
	                }
	                result.deprecated = protocolItem.deprecated;
	            }
	            if (protocolItem.insertTextMode !== undefined) {
	                result.insertTextMode = protocolItem.insertTextMode;
	            }
	        }
	        if (tags !== undefined && tags.length > 0) {
	            result.tags = tags;
	        }
	        if (result.insertTextMode === undefined && item.keepWhitespace === true) {
	            result.insertTextMode = proto.InsertTextMode.adjustIndentation;
	        }
	        return result;
	    }
	    function fillPrimaryInsertText(target, source) {
	        let format = proto.InsertTextFormat.PlainText;
	        let text = undefined;
	        let range = undefined;
	        if (source.textEdit) {
	            text = source.textEdit.newText;
	            range = source.textEdit.range;
	        }
	        else if (source.insertText instanceof code.SnippetString) {
	            format = proto.InsertTextFormat.Snippet;
	            text = source.insertText.value;
	        }
	        else {
	            text = source.insertText;
	        }
	        if (source.range) {
	            range = source.range;
	        }
	        target.insertTextFormat = format;
	        if (source.fromEdit && text !== undefined && range !== undefined) {
	            target.textEdit = asCompletionTextEdit(text, range);
	        }
	        else {
	            target.insertText = text;
	        }
	    }
	    function asCompletionTextEdit(newText, range) {
	        if (InsertReplaceRange.is(range)) {
	            return proto.InsertReplaceEdit.create(newText, asRange(range.inserting), asRange(range.replacing));
	        }
	        else {
	            return { newText, range: asRange(range) };
	        }
	    }
	    function asTextEdit(edit) {
	        return { range: asRange(edit.range), newText: edit.newText };
	    }
	    function asTextEdits(edits) {
	        if (edits === undefined || edits === null) {
	            return edits;
	        }
	        return edits.map(asTextEdit);
	    }
	    function asSymbolKind(item) {
	        if (item <= code.SymbolKind.TypeParameter) {
	            // Symbol kind is one based in the protocol and zero based in code.
	            return (item + 1);
	        }
	        return proto.SymbolKind.Property;
	    }
	    function asSymbolTag(item) {
	        return item;
	    }
	    function asSymbolTags(items) {
	        return items.map(asSymbolTag);
	    }
	    function asReferenceParams(textDocument, position, options) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument),
	            position: asWorkerPosition(position),
	            context: { includeDeclaration: options.includeDeclaration }
	        };
	    }
	    async function asCodeAction(item, token) {
	        let result = proto.CodeAction.create(item.title);
	        if (item instanceof protocolCodeAction_1.default && item.data !== undefined) {
	            result.data = item.data;
	        }
	        if (item.kind !== undefined) {
	            result.kind = asCodeActionKind(item.kind);
	        }
	        if (item.diagnostics !== undefined) {
	            result.diagnostics = await asDiagnostics(item.diagnostics, token);
	        }
	        if (item.edit !== undefined) {
	            throw new Error(`VS Code code actions can only be converted to a protocol code action without an edit.`);
	        }
	        if (item.command !== undefined) {
	            result.command = asCommand(item.command);
	        }
	        if (item.isPreferred !== undefined) {
	            result.isPreferred = item.isPreferred;
	        }
	        if (item.disabled !== undefined) {
	            result.disabled = { reason: item.disabled.reason };
	        }
	        return result;
	    }
	    function asCodeActionSync(item) {
	        let result = proto.CodeAction.create(item.title);
	        if (item instanceof protocolCodeAction_1.default && item.data !== undefined) {
	            result.data = item.data;
	        }
	        if (item.kind !== undefined) {
	            result.kind = asCodeActionKind(item.kind);
	        }
	        if (item.diagnostics !== undefined) {
	            result.diagnostics = asDiagnosticsSync(item.diagnostics);
	        }
	        if (item.edit !== undefined) {
	            throw new Error(`VS Code code actions can only be converted to a protocol code action without an edit.`);
	        }
	        if (item.command !== undefined) {
	            result.command = asCommand(item.command);
	        }
	        if (item.isPreferred !== undefined) {
	            result.isPreferred = item.isPreferred;
	        }
	        if (item.disabled !== undefined) {
	            result.disabled = { reason: item.disabled.reason };
	        }
	        return result;
	    }
	    async function asCodeActionContext(context, token) {
	        if (context === undefined || context === null) {
	            return context;
	        }
	        let only;
	        if (context.only && Is.string(context.only.value)) {
	            only = [context.only.value];
	        }
	        return proto.CodeActionContext.create(await asDiagnostics(context.diagnostics, token), only, asCodeActionTriggerKind(context.triggerKind));
	    }
	    function asCodeActionContextSync(context) {
	        if (context === undefined || context === null) {
	            return context;
	        }
	        let only;
	        if (context.only && Is.string(context.only.value)) {
	            only = [context.only.value];
	        }
	        return proto.CodeActionContext.create(asDiagnosticsSync(context.diagnostics), only, asCodeActionTriggerKind(context.triggerKind));
	    }
	    function asCodeActionTriggerKind(kind) {
	        switch (kind) {
	            case code.CodeActionTriggerKind.Invoke:
	                return proto.CodeActionTriggerKind.Invoked;
	            case code.CodeActionTriggerKind.Automatic:
	                return proto.CodeActionTriggerKind.Automatic;
	            default:
	                return undefined;
	        }
	    }
	    function asCodeActionKind(item) {
	        if (item === undefined || item === null) {
	            return undefined;
	        }
	        return item.value;
	    }
	    function asInlineValueContext(context) {
	        if (context === undefined || context === null) {
	            return context;
	        }
	        return proto.InlineValueContext.create(context.frameId, asRange(context.stoppedLocation));
	    }
	    function asInlineCompletionParams(document, position, context) {
	        return { context: proto.InlineCompletionContext.create(context.triggerKind, context.selectedCompletionInfo),
	            textDocument: asTextDocumentIdentifier(document), position: asPosition(position) };
	    }
	    function asCommand(item) {
	        let result = proto.Command.create(item.title, item.command);
	        if (item.arguments) {
	            result.arguments = item.arguments;
	        }
	        return result;
	    }
	    function asCodeLens(item) {
	        let result = proto.CodeLens.create(asRange(item.range));
	        if (item.command) {
	            result.command = asCommand(item.command);
	        }
	        if (item instanceof protocolCodeLens_1.default) {
	            if (item.data) {
	                result.data = item.data;
	            }
	        }
	        return result;
	    }
	    function asFormattingOptions(options, fileOptions) {
	        const result = { tabSize: options.tabSize, insertSpaces: options.insertSpaces };
	        if (fileOptions.trimTrailingWhitespace) {
	            result.trimTrailingWhitespace = true;
	        }
	        if (fileOptions.trimFinalNewlines) {
	            result.trimFinalNewlines = true;
	        }
	        if (fileOptions.insertFinalNewline) {
	            result.insertFinalNewline = true;
	        }
	        return result;
	    }
	    function asDocumentSymbolParams(textDocument) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument)
	        };
	    }
	    function asCodeLensParams(textDocument) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument)
	        };
	    }
	    function asDocumentLink(item) {
	        let result = proto.DocumentLink.create(asRange(item.range));
	        if (item.target) {
	            result.target = asUri(item.target);
	        }
	        if (item.tooltip !== undefined) {
	            result.tooltip = item.tooltip;
	        }
	        let protocolItem = item instanceof protocolDocumentLink_1.default ? item : undefined;
	        if (protocolItem && protocolItem.data) {
	            result.data = protocolItem.data;
	        }
	        return result;
	    }
	    function asDocumentLinkParams(textDocument) {
	        return {
	            textDocument: asTextDocumentIdentifier(textDocument)
	        };
	    }
	    function asCallHierarchyItem(value) {
	        const result = {
	            name: value.name,
	            kind: asSymbolKind(value.kind),
	            uri: asUri(value.uri),
	            range: asRange(value.range),
	            selectionRange: asRange(value.selectionRange)
	        };
	        if (value.detail !== undefined && value.detail.length > 0) {
	            result.detail = value.detail;
	        }
	        if (value.tags !== undefined) {
	            result.tags = asSymbolTags(value.tags);
	        }
	        if (value instanceof protocolCallHierarchyItem_1.default && value.data !== undefined) {
	            result.data = value.data;
	        }
	        return result;
	    }
	    function asTypeHierarchyItem(value) {
	        const result = {
	            name: value.name,
	            kind: asSymbolKind(value.kind),
	            uri: asUri(value.uri),
	            range: asRange(value.range),
	            selectionRange: asRange(value.selectionRange),
	        };
	        if (value.detail !== undefined && value.detail.length > 0) {
	            result.detail = value.detail;
	        }
	        if (value.tags !== undefined) {
	            result.tags = asSymbolTags(value.tags);
	        }
	        if (value instanceof protocolTypeHierarchyItem_1.default && value.data !== undefined) {
	            result.data = value.data;
	        }
	        return result;
	    }
	    function asWorkspaceSymbol(item) {
	        const result = item instanceof protocolWorkspaceSymbol_1.default
	            ? { name: item.name, kind: asSymbolKind(item.kind), location: item.hasRange ? asLocation(item.location) : { uri: _uriConverter(item.location.uri) }, data: item.data }
	            : { name: item.name, kind: asSymbolKind(item.kind), location: asLocation(item.location) };
	        if (item.tags !== undefined) {
	            result.tags = asSymbolTags(item.tags);
	        }
	        if (item.containerName !== '') {
	            result.containerName = item.containerName;
	        }
	        return result;
	    }
	    function asInlayHint(item) {
	        const label = typeof item.label === 'string'
	            ? item.label
	            : item.label.map(asInlayHintLabelPart);
	        const result = proto.InlayHint.create(asPosition(item.position), label);
	        if (item.kind !== undefined) {
	            result.kind = item.kind;
	        }
	        if (item.textEdits !== undefined) {
	            result.textEdits = asTextEdits(item.textEdits);
	        }
	        if (item.tooltip !== undefined) {
	            result.tooltip = asTooltip(item.tooltip);
	        }
	        if (item.paddingLeft !== undefined) {
	            result.paddingLeft = item.paddingLeft;
	        }
	        if (item.paddingRight !== undefined) {
	            result.paddingRight = item.paddingRight;
	        }
	        if (item instanceof protocolInlayHint_1.default && item.data !== undefined) {
	            result.data = item.data;
	        }
	        return result;
	    }
	    function asInlayHintLabelPart(item) {
	        const result = proto.InlayHintLabelPart.create(item.value);
	        if (item.location !== undefined) {
	            result.location = asLocation(item.location);
	        }
	        if (item.command !== undefined) {
	            result.command = asCommand(item.command);
	        }
	        if (item.tooltip !== undefined) {
	            result.tooltip = asTooltip(item.tooltip);
	        }
	        return result;
	    }
	    function asTooltip(value) {
	        if (typeof value === 'string') {
	            return value;
	        }
	        const result = {
	            kind: proto.MarkupKind.Markdown,
	            value: value.value
	        };
	        return result;
	    }
	    return {
	        asUri,
	        asTextDocumentIdentifier,
	        asTextDocumentItem,
	        asVersionedTextDocumentIdentifier,
	        asOpenTextDocumentParams,
	        asChangeTextDocumentParams,
	        asCloseTextDocumentParams,
	        asSaveTextDocumentParams,
	        asWillSaveTextDocumentParams,
	        asDidCreateFilesParams,
	        asDidRenameFilesParams,
	        asDidDeleteFilesParams,
	        asWillCreateFilesParams,
	        asWillRenameFilesParams,
	        asWillDeleteFilesParams,
	        asTextDocumentPositionParams,
	        asCompletionParams,
	        asSignatureHelpParams,
	        asWorkerPosition,
	        asRange,
	        asRanges,
	        asPosition,
	        asPositions,
	        asPositionsSync,
	        asLocation,
	        asDiagnosticSeverity,
	        asDiagnosticTag,
	        asDiagnostic,
	        asDiagnostics,
	        asDiagnosticsSync,
	        asCompletionItem,
	        asTextEdit,
	        asSymbolKind,
	        asSymbolTag,
	        asSymbolTags,
	        asReferenceParams,
	        asCodeAction,
	        asCodeActionSync,
	        asCodeActionContext,
	        asCodeActionContextSync,
	        asInlineValueContext,
	        asCommand,
	        asCodeLens,
	        asFormattingOptions,
	        asDocumentSymbolParams,
	        asCodeLensParams,
	        asDocumentLink,
	        asDocumentLinkParams,
	        asCallHierarchyItem,
	        asTypeHierarchyItem,
	        asInlayHint,
	        asWorkspaceSymbol,
	        asInlineCompletionParams
	    };
	}
	codeConverter.createConverter = createConverter;
	return codeConverter;
}

var protocolConverter = {};

var hasRequiredProtocolConverter;

function requireProtocolConverter () {
	if (hasRequiredProtocolConverter) return protocolConverter;
	hasRequiredProtocolConverter = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(protocolConverter, "__esModule", { value: true });
	protocolConverter.createConverter = void 0;
	const code = require$$0;
	const ls = requireMain$1();
	const Is = requireIs$2();
	const async = requireAsync();
	const protocolCompletionItem_1 = requireProtocolCompletionItem();
	const protocolCodeLens_1 = requireProtocolCodeLens();
	const protocolDocumentLink_1 = requireProtocolDocumentLink();
	const protocolCodeAction_1 = requireProtocolCodeAction();
	const protocolDiagnostic_1 = requireProtocolDiagnostic();
	const protocolCallHierarchyItem_1 = requireProtocolCallHierarchyItem();
	const protocolTypeHierarchyItem_1 = requireProtocolTypeHierarchyItem();
	const protocolWorkspaceSymbol_1 = requireProtocolWorkspaceSymbol();
	const protocolInlayHint_1 = requireProtocolInlayHint();
	const vscode_languageserver_protocol_1 = requireMain$1();
	var CodeBlock;
	(function (CodeBlock) {
	    function is(value) {
	        let candidate = value;
	        return candidate && Is.string(candidate.language) && Is.string(candidate.value);
	    }
	    CodeBlock.is = is;
	})(CodeBlock || (CodeBlock = {}));
	function createConverter(uriConverter, trustMarkdown, supportHtml) {
	    const nullConverter = (value) => code.Uri.parse(value);
	    const _uriConverter = uriConverter || nullConverter;
	    function asUri(value) {
	        return _uriConverter(value);
	    }
	    function asDocumentSelector(selector) {
	        const result = [];
	        for (const filter of selector) {
	            if (typeof filter === 'string') {
	                result.push(filter);
	            }
	            else if (vscode_languageserver_protocol_1.NotebookCellTextDocumentFilter.is(filter)) {
	                // We first need to check for the notebook cell filter since a TextDocumentFilter would
	                // match both (e.g. the notebook is optional).
	                if (typeof filter.notebook === 'string') {
	                    result.push({ notebookType: filter.notebook, language: filter.language });
	                }
	                else {
	                    const notebookType = filter.notebook.notebookType ?? '*';
	                    result.push({ notebookType: notebookType, scheme: filter.notebook.scheme, pattern: filter.notebook.pattern, language: filter.language });
	                }
	            }
	            else if (vscode_languageserver_protocol_1.TextDocumentFilter.is(filter)) {
	                result.push({ language: filter.language, scheme: filter.scheme, pattern: filter.pattern });
	            }
	        }
	        return result;
	    }
	    async function asDiagnostics(diagnostics, token) {
	        return async.map(diagnostics, asDiagnostic, token);
	    }
	    function asDiagnosticsSync(diagnostics) {
	        const result = new Array(diagnostics.length);
	        for (let i = 0; i < diagnostics.length; i++) {
	            result[i] = asDiagnostic(diagnostics[i]);
	        }
	        return result;
	    }
	    function asDiagnostic(diagnostic) {
	        let result = new protocolDiagnostic_1.ProtocolDiagnostic(asRange(diagnostic.range), diagnostic.message, asDiagnosticSeverity(diagnostic.severity), diagnostic.data);
	        if (diagnostic.code !== undefined) {
	            if (typeof diagnostic.code === 'string' || typeof diagnostic.code === 'number') {
	                if (ls.CodeDescription.is(diagnostic.codeDescription)) {
	                    result.code = {
	                        value: diagnostic.code,
	                        target: asUri(diagnostic.codeDescription.href)
	                    };
	                }
	                else {
	                    result.code = diagnostic.code;
	                }
	            }
	            else if (protocolDiagnostic_1.DiagnosticCode.is(diagnostic.code)) {
	                // This is for backwards compatibility of a proposed API.
	                // We should remove this at some point.
	                result.hasDiagnosticCode = true;
	                const diagnosticCode = diagnostic.code;
	                result.code = {
	                    value: diagnosticCode.value,
	                    target: asUri(diagnosticCode.target)
	                };
	            }
	        }
	        if (diagnostic.source) {
	            result.source = diagnostic.source;
	        }
	        if (diagnostic.relatedInformation) {
	            result.relatedInformation = asRelatedInformation(diagnostic.relatedInformation);
	        }
	        if (Array.isArray(diagnostic.tags)) {
	            result.tags = asDiagnosticTags(diagnostic.tags);
	        }
	        return result;
	    }
	    function asRelatedInformation(relatedInformation) {
	        const result = new Array(relatedInformation.length);
	        for (let i = 0; i < relatedInformation.length; i++) {
	            const info = relatedInformation[i];
	            result[i] = new code.DiagnosticRelatedInformation(asLocation(info.location), info.message);
	        }
	        return result;
	    }
	    function asDiagnosticTags(tags) {
	        if (!tags) {
	            return undefined;
	        }
	        let result = [];
	        for (let tag of tags) {
	            let converted = asDiagnosticTag(tag);
	            if (converted !== undefined) {
	                result.push(converted);
	            }
	        }
	        return result.length > 0 ? result : undefined;
	    }
	    function asDiagnosticTag(tag) {
	        switch (tag) {
	            case ls.DiagnosticTag.Unnecessary:
	                return code.DiagnosticTag.Unnecessary;
	            case ls.DiagnosticTag.Deprecated:
	                return code.DiagnosticTag.Deprecated;
	            default:
	                return undefined;
	        }
	    }
	    function asPosition(value) {
	        return value ? new code.Position(value.line, value.character) : undefined;
	    }
	    function asRange(value) {
	        return value ? new code.Range(value.start.line, value.start.character, value.end.line, value.end.character) : undefined;
	    }
	    async function asRanges(items, token) {
	        return async.map(items, (range) => {
	            return new code.Range(range.start.line, range.start.character, range.end.line, range.end.character);
	        }, token);
	    }
	    function asDiagnosticSeverity(value) {
	        if (value === undefined || value === null) {
	            return code.DiagnosticSeverity.Error;
	        }
	        switch (value) {
	            case ls.DiagnosticSeverity.Error:
	                return code.DiagnosticSeverity.Error;
	            case ls.DiagnosticSeverity.Warning:
	                return code.DiagnosticSeverity.Warning;
	            case ls.DiagnosticSeverity.Information:
	                return code.DiagnosticSeverity.Information;
	            case ls.DiagnosticSeverity.Hint:
	                return code.DiagnosticSeverity.Hint;
	        }
	        return code.DiagnosticSeverity.Error;
	    }
	    function asHoverContent(value) {
	        if (Is.string(value)) {
	            return asMarkdownString(value);
	        }
	        else if (CodeBlock.is(value)) {
	            let result = asMarkdownString();
	            return result.appendCodeblock(value.value, value.language);
	        }
	        else if (Array.isArray(value)) {
	            let result = [];
	            for (let element of value) {
	                let item = asMarkdownString();
	                if (CodeBlock.is(element)) {
	                    item.appendCodeblock(element.value, element.language);
	                }
	                else {
	                    item.appendMarkdown(element);
	                }
	                result.push(item);
	            }
	            return result;
	        }
	        else {
	            return asMarkdownString(value);
	        }
	    }
	    function asDocumentation(value) {
	        if (Is.string(value)) {
	            return value;
	        }
	        else {
	            switch (value.kind) {
	                case ls.MarkupKind.Markdown:
	                    return asMarkdownString(value.value);
	                case ls.MarkupKind.PlainText:
	                    return value.value;
	                default:
	                    return `Unsupported Markup content received. Kind is: ${value.kind}`;
	            }
	        }
	    }
	    function asMarkdownString(value) {
	        let result;
	        if (value === undefined || typeof value === 'string') {
	            result = new code.MarkdownString(value);
	        }
	        else {
	            switch (value.kind) {
	                case ls.MarkupKind.Markdown:
	                    result = new code.MarkdownString(value.value);
	                    break;
	                case ls.MarkupKind.PlainText:
	                    result = new code.MarkdownString();
	                    result.appendText(value.value);
	                    break;
	                default:
	                    result = new code.MarkdownString();
	                    result.appendText(`Unsupported Markup content received. Kind is: ${value.kind}`);
	                    break;
	            }
	        }
	        result.isTrusted = trustMarkdown;
	        result.supportHtml = supportHtml;
	        return result;
	    }
	    function asHover(hover) {
	        if (!hover) {
	            return undefined;
	        }
	        return new code.Hover(asHoverContent(hover.contents), asRange(hover.range));
	    }
	    async function asCompletionResult(value, allCommitCharacters, token) {
	        if (!value) {
	            return undefined;
	        }
	        if (Array.isArray(value)) {
	            return async.map(value, (item) => asCompletionItem(item, allCommitCharacters), token);
	        }
	        const list = value;
	        const { defaultRange, commitCharacters } = getCompletionItemDefaults(list, allCommitCharacters);
	        const converted = await async.map(list.items, (item) => {
	            return asCompletionItem(item, commitCharacters, defaultRange, list.itemDefaults?.insertTextMode, list.itemDefaults?.insertTextFormat, list.itemDefaults?.data);
	        }, token);
	        return new code.CompletionList(converted, list.isIncomplete);
	    }
	    function getCompletionItemDefaults(list, allCommitCharacters) {
	        const rangeDefaults = list.itemDefaults?.editRange;
	        const commitCharacters = list.itemDefaults?.commitCharacters ?? allCommitCharacters;
	        return ls.Range.is(rangeDefaults)
	            ? { defaultRange: asRange(rangeDefaults), commitCharacters }
	            : rangeDefaults !== undefined
	                ? { defaultRange: { inserting: asRange(rangeDefaults.insert), replacing: asRange(rangeDefaults.replace) }, commitCharacters }
	                : { defaultRange: undefined, commitCharacters };
	    }
	    function asCompletionItemKind(value) {
	        // Protocol item kind is 1 based, codes item kind is zero based.
	        if (ls.CompletionItemKind.Text <= value && value <= ls.CompletionItemKind.TypeParameter) {
	            return [value - 1, undefined];
	        }
	        return [code.CompletionItemKind.Text, value];
	    }
	    function asCompletionItemTag(tag) {
	        switch (tag) {
	            case ls.CompletionItemTag.Deprecated:
	                return code.CompletionItemTag.Deprecated;
	        }
	        return undefined;
	    }
	    function asCompletionItemTags(tags) {
	        if (tags === undefined || tags === null) {
	            return [];
	        }
	        const result = [];
	        for (const tag of tags) {
	            const converted = asCompletionItemTag(tag);
	            if (converted !== undefined) {
	                result.push(converted);
	            }
	        }
	        return result;
	    }
	    function asCompletionItem(item, defaultCommitCharacters, defaultRange, defaultInsertTextMode, defaultInsertTextFormat, defaultData) {
	        const tags = asCompletionItemTags(item.tags);
	        const label = asCompletionItemLabel(item);
	        const result = new protocolCompletionItem_1.default(label);
	        if (item.detail) {
	            result.detail = item.detail;
	        }
	        if (item.documentation) {
	            result.documentation = asDocumentation(item.documentation);
	            result.documentationFormat = Is.string(item.documentation) ? '$string' : item.documentation.kind;
	        }
	        if (item.filterText) {
	            result.filterText = item.filterText;
	        }
	        const insertText = asCompletionInsertText(item, defaultRange, defaultInsertTextFormat);
	        if (insertText) {
	            result.insertText = insertText.text;
	            result.range = insertText.range;
	            result.fromEdit = insertText.fromEdit;
	        }
	        if (Is.number(item.kind)) {
	            let [itemKind, original] = asCompletionItemKind(item.kind);
	            result.kind = itemKind;
	            if (original) {
	                result.originalItemKind = original;
	            }
	        }
	        if (item.sortText) {
	            result.sortText = item.sortText;
	        }
	        if (item.additionalTextEdits) {
	            result.additionalTextEdits = asTextEditsSync(item.additionalTextEdits);
	        }
	        const commitCharacters = item.commitCharacters !== undefined
	            ? Is.stringArray(item.commitCharacters) ? item.commitCharacters : undefined
	            : defaultCommitCharacters;
	        if (commitCharacters) {
	            result.commitCharacters = commitCharacters.slice();
	        }
	        if (item.command) {
	            result.command = asCommand(item.command);
	        }
	        if (item.deprecated === true || item.deprecated === false) {
	            result.deprecated = item.deprecated;
	            if (item.deprecated === true) {
	                tags.push(code.CompletionItemTag.Deprecated);
	            }
	        }
	        if (item.preselect === true || item.preselect === false) {
	            result.preselect = item.preselect;
	        }
	        const data = item.data ?? defaultData;
	        if (data !== undefined) {
	            result.data = data;
	        }
	        if (tags.length > 0) {
	            result.tags = tags;
	        }
	        const insertTextMode = item.insertTextMode ?? defaultInsertTextMode;
	        if (insertTextMode !== undefined) {
	            result.insertTextMode = insertTextMode;
	            if (insertTextMode === ls.InsertTextMode.asIs) {
	                result.keepWhitespace = true;
	            }
	        }
	        return result;
	    }
	    function asCompletionItemLabel(item) {
	        if (ls.CompletionItemLabelDetails.is(item.labelDetails)) {
	            return {
	                label: item.label,
	                detail: item.labelDetails.detail,
	                description: item.labelDetails.description
	            };
	        }
	        else {
	            return item.label;
	        }
	    }
	    function asCompletionInsertText(item, defaultRange, defaultInsertTextFormat) {
	        const insertTextFormat = item.insertTextFormat ?? defaultInsertTextFormat;
	        if (item.textEdit !== undefined || defaultRange !== undefined) {
	            const [range, newText] = item.textEdit !== undefined
	                ? getCompletionRangeAndText(item.textEdit)
	                : [defaultRange, item.textEditText ?? item.label];
	            if (insertTextFormat === ls.InsertTextFormat.Snippet) {
	                return { text: new code.SnippetString(newText), range: range, fromEdit: true };
	            }
	            else {
	                return { text: newText, range: range, fromEdit: true };
	            }
	        }
	        else if (item.insertText) {
	            if (insertTextFormat === ls.InsertTextFormat.Snippet) {
	                return { text: new code.SnippetString(item.insertText), fromEdit: false };
	            }
	            else {
	                return { text: item.insertText, fromEdit: false };
	            }
	        }
	        else {
	            return undefined;
	        }
	    }
	    function getCompletionRangeAndText(value) {
	        if (ls.InsertReplaceEdit.is(value)) {
	            return [{ inserting: asRange(value.insert), replacing: asRange(value.replace) }, value.newText];
	        }
	        else {
	            return [asRange(value.range), value.newText];
	        }
	    }
	    function asTextEdit(edit) {
	        if (!edit) {
	            return undefined;
	        }
	        return new code.TextEdit(asRange(edit.range), edit.newText);
	    }
	    async function asTextEdits(items, token) {
	        if (!items) {
	            return undefined;
	        }
	        return async.map(items, asTextEdit, token);
	    }
	    function asTextEditsSync(items) {
	        if (!items) {
	            return undefined;
	        }
	        const result = new Array(items.length);
	        for (let i = 0; i < items.length; i++) {
	            result[i] = asTextEdit(items[i]);
	        }
	        return result;
	    }
	    async function asSignatureHelp(item, token) {
	        if (!item) {
	            return undefined;
	        }
	        let result = new code.SignatureHelp();
	        if (Is.number(item.activeSignature)) {
	            result.activeSignature = item.activeSignature;
	        }
	        else {
	            // activeSignature was optional in the past
	            result.activeSignature = 0;
	        }
	        if (Is.number(item.activeParameter)) {
	            result.activeParameter = item.activeParameter;
	        }
	        else {
	            // activeParameter was optional in the past
	            result.activeParameter = 0;
	        }
	        if (item.signatures) {
	            result.signatures = await asSignatureInformations(item.signatures, token);
	        }
	        return result;
	    }
	    async function asSignatureInformations(items, token) {
	        return async.mapAsync(items, asSignatureInformation, token);
	    }
	    async function asSignatureInformation(item, token) {
	        let result = new code.SignatureInformation(item.label);
	        if (item.documentation !== undefined) {
	            result.documentation = asDocumentation(item.documentation);
	        }
	        if (item.parameters !== undefined) {
	            result.parameters = await asParameterInformations(item.parameters, token);
	        }
	        if (item.activeParameter !== undefined) {
	            result.activeParameter = item.activeParameter;
	        }
	        {
	            return result;
	        }
	    }
	    function asParameterInformations(items, token) {
	        return async.map(items, asParameterInformation, token);
	    }
	    function asParameterInformation(item) {
	        let result = new code.ParameterInformation(item.label);
	        if (item.documentation) {
	            result.documentation = asDocumentation(item.documentation);
	        }
	        return result;
	    }
	    function asLocation(item) {
	        return item ? new code.Location(_uriConverter(item.uri), asRange(item.range)) : undefined;
	    }
	    async function asDeclarationResult(item, token) {
	        if (!item) {
	            return undefined;
	        }
	        return asLocationResult(item, token);
	    }
	    async function asDefinitionResult(item, token) {
	        if (!item) {
	            return undefined;
	        }
	        return asLocationResult(item, token);
	    }
	    function asLocationLink(item) {
	        if (!item) {
	            return undefined;
	        }
	        let result = {
	            targetUri: _uriConverter(item.targetUri),
	            targetRange: asRange(item.targetRange),
	            originSelectionRange: asRange(item.originSelectionRange),
	            targetSelectionRange: asRange(item.targetSelectionRange)
	        };
	        if (!result.targetSelectionRange) {
	            throw new Error(`targetSelectionRange must not be undefined or null`);
	        }
	        return result;
	    }
	    async function asLocationResult(item, token) {
	        if (!item) {
	            return undefined;
	        }
	        if (Is.array(item)) {
	            if (item.length === 0) {
	                return [];
	            }
	            else if (ls.LocationLink.is(item[0])) {
	                const links = item;
	                return async.map(links, asLocationLink, token);
	            }
	            else {
	                const locations = item;
	                return async.map(locations, asLocation, token);
	            }
	        }
	        else if (ls.LocationLink.is(item)) {
	            return [asLocationLink(item)];
	        }
	        else {
	            return asLocation(item);
	        }
	    }
	    async function asReferences(values, token) {
	        if (!values) {
	            return undefined;
	        }
	        return async.map(values, asLocation, token);
	    }
	    async function asDocumentHighlights(values, token) {
	        if (!values) {
	            return undefined;
	        }
	        return async.map(values, asDocumentHighlight, token);
	    }
	    function asDocumentHighlight(item) {
	        let result = new code.DocumentHighlight(asRange(item.range));
	        if (Is.number(item.kind)) {
	            result.kind = asDocumentHighlightKind(item.kind);
	        }
	        return result;
	    }
	    function asDocumentHighlightKind(item) {
	        switch (item) {
	            case ls.DocumentHighlightKind.Text:
	                return code.DocumentHighlightKind.Text;
	            case ls.DocumentHighlightKind.Read:
	                return code.DocumentHighlightKind.Read;
	            case ls.DocumentHighlightKind.Write:
	                return code.DocumentHighlightKind.Write;
	        }
	        return code.DocumentHighlightKind.Text;
	    }
	    async function asSymbolInformations(values, token) {
	        if (!values) {
	            return undefined;
	        }
	        return async.map(values, asSymbolInformation, token);
	    }
	    function asSymbolKind(item) {
	        if (item <= ls.SymbolKind.TypeParameter) {
	            // Symbol kind is one based in the protocol and zero based in code.
	            return item - 1;
	        }
	        return code.SymbolKind.Property;
	    }
	    function asSymbolTag(value) {
	        switch (value) {
	            case ls.SymbolTag.Deprecated:
	                return code.SymbolTag.Deprecated;
	            default:
	                return undefined;
	        }
	    }
	    function asSymbolTags(items) {
	        if (items === undefined || items === null) {
	            return undefined;
	        }
	        const result = [];
	        for (const item of items) {
	            const converted = asSymbolTag(item);
	            if (converted !== undefined) {
	                result.push(converted);
	            }
	        }
	        return result.length === 0 ? undefined : result;
	    }
	    function asSymbolInformation(item) {
	        const data = item.data;
	        const location = item.location;
	        const result = location.range === undefined || data !== undefined
	            ? new protocolWorkspaceSymbol_1.default(item.name, asSymbolKind(item.kind), item.containerName ?? '', location.range === undefined ? _uriConverter(location.uri) : new code.Location(_uriConverter(item.location.uri), asRange(location.range)), data)
	            : new code.SymbolInformation(item.name, asSymbolKind(item.kind), item.containerName ?? '', new code.Location(_uriConverter(item.location.uri), asRange(location.range)));
	        fillTags(result, item);
	        return result;
	    }
	    async function asDocumentSymbols(values, token) {
	        if (values === undefined || values === null) {
	            return undefined;
	        }
	        return async.map(values, asDocumentSymbol, token);
	    }
	    function asDocumentSymbol(value) {
	        let result = new code.DocumentSymbol(value.name, value.detail || '', asSymbolKind(value.kind), asRange(value.range), asRange(value.selectionRange));
	        fillTags(result, value);
	        if (value.children !== undefined && value.children.length > 0) {
	            let children = [];
	            for (let child of value.children) {
	                children.push(asDocumentSymbol(child));
	            }
	            result.children = children;
	        }
	        return result;
	    }
	    function fillTags(result, value) {
	        result.tags = asSymbolTags(value.tags);
	        if (value.deprecated) {
	            if (!result.tags) {
	                result.tags = [code.SymbolTag.Deprecated];
	            }
	            else {
	                if (!result.tags.includes(code.SymbolTag.Deprecated)) {
	                    result.tags = result.tags.concat(code.SymbolTag.Deprecated);
	                }
	            }
	        }
	    }
	    function asCommand(item) {
	        let result = { title: item.title, command: item.command };
	        if (item.arguments) {
	            result.arguments = item.arguments;
	        }
	        return result;
	    }
	    async function asCommands(items, token) {
	        if (!items) {
	            return undefined;
	        }
	        return async.map(items, asCommand, token);
	    }
	    const kindMapping = new Map();
	    kindMapping.set(ls.CodeActionKind.Empty, code.CodeActionKind.Empty);
	    kindMapping.set(ls.CodeActionKind.QuickFix, code.CodeActionKind.QuickFix);
	    kindMapping.set(ls.CodeActionKind.Refactor, code.CodeActionKind.Refactor);
	    kindMapping.set(ls.CodeActionKind.RefactorExtract, code.CodeActionKind.RefactorExtract);
	    kindMapping.set(ls.CodeActionKind.RefactorInline, code.CodeActionKind.RefactorInline);
	    kindMapping.set(ls.CodeActionKind.RefactorRewrite, code.CodeActionKind.RefactorRewrite);
	    kindMapping.set(ls.CodeActionKind.Source, code.CodeActionKind.Source);
	    kindMapping.set(ls.CodeActionKind.SourceOrganizeImports, code.CodeActionKind.SourceOrganizeImports);
	    function asCodeActionKind(item) {
	        if (item === undefined || item === null) {
	            return undefined;
	        }
	        let result = kindMapping.get(item);
	        if (result) {
	            return result;
	        }
	        let parts = item.split('.');
	        result = code.CodeActionKind.Empty;
	        for (let part of parts) {
	            result = result.append(part);
	        }
	        return result;
	    }
	    function asCodeActionKinds(items) {
	        if (items === undefined || items === null) {
	            return undefined;
	        }
	        return items.map(kind => asCodeActionKind(kind));
	    }
	    async function asCodeAction(item, token) {
	        if (item === undefined || item === null) {
	            return undefined;
	        }
	        let result = new protocolCodeAction_1.default(item.title, item.data);
	        if (item.kind !== undefined) {
	            result.kind = asCodeActionKind(item.kind);
	        }
	        if (item.diagnostics !== undefined) {
	            result.diagnostics = asDiagnosticsSync(item.diagnostics);
	        }
	        if (item.edit !== undefined) {
	            result.edit = await asWorkspaceEdit(item.edit, token);
	        }
	        if (item.command !== undefined) {
	            result.command = asCommand(item.command);
	        }
	        if (item.isPreferred !== undefined) {
	            result.isPreferred = item.isPreferred;
	        }
	        if (item.disabled !== undefined) {
	            result.disabled = { reason: item.disabled.reason };
	        }
	        return result;
	    }
	    function asCodeActionResult(items, token) {
	        return async.mapAsync(items, async (item) => {
	            if (ls.Command.is(item)) {
	                return asCommand(item);
	            }
	            else {
	                return asCodeAction(item, token);
	            }
	        }, token);
	    }
	    function asCodeLens(item) {
	        if (!item) {
	            return undefined;
	        }
	        let result = new protocolCodeLens_1.default(asRange(item.range));
	        if (item.command) {
	            result.command = asCommand(item.command);
	        }
	        if (item.data !== undefined && item.data !== null) {
	            result.data = item.data;
	        }
	        return result;
	    }
	    async function asCodeLenses(items, token) {
	        if (!items) {
	            return undefined;
	        }
	        return async.map(items, asCodeLens, token);
	    }
	    async function asWorkspaceEdit(item, token) {
	        if (!item) {
	            return undefined;
	        }
	        const sharedMetadata = new Map();
	        if (item.changeAnnotations !== undefined) {
	            const changeAnnotations = item.changeAnnotations;
	            await async.forEach(Object.keys(changeAnnotations), (key) => {
	                const metaData = asWorkspaceEditEntryMetadata(changeAnnotations[key]);
	                sharedMetadata.set(key, metaData);
	            }, token);
	        }
	        const asMetadata = (annotation) => {
	            if (annotation === undefined) {
	                return undefined;
	            }
	            else {
	                return sharedMetadata.get(annotation);
	            }
	        };
	        const result = new code.WorkspaceEdit();
	        if (item.documentChanges) {
	            const documentChanges = item.documentChanges;
	            await async.forEach(documentChanges, (change) => {
	                if (ls.CreateFile.is(change)) {
	                    result.createFile(_uriConverter(change.uri), change.options, asMetadata(change.annotationId));
	                }
	                else if (ls.RenameFile.is(change)) {
	                    result.renameFile(_uriConverter(change.oldUri), _uriConverter(change.newUri), change.options, asMetadata(change.annotationId));
	                }
	                else if (ls.DeleteFile.is(change)) {
	                    result.deleteFile(_uriConverter(change.uri), change.options, asMetadata(change.annotationId));
	                }
	                else if (ls.TextDocumentEdit.is(change)) {
	                    const uri = _uriConverter(change.textDocument.uri);
	                    for (const edit of change.edits) {
	                        if (ls.AnnotatedTextEdit.is(edit)) {
	                            result.replace(uri, asRange(edit.range), edit.newText, asMetadata(edit.annotationId));
	                        }
	                        else {
	                            result.replace(uri, asRange(edit.range), edit.newText);
	                        }
	                    }
	                }
	                else {
	                    throw new Error(`Unknown workspace edit change received:\n${JSON.stringify(change, undefined, 4)}`);
	                }
	            }, token);
	        }
	        else if (item.changes) {
	            const changes = item.changes;
	            await async.forEach(Object.keys(changes), (key) => {
	                result.set(_uriConverter(key), asTextEditsSync(changes[key]));
	            }, token);
	        }
	        return result;
	    }
	    function asWorkspaceEditEntryMetadata(annotation) {
	        if (annotation === undefined) {
	            return undefined;
	        }
	        return { label: annotation.label, needsConfirmation: !!annotation.needsConfirmation, description: annotation.description };
	    }
	    function asDocumentLink(item) {
	        let range = asRange(item.range);
	        let target = item.target ? asUri(item.target) : undefined;
	        // target must be optional in DocumentLink
	        let link = new protocolDocumentLink_1.default(range, target);
	        if (item.tooltip !== undefined) {
	            link.tooltip = item.tooltip;
	        }
	        if (item.data !== undefined && item.data !== null) {
	            link.data = item.data;
	        }
	        return link;
	    }
	    async function asDocumentLinks(items, token) {
	        if (!items) {
	            return undefined;
	        }
	        return async.map(items, asDocumentLink, token);
	    }
	    function asColor(color) {
	        return new code.Color(color.red, color.green, color.blue, color.alpha);
	    }
	    function asColorInformation(ci) {
	        return new code.ColorInformation(asRange(ci.range), asColor(ci.color));
	    }
	    async function asColorInformations(colorInformation, token) {
	        if (!colorInformation) {
	            return undefined;
	        }
	        return async.map(colorInformation, asColorInformation, token);
	    }
	    function asColorPresentation(cp) {
	        let presentation = new code.ColorPresentation(cp.label);
	        presentation.additionalTextEdits = asTextEditsSync(cp.additionalTextEdits);
	        if (cp.textEdit) {
	            presentation.textEdit = asTextEdit(cp.textEdit);
	        }
	        return presentation;
	    }
	    async function asColorPresentations(colorPresentations, token) {
	        if (!colorPresentations) {
	            return undefined;
	        }
	        return async.map(colorPresentations, asColorPresentation, token);
	    }
	    function asFoldingRangeKind(kind) {
	        if (kind) {
	            switch (kind) {
	                case ls.FoldingRangeKind.Comment:
	                    return code.FoldingRangeKind.Comment;
	                case ls.FoldingRangeKind.Imports:
	                    return code.FoldingRangeKind.Imports;
	                case ls.FoldingRangeKind.Region:
	                    return code.FoldingRangeKind.Region;
	            }
	        }
	        return undefined;
	    }
	    function asFoldingRange(r) {
	        return new code.FoldingRange(r.startLine, r.endLine, asFoldingRangeKind(r.kind));
	    }
	    async function asFoldingRanges(foldingRanges, token) {
	        if (!foldingRanges) {
	            return undefined;
	        }
	        return async.map(foldingRanges, asFoldingRange, token);
	    }
	    function asSelectionRange(selectionRange) {
	        return new code.SelectionRange(asRange(selectionRange.range), selectionRange.parent ? asSelectionRange(selectionRange.parent) : undefined);
	    }
	    async function asSelectionRanges(selectionRanges, token) {
	        if (!Array.isArray(selectionRanges)) {
	            return [];
	        }
	        return async.map(selectionRanges, asSelectionRange, token);
	    }
	    function asInlineValue(inlineValue) {
	        if (ls.InlineValueText.is(inlineValue)) {
	            return new code.InlineValueText(asRange(inlineValue.range), inlineValue.text);
	        }
	        else if (ls.InlineValueVariableLookup.is(inlineValue)) {
	            return new code.InlineValueVariableLookup(asRange(inlineValue.range), inlineValue.variableName, inlineValue.caseSensitiveLookup);
	        }
	        else {
	            return new code.InlineValueEvaluatableExpression(asRange(inlineValue.range), inlineValue.expression);
	        }
	    }
	    async function asInlineValues(inlineValues, token) {
	        if (!Array.isArray(inlineValues)) {
	            return [];
	        }
	        return async.map(inlineValues, asInlineValue, token);
	    }
	    async function asInlayHint(value, token) {
	        const label = typeof value.label === 'string'
	            ? value.label
	            : await async.map(value.label, asInlayHintLabelPart, token);
	        const result = new protocolInlayHint_1.default(asPosition(value.position), label);
	        if (value.kind !== undefined) {
	            result.kind = value.kind;
	        }
	        if (value.textEdits !== undefined) {
	            result.textEdits = await asTextEdits(value.textEdits, token);
	        }
	        if (value.tooltip !== undefined) {
	            result.tooltip = asTooltip(value.tooltip);
	        }
	        if (value.paddingLeft !== undefined) {
	            result.paddingLeft = value.paddingLeft;
	        }
	        if (value.paddingRight !== undefined) {
	            result.paddingRight = value.paddingRight;
	        }
	        if (value.data !== undefined) {
	            result.data = value.data;
	        }
	        return result;
	    }
	    function asInlayHintLabelPart(part) {
	        const result = new code.InlayHintLabelPart(part.value);
	        if (part.location !== undefined) {
	            result.location = asLocation(part.location);
	        }
	        if (part.tooltip !== undefined) {
	            result.tooltip = asTooltip(part.tooltip);
	        }
	        if (part.command !== undefined) {
	            result.command = asCommand(part.command);
	        }
	        return result;
	    }
	    function asTooltip(value) {
	        if (typeof value === 'string') {
	            return value;
	        }
	        return asMarkdownString(value);
	    }
	    async function asInlayHints(values, token) {
	        if (!Array.isArray(values)) {
	            return undefined;
	        }
	        return async.mapAsync(values, asInlayHint, token);
	    }
	    function asCallHierarchyItem(item) {
	        if (item === null) {
	            return undefined;
	        }
	        const result = new protocolCallHierarchyItem_1.default(asSymbolKind(item.kind), item.name, item.detail || '', asUri(item.uri), asRange(item.range), asRange(item.selectionRange), item.data);
	        if (item.tags !== undefined) {
	            result.tags = asSymbolTags(item.tags);
	        }
	        return result;
	    }
	    async function asCallHierarchyItems(items, token) {
	        if (items === null) {
	            return undefined;
	        }
	        return async.map(items, asCallHierarchyItem, token);
	    }
	    async function asCallHierarchyIncomingCall(item, token) {
	        return new code.CallHierarchyIncomingCall(asCallHierarchyItem(item.from), await asRanges(item.fromRanges, token));
	    }
	    async function asCallHierarchyIncomingCalls(items, token) {
	        if (items === null) {
	            return undefined;
	        }
	        return async.mapAsync(items, asCallHierarchyIncomingCall, token);
	    }
	    async function asCallHierarchyOutgoingCall(item, token) {
	        return new code.CallHierarchyOutgoingCall(asCallHierarchyItem(item.to), await asRanges(item.fromRanges, token));
	    }
	    async function asCallHierarchyOutgoingCalls(items, token) {
	        if (items === null) {
	            return undefined;
	        }
	        return async.mapAsync(items, asCallHierarchyOutgoingCall, token);
	    }
	    async function asSemanticTokens(value, _token) {
	        if (value === undefined || value === null) {
	            return undefined;
	        }
	        return new code.SemanticTokens(new Uint32Array(value.data), value.resultId);
	    }
	    function asSemanticTokensEdit(value) {
	        return new code.SemanticTokensEdit(value.start, value.deleteCount, value.data !== undefined ? new Uint32Array(value.data) : undefined);
	    }
	    async function asSemanticTokensEdits(value, _token) {
	        if (value === undefined || value === null) {
	            return undefined;
	        }
	        return new code.SemanticTokensEdits(value.edits.map(asSemanticTokensEdit), value.resultId);
	    }
	    function asSemanticTokensLegend(value) {
	        return value;
	    }
	    async function asLinkedEditingRanges(value, token) {
	        if (value === null || value === undefined) {
	            return undefined;
	        }
	        return new code.LinkedEditingRanges(await asRanges(value.ranges, token), asRegularExpression(value.wordPattern));
	    }
	    function asRegularExpression(value) {
	        if (value === null || value === undefined) {
	            return undefined;
	        }
	        return new RegExp(value);
	    }
	    function asTypeHierarchyItem(item) {
	        if (item === null) {
	            return undefined;
	        }
	        let result = new protocolTypeHierarchyItem_1.default(asSymbolKind(item.kind), item.name, item.detail || '', asUri(item.uri), asRange(item.range), asRange(item.selectionRange), item.data);
	        if (item.tags !== undefined) {
	            result.tags = asSymbolTags(item.tags);
	        }
	        return result;
	    }
	    async function asTypeHierarchyItems(items, token) {
	        if (items === null) {
	            return undefined;
	        }
	        return async.map(items, asTypeHierarchyItem, token);
	    }
	    function asGlobPattern(pattern) {
	        if (Is.string(pattern)) {
	            return pattern;
	        }
	        if (ls.RelativePattern.is(pattern)) {
	            if (ls.URI.is(pattern.baseUri)) {
	                return new code.RelativePattern(asUri(pattern.baseUri), pattern.pattern);
	            }
	            else if (ls.WorkspaceFolder.is(pattern.baseUri)) {
	                const workspaceFolder = code.workspace.getWorkspaceFolder(asUri(pattern.baseUri.uri));
	                return workspaceFolder !== undefined ? new code.RelativePattern(workspaceFolder, pattern.pattern) : undefined;
	            }
	        }
	        return undefined;
	    }
	    async function asInlineCompletionResult(value, token) {
	        if (!value) {
	            return undefined;
	        }
	        if (Array.isArray(value)) {
	            return async.map(value, (item) => asInlineCompletionItem(item), token);
	        }
	        const list = value;
	        const converted = await async.map(list.items, (item) => {
	            return asInlineCompletionItem(item);
	        }, token);
	        return new code.InlineCompletionList(converted);
	    }
	    function asInlineCompletionItem(item) {
	        let insertText;
	        if (typeof item.insertText === 'string') {
	            insertText = item.insertText;
	        }
	        else {
	            insertText = new code.SnippetString(item.insertText.value);
	        }
	        let command = undefined;
	        if (item.command) {
	            command = asCommand(item.command);
	        }
	        const inlineCompletionItem = new code.InlineCompletionItem(insertText, asRange(item.range), command);
	        if (item.filterText) {
	            inlineCompletionItem.filterText = item.filterText;
	        }
	        return inlineCompletionItem;
	    }
	    return {
	        asUri,
	        asDocumentSelector,
	        asDiagnostics,
	        asDiagnostic,
	        asRange,
	        asRanges,
	        asPosition,
	        asDiagnosticSeverity,
	        asDiagnosticTag,
	        asHover,
	        asCompletionResult,
	        asCompletionItem,
	        asTextEdit,
	        asTextEdits,
	        asSignatureHelp,
	        asSignatureInformations,
	        asSignatureInformation,
	        asParameterInformations,
	        asParameterInformation,
	        asDeclarationResult,
	        asDefinitionResult,
	        asLocation,
	        asReferences,
	        asDocumentHighlights,
	        asDocumentHighlight,
	        asDocumentHighlightKind,
	        asSymbolKind,
	        asSymbolTag,
	        asSymbolTags,
	        asSymbolInformations,
	        asSymbolInformation,
	        asDocumentSymbols,
	        asDocumentSymbol,
	        asCommand,
	        asCommands,
	        asCodeAction,
	        asCodeActionKind,
	        asCodeActionKinds,
	        asCodeActionResult,
	        asCodeLens,
	        asCodeLenses,
	        asWorkspaceEdit,
	        asDocumentLink,
	        asDocumentLinks,
	        asFoldingRangeKind,
	        asFoldingRange,
	        asFoldingRanges,
	        asColor,
	        asColorInformation,
	        asColorInformations,
	        asColorPresentation,
	        asColorPresentations,
	        asSelectionRange,
	        asSelectionRanges,
	        asInlineValue,
	        asInlineValues,
	        asInlayHint,
	        asInlayHints,
	        asSemanticTokensLegend,
	        asSemanticTokens,
	        asSemanticTokensEdit,
	        asSemanticTokensEdits,
	        asCallHierarchyItem,
	        asCallHierarchyItems,
	        asCallHierarchyIncomingCall,
	        asCallHierarchyIncomingCalls,
	        asCallHierarchyOutgoingCall,
	        asCallHierarchyOutgoingCalls,
	        asLinkedEditingRanges: asLinkedEditingRanges,
	        asTypeHierarchyItem,
	        asTypeHierarchyItems,
	        asGlobPattern,
	        asInlineCompletionResult,
	        asInlineCompletionItem
	    };
	}
	protocolConverter.createConverter = createConverter;
	return protocolConverter;
}

var uuid = {};

var hasRequiredUuid;

function requireUuid () {
	if (hasRequiredUuid) return uuid;
	hasRequiredUuid = 1;
	/*---------------------------------------------------------------------------------------------
	 *  Copyright (c) Microsoft Corporation. All rights reserved.
	 *  Licensed under the MIT License. See License.txt in the project root for license information.
	 *--------------------------------------------------------------------------------------------*/
	Object.defineProperty(uuid, "__esModule", { value: true });
	uuid.generateUuid = uuid.parse = uuid.isUUID = uuid.v4 = uuid.empty = void 0;
	class ValueUUID {
	    constructor(_value) {
	        this._value = _value;
	        // empty
	    }
	    asHex() {
	        return this._value;
	    }
	    equals(other) {
	        return this.asHex() === other.asHex();
	    }
	}
	class V4UUID extends ValueUUID {
	    static _oneOf(array) {
	        return array[Math.floor(array.length * Math.random())];
	    }
	    static _randomHex() {
	        return V4UUID._oneOf(V4UUID._chars);
	    }
	    constructor() {
	        super([
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            '-',
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            '-',
	            '4',
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            '-',
	            V4UUID._oneOf(V4UUID._timeHighBits),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            '-',
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	            V4UUID._randomHex(),
	        ].join(''));
	    }
	}
	V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
	V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
	/**
	 * An empty UUID that contains only zeros.
	 */
	uuid.empty = new ValueUUID('00000000-0000-0000-0000-000000000000');
	function v4() {
	    return new V4UUID();
	}
	uuid.v4 = v4;
	const _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
	function isUUID(value) {
	    return _UUIDPattern.test(value);
	}
	uuid.isUUID = isUUID;
	/**
	 * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
	 * @param value A uuid string.
	 */
	function parse(value) {
	    if (!isUUID(value)) {
	        throw new Error('invalid uuid');
	    }
	    return new ValueUUID(value);
	}
	uuid.parse = parse;
	function generateUuid() {
	    return v4().asHex();
	}
	uuid.generateUuid = generateUuid;
	return uuid;
}

var progressPart = {};

var hasRequiredProgressPart;

function requireProgressPart () {
	if (hasRequiredProgressPart) return progressPart;
	hasRequiredProgressPart = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(progressPart, "__esModule", { value: true });
	progressPart.ProgressPart = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const Is = requireIs$2();
	class ProgressPart {
	    constructor(_client, _token, done) {
	        this._client = _client;
	        this._token = _token;
	        this._reported = 0;
	        this._infinite = false;
	        this._lspProgressDisposable = this._client.onProgress(vscode_languageserver_protocol_1.WorkDoneProgress.type, this._token, (value) => {
	            switch (value.kind) {
	                case 'begin':
	                    this.begin(value);
	                    break;
	                case 'report':
	                    this.report(value);
	                    break;
	                case 'end':
	                    this.done();
	                    done && done(this);
	                    break;
	            }
	        });
	    }
	    begin(params) {
	        this._infinite = params.percentage === undefined;
	        // the progress as already been marked as done / canceled. Ignore begin call
	        if (this._lspProgressDisposable === undefined) {
	            return;
	        }
	        // Since we don't use commands this will be a silent window progress with a hidden notification.
	        void vscode_1.window.withProgress({ location: vscode_1.ProgressLocation.Window, cancellable: params.cancellable, title: params.title }, async (progress, cancellationToken) => {
	            // the progress as already been marked as done / canceled. Ignore begin call
	            if (this._lspProgressDisposable === undefined) {
	                return;
	            }
	            this._progress = progress;
	            this._cancellationToken = cancellationToken;
	            this._tokenDisposable = this._cancellationToken.onCancellationRequested(() => {
	                this._client.sendNotification(vscode_languageserver_protocol_1.WorkDoneProgressCancelNotification.type, { token: this._token });
	            });
	            this.report(params);
	            return new Promise((resolve, reject) => {
	                this._resolve = resolve;
	                this._reject = reject;
	            });
	        });
	    }
	    report(params) {
	        if (this._infinite && Is.string(params.message)) {
	            this._progress !== undefined && this._progress.report({ message: params.message });
	        }
	        else if (Is.number(params.percentage)) {
	            const percentage = Math.max(0, Math.min(params.percentage, 100));
	            const delta = Math.max(0, percentage - this._reported);
	            this._reported += delta;
	            this._progress !== undefined && this._progress.report({ message: params.message, increment: delta });
	        }
	    }
	    cancel() {
	        this.cleanup();
	        if (this._reject !== undefined) {
	            this._reject();
	            this._resolve = undefined;
	            this._reject = undefined;
	        }
	    }
	    done() {
	        this.cleanup();
	        if (this._resolve !== undefined) {
	            this._resolve();
	            this._resolve = undefined;
	            this._reject = undefined;
	        }
	    }
	    cleanup() {
	        if (this._lspProgressDisposable !== undefined) {
	            this._lspProgressDisposable.dispose();
	            this._lspProgressDisposable = undefined;
	        }
	        if (this._tokenDisposable !== undefined) {
	            this._tokenDisposable.dispose();
	            this._tokenDisposable = undefined;
	        }
	        this._progress = undefined;
	        this._cancellationToken = undefined;
	    }
	}
	progressPart.ProgressPart = ProgressPart;
	return progressPart;
}

var features = {};

var hasRequiredFeatures;

function requireFeatures () {
	if (hasRequiredFeatures) return features;
	hasRequiredFeatures = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(features, "__esModule", { value: true });
	features.WorkspaceFeature = features.TextDocumentLanguageFeature = features.TextDocumentEventFeature = features.DynamicDocumentFeature = features.DynamicFeature = features.StaticFeature = features.ensure = features.LSPCancellationError = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const Is = requireIs$2();
	const UUID = requireUuid();
	class LSPCancellationError extends vscode_1.CancellationError {
	    constructor(data) {
	        super();
	        this.data = data;
	    }
	}
	features.LSPCancellationError = LSPCancellationError;
	function ensure(target, key) {
	    if (target[key] === undefined) {
	        target[key] = {};
	    }
	    return target[key];
	}
	features.ensure = ensure;
	var StaticFeature;
	(function (StaticFeature) {
	    function is(value) {
	        const candidate = value;
	        return candidate !== undefined && candidate !== null &&
	            Is.func(candidate.fillClientCapabilities) && Is.func(candidate.initialize) && Is.func(candidate.getState) && Is.func(candidate.clear) &&
	            (candidate.fillInitializeParams === undefined || Is.func(candidate.fillInitializeParams));
	    }
	    StaticFeature.is = is;
	})(StaticFeature || (features.StaticFeature = StaticFeature = {}));
	var DynamicFeature;
	(function (DynamicFeature) {
	    function is(value) {
	        const candidate = value;
	        return candidate !== undefined && candidate !== null &&
	            Is.func(candidate.fillClientCapabilities) && Is.func(candidate.initialize) && Is.func(candidate.getState) && Is.func(candidate.clear) &&
	            (candidate.fillInitializeParams === undefined || Is.func(candidate.fillInitializeParams)) && Is.func(candidate.register) &&
	            Is.func(candidate.unregister) && candidate.registrationType !== undefined;
	    }
	    DynamicFeature.is = is;
	})(DynamicFeature || (features.DynamicFeature = DynamicFeature = {}));
	/**
	 * An abstract dynamic feature implementation that operates on documents (e.g. text
	 * documents or notebooks).
	 */
	class DynamicDocumentFeature {
	    constructor(client) {
	        this._client = client;
	    }
	    /**
	     * Returns the state the feature is in.
	     */
	    getState() {
	        const selectors = this.getDocumentSelectors();
	        let count = 0;
	        for (const selector of selectors) {
	            count++;
	            for (const document of vscode_1.workspace.textDocuments) {
	                if (vscode_1.languages.match(selector, document) > 0) {
	                    return { kind: 'document', id: this.registrationType.method, registrations: true, matches: true };
	                }
	            }
	        }
	        const registrations = count > 0;
	        return { kind: 'document', id: this.registrationType.method, registrations, matches: false };
	    }
	}
	features.DynamicDocumentFeature = DynamicDocumentFeature;
	/**
	 * An abstract base class to implement features that react to events
	 * emitted from text documents.
	 */
	class TextDocumentEventFeature extends DynamicDocumentFeature {
	    static textDocumentFilter(selectors, textDocument) {
	        for (const selector of selectors) {
	            if (vscode_1.languages.match(selector, textDocument) > 0) {
	                return true;
	            }
	        }
	        return false;
	    }
	    constructor(client, event, type, middleware, createParams, textDocument, selectorFilter) {
	        super(client);
	        this._event = event;
	        this._type = type;
	        this._middleware = middleware;
	        this._createParams = createParams;
	        this._textDocument = textDocument;
	        this._selectorFilter = selectorFilter;
	        this._selectors = new Map();
	        this._onNotificationSent = new vscode_1.EventEmitter();
	    }
	    getStateInfo() {
	        return [this._selectors.values(), false];
	    }
	    getDocumentSelectors() {
	        return this._selectors.values();
	    }
	    register(data) {
	        if (!data.registerOptions.documentSelector) {
	            return;
	        }
	        if (!this._listener) {
	            this._listener = this._event((data) => {
	                this.callback(data).catch((error) => {
	                    this._client.error(`Sending document notification ${this._type.method} failed.`, error);
	                });
	            });
	        }
	        this._selectors.set(data.id, this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector));
	    }
	    async callback(data) {
	        const doSend = async (data) => {
	            const params = this._createParams(data);
	            await this._client.sendNotification(this._type, params);
	            this.notificationSent(this.getTextDocument(data), this._type, params);
	        };
	        if (this.matches(data)) {
	            const middleware = this._middleware();
	            return middleware ? middleware(data, (data) => doSend(data)) : doSend(data);
	        }
	    }
	    matches(data) {
	        if (this._client.hasDedicatedTextSynchronizationFeature(this._textDocument(data))) {
	            return false;
	        }
	        return !this._selectorFilter || this._selectorFilter(this._selectors.values(), data);
	    }
	    get onNotificationSent() {
	        return this._onNotificationSent.event;
	    }
	    notificationSent(textDocument, type, params) {
	        this._onNotificationSent.fire({ textDocument, type, params });
	    }
	    unregister(id) {
	        this._selectors.delete(id);
	        if (this._selectors.size === 0 && this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    clear() {
	        this._selectors.clear();
	        this._onNotificationSent.dispose();
	        if (this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    getProvider(document) {
	        for (const selector of this._selectors.values()) {
	            if (vscode_1.languages.match(selector, document) > 0) {
	                return {
	                    send: (data) => {
	                        return this.callback(data);
	                    }
	                };
	            }
	        }
	        return undefined;
	    }
	}
	features.TextDocumentEventFeature = TextDocumentEventFeature;
	/**
	 * A abstract feature implementation that registers language providers
	 * for text documents using a given document selector.
	 */
	class TextDocumentLanguageFeature extends DynamicDocumentFeature {
	    constructor(client, registrationType) {
	        super(client);
	        this._registrationType = registrationType;
	        this._registrations = new Map();
	    }
	    *getDocumentSelectors() {
	        for (const registration of this._registrations.values()) {
	            const selector = registration.data.registerOptions.documentSelector;
	            if (selector === null) {
	                continue;
	            }
	            yield this._client.protocol2CodeConverter.asDocumentSelector(selector);
	        }
	    }
	    get registrationType() {
	        return this._registrationType;
	    }
	    register(data) {
	        if (!data.registerOptions.documentSelector) {
	            return;
	        }
	        let registration = this.registerLanguageProvider(data.registerOptions, data.id);
	        this._registrations.set(data.id, { disposable: registration[0], data, provider: registration[1] });
	    }
	    unregister(id) {
	        let registration = this._registrations.get(id);
	        if (registration !== undefined) {
	            registration.disposable.dispose();
	        }
	    }
	    clear() {
	        this._registrations.forEach((value) => {
	            value.disposable.dispose();
	        });
	        this._registrations.clear();
	    }
	    getRegistration(documentSelector, capability) {
	        if (!capability) {
	            return [undefined, undefined];
	        }
	        else if (vscode_languageserver_protocol_1.TextDocumentRegistrationOptions.is(capability)) {
	            const id = vscode_languageserver_protocol_1.StaticRegistrationOptions.hasId(capability) ? capability.id : UUID.generateUuid();
	            const selector = capability.documentSelector ?? documentSelector;
	            if (selector) {
	                return [id, Object.assign({}, capability, { documentSelector: selector })];
	            }
	        }
	        else if (Is.boolean(capability) && capability === true || vscode_languageserver_protocol_1.WorkDoneProgressOptions.is(capability)) {
	            if (!documentSelector) {
	                return [undefined, undefined];
	            }
	            const options = (Is.boolean(capability) && capability === true ? { documentSelector } : Object.assign({}, capability, { documentSelector }));
	            return [UUID.generateUuid(), options];
	        }
	        return [undefined, undefined];
	    }
	    getRegistrationOptions(documentSelector, capability) {
	        if (!documentSelector || !capability) {
	            return undefined;
	        }
	        return (Is.boolean(capability) && capability === true ? { documentSelector } : Object.assign({}, capability, { documentSelector }));
	    }
	    getProvider(textDocument) {
	        for (const registration of this._registrations.values()) {
	            let selector = registration.data.registerOptions.documentSelector;
	            if (selector !== null && vscode_1.languages.match(this._client.protocol2CodeConverter.asDocumentSelector(selector), textDocument) > 0) {
	                return registration.provider;
	            }
	        }
	        return undefined;
	    }
	    getAllProviders() {
	        const result = [];
	        for (const item of this._registrations.values()) {
	            result.push(item.provider);
	        }
	        return result;
	    }
	}
	features.TextDocumentLanguageFeature = TextDocumentLanguageFeature;
	class WorkspaceFeature {
	    constructor(client, registrationType) {
	        this._client = client;
	        this._registrationType = registrationType;
	        this._registrations = new Map();
	    }
	    getState() {
	        const registrations = this._registrations.size > 0;
	        return { kind: 'workspace', id: this._registrationType.method, registrations };
	    }
	    get registrationType() {
	        return this._registrationType;
	    }
	    register(data) {
	        const registration = this.registerLanguageProvider(data.registerOptions);
	        this._registrations.set(data.id, { disposable: registration[0], provider: registration[1] });
	    }
	    unregister(id) {
	        let registration = this._registrations.get(id);
	        if (registration !== undefined) {
	            registration.disposable.dispose();
	        }
	    }
	    clear() {
	        this._registrations.forEach((registration) => {
	            registration.disposable.dispose();
	        });
	        this._registrations.clear();
	    }
	    getProviders() {
	        const result = [];
	        for (const registration of this._registrations.values()) {
	            result.push(registration.provider);
	        }
	        return result;
	    }
	}
	features.WorkspaceFeature = WorkspaceFeature;
	return features;
}

var diagnostic = {};

var path;
var hasRequiredPath;

function requirePath () {
	if (hasRequiredPath) return path;
	hasRequiredPath = 1;
	const isWindows = typeof process === 'object' &&
	  process &&
	  process.platform === 'win32';
	path = isWindows ? { sep: '\\' } : { sep: '/' };
	return path;
}

var balancedMatch;
var hasRequiredBalancedMatch;

function requireBalancedMatch () {
	if (hasRequiredBalancedMatch) return balancedMatch;
	hasRequiredBalancedMatch = 1;
	balancedMatch = balanced;
	function balanced(a, b, str) {
	  if (a instanceof RegExp) a = maybeMatch(a, str);
	  if (b instanceof RegExp) b = maybeMatch(b, str);

	  var r = range(a, b, str);

	  return r && {
	    start: r[0],
	    end: r[1],
	    pre: str.slice(0, r[0]),
	    body: str.slice(r[0] + a.length, r[1]),
	    post: str.slice(r[1] + b.length)
	  };
	}

	function maybeMatch(reg, str) {
	  var m = str.match(reg);
	  return m ? m[0] : null;
	}

	balanced.range = range;
	function range(a, b, str) {
	  var begs, beg, left, right, result;
	  var ai = str.indexOf(a);
	  var bi = str.indexOf(b, ai + 1);
	  var i = ai;

	  if (ai >= 0 && bi > 0) {
	    if(a===b) {
	      return [ai, bi];
	    }
	    begs = [];
	    left = str.length;

	    while (i >= 0 && !result) {
	      if (i == ai) {
	        begs.push(i);
	        ai = str.indexOf(a, i + 1);
	      } else if (begs.length == 1) {
	        result = [ begs.pop(), bi ];
	      } else {
	        beg = begs.pop();
	        if (beg < left) {
	          left = beg;
	          right = bi;
	        }

	        bi = str.indexOf(b, i + 1);
	      }

	      i = ai < bi && ai >= 0 ? ai : bi;
	    }

	    if (begs.length) {
	      result = [ left, right ];
	    }
	  }

	  return result;
	}
	return balancedMatch;
}

var braceExpansion;
var hasRequiredBraceExpansion;

function requireBraceExpansion () {
	if (hasRequiredBraceExpansion) return braceExpansion;
	hasRequiredBraceExpansion = 1;
	var balanced = requireBalancedMatch();

	braceExpansion = expandTop;

	var escSlash = '\0SLASH'+Math.random()+'\0';
	var escOpen = '\0OPEN'+Math.random()+'\0';
	var escClose = '\0CLOSE'+Math.random()+'\0';
	var escComma = '\0COMMA'+Math.random()+'\0';
	var escPeriod = '\0PERIOD'+Math.random()+'\0';

	function numeric(str) {
	  return parseInt(str, 10) == str
	    ? parseInt(str, 10)
	    : str.charCodeAt(0);
	}

	function escapeBraces(str) {
	  return str.split('\\\\').join(escSlash)
	            .split('\\{').join(escOpen)
	            .split('\\}').join(escClose)
	            .split('\\,').join(escComma)
	            .split('\\.').join(escPeriod);
	}

	function unescapeBraces(str) {
	  return str.split(escSlash).join('\\')
	            .split(escOpen).join('{')
	            .split(escClose).join('}')
	            .split(escComma).join(',')
	            .split(escPeriod).join('.');
	}


	// Basically just str.split(","), but handling cases
	// where we have nested braced sections, which should be
	// treated as individual members, like {a,{b,c},d}
	function parseCommaParts(str) {
	  if (!str)
	    return [''];

	  var parts = [];
	  var m = balanced('{', '}', str);

	  if (!m)
	    return str.split(',');

	  var pre = m.pre;
	  var body = m.body;
	  var post = m.post;
	  var p = pre.split(',');

	  p[p.length-1] += '{' + body + '}';
	  var postParts = parseCommaParts(post);
	  if (post.length) {
	    p[p.length-1] += postParts.shift();
	    p.push.apply(p, postParts);
	  }

	  parts.push.apply(parts, p);

	  return parts;
	}

	function expandTop(str) {
	  if (!str)
	    return [];

	  // I don't know why Bash 4.3 does this, but it does.
	  // Anything starting with {} will have the first two bytes preserved
	  // but *only* at the top level, so {},a}b will not expand to anything,
	  // but a{},b}c will be expanded to [a}c,abc].
	  // One could argue that this is a bug in Bash, but since the goal of
	  // this module is to match Bash's rules, we escape a leading {}
	  if (str.substr(0, 2) === '{}') {
	    str = '\\{\\}' + str.substr(2);
	  }

	  return expand(escapeBraces(str), true).map(unescapeBraces);
	}

	function embrace(str) {
	  return '{' + str + '}';
	}
	function isPadded(el) {
	  return /^-?0\d/.test(el);
	}

	function lte(i, y) {
	  return i <= y;
	}
	function gte(i, y) {
	  return i >= y;
	}

	function expand(str, isTop) {
	  var expansions = [];

	  var m = balanced('{', '}', str);
	  if (!m) return [str];

	  // no need to expand pre, since it is guaranteed to be free of brace-sets
	  var pre = m.pre;
	  var post = m.post.length
	    ? expand(m.post, false)
	    : [''];

	  if (/\$$/.test(m.pre)) {    
	    for (var k = 0; k < post.length; k++) {
	      var expansion = pre+ '{' + m.body + '}' + post[k];
	      expansions.push(expansion);
	    }
	  } else {
	    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
	    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
	    var isSequence = isNumericSequence || isAlphaSequence;
	    var isOptions = m.body.indexOf(',') >= 0;
	    if (!isSequence && !isOptions) {
	      // {a},b}
	      if (m.post.match(/,.*\}/)) {
	        str = m.pre + '{' + m.body + escClose + m.post;
	        return expand(str);
	      }
	      return [str];
	    }

	    var n;
	    if (isSequence) {
	      n = m.body.split(/\.\./);
	    } else {
	      n = parseCommaParts(m.body);
	      if (n.length === 1) {
	        // x{{a,b}}y ==> x{a}y x{b}y
	        n = expand(n[0], false).map(embrace);
	        if (n.length === 1) {
	          return post.map(function(p) {
	            return m.pre + n[0] + p;
	          });
	        }
	      }
	    }

	    // at this point, n is the parts, and we know it's not a comma set
	    // with a single entry.
	    var N;

	    if (isSequence) {
	      var x = numeric(n[0]);
	      var y = numeric(n[1]);
	      var width = Math.max(n[0].length, n[1].length);
	      var incr = n.length == 3
	        ? Math.abs(numeric(n[2]))
	        : 1;
	      var test = lte;
	      var reverse = y < x;
	      if (reverse) {
	        incr *= -1;
	        test = gte;
	      }
	      var pad = n.some(isPadded);

	      N = [];

	      for (var i = x; test(i, y); i += incr) {
	        var c;
	        if (isAlphaSequence) {
	          c = String.fromCharCode(i);
	          if (c === '\\')
	            c = '';
	        } else {
	          c = String(i);
	          if (pad) {
	            var need = width - c.length;
	            if (need > 0) {
	              var z = new Array(need + 1).join('0');
	              if (i < 0)
	                c = '-' + z + c.slice(1);
	              else
	                c = z + c;
	            }
	          }
	        }
	        N.push(c);
	      }
	    } else {
	      N = [];

	      for (var j = 0; j < n.length; j++) {
	        N.push.apply(N, expand(n[j], false));
	      }
	    }

	    for (var j = 0; j < N.length; j++) {
	      for (var k = 0; k < post.length; k++) {
	        var expansion = pre + N[j] + post[k];
	        if (!isTop || isSequence || expansion)
	          expansions.push(expansion);
	      }
	    }
	  }

	  return expansions;
	}
	return braceExpansion;
}

var minimatch_1;
var hasRequiredMinimatch;

function requireMinimatch () {
	if (hasRequiredMinimatch) return minimatch_1;
	hasRequiredMinimatch = 1;
	const minimatch = minimatch_1 = (p, pattern, options = {}) => {
	  assertValidPattern(pattern);

	  // shortcut: comments match nothing.
	  if (!options.nocomment && pattern.charAt(0) === '#') {
	    return false
	  }

	  return new Minimatch(pattern, options).match(p)
	};

	minimatch_1 = minimatch;

	const path = requirePath();
	minimatch.sep = path.sep;

	const GLOBSTAR = Symbol('globstar **');
	minimatch.GLOBSTAR = GLOBSTAR;
	const expand = requireBraceExpansion();

	const plTypes = {
	  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
	  '?': { open: '(?:', close: ')?' },
	  '+': { open: '(?:', close: ')+' },
	  '*': { open: '(?:', close: ')*' },
	  '@': { open: '(?:', close: ')' }
	};

	// any single thing other than /
	// don't need to escape / when using new RegExp()
	const qmark = '[^/]';

	// * => any number of characters
	const star = qmark + '*?';

	// ** when dots are allowed.  Anything goes, except .. and .
	// not (^ or / followed by one or two dots followed by $ or /),
	// followed by anything, any number of times.
	const twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?';

	// not a ^ or / followed by a dot,
	// followed by anything, any number of times.
	const twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?';

	// "abc" -> { a:true, b:true, c:true }
	const charSet = s => s.split('').reduce((set, c) => {
	  set[c] = true;
	  return set
	}, {});

	// characters that need to be escaped in RegExp.
	const reSpecials = charSet('().*{}+?[]^$\\!');

	// characters that indicate we have to add the pattern start
	const addPatternStartSet = charSet('[.(');

	// normalizes slashes.
	const slashSplit = /\/+/;

	minimatch.filter = (pattern, options = {}) =>
	  (p, i, list) => minimatch(p, pattern, options);

	const ext = (a, b = {}) => {
	  const t = {};
	  Object.keys(a).forEach(k => t[k] = a[k]);
	  Object.keys(b).forEach(k => t[k] = b[k]);
	  return t
	};

	minimatch.defaults = def => {
	  if (!def || typeof def !== 'object' || !Object.keys(def).length) {
	    return minimatch
	  }

	  const orig = minimatch;

	  const m = (p, pattern, options) => orig(p, pattern, ext(def, options));
	  m.Minimatch = class Minimatch extends orig.Minimatch {
	    constructor (pattern, options) {
	      super(pattern, ext(def, options));
	    }
	  };
	  m.Minimatch.defaults = options => orig.defaults(ext(def, options)).Minimatch;
	  m.filter = (pattern, options) => orig.filter(pattern, ext(def, options));
	  m.defaults = options => orig.defaults(ext(def, options));
	  m.makeRe = (pattern, options) => orig.makeRe(pattern, ext(def, options));
	  m.braceExpand = (pattern, options) => orig.braceExpand(pattern, ext(def, options));
	  m.match = (list, pattern, options) => orig.match(list, pattern, ext(def, options));

	  return m
	};





	// Brace expansion:
	// a{b,c}d -> abd acd
	// a{b,}c -> abc ac
	// a{0..3}d -> a0d a1d a2d a3d
	// a{b,c{d,e}f}g -> abg acdfg acefg
	// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
	//
	// Invalid sets are not expanded.
	// a{2..}b -> a{2..}b
	// a{b}c -> a{b}c
	minimatch.braceExpand = (pattern, options) => braceExpand(pattern, options);

	const braceExpand = (pattern, options = {}) => {
	  assertValidPattern(pattern);

	  // Thanks to Yeting Li <https://github.com/yetingli> for
	  // improving this regexp to avoid a ReDOS vulnerability.
	  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
	    // shortcut. no need to expand.
	    return [pattern]
	  }

	  return expand(pattern)
	};

	const MAX_PATTERN_LENGTH = 1024 * 64;
	const assertValidPattern = pattern => {
	  if (typeof pattern !== 'string') {
	    throw new TypeError('invalid pattern')
	  }

	  if (pattern.length > MAX_PATTERN_LENGTH) {
	    throw new TypeError('pattern is too long')
	  }
	};

	// parse a component of the expanded set.
	// At this point, no pattern may contain "/" in it
	// so we're going to return a 2d array, where each entry is the full
	// pattern, split on '/', and then turned into a regular expression.
	// A regexp is made at the end which joins each array with an
	// escaped /, and another full one which joins each regexp with |.
	//
	// Following the lead of Bash 4.1, note that "**" only has special meaning
	// when it is the *only* thing in a path portion.  Otherwise, any series
	// of * is equivalent to a single *.  Globstar behavior is enabled by
	// default, and can be disabled by setting options.noglobstar.
	const SUBPARSE = Symbol('subparse');

	minimatch.makeRe = (pattern, options) =>
	  new Minimatch(pattern, options || {}).makeRe();

	minimatch.match = (list, pattern, options = {}) => {
	  const mm = new Minimatch(pattern, options);
	  list = list.filter(f => mm.match(f));
	  if (mm.options.nonull && !list.length) {
	    list.push(pattern);
	  }
	  return list
	};

	// replace stuff like \* with *
	const globUnescape = s => s.replace(/\\(.)/g, '$1');
	const charUnescape = s => s.replace(/\\([^-\]])/g, '$1');
	const regExpEscape = s => s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	const braExpEscape = s => s.replace(/[[\]\\]/g, '\\$&');

	class Minimatch {
	  constructor (pattern, options) {
	    assertValidPattern(pattern);

	    if (!options) options = {};

	    this.options = options;
	    this.set = [];
	    this.pattern = pattern;
	    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape ||
	      options.allowWindowsEscape === false;
	    if (this.windowsPathsNoEscape) {
	      this.pattern = this.pattern.replace(/\\/g, '/');
	    }
	    this.regexp = null;
	    this.negate = false;
	    this.comment = false;
	    this.empty = false;
	    this.partial = !!options.partial;

	    // make the set of regexps etc.
	    this.make();
	  }

	  debug () {}

	  make () {
	    const pattern = this.pattern;
	    const options = this.options;

	    // empty patterns and comments match nothing.
	    if (!options.nocomment && pattern.charAt(0) === '#') {
	      this.comment = true;
	      return
	    }
	    if (!pattern) {
	      this.empty = true;
	      return
	    }

	    // step 1: figure out negation, etc.
	    this.parseNegate();

	    // step 2: expand braces
	    let set = this.globSet = this.braceExpand();

	    if (options.debug) this.debug = (...args) => console.error(...args);

	    this.debug(this.pattern, set);

	    // step 3: now we have a set, so turn each one into a series of path-portion
	    // matching patterns.
	    // These will be regexps, except in the case of "**", which is
	    // set to the GLOBSTAR object for globstar behavior,
	    // and will not contain any / characters
	    set = this.globParts = set.map(s => s.split(slashSplit));

	    this.debug(this.pattern, set);

	    // glob --> regexps
	    set = set.map((s, si, set) => s.map(this.parse, this));

	    this.debug(this.pattern, set);

	    // filter out everything that didn't compile properly.
	    set = set.filter(s => s.indexOf(false) === -1);

	    this.debug(this.pattern, set);

	    this.set = set;
	  }

	  parseNegate () {
	    if (this.options.nonegate) return

	    const pattern = this.pattern;
	    let negate = false;
	    let negateOffset = 0;

	    for (let i = 0; i < pattern.length && pattern.charAt(i) === '!'; i++) {
	      negate = !negate;
	      negateOffset++;
	    }

	    if (negateOffset) this.pattern = pattern.slice(negateOffset);
	    this.negate = negate;
	  }

	  // set partial to true to test if, for example,
	  // "/a/b" matches the start of "/*/b/*/d"
	  // Partial means, if you run out of file before you run
	  // out of pattern, then that's fine, as long as all
	  // the parts match.
	  matchOne (file, pattern, partial) {
	    var options = this.options;

	    this.debug('matchOne',
	      { 'this': this, file: file, pattern: pattern });

	    this.debug('matchOne', file.length, pattern.length);

	    for (var fi = 0,
	        pi = 0,
	        fl = file.length,
	        pl = pattern.length
	        ; (fi < fl) && (pi < pl)
	        ; fi++, pi++) {
	      this.debug('matchOne loop');
	      var p = pattern[pi];
	      var f = file[fi];

	      this.debug(pattern, p, f);

	      // should be impossible.
	      // some invalid regexp stuff in the set.
	      /* istanbul ignore if */
	      if (p === false) return false

	      if (p === GLOBSTAR) {
	        this.debug('GLOBSTAR', [pattern, p, f]);

	        // "**"
	        // a/**/b/**/c would match the following:
	        // a/b/x/y/z/c
	        // a/x/y/z/b/c
	        // a/b/x/b/x/c
	        // a/b/c
	        // To do this, take the rest of the pattern after
	        // the **, and see if it would match the file remainder.
	        // If so, return success.
	        // If not, the ** "swallows" a segment, and try again.
	        // This is recursively awful.
	        //
	        // a/**/b/**/c matching a/b/x/y/z/c
	        // - a matches a
	        // - doublestar
	        //   - matchOne(b/x/y/z/c, b/**/c)
	        //     - b matches b
	        //     - doublestar
	        //       - matchOne(x/y/z/c, c) -> no
	        //       - matchOne(y/z/c, c) -> no
	        //       - matchOne(z/c, c) -> no
	        //       - matchOne(c, c) yes, hit
	        var fr = fi;
	        var pr = pi + 1;
	        if (pr === pl) {
	          this.debug('** at the end');
	          // a ** at the end will just swallow the rest.
	          // We have found a match.
	          // however, it will not swallow /.x, unless
	          // options.dot is set.
	          // . and .. are *never* matched by **, for explosively
	          // exponential reasons.
	          for (; fi < fl; fi++) {
	            if (file[fi] === '.' || file[fi] === '..' ||
	              (!options.dot && file[fi].charAt(0) === '.')) return false
	          }
	          return true
	        }

	        // ok, let's see if we can swallow whatever we can.
	        while (fr < fl) {
	          var swallowee = file[fr];

	          this.debug('\nglobstar while', file, fr, pattern, pr, swallowee);

	          // XXX remove this slice.  Just pass the start index.
	          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
	            this.debug('globstar found match!', fr, fl, swallowee);
	            // found a match.
	            return true
	          } else {
	            // can't swallow "." or ".." ever.
	            // can only swallow ".foo" when explicitly asked.
	            if (swallowee === '.' || swallowee === '..' ||
	              (!options.dot && swallowee.charAt(0) === '.')) {
	              this.debug('dot detected!', file, fr, pattern, pr);
	              break
	            }

	            // ** swallows a segment, and continue.
	            this.debug('globstar swallow a segment, and continue');
	            fr++;
	          }
	        }

	        // no match was found.
	        // However, in partial mode, we can't say this is necessarily over.
	        // If there's more *pattern* left, then
	        /* istanbul ignore if */
	        if (partial) {
	          // ran out of file
	          this.debug('\n>>> no match, partial?', file, fr, pattern, pr);
	          if (fr === fl) return true
	        }
	        return false
	      }

	      // something other than **
	      // non-magic patterns just have to match exactly
	      // patterns with magic have been turned into regexps.
	      var hit;
	      if (typeof p === 'string') {
	        hit = f === p;
	        this.debug('string match', p, f, hit);
	      } else {
	        hit = f.match(p);
	        this.debug('pattern match', p, f, hit);
	      }

	      if (!hit) return false
	    }

	    // Note: ending in / means that we'll get a final ""
	    // at the end of the pattern.  This can only match a
	    // corresponding "" at the end of the file.
	    // If the file ends in /, then it can only match a
	    // a pattern that ends in /, unless the pattern just
	    // doesn't have any more for it. But, a/b/ should *not*
	    // match "a/b/*", even though "" matches against the
	    // [^/]*? pattern, except in partial mode, where it might
	    // simply not be reached yet.
	    // However, a/b/ should still satisfy a/*

	    // now either we fell off the end of the pattern, or we're done.
	    if (fi === fl && pi === pl) {
	      // ran out of pattern and filename at the same time.
	      // an exact hit!
	      return true
	    } else if (fi === fl) {
	      // ran out of file, but still had pattern left.
	      // this is ok if we're doing the match as part of
	      // a glob fs traversal.
	      return partial
	    } else /* istanbul ignore else */ if (pi === pl) {
	      // ran out of pattern, still have file left.
	      // this is only acceptable if we're on the very last
	      // empty segment of a file with a trailing slash.
	      // a/* should match a/b/
	      return (fi === fl - 1) && (file[fi] === '')
	    }

	    // should be unreachable.
	    /* istanbul ignore next */
	    throw new Error('wtf?')
	  }

	  braceExpand () {
	    return braceExpand(this.pattern, this.options)
	  }

	  parse (pattern, isSub) {
	    assertValidPattern(pattern);

	    const options = this.options;

	    // shortcuts
	    if (pattern === '**') {
	      if (!options.noglobstar)
	        return GLOBSTAR
	      else
	        pattern = '*';
	    }
	    if (pattern === '') return ''

	    let re = '';
	    let hasMagic = false;
	    let escaping = false;
	    // ? => one single character
	    const patternListStack = [];
	    const negativeLists = [];
	    let stateChar;
	    let inClass = false;
	    let reClassStart = -1;
	    let classStart = -1;
	    let cs;
	    let pl;
	    let sp;
	    // . and .. never match anything that doesn't start with .,
	    // even when options.dot is set.  However, if the pattern
	    // starts with ., then traversal patterns can match.
	    let dotTravAllowed = pattern.charAt(0) === '.';
	    let dotFileAllowed = options.dot || dotTravAllowed;
	    const patternStart = () =>
	      dotTravAllowed
	        ? ''
	        : dotFileAllowed
	        ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
	        : '(?!\\.)';
	    const subPatternStart = (p) =>
	      p.charAt(0) === '.'
	        ? ''
	        : options.dot
	        ? '(?!(?:^|\\/)\\.{1,2}(?:$|\\/))'
	        : '(?!\\.)';


	    const clearStateChar = () => {
	      if (stateChar) {
	        // we had some state-tracking character
	        // that wasn't consumed by this pass.
	        switch (stateChar) {
	          case '*':
	            re += star;
	            hasMagic = true;
	          break
	          case '?':
	            re += qmark;
	            hasMagic = true;
	          break
	          default:
	            re += '\\' + stateChar;
	          break
	        }
	        this.debug('clearStateChar %j %j', stateChar, re);
	        stateChar = false;
	      }
	    };

	    for (let i = 0, c; (i < pattern.length) && (c = pattern.charAt(i)); i++) {
	      this.debug('%s\t%s %s %j', pattern, i, re, c);

	      // skip over any that are escaped.
	      if (escaping) {
	        /* istanbul ignore next - completely not allowed, even escaped. */
	        if (c === '/') {
	          return false
	        }

	        if (reSpecials[c]) {
	          re += '\\';
	        }
	        re += c;
	        escaping = false;
	        continue
	      }

	      switch (c) {
	        /* istanbul ignore next */
	        case '/': {
	          // Should already be path-split by now.
	          return false
	        }

	        case '\\':
	          if (inClass && pattern.charAt(i + 1) === '-') {
	            re += c;
	            continue
	          }

	          clearStateChar();
	          escaping = true;
	        continue

	        // the various stateChar values
	        // for the "extglob" stuff.
	        case '?':
	        case '*':
	        case '+':
	        case '@':
	        case '!':
	          this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c);

	          // all of those are literals inside a class, except that
	          // the glob [!a] means [^a] in regexp
	          if (inClass) {
	            this.debug('  in class');
	            if (c === '!' && i === classStart + 1) c = '^';
	            re += c;
	            continue
	          }

	          // if we already have a stateChar, then it means
	          // that there was something like ** or +? in there.
	          // Handle the stateChar, then proceed with this one.
	          this.debug('call clearStateChar %j', stateChar);
	          clearStateChar();
	          stateChar = c;
	          // if extglob is disabled, then +(asdf|foo) isn't a thing.
	          // just clear the statechar *now*, rather than even diving into
	          // the patternList stuff.
	          if (options.noext) clearStateChar();
	        continue

	        case '(': {
	          if (inClass) {
	            re += '(';
	            continue
	          }

	          if (!stateChar) {
	            re += '\\(';
	            continue
	          }

	          const plEntry = {
	            type: stateChar,
	            start: i - 1,
	            reStart: re.length,
	            open: plTypes[stateChar].open,
	            close: plTypes[stateChar].close,
	          };
	          this.debug(this.pattern, '\t', plEntry);
	          patternListStack.push(plEntry);
	          // negation is (?:(?!(?:js)(?:<rest>))[^/]*)
	          re += plEntry.open;
	          // next entry starts with a dot maybe?
	          if (plEntry.start === 0 && plEntry.type !== '!') {
	            dotTravAllowed = true;
	            re += subPatternStart(pattern.slice(i + 1));
	          }
	          this.debug('plType %j %j', stateChar, re);
	          stateChar = false;
	          continue
	        }

	        case ')': {
	          const plEntry = patternListStack[patternListStack.length - 1];
	          if (inClass || !plEntry) {
	            re += '\\)';
	            continue
	          }
	          patternListStack.pop();

	          // closing an extglob
	          clearStateChar();
	          hasMagic = true;
	          pl = plEntry;
	          // negation is (?:(?!js)[^/]*)
	          // The others are (?:<pattern>)<type>
	          re += pl.close;
	          if (pl.type === '!') {
	            negativeLists.push(Object.assign(pl, { reEnd: re.length }));
	          }
	          continue
	        }

	        case '|': {
	          const plEntry = patternListStack[patternListStack.length - 1];
	          if (inClass || !plEntry) {
	            re += '\\|';
	            continue
	          }

	          clearStateChar();
	          re += '|';
	          // next subpattern can start with a dot?
	          if (plEntry.start === 0 && plEntry.type !== '!') {
	            dotTravAllowed = true;
	            re += subPatternStart(pattern.slice(i + 1));
	          }
	          continue
	        }

	        // these are mostly the same in regexp and glob
	        case '[':
	          // swallow any state-tracking char before the [
	          clearStateChar();

	          if (inClass) {
	            re += '\\' + c;
	            continue
	          }

	          inClass = true;
	          classStart = i;
	          reClassStart = re.length;
	          re += c;
	        continue

	        case ']':
	          //  a right bracket shall lose its special
	          //  meaning and represent itself in
	          //  a bracket expression if it occurs
	          //  first in the list.  -- POSIX.2 2.8.3.2
	          if (i === classStart + 1 || !inClass) {
	            re += '\\' + c;
	            continue
	          }

	          // split where the last [ was, make sure we don't have
	          // an invalid re. if so, re-walk the contents of the
	          // would-be class to re-translate any characters that
	          // were passed through as-is
	          // TODO: It would probably be faster to determine this
	          // without a try/catch and a new RegExp, but it's tricky
	          // to do safely.  For now, this is safe and works.
	          cs = pattern.substring(classStart + 1, i);
	          try {
	            RegExp('[' + braExpEscape(charUnescape(cs)) + ']');
	            // looks good, finish up the class.
	            re += c;
	          } catch (er) {
	            // out of order ranges in JS are errors, but in glob syntax,
	            // they're just a range that matches nothing.
	            re = re.substring(0, reClassStart) + '(?:$.)'; // match nothing ever
	          }
	          hasMagic = true;
	          inClass = false;
	        continue

	        default:
	          // swallow any state char that wasn't consumed
	          clearStateChar();

	          if (reSpecials[c] && !(c === '^' && inClass)) {
	            re += '\\';
	          }

	          re += c;
	          break

	      } // switch
	    } // for

	    // handle the case where we left a class open.
	    // "[abc" is valid, equivalent to "\[abc"
	    if (inClass) {
	      // split where the last [ was, and escape it
	      // this is a huge pita.  We now have to re-walk
	      // the contents of the would-be class to re-translate
	      // any characters that were passed through as-is
	      cs = pattern.slice(classStart + 1);
	      sp = this.parse(cs, SUBPARSE);
	      re = re.substring(0, reClassStart) + '\\[' + sp[0];
	      hasMagic = hasMagic || sp[1];
	    }

	    // handle the case where we had a +( thing at the *end*
	    // of the pattern.
	    // each pattern list stack adds 3 chars, and we need to go through
	    // and escape any | chars that were passed through as-is for the regexp.
	    // Go through and escape them, taking care not to double-escape any
	    // | chars that were already escaped.
	    for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
	      let tail;
	      tail = re.slice(pl.reStart + pl.open.length);
	      this.debug('setting tail', re, pl);
	      // maybe some even number of \, then maybe 1 \, followed by a |
	      tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, (_, $1, $2) => {
	        /* istanbul ignore else - should already be done */
	        if (!$2) {
	          // the | isn't already escaped, so escape it.
	          $2 = '\\';
	        }

	        // need to escape all those slashes *again*, without escaping the
	        // one that we need for escaping the | character.  As it works out,
	        // escaping an even number of slashes can be done by simply repeating
	        // it exactly after itself.  That's why this trick works.
	        //
	        // I am sorry that you have to see this.
	        return $1 + $1 + $2 + '|'
	      });

	      this.debug('tail=%j\n   %s', tail, tail, pl, re);
	      const t = pl.type === '*' ? star
	        : pl.type === '?' ? qmark
	        : '\\' + pl.type;

	      hasMagic = true;
	      re = re.slice(0, pl.reStart) + t + '\\(' + tail;
	    }

	    // handle trailing things that only matter at the very end.
	    clearStateChar();
	    if (escaping) {
	      // trailing \\
	      re += '\\\\';
	    }

	    // only need to apply the nodot start if the re starts with
	    // something that could conceivably capture a dot
	    const addPatternStart = addPatternStartSet[re.charAt(0)];

	    // Hack to work around lack of negative lookbehind in JS
	    // A pattern like: *.!(x).!(y|z) needs to ensure that a name
	    // like 'a.xyz.yz' doesn't match.  So, the first negative
	    // lookahead, has to look ALL the way ahead, to the end of
	    // the pattern.
	    for (let n = negativeLists.length - 1; n > -1; n--) {
	      const nl = negativeLists[n];

	      const nlBefore = re.slice(0, nl.reStart);
	      const nlFirst = re.slice(nl.reStart, nl.reEnd - 8);
	      let nlAfter = re.slice(nl.reEnd);
	      const nlLast = re.slice(nl.reEnd - 8, nl.reEnd) + nlAfter;

	      // Handle nested stuff like *(*.js|!(*.json)), where open parens
	      // mean that we should *not* include the ) in the bit that is considered
	      // "after" the negated section.
	      const closeParensBefore = nlBefore.split(')').length;
	      const openParensBefore = nlBefore.split('(').length - closeParensBefore;
	      let cleanAfter = nlAfter;
	      for (let i = 0; i < openParensBefore; i++) {
	        cleanAfter = cleanAfter.replace(/\)[+*?]?/, '');
	      }
	      nlAfter = cleanAfter;

	      const dollar = nlAfter === '' && isSub !== SUBPARSE ? '(?:$|\\/)' : '';

	      re = nlBefore + nlFirst + nlAfter + dollar + nlLast;
	    }

	    // if the re is not "" at this point, then we need to make sure
	    // it doesn't match against an empty path part.
	    // Otherwise a/* will match a/, which it should not.
	    if (re !== '' && hasMagic) {
	      re = '(?=.)' + re;
	    }

	    if (addPatternStart) {
	      re = patternStart() + re;
	    }

	    // parsing just a piece of a larger pattern.
	    if (isSub === SUBPARSE) {
	      return [re, hasMagic]
	    }

	    // if it's nocase, and the lcase/uppercase don't match, it's magic
	    if (options.nocase && !hasMagic) {
	      hasMagic = pattern.toUpperCase() !== pattern.toLowerCase();
	    }

	    // skip the regexp for non-magical patterns
	    // unescape anything in it, though, so that it'll be
	    // an exact match against a file etc.
	    if (!hasMagic) {
	      return globUnescape(pattern)
	    }

	    const flags = options.nocase ? 'i' : '';
	    try {
	      return Object.assign(new RegExp('^' + re + '$', flags), {
	        _glob: pattern,
	        _src: re,
	      })
	    } catch (er) /* istanbul ignore next - should be impossible */ {
	      // If it was an invalid regular expression, then it can't match
	      // anything.  This trick looks for a character after the end of
	      // the string, which is of course impossible, except in multi-line
	      // mode, but it's not a /m regex.
	      return new RegExp('$.')
	    }
	  }

	  makeRe () {
	    if (this.regexp || this.regexp === false) return this.regexp

	    // at this point, this.set is a 2d array of partial
	    // pattern strings, or "**".
	    //
	    // It's better to use .match().  This function shouldn't
	    // be used, really, but it's pretty convenient sometimes,
	    // when you just want to work with a regex.
	    const set = this.set;

	    if (!set.length) {
	      this.regexp = false;
	      return this.regexp
	    }
	    const options = this.options;

	    const twoStar = options.noglobstar ? star
	      : options.dot ? twoStarDot
	      : twoStarNoDot;
	    const flags = options.nocase ? 'i' : '';

	    // coalesce globstars and regexpify non-globstar patterns
	    // if it's the only item, then we just do one twoStar
	    // if it's the first, and there are more, prepend (\/|twoStar\/)? to next
	    // if it's the last, append (\/twoStar|) to previous
	    // if it's in the middle, append (\/|\/twoStar\/) to previous
	    // then filter out GLOBSTAR symbols
	    let re = set.map(pattern => {
	      pattern = pattern.map(p =>
	        typeof p === 'string' ? regExpEscape(p)
	        : p === GLOBSTAR ? GLOBSTAR
	        : p._src
	      ).reduce((set, p) => {
	        if (!(set[set.length - 1] === GLOBSTAR && p === GLOBSTAR)) {
	          set.push(p);
	        }
	        return set
	      }, []);
	      pattern.forEach((p, i) => {
	        if (p !== GLOBSTAR || pattern[i-1] === GLOBSTAR) {
	          return
	        }
	        if (i === 0) {
	          if (pattern.length > 1) {
	            pattern[i+1] = '(?:\\\/|' + twoStar + '\\\/)?' + pattern[i+1];
	          } else {
	            pattern[i] = twoStar;
	          }
	        } else if (i === pattern.length - 1) {
	          pattern[i-1] += '(?:\\\/|' + twoStar + ')?';
	        } else {
	          pattern[i-1] += '(?:\\\/|\\\/' + twoStar + '\\\/)' + pattern[i+1];
	          pattern[i+1] = GLOBSTAR;
	        }
	      });
	      return pattern.filter(p => p !== GLOBSTAR).join('/')
	    }).join('|');

	    // must match entire pattern
	    // ending in a * or ** will make it less strict.
	    re = '^(?:' + re + ')$';

	    // can match anything, as long as it's not this.
	    if (this.negate) re = '^(?!' + re + ').*$';

	    try {
	      this.regexp = new RegExp(re, flags);
	    } catch (ex) /* istanbul ignore next - should be impossible */ {
	      this.regexp = false;
	    }
	    return this.regexp
	  }

	  match (f, partial = this.partial) {
	    this.debug('match', f, this.pattern);
	    // short-circuit in the case of busted things.
	    // comments, etc.
	    if (this.comment) return false
	    if (this.empty) return f === ''

	    if (f === '/' && partial) return true

	    const options = this.options;

	    // windows: need to use /, not \
	    if (path.sep !== '/') {
	      f = f.split(path.sep).join('/');
	    }

	    // treat the test path as a set of pathparts.
	    f = f.split(slashSplit);
	    this.debug(this.pattern, 'split', f);

	    // just ONE of the pattern sets in this.set needs to match
	    // in order for it to be valid.  If negating, then just one
	    // match means that we have failed.
	    // Either way, return on the first hit.

	    const set = this.set;
	    this.debug(this.pattern, 'set', set);

	    // Find the basename of the path by looking for the last non-empty segment
	    let filename;
	    for (let i = f.length - 1; i >= 0; i--) {
	      filename = f[i];
	      if (filename) break
	    }

	    for (let i = 0; i < set.length; i++) {
	      const pattern = set[i];
	      let file = f;
	      if (options.matchBase && pattern.length === 1) {
	        file = [filename];
	      }
	      const hit = this.matchOne(file, pattern, partial);
	      if (hit) {
	        if (options.flipNegate) return true
	        return !this.negate
	      }
	    }

	    // didn't get any hits.  this is success if it's a negative
	    // pattern, failure otherwise.
	    if (options.flipNegate) return false
	    return this.negate
	  }

	  static defaults (def) {
	    return minimatch.defaults(def).Minimatch
	  }
	}

	minimatch.Minimatch = Minimatch;
	return minimatch_1;
}

var hasRequiredDiagnostic;

function requireDiagnostic () {
	if (hasRequiredDiagnostic) return diagnostic;
	hasRequiredDiagnostic = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(diagnostic, "__esModule", { value: true });
	diagnostic.DiagnosticFeature = diagnostic.DiagnosticPullMode = diagnostic.vsdiag = void 0;
	const minimatch = requireMinimatch();
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const uuid_1 = requireUuid();
	const features_1 = requireFeatures();
	function ensure(target, key) {
	    if (target[key] === void 0) {
	        target[key] = {};
	    }
	    return target[key];
	}
	var vsdiag;
	(function (vsdiag) {
	    (function (DocumentDiagnosticReportKind) {
	        DocumentDiagnosticReportKind["full"] = "full";
	        DocumentDiagnosticReportKind["unChanged"] = "unChanged";
	    })(vsdiag.DocumentDiagnosticReportKind || (vsdiag.DocumentDiagnosticReportKind = {}));
	})(vsdiag || (diagnostic.vsdiag = vsdiag = {}));
	var DiagnosticPullMode;
	(function (DiagnosticPullMode) {
	    DiagnosticPullMode["onType"] = "onType";
	    DiagnosticPullMode["onSave"] = "onSave";
	})(DiagnosticPullMode || (diagnostic.DiagnosticPullMode = DiagnosticPullMode = {}));
	var RequestStateKind;
	(function (RequestStateKind) {
	    RequestStateKind["active"] = "open";
	    RequestStateKind["reschedule"] = "reschedule";
	    RequestStateKind["outDated"] = "drop";
	})(RequestStateKind || (RequestStateKind = {}));
	/**
	 * Manages the open tabs. We don't directly use the tab API since for
	 * diagnostics we need to de-dupe tabs that show the same resources since
	 * we pull on the model not the UI.
	 */
	class Tabs {
	    constructor() {
	        this.open = new Set();
	        this._onOpen = new vscode_1.EventEmitter();
	        this._onClose = new vscode_1.EventEmitter();
	        Tabs.fillTabResources(this.open);
	        const openTabsHandler = (event) => {
	            if (event.closed.length === 0 && event.opened.length === 0) {
	                return;
	            }
	            const oldTabs = this.open;
	            const currentTabs = new Set();
	            Tabs.fillTabResources(currentTabs);
	            const closed = new Set();
	            const opened = new Set(currentTabs);
	            for (const tab of oldTabs.values()) {
	                if (currentTabs.has(tab)) {
	                    opened.delete(tab);
	                }
	                else {
	                    closed.add(tab);
	                }
	            }
	            this.open = currentTabs;
	            if (closed.size > 0) {
	                const toFire = new Set();
	                for (const item of closed) {
	                    toFire.add(vscode_1.Uri.parse(item));
	                }
	                this._onClose.fire(toFire);
	            }
	            if (opened.size > 0) {
	                const toFire = new Set();
	                for (const item of opened) {
	                    toFire.add(vscode_1.Uri.parse(item));
	                }
	                this._onOpen.fire(toFire);
	            }
	        };
	        if (vscode_1.window.tabGroups.onDidChangeTabs !== undefined) {
	            this.disposable = vscode_1.window.tabGroups.onDidChangeTabs(openTabsHandler);
	        }
	        else {
	            this.disposable = { dispose: () => { } };
	        }
	    }
	    get onClose() {
	        return this._onClose.event;
	    }
	    get onOpen() {
	        return this._onOpen.event;
	    }
	    dispose() {
	        this.disposable.dispose();
	    }
	    isActive(document) {
	        return document instanceof vscode_1.Uri
	            ? vscode_1.window.activeTextEditor?.document.uri === document
	            : vscode_1.window.activeTextEditor?.document === document;
	    }
	    isVisible(document) {
	        const uri = document instanceof vscode_1.Uri ? document : document.uri;
	        return this.open.has(uri.toString());
	    }
	    getTabResources() {
	        const result = new Set();
	        Tabs.fillTabResources(new Set(), result);
	        return result;
	    }
	    static fillTabResources(strings, uris) {
	        const seen = strings ?? new Set();
	        for (const group of vscode_1.window.tabGroups.all) {
	            for (const tab of group.tabs) {
	                const input = tab.input;
	                let uri;
	                if (input instanceof vscode_1.TabInputText) {
	                    uri = input.uri;
	                }
	                else if (input instanceof vscode_1.TabInputTextDiff) {
	                    uri = input.modified;
	                }
	                else if (input instanceof vscode_1.TabInputCustom) {
	                    uri = input.uri;
	                }
	                if (uri !== undefined && !seen.has(uri.toString())) {
	                    seen.add(uri.toString());
	                    uris !== undefined && uris.add(uri);
	                }
	            }
	        }
	    }
	}
	var PullState;
	(function (PullState) {
	    PullState[PullState["document"] = 1] = "document";
	    PullState[PullState["workspace"] = 2] = "workspace";
	})(PullState || (PullState = {}));
	var DocumentOrUri;
	(function (DocumentOrUri) {
	    function asKey(document) {
	        return document instanceof vscode_1.Uri ? document.toString() : document.uri.toString();
	    }
	    DocumentOrUri.asKey = asKey;
	})(DocumentOrUri || (DocumentOrUri = {}));
	class DocumentPullStateTracker {
	    constructor() {
	        this.documentPullStates = new Map();
	        this.workspacePullStates = new Map();
	    }
	    track(kind, document, arg1) {
	        const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
	        const [key, uri, version] = document instanceof vscode_1.Uri
	            ? [document.toString(), document, arg1]
	            : [document.uri.toString(), document.uri, document.version];
	        let state = states.get(key);
	        if (state === undefined) {
	            state = { document: uri, pulledVersion: version, resultId: undefined };
	            states.set(key, state);
	        }
	        return state;
	    }
	    update(kind, document, arg1, arg2) {
	        const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
	        const [key, uri, version, resultId] = document instanceof vscode_1.Uri
	            ? [document.toString(), document, arg1, arg2]
	            : [document.uri.toString(), document.uri, document.version, arg1];
	        let state = states.get(key);
	        if (state === undefined) {
	            state = { document: uri, pulledVersion: version, resultId };
	            states.set(key, state);
	        }
	        else {
	            state.pulledVersion = version;
	            state.resultId = resultId;
	        }
	    }
	    unTrack(kind, document) {
	        const key = DocumentOrUri.asKey(document);
	        const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
	        states.delete(key);
	    }
	    tracks(kind, document) {
	        const key = DocumentOrUri.asKey(document);
	        const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
	        return states.has(key);
	    }
	    getResultId(kind, document) {
	        const key = DocumentOrUri.asKey(document);
	        const states = kind === PullState.document ? this.documentPullStates : this.workspacePullStates;
	        return states.get(key)?.resultId;
	    }
	    getAllResultIds() {
	        const result = [];
	        for (let [uri, value] of this.workspacePullStates) {
	            if (this.documentPullStates.has(uri)) {
	                value = this.documentPullStates.get(uri);
	            }
	            if (value.resultId !== undefined) {
	                result.push({ uri, value: value.resultId });
	            }
	        }
	        return result;
	    }
	}
	class DiagnosticRequestor {
	    constructor(client, tabs, options) {
	        this.client = client;
	        this.tabs = tabs;
	        this.options = options;
	        this.isDisposed = false;
	        this.onDidChangeDiagnosticsEmitter = new vscode_1.EventEmitter();
	        this.provider = this.createProvider();
	        this.diagnostics = vscode_1.languages.createDiagnosticCollection(options.identifier);
	        this.openRequests = new Map();
	        this.documentStates = new DocumentPullStateTracker();
	        this.workspaceErrorCounter = 0;
	    }
	    knows(kind, document) {
	        const uri = document instanceof vscode_1.Uri ? document : document.uri;
	        return this.documentStates.tracks(kind, document) || this.openRequests.has(uri.toString());
	    }
	    forget(kind, document) {
	        this.documentStates.unTrack(kind, document);
	    }
	    pull(document, cb) {
	        if (this.isDisposed) {
	            return;
	        }
	        const uri = document instanceof vscode_1.Uri ? document : document.uri;
	        this.pullAsync(document).then(() => {
	            if (cb) {
	                cb();
	            }
	        }, (error) => {
	            this.client.error(`Document pull failed for text document ${uri.toString()}`, error, false);
	        });
	    }
	    async pullAsync(document, version) {
	        if (this.isDisposed) {
	            return;
	        }
	        const isUri = document instanceof vscode_1.Uri;
	        const uri = isUri ? document : document.uri;
	        const key = uri.toString();
	        version = isUri ? version : document.version;
	        const currentRequestState = this.openRequests.get(key);
	        const documentState = isUri
	            ? this.documentStates.track(PullState.document, document, version)
	            : this.documentStates.track(PullState.document, document);
	        if (currentRequestState === undefined) {
	            const tokenSource = new vscode_1.CancellationTokenSource();
	            this.openRequests.set(key, { state: RequestStateKind.active, document: document, version: version, tokenSource });
	            let report;
	            let afterState;
	            try {
	                report = await this.provider.provideDiagnostics(document, documentState.resultId, tokenSource.token) ?? { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
	            }
	            catch (error) {
	                if (error instanceof features_1.LSPCancellationError && vscode_languageserver_protocol_1.DiagnosticServerCancellationData.is(error.data) && error.data.retriggerRequest === false) {
	                    afterState = { state: RequestStateKind.outDated, document };
	                }
	                if (afterState === undefined && error instanceof vscode_1.CancellationError) {
	                    afterState = { state: RequestStateKind.reschedule, document };
	                }
	                else {
	                    throw error;
	                }
	            }
	            afterState = afterState ?? this.openRequests.get(key);
	            if (afterState === undefined) {
	                // This shouldn't happen. Log it
	                this.client.error(`Lost request state in diagnostic pull model. Clearing diagnostics for ${key}`);
	                this.diagnostics.delete(uri);
	                return;
	            }
	            this.openRequests.delete(key);
	            if (!this.tabs.isVisible(document)) {
	                this.documentStates.unTrack(PullState.document, document);
	                return;
	            }
	            if (afterState.state === RequestStateKind.outDated) {
	                return;
	            }
	            // report is only undefined if the request has thrown.
	            if (report !== undefined) {
	                if (report.kind === vsdiag.DocumentDiagnosticReportKind.full) {
	                    this.diagnostics.set(uri, report.items);
	                }
	                documentState.pulledVersion = version;
	                documentState.resultId = report.resultId;
	            }
	            if (afterState.state === RequestStateKind.reschedule) {
	                this.pull(document);
	            }
	        }
	        else {
	            if (currentRequestState.state === RequestStateKind.active) {
	                // Cancel the current request and reschedule a new one when the old one returned.
	                currentRequestState.tokenSource.cancel();
	                this.openRequests.set(key, { state: RequestStateKind.reschedule, document: currentRequestState.document });
	            }
	            else if (currentRequestState.state === RequestStateKind.outDated) {
	                this.openRequests.set(key, { state: RequestStateKind.reschedule, document: currentRequestState.document });
	            }
	        }
	    }
	    forgetDocument(document) {
	        const uri = document instanceof vscode_1.Uri ? document : document.uri;
	        const key = uri.toString();
	        const request = this.openRequests.get(key);
	        if (this.options.workspaceDiagnostics) {
	            // If we run workspace diagnostic pull a last time for the diagnostics
	            // and the rely on getting them from the workspace result.
	            if (request !== undefined) {
	                this.openRequests.set(key, { state: RequestStateKind.reschedule, document: document });
	            }
	            else {
	                this.pull(document, () => {
	                    this.forget(PullState.document, document);
	                });
	            }
	        }
	        else {
	            // We have normal pull or inter file dependencies. In this case we
	            // clear the diagnostics (to have the same start as after startup).
	            // We also cancel outstanding requests.
	            if (request !== undefined) {
	                if (request.state === RequestStateKind.active) {
	                    request.tokenSource.cancel();
	                }
	                this.openRequests.set(key, { state: RequestStateKind.outDated, document: document });
	            }
	            this.diagnostics.delete(uri);
	            this.forget(PullState.document, document);
	        }
	    }
	    pullWorkspace() {
	        if (this.isDisposed) {
	            return;
	        }
	        this.pullWorkspaceAsync().then(() => {
	            this.workspaceTimeout = (0, vscode_languageserver_protocol_1.RAL)().timer.setTimeout(() => {
	                this.pullWorkspace();
	            }, 2000);
	        }, (error) => {
	            if (!(error instanceof features_1.LSPCancellationError) && !vscode_languageserver_protocol_1.DiagnosticServerCancellationData.is(error.data)) {
	                this.client.error(`Workspace diagnostic pull failed.`, error, false);
	                this.workspaceErrorCounter++;
	            }
	            if (this.workspaceErrorCounter <= 5) {
	                this.workspaceTimeout = (0, vscode_languageserver_protocol_1.RAL)().timer.setTimeout(() => {
	                    this.pullWorkspace();
	                }, 2000);
	            }
	        });
	    }
	    async pullWorkspaceAsync() {
	        if (!this.provider.provideWorkspaceDiagnostics || this.isDisposed) {
	            return;
	        }
	        if (this.workspaceCancellation !== undefined) {
	            this.workspaceCancellation.cancel();
	            this.workspaceCancellation = undefined;
	        }
	        this.workspaceCancellation = new vscode_1.CancellationTokenSource();
	        const previousResultIds = this.documentStates.getAllResultIds().map((item) => {
	            return {
	                uri: this.client.protocol2CodeConverter.asUri(item.uri),
	                value: item.value
	            };
	        });
	        await this.provider.provideWorkspaceDiagnostics(previousResultIds, this.workspaceCancellation.token, (chunk) => {
	            if (!chunk || this.isDisposed) {
	                return;
	            }
	            for (const item of chunk.items) {
	                if (item.kind === vsdiag.DocumentDiagnosticReportKind.full) {
	                    // Favour document pull result over workspace results. So skip if it is tracked
	                    // as a document result.
	                    if (!this.documentStates.tracks(PullState.document, item.uri)) {
	                        this.diagnostics.set(item.uri, item.items);
	                    }
	                }
	                this.documentStates.update(PullState.workspace, item.uri, item.version ?? undefined, item.resultId);
	            }
	        });
	    }
	    createProvider() {
	        const result = {
	            onDidChangeDiagnostics: this.onDidChangeDiagnosticsEmitter.event,
	            provideDiagnostics: (document, previousResultId, token) => {
	                const provideDiagnostics = (document, previousResultId, token) => {
	                    const params = {
	                        identifier: this.options.identifier,
	                        textDocument: { uri: this.client.code2ProtocolConverter.asUri(document instanceof vscode_1.Uri ? document : document.uri) },
	                        previousResultId: previousResultId
	                    };
	                    if (this.isDisposed === true || !this.client.isRunning()) {
	                        return { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
	                    }
	                    return this.client.sendRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, params, token).then(async (result) => {
	                        if (result === undefined || result === null || this.isDisposed || token.isCancellationRequested) {
	                            return { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] };
	                        }
	                        if (result.kind === vscode_languageserver_protocol_1.DocumentDiagnosticReportKind.Full) {
	                            return { kind: vsdiag.DocumentDiagnosticReportKind.full, resultId: result.resultId, items: await this.client.protocol2CodeConverter.asDiagnostics(result.items, token) };
	                        }
	                        else {
	                            return { kind: vsdiag.DocumentDiagnosticReportKind.unChanged, resultId: result.resultId };
	                        }
	                    }, (error) => {
	                        return this.client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, token, error, { kind: vsdiag.DocumentDiagnosticReportKind.full, items: [] });
	                    });
	                };
	                const middleware = this.client.middleware;
	                return middleware.provideDiagnostics
	                    ? middleware.provideDiagnostics(document, previousResultId, token, provideDiagnostics)
	                    : provideDiagnostics(document, previousResultId, token);
	            }
	        };
	        if (this.options.workspaceDiagnostics) {
	            result.provideWorkspaceDiagnostics = (resultIds, token, resultReporter) => {
	                const convertReport = async (report) => {
	                    if (report.kind === vscode_languageserver_protocol_1.DocumentDiagnosticReportKind.Full) {
	                        return {
	                            kind: vsdiag.DocumentDiagnosticReportKind.full,
	                            uri: this.client.protocol2CodeConverter.asUri(report.uri),
	                            resultId: report.resultId,
	                            version: report.version,
	                            items: await this.client.protocol2CodeConverter.asDiagnostics(report.items, token)
	                        };
	                    }
	                    else {
	                        return {
	                            kind: vsdiag.DocumentDiagnosticReportKind.unChanged,
	                            uri: this.client.protocol2CodeConverter.asUri(report.uri),
	                            resultId: report.resultId,
	                            version: report.version
	                        };
	                    }
	                };
	                const convertPreviousResultIds = (resultIds) => {
	                    const converted = [];
	                    for (const item of resultIds) {
	                        converted.push({ uri: this.client.code2ProtocolConverter.asUri(item.uri), value: item.value });
	                    }
	                    return converted;
	                };
	                const provideDiagnostics = (resultIds, token) => {
	                    const partialResultToken = (0, uuid_1.generateUuid)();
	                    const disposable = this.client.onProgress(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.partialResult, partialResultToken, async (partialResult) => {
	                        if (partialResult === undefined || partialResult === null) {
	                            resultReporter(null);
	                            return;
	                        }
	                        const converted = {
	                            items: []
	                        };
	                        for (const item of partialResult.items) {
	                            try {
	                                converted.items.push(await convertReport(item));
	                            }
	                            catch (error) {
	                                this.client.error(`Converting workspace diagnostics failed.`, error);
	                            }
	                        }
	                        resultReporter(converted);
	                    });
	                    const params = {
	                        identifier: this.options.identifier,
	                        previousResultIds: convertPreviousResultIds(resultIds),
	                        partialResultToken: partialResultToken
	                    };
	                    if (this.isDisposed === true || !this.client.isRunning()) {
	                        return { items: [] };
	                    }
	                    return this.client.sendRequest(vscode_languageserver_protocol_1.WorkspaceDiagnosticRequest.type, params, token).then(async (result) => {
	                        if (token.isCancellationRequested) {
	                            return { items: [] };
	                        }
	                        const converted = {
	                            items: []
	                        };
	                        for (const item of result.items) {
	                            converted.items.push(await convertReport(item));
	                        }
	                        disposable.dispose();
	                        resultReporter(converted);
	                        return { items: [] };
	                    }, (error) => {
	                        disposable.dispose();
	                        return this.client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type, token, error, { items: [] });
	                    });
	                };
	                const middleware = this.client.middleware;
	                return middleware.provideWorkspaceDiagnostics
	                    ? middleware.provideWorkspaceDiagnostics(resultIds, token, resultReporter, provideDiagnostics)
	                    : provideDiagnostics(resultIds, token);
	            };
	        }
	        return result;
	    }
	    dispose() {
	        this.isDisposed = true;
	        // Cancel and clear workspace pull if present.
	        this.workspaceCancellation?.cancel();
	        this.workspaceTimeout?.dispose();
	        // Cancel all request and mark open requests as outdated.
	        for (const [key, request] of this.openRequests) {
	            if (request.state === RequestStateKind.active) {
	                request.tokenSource.cancel();
	            }
	            this.openRequests.set(key, { state: RequestStateKind.outDated, document: request.document });
	        }
	        // cleanup old diagnostics
	        this.diagnostics.dispose();
	    }
	}
	class BackgroundScheduler {
	    constructor(diagnosticRequestor) {
	        this.diagnosticRequestor = diagnosticRequestor;
	        this.documents = new vscode_languageserver_protocol_1.LinkedMap();
	        this.isDisposed = false;
	    }
	    add(document) {
	        if (this.isDisposed === true) {
	            return;
	        }
	        const key = DocumentOrUri.asKey(document);
	        if (this.documents.has(key)) {
	            return;
	        }
	        this.documents.set(key, document, vscode_languageserver_protocol_1.Touch.Last);
	        this.trigger();
	    }
	    remove(document) {
	        const key = DocumentOrUri.asKey(document);
	        this.documents.delete(key);
	        // No more documents. Stop background activity.
	        if (this.documents.size === 0) {
	            this.stop();
	        }
	        else if (key === this.endDocumentKey()) {
	            // Make sure we have a correct last document. It could have
	            this.endDocument = this.documents.last;
	        }
	    }
	    trigger() {
	        if (this.isDisposed === true) {
	            return;
	        }
	        // We have a round running. So simply make sure we run up to the
	        // last document
	        if (this.intervalHandle !== undefined) {
	            this.endDocument = this.documents.last;
	            return;
	        }
	        this.endDocument = this.documents.last;
	        this.intervalHandle = (0, vscode_languageserver_protocol_1.RAL)().timer.setInterval(() => {
	            const document = this.documents.first;
	            if (document !== undefined) {
	                const key = DocumentOrUri.asKey(document);
	                this.diagnosticRequestor.pull(document);
	                this.documents.set(key, document, vscode_languageserver_protocol_1.Touch.Last);
	                if (key === this.endDocumentKey()) {
	                    this.stop();
	                }
	            }
	        }, 200);
	    }
	    dispose() {
	        this.isDisposed = true;
	        this.stop();
	        this.documents.clear();
	    }
	    stop() {
	        this.intervalHandle?.dispose();
	        this.intervalHandle = undefined;
	        this.endDocument = undefined;
	    }
	    endDocumentKey() {
	        return this.endDocument !== undefined ? DocumentOrUri.asKey(this.endDocument) : undefined;
	    }
	}
	class DiagnosticFeatureProviderImpl {
	    constructor(client, tabs, options) {
	        const diagnosticPullOptions = client.clientOptions.diagnosticPullOptions ?? { onChange: true, onSave: false };
	        const documentSelector = client.protocol2CodeConverter.asDocumentSelector(options.documentSelector);
	        const disposables = [];
	        const matchResource = (resource) => {
	            const selector = options.documentSelector;
	            if (diagnosticPullOptions.match !== undefined) {
	                return diagnosticPullOptions.match(selector, resource);
	            }
	            for (const filter of selector) {
	                if (!vscode_languageserver_protocol_1.TextDocumentFilter.is(filter)) {
	                    continue;
	                }
	                // The filter is a language id. We can't determine if it matches
	                // so we return false.
	                if (typeof filter === 'string') {
	                    return false;
	                }
	                if (filter.language !== undefined && filter.language !== '*') {
	                    return false;
	                }
	                if (filter.scheme !== undefined && filter.scheme !== '*' && filter.scheme !== resource.scheme) {
	                    return false;
	                }
	                if (filter.pattern !== undefined) {
	                    const matcher = new minimatch.Minimatch(filter.pattern, { noext: true });
	                    if (!matcher.makeRe()) {
	                        return false;
	                    }
	                    if (!matcher.match(resource.fsPath)) {
	                        return false;
	                    }
	                }
	            }
	            return true;
	        };
	        const matches = (document) => {
	            return document instanceof vscode_1.Uri
	                ? matchResource(document)
	                : vscode_1.languages.match(documentSelector, document) > 0 && tabs.isVisible(document);
	        };
	        const isActiveDocument = (document) => {
	            return document instanceof vscode_1.Uri
	                ? this.activeTextDocument?.uri.toString() === document.toString()
	                : this.activeTextDocument === document;
	        };
	        this.diagnosticRequestor = new DiagnosticRequestor(client, tabs, options);
	        this.backgroundScheduler = new BackgroundScheduler(this.diagnosticRequestor);
	        const addToBackgroundIfNeeded = (document) => {
	            if (!matches(document) || !options.interFileDependencies || isActiveDocument(document)) {
	                return;
	            }
	            this.backgroundScheduler.add(document);
	        };
	        this.activeTextDocument = vscode_1.window.activeTextEditor?.document;
	        vscode_1.window.onDidChangeActiveTextEditor((editor) => {
	            const oldActive = this.activeTextDocument;
	            this.activeTextDocument = editor?.document;
	            if (oldActive !== undefined) {
	                addToBackgroundIfNeeded(oldActive);
	            }
	            if (this.activeTextDocument !== undefined) {
	                this.backgroundScheduler.remove(this.activeTextDocument);
	            }
	        });
	        // For pull model diagnostics we pull for documents visible in the UI.
	        // From an eventing point of view we still rely on open document events
	        // and filter the documents that are not visible in the UI instead of
	        // listening to Tab events. Major reason is event timing since we need
	        // to ensure that the pull is send after the document open has reached
	        // the server.
	        // We always pull on open.
	        const openFeature = client.getFeature(vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.method);
	        disposables.push(openFeature.onNotificationSent((event) => {
	            const textDocument = event.textDocument;
	            // We already know about this document. This can happen via a tab open.
	            if (this.diagnosticRequestor.knows(PullState.document, textDocument)) {
	                return;
	            }
	            if (matches(textDocument)) {
	                this.diagnosticRequestor.pull(textDocument, () => { addToBackgroundIfNeeded(textDocument); });
	            }
	        }));
	        disposables.push(tabs.onOpen((opened) => {
	            for (const resource of opened) {
	                // We already know about this document. This can happen via a document open.
	                if (this.diagnosticRequestor.knows(PullState.document, resource)) {
	                    continue;
	                }
	                const uriStr = resource.toString();
	                let textDocument;
	                for (const item of vscode_1.workspace.textDocuments) {
	                    if (uriStr === item.uri.toString()) {
	                        textDocument = item;
	                        break;
	                    }
	                }
	                // In VS Code the event timing is as follows:
	                // 1. tab events are fired.
	                // 2. open document events are fired and internal data structures like
	                //    workspace.textDocuments and Window.activeTextEditor are updated.
	                //
	                // This means: for newly created tab/editors we don't find the underlying
	                // document yet. So we do nothing an rely on the underlying open document event
	                // to be fired.
	                if (textDocument !== undefined && matches(textDocument)) {
	                    this.diagnosticRequestor.pull(textDocument, () => { addToBackgroundIfNeeded(textDocument); });
	                }
	            }
	        }));
	        // Pull all diagnostics for documents that are already open
	        const pulledTextDocuments = new Set();
	        for (const textDocument of vscode_1.workspace.textDocuments) {
	            if (matches(textDocument)) {
	                this.diagnosticRequestor.pull(textDocument, () => { addToBackgroundIfNeeded(textDocument); });
	                pulledTextDocuments.add(textDocument.uri.toString());
	            }
	        }
	        // Pull all tabs if not already pulled as text document
	        if (diagnosticPullOptions.onTabs === true) {
	            for (const resource of tabs.getTabResources()) {
	                if (!pulledTextDocuments.has(resource.toString()) && matches(resource)) {
	                    this.diagnosticRequestor.pull(resource, () => { addToBackgroundIfNeeded(resource); });
	                }
	            }
	        }
	        // We don't need to pull on tab open since we will receive a document open as well later on
	        // and that event allows us to use a document for a match check which will have a set
	        // language id.
	        if (diagnosticPullOptions.onChange === true) {
	            const changeFeature = client.getFeature(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.method);
	            disposables.push(changeFeature.onNotificationSent(async (event) => {
	                const textDocument = event.textDocument;
	                if ((diagnosticPullOptions.filter === undefined || !diagnosticPullOptions.filter(textDocument, DiagnosticPullMode.onType)) && this.diagnosticRequestor.knows(PullState.document, textDocument)) {
	                    this.diagnosticRequestor.pull(textDocument, () => { this.backgroundScheduler.trigger(); });
	                }
	            }));
	        }
	        if (diagnosticPullOptions.onSave === true) {
	            const saveFeature = client.getFeature(vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.method);
	            disposables.push(saveFeature.onNotificationSent((event) => {
	                const textDocument = event.textDocument;
	                if ((diagnosticPullOptions.filter === undefined || !diagnosticPullOptions.filter(textDocument, DiagnosticPullMode.onSave)) && this.diagnosticRequestor.knows(PullState.document, textDocument)) {
	                    this.diagnosticRequestor.pull(event.textDocument, () => { this.backgroundScheduler.trigger(); });
	                }
	            }));
	        }
	        // When the document closes clear things up
	        const closeFeature = client.getFeature(vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.method);
	        disposables.push(closeFeature.onNotificationSent((event) => {
	            this.cleanUpDocument(event.textDocument);
	        }));
	        // Same when a tabs closes.
	        tabs.onClose((closed) => {
	            for (const document of closed) {
	                this.cleanUpDocument(document);
	            }
	        });
	        // We received a did change from the server.
	        this.diagnosticRequestor.onDidChangeDiagnosticsEmitter.event(() => {
	            for (const textDocument of vscode_1.workspace.textDocuments) {
	                if (matches(textDocument)) {
	                    this.diagnosticRequestor.pull(textDocument);
	                }
	            }
	        });
	        // da348dc5-c30a-4515-9d98-31ff3be38d14 is the test UUID to test the middle ware. So don't auto trigger pulls.
	        if (options.workspaceDiagnostics === true && options.identifier !== 'da348dc5-c30a-4515-9d98-31ff3be38d14') {
	            this.diagnosticRequestor.pullWorkspace();
	        }
	        this.disposable = vscode_1.Disposable.from(...disposables, this.backgroundScheduler, this.diagnosticRequestor);
	    }
	    get onDidChangeDiagnosticsEmitter() {
	        return this.diagnosticRequestor.onDidChangeDiagnosticsEmitter;
	    }
	    get diagnostics() {
	        return this.diagnosticRequestor.provider;
	    }
	    cleanUpDocument(document) {
	        if (this.diagnosticRequestor.knows(PullState.document, document)) {
	            this.diagnosticRequestor.forgetDocument(document);
	            this.backgroundScheduler.remove(document);
	        }
	    }
	}
	class DiagnosticFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentDiagnosticRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let capability = ensure(ensure(capabilities, 'textDocument'), 'diagnostic');
	        capability.dynamicRegistration = true;
	        // We first need to decide how a UI will look with related documents.
	        // An easy implementation would be to only show related diagnostics for
	        // the active editor.
	        capability.relatedDocumentSupport = false;
	        ensure(ensure(capabilities, 'workspace'), 'diagnostics').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const client = this._client;
	        client.onRequest(vscode_languageserver_protocol_1.DiagnosticRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeDiagnosticsEmitter.fire();
	            }
	        });
	        let [id, options] = this.getRegistration(documentSelector, capabilities.diagnosticProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    clear() {
	        if (this.tabs !== undefined) {
	            this.tabs.dispose();
	            this.tabs = undefined;
	        }
	        super.clear();
	    }
	    registerLanguageProvider(options) {
	        if (this.tabs === undefined) {
	            this.tabs = new Tabs();
	        }
	        const provider = new DiagnosticFeatureProviderImpl(this._client, this.tabs, options);
	        return [provider.disposable, provider];
	    }
	}
	diagnostic.DiagnosticFeature = DiagnosticFeature;
	return diagnostic;
}

var notebook = {};

var hasRequiredNotebook;

function requireNotebook () {
	if (hasRequiredNotebook) return notebook;
	hasRequiredNotebook = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(notebook, "__esModule", { value: true });
	notebook.NotebookDocumentSyncFeature = void 0;
	const vscode = require$$0;
	const minimatch = requireMinimatch();
	const proto = requireMain$1();
	const UUID = requireUuid();
	const Is = requireIs$2();
	function ensure(target, key) {
	    if (target[key] === void 0) {
	        target[key] = {};
	    }
	    return target[key];
	}
	var Converter;
	(function (Converter) {
	    (function (c2p) {
	        function asVersionedNotebookDocumentIdentifier(notebookDocument, base) {
	            return {
	                version: notebookDocument.version,
	                uri: base.asUri(notebookDocument.uri)
	            };
	        }
	        c2p.asVersionedNotebookDocumentIdentifier = asVersionedNotebookDocumentIdentifier;
	        function asNotebookDocument(notebookDocument, cells, base) {
	            const result = proto.NotebookDocument.create(base.asUri(notebookDocument.uri), notebookDocument.notebookType, notebookDocument.version, asNotebookCells(cells, base));
	            if (Object.keys(notebookDocument.metadata).length > 0) {
	                result.metadata = asMetadata(notebookDocument.metadata);
	            }
	            return result;
	        }
	        c2p.asNotebookDocument = asNotebookDocument;
	        function asNotebookCells(cells, base) {
	            return cells.map(cell => asNotebookCell(cell, base));
	        }
	        c2p.asNotebookCells = asNotebookCells;
	        function asMetadata(metadata) {
	            const seen = new Set();
	            return deepCopy(seen, metadata);
	        }
	        c2p.asMetadata = asMetadata;
	        function asNotebookCell(cell, base) {
	            const result = proto.NotebookCell.create(asNotebookCellKind(cell.kind), base.asUri(cell.document.uri));
	            if (Object.keys(cell.metadata).length > 0) {
	                result.metadata = asMetadata(cell.metadata);
	            }
	            if (cell.executionSummary !== undefined && (Is.number(cell.executionSummary.executionOrder) && Is.boolean(cell.executionSummary.success))) {
	                result.executionSummary = {
	                    executionOrder: cell.executionSummary.executionOrder,
	                    success: cell.executionSummary.success
	                };
	            }
	            return result;
	        }
	        c2p.asNotebookCell = asNotebookCell;
	        function asNotebookCellKind(kind) {
	            switch (kind) {
	                case vscode.NotebookCellKind.Markup:
	                    return proto.NotebookCellKind.Markup;
	                case vscode.NotebookCellKind.Code:
	                    return proto.NotebookCellKind.Code;
	            }
	        }
	        function deepCopy(seen, value) {
	            if (seen.has(value)) {
	                throw new Error(`Can't deep copy cyclic structures.`);
	            }
	            if (Array.isArray(value)) {
	                const result = [];
	                for (const elem of value) {
	                    if (elem !== null && typeof elem === 'object' || Array.isArray(elem)) {
	                        result.push(deepCopy(seen, elem));
	                    }
	                    else {
	                        if (elem instanceof RegExp) {
	                            throw new Error(`Can't transfer regular expressions to the server`);
	                        }
	                        result.push(elem);
	                    }
	                }
	                return result;
	            }
	            else {
	                const props = Object.keys(value);
	                const result = Object.create(null);
	                for (const prop of props) {
	                    const elem = value[prop];
	                    if (elem !== null && typeof elem === 'object' || Array.isArray(elem)) {
	                        result[prop] = deepCopy(seen, elem);
	                    }
	                    else {
	                        if (elem instanceof RegExp) {
	                            throw new Error(`Can't transfer regular expressions to the server`);
	                        }
	                        result[prop] = elem;
	                    }
	                }
	                return result;
	            }
	        }
	        function asTextContentChange(event, base) {
	            const params = base.asChangeTextDocumentParams(event, event.document.uri, event.document.version);
	            return { document: params.textDocument, changes: params.contentChanges };
	        }
	        c2p.asTextContentChange = asTextContentChange;
	        function asNotebookDocumentChangeEvent(event, base) {
	            const result = Object.create(null);
	            if (event.metadata) {
	                result.metadata = Converter.c2p.asMetadata(event.metadata);
	            }
	            if (event.cells !== undefined) {
	                const cells = Object.create(null);
	                const changedCells = event.cells;
	                if (changedCells.structure) {
	                    cells.structure = {
	                        array: {
	                            start: changedCells.structure.array.start,
	                            deleteCount: changedCells.structure.array.deleteCount,
	                            cells: changedCells.structure.array.cells !== undefined ? changedCells.structure.array.cells.map(cell => Converter.c2p.asNotebookCell(cell, base)) : undefined
	                        },
	                        didOpen: changedCells.structure.didOpen !== undefined
	                            ? changedCells.structure.didOpen.map(cell => base.asOpenTextDocumentParams(cell.document).textDocument)
	                            : undefined,
	                        didClose: changedCells.structure.didClose !== undefined
	                            ? changedCells.structure.didClose.map(cell => base.asCloseTextDocumentParams(cell.document).textDocument)
	                            : undefined
	                    };
	                }
	                if (changedCells.data !== undefined) {
	                    cells.data = changedCells.data.map(cell => Converter.c2p.asNotebookCell(cell, base));
	                }
	                if (changedCells.textContent !== undefined) {
	                    cells.textContent = changedCells.textContent.map(event => Converter.c2p.asTextContentChange(event, base));
	                }
	                if (Object.keys(cells).length > 0) {
	                    result.cells = cells;
	                }
	            }
	            return result;
	        }
	        c2p.asNotebookDocumentChangeEvent = asNotebookDocumentChangeEvent;
	    })(Converter.c2p || (Converter.c2p = {}));
	})(Converter || (Converter = {}));
	var $NotebookCell;
	(function ($NotebookCell) {
	    function computeDiff(originalCells, modifiedCells, compareMetadata) {
	        const originalLength = originalCells.length;
	        const modifiedLength = modifiedCells.length;
	        let startIndex = 0;
	        while (startIndex < modifiedLength && startIndex < originalLength && equals(originalCells[startIndex], modifiedCells[startIndex], compareMetadata)) {
	            startIndex++;
	        }
	        if (startIndex < modifiedLength && startIndex < originalLength) {
	            let originalEndIndex = originalLength - 1;
	            let modifiedEndIndex = modifiedLength - 1;
	            while (originalEndIndex >= 0 && modifiedEndIndex >= 0 && equals(originalCells[originalEndIndex], modifiedCells[modifiedEndIndex], compareMetadata)) {
	                originalEndIndex--;
	                modifiedEndIndex--;
	            }
	            const deleteCount = (originalEndIndex + 1) - startIndex;
	            const newCells = startIndex === modifiedEndIndex + 1 ? undefined : modifiedCells.slice(startIndex, modifiedEndIndex + 1);
	            return newCells !== undefined ? { start: startIndex, deleteCount, cells: newCells } : { start: startIndex, deleteCount };
	        }
	        else if (startIndex < modifiedLength) {
	            return { start: startIndex, deleteCount: 0, cells: modifiedCells.slice(startIndex) };
	        }
	        else if (startIndex < originalLength) {
	            return { start: startIndex, deleteCount: originalLength - startIndex };
	        }
	        else {
	            // The two arrays are the same.
	            return undefined;
	        }
	    }
	    $NotebookCell.computeDiff = computeDiff;
	    /**
	     * We only sync kind, document, execution and metadata to the server. So we only need to compare those.
	     */
	    function equals(one, other, compareMetaData = true) {
	        if (one.kind !== other.kind || one.document.uri.toString() !== other.document.uri.toString() || one.document.languageId !== other.document.languageId ||
	            !equalsExecution(one.executionSummary, other.executionSummary)) {
	            return false;
	        }
	        return !compareMetaData || (compareMetaData && equalsMetadata(one.metadata, other.metadata));
	    }
	    function equalsExecution(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === undefined || other === undefined) {
	            return false;
	        }
	        return one.executionOrder === other.executionOrder && one.success === other.success && equalsTiming(one.timing, other.timing);
	    }
	    function equalsTiming(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === undefined || other === undefined) {
	            return false;
	        }
	        return one.startTime === other.startTime && one.endTime === other.endTime;
	    }
	    function equalsMetadata(one, other) {
	        if (one === other) {
	            return true;
	        }
	        if (one === null || one === undefined || other === null || other === undefined) {
	            return false;
	        }
	        if (typeof one !== typeof other) {
	            return false;
	        }
	        if (typeof one !== 'object') {
	            return false;
	        }
	        const oneArray = Array.isArray(one);
	        const otherArray = Array.isArray(other);
	        if (oneArray !== otherArray) {
	            return false;
	        }
	        if (oneArray && otherArray) {
	            if (one.length !== other.length) {
	                return false;
	            }
	            for (let i = 0; i < one.length; i++) {
	                if (!equalsMetadata(one[i], other[i])) {
	                    return false;
	                }
	            }
	        }
	        if (isObjectLiteral(one) && isObjectLiteral(other)) {
	            const oneKeys = Object.keys(one);
	            const otherKeys = Object.keys(other);
	            if (oneKeys.length !== otherKeys.length) {
	                return false;
	            }
	            oneKeys.sort();
	            otherKeys.sort();
	            if (!equalsMetadata(oneKeys, otherKeys)) {
	                return false;
	            }
	            for (let i = 0; i < oneKeys.length; i++) {
	                const prop = oneKeys[i];
	                if (!equalsMetadata(one[prop], other[prop])) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        return false;
	    }
	    function isObjectLiteral(value) {
	        return value !== null && typeof value === 'object';
	    }
	    $NotebookCell.isObjectLiteral = isObjectLiteral;
	})($NotebookCell || ($NotebookCell = {}));
	var $NotebookDocumentFilter;
	(function ($NotebookDocumentFilter) {
	    function matchNotebook(filter, notebookDocument) {
	        if (typeof filter === 'string') {
	            return filter === '*' || notebookDocument.notebookType === filter;
	        }
	        if (filter.notebookType !== undefined && filter.notebookType !== '*' && notebookDocument.notebookType !== filter.notebookType) {
	            return false;
	        }
	        const uri = notebookDocument.uri;
	        if (filter.scheme !== undefined && filter.scheme !== '*' && uri.scheme !== filter.scheme) {
	            return false;
	        }
	        if (filter.pattern !== undefined) {
	            const matcher = new minimatch.Minimatch(filter.pattern, { noext: true });
	            if (!matcher.makeRe()) {
	                return false;
	            }
	            if (!matcher.match(uri.fsPath)) {
	                return false;
	            }
	        }
	        return true;
	    }
	    $NotebookDocumentFilter.matchNotebook = matchNotebook;
	})($NotebookDocumentFilter || ($NotebookDocumentFilter = {}));
	var $NotebookDocumentSyncOptions;
	(function ($NotebookDocumentSyncOptions) {
	    function asDocumentSelector(options) {
	        const selector = options.notebookSelector;
	        const result = [];
	        for (const element of selector) {
	            const notebookType = (typeof element.notebook === 'string' ? element.notebook : element.notebook?.notebookType) ?? '*';
	            const scheme = (typeof element.notebook === 'string') ? undefined : element.notebook?.scheme;
	            const pattern = (typeof element.notebook === 'string') ? undefined : element.notebook?.pattern;
	            if (element.cells !== undefined) {
	                for (const cell of element.cells) {
	                    result.push(asDocumentFilter(notebookType, scheme, pattern, cell.language));
	                }
	            }
	            else {
	                result.push(asDocumentFilter(notebookType, scheme, pattern, undefined));
	            }
	        }
	        return result;
	    }
	    $NotebookDocumentSyncOptions.asDocumentSelector = asDocumentSelector;
	    function asDocumentFilter(notebookType, scheme, pattern, language) {
	        return scheme === undefined && pattern === undefined
	            ? { notebook: notebookType, language }
	            : { notebook: { notebookType, scheme, pattern }, language };
	    }
	})($NotebookDocumentSyncOptions || ($NotebookDocumentSyncOptions = {}));
	var SyncInfo;
	(function (SyncInfo) {
	    function create(cells) {
	        return {
	            cells,
	            uris: new Set(cells.map(cell => cell.document.uri.toString()))
	        };
	    }
	    SyncInfo.create = create;
	})(SyncInfo || (SyncInfo = {}));
	class NotebookDocumentSyncFeatureProvider {
	    constructor(client, options) {
	        this.client = client;
	        this.options = options;
	        this.notebookSyncInfo = new Map();
	        this.notebookDidOpen = new Set();
	        this.disposables = [];
	        this.selector = client.protocol2CodeConverter.asDocumentSelector($NotebookDocumentSyncOptions.asDocumentSelector(options));
	        // open
	        vscode.workspace.onDidOpenNotebookDocument((notebookDocument) => {
	            this.notebookDidOpen.add(notebookDocument.uri.toString());
	            this.didOpen(notebookDocument);
	        }, undefined, this.disposables);
	        for (const notebookDocument of vscode.workspace.notebookDocuments) {
	            this.notebookDidOpen.add(notebookDocument.uri.toString());
	            this.didOpen(notebookDocument);
	        }
	        // Notebook document changed.
	        vscode.workspace.onDidChangeNotebookDocument(event => this.didChangeNotebookDocument(event), undefined, this.disposables);
	        //save
	        if (this.options.save === true) {
	            vscode.workspace.onDidSaveNotebookDocument(notebookDocument => this.didSave(notebookDocument), undefined, this.disposables);
	        }
	        // close
	        vscode.workspace.onDidCloseNotebookDocument((notebookDocument) => {
	            this.didClose(notebookDocument);
	            this.notebookDidOpen.delete(notebookDocument.uri.toString());
	        }, undefined, this.disposables);
	    }
	    getState() {
	        for (const notebook of vscode.workspace.notebookDocuments) {
	            const matchingCells = this.getMatchingCells(notebook);
	            if (matchingCells !== undefined) {
	                return { kind: 'document', id: '$internal', registrations: true, matches: true };
	            }
	        }
	        return { kind: 'document', id: '$internal', registrations: true, matches: false };
	    }
	    get mode() {
	        return 'notebook';
	    }
	    handles(textDocument) {
	        return vscode.languages.match(this.selector, textDocument) > 0;
	    }
	    didOpenNotebookCellTextDocument(notebookDocument, cell) {
	        if (vscode.languages.match(this.selector, cell.document) === 0) {
	            return;
	        }
	        if (!this.notebookDidOpen.has(notebookDocument.uri.toString())) {
	            // We have never received an open notification for the notebook document.
	            // VS Code guarantees that we first get cell document open and then
	            // notebook open. So simply wait for the notebook open.
	            return;
	        }
	        const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
	        // In VS Code we receive a notebook open before a cell document open.
	        // The document and the cell is synced.
	        const cellMatches = this.cellMatches(notebookDocument, cell);
	        if (syncInfo !== undefined) {
	            const cellIsSynced = syncInfo.uris.has(cell.document.uri.toString());
	            if ((cellMatches && cellIsSynced) || (!cellMatches && !cellIsSynced)) {
	                // The cell doesn't match and was not synced or it matches and is synced.
	                // In both cases nothing to do.
	                //
	                // Note that if the language mode of a document changes we remove the
	                // cell and add it back to update the language mode on the server side.
	                return;
	            }
	            if (cellMatches) {
	                // don't use cells from above since there might be more matching cells in the notebook
	                // Since we had a matching cell above we will have matching cells now.
	                const matchingCells = this.getMatchingCells(notebookDocument);
	                if (matchingCells !== undefined) {
	                    const event = this.asNotebookDocumentChangeEvent(notebookDocument, undefined, syncInfo, matchingCells);
	                    if (event !== undefined) {
	                        this.doSendChange(event, matchingCells).catch(() => { });
	                    }
	                }
	            }
	        }
	        else {
	            // No sync info. But we have a open event for the notebook document
	            // itself. If the cell matches then we need to send an open with
	            // exactly that cell.
	            if (cellMatches) {
	                this.doSendOpen(notebookDocument, [cell]).catch(() => { });
	            }
	        }
	    }
	    didChangeNotebookCellTextDocument(notebookDocument, event) {
	        // No match with the selector
	        if (vscode.languages.match(this.selector, event.document) === 0) {
	            return;
	        }
	        this.doSendChange({
	            notebook: notebookDocument,
	            cells: { textContent: [event] }
	        }, undefined).catch(() => { });
	    }
	    didCloseNotebookCellTextDocument(notebookDocument, cell) {
	        const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
	        if (syncInfo === undefined) {
	            // The notebook document got never synced. So it doesn't matter if a cell
	            // document closes.
	            return;
	        }
	        const cellUri = cell.document.uri;
	        const index = syncInfo.cells.findIndex((item) => item.document.uri.toString() === cellUri.toString());
	        if (index === -1) {
	            // The cell never got synced or it got deleted and we now received the document
	            // close event.
	            return;
	        }
	        if (index === 0 && syncInfo.cells.length === 1) {
	            // The last cell. Close the notebook document in the server.
	            this.doSendClose(notebookDocument, syncInfo.cells).catch(() => { });
	        }
	        else {
	            const newCells = syncInfo.cells.slice();
	            const deleted = newCells.splice(index, 1);
	            this.doSendChange({
	                notebook: notebookDocument,
	                cells: {
	                    structure: {
	                        array: { start: index, deleteCount: 1 },
	                        didClose: deleted
	                    }
	                }
	            }, newCells).catch(() => { });
	        }
	    }
	    dispose() {
	        for (const disposable of this.disposables) {
	            disposable.dispose();
	        }
	    }
	    didOpen(notebookDocument, matchingCells = this.getMatchingCells(notebookDocument), syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString())) {
	        if (syncInfo !== undefined) {
	            if (matchingCells !== undefined) {
	                const event = this.asNotebookDocumentChangeEvent(notebookDocument, undefined, syncInfo, matchingCells);
	                if (event !== undefined) {
	                    this.doSendChange(event, matchingCells).catch(() => { });
	                }
	            }
	            else {
	                this.doSendClose(notebookDocument, []).catch(() => { });
	            }
	        }
	        else {
	            // Check if we need to sync the notebook document.
	            if (matchingCells === undefined) {
	                return;
	            }
	            this.doSendOpen(notebookDocument, matchingCells).catch(() => { });
	        }
	    }
	    didChangeNotebookDocument(event) {
	        const notebookDocument = event.notebook;
	        const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
	        if (syncInfo === undefined) {
	            // We have no changes to the cells. Since the notebook wasn't synced
	            // it will not be synced now.
	            if (event.contentChanges.length === 0) {
	                return;
	            }
	            // Check if we have new matching cells.
	            const cells = this.getMatchingCells(notebookDocument);
	            // No matching cells and the notebook never synced. So still no need
	            // to sync it.
	            if (cells === undefined) {
	                return;
	            }
	            // Open the notebook document and ignore the rest of the changes
	            // this the notebooks will be synced with the correct settings.
	            this.didOpen(notebookDocument, cells, syncInfo);
	        }
	        else {
	            // The notebook is synced. First check if we have no matching
	            // cells anymore and if so close the notebook
	            const cells = this.getMatchingCells(notebookDocument);
	            if (cells === undefined) {
	                this.didClose(notebookDocument, syncInfo);
	                return;
	            }
	            const newEvent = this.asNotebookDocumentChangeEvent(event.notebook, event, syncInfo, cells);
	            if (newEvent !== undefined) {
	                this.doSendChange(newEvent, cells).catch(() => { });
	            }
	        }
	    }
	    didSave(notebookDocument) {
	        const syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString());
	        if (syncInfo === undefined) {
	            return;
	        }
	        this.doSendSave(notebookDocument).catch(() => { });
	    }
	    didClose(notebookDocument, syncInfo = this.notebookSyncInfo.get(notebookDocument.uri.toString())) {
	        if (syncInfo === undefined) {
	            return;
	        }
	        const syncedCells = notebookDocument.getCells().filter(cell => syncInfo.uris.has(cell.document.uri.toString()));
	        this.doSendClose(notebookDocument, syncedCells).catch(() => { });
	    }
	    async sendDidOpenNotebookDocument(notebookDocument) {
	        const cells = this.getMatchingCells(notebookDocument);
	        if (cells === undefined) {
	            return;
	        }
	        return this.doSendOpen(notebookDocument, cells);
	    }
	    async doSendOpen(notebookDocument, cells) {
	        const send = async (notebookDocument, cells) => {
	            const nb = Converter.c2p.asNotebookDocument(notebookDocument, cells, this.client.code2ProtocolConverter);
	            const cellDocuments = cells.map(cell => this.client.code2ProtocolConverter.asTextDocumentItem(cell.document));
	            try {
	                await this.client.sendNotification(proto.DidOpenNotebookDocumentNotification.type, {
	                    notebookDocument: nb,
	                    cellTextDocuments: cellDocuments
	                });
	            }
	            catch (error) {
	                this.client.error('Sending DidOpenNotebookDocumentNotification failed', error);
	                throw error;
	            }
	        };
	        const middleware = this.client.middleware?.notebooks;
	        this.notebookSyncInfo.set(notebookDocument.uri.toString(), SyncInfo.create(cells));
	        return middleware?.didOpen !== undefined ? middleware.didOpen(notebookDocument, cells, send) : send(notebookDocument, cells);
	    }
	    async sendDidChangeNotebookDocument(event) {
	        return this.doSendChange(event, undefined);
	    }
	    async doSendChange(event, cells = this.getMatchingCells(event.notebook)) {
	        const send = async (event) => {
	            try {
	                await this.client.sendNotification(proto.DidChangeNotebookDocumentNotification.type, {
	                    notebookDocument: Converter.c2p.asVersionedNotebookDocumentIdentifier(event.notebook, this.client.code2ProtocolConverter),
	                    change: Converter.c2p.asNotebookDocumentChangeEvent(event, this.client.code2ProtocolConverter)
	                });
	            }
	            catch (error) {
	                this.client.error('Sending DidChangeNotebookDocumentNotification failed', error);
	                throw error;
	            }
	        };
	        const middleware = this.client.middleware?.notebooks;
	        if (event.cells?.structure !== undefined) {
	            this.notebookSyncInfo.set(event.notebook.uri.toString(), SyncInfo.create(cells ?? []));
	        }
	        return middleware?.didChange !== undefined ? middleware?.didChange(event, send) : send(event);
	    }
	    async sendDidSaveNotebookDocument(notebookDocument) {
	        return this.doSendSave(notebookDocument);
	    }
	    async doSendSave(notebookDocument) {
	        const send = async (notebookDocument) => {
	            try {
	                await this.client.sendNotification(proto.DidSaveNotebookDocumentNotification.type, {
	                    notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(notebookDocument.uri) }
	                });
	            }
	            catch (error) {
	                this.client.error('Sending DidSaveNotebookDocumentNotification failed', error);
	                throw error;
	            }
	        };
	        const middleware = this.client.middleware?.notebooks;
	        return middleware?.didSave !== undefined ? middleware.didSave(notebookDocument, send) : send(notebookDocument);
	    }
	    async sendDidCloseNotebookDocument(notebookDocument) {
	        return this.doSendClose(notebookDocument, this.getMatchingCells(notebookDocument) ?? []);
	    }
	    async doSendClose(notebookDocument, cells) {
	        const send = async (notebookDocument, cells) => {
	            try {
	                await this.client.sendNotification(proto.DidCloseNotebookDocumentNotification.type, {
	                    notebookDocument: { uri: this.client.code2ProtocolConverter.asUri(notebookDocument.uri) },
	                    cellTextDocuments: cells.map(cell => this.client.code2ProtocolConverter.asTextDocumentIdentifier(cell.document))
	                });
	            }
	            catch (error) {
	                this.client.error('Sending DidCloseNotebookDocumentNotification failed', error);
	                throw error;
	            }
	        };
	        const middleware = this.client.middleware?.notebooks;
	        this.notebookSyncInfo.delete(notebookDocument.uri.toString());
	        return middleware?.didClose !== undefined ? middleware.didClose(notebookDocument, cells, send) : send(notebookDocument, cells);
	    }
	    asNotebookDocumentChangeEvent(notebook, event, syncInfo, matchingCells) {
	        if (event !== undefined && event.notebook !== notebook) {
	            throw new Error('Notebook must be identical');
	        }
	        const result = {
	            notebook: notebook
	        };
	        if (event?.metadata !== undefined) {
	            result.metadata = Converter.c2p.asMetadata(event.metadata);
	        }
	        let matchingCellsSet;
	        if (event?.cellChanges !== undefined && event.cellChanges.length > 0) {
	            const data = [];
	            // Only consider the new matching cells.
	            matchingCellsSet = new Set(matchingCells.map(cell => cell.document.uri.toString()));
	            for (const cellChange of event.cellChanges) {
	                if (matchingCellsSet.has(cellChange.cell.document.uri.toString()) && (cellChange.executionSummary !== undefined || cellChange.metadata !== undefined)) {
	                    data.push(cellChange.cell);
	                }
	            }
	            if (data.length > 0) {
	                result.cells = result.cells ?? {};
	                result.cells.data = data;
	            }
	        }
	        if (((event?.contentChanges !== undefined && event.contentChanges.length > 0) || event === undefined) && syncInfo !== undefined && matchingCells !== undefined) {
	            // We still have matching cells. Check if the cell changes
	            // affect the notebook on the server side.
	            const oldCells = syncInfo.cells;
	            const newCells = matchingCells;
	            // meta data changes are reported using on the cell itself. So we can ignore comparing
	            // it which has a positive effect on performance.
	            const diff = $NotebookCell.computeDiff(oldCells, newCells, false);
	            let addedCells;
	            let removedCells;
	            if (diff !== undefined) {
	                addedCells = diff.cells === undefined
	                    ? new Map()
	                    : new Map(diff.cells.map(cell => [cell.document.uri.toString(), cell]));
	                removedCells = diff.deleteCount === 0
	                    ? new Map()
	                    : new Map(oldCells.slice(diff.start, diff.start + diff.deleteCount).map(cell => [cell.document.uri.toString(), cell]));
	                // Remove the onces that got deleted and inserted again.
	                for (const key of Array.from(removedCells.keys())) {
	                    if (addedCells.has(key)) {
	                        removedCells.delete(key);
	                        addedCells.delete(key);
	                    }
	                }
	                result.cells = result.cells ?? {};
	                const didOpen = [];
	                const didClose = [];
	                if (addedCells.size > 0 || removedCells.size > 0) {
	                    for (const cell of addedCells.values()) {
	                        didOpen.push(cell);
	                    }
	                    for (const cell of removedCells.values()) {
	                        didClose.push(cell);
	                    }
	                }
	                result.cells.structure = {
	                    array: diff,
	                    didOpen,
	                    didClose
	                };
	            }
	        }
	        // The notebook is a property as well.
	        return Object.keys(result).length > 1 ? result : undefined;
	    }
	    getMatchingCells(notebookDocument, cells = notebookDocument.getCells()) {
	        if (this.options.notebookSelector === undefined) {
	            return undefined;
	        }
	        for (const item of this.options.notebookSelector) {
	            if (item.notebook === undefined || $NotebookDocumentFilter.matchNotebook(item.notebook, notebookDocument)) {
	                const filtered = this.filterCells(notebookDocument, cells, item.cells);
	                return filtered.length === 0 ? undefined : filtered;
	            }
	        }
	        return undefined;
	    }
	    cellMatches(notebookDocument, cell) {
	        const cells = this.getMatchingCells(notebookDocument, [cell]);
	        return cells !== undefined && cells[0] === cell;
	    }
	    filterCells(notebookDocument, cells, cellSelector) {
	        const filtered = cellSelector !== undefined ? cells.filter((cell) => {
	            const cellLanguage = cell.document.languageId;
	            return cellSelector.some((filter => (filter.language === '*' || cellLanguage === filter.language)));
	        }) : cells;
	        return typeof this.client.clientOptions.notebookDocumentOptions?.filterCells === 'function'
	            ? this.client.clientOptions.notebookDocumentOptions.filterCells(notebookDocument, filtered)
	            : filtered;
	    }
	}
	class NotebookDocumentSyncFeature {
	    constructor(client) {
	        this.client = client;
	        this.registrations = new Map();
	        this.registrationType = proto.NotebookDocumentSyncRegistrationType.type;
	        // We don't receive an event for cells where the document changes its language mode
	        // Since we allow servers to filter on the language mode we fire such an event ourselves.
	        vscode.workspace.onDidOpenTextDocument((textDocument) => {
	            if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
	                return;
	            }
	            const [notebookDocument, notebookCell] = this.findNotebookDocumentAndCell(textDocument);
	            if (notebookDocument === undefined || notebookCell === undefined) {
	                return;
	            }
	            for (const provider of this.registrations.values()) {
	                if (provider instanceof NotebookDocumentSyncFeatureProvider) {
	                    provider.didOpenNotebookCellTextDocument(notebookDocument, notebookCell);
	                }
	            }
	        });
	        vscode.workspace.onDidChangeTextDocument((event) => {
	            if (event.contentChanges.length === 0) {
	                return;
	            }
	            const textDocument = event.document;
	            if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
	                return;
	            }
	            const [notebookDocument,] = this.findNotebookDocumentAndCell(textDocument);
	            if (notebookDocument === undefined) {
	                return;
	            }
	            for (const provider of this.registrations.values()) {
	                if (provider instanceof NotebookDocumentSyncFeatureProvider) {
	                    provider.didChangeNotebookCellTextDocument(notebookDocument, event);
	                }
	            }
	        });
	        vscode.workspace.onDidCloseTextDocument((textDocument) => {
	            if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
	                return;
	            }
	            // There are two cases when we receive a close for a text document
	            // 1: the cell got removed. This is handled in `onDidChangeNotebookCells`
	            // 2: the language mode of a cell changed. This keeps the URI stable so
	            //    we will still find the cell and the notebook document.
	            const [notebookDocument, notebookCell] = this.findNotebookDocumentAndCell(textDocument);
	            if (notebookDocument === undefined || notebookCell === undefined) {
	                return;
	            }
	            for (const provider of this.registrations.values()) {
	                if (provider instanceof NotebookDocumentSyncFeatureProvider) {
	                    provider.didCloseNotebookCellTextDocument(notebookDocument, notebookCell);
	                }
	            }
	        });
	    }
	    getState() {
	        if (this.registrations.size === 0) {
	            return { kind: 'document', id: this.registrationType.method, registrations: false, matches: false };
	        }
	        for (const provider of this.registrations.values()) {
	            const state = provider.getState();
	            if (state.kind === 'document' && state.registrations === true && state.matches === true) {
	                return { kind: 'document', id: this.registrationType.method, registrations: true, matches: true };
	            }
	        }
	        return { kind: 'document', id: this.registrationType.method, registrations: true, matches: false };
	    }
	    fillClientCapabilities(capabilities) {
	        const synchronization = ensure(ensure(capabilities, 'notebookDocument'), 'synchronization');
	        synchronization.dynamicRegistration = true;
	        synchronization.executionSummarySupport = true;
	    }
	    preInitialize(capabilities) {
	        const options = capabilities.notebookDocumentSync;
	        if (options === undefined) {
	            return;
	        }
	        this.dedicatedChannel = this.client.protocol2CodeConverter.asDocumentSelector($NotebookDocumentSyncOptions.asDocumentSelector(options));
	    }
	    initialize(capabilities) {
	        const options = capabilities.notebookDocumentSync;
	        if (options === undefined) {
	            return;
	        }
	        const id = options.id ?? UUID.generateUuid();
	        this.register({ id, registerOptions: options });
	    }
	    register(data) {
	        const provider = new NotebookDocumentSyncFeatureProvider(this.client, data.registerOptions);
	        this.registrations.set(data.id, provider);
	    }
	    unregister(id) {
	        const provider = this.registrations.get(id);
	        provider && provider.dispose();
	    }
	    clear() {
	        for (const provider of this.registrations.values()) {
	            provider.dispose();
	        }
	        this.registrations.clear();
	    }
	    handles(textDocument) {
	        if (textDocument.uri.scheme !== NotebookDocumentSyncFeature.CellScheme) {
	            return false;
	        }
	        if (this.dedicatedChannel !== undefined && vscode.languages.match(this.dedicatedChannel, textDocument) > 0) {
	            return true;
	        }
	        for (const provider of this.registrations.values()) {
	            if (provider.handles(textDocument)) {
	                return true;
	            }
	        }
	        return false;
	    }
	    getProvider(notebookCell) {
	        for (const provider of this.registrations.values()) {
	            if (provider.handles(notebookCell.document)) {
	                return provider;
	            }
	        }
	        return undefined;
	    }
	    findNotebookDocumentAndCell(textDocument) {
	        const uri = textDocument.uri.toString();
	        for (const notebookDocument of vscode.workspace.notebookDocuments) {
	            for (const cell of notebookDocument.getCells()) {
	                if (cell.document.uri.toString() === uri) {
	                    return [notebookDocument, cell];
	                }
	            }
	        }
	        return [undefined, undefined];
	    }
	}
	notebook.NotebookDocumentSyncFeature = NotebookDocumentSyncFeature;
	NotebookDocumentSyncFeature.CellScheme = 'vscode-notebook-cell';
	return notebook;
}

var configuration = {};

var hasRequiredConfiguration;

function requireConfiguration () {
	if (hasRequiredConfiguration) return configuration;
	hasRequiredConfiguration = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(configuration, "__esModule", { value: true });
	configuration.SyncConfigurationFeature = configuration.toJSONObject = configuration.ConfigurationFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const Is = requireIs$2();
	const UUID = requireUuid();
	const features_1 = requireFeatures();
	/**
	 * Configuration pull model. From server to client.
	 */
	class ConfigurationFeature {
	    constructor(client) {
	        this._client = client;
	    }
	    getState() {
	        return { kind: 'static' };
	    }
	    fillClientCapabilities(capabilities) {
	        capabilities.workspace = capabilities.workspace || {};
	        capabilities.workspace.configuration = true;
	    }
	    initialize() {
	        let client = this._client;
	        client.onRequest(vscode_languageserver_protocol_1.ConfigurationRequest.type, (params, token) => {
	            let configuration = (params) => {
	                let result = [];
	                for (let item of params.items) {
	                    let resource = item.scopeUri !== void 0 && item.scopeUri !== null ? this._client.protocol2CodeConverter.asUri(item.scopeUri) : undefined;
	                    result.push(this.getConfiguration(resource, item.section !== null ? item.section : undefined));
	                }
	                return result;
	            };
	            let middleware = client.middleware.workspace;
	            return middleware && middleware.configuration
	                ? middleware.configuration(params, token, configuration)
	                : configuration(params);
	        });
	    }
	    getConfiguration(resource, section) {
	        let result = null;
	        if (section) {
	            let index = section.lastIndexOf('.');
	            if (index === -1) {
	                result = toJSONObject(vscode_1.workspace.getConfiguration(undefined, resource).get(section));
	            }
	            else {
	                let config = vscode_1.workspace.getConfiguration(section.substr(0, index), resource);
	                if (config) {
	                    result = toJSONObject(config.get(section.substr(index + 1)));
	                }
	            }
	        }
	        else {
	            let config = vscode_1.workspace.getConfiguration(undefined, resource);
	            result = {};
	            for (let key of Object.keys(config)) {
	                if (config.has(key)) {
	                    result[key] = toJSONObject(config.get(key));
	                }
	            }
	        }
	        if (result === undefined) {
	            result = null;
	        }
	        return result;
	    }
	    clear() {
	    }
	}
	configuration.ConfigurationFeature = ConfigurationFeature;
	function toJSONObject(obj) {
	    if (obj) {
	        if (Array.isArray(obj)) {
	            return obj.map(toJSONObject);
	        }
	        else if (typeof obj === 'object') {
	            const res = Object.create(null);
	            for (const key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) {
	                    res[key] = toJSONObject(obj[key]);
	                }
	            }
	            return res;
	        }
	    }
	    return obj;
	}
	configuration.toJSONObject = toJSONObject;
	class SyncConfigurationFeature {
	    constructor(_client) {
	        this._client = _client;
	        this.isCleared = false;
	        this._listeners = new Map();
	    }
	    getState() {
	        return { kind: 'workspace', id: this.registrationType.method, registrations: this._listeners.size > 0 };
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'didChangeConfiguration').dynamicRegistration = true;
	    }
	    initialize() {
	        this.isCleared = false;
	        let section = this._client.clientOptions.synchronize?.configurationSection;
	        if (section !== undefined) {
	            this.register({
	                id: UUID.generateUuid(),
	                registerOptions: {
	                    section: section
	                }
	            });
	        }
	    }
	    register(data) {
	        let disposable = vscode_1.workspace.onDidChangeConfiguration((event) => {
	            this.onDidChangeConfiguration(data.registerOptions.section, event);
	        });
	        this._listeners.set(data.id, disposable);
	        if (data.registerOptions.section !== undefined) {
	            this.onDidChangeConfiguration(data.registerOptions.section, undefined);
	        }
	    }
	    unregister(id) {
	        let disposable = this._listeners.get(id);
	        if (disposable) {
	            this._listeners.delete(id);
	            disposable.dispose();
	        }
	    }
	    clear() {
	        for (const disposable of this._listeners.values()) {
	            disposable.dispose();
	        }
	        this._listeners.clear();
	        this.isCleared = true;
	    }
	    onDidChangeConfiguration(configurationSection, event) {
	        if (this.isCleared) {
	            return;
	        }
	        let sections;
	        if (Is.string(configurationSection)) {
	            sections = [configurationSection];
	        }
	        else {
	            sections = configurationSection;
	        }
	        if (sections !== undefined && event !== undefined) {
	            let affected = sections.some((section) => event.affectsConfiguration(section));
	            if (!affected) {
	                return;
	            }
	        }
	        const didChangeConfiguration = async (sections) => {
	            if (sections === undefined) {
	                return this._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, { settings: null });
	            }
	            else {
	                return this._client.sendNotification(vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type, { settings: this.extractSettingsInformation(sections) });
	            }
	        };
	        let middleware = this._client.middleware.workspace?.didChangeConfiguration;
	        (middleware ? middleware(sections, didChangeConfiguration) : didChangeConfiguration(sections)).catch((error) => {
	            this._client.error(`Sending notification ${vscode_languageserver_protocol_1.DidChangeConfigurationNotification.type.method} failed`, error);
	        });
	    }
	    extractSettingsInformation(keys) {
	        function ensurePath(config, path) {
	            let current = config;
	            for (let i = 0; i < path.length - 1; i++) {
	                let obj = current[path[i]];
	                if (!obj) {
	                    obj = Object.create(null);
	                    current[path[i]] = obj;
	                }
	                current = obj;
	            }
	            return current;
	        }
	        let resource = this._client.clientOptions.workspaceFolder
	            ? this._client.clientOptions.workspaceFolder.uri
	            : undefined;
	        let result = Object.create(null);
	        for (let i = 0; i < keys.length; i++) {
	            let key = keys[i];
	            let index = key.indexOf('.');
	            let config = null;
	            if (index >= 0) {
	                config = vscode_1.workspace.getConfiguration(key.substr(0, index), resource).get(key.substr(index + 1));
	            }
	            else {
	                config = vscode_1.workspace.getConfiguration(undefined, resource).get(key);
	            }
	            if (config) {
	                let path = keys[i].split('.');
	                ensurePath(result, path)[path[path.length - 1]] = toJSONObject(config);
	            }
	        }
	        return result;
	    }
	}
	configuration.SyncConfigurationFeature = SyncConfigurationFeature;
	return configuration;
}

var textSynchronization = {};

var hasRequiredTextSynchronization;

function requireTextSynchronization () {
	if (hasRequiredTextSynchronization) return textSynchronization;
	hasRequiredTextSynchronization = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(textSynchronization, "__esModule", { value: true });
	textSynchronization.DidSaveTextDocumentFeature = textSynchronization.WillSaveWaitUntilFeature = textSynchronization.WillSaveFeature = textSynchronization.DidChangeTextDocumentFeature = textSynchronization.DidCloseTextDocumentFeature = textSynchronization.DidOpenTextDocumentFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class DidOpenTextDocumentFeature extends features_1.TextDocumentEventFeature {
	    constructor(client, syncedDocuments) {
	        super(client, vscode_1.workspace.onDidOpenTextDocument, vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type, () => client.middleware.didOpen, (textDocument) => client.code2ProtocolConverter.asOpenTextDocumentParams(textDocument), (data) => data, features_1.TextDocumentEventFeature.textDocumentFilter);
	        this._syncedDocuments = syncedDocuments;
	    }
	    get openDocuments() {
	        return this._syncedDocuments.values();
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
	            this.register({ id: UUID.generateUuid(), registerOptions: { documentSelector: documentSelector } });
	        }
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.type;
	    }
	    register(data) {
	        super.register(data);
	        if (!data.registerOptions.documentSelector) {
	            return;
	        }
	        const documentSelector = this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector);
	        vscode_1.workspace.textDocuments.forEach((textDocument) => {
	            const uri = textDocument.uri.toString();
	            if (this._syncedDocuments.has(uri)) {
	                return;
	            }
	            if (vscode_1.languages.match(documentSelector, textDocument) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(textDocument)) {
	                const middleware = this._client.middleware;
	                const didOpen = (textDocument) => {
	                    return this._client.sendNotification(this._type, this._createParams(textDocument));
	                };
	                (middleware.didOpen ? middleware.didOpen(textDocument, didOpen) : didOpen(textDocument)).catch((error) => {
	                    this._client.error(`Sending document notification ${this._type.method} failed`, error);
	                });
	                this._syncedDocuments.set(uri, textDocument);
	            }
	        });
	    }
	    getTextDocument(data) {
	        return data;
	    }
	    notificationSent(textDocument, type, params) {
	        this._syncedDocuments.set(textDocument.uri.toString(), textDocument);
	        super.notificationSent(textDocument, type, params);
	    }
	}
	textSynchronization.DidOpenTextDocumentFeature = DidOpenTextDocumentFeature;
	class DidCloseTextDocumentFeature extends features_1.TextDocumentEventFeature {
	    constructor(client, syncedDocuments, pendingTextDocumentChanges) {
	        super(client, vscode_1.workspace.onDidCloseTextDocument, vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type, () => client.middleware.didClose, (textDocument) => client.code2ProtocolConverter.asCloseTextDocumentParams(textDocument), (data) => data, features_1.TextDocumentEventFeature.textDocumentFilter);
	        this._syncedDocuments = syncedDocuments;
	        this._pendingTextDocumentChanges = pendingTextDocumentChanges;
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidCloseTextDocumentNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.openClose) {
	            this.register({ id: UUID.generateUuid(), registerOptions: { documentSelector: documentSelector } });
	        }
	    }
	    async callback(data) {
	        await super.callback(data);
	        this._pendingTextDocumentChanges.delete(data.uri.toString());
	    }
	    getTextDocument(data) {
	        return data;
	    }
	    notificationSent(textDocument, type, params) {
	        this._syncedDocuments.delete(textDocument.uri.toString());
	        super.notificationSent(textDocument, type, params);
	    }
	    unregister(id) {
	        const selector = this._selectors.get(id);
	        // The super call removed the selector from the map
	        // of selectors.
	        super.unregister(id);
	        const selectors = this._selectors.values();
	        this._syncedDocuments.forEach((textDocument) => {
	            if (vscode_1.languages.match(selector, textDocument) > 0 && !this._selectorFilter(selectors, textDocument) && !this._client.hasDedicatedTextSynchronizationFeature(textDocument)) {
	                let middleware = this._client.middleware;
	                let didClose = (textDocument) => {
	                    return this._client.sendNotification(this._type, this._createParams(textDocument));
	                };
	                this._syncedDocuments.delete(textDocument.uri.toString());
	                (middleware.didClose ? middleware.didClose(textDocument, didClose) : didClose(textDocument)).catch((error) => {
	                    this._client.error(`Sending document notification ${this._type.method} failed`, error);
	                });
	            }
	        });
	    }
	}
	textSynchronization.DidCloseTextDocumentFeature = DidCloseTextDocumentFeature;
	class DidChangeTextDocumentFeature extends features_1.DynamicDocumentFeature {
	    constructor(client, pendingTextDocumentChanges) {
	        super(client);
	        this._changeData = new Map();
	        this._onNotificationSent = new vscode_1.EventEmitter();
	        this._onPendingChangeAdded = new vscode_1.EventEmitter();
	        this._pendingTextDocumentChanges = pendingTextDocumentChanges;
	        this._syncKind = vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	    }
	    get onNotificationSent() {
	        return this._onNotificationSent.event;
	    }
	    get onPendingChangeAdded() {
	        return this._onPendingChangeAdded.event;
	    }
	    get syncKind() {
	        return this._syncKind;
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.change !== undefined && textDocumentSyncOptions.change !== vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
	            this.register({
	                id: UUID.generateUuid(),
	                registerOptions: Object.assign({}, { documentSelector: documentSelector }, { syncKind: textDocumentSyncOptions.change })
	            });
	        }
	    }
	    register(data) {
	        if (!data.registerOptions.documentSelector) {
	            return;
	        }
	        if (!this._listener) {
	            this._listener = vscode_1.workspace.onDidChangeTextDocument(this.callback, this);
	        }
	        this._changeData.set(data.id, {
	            syncKind: data.registerOptions.syncKind,
	            documentSelector: this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector),
	        });
	        this.updateSyncKind(data.registerOptions.syncKind);
	    }
	    *getDocumentSelectors() {
	        for (const data of this._changeData.values()) {
	            yield data.documentSelector;
	        }
	    }
	    async callback(event) {
	        // Text document changes are send for dirty changes as well. We don't
	        // have dirty / un-dirty events in the LSP so we ignore content changes
	        // with length zero.
	        if (event.contentChanges.length === 0) {
	            return;
	        }
	        // We need to capture the URI and version here since they might change on the text document
	        // until we reach did `didChange` call since the middleware support async execution.
	        const uri = event.document.uri;
	        const version = event.document.version;
	        const promises = [];
	        for (const changeData of this._changeData.values()) {
	            if (vscode_1.languages.match(changeData.documentSelector, event.document) > 0 && !this._client.hasDedicatedTextSynchronizationFeature(event.document)) {
	                const middleware = this._client.middleware;
	                if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental) {
	                    const didChange = async (event) => {
	                        const params = this._client.code2ProtocolConverter.asChangeTextDocumentParams(event, uri, version);
	                        await this._client.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
	                        this.notificationSent(event.document, vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
	                    };
	                    promises.push(middleware.didChange ? middleware.didChange(event, event => didChange(event)) : didChange(event));
	                }
	                else if (changeData.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
	                    const didChange = async (event) => {
	                        const eventUri = event.document.uri.toString();
	                        this._pendingTextDocumentChanges.set(eventUri, event.document);
	                        this._onPendingChangeAdded.fire();
	                    };
	                    promises.push(middleware.didChange ? middleware.didChange(event, event => didChange(event)) : didChange(event));
	                }
	            }
	        }
	        return Promise.all(promises).then(undefined, (error) => {
	            this._client.error(`Sending document notification ${vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type.method} failed`, error);
	            throw error;
	        });
	    }
	    notificationSent(textDocument, type, params) {
	        this._onNotificationSent.fire({ textDocument, type, params });
	    }
	    unregister(id) {
	        this._changeData.delete(id);
	        if (this._changeData.size === 0) {
	            if (this._listener) {
	                this._listener.dispose();
	                this._listener = undefined;
	            }
	            this._syncKind = vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	        }
	        else {
	            this._syncKind = vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	            for (const changeData of this._changeData.values()) {
	                this.updateSyncKind(changeData.syncKind);
	                if (this._syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
	                    break;
	                }
	            }
	        }
	    }
	    clear() {
	        this._pendingTextDocumentChanges.clear();
	        this._changeData.clear();
	        this._syncKind = vscode_languageserver_protocol_1.TextDocumentSyncKind.None;
	        if (this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    getPendingDocumentChanges(excludes) {
	        if (this._pendingTextDocumentChanges.size === 0) {
	            return [];
	        }
	        let result;
	        if (excludes.size === 0) {
	            result = Array.from(this._pendingTextDocumentChanges.values());
	            this._pendingTextDocumentChanges.clear();
	        }
	        else {
	            result = [];
	            for (const entry of this._pendingTextDocumentChanges) {
	                if (!excludes.has(entry[0])) {
	                    result.push(entry[1]);
	                    this._pendingTextDocumentChanges.delete(entry[0]);
	                }
	            }
	        }
	        return result;
	    }
	    getProvider(document) {
	        for (const changeData of this._changeData.values()) {
	            if (vscode_1.languages.match(changeData.documentSelector, document) > 0) {
	                return {
	                    send: (event) => {
	                        return this.callback(event);
	                    }
	                };
	            }
	        }
	        return undefined;
	    }
	    updateSyncKind(syncKind) {
	        if (this._syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
	            return;
	        }
	        switch (syncKind) {
	            case vscode_languageserver_protocol_1.TextDocumentSyncKind.Full:
	                this._syncKind = syncKind;
	                break;
	            case vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental:
	                if (this._syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
	                    this._syncKind = vscode_languageserver_protocol_1.TextDocumentSyncKind.Incremental;
	                }
	                break;
	        }
	    }
	}
	textSynchronization.DidChangeTextDocumentFeature = DidChangeTextDocumentFeature;
	class WillSaveFeature extends features_1.TextDocumentEventFeature {
	    constructor(client) {
	        super(client, vscode_1.workspace.onWillSaveTextDocument, vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type, () => client.middleware.willSave, (willSaveEvent) => client.code2ProtocolConverter.asWillSaveTextDocumentParams(willSaveEvent), (event) => event.document, (selectors, willSaveEvent) => features_1.TextDocumentEventFeature.textDocumentFilter(selectors, willSaveEvent.document));
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.WillSaveTextDocumentNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        let value = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization');
	        value.willSave = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSave) {
	            this.register({
	                id: UUID.generateUuid(),
	                registerOptions: { documentSelector: documentSelector }
	            });
	        }
	    }
	    getTextDocument(data) {
	        return data.document;
	    }
	}
	textSynchronization.WillSaveFeature = WillSaveFeature;
	class WillSaveWaitUntilFeature extends features_1.DynamicDocumentFeature {
	    constructor(client) {
	        super(client);
	        this._selectors = new Map();
	    }
	    getDocumentSelectors() {
	        return this._selectors.values();
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type;
	    }
	    fillClientCapabilities(capabilities) {
	        let value = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization');
	        value.willSaveWaitUntil = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.willSaveWaitUntil) {
	            this.register({
	                id: UUID.generateUuid(),
	                registerOptions: { documentSelector: documentSelector }
	            });
	        }
	    }
	    register(data) {
	        if (!data.registerOptions.documentSelector) {
	            return;
	        }
	        if (!this._listener) {
	            this._listener = vscode_1.workspace.onWillSaveTextDocument(this.callback, this);
	        }
	        this._selectors.set(data.id, this._client.protocol2CodeConverter.asDocumentSelector(data.registerOptions.documentSelector));
	    }
	    callback(event) {
	        if (features_1.TextDocumentEventFeature.textDocumentFilter(this._selectors.values(), event.document) && !this._client.hasDedicatedTextSynchronizationFeature(event.document)) {
	            let middleware = this._client.middleware;
	            let willSaveWaitUntil = (event) => {
	                return this._client.sendRequest(vscode_languageserver_protocol_1.WillSaveTextDocumentWaitUntilRequest.type, this._client.code2ProtocolConverter.asWillSaveTextDocumentParams(event)).then(async (edits) => {
	                    let vEdits = await this._client.protocol2CodeConverter.asTextEdits(edits);
	                    return vEdits === undefined ? [] : vEdits;
	                });
	            };
	            event.waitUntil(middleware.willSaveWaitUntil
	                ? middleware.willSaveWaitUntil(event, willSaveWaitUntil)
	                : willSaveWaitUntil(event));
	        }
	    }
	    unregister(id) {
	        this._selectors.delete(id);
	        if (this._selectors.size === 0 && this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    clear() {
	        this._selectors.clear();
	        if (this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	}
	textSynchronization.WillSaveWaitUntilFeature = WillSaveWaitUntilFeature;
	class DidSaveTextDocumentFeature extends features_1.TextDocumentEventFeature {
	    constructor(client) {
	        super(client, vscode_1.workspace.onDidSaveTextDocument, vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type, () => client.middleware.didSave, (textDocument) => client.code2ProtocolConverter.asSaveTextDocumentParams(textDocument, this._includeText), (data) => data, features_1.TextDocumentEventFeature.textDocumentFilter);
	        this._includeText = false;
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidSaveTextDocumentNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'synchronization').didSave = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const textDocumentSyncOptions = capabilities.resolvedTextDocumentSync;
	        if (documentSelector && textDocumentSyncOptions && textDocumentSyncOptions.save) {
	            const saveOptions = typeof textDocumentSyncOptions.save === 'boolean'
	                ? { includeText: false }
	                : { includeText: !!textDocumentSyncOptions.save.includeText };
	            this.register({
	                id: UUID.generateUuid(),
	                registerOptions: Object.assign({}, { documentSelector: documentSelector }, saveOptions)
	            });
	        }
	    }
	    register(data) {
	        this._includeText = !!data.registerOptions.includeText;
	        super.register(data);
	    }
	    getTextDocument(data) {
	        return data;
	    }
	}
	textSynchronization.DidSaveTextDocumentFeature = DidSaveTextDocumentFeature;
	return textSynchronization;
}

var completion = {};

var hasRequiredCompletion;

function requireCompletion () {
	if (hasRequiredCompletion) return completion;
	hasRequiredCompletion = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(completion, "__esModule", { value: true });
	completion.CompletionItemFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	const SupportedCompletionItemKinds = [
	    vscode_languageserver_protocol_1.CompletionItemKind.Text,
	    vscode_languageserver_protocol_1.CompletionItemKind.Method,
	    vscode_languageserver_protocol_1.CompletionItemKind.Function,
	    vscode_languageserver_protocol_1.CompletionItemKind.Constructor,
	    vscode_languageserver_protocol_1.CompletionItemKind.Field,
	    vscode_languageserver_protocol_1.CompletionItemKind.Variable,
	    vscode_languageserver_protocol_1.CompletionItemKind.Class,
	    vscode_languageserver_protocol_1.CompletionItemKind.Interface,
	    vscode_languageserver_protocol_1.CompletionItemKind.Module,
	    vscode_languageserver_protocol_1.CompletionItemKind.Property,
	    vscode_languageserver_protocol_1.CompletionItemKind.Unit,
	    vscode_languageserver_protocol_1.CompletionItemKind.Value,
	    vscode_languageserver_protocol_1.CompletionItemKind.Enum,
	    vscode_languageserver_protocol_1.CompletionItemKind.Keyword,
	    vscode_languageserver_protocol_1.CompletionItemKind.Snippet,
	    vscode_languageserver_protocol_1.CompletionItemKind.Color,
	    vscode_languageserver_protocol_1.CompletionItemKind.File,
	    vscode_languageserver_protocol_1.CompletionItemKind.Reference,
	    vscode_languageserver_protocol_1.CompletionItemKind.Folder,
	    vscode_languageserver_protocol_1.CompletionItemKind.EnumMember,
	    vscode_languageserver_protocol_1.CompletionItemKind.Constant,
	    vscode_languageserver_protocol_1.CompletionItemKind.Struct,
	    vscode_languageserver_protocol_1.CompletionItemKind.Event,
	    vscode_languageserver_protocol_1.CompletionItemKind.Operator,
	    vscode_languageserver_protocol_1.CompletionItemKind.TypeParameter
	];
	class CompletionItemFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.CompletionRequest.type);
	        this.labelDetailsSupport = new Map();
	    }
	    fillClientCapabilities(capabilities) {
	        let completion = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'completion');
	        completion.dynamicRegistration = true;
	        completion.contextSupport = true;
	        completion.completionItem = {
	            snippetSupport: true,
	            commitCharactersSupport: true,
	            documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText],
	            deprecatedSupport: true,
	            preselectSupport: true,
	            tagSupport: { valueSet: [vscode_languageserver_protocol_1.CompletionItemTag.Deprecated] },
	            insertReplaceSupport: true,
	            resolveSupport: {
	                properties: ['documentation', 'detail', 'additionalTextEdits']
	            },
	            insertTextModeSupport: { valueSet: [vscode_languageserver_protocol_1.InsertTextMode.asIs, vscode_languageserver_protocol_1.InsertTextMode.adjustIndentation] },
	            labelDetailsSupport: true
	        };
	        completion.insertTextMode = vscode_languageserver_protocol_1.InsertTextMode.adjustIndentation;
	        completion.completionItemKind = { valueSet: SupportedCompletionItemKinds };
	        completion.completionList = {
	            itemDefaults: [
	                'commitCharacters', 'editRange', 'insertTextFormat', 'insertTextMode', 'data'
	            ]
	        };
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.completionProvider);
	        if (!options) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: options
	        });
	    }
	    registerLanguageProvider(options, id) {
	        this.labelDetailsSupport.set(id, !!options.completionItem?.labelDetailsSupport);
	        const triggerCharacters = options.triggerCharacters ?? [];
	        const defaultCommitCharacters = options.allCommitCharacters;
	        const selector = options.documentSelector;
	        const provider = {
	            provideCompletionItems: (document, position, token, context) => {
	                const client = this._client;
	                const middleware = this._client.middleware;
	                const provideCompletionItems = (document, position, context, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.CompletionRequest.type, client.code2ProtocolConverter.asCompletionParams(document, position, context), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asCompletionResult(result, defaultCommitCharacters, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.CompletionRequest.type, token, error, null);
	                    });
	                };
	                return middleware.provideCompletionItem
	                    ? middleware.provideCompletionItem(document, position, context, token, provideCompletionItems)
	                    : provideCompletionItems(document, position, context, token);
	            },
	            resolveCompletionItem: options.resolveProvider
	                ? (item, token) => {
	                    const client = this._client;
	                    const middleware = this._client.middleware;
	                    const resolveCompletionItem = (item, token) => {
	                        return client.sendRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, client.code2ProtocolConverter.asCompletionItem(item, !!this.labelDetailsSupport.get(id)), token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return null;
	                            }
	                            return client.protocol2CodeConverter.asCompletionItem(result);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.CompletionResolveRequest.type, token, error, item);
	                        });
	                    };
	                    return middleware.resolveCompletionItem
	                        ? middleware.resolveCompletionItem(item, token, resolveCompletionItem)
	                        : resolveCompletionItem(item, token);
	                }
	                : undefined
	        };
	        return [vscode_1.languages.registerCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, ...triggerCharacters), provider];
	    }
	}
	completion.CompletionItemFeature = CompletionItemFeature;
	return completion;
}

var hover = {};

var hasRequiredHover;

function requireHover () {
	if (hasRequiredHover) return hover;
	hasRequiredHover = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(hover, "__esModule", { value: true });
	hover.HoverFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class HoverFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.HoverRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const hoverCapability = ((0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'hover'));
	        hoverCapability.dynamicRegistration = true;
	        hoverCapability.contentFormat = [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText];
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.hoverProvider);
	        if (!options) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: options
	        });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideHover: (document, position, token) => {
	                const client = this._client;
	                const provideHover = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.HoverRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asHover(result);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.HoverRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideHover
	                    ? middleware.provideHover(document, position, token, provideHover)
	                    : provideHover(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerHoverProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	hover.HoverFeature = HoverFeature;
	return hover;
}

var definition = {};

var hasRequiredDefinition;

function requireDefinition () {
	if (hasRequiredDefinition) return definition;
	hasRequiredDefinition = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(definition, "__esModule", { value: true });
	definition.DefinitionFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class DefinitionFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DefinitionRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let definitionSupport = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'definition');
	        definitionSupport.dynamicRegistration = true;
	        definitionSupport.linkSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.definitionProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDefinition: (document, position, token) => {
	                const client = this._client;
	                const provideDefinition = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDefinitionResult(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DefinitionRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDefinition
	                    ? middleware.provideDefinition(document, position, token, provideDefinition)
	                    : provideDefinition(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	definition.DefinitionFeature = DefinitionFeature;
	return definition;
}

var signatureHelp = {};

var hasRequiredSignatureHelp;

function requireSignatureHelp () {
	if (hasRequiredSignatureHelp) return signatureHelp;
	hasRequiredSignatureHelp = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(signatureHelp, "__esModule", { value: true });
	signatureHelp.SignatureHelpFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class SignatureHelpFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.SignatureHelpRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let config = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'signatureHelp');
	        config.dynamicRegistration = true;
	        config.signatureInformation = { documentationFormat: [vscode_languageserver_protocol_1.MarkupKind.Markdown, vscode_languageserver_protocol_1.MarkupKind.PlainText] };
	        config.signatureInformation.parameterInformation = { labelOffsetSupport: true };
	        config.signatureInformation.activeParameterSupport = true;
	        config.contextSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.signatureHelpProvider);
	        if (!options) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: options
	        });
	    }
	    registerLanguageProvider(options) {
	        const provider = {
	            provideSignatureHelp: (document, position, token, context) => {
	                const client = this._client;
	                const providerSignatureHelp = (document, position, context, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, client.code2ProtocolConverter.asSignatureHelpParams(document, position, context), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asSignatureHelp(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.SignatureHelpRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideSignatureHelp
	                    ? middleware.provideSignatureHelp(document, position, context, token, providerSignatureHelp)
	                    : providerSignatureHelp(document, position, context, token);
	            }
	        };
	        return [this.registerProvider(options, provider), provider];
	    }
	    registerProvider(options, provider) {
	        const selector = this._client.protocol2CodeConverter.asDocumentSelector(options.documentSelector);
	        if (options.retriggerCharacters === undefined) {
	            const triggerCharacters = options.triggerCharacters || [];
	            return vscode_1.languages.registerSignatureHelpProvider(selector, provider, ...triggerCharacters);
	        }
	        else {
	            const metaData = {
	                triggerCharacters: options.triggerCharacters || [],
	                retriggerCharacters: options.retriggerCharacters || []
	            };
	            return vscode_1.languages.registerSignatureHelpProvider(selector, provider, metaData);
	        }
	    }
	}
	signatureHelp.SignatureHelpFeature = SignatureHelpFeature;
	return signatureHelp;
}

var documentHighlight = {};

var hasRequiredDocumentHighlight;

function requireDocumentHighlight () {
	if (hasRequiredDocumentHighlight) return documentHighlight;
	hasRequiredDocumentHighlight = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(documentHighlight, "__esModule", { value: true });
	documentHighlight.DocumentHighlightFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class DocumentHighlightFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentHighlightRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'documentHighlight').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.documentHighlightProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDocumentHighlights: (document, position, token) => {
	                const client = this._client;
	                const _provideDocumentHighlights = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDocumentHighlights(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentHighlightRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentHighlights
	                    ? middleware.provideDocumentHighlights(document, position, token, _provideDocumentHighlights)
	                    : _provideDocumentHighlights(document, position, token);
	            }
	        };
	        return [vscode_1.languages.registerDocumentHighlightProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	documentHighlight.DocumentHighlightFeature = DocumentHighlightFeature;
	return documentHighlight;
}

var documentSymbol = {};

var hasRequiredDocumentSymbol;

function requireDocumentSymbol () {
	if (hasRequiredDocumentSymbol) return documentSymbol;
	hasRequiredDocumentSymbol = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DocumentSymbolFeature = exports.SupportedSymbolTags = exports.SupportedSymbolKinds = void 0;
		const vscode_1 = require$$0;
		const vscode_languageserver_protocol_1 = requireMain$1();
		const features_1 = requireFeatures();
		const UUID = requireUuid();
		exports.SupportedSymbolKinds = [
		    vscode_languageserver_protocol_1.SymbolKind.File,
		    vscode_languageserver_protocol_1.SymbolKind.Module,
		    vscode_languageserver_protocol_1.SymbolKind.Namespace,
		    vscode_languageserver_protocol_1.SymbolKind.Package,
		    vscode_languageserver_protocol_1.SymbolKind.Class,
		    vscode_languageserver_protocol_1.SymbolKind.Method,
		    vscode_languageserver_protocol_1.SymbolKind.Property,
		    vscode_languageserver_protocol_1.SymbolKind.Field,
		    vscode_languageserver_protocol_1.SymbolKind.Constructor,
		    vscode_languageserver_protocol_1.SymbolKind.Enum,
		    vscode_languageserver_protocol_1.SymbolKind.Interface,
		    vscode_languageserver_protocol_1.SymbolKind.Function,
		    vscode_languageserver_protocol_1.SymbolKind.Variable,
		    vscode_languageserver_protocol_1.SymbolKind.Constant,
		    vscode_languageserver_protocol_1.SymbolKind.String,
		    vscode_languageserver_protocol_1.SymbolKind.Number,
		    vscode_languageserver_protocol_1.SymbolKind.Boolean,
		    vscode_languageserver_protocol_1.SymbolKind.Array,
		    vscode_languageserver_protocol_1.SymbolKind.Object,
		    vscode_languageserver_protocol_1.SymbolKind.Key,
		    vscode_languageserver_protocol_1.SymbolKind.Null,
		    vscode_languageserver_protocol_1.SymbolKind.EnumMember,
		    vscode_languageserver_protocol_1.SymbolKind.Struct,
		    vscode_languageserver_protocol_1.SymbolKind.Event,
		    vscode_languageserver_protocol_1.SymbolKind.Operator,
		    vscode_languageserver_protocol_1.SymbolKind.TypeParameter
		];
		exports.SupportedSymbolTags = [
		    vscode_languageserver_protocol_1.SymbolTag.Deprecated
		];
		class DocumentSymbolFeature extends features_1.TextDocumentLanguageFeature {
		    constructor(client) {
		        super(client, vscode_languageserver_protocol_1.DocumentSymbolRequest.type);
		    }
		    fillClientCapabilities(capabilities) {
		        let symbolCapabilities = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'documentSymbol');
		        symbolCapabilities.dynamicRegistration = true;
		        symbolCapabilities.symbolKind = {
		            valueSet: exports.SupportedSymbolKinds
		        };
		        symbolCapabilities.hierarchicalDocumentSymbolSupport = true;
		        symbolCapabilities.tagSupport = {
		            valueSet: exports.SupportedSymbolTags
		        };
		        symbolCapabilities.labelSupport = true;
		    }
		    initialize(capabilities, documentSelector) {
		        const options = this.getRegistrationOptions(documentSelector, capabilities.documentSymbolProvider);
		        if (!options) {
		            return;
		        }
		        this.register({ id: UUID.generateUuid(), registerOptions: options });
		    }
		    registerLanguageProvider(options) {
		        const selector = options.documentSelector;
		        const provider = {
		            provideDocumentSymbols: (document, token) => {
		                const client = this._client;
		                const _provideDocumentSymbols = async (document, token) => {
		                    try {
		                        const data = await client.sendRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, client.code2ProtocolConverter.asDocumentSymbolParams(document), token);
		                        if (token.isCancellationRequested || data === undefined || data === null) {
		                            return null;
		                        }
		                        if (data.length === 0) {
		                            return [];
		                        }
		                        else {
		                            const first = data[0];
		                            if (vscode_languageserver_protocol_1.DocumentSymbol.is(first)) {
		                                return await client.protocol2CodeConverter.asDocumentSymbols(data, token);
		                            }
		                            else {
		                                return await client.protocol2CodeConverter.asSymbolInformations(data, token);
		                            }
		                        }
		                    }
		                    catch (error) {
		                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentSymbolRequest.type, token, error, null);
		                    }
		                };
		                const middleware = client.middleware;
		                return middleware.provideDocumentSymbols
		                    ? middleware.provideDocumentSymbols(document, token, _provideDocumentSymbols)
		                    : _provideDocumentSymbols(document, token);
		            }
		        };
		        const metaData = options.label !== undefined ? { label: options.label } : undefined;
		        return [vscode_1.languages.registerDocumentSymbolProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, metaData), provider];
		    }
		}
		exports.DocumentSymbolFeature = DocumentSymbolFeature; 
	} (documentSymbol));
	return documentSymbol;
}

var workspaceSymbol = {};

var hasRequiredWorkspaceSymbol;

function requireWorkspaceSymbol () {
	if (hasRequiredWorkspaceSymbol) return workspaceSymbol;
	hasRequiredWorkspaceSymbol = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(workspaceSymbol, "__esModule", { value: true });
	workspaceSymbol.WorkspaceSymbolFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const documentSymbol_1 = requireDocumentSymbol();
	const UUID = requireUuid();
	class WorkspaceSymbolFeature extends features_1.WorkspaceFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let symbolCapabilities = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'symbol');
	        symbolCapabilities.dynamicRegistration = true;
	        symbolCapabilities.symbolKind = {
	            valueSet: documentSymbol_1.SupportedSymbolKinds
	        };
	        symbolCapabilities.tagSupport = {
	            valueSet: documentSymbol_1.SupportedSymbolTags
	        };
	        symbolCapabilities.resolveSupport = { properties: ['location.range'] };
	    }
	    initialize(capabilities) {
	        if (!capabilities.workspaceSymbolProvider) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: capabilities.workspaceSymbolProvider === true ? { workDoneProgress: false } : capabilities.workspaceSymbolProvider
	        });
	    }
	    registerLanguageProvider(options) {
	        const provider = {
	            provideWorkspaceSymbols: (query, token) => {
	                const client = this._client;
	                const provideWorkspaceSymbols = (query, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, { query }, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asSymbolInformations(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.WorkspaceSymbolRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideWorkspaceSymbols
	                    ? middleware.provideWorkspaceSymbols(query, token, provideWorkspaceSymbols)
	                    : provideWorkspaceSymbols(query, token);
	            },
	            resolveWorkspaceSymbol: options.resolveProvider === true
	                ? (item, token) => {
	                    const client = this._client;
	                    const resolveWorkspaceSymbol = (item, token) => {
	                        return client.sendRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, client.code2ProtocolConverter.asWorkspaceSymbol(item), token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return null;
	                            }
	                            return client.protocol2CodeConverter.asSymbolInformation(result);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.type, token, error, null);
	                        });
	                    };
	                    const middleware = client.middleware;
	                    return middleware.resolveWorkspaceSymbol
	                        ? middleware.resolveWorkspaceSymbol(item, token, resolveWorkspaceSymbol)
	                        : resolveWorkspaceSymbol(item, token);
	                }
	                : undefined
	        };
	        return [vscode_1.languages.registerWorkspaceSymbolProvider(provider), provider];
	    }
	}
	workspaceSymbol.WorkspaceSymbolFeature = WorkspaceSymbolFeature;
	return workspaceSymbol;
}

var reference = {};

var hasRequiredReference;

function requireReference () {
	if (hasRequiredReference) return reference;
	hasRequiredReference = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(reference, "__esModule", { value: true });
	reference.ReferencesFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class ReferencesFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.ReferencesRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'references').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.referencesProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideReferences: (document, position, options, token) => {
	                const client = this._client;
	                const _providerReferences = (document, position, options, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, client.code2ProtocolConverter.asReferenceParams(document, position, options), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asReferences(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.ReferencesRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideReferences
	                    ? middleware.provideReferences(document, position, options, token, _providerReferences)
	                    : _providerReferences(document, position, options, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerReferenceProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	reference.ReferencesFeature = ReferencesFeature;
	return reference;
}

var codeAction = {};

var hasRequiredCodeAction;

function requireCodeAction () {
	if (hasRequiredCodeAction) return codeAction;
	hasRequiredCodeAction = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(codeAction, "__esModule", { value: true });
	codeAction.CodeActionFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const UUID = requireUuid();
	const features_1 = requireFeatures();
	class CodeActionFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.CodeActionRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const cap = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'codeAction');
	        cap.dynamicRegistration = true;
	        cap.isPreferredSupport = true;
	        cap.disabledSupport = true;
	        cap.dataSupport = true;
	        // We can only resolve the edit property.
	        cap.resolveSupport = {
	            properties: ['edit']
	        };
	        cap.codeActionLiteralSupport = {
	            codeActionKind: {
	                valueSet: [
	                    vscode_languageserver_protocol_1.CodeActionKind.Empty,
	                    vscode_languageserver_protocol_1.CodeActionKind.QuickFix,
	                    vscode_languageserver_protocol_1.CodeActionKind.Refactor,
	                    vscode_languageserver_protocol_1.CodeActionKind.RefactorExtract,
	                    vscode_languageserver_protocol_1.CodeActionKind.RefactorInline,
	                    vscode_languageserver_protocol_1.CodeActionKind.RefactorRewrite,
	                    vscode_languageserver_protocol_1.CodeActionKind.Source,
	                    vscode_languageserver_protocol_1.CodeActionKind.SourceOrganizeImports
	                ]
	            }
	        };
	        cap.honorsChangeAnnotations = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.codeActionProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideCodeActions: (document, range, context, token) => {
	                const client = this._client;
	                const _provideCodeActions = async (document, range, context, token) => {
	                    const params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        range: client.code2ProtocolConverter.asRange(range),
	                        context: client.code2ProtocolConverter.asCodeActionContextSync(context)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, params, token).then((values) => {
	                        if (token.isCancellationRequested || values === null || values === undefined) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asCodeActionResult(values, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.CodeActionRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideCodeActions
	                    ? middleware.provideCodeActions(document, range, context, token, _provideCodeActions)
	                    : _provideCodeActions(document, range, context, token);
	            },
	            resolveCodeAction: options.resolveProvider
	                ? (item, token) => {
	                    const client = this._client;
	                    const middleware = this._client.middleware;
	                    const resolveCodeAction = async (item, token) => {
	                        return client.sendRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, client.code2ProtocolConverter.asCodeActionSync(item), token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return item;
	                            }
	                            return client.protocol2CodeConverter.asCodeAction(result, token);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.CodeActionResolveRequest.type, token, error, item);
	                        });
	                    };
	                    return middleware.resolveCodeAction
	                        ? middleware.resolveCodeAction(item, token, resolveCodeAction)
	                        : resolveCodeAction(item, token);
	                }
	                : undefined
	        };
	        return [vscode_1.languages.registerCodeActionsProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, (options.codeActionKinds
	                ? { providedCodeActionKinds: this._client.protocol2CodeConverter.asCodeActionKinds(options.codeActionKinds) }
	                : undefined)), provider];
	    }
	}
	codeAction.CodeActionFeature = CodeActionFeature;
	return codeAction;
}

var codeLens = {};

var hasRequiredCodeLens;

function requireCodeLens () {
	if (hasRequiredCodeLens) return codeLens;
	hasRequiredCodeLens = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(codeLens, "__esModule", { value: true });
	codeLens.CodeLensFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const UUID = requireUuid();
	const features_1 = requireFeatures();
	class CodeLensFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.CodeLensRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'codeLens').dynamicRegistration = true;
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'codeLens').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const client = this._client;
	        client.onRequest(vscode_languageserver_protocol_1.CodeLensRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeCodeLensEmitter.fire();
	            }
	        });
	        const options = this.getRegistrationOptions(documentSelector, capabilities.codeLensProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const eventEmitter = new vscode_1.EventEmitter();
	        const provider = {
	            onDidChangeCodeLenses: eventEmitter.event,
	            provideCodeLenses: (document, token) => {
	                const client = this._client;
	                const provideCodeLenses = (document, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, client.code2ProtocolConverter.asCodeLensParams(document), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asCodeLenses(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.CodeLensRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideCodeLenses
	                    ? middleware.provideCodeLenses(document, token, provideCodeLenses)
	                    : provideCodeLenses(document, token);
	            },
	            resolveCodeLens: (options.resolveProvider)
	                ? (codeLens, token) => {
	                    const client = this._client;
	                    const resolveCodeLens = (codeLens, token) => {
	                        return client.sendRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, client.code2ProtocolConverter.asCodeLens(codeLens), token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return codeLens;
	                            }
	                            return client.protocol2CodeConverter.asCodeLens(result);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.CodeLensResolveRequest.type, token, error, codeLens);
	                        });
	                    };
	                    const middleware = client.middleware;
	                    return middleware.resolveCodeLens
	                        ? middleware.resolveCodeLens(codeLens, token, resolveCodeLens)
	                        : resolveCodeLens(codeLens, token);
	                }
	                : undefined
	        };
	        return [vscode_1.languages.registerCodeLensProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), { provider, onDidChangeCodeLensEmitter: eventEmitter }];
	    }
	}
	codeLens.CodeLensFeature = CodeLensFeature;
	return codeLens;
}

var formatting = {};

var hasRequiredFormatting;

function requireFormatting () {
	if (hasRequiredFormatting) return formatting;
	hasRequiredFormatting = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(formatting, "__esModule", { value: true });
	formatting.DocumentOnTypeFormattingFeature = formatting.DocumentRangeFormattingFeature = formatting.DocumentFormattingFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const UUID = requireUuid();
	const features_1 = requireFeatures();
	var FileFormattingOptions;
	(function (FileFormattingOptions) {
	    function fromConfiguration(document) {
	        const filesConfig = vscode_1.workspace.getConfiguration('files', document);
	        return {
	            trimTrailingWhitespace: filesConfig.get('trimTrailingWhitespace'),
	            trimFinalNewlines: filesConfig.get('trimFinalNewlines'),
	            insertFinalNewline: filesConfig.get('insertFinalNewline'),
	        };
	    }
	    FileFormattingOptions.fromConfiguration = fromConfiguration;
	})(FileFormattingOptions || (FileFormattingOptions = {}));
	class DocumentFormattingFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentFormattingRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'formatting').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.documentFormattingProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDocumentFormattingEdits: (document, options, token) => {
	                const client = this._client;
	                const provideDocumentFormattingEdits = (document, options, token) => {
	                    const params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        options: client.code2ProtocolConverter.asFormattingOptions(options, FileFormattingOptions.fromConfiguration(document))
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, params, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asTextEdits(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentFormattingRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentFormattingEdits
	                    ? middleware.provideDocumentFormattingEdits(document, options, token, provideDocumentFormattingEdits)
	                    : provideDocumentFormattingEdits(document, options, token);
	            }
	        };
	        return [vscode_1.languages.registerDocumentFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	formatting.DocumentFormattingFeature = DocumentFormattingFeature;
	class DocumentRangeFormattingFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'rangeFormatting');
	        capability.dynamicRegistration = true;
	        capability.rangesSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.documentRangeFormattingProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDocumentRangeFormattingEdits: (document, range, options, token) => {
	                const client = this._client;
	                const provideDocumentRangeFormattingEdits = (document, range, options, token) => {
	                    const params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        range: client.code2ProtocolConverter.asRange(range),
	                        options: client.code2ProtocolConverter.asFormattingOptions(options, FileFormattingOptions.fromConfiguration(document))
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, params, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asTextEdits(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentRangeFormattingRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentRangeFormattingEdits
	                    ? middleware.provideDocumentRangeFormattingEdits(document, range, options, token, provideDocumentRangeFormattingEdits)
	                    : provideDocumentRangeFormattingEdits(document, range, options, token);
	            }
	        };
	        if (options.rangesSupport) {
	            provider.provideDocumentRangesFormattingEdits = (document, ranges, options, token) => {
	                const client = this._client;
	                const provideDocumentRangesFormattingEdits = (document, ranges, options, token) => {
	                    const params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        ranges: client.code2ProtocolConverter.asRanges(ranges),
	                        options: client.code2ProtocolConverter.asFormattingOptions(options, FileFormattingOptions.fromConfiguration(document))
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentRangesFormattingRequest.type, params, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asTextEdits(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentRangesFormattingRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentRangesFormattingEdits
	                    ? middleware.provideDocumentRangesFormattingEdits(document, ranges, options, token, provideDocumentRangesFormattingEdits)
	                    : provideDocumentRangesFormattingEdits(document, ranges, options, token);
	            };
	        }
	        return [vscode_1.languages.registerDocumentRangeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	formatting.DocumentRangeFormattingFeature = DocumentRangeFormattingFeature;
	class DocumentOnTypeFormattingFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'onTypeFormatting').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.documentOnTypeFormattingProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideOnTypeFormattingEdits: (document, position, ch, options, token) => {
	                const client = this._client;
	                const provideOnTypeFormattingEdits = (document, position, ch, options, token) => {
	                    let params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        position: client.code2ProtocolConverter.asPosition(position),
	                        ch: ch,
	                        options: client.code2ProtocolConverter.asFormattingOptions(options, FileFormattingOptions.fromConfiguration(document))
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, params, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asTextEdits(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentOnTypeFormattingRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideOnTypeFormattingEdits
	                    ? middleware.provideOnTypeFormattingEdits(document, position, ch, options, token, provideOnTypeFormattingEdits)
	                    : provideOnTypeFormattingEdits(document, position, ch, options, token);
	            }
	        };
	        const moreTriggerCharacter = options.moreTriggerCharacter || [];
	        return [vscode_1.languages.registerOnTypeFormattingEditProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider, options.firstTriggerCharacter, ...moreTriggerCharacter), provider];
	    }
	}
	formatting.DocumentOnTypeFormattingFeature = DocumentOnTypeFormattingFeature;
	return formatting;
}

var rename = {};

var hasRequiredRename;

function requireRename () {
	if (hasRequiredRename) return rename;
	hasRequiredRename = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(rename, "__esModule", { value: true });
	rename.RenameFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const UUID = requireUuid();
	const Is = requireIs$2();
	const features_1 = requireFeatures();
	class RenameFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.RenameRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let rename = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'rename');
	        rename.dynamicRegistration = true;
	        rename.prepareSupport = true;
	        rename.prepareSupportDefaultBehavior = vscode_languageserver_protocol_1.PrepareSupportDefaultBehavior.Identifier;
	        rename.honorsChangeAnnotations = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.renameProvider);
	        if (!options) {
	            return;
	        }
	        if (Is.boolean(capabilities.renameProvider)) {
	            options.prepareProvider = false;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideRenameEdits: (document, position, newName, token) => {
	                const client = this._client;
	                const provideRenameEdits = (document, position, newName, token) => {
	                    let params = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        position: client.code2ProtocolConverter.asPosition(position),
	                        newName: newName
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.RenameRequest.type, params, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asWorkspaceEdit(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.RenameRequest.type, token, error, null, false);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideRenameEdits
	                    ? middleware.provideRenameEdits(document, position, newName, token, provideRenameEdits)
	                    : provideRenameEdits(document, position, newName, token);
	            },
	            prepareRename: options.prepareProvider
	                ? (document, position, token) => {
	                    const client = this._client;
	                    const prepareRename = (document, position, token) => {
	                        let params = {
	                            textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                            position: client.code2ProtocolConverter.asPosition(position),
	                        };
	                        return client.sendRequest(vscode_languageserver_protocol_1.PrepareRenameRequest.type, params, token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return null;
	                            }
	                            if (vscode_languageserver_protocol_1.Range.is(result)) {
	                                return client.protocol2CodeConverter.asRange(result);
	                            }
	                            else if (this.isDefaultBehavior(result)) {
	                                return result.defaultBehavior === true
	                                    ? null
	                                    : Promise.reject(new Error(`The element can't be renamed.`));
	                            }
	                            else if (result && vscode_languageserver_protocol_1.Range.is(result.range)) {
	                                return {
	                                    range: client.protocol2CodeConverter.asRange(result.range),
	                                    placeholder: result.placeholder
	                                };
	                            }
	                            // To cancel the rename vscode API expects a rejected promise.
	                            return Promise.reject(new Error(`The element can't be renamed.`));
	                        }, (error) => {
	                            if (typeof error.message === 'string') {
	                                throw new Error(error.message);
	                            }
	                            else {
	                                throw new Error(`The element can't be renamed.`);
	                            }
	                        });
	                    };
	                    const middleware = client.middleware;
	                    return middleware.prepareRename
	                        ? middleware.prepareRename(document, position, token, prepareRename)
	                        : prepareRename(document, position, token);
	                }
	                : undefined
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerRenameProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	    isDefaultBehavior(value) {
	        const candidate = value;
	        return candidate && Is.boolean(candidate.defaultBehavior);
	    }
	}
	rename.RenameFeature = RenameFeature;
	return rename;
}

var documentLink = {};

var hasRequiredDocumentLink;

function requireDocumentLink () {
	if (hasRequiredDocumentLink) return documentLink;
	hasRequiredDocumentLink = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(documentLink, "__esModule", { value: true });
	documentLink.DocumentLinkFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class DocumentLinkFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentLinkRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const documentLinkCapabilities = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'documentLink');
	        documentLinkCapabilities.dynamicRegistration = true;
	        documentLinkCapabilities.tooltipSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.documentLinkProvider);
	        if (!options) {
	            return;
	        }
	        this.register({ id: UUID.generateUuid(), registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDocumentLinks: (document, token) => {
	                const client = this._client;
	                const provideDocumentLinks = (document, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, client.code2ProtocolConverter.asDocumentLinkParams(document), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDocumentLinks(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentLinkRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentLinks
	                    ? middleware.provideDocumentLinks(document, token, provideDocumentLinks)
	                    : provideDocumentLinks(document, token);
	            },
	            resolveDocumentLink: options.resolveProvider
	                ? (link, token) => {
	                    const client = this._client;
	                    let resolveDocumentLink = (link, token) => {
	                        return client.sendRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, client.code2ProtocolConverter.asDocumentLink(link), token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return link;
	                            }
	                            return client.protocol2CodeConverter.asDocumentLink(result);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentLinkResolveRequest.type, token, error, link);
	                        });
	                    };
	                    const middleware = client.middleware;
	                    return middleware.resolveDocumentLink
	                        ? middleware.resolveDocumentLink(link, token, resolveDocumentLink)
	                        : resolveDocumentLink(link, token);
	                }
	                : undefined
	        };
	        return [vscode_1.languages.registerDocumentLinkProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	documentLink.DocumentLinkFeature = DocumentLinkFeature;
	return documentLink;
}

var executeCommand = {};

var hasRequiredExecuteCommand;

function requireExecuteCommand () {
	if (hasRequiredExecuteCommand) return executeCommand;
	hasRequiredExecuteCommand = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(executeCommand, "__esModule", { value: true });
	executeCommand.ExecuteCommandFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const UUID = requireUuid();
	const features_1 = requireFeatures();
	class ExecuteCommandFeature {
	    constructor(client) {
	        this._client = client;
	        this._commands = new Map();
	    }
	    getState() {
	        return { kind: 'workspace', id: this.registrationType.method, registrations: this._commands.size > 0 };
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.ExecuteCommandRequest.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'executeCommand').dynamicRegistration = true;
	    }
	    initialize(capabilities) {
	        if (!capabilities.executeCommandProvider) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: Object.assign({}, capabilities.executeCommandProvider)
	        });
	    }
	    register(data) {
	        const client = this._client;
	        const middleware = client.middleware;
	        const executeCommand = (command, args) => {
	            let params = {
	                command,
	                arguments: args
	            };
	            return client.sendRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, params).then(undefined, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.ExecuteCommandRequest.type, undefined, error, undefined);
	            });
	        };
	        if (data.registerOptions.commands) {
	            const disposables = [];
	            for (const command of data.registerOptions.commands) {
	                disposables.push(vscode_1.commands.registerCommand(command, (...args) => {
	                    return middleware.executeCommand
	                        ? middleware.executeCommand(command, args, executeCommand)
	                        : executeCommand(command, args);
	                }));
	            }
	            this._commands.set(data.id, disposables);
	        }
	    }
	    unregister(id) {
	        let disposables = this._commands.get(id);
	        if (disposables) {
	            disposables.forEach(disposable => disposable.dispose());
	        }
	    }
	    clear() {
	        this._commands.forEach((value) => {
	            value.forEach(disposable => disposable.dispose());
	        });
	        this._commands.clear();
	    }
	}
	executeCommand.ExecuteCommandFeature = ExecuteCommandFeature;
	return executeCommand;
}

var fileSystemWatcher = {};

var hasRequiredFileSystemWatcher;

function requireFileSystemWatcher () {
	if (hasRequiredFileSystemWatcher) return fileSystemWatcher;
	hasRequiredFileSystemWatcher = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(fileSystemWatcher, "__esModule", { value: true });
	fileSystemWatcher.FileSystemWatcherFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class FileSystemWatcherFeature {
	    constructor(client, notifyFileEvent) {
	        this._client = client;
	        this._notifyFileEvent = notifyFileEvent;
	        this._watchers = new Map();
	    }
	    getState() {
	        return { kind: 'workspace', id: this.registrationType.method, registrations: this._watchers.size > 0 };
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type;
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'didChangeWatchedFiles').dynamicRegistration = true;
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'didChangeWatchedFiles').relativePatternSupport = true;
	    }
	    initialize(_capabilities, _documentSelector) {
	    }
	    register(data) {
	        if (!Array.isArray(data.registerOptions.watchers)) {
	            return;
	        }
	        const disposables = [];
	        for (const watcher of data.registerOptions.watchers) {
	            const globPattern = this._client.protocol2CodeConverter.asGlobPattern(watcher.globPattern);
	            if (globPattern === undefined) {
	                continue;
	            }
	            let watchCreate = true, watchChange = true, watchDelete = true;
	            if (watcher.kind !== undefined && watcher.kind !== null) {
	                watchCreate = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Create) !== 0;
	                watchChange = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Change) !== 0;
	                watchDelete = (watcher.kind & vscode_languageserver_protocol_1.WatchKind.Delete) !== 0;
	            }
	            const fileSystemWatcher = vscode_1.workspace.createFileSystemWatcher(globPattern, !watchCreate, !watchChange, !watchDelete);
	            this.hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete, disposables);
	            disposables.push(fileSystemWatcher);
	        }
	        this._watchers.set(data.id, disposables);
	    }
	    registerRaw(id, fileSystemWatchers) {
	        let disposables = [];
	        for (let fileSystemWatcher of fileSystemWatchers) {
	            this.hookListeners(fileSystemWatcher, true, true, true, disposables);
	        }
	        this._watchers.set(id, disposables);
	    }
	    hookListeners(fileSystemWatcher, watchCreate, watchChange, watchDelete, listeners) {
	        if (watchCreate) {
	            fileSystemWatcher.onDidCreate((resource) => this._notifyFileEvent({
	                uri: this._client.code2ProtocolConverter.asUri(resource),
	                type: vscode_languageserver_protocol_1.FileChangeType.Created
	            }), null, listeners);
	        }
	        if (watchChange) {
	            fileSystemWatcher.onDidChange((resource) => this._notifyFileEvent({
	                uri: this._client.code2ProtocolConverter.asUri(resource),
	                type: vscode_languageserver_protocol_1.FileChangeType.Changed
	            }), null, listeners);
	        }
	        if (watchDelete) {
	            fileSystemWatcher.onDidDelete((resource) => this._notifyFileEvent({
	                uri: this._client.code2ProtocolConverter.asUri(resource),
	                type: vscode_languageserver_protocol_1.FileChangeType.Deleted
	            }), null, listeners);
	        }
	    }
	    unregister(id) {
	        let disposables = this._watchers.get(id);
	        if (disposables) {
	            for (let disposable of disposables) {
	                disposable.dispose();
	            }
	        }
	    }
	    clear() {
	        this._watchers.forEach((disposables) => {
	            for (let disposable of disposables) {
	                disposable.dispose();
	            }
	        });
	        this._watchers.clear();
	    }
	}
	fileSystemWatcher.FileSystemWatcherFeature = FileSystemWatcherFeature;
	return fileSystemWatcher;
}

var colorProvider = {};

var hasRequiredColorProvider;

function requireColorProvider () {
	if (hasRequiredColorProvider) return colorProvider;
	hasRequiredColorProvider = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(colorProvider, "__esModule", { value: true });
	colorProvider.ColorProviderFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class ColorProviderFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DocumentColorRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'colorProvider').dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let [id, options] = this.getRegistration(documentSelector, capabilities.colorProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideColorPresentations: (color, context, token) => {
	                const client = this._client;
	                const provideColorPresentations = (color, context, token) => {
	                    const requestParams = {
	                        color,
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(context.document),
	                        range: client.code2ProtocolConverter.asRange(context.range)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, requestParams, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return this._client.protocol2CodeConverter.asColorPresentations(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.ColorPresentationRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideColorPresentations
	                    ? middleware.provideColorPresentations(color, context, token, provideColorPresentations)
	                    : provideColorPresentations(color, context, token);
	            },
	            provideDocumentColors: (document, token) => {
	                const client = this._client;
	                const provideDocumentColors = (document, token) => {
	                    const requestParams = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, requestParams, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return this._client.protocol2CodeConverter.asColorInformations(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DocumentColorRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDocumentColors
	                    ? middleware.provideDocumentColors(document, token, provideDocumentColors)
	                    : provideDocumentColors(document, token);
	            }
	        };
	        return [vscode_1.languages.registerColorProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	colorProvider.ColorProviderFeature = ColorProviderFeature;
	return colorProvider;
}

var implementation = {};

var hasRequiredImplementation;

function requireImplementation () {
	if (hasRequiredImplementation) return implementation;
	hasRequiredImplementation = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(implementation, "__esModule", { value: true });
	implementation.ImplementationFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class ImplementationFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.ImplementationRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let implementationSupport = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'implementation');
	        implementationSupport.dynamicRegistration = true;
	        implementationSupport.linkSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let [id, options] = this.getRegistration(documentSelector, capabilities.implementationProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideImplementation: (document, position, token) => {
	                const client = this._client;
	                const provideImplementation = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDefinitionResult(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.ImplementationRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideImplementation
	                    ? middleware.provideImplementation(document, position, token, provideImplementation)
	                    : provideImplementation(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerImplementationProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	implementation.ImplementationFeature = ImplementationFeature;
	return implementation;
}

var typeDefinition = {};

var hasRequiredTypeDefinition;

function requireTypeDefinition () {
	if (hasRequiredTypeDefinition) return typeDefinition;
	hasRequiredTypeDefinition = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(typeDefinition, "__esModule", { value: true });
	typeDefinition.TypeDefinitionFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class TypeDefinitionFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.TypeDefinitionRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'typeDefinition').dynamicRegistration = true;
	        let typeDefinitionSupport = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'typeDefinition');
	        typeDefinitionSupport.dynamicRegistration = true;
	        typeDefinitionSupport.linkSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let [id, options] = this.getRegistration(documentSelector, capabilities.typeDefinitionProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideTypeDefinition: (document, position, token) => {
	                const client = this._client;
	                const provideTypeDefinition = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDefinitionResult(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.TypeDefinitionRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideTypeDefinition
	                    ? middleware.provideTypeDefinition(document, position, token, provideTypeDefinition)
	                    : provideTypeDefinition(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerTypeDefinitionProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	typeDefinition.TypeDefinitionFeature = TypeDefinitionFeature;
	return typeDefinition;
}

var workspaceFolder = {};

var hasRequiredWorkspaceFolder;

function requireWorkspaceFolder () {
	if (hasRequiredWorkspaceFolder) return workspaceFolder;
	hasRequiredWorkspaceFolder = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(workspaceFolder, "__esModule", { value: true });
	workspaceFolder.WorkspaceFoldersFeature = workspaceFolder.arrayDiff = void 0;
	const UUID = requireUuid();
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	function access(target, key) {
	    if (target === undefined || target === null) {
	        return undefined;
	    }
	    return target[key];
	}
	function arrayDiff(left, right) {
	    return left.filter(element => right.indexOf(element) < 0);
	}
	workspaceFolder.arrayDiff = arrayDiff;
	class WorkspaceFoldersFeature {
	    constructor(client) {
	        this._client = client;
	        this._listeners = new Map();
	    }
	    getState() {
	        return { kind: 'workspace', id: this.registrationType.method, registrations: this._listeners.size > 0 };
	    }
	    get registrationType() {
	        return vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type;
	    }
	    fillInitializeParams(params) {
	        const folders = vscode_1.workspace.workspaceFolders;
	        this.initializeWithFolders(folders);
	        if (folders === void 0) {
	            params.workspaceFolders = null;
	        }
	        else {
	            params.workspaceFolders = folders.map(folder => this.asProtocol(folder));
	        }
	    }
	    initializeWithFolders(currentWorkspaceFolders) {
	        this._initialFolders = currentWorkspaceFolders;
	    }
	    fillClientCapabilities(capabilities) {
	        capabilities.workspace = capabilities.workspace || {};
	        capabilities.workspace.workspaceFolders = true;
	    }
	    initialize(capabilities) {
	        const client = this._client;
	        client.onRequest(vscode_languageserver_protocol_1.WorkspaceFoldersRequest.type, (token) => {
	            const workspaceFolders = () => {
	                const folders = vscode_1.workspace.workspaceFolders;
	                if (folders === undefined) {
	                    return null;
	                }
	                const result = folders.map((folder) => {
	                    return this.asProtocol(folder);
	                });
	                return result;
	            };
	            const middleware = client.middleware.workspace;
	            return middleware && middleware.workspaceFolders
	                ? middleware.workspaceFolders(token, workspaceFolders)
	                : workspaceFolders();
	        });
	        const value = access(access(access(capabilities, 'workspace'), 'workspaceFolders'), 'changeNotifications');
	        let id;
	        if (typeof value === 'string') {
	            id = value;
	        }
	        else if (value === true) {
	            id = UUID.generateUuid();
	        }
	        if (id) {
	            this.register({ id: id, registerOptions: undefined });
	        }
	    }
	    sendInitialEvent(currentWorkspaceFolders) {
	        let promise;
	        if (this._initialFolders && currentWorkspaceFolders) {
	            const removed = arrayDiff(this._initialFolders, currentWorkspaceFolders);
	            const added = arrayDiff(currentWorkspaceFolders, this._initialFolders);
	            if (added.length > 0 || removed.length > 0) {
	                promise = this.doSendEvent(added, removed);
	            }
	        }
	        else if (this._initialFolders) {
	            promise = this.doSendEvent([], this._initialFolders);
	        }
	        else if (currentWorkspaceFolders) {
	            promise = this.doSendEvent(currentWorkspaceFolders, []);
	        }
	        if (promise !== undefined) {
	            promise.catch((error) => {
	                this._client.error(`Sending notification ${vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type.method} failed`, error);
	            });
	        }
	    }
	    doSendEvent(addedFolders, removedFolders) {
	        let params = {
	            event: {
	                added: addedFolders.map(folder => this.asProtocol(folder)),
	                removed: removedFolders.map(folder => this.asProtocol(folder))
	            }
	        };
	        return this._client.sendNotification(vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type, params);
	    }
	    register(data) {
	        let id = data.id;
	        let client = this._client;
	        let disposable = vscode_1.workspace.onDidChangeWorkspaceFolders((event) => {
	            let didChangeWorkspaceFolders = (event) => {
	                return this.doSendEvent(event.added, event.removed);
	            };
	            let middleware = client.middleware.workspace;
	            const promise = middleware && middleware.didChangeWorkspaceFolders
	                ? middleware.didChangeWorkspaceFolders(event, didChangeWorkspaceFolders)
	                : didChangeWorkspaceFolders(event);
	            promise.catch((error) => {
	                this._client.error(`Sending notification ${vscode_languageserver_protocol_1.DidChangeWorkspaceFoldersNotification.type.method} failed`, error);
	            });
	        });
	        this._listeners.set(id, disposable);
	        this.sendInitialEvent(vscode_1.workspace.workspaceFolders);
	    }
	    unregister(id) {
	        let disposable = this._listeners.get(id);
	        if (disposable === void 0) {
	            return;
	        }
	        this._listeners.delete(id);
	        disposable.dispose();
	    }
	    clear() {
	        for (let disposable of this._listeners.values()) {
	            disposable.dispose();
	        }
	        this._listeners.clear();
	    }
	    asProtocol(workspaceFolder) {
	        if (workspaceFolder === void 0) {
	            return null;
	        }
	        return { uri: this._client.code2ProtocolConverter.asUri(workspaceFolder.uri), name: workspaceFolder.name };
	    }
	}
	workspaceFolder.WorkspaceFoldersFeature = WorkspaceFoldersFeature;
	return workspaceFolder;
}

var foldingRange = {};

var hasRequiredFoldingRange;

function requireFoldingRange () {
	if (hasRequiredFoldingRange) return foldingRange;
	hasRequiredFoldingRange = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(foldingRange, "__esModule", { value: true });
	foldingRange.FoldingRangeFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class FoldingRangeFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.FoldingRangeRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'foldingRange');
	        capability.dynamicRegistration = true;
	        capability.rangeLimit = 5000;
	        capability.lineFoldingOnly = true;
	        capability.foldingRangeKind = { valueSet: [vscode_languageserver_protocol_1.FoldingRangeKind.Comment, vscode_languageserver_protocol_1.FoldingRangeKind.Imports, vscode_languageserver_protocol_1.FoldingRangeKind.Region] };
	        capability.foldingRange = { collapsedText: false };
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'foldingRange').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        this._client.onRequest(vscode_languageserver_protocol_1.FoldingRangeRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeFoldingRange.fire();
	            }
	        });
	        let [id, options] = this.getRegistration(documentSelector, capabilities.foldingRangeProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const eventEmitter = new vscode_1.EventEmitter();
	        const provider = {
	            onDidChangeFoldingRanges: eventEmitter.event,
	            provideFoldingRanges: (document, context, token) => {
	                const client = this._client;
	                const provideFoldingRanges = (document, _, token) => {
	                    const requestParams = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, requestParams, token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asFoldingRanges(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.FoldingRangeRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideFoldingRanges
	                    ? middleware.provideFoldingRanges(document, context, token, provideFoldingRanges)
	                    : provideFoldingRanges(document, context, token);
	            }
	        };
	        return [vscode_1.languages.registerFoldingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), { provider: provider, onDidChangeFoldingRange: eventEmitter }];
	    }
	}
	foldingRange.FoldingRangeFeature = FoldingRangeFeature;
	return foldingRange;
}

var declaration = {};

var hasRequiredDeclaration;

function requireDeclaration () {
	if (hasRequiredDeclaration) return declaration;
	hasRequiredDeclaration = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(declaration, "__esModule", { value: true });
	declaration.DeclarationFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class DeclarationFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.DeclarationRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const declarationSupport = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'declaration');
	        declarationSupport.dynamicRegistration = true;
	        declarationSupport.linkSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const [id, options] = this.getRegistration(documentSelector, capabilities.declarationProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideDeclaration: (document, position, token) => {
	                const client = this._client;
	                const provideDeclaration = (document, position, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asDeclarationResult(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.DeclarationRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideDeclaration
	                    ? middleware.provideDeclaration(document, position, token, provideDeclaration)
	                    : provideDeclaration(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerDeclarationProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	declaration.DeclarationFeature = DeclarationFeature;
	return declaration;
}

var selectionRange = {};

var hasRequiredSelectionRange;

function requireSelectionRange () {
	if (hasRequiredSelectionRange) return selectionRange;
	hasRequiredSelectionRange = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(selectionRange, "__esModule", { value: true });
	selectionRange.SelectionRangeFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class SelectionRangeFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.SelectionRangeRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'selectionRange');
	        capability.dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const [id, options] = this.getRegistration(documentSelector, capabilities.selectionRangeProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideSelectionRanges: (document, positions, token) => {
	                const client = this._client;
	                const provideSelectionRanges = async (document, positions, token) => {
	                    const requestParams = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        positions: client.code2ProtocolConverter.asPositionsSync(positions, token)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, requestParams, token).then((ranges) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asSelectionRanges(ranges, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.SelectionRangeRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideSelectionRanges
	                    ? middleware.provideSelectionRanges(document, positions, token, provideSelectionRanges)
	                    : provideSelectionRanges(document, positions, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerSelectionRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	selectionRange.SelectionRangeFeature = SelectionRangeFeature;
	return selectionRange;
}

var progress = {};

var hasRequiredProgress;

function requireProgress () {
	if (hasRequiredProgress) return progress;
	hasRequiredProgress = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(progress, "__esModule", { value: true });
	progress.ProgressFeature = void 0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const progressPart_1 = requireProgressPart();
	function ensure(target, key) {
	    if (target[key] === void 0) {
	        target[key] = Object.create(null);
	    }
	    return target[key];
	}
	class ProgressFeature {
	    constructor(_client) {
	        this._client = _client;
	        this.activeParts = new Set();
	    }
	    getState() {
	        return { kind: 'window', id: vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.method, registrations: this.activeParts.size > 0 };
	    }
	    fillClientCapabilities(capabilities) {
	        ensure(capabilities, 'window').workDoneProgress = true;
	    }
	    initialize() {
	        const client = this._client;
	        const deleteHandler = (part) => {
	            this.activeParts.delete(part);
	        };
	        const createHandler = (params) => {
	            this.activeParts.add(new progressPart_1.ProgressPart(this._client, params.token, deleteHandler));
	        };
	        client.onRequest(vscode_languageserver_protocol_1.WorkDoneProgressCreateRequest.type, createHandler);
	    }
	    clear() {
	        for (const part of this.activeParts) {
	            part.done();
	        }
	        this.activeParts.clear();
	    }
	}
	progress.ProgressFeature = ProgressFeature;
	return progress;
}

var callHierarchy = {};

var hasRequiredCallHierarchy;

function requireCallHierarchy () {
	if (hasRequiredCallHierarchy) return callHierarchy;
	hasRequiredCallHierarchy = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(callHierarchy, "__esModule", { value: true });
	callHierarchy.CallHierarchyFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class CallHierarchyProvider {
	    constructor(client) {
	        this.client = client;
	        this.middleware = client.middleware;
	    }
	    prepareCallHierarchy(document, position, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const prepareCallHierarchy = (document, position, token) => {
	            const params = client.code2ProtocolConverter.asTextDocumentPositionParams(document, position);
	            return client.sendRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asCallHierarchyItems(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type, token, error, null);
	            });
	        };
	        return middleware.prepareCallHierarchy
	            ? middleware.prepareCallHierarchy(document, position, token, prepareCallHierarchy)
	            : prepareCallHierarchy(document, position, token);
	    }
	    provideCallHierarchyIncomingCalls(item, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const provideCallHierarchyIncomingCalls = (item, token) => {
	            const params = {
	                item: client.code2ProtocolConverter.asCallHierarchyItem(item)
	            };
	            return client.sendRequest(vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asCallHierarchyIncomingCalls(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.CallHierarchyIncomingCallsRequest.type, token, error, null);
	            });
	        };
	        return middleware.provideCallHierarchyIncomingCalls
	            ? middleware.provideCallHierarchyIncomingCalls(item, token, provideCallHierarchyIncomingCalls)
	            : provideCallHierarchyIncomingCalls(item, token);
	    }
	    provideCallHierarchyOutgoingCalls(item, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const provideCallHierarchyOutgoingCalls = (item, token) => {
	            const params = {
	                item: client.code2ProtocolConverter.asCallHierarchyItem(item)
	            };
	            return client.sendRequest(vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asCallHierarchyOutgoingCalls(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.CallHierarchyOutgoingCallsRequest.type, token, error, null);
	            });
	        };
	        return middleware.provideCallHierarchyOutgoingCalls
	            ? middleware.provideCallHierarchyOutgoingCalls(item, token, provideCallHierarchyOutgoingCalls)
	            : provideCallHierarchyOutgoingCalls(item, token);
	    }
	}
	class CallHierarchyFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.CallHierarchyPrepareRequest.type);
	    }
	    fillClientCapabilities(cap) {
	        const capabilities = cap;
	        const capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'callHierarchy');
	        capability.dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const [id, options] = this.getRegistration(documentSelector, capabilities.callHierarchyProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const client = this._client;
	        const provider = new CallHierarchyProvider(client);
	        return [vscode_1.languages.registerCallHierarchyProvider(this._client.protocol2CodeConverter.asDocumentSelector(options.documentSelector), provider), provider];
	    }
	}
	callHierarchy.CallHierarchyFeature = CallHierarchyFeature;
	return callHierarchy;
}

var semanticTokens = {};

var hasRequiredSemanticTokens;

function requireSemanticTokens () {
	if (hasRequiredSemanticTokens) return semanticTokens;
	hasRequiredSemanticTokens = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(semanticTokens, "__esModule", { value: true });
	semanticTokens.SemanticTokensFeature = void 0;
	const vscode = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const Is = requireIs$2();
	class SemanticTokensFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.SemanticTokensRegistrationType.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'semanticTokens');
	        capability.dynamicRegistration = true;
	        capability.tokenTypes = [
	            vscode_languageserver_protocol_1.SemanticTokenTypes.namespace,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.type,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.class,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.enum,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.interface,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.struct,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.typeParameter,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.parameter,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.variable,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.property,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.enumMember,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.event,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.function,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.method,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.macro,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.keyword,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.modifier,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.comment,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.string,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.number,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.regexp,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.operator,
	            vscode_languageserver_protocol_1.SemanticTokenTypes.decorator
	        ];
	        capability.tokenModifiers = [
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.declaration,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.definition,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.readonly,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.static,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.deprecated,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.abstract,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.async,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.modification,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.documentation,
	            vscode_languageserver_protocol_1.SemanticTokenModifiers.defaultLibrary
	        ];
	        capability.formats = [vscode_languageserver_protocol_1.TokenFormat.Relative];
	        capability.requests = {
	            range: true,
	            full: {
	                delta: true
	            }
	        };
	        capability.multilineTokenSupport = false;
	        capability.overlappingTokenSupport = false;
	        capability.serverCancelSupport = true;
	        capability.augmentsSyntaxTokens = true;
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'semanticTokens').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const client = this._client;
	        client.onRequest(vscode_languageserver_protocol_1.SemanticTokensRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeSemanticTokensEmitter.fire();
	            }
	        });
	        const [id, options] = this.getRegistration(documentSelector, capabilities.semanticTokensProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const fullProvider = Is.boolean(options.full) ? options.full : options.full !== undefined;
	        const hasEditProvider = options.full !== undefined && typeof options.full !== 'boolean' && options.full.delta === true;
	        const eventEmitter = new vscode.EventEmitter();
	        const documentProvider = fullProvider
	            ? {
	                onDidChangeSemanticTokens: eventEmitter.event,
	                provideDocumentSemanticTokens: (document, token) => {
	                    const client = this._client;
	                    const middleware = client.middleware;
	                    const provideDocumentSemanticTokens = (document, token) => {
	                        const params = {
	                            textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document)
	                        };
	                        return client.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRequest.type, params, token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return null;
	                            }
	                            return client.protocol2CodeConverter.asSemanticTokens(result, token);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.SemanticTokensRequest.type, token, error, null);
	                        });
	                    };
	                    return middleware.provideDocumentSemanticTokens
	                        ? middleware.provideDocumentSemanticTokens(document, token, provideDocumentSemanticTokens)
	                        : provideDocumentSemanticTokens(document, token);
	                },
	                provideDocumentSemanticTokensEdits: hasEditProvider
	                    ? (document, previousResultId, token) => {
	                        const client = this._client;
	                        const middleware = client.middleware;
	                        const provideDocumentSemanticTokensEdits = (document, previousResultId, token) => {
	                            const params = {
	                                textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                                previousResultId
	                            };
	                            return client.sendRequest(vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type, params, token).then(async (result) => {
	                                if (token.isCancellationRequested) {
	                                    return null;
	                                }
	                                if (vscode_languageserver_protocol_1.SemanticTokens.is(result)) {
	                                    return await client.protocol2CodeConverter.asSemanticTokens(result, token);
	                                }
	                                else {
	                                    return await client.protocol2CodeConverter.asSemanticTokensEdits(result, token);
	                                }
	                            }, (error) => {
	                                return client.handleFailedRequest(vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.type, token, error, null);
	                            });
	                        };
	                        return middleware.provideDocumentSemanticTokensEdits
	                            ? middleware.provideDocumentSemanticTokensEdits(document, previousResultId, token, provideDocumentSemanticTokensEdits)
	                            : provideDocumentSemanticTokensEdits(document, previousResultId, token);
	                    }
	                    : undefined
	            }
	            : undefined;
	        const hasRangeProvider = options.range === true;
	        const rangeProvider = hasRangeProvider
	            ? {
	                provideDocumentRangeSemanticTokens: (document, range, token) => {
	                    const client = this._client;
	                    const middleware = client.middleware;
	                    const provideDocumentRangeSemanticTokens = (document, range, token) => {
	                        const params = {
	                            textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                            range: client.code2ProtocolConverter.asRange(range)
	                        };
	                        return client.sendRequest(vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type, params, token).then((result) => {
	                            if (token.isCancellationRequested) {
	                                return null;
	                            }
	                            return client.protocol2CodeConverter.asSemanticTokens(result, token);
	                        }, (error) => {
	                            return client.handleFailedRequest(vscode_languageserver_protocol_1.SemanticTokensRangeRequest.type, token, error, null);
	                        });
	                    };
	                    return middleware.provideDocumentRangeSemanticTokens
	                        ? middleware.provideDocumentRangeSemanticTokens(document, range, token, provideDocumentRangeSemanticTokens)
	                        : provideDocumentRangeSemanticTokens(document, range, token);
	                }
	            }
	            : undefined;
	        const disposables = [];
	        const client = this._client;
	        const legend = client.protocol2CodeConverter.asSemanticTokensLegend(options.legend);
	        const documentSelector = client.protocol2CodeConverter.asDocumentSelector(selector);
	        if (documentProvider !== undefined) {
	            disposables.push(vscode.languages.registerDocumentSemanticTokensProvider(documentSelector, documentProvider, legend));
	        }
	        if (rangeProvider !== undefined) {
	            disposables.push(vscode.languages.registerDocumentRangeSemanticTokensProvider(documentSelector, rangeProvider, legend));
	        }
	        return [new vscode.Disposable(() => disposables.forEach(item => item.dispose())), { range: rangeProvider, full: documentProvider, onDidChangeSemanticTokensEmitter: eventEmitter }];
	    }
	}
	semanticTokens.SemanticTokensFeature = SemanticTokensFeature;
	return semanticTokens;
}

var fileOperations = {};

var hasRequiredFileOperations;

function requireFileOperations () {
	if (hasRequiredFileOperations) return fileOperations;
	hasRequiredFileOperations = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(fileOperations, "__esModule", { value: true });
	fileOperations.WillDeleteFilesFeature = fileOperations.WillRenameFilesFeature = fileOperations.WillCreateFilesFeature = fileOperations.DidDeleteFilesFeature = fileOperations.DidRenameFilesFeature = fileOperations.DidCreateFilesFeature = void 0;
	const code = require$$0;
	const minimatch = requireMinimatch();
	const proto = requireMain$1();
	const UUID = requireUuid();
	function ensure(target, key) {
	    if (target[key] === void 0) {
	        target[key] = {};
	    }
	    return target[key];
	}
	function access(target, key) {
	    return target[key];
	}
	function assign(target, key, value) {
	    target[key] = value;
	}
	class FileOperationFeature {
	    constructor(client, event, registrationType, clientCapability, serverCapability) {
	        this._client = client;
	        this._event = event;
	        this._registrationType = registrationType;
	        this._clientCapability = clientCapability;
	        this._serverCapability = serverCapability;
	        this._filters = new Map();
	    }
	    getState() {
	        return { kind: 'workspace', id: this._registrationType.method, registrations: this._filters.size > 0 };
	    }
	    filterSize() {
	        return this._filters.size;
	    }
	    get registrationType() {
	        return this._registrationType;
	    }
	    fillClientCapabilities(capabilities) {
	        const value = ensure(ensure(capabilities, 'workspace'), 'fileOperations');
	        // this happens n times but it is the same value so we tolerate this.
	        assign(value, 'dynamicRegistration', true);
	        assign(value, this._clientCapability, true);
	    }
	    initialize(capabilities) {
	        const options = capabilities.workspace?.fileOperations;
	        const capability = options !== undefined ? access(options, this._serverCapability) : undefined;
	        if (capability?.filters !== undefined) {
	            try {
	                this.register({
	                    id: UUID.generateUuid(),
	                    registerOptions: { filters: capability.filters }
	                });
	            }
	            catch (e) {
	                this._client.warn(`Ignoring invalid glob pattern for ${this._serverCapability} registration: ${e}`);
	            }
	        }
	    }
	    register(data) {
	        if (!this._listener) {
	            this._listener = this._event(this.send, this);
	        }
	        const minimatchFilter = data.registerOptions.filters.map((filter) => {
	            const matcher = new minimatch.Minimatch(filter.pattern.glob, FileOperationFeature.asMinimatchOptions(filter.pattern.options));
	            if (!matcher.makeRe()) {
	                throw new Error(`Invalid pattern ${filter.pattern.glob}!`);
	            }
	            return { scheme: filter.scheme, matcher, kind: filter.pattern.matches };
	        });
	        this._filters.set(data.id, minimatchFilter);
	    }
	    unregister(id) {
	        this._filters.delete(id);
	        if (this._filters.size === 0 && this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    clear() {
	        this._filters.clear();
	        if (this._listener) {
	            this._listener.dispose();
	            this._listener = undefined;
	        }
	    }
	    getFileType(uri) {
	        return FileOperationFeature.getFileType(uri);
	    }
	    async filter(event, prop) {
	        // (Asynchronously) map each file onto a boolean of whether it matches
	        // any of the globs.
	        const fileMatches = await Promise.all(event.files.map(async (item) => {
	            const uri = prop(item);
	            // Use fsPath to make this consistent with file system watchers but help
	            // minimatch to use '/' instead of `\\` if present.
	            const path = uri.fsPath.replace(/\\/g, '/');
	            for (const filters of this._filters.values()) {
	                for (const filter of filters) {
	                    if (filter.scheme !== undefined && filter.scheme !== uri.scheme) {
	                        continue;
	                    }
	                    if (filter.matcher.match(path)) {
	                        // The pattern matches. If kind is undefined then everything is ok
	                        if (filter.kind === undefined) {
	                            return true;
	                        }
	                        const fileType = await this.getFileType(uri);
	                        // If we can't determine the file type than we treat it as a match.
	                        // Dropping it would be another alternative.
	                        if (fileType === undefined) {
	                            this._client.error(`Failed to determine file type for ${uri.toString()}.`);
	                            return true;
	                        }
	                        if ((fileType === code.FileType.File && filter.kind === proto.FileOperationPatternKind.file) || (fileType === code.FileType.Directory && filter.kind === proto.FileOperationPatternKind.folder)) {
	                            return true;
	                        }
	                    }
	                    else if (filter.kind === proto.FileOperationPatternKind.folder) {
	                        const fileType = await FileOperationFeature.getFileType(uri);
	                        if (fileType === code.FileType.Directory && filter.matcher.match(`${path}/`)) {
	                            return true;
	                        }
	                    }
	                }
	            }
	            return false;
	        }));
	        // Filter the files to those that matched.
	        const files = event.files.filter((_, index) => fileMatches[index]);
	        return { ...event, files };
	    }
	    static async getFileType(uri) {
	        try {
	            return (await code.workspace.fs.stat(uri)).type;
	        }
	        catch (e) {
	            return undefined;
	        }
	    }
	    static asMinimatchOptions(options) {
	        // The spec doesn't state that dot files don't match. So we make
	        // matching those the default.
	        const result = { dot: true };
	        if (options?.ignoreCase === true) {
	            result.nocase = true;
	        }
	        return result;
	    }
	}
	class NotificationFileOperationFeature extends FileOperationFeature {
	    constructor(client, event, notificationType, clientCapability, serverCapability, accessUri, createParams) {
	        super(client, event, notificationType, clientCapability, serverCapability);
	        this._notificationType = notificationType;
	        this._accessUri = accessUri;
	        this._createParams = createParams;
	    }
	    async send(originalEvent) {
	        // Create a copy of the event that has the files filtered to match what the
	        // server wants.
	        const filteredEvent = await this.filter(originalEvent, this._accessUri);
	        if (filteredEvent.files.length) {
	            const next = async (event) => {
	                return this._client.sendNotification(this._notificationType, this._createParams(event));
	            };
	            return this.doSend(filteredEvent, next);
	        }
	    }
	}
	class CachingNotificationFileOperationFeature extends NotificationFileOperationFeature {
	    constructor() {
	        super(...arguments);
	        this._fsPathFileTypes = new Map();
	    }
	    async getFileType(uri) {
	        const fsPath = uri.fsPath;
	        if (this._fsPathFileTypes.has(fsPath)) {
	            return this._fsPathFileTypes.get(fsPath);
	        }
	        const type = await FileOperationFeature.getFileType(uri);
	        if (type) {
	            this._fsPathFileTypes.set(fsPath, type);
	        }
	        return type;
	    }
	    async cacheFileTypes(event, prop) {
	        // Calling filter will force the matching logic to run. For any item
	        // that requires a getFileType lookup, the overriden getFileType will
	        // be called that will cache the result so that when onDidRename fires,
	        // it can still be checked even though the item no longer exists on disk
	        // in its original location.
	        await this.filter(event, prop);
	    }
	    clearFileTypeCache() {
	        this._fsPathFileTypes.clear();
	    }
	    unregister(id) {
	        super.unregister(id);
	        if (this.filterSize() === 0 && this._willListener) {
	            this._willListener.dispose();
	            this._willListener = undefined;
	        }
	    }
	    clear() {
	        super.clear();
	        if (this._willListener) {
	            this._willListener.dispose();
	            this._willListener = undefined;
	        }
	    }
	}
	class DidCreateFilesFeature extends NotificationFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onDidCreateFiles, proto.DidCreateFilesNotification.type, 'didCreate', 'didCreate', (i) => i, client.code2ProtocolConverter.asDidCreateFilesParams);
	    }
	    doSend(event, next) {
	        const middleware = this._client.middleware.workspace;
	        return middleware?.didCreateFiles
	            ? middleware.didCreateFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.DidCreateFilesFeature = DidCreateFilesFeature;
	class DidRenameFilesFeature extends CachingNotificationFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onDidRenameFiles, proto.DidRenameFilesNotification.type, 'didRename', 'didRename', (i) => i.oldUri, client.code2ProtocolConverter.asDidRenameFilesParams);
	    }
	    register(data) {
	        if (!this._willListener) {
	            this._willListener = code.workspace.onWillRenameFiles(this.willRename, this);
	        }
	        super.register(data);
	    }
	    willRename(e) {
	        e.waitUntil(this.cacheFileTypes(e, (i) => i.oldUri));
	    }
	    doSend(event, next) {
	        this.clearFileTypeCache();
	        const middleware = this._client.middleware.workspace;
	        return middleware?.didRenameFiles
	            ? middleware.didRenameFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.DidRenameFilesFeature = DidRenameFilesFeature;
	class DidDeleteFilesFeature extends CachingNotificationFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onDidDeleteFiles, proto.DidDeleteFilesNotification.type, 'didDelete', 'didDelete', (i) => i, client.code2ProtocolConverter.asDidDeleteFilesParams);
	    }
	    register(data) {
	        if (!this._willListener) {
	            this._willListener = code.workspace.onWillDeleteFiles(this.willDelete, this);
	        }
	        super.register(data);
	    }
	    willDelete(e) {
	        e.waitUntil(this.cacheFileTypes(e, (i) => i));
	    }
	    doSend(event, next) {
	        this.clearFileTypeCache();
	        const middleware = this._client.middleware.workspace;
	        return middleware?.didDeleteFiles
	            ? middleware.didDeleteFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.DidDeleteFilesFeature = DidDeleteFilesFeature;
	class RequestFileOperationFeature extends FileOperationFeature {
	    constructor(client, event, requestType, clientCapability, serverCapability, accessUri, createParams) {
	        super(client, event, requestType, clientCapability, serverCapability);
	        this._requestType = requestType;
	        this._accessUri = accessUri;
	        this._createParams = createParams;
	    }
	    async send(originalEvent) {
	        const waitUntil = this.waitUntil(originalEvent);
	        originalEvent.waitUntil(waitUntil);
	    }
	    async waitUntil(originalEvent) {
	        // Create a copy of the event that has the files filtered to match what the
	        // server wants.
	        const filteredEvent = await this.filter(originalEvent, this._accessUri);
	        if (filteredEvent.files.length) {
	            const next = (event) => {
	                return this._client.sendRequest(this._requestType, this._createParams(event), event.token)
	                    .then(this._client.protocol2CodeConverter.asWorkspaceEdit);
	            };
	            return this.doSend(filteredEvent, next);
	        }
	        else {
	            return undefined;
	        }
	    }
	}
	class WillCreateFilesFeature extends RequestFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onWillCreateFiles, proto.WillCreateFilesRequest.type, 'willCreate', 'willCreate', (i) => i, client.code2ProtocolConverter.asWillCreateFilesParams);
	    }
	    doSend(event, next) {
	        const middleware = this._client.middleware.workspace;
	        return middleware?.willCreateFiles
	            ? middleware.willCreateFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.WillCreateFilesFeature = WillCreateFilesFeature;
	class WillRenameFilesFeature extends RequestFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onWillRenameFiles, proto.WillRenameFilesRequest.type, 'willRename', 'willRename', (i) => i.oldUri, client.code2ProtocolConverter.asWillRenameFilesParams);
	    }
	    doSend(event, next) {
	        const middleware = this._client.middleware.workspace;
	        return middleware?.willRenameFiles
	            ? middleware.willRenameFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.WillRenameFilesFeature = WillRenameFilesFeature;
	class WillDeleteFilesFeature extends RequestFileOperationFeature {
	    constructor(client) {
	        super(client, code.workspace.onWillDeleteFiles, proto.WillDeleteFilesRequest.type, 'willDelete', 'willDelete', (i) => i, client.code2ProtocolConverter.asWillDeleteFilesParams);
	    }
	    doSend(event, next) {
	        const middleware = this._client.middleware.workspace;
	        return middleware?.willDeleteFiles
	            ? middleware.willDeleteFiles(event, next)
	            : next(event);
	    }
	}
	fileOperations.WillDeleteFilesFeature = WillDeleteFilesFeature;
	return fileOperations;
}

var linkedEditingRange = {};

var hasRequiredLinkedEditingRange;

function requireLinkedEditingRange () {
	if (hasRequiredLinkedEditingRange) return linkedEditingRange;
	hasRequiredLinkedEditingRange = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(linkedEditingRange, "__esModule", { value: true });
	linkedEditingRange.LinkedEditingFeature = void 0;
	const code = require$$0;
	const proto = requireMain$1();
	const features_1 = requireFeatures();
	class LinkedEditingFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, proto.LinkedEditingRangeRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const linkedEditingSupport = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'linkedEditingRange');
	        linkedEditingSupport.dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        let [id, options] = this.getRegistration(documentSelector, capabilities.linkedEditingRangeProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideLinkedEditingRanges: (document, position, token) => {
	                const client = this._client;
	                const provideLinkedEditing = (document, position, token) => {
	                    return client.sendRequest(proto.LinkedEditingRangeRequest.type, client.code2ProtocolConverter.asTextDocumentPositionParams(document, position), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asLinkedEditingRanges(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(proto.LinkedEditingRangeRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideLinkedEditingRange
	                    ? middleware.provideLinkedEditingRange(document, position, token, provideLinkedEditing)
	                    : provideLinkedEditing(document, position, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), provider];
	    }
	    registerProvider(selector, provider) {
	        return code.languages.registerLinkedEditingRangeProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	linkedEditingRange.LinkedEditingFeature = LinkedEditingFeature;
	return linkedEditingRange;
}

var typeHierarchy = {};

var hasRequiredTypeHierarchy;

function requireTypeHierarchy () {
	if (hasRequiredTypeHierarchy) return typeHierarchy;
	hasRequiredTypeHierarchy = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(typeHierarchy, "__esModule", { value: true });
	typeHierarchy.TypeHierarchyFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class TypeHierarchyProvider {
	    constructor(client) {
	        this.client = client;
	        this.middleware = client.middleware;
	    }
	    prepareTypeHierarchy(document, position, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const prepareTypeHierarchy = (document, position, token) => {
	            const params = client.code2ProtocolConverter.asTextDocumentPositionParams(document, position);
	            return client.sendRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asTypeHierarchyItems(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type, token, error, null);
	            });
	        };
	        return middleware.prepareTypeHierarchy
	            ? middleware.prepareTypeHierarchy(document, position, token, prepareTypeHierarchy)
	            : prepareTypeHierarchy(document, position, token);
	    }
	    provideTypeHierarchySupertypes(item, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const provideTypeHierarchySupertypes = (item, token) => {
	            const params = {
	                item: client.code2ProtocolConverter.asTypeHierarchyItem(item)
	            };
	            return client.sendRequest(vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asTypeHierarchyItems(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.TypeHierarchySupertypesRequest.type, token, error, null);
	            });
	        };
	        return middleware.provideTypeHierarchySupertypes
	            ? middleware.provideTypeHierarchySupertypes(item, token, provideTypeHierarchySupertypes)
	            : provideTypeHierarchySupertypes(item, token);
	    }
	    provideTypeHierarchySubtypes(item, token) {
	        const client = this.client;
	        const middleware = this.middleware;
	        const provideTypeHierarchySubtypes = (item, token) => {
	            const params = {
	                item: client.code2ProtocolConverter.asTypeHierarchyItem(item)
	            };
	            return client.sendRequest(vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type, params, token).then((result) => {
	                if (token.isCancellationRequested) {
	                    return null;
	                }
	                return client.protocol2CodeConverter.asTypeHierarchyItems(result, token);
	            }, (error) => {
	                return client.handleFailedRequest(vscode_languageserver_protocol_1.TypeHierarchySubtypesRequest.type, token, error, null);
	            });
	        };
	        return middleware.provideTypeHierarchySubtypes
	            ? middleware.provideTypeHierarchySubtypes(item, token, provideTypeHierarchySubtypes)
	            : provideTypeHierarchySubtypes(item, token);
	    }
	}
	class TypeHierarchyFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.TypeHierarchyPrepareRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const capability = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'typeHierarchy');
	        capability.dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const [id, options] = this.getRegistration(documentSelector, capabilities.typeHierarchyProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const client = this._client;
	        const provider = new TypeHierarchyProvider(client);
	        return [vscode_1.languages.registerTypeHierarchyProvider(client.protocol2CodeConverter.asDocumentSelector(options.documentSelector), provider), provider];
	    }
	}
	typeHierarchy.TypeHierarchyFeature = TypeHierarchyFeature;
	return typeHierarchy;
}

var inlineValue = {};

var hasRequiredInlineValue;

function requireInlineValue () {
	if (hasRequiredInlineValue) return inlineValue;
	hasRequiredInlineValue = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(inlineValue, "__esModule", { value: true });
	inlineValue.InlineValueFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class InlineValueFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.InlineValueRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'inlineValue').dynamicRegistration = true;
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'inlineValue').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        this._client.onRequest(vscode_languageserver_protocol_1.InlineValueRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeInlineValues.fire();
	            }
	        });
	        const [id, options] = this.getRegistration(documentSelector, capabilities.inlineValueProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const eventEmitter = new vscode_1.EventEmitter();
	        const provider = {
	            onDidChangeInlineValues: eventEmitter.event,
	            provideInlineValues: (document, viewPort, context, token) => {
	                const client = this._client;
	                const provideInlineValues = (document, viewPort, context, token) => {
	                    const requestParams = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        range: client.code2ProtocolConverter.asRange(viewPort),
	                        context: client.code2ProtocolConverter.asInlineValueContext(context)
	                    };
	                    return client.sendRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, requestParams, token).then((values) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asInlineValues(values, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.InlineValueRequest.type, token, error, null);
	                    });
	                };
	                const middleware = client.middleware;
	                return middleware.provideInlineValues
	                    ? middleware.provideInlineValues(document, viewPort, context, token, provideInlineValues)
	                    : provideInlineValues(document, viewPort, context, token);
	            }
	        };
	        return [this.registerProvider(selector, provider), { provider: provider, onDidChangeInlineValues: eventEmitter }];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerInlineValuesProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	inlineValue.InlineValueFeature = InlineValueFeature;
	return inlineValue;
}

var inlayHint = {};

var hasRequiredInlayHint;

function requireInlayHint () {
	if (hasRequiredInlayHint) return inlayHint;
	hasRequiredInlayHint = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(inlayHint, "__esModule", { value: true });
	inlayHint.InlayHintsFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	class InlayHintsFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.InlayHintRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        const inlayHint = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'inlayHint');
	        inlayHint.dynamicRegistration = true;
	        inlayHint.resolveSupport = {
	            properties: ['tooltip', 'textEdits', 'label.tooltip', 'label.location', 'label.command']
	        };
	        (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'workspace'), 'inlayHint').refreshSupport = true;
	    }
	    initialize(capabilities, documentSelector) {
	        this._client.onRequest(vscode_languageserver_protocol_1.InlayHintRefreshRequest.type, async () => {
	            for (const provider of this.getAllProviders()) {
	                provider.onDidChangeInlayHints.fire();
	            }
	        });
	        const [id, options] = this.getRegistration(documentSelector, capabilities.inlayHintProvider);
	        if (!id || !options) {
	            return;
	        }
	        this.register({ id: id, registerOptions: options });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const eventEmitter = new vscode_1.EventEmitter();
	        const provider = {
	            onDidChangeInlayHints: eventEmitter.event,
	            provideInlayHints: (document, viewPort, token) => {
	                const client = this._client;
	                const provideInlayHints = async (document, viewPort, token) => {
	                    const requestParams = {
	                        textDocument: client.code2ProtocolConverter.asTextDocumentIdentifier(document),
	                        range: client.code2ProtocolConverter.asRange(viewPort)
	                    };
	                    try {
	                        const values = await client.sendRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, requestParams, token);
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asInlayHints(values, token);
	                    }
	                    catch (error) {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.InlayHintRequest.type, token, error, null);
	                    }
	                };
	                const middleware = client.middleware;
	                return middleware.provideInlayHints
	                    ? middleware.provideInlayHints(document, viewPort, token, provideInlayHints)
	                    : provideInlayHints(document, viewPort, token);
	            }
	        };
	        provider.resolveInlayHint = options.resolveProvider === true
	            ? (hint, token) => {
	                const client = this._client;
	                const resolveInlayHint = async (item, token) => {
	                    try {
	                        const value = await client.sendRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, client.code2ProtocolConverter.asInlayHint(item), token);
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        const result = client.protocol2CodeConverter.asInlayHint(value, token);
	                        return token.isCancellationRequested ? null : result;
	                    }
	                    catch (error) {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.InlayHintResolveRequest.type, token, error, null);
	                    }
	                };
	                const middleware = client.middleware;
	                return middleware.resolveInlayHint
	                    ? middleware.resolveInlayHint(hint, token, resolveInlayHint)
	                    : resolveInlayHint(hint, token);
	            }
	            : undefined;
	        return [this.registerProvider(selector, provider), { provider: provider, onDidChangeInlayHints: eventEmitter }];
	    }
	    registerProvider(selector, provider) {
	        return vscode_1.languages.registerInlayHintsProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider);
	    }
	}
	inlayHint.InlayHintsFeature = InlayHintsFeature;
	return inlayHint;
}

var inlineCompletion = {};

var hasRequiredInlineCompletion;

function requireInlineCompletion () {
	if (hasRequiredInlineCompletion) return inlineCompletion;
	hasRequiredInlineCompletion = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(inlineCompletion, "__esModule", { value: true });
	inlineCompletion.InlineCompletionItemFeature = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const features_1 = requireFeatures();
	const UUID = requireUuid();
	class InlineCompletionItemFeature extends features_1.TextDocumentLanguageFeature {
	    constructor(client) {
	        super(client, vscode_languageserver_protocol_1.InlineCompletionRequest.type);
	    }
	    fillClientCapabilities(capabilities) {
	        let inlineCompletion = (0, features_1.ensure)((0, features_1.ensure)(capabilities, 'textDocument'), 'inlineCompletion');
	        inlineCompletion.dynamicRegistration = true;
	    }
	    initialize(capabilities, documentSelector) {
	        const options = this.getRegistrationOptions(documentSelector, capabilities.inlineCompletionProvider);
	        if (!options) {
	            return;
	        }
	        this.register({
	            id: UUID.generateUuid(),
	            registerOptions: options
	        });
	    }
	    registerLanguageProvider(options) {
	        const selector = options.documentSelector;
	        const provider = {
	            provideInlineCompletionItems: (document, position, context, token) => {
	                const client = this._client;
	                const middleware = this._client.middleware;
	                const provideInlineCompletionItems = (document, position, context, token) => {
	                    return client.sendRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, client.code2ProtocolConverter.asInlineCompletionParams(document, position, context), token).then((result) => {
	                        if (token.isCancellationRequested) {
	                            return null;
	                        }
	                        return client.protocol2CodeConverter.asInlineCompletionResult(result, token);
	                    }, (error) => {
	                        return client.handleFailedRequest(vscode_languageserver_protocol_1.InlineCompletionRequest.type, token, error, null);
	                    });
	                };
	                return middleware.provideInlineCompletionItems
	                    ? middleware.provideInlineCompletionItems(document, position, context, token, provideInlineCompletionItems)
	                    : provideInlineCompletionItems(document, position, context, token);
	            }
	        };
	        return [vscode_1.languages.registerInlineCompletionItemProvider(this._client.protocol2CodeConverter.asDocumentSelector(selector), provider), provider];
	    }
	}
	inlineCompletion.InlineCompletionItemFeature = InlineCompletionItemFeature;
	return inlineCompletion;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(client, "__esModule", { value: true });
	client.ProposedFeatures = client.BaseLanguageClient = client.MessageTransports = client.SuspendMode = client.State = client.CloseAction = client.ErrorAction = client.RevealOutputChannelOn = void 0;
	const vscode_1 = require$$0;
	const vscode_languageserver_protocol_1 = requireMain$1();
	const c2p = requireCodeConverter();
	const p2c = requireProtocolConverter();
	const Is = requireIs$2();
	const async_1 = requireAsync();
	const UUID = requireUuid();
	const progressPart_1 = requireProgressPart();
	const features_1 = requireFeatures();
	const diagnostic_1 = requireDiagnostic();
	const notebook_1 = requireNotebook();
	const configuration_1 = requireConfiguration();
	const textSynchronization_1 = requireTextSynchronization();
	const completion_1 = requireCompletion();
	const hover_1 = requireHover();
	const definition_1 = requireDefinition();
	const signatureHelp_1 = requireSignatureHelp();
	const documentHighlight_1 = requireDocumentHighlight();
	const documentSymbol_1 = requireDocumentSymbol();
	const workspaceSymbol_1 = requireWorkspaceSymbol();
	const reference_1 = requireReference();
	const codeAction_1 = requireCodeAction();
	const codeLens_1 = requireCodeLens();
	const formatting_1 = requireFormatting();
	const rename_1 = requireRename();
	const documentLink_1 = requireDocumentLink();
	const executeCommand_1 = requireExecuteCommand();
	const fileSystemWatcher_1 = requireFileSystemWatcher();
	const colorProvider_1 = requireColorProvider();
	const implementation_1 = requireImplementation();
	const typeDefinition_1 = requireTypeDefinition();
	const workspaceFolder_1 = requireWorkspaceFolder();
	const foldingRange_1 = requireFoldingRange();
	const declaration_1 = requireDeclaration();
	const selectionRange_1 = requireSelectionRange();
	const progress_1 = requireProgress();
	const callHierarchy_1 = requireCallHierarchy();
	const semanticTokens_1 = requireSemanticTokens();
	const fileOperations_1 = requireFileOperations();
	const linkedEditingRange_1 = requireLinkedEditingRange();
	const typeHierarchy_1 = requireTypeHierarchy();
	const inlineValue_1 = requireInlineValue();
	const inlayHint_1 = requireInlayHint();
	const inlineCompletion_1 = requireInlineCompletion();
	/**
	 * Controls when the output channel is revealed.
	 */
	var RevealOutputChannelOn;
	(function (RevealOutputChannelOn) {
	    RevealOutputChannelOn[RevealOutputChannelOn["Debug"] = 0] = "Debug";
	    RevealOutputChannelOn[RevealOutputChannelOn["Info"] = 1] = "Info";
	    RevealOutputChannelOn[RevealOutputChannelOn["Warn"] = 2] = "Warn";
	    RevealOutputChannelOn[RevealOutputChannelOn["Error"] = 3] = "Error";
	    RevealOutputChannelOn[RevealOutputChannelOn["Never"] = 4] = "Never";
	})(RevealOutputChannelOn || (client.RevealOutputChannelOn = RevealOutputChannelOn = {}));
	/**
	 * An action to be performed when the connection is producing errors.
	 */
	var ErrorAction;
	(function (ErrorAction) {
	    /**
	     * Continue running the server.
	     */
	    ErrorAction[ErrorAction["Continue"] = 1] = "Continue";
	    /**
	     * Shutdown the server.
	     */
	    ErrorAction[ErrorAction["Shutdown"] = 2] = "Shutdown";
	})(ErrorAction || (client.ErrorAction = ErrorAction = {}));
	/**
	 * An action to be performed when the connection to a server got closed.
	 */
	var CloseAction;
	(function (CloseAction) {
	    /**
	     * Don't restart the server. The connection stays closed.
	     */
	    CloseAction[CloseAction["DoNotRestart"] = 1] = "DoNotRestart";
	    /**
	     * Restart the server.
	     */
	    CloseAction[CloseAction["Restart"] = 2] = "Restart";
	})(CloseAction || (client.CloseAction = CloseAction = {}));
	/**
	 * Signals in which state the language client is in.
	 */
	var State;
	(function (State) {
	    /**
	     * The client is stopped or got never started.
	     */
	    State[State["Stopped"] = 1] = "Stopped";
	    /**
	     * The client is starting but not ready yet.
	     */
	    State[State["Starting"] = 3] = "Starting";
	    /**
	     * The client is running and ready.
	     */
	    State[State["Running"] = 2] = "Running";
	})(State || (client.State = State = {}));
	var SuspendMode;
	(function (SuspendMode) {
	    /**
	     * Don't allow suspend mode.
	     */
	    SuspendMode["off"] = "off";
	    /**
	     * Support suspend mode even if not all
	     * registered providers have a corresponding
	     * activation listener.
	     */
	    SuspendMode["on"] = "on";
	})(SuspendMode || (client.SuspendMode = SuspendMode = {}));
	var ResolvedClientOptions;
	(function (ResolvedClientOptions) {
	    function sanitizeIsTrusted(isTrusted) {
	        if (isTrusted === undefined || isTrusted === null) {
	            return false;
	        }
	        if ((typeof isTrusted === 'boolean') || (typeof isTrusted === 'object' && isTrusted !== null && Is.stringArray(isTrusted.enabledCommands))) {
	            return isTrusted;
	        }
	        return false;
	    }
	    ResolvedClientOptions.sanitizeIsTrusted = sanitizeIsTrusted;
	})(ResolvedClientOptions || (ResolvedClientOptions = {}));
	class DefaultErrorHandler {
	    constructor(client, maxRestartCount) {
	        this.client = client;
	        this.maxRestartCount = maxRestartCount;
	        this.restarts = [];
	    }
	    error(_error, _message, count) {
	        if (count && count <= 3) {
	            return { action: ErrorAction.Continue };
	        }
	        return { action: ErrorAction.Shutdown };
	    }
	    closed() {
	        this.restarts.push(Date.now());
	        if (this.restarts.length <= this.maxRestartCount) {
	            return { action: CloseAction.Restart };
	        }
	        else {
	            let diff = this.restarts[this.restarts.length - 1] - this.restarts[0];
	            if (diff <= 3 * 60 * 1000) {
	                return { action: CloseAction.DoNotRestart, message: `The ${this.client.name} server crashed ${this.maxRestartCount + 1} times in the last 3 minutes. The server will not be restarted. See the output for more information.` };
	            }
	            else {
	                this.restarts.shift();
	                return { action: CloseAction.Restart };
	            }
	        }
	    }
	}
	var ClientState;
	(function (ClientState) {
	    ClientState["Initial"] = "initial";
	    ClientState["Starting"] = "starting";
	    ClientState["StartFailed"] = "startFailed";
	    ClientState["Running"] = "running";
	    ClientState["Stopping"] = "stopping";
	    ClientState["Stopped"] = "stopped";
	})(ClientState || (ClientState = {}));
	var MessageTransports;
	(function (MessageTransports) {
	    function is(value) {
	        let candidate = value;
	        return candidate && vscode_languageserver_protocol_1.MessageReader.is(value.reader) && vscode_languageserver_protocol_1.MessageWriter.is(value.writer);
	    }
	    MessageTransports.is = is;
	})(MessageTransports || (client.MessageTransports = MessageTransports = {}));
	class BaseLanguageClient {
	    constructor(id, name, clientOptions) {
	        this._traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;
	        this._diagnosticQueue = new Map();
	        this._diagnosticQueueState = { state: 'idle' };
	        this._features = [];
	        this._dynamicFeatures = new Map();
	        this.workspaceEditLock = new async_1.Semaphore(1);
	        this._id = id;
	        this._name = name;
	        clientOptions = clientOptions || {};
	        const markdown = { isTrusted: false, supportHtml: false };
	        if (clientOptions.markdown !== undefined) {
	            markdown.isTrusted = ResolvedClientOptions.sanitizeIsTrusted(clientOptions.markdown.isTrusted);
	            markdown.supportHtml = clientOptions.markdown.supportHtml === true;
	        }
	        // const defaultInterval = (clientOptions as TestOptions).$testMode ? 50 : 60000;
	        this._clientOptions = {
	            documentSelector: clientOptions.documentSelector ?? [],
	            synchronize: clientOptions.synchronize ?? {},
	            diagnosticCollectionName: clientOptions.diagnosticCollectionName,
	            outputChannelName: clientOptions.outputChannelName ?? this._name,
	            revealOutputChannelOn: clientOptions.revealOutputChannelOn ?? RevealOutputChannelOn.Error,
	            stdioEncoding: clientOptions.stdioEncoding ?? 'utf8',
	            initializationOptions: clientOptions.initializationOptions,
	            initializationFailedHandler: clientOptions.initializationFailedHandler,
	            progressOnInitialization: !!clientOptions.progressOnInitialization,
	            errorHandler: clientOptions.errorHandler ?? this.createDefaultErrorHandler(clientOptions.connectionOptions?.maxRestartCount),
	            middleware: clientOptions.middleware ?? {},
	            uriConverters: clientOptions.uriConverters,
	            workspaceFolder: clientOptions.workspaceFolder,
	            connectionOptions: clientOptions.connectionOptions,
	            markdown,
	            // suspend: {
	            // 	mode: clientOptions.suspend?.mode ?? SuspendMode.off,
	            // 	callback: clientOptions.suspend?.callback ?? (() => Promise.resolve(true)),
	            // 	interval: clientOptions.suspend?.interval ? Math.max(clientOptions.suspend.interval, defaultInterval) : defaultInterval
	            // },
	            diagnosticPullOptions: clientOptions.diagnosticPullOptions ?? { onChange: true, onSave: false },
	            notebookDocumentOptions: clientOptions.notebookDocumentOptions ?? {}
	        };
	        this._clientOptions.synchronize = this._clientOptions.synchronize || {};
	        this._state = ClientState.Initial;
	        this._ignoredRegistrations = new Set();
	        this._listeners = [];
	        this._notificationHandlers = new Map();
	        this._pendingNotificationHandlers = new Map();
	        this._notificationDisposables = new Map();
	        this._requestHandlers = new Map();
	        this._pendingRequestHandlers = new Map();
	        this._requestDisposables = new Map();
	        this._progressHandlers = new Map();
	        this._pendingProgressHandlers = new Map();
	        this._progressDisposables = new Map();
	        this._connection = undefined;
	        // this._idleStart = undefined;
	        this._initializeResult = undefined;
	        if (clientOptions.outputChannel) {
	            this._outputChannel = clientOptions.outputChannel;
	            this._disposeOutputChannel = false;
	        }
	        else {
	            this._outputChannel = undefined;
	            this._disposeOutputChannel = true;
	        }
	        this._traceOutputChannel = clientOptions.traceOutputChannel;
	        this._diagnostics = undefined;
	        this._pendingOpenNotifications = new Set();
	        this._pendingChangeSemaphore = new async_1.Semaphore(1);
	        this._pendingChangeDelayer = new async_1.Delayer(250);
	        this._fileEvents = [];
	        this._fileEventDelayer = new async_1.Delayer(250);
	        this._onStop = undefined;
	        this._telemetryEmitter = new vscode_languageserver_protocol_1.Emitter();
	        this._stateChangeEmitter = new vscode_languageserver_protocol_1.Emitter();
	        this._trace = vscode_languageserver_protocol_1.Trace.Off;
	        this._tracer = {
	            log: (messageOrDataObject, data) => {
	                if (Is.string(messageOrDataObject)) {
	                    this.logTrace(messageOrDataObject, data);
	                }
	                else {
	                    this.logObjectTrace(messageOrDataObject);
	                }
	            },
	        };
	        this._c2p = c2p.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.code2Protocol : undefined);
	        this._p2c = p2c.createConverter(clientOptions.uriConverters ? clientOptions.uriConverters.protocol2Code : undefined, this._clientOptions.markdown.isTrusted, this._clientOptions.markdown.supportHtml);
	        this._syncedDocuments = new Map();
	        this.registerBuiltinFeatures();
	    }
	    get name() {
	        return this._name;
	    }
	    get middleware() {
	        return this._clientOptions.middleware ?? Object.create(null);
	    }
	    get clientOptions() {
	        return this._clientOptions;
	    }
	    get protocol2CodeConverter() {
	        return this._p2c;
	    }
	    get code2ProtocolConverter() {
	        return this._c2p;
	    }
	    get onTelemetry() {
	        return this._telemetryEmitter.event;
	    }
	    get onDidChangeState() {
	        return this._stateChangeEmitter.event;
	    }
	    get outputChannel() {
	        if (!this._outputChannel) {
	            this._outputChannel = vscode_1.window.createOutputChannel(this._clientOptions.outputChannelName ? this._clientOptions.outputChannelName : this._name);
	        }
	        return this._outputChannel;
	    }
	    get traceOutputChannel() {
	        if (this._traceOutputChannel) {
	            return this._traceOutputChannel;
	        }
	        return this.outputChannel;
	    }
	    get diagnostics() {
	        return this._diagnostics;
	    }
	    get state() {
	        return this.getPublicState();
	    }
	    get $state() {
	        return this._state;
	    }
	    set $state(value) {
	        let oldState = this.getPublicState();
	        this._state = value;
	        let newState = this.getPublicState();
	        if (newState !== oldState) {
	            this._stateChangeEmitter.fire({ oldState, newState });
	        }
	    }
	    getPublicState() {
	        switch (this.$state) {
	            case ClientState.Starting:
	                return State.Starting;
	            case ClientState.Running:
	                return State.Running;
	            default:
	                return State.Stopped;
	        }
	    }
	    get initializeResult() {
	        return this._initializeResult;
	    }
	    async sendRequest(type, ...params) {
	        if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
	            return Promise.reject(new vscode_languageserver_protocol_1.ResponseError(vscode_languageserver_protocol_1.ErrorCodes.ConnectionInactive, `Client is not running`));
	        }
	        // Ensure we have a connection before we force the document sync.
	        const connection = await this.$start();
	        // If any document is synced in full mode make sure we flush any pending
	        // full document syncs.
	        if (this._didChangeTextDocumentFeature.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full) {
	            await this.sendPendingFullTextDocumentChanges(connection);
	        }
	        const _sendRequest = this._clientOptions.middleware?.sendRequest;
	        if (_sendRequest !== undefined) {
	            let param = undefined;
	            let token = undefined;
	            // Separate cancellation tokens from other parameters for a better client interface
	            if (params.length === 1) {
	                // CancellationToken is an interface, so we need to check if the first param complies to it
	                if (vscode_languageserver_protocol_1.CancellationToken.is(params[0])) {
	                    token = params[0];
	                }
	                else {
	                    param = params[0];
	                }
	            }
	            else if (params.length === 2) {
	                param = params[0];
	                token = params[1];
	            }
	            // Return the general middleware invocation defining `next` as a utility function that reorganizes parameters to
	            // pass them to the original sendRequest function.
	            return _sendRequest(type, param, token, (type, param, token) => {
	                const params = [];
	                // Add the parameters if there are any
	                if (param !== undefined) {
	                    params.push(param);
	                }
	                // Add the cancellation token if there is one
	                if (token !== undefined) {
	                    params.push(token);
	                }
	                return connection.sendRequest(type, ...params);
	            });
	        }
	        else {
	            return connection.sendRequest(type, ...params);
	        }
	    }
	    onRequest(type, handler) {
	        const method = typeof type === 'string' ? type : type.method;
	        this._requestHandlers.set(method, handler);
	        const connection = this.activeConnection();
	        let disposable;
	        if (connection !== undefined) {
	            this._requestDisposables.set(method, connection.onRequest(type, handler));
	            disposable = {
	                dispose: () => {
	                    const disposable = this._requestDisposables.get(method);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._requestDisposables.delete(method);
	                    }
	                }
	            };
	        }
	        else {
	            this._pendingRequestHandlers.set(method, handler);
	            disposable = {
	                dispose: () => {
	                    this._pendingRequestHandlers.delete(method);
	                    const disposable = this._requestDisposables.get(method);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._requestDisposables.delete(method);
	                    }
	                }
	            };
	        }
	        return {
	            dispose: () => {
	                this._requestHandlers.delete(method);
	                disposable.dispose();
	            }
	        };
	    }
	    async sendNotification(type, params) {
	        if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
	            return Promise.reject(new vscode_languageserver_protocol_1.ResponseError(vscode_languageserver_protocol_1.ErrorCodes.ConnectionInactive, `Client is not running`));
	        }
	        const needsPendingFullTextDocumentSync = this._didChangeTextDocumentFeature.syncKind === vscode_languageserver_protocol_1.TextDocumentSyncKind.Full;
	        let openNotification;
	        if (needsPendingFullTextDocumentSync && typeof type !== 'string' && type.method === vscode_languageserver_protocol_1.DidOpenTextDocumentNotification.method) {
	            openNotification = params?.textDocument.uri;
	            this._pendingOpenNotifications.add(openNotification);
	        }
	        // Ensure we have a connection before we force the document sync.
	        const connection = await this.$start();
	        // If any document is synced in full mode make sure we flush any pending
	        // full document syncs.
	        if (needsPendingFullTextDocumentSync) {
	            await this.sendPendingFullTextDocumentChanges(connection);
	        }
	        // We need to remove the pending open notification before we actually
	        // send the notification over the connection. Otherwise there could be
	        // a request coming in that although the open notification got already put
	        // onto the wire will ignore pending document changes.
	        //
	        // Since the code path of connection.sendNotification is actually sync
	        // until the message is handed of to the writer and the writer as a semaphore
	        // lock with a capacity of 1 no additional async scheduling can happen until
	        // the message is actually handed of.
	        if (openNotification !== undefined) {
	            this._pendingOpenNotifications.delete(openNotification);
	        }
	        const _sendNotification = this._clientOptions.middleware?.sendNotification;
	        return _sendNotification
	            ? _sendNotification(type, connection.sendNotification.bind(connection), params)
	            : connection.sendNotification(type, params);
	    }
	    onNotification(type, handler) {
	        const method = typeof type === 'string' ? type : type.method;
	        this._notificationHandlers.set(method, handler);
	        const connection = this.activeConnection();
	        let disposable;
	        if (connection !== undefined) {
	            this._notificationDisposables.set(method, connection.onNotification(type, handler));
	            disposable = {
	                dispose: () => {
	                    const disposable = this._notificationDisposables.get(method);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._notificationDisposables.delete(method);
	                    }
	                }
	            };
	        }
	        else {
	            this._pendingNotificationHandlers.set(method, handler);
	            disposable = {
	                dispose: () => {
	                    this._pendingNotificationHandlers.delete(method);
	                    const disposable = this._notificationDisposables.get(method);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._notificationDisposables.delete(method);
	                    }
	                }
	            };
	        }
	        return {
	            dispose: () => {
	                this._notificationHandlers.delete(method);
	                disposable.dispose();
	            }
	        };
	    }
	    async sendProgress(type, token, value) {
	        if (this.$state === ClientState.StartFailed || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped) {
	            return Promise.reject(new vscode_languageserver_protocol_1.ResponseError(vscode_languageserver_protocol_1.ErrorCodes.ConnectionInactive, `Client is not running`));
	        }
	        try {
	            // Ensure we have a connection before we force the document sync.
	            const connection = await this.$start();
	            return connection.sendProgress(type, token, value);
	        }
	        catch (error) {
	            this.error(`Sending progress for token ${token} failed.`, error);
	            throw error;
	        }
	    }
	    onProgress(type, token, handler) {
	        this._progressHandlers.set(token, { type, handler });
	        const connection = this.activeConnection();
	        let disposable;
	        const handleWorkDoneProgress = this._clientOptions.middleware?.handleWorkDoneProgress;
	        const realHandler = vscode_languageserver_protocol_1.WorkDoneProgress.is(type) && handleWorkDoneProgress !== undefined
	            ? (params) => {
	                handleWorkDoneProgress(token, params, () => handler(params));
	            }
	            : handler;
	        if (connection !== undefined) {
	            this._progressDisposables.set(token, connection.onProgress(type, token, realHandler));
	            disposable = {
	                dispose: () => {
	                    const disposable = this._progressDisposables.get(token);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._progressDisposables.delete(token);
	                    }
	                }
	            };
	        }
	        else {
	            this._pendingProgressHandlers.set(token, { type, handler });
	            disposable = {
	                dispose: () => {
	                    this._pendingProgressHandlers.delete(token);
	                    const disposable = this._progressDisposables.get(token);
	                    if (disposable !== undefined) {
	                        disposable.dispose();
	                        this._progressDisposables.delete(token);
	                    }
	                }
	            };
	        }
	        return {
	            dispose: () => {
	                this._progressHandlers.delete(token);
	                disposable.dispose();
	            }
	        };
	    }
	    createDefaultErrorHandler(maxRestartCount) {
	        if (maxRestartCount !== undefined && maxRestartCount < 0) {
	            throw new Error(`Invalid maxRestartCount: ${maxRestartCount}`);
	        }
	        return new DefaultErrorHandler(this, maxRestartCount ?? 4);
	    }
	    async setTrace(value) {
	        this._trace = value;
	        const connection = this.activeConnection();
	        if (connection !== undefined) {
	            await connection.trace(this._trace, this._tracer, {
	                sendNotification: false,
	                traceFormat: this._traceFormat
	            });
	        }
	    }
	    data2String(data) {
	        if (data instanceof vscode_languageserver_protocol_1.ResponseError) {
	            const responseError = data;
	            return `  Message: ${responseError.message}\n  Code: ${responseError.code} ${responseError.data ? '\n' + responseError.data.toString() : ''}`;
	        }
	        if (data instanceof Error) {
	            if (Is.string(data.stack)) {
	                return data.stack;
	            }
	            return data.message;
	        }
	        if (Is.string(data)) {
	            return data;
	        }
	        return data.toString();
	    }
	    debug(message, data, showNotification = true) {
	        this.logOutputMessage(vscode_languageserver_protocol_1.MessageType.Debug, RevealOutputChannelOn.Debug, 'Debug', message, data, showNotification);
	    }
	    info(message, data, showNotification = true) {
	        this.logOutputMessage(vscode_languageserver_protocol_1.MessageType.Info, RevealOutputChannelOn.Info, 'Info', message, data, showNotification);
	    }
	    warn(message, data, showNotification = true) {
	        this.logOutputMessage(vscode_languageserver_protocol_1.MessageType.Warning, RevealOutputChannelOn.Warn, 'Warn', message, data, showNotification);
	    }
	    error(message, data, showNotification = true) {
	        this.logOutputMessage(vscode_languageserver_protocol_1.MessageType.Error, RevealOutputChannelOn.Error, 'Error', message, data, showNotification);
	    }
	    logOutputMessage(type, reveal, name, message, data, showNotification) {
	        this.outputChannel.appendLine(`[${name.padEnd(5)} - ${(new Date().toLocaleTimeString())}] ${message}`);
	        if (data !== null && data !== undefined) {
	            this.outputChannel.appendLine(this.data2String(data));
	        }
	        if (showNotification === 'force' || (showNotification && this._clientOptions.revealOutputChannelOn <= reveal)) {
	            this.showNotificationMessage(type, message);
	        }
	    }
	    showNotificationMessage(type, message) {
	        message = message ?? 'A request has failed. See the output for more information.';
	        const messageFunc = type === vscode_languageserver_protocol_1.MessageType.Error
	            ? vscode_1.window.showErrorMessage
	            : type === vscode_languageserver_protocol_1.MessageType.Warning
	                ? vscode_1.window.showWarningMessage
	                : vscode_1.window.showInformationMessage;
	        void messageFunc(message, 'Go to output').then((selection) => {
	            if (selection !== undefined) {
	                this.outputChannel.show(true);
	            }
	        });
	    }
	    logTrace(message, data) {
	        this.traceOutputChannel.appendLine(`[Trace - ${(new Date().toLocaleTimeString())}] ${message}`);
	        if (data) {
	            this.traceOutputChannel.appendLine(this.data2String(data));
	        }
	    }
	    logObjectTrace(data) {
	        if (data.isLSPMessage && data.type) {
	            this.traceOutputChannel.append(`[LSP   - ${(new Date().toLocaleTimeString())}] `);
	        }
	        else {
	            this.traceOutputChannel.append(`[Trace - ${(new Date().toLocaleTimeString())}] `);
	        }
	        if (data) {
	            this.traceOutputChannel.appendLine(`${JSON.stringify(data)}`);
	        }
	    }
	    needsStart() {
	        return this.$state === ClientState.Initial || this.$state === ClientState.Stopping || this.$state === ClientState.Stopped;
	    }
	    needsStop() {
	        return this.$state === ClientState.Starting || this.$state === ClientState.Running;
	    }
	    activeConnection() {
	        return this.$state === ClientState.Running && this._connection !== undefined ? this._connection : undefined;
	    }
	    isRunning() {
	        return this.$state === ClientState.Running;
	    }
	    async start() {
	        if (this._disposed === 'disposing' || this._disposed === 'disposed') {
	            throw new Error(`Client got disposed and can't be restarted.`);
	        }
	        if (this.$state === ClientState.Stopping) {
	            throw new Error(`Client is currently stopping. Can only restart a full stopped client`);
	        }
	        // We are already running or are in the process of getting up
	        // to speed.
	        if (this._onStart !== undefined) {
	            return this._onStart;
	        }
	        const [promise, resolve, reject] = this.createOnStartPromise();
	        this._onStart = promise;
	        // If we restart then the diagnostics collection is reused.
	        if (this._diagnostics === undefined) {
	            this._diagnostics = this._clientOptions.diagnosticCollectionName
	                ? vscode_1.languages.createDiagnosticCollection(this._clientOptions.diagnosticCollectionName)
	                : vscode_1.languages.createDiagnosticCollection();
	        }
	        // When we start make all buffer handlers pending so that they
	        // get added.
	        for (const [method, handler] of this._notificationHandlers) {
	            if (!this._pendingNotificationHandlers.has(method)) {
	                this._pendingNotificationHandlers.set(method, handler);
	            }
	        }
	        for (const [method, handler] of this._requestHandlers) {
	            if (!this._pendingRequestHandlers.has(method)) {
	                this._pendingRequestHandlers.set(method, handler);
	            }
	        }
	        for (const [token, data] of this._progressHandlers) {
	            if (!this._pendingProgressHandlers.has(token)) {
	                this._pendingProgressHandlers.set(token, data);
	            }
	        }
	        this.$state = ClientState.Starting;
	        try {
	            const connection = await this.createConnection();
	            connection.onNotification(vscode_languageserver_protocol_1.LogMessageNotification.type, (message) => {
	                switch (message.type) {
	                    case vscode_languageserver_protocol_1.MessageType.Error:
	                        this.error(message.message, undefined, false);
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Warning:
	                        this.warn(message.message, undefined, false);
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Info:
	                        this.info(message.message, undefined, false);
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Debug:
	                        this.debug(message.message, undefined, false);
	                        break;
	                    default:
	                        this.outputChannel.appendLine(message.message);
	                }
	            });
	            connection.onNotification(vscode_languageserver_protocol_1.ShowMessageNotification.type, (message) => {
	                switch (message.type) {
	                    case vscode_languageserver_protocol_1.MessageType.Error:
	                        void vscode_1.window.showErrorMessage(message.message);
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Warning:
	                        void vscode_1.window.showWarningMessage(message.message);
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Info:
	                        void vscode_1.window.showInformationMessage(message.message);
	                        break;
	                    default:
	                        void vscode_1.window.showInformationMessage(message.message);
	                }
	            });
	            connection.onRequest(vscode_languageserver_protocol_1.ShowMessageRequest.type, (params) => {
	                let messageFunc;
	                switch (params.type) {
	                    case vscode_languageserver_protocol_1.MessageType.Error:
	                        messageFunc = vscode_1.window.showErrorMessage;
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Warning:
	                        messageFunc = vscode_1.window.showWarningMessage;
	                        break;
	                    case vscode_languageserver_protocol_1.MessageType.Info:
	                        messageFunc = vscode_1.window.showInformationMessage;
	                        break;
	                    default:
	                        messageFunc = vscode_1.window.showInformationMessage;
	                }
	                let actions = params.actions || [];
	                return messageFunc(params.message, ...actions);
	            });
	            connection.onNotification(vscode_languageserver_protocol_1.TelemetryEventNotification.type, (data) => {
	                this._telemetryEmitter.fire(data);
	            });
	            connection.onRequest(vscode_languageserver_protocol_1.ShowDocumentRequest.type, async (params) => {
	                const showDocument = async (params) => {
	                    const uri = this.protocol2CodeConverter.asUri(params.uri);
	                    try {
	                        if (params.external === true) {
	                            const success = await vscode_1.env.openExternal(uri);
	                            return { success };
	                        }
	                        else {
	                            const options = {};
	                            if (params.selection !== undefined) {
	                                options.selection = this.protocol2CodeConverter.asRange(params.selection);
	                            }
	                            if (params.takeFocus === undefined || params.takeFocus === false) {
	                                options.preserveFocus = true;
	                            }
	                            else if (params.takeFocus === true) {
	                                options.preserveFocus = false;
	                            }
	                            await vscode_1.window.showTextDocument(uri, options);
	                            return { success: true };
	                        }
	                    }
	                    catch (error) {
	                        return { success: false };
	                    }
	                };
	                const middleware = this._clientOptions.middleware.window?.showDocument;
	                if (middleware !== undefined) {
	                    return middleware(params, showDocument);
	                }
	                else {
	                    return showDocument(params);
	                }
	            });
	            connection.listen();
	            await this.initialize(connection);
	            resolve();
	        }
	        catch (error) {
	            this.$state = ClientState.StartFailed;
	            this.error(`${this._name} client: couldn't create connection to server.`, error, 'force');
	            reject(error);
	        }
	        return this._onStart;
	    }
	    createOnStartPromise() {
	        let resolve;
	        let reject;
	        const promise = new Promise((_resolve, _reject) => {
	            resolve = _resolve;
	            reject = _reject;
	        });
	        return [promise, resolve, reject];
	    }
	    async initialize(connection) {
	        this.refreshTrace(connection, false);
	        const initOption = this._clientOptions.initializationOptions;
	        // If the client is locked to a workspace folder use it. In this case the workspace folder
	        // feature is not registered and we need to initialize the value here.
	        const [rootPath, workspaceFolders] = this._clientOptions.workspaceFolder !== undefined
	            ? [this._clientOptions.workspaceFolder.uri.fsPath, [{ uri: this._c2p.asUri(this._clientOptions.workspaceFolder.uri), name: this._clientOptions.workspaceFolder.name }]]
	            : [this._clientGetRootPath(), null];
	        const initParams = {
	            processId: null,
	            clientInfo: {
	                name: vscode_1.env.appName,
	                version: vscode_1.version
	            },
	            locale: this.getLocale(),
	            rootPath: rootPath ? rootPath : null,
	            rootUri: rootPath ? this._c2p.asUri(vscode_1.Uri.file(rootPath)) : null,
	            capabilities: this.computeClientCapabilities(),
	            initializationOptions: Is.func(initOption) ? initOption() : initOption,
	            trace: vscode_languageserver_protocol_1.Trace.toString(this._trace),
	            workspaceFolders: workspaceFolders
	        };
	        this.fillInitializeParams(initParams);
	        if (this._clientOptions.progressOnInitialization) {
	            const token = UUID.generateUuid();
	            const part = new progressPart_1.ProgressPart(connection, token);
	            initParams.workDoneToken = token;
	            try {
	                const result = await this.doInitialize(connection, initParams);
	                part.done();
	                return result;
	            }
	            catch (error) {
	                part.cancel();
	                throw error;
	            }
	        }
	        else {
	            return this.doInitialize(connection, initParams);
	        }
	    }
	    async doInitialize(connection, initParams) {
	        try {
	            const result = await connection.initialize(initParams);
	            if (result.capabilities.positionEncoding !== undefined && result.capabilities.positionEncoding !== vscode_languageserver_protocol_1.PositionEncodingKind.UTF16) {
	                throw new Error(`Unsupported position encoding (${result.capabilities.positionEncoding}) received from server ${this.name}`);
	            }
	            this._initializeResult = result;
	            this.$state = ClientState.Running;
	            let textDocumentSyncOptions = undefined;
	            if (Is.number(result.capabilities.textDocumentSync)) {
	                if (result.capabilities.textDocumentSync === vscode_languageserver_protocol_1.TextDocumentSyncKind.None) {
	                    textDocumentSyncOptions = {
	                        openClose: false,
	                        change: vscode_languageserver_protocol_1.TextDocumentSyncKind.None,
	                        save: undefined
	                    };
	                }
	                else {
	                    textDocumentSyncOptions = {
	                        openClose: true,
	                        change: result.capabilities.textDocumentSync,
	                        save: {
	                            includeText: false
	                        }
	                    };
	                }
	            }
	            else if (result.capabilities.textDocumentSync !== undefined && result.capabilities.textDocumentSync !== null) {
	                textDocumentSyncOptions = result.capabilities.textDocumentSync;
	            }
	            this._capabilities = Object.assign({}, result.capabilities, { resolvedTextDocumentSync: textDocumentSyncOptions });
	            connection.onNotification(vscode_languageserver_protocol_1.PublishDiagnosticsNotification.type, params => this.handleDiagnostics(params));
	            connection.onRequest(vscode_languageserver_protocol_1.RegistrationRequest.type, params => this.handleRegistrationRequest(params));
	            // See https://github.com/Microsoft/vscode-languageserver-node/issues/199
	            connection.onRequest('client/registerFeature', params => this.handleRegistrationRequest(params));
	            connection.onRequest(vscode_languageserver_protocol_1.UnregistrationRequest.type, params => this.handleUnregistrationRequest(params));
	            // See https://github.com/Microsoft/vscode-languageserver-node/issues/199
	            connection.onRequest('client/unregisterFeature', params => this.handleUnregistrationRequest(params));
	            connection.onRequest(vscode_languageserver_protocol_1.ApplyWorkspaceEditRequest.type, params => this.handleApplyWorkspaceEdit(params));
	            // Add pending notification, request and progress handlers.
	            for (const [method, handler] of this._pendingNotificationHandlers) {
	                this._notificationDisposables.set(method, connection.onNotification(method, handler));
	            }
	            this._pendingNotificationHandlers.clear();
	            for (const [method, handler] of this._pendingRequestHandlers) {
	                this._requestDisposables.set(method, connection.onRequest(method, handler));
	            }
	            this._pendingRequestHandlers.clear();
	            for (const [token, data] of this._pendingProgressHandlers) {
	                this._progressDisposables.set(token, connection.onProgress(data.type, token, data.handler));
	            }
	            this._pendingProgressHandlers.clear();
	            // if (this._clientOptions.suspend.mode !== SuspendMode.off) {
	            // 	this._idleInterval =  RAL().timer.setInterval(() => this.checkSuspend(), this._clientOptions.suspend.interval);
	            // }
	            await connection.sendNotification(vscode_languageserver_protocol_1.InitializedNotification.type, {});
	            this.hookFileEvents(connection);
	            this.hookConfigurationChanged(connection);
	            this.initializeFeatures(connection);
	            return result;
	        }
	        catch (error) {
	            if (this._clientOptions.initializationFailedHandler) {
	                if (this._clientOptions.initializationFailedHandler(error)) {
	                    void this.initialize(connection);
	                }
	                else {
	                    void this.stop();
	                }
	            }
	            else if (error instanceof vscode_languageserver_protocol_1.ResponseError && error.data && error.data.retry) {
	                void vscode_1.window.showErrorMessage(error.message, { title: 'Retry', id: 'retry' }).then(item => {
	                    if (item && item.id === 'retry') {
	                        void this.initialize(connection);
	                    }
	                    else {
	                        void this.stop();
	                    }
	                });
	            }
	            else {
	                if (error && error.message) {
	                    void vscode_1.window.showErrorMessage(error.message);
	                }
	                this.error('Server initialization failed.', error);
	                void this.stop();
	            }
	            throw error;
	        }
	    }
	    _clientGetRootPath() {
	        let folders = vscode_1.workspace.workspaceFolders;
	        if (!folders || folders.length === 0) {
	            return undefined;
	        }
	        let folder = folders[0];
	        if (folder.uri.scheme === 'file') {
	            return folder.uri.fsPath;
	        }
	        return undefined;
	    }
	    stop(timeout = 2000) {
	        // Wait 2 seconds on stop
	        return this.shutdown('stop', timeout);
	    }
	    dispose(timeout = 2000) {
	        try {
	            this._disposed = 'disposing';
	            return this.stop(timeout);
	        }
	        finally {
	            this._disposed = 'disposed';
	        }
	    }
	    async shutdown(mode, timeout) {
	        // If the client is stopped or in its initial state return.
	        if (this.$state === ClientState.Stopped || this.$state === ClientState.Initial) {
	            return;
	        }
	        // If we are stopping the client and have a stop promise return it.
	        if (this.$state === ClientState.Stopping) {
	            if (this._onStop !== undefined) {
	                return this._onStop;
	            }
	            else {
	                throw new Error(`Client is stopping but no stop promise available.`);
	            }
	        }
	        const connection = this.activeConnection();
	        // We can't stop a client that is not running (e.g. has no connection). Especially not
	        // on that us starting since it can't be correctly synchronized.
	        if (connection === undefined || this.$state !== ClientState.Running) {
	            throw new Error(`Client is not running and can't be stopped. It's current state is: ${this.$state}`);
	        }
	        this._initializeResult = undefined;
	        this.$state = ClientState.Stopping;
	        this.cleanUp(mode);
	        const tp = new Promise(c => { (0, vscode_languageserver_protocol_1.RAL)().timer.setTimeout(c, timeout); });
	        const shutdown = (async (connection) => {
	            await connection.shutdown();
	            await connection.exit();
	            return connection;
	        })(connection);
	        return this._onStop = Promise.race([tp, shutdown]).then((connection) => {
	            // The connection won the race with the timeout.
	            if (connection !== undefined) {
	                connection.end();
	                connection.dispose();
	            }
	            else {
	                this.error(`Stopping server timed out`, undefined, false);
	                throw new Error(`Stopping the server timed out`);
	            }
	        }, (error) => {
	            this.error(`Stopping server failed`, error, false);
	            throw error;
	        }).finally(() => {
	            this.$state = ClientState.Stopped;
	            mode === 'stop' && this.cleanUpChannel();
	            this._onStart = undefined;
	            this._onStop = undefined;
	            this._connection = undefined;
	            this._ignoredRegistrations.clear();
	        });
	    }
	    cleanUp(mode) {
	        // purge outstanding file events.
	        this._fileEvents = [];
	        this._fileEventDelayer.cancel();
	        const disposables = this._listeners.splice(0, this._listeners.length);
	        for (const disposable of disposables) {
	            disposable.dispose();
	        }
	        if (this._syncedDocuments) {
	            this._syncedDocuments.clear();
	        }
	        // Clear features in reverse order;
	        for (const feature of Array.from(this._features.entries()).map(entry => entry[1]).reverse()) {
	            feature.clear();
	        }
	        if (mode === 'stop' && this._diagnostics !== undefined) {
	            this._diagnostics.dispose();
	            this._diagnostics = undefined;
	        }
	        if (this._idleInterval !== undefined) {
	            this._idleInterval.dispose();
	            this._idleInterval = undefined;
	        }
	        // this._idleStart = undefined;
	    }
	    cleanUpChannel() {
	        if (this._outputChannel !== undefined && this._disposeOutputChannel) {
	            this._outputChannel.dispose();
	            this._outputChannel = undefined;
	        }
	    }
	    notifyFileEvent(event) {
	        const client = this;
	        async function didChangeWatchedFile(event) {
	            client._fileEvents.push(event);
	            return client._fileEventDelayer.trigger(async () => {
	                await client.sendNotification(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type, { changes: client._fileEvents });
	                client._fileEvents = [];
	            });
	        }
	        const workSpaceMiddleware = this.clientOptions.middleware?.workspace;
	        (workSpaceMiddleware?.didChangeWatchedFile ? workSpaceMiddleware.didChangeWatchedFile(event, didChangeWatchedFile) : didChangeWatchedFile(event)).catch((error) => {
	            client.error(`Notify file events failed.`, error);
	        });
	    }
	    async sendPendingFullTextDocumentChanges(connection) {
	        return this._pendingChangeSemaphore.lock(async () => {
	            try {
	                const changes = this._didChangeTextDocumentFeature.getPendingDocumentChanges(this._pendingOpenNotifications);
	                if (changes.length === 0) {
	                    return;
	                }
	                for (const document of changes) {
	                    const params = this.code2ProtocolConverter.asChangeTextDocumentParams(document);
	                    // We await the send and not the delivery since it is more or less the same for
	                    // notifications.
	                    await connection.sendNotification(vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
	                    this._didChangeTextDocumentFeature.notificationSent(document, vscode_languageserver_protocol_1.DidChangeTextDocumentNotification.type, params);
	                }
	            }
	            catch (error) {
	                this.error(`Sending pending changes failed`, error, false);
	                throw error;
	            }
	        });
	    }
	    triggerPendingChangeDelivery() {
	        this._pendingChangeDelayer.trigger(async () => {
	            const connection = this.activeConnection();
	            if (connection === undefined) {
	                this.triggerPendingChangeDelivery();
	                return;
	            }
	            await this.sendPendingFullTextDocumentChanges(connection);
	        }).catch((error) => this.error(`Delivering pending changes failed`, error, false));
	    }
	    handleDiagnostics(params) {
	        if (!this._diagnostics) {
	            return;
	        }
	        const key = params.uri;
	        if (this._diagnosticQueueState.state === 'busy' && this._diagnosticQueueState.document === key) {
	            // Cancel the active run;
	            this._diagnosticQueueState.tokenSource.cancel();
	        }
	        this._diagnosticQueue.set(params.uri, params.diagnostics);
	        this.triggerDiagnosticQueue();
	    }
	    triggerDiagnosticQueue() {
	        (0, vscode_languageserver_protocol_1.RAL)().timer.setImmediate(() => { this.workDiagnosticQueue(); });
	    }
	    workDiagnosticQueue() {
	        if (this._diagnosticQueueState.state === 'busy') {
	            return;
	        }
	        const next = this._diagnosticQueue.entries().next();
	        if (next.done === true) {
	            // Nothing in the queue
	            return;
	        }
	        const [document, diagnostics] = next.value;
	        this._diagnosticQueue.delete(document);
	        const tokenSource = new vscode_1.CancellationTokenSource();
	        this._diagnosticQueueState = { state: 'busy', document: document, tokenSource };
	        this._p2c.asDiagnostics(diagnostics, tokenSource.token).then((converted) => {
	            if (!tokenSource.token.isCancellationRequested) {
	                const uri = this._p2c.asUri(document);
	                const middleware = this.clientOptions.middleware;
	                if (middleware.handleDiagnostics) {
	                    middleware.handleDiagnostics(uri, converted, (uri, diagnostics) => this.setDiagnostics(uri, diagnostics));
	                }
	                else {
	                    this.setDiagnostics(uri, converted);
	                }
	            }
	        }).finally(() => {
	            this._diagnosticQueueState = { state: 'idle' };
	            this.triggerDiagnosticQueue();
	        });
	    }
	    setDiagnostics(uri, diagnostics) {
	        if (!this._diagnostics) {
	            return;
	        }
	        this._diagnostics.set(uri, diagnostics);
	    }
	    getLocale() {
	        return vscode_1.env.language;
	    }
	    async $start() {
	        if (this.$state === ClientState.StartFailed) {
	            throw new Error(`Previous start failed. Can't restart server.`);
	        }
	        await this.start();
	        const connection = this.activeConnection();
	        if (connection === undefined) {
	            throw new Error(`Starting server failed`);
	        }
	        return connection;
	    }
	    async createConnection() {
	        let errorHandler = (error, message, count) => {
	            this.handleConnectionError(error, message, count).catch((error) => this.error(`Handling connection error failed`, error));
	        };
	        let closeHandler = () => {
	            this.handleConnectionClosed().catch((error) => this.error(`Handling connection close failed`, error));
	        };
	        const transports = await this.createMessageTransports(this._clientOptions.stdioEncoding || 'utf8');
	        this._connection = createConnection(transports.reader, transports.writer, errorHandler, closeHandler, this._clientOptions.connectionOptions);
	        return this._connection;
	    }
	    async handleConnectionClosed() {
	        // Check whether this is a normal shutdown in progress or the client stopped normally.
	        if (this.$state === ClientState.Stopped) {
	            return;
	        }
	        try {
	            if (this._connection !== undefined) {
	                this._connection.dispose();
	            }
	        }
	        catch (error) {
	            // Disposing a connection could fail if error cases.
	        }
	        let handlerResult = { action: CloseAction.DoNotRestart };
	        if (this.$state !== ClientState.Stopping) {
	            try {
	                handlerResult = await this._clientOptions.errorHandler.closed();
	            }
	            catch (error) {
	                // Ignore errors coming from the error handler.
	            }
	        }
	        this._connection = undefined;
	        if (handlerResult.action === CloseAction.DoNotRestart) {
	            this.error(handlerResult.message ?? 'Connection to server got closed. Server will not be restarted.', undefined, handlerResult.handled === true ? false : 'force');
	            this.cleanUp('stop');
	            if (this.$state === ClientState.Starting) {
	                this.$state = ClientState.StartFailed;
	            }
	            else {
	                this.$state = ClientState.Stopped;
	            }
	            this._onStop = Promise.resolve();
	            this._onStart = undefined;
	        }
	        else if (handlerResult.action === CloseAction.Restart) {
	            this.info(handlerResult.message ?? 'Connection to server got closed. Server will restart.', !handlerResult.handled);
	            this.cleanUp('restart');
	            this.$state = ClientState.Initial;
	            this._onStop = Promise.resolve();
	            this._onStart = undefined;
	            this.start().catch((error) => this.error(`Restarting server failed`, error, 'force'));
	        }
	    }
	    async handleConnectionError(error, message, count) {
	        const handlerResult = await this._clientOptions.errorHandler.error(error, message, count);
	        if (handlerResult.action === ErrorAction.Shutdown) {
	            this.error(handlerResult.message ?? `Client ${this._name}: connection to server is erroring.\n${error.message}\nShutting down server.`, undefined, handlerResult.handled === true ? false : 'force');
	            this.stop().catch((error) => {
	                this.error(`Stopping server failed`, error, false);
	            });
	        }
	        else {
	            this.error(handlerResult.message ??
	                `Client ${this._name}: connection to server is erroring.\n${error.message}`, undefined, handlerResult.handled === true ? false : 'force');
	        }
	    }
	    hookConfigurationChanged(connection) {
	        this._listeners.push(vscode_1.workspace.onDidChangeConfiguration(() => {
	            this.refreshTrace(connection, true);
	        }));
	    }
	    refreshTrace(connection, sendNotification = false) {
	        const config = vscode_1.workspace.getConfiguration(this._id);
	        let trace = vscode_languageserver_protocol_1.Trace.Off;
	        let traceFormat = vscode_languageserver_protocol_1.TraceFormat.Text;
	        if (config) {
	            const traceConfig = config.get('trace.server', 'off');
	            if (typeof traceConfig === 'string') {
	                trace = vscode_languageserver_protocol_1.Trace.fromString(traceConfig);
	            }
	            else {
	                trace = vscode_languageserver_protocol_1.Trace.fromString(config.get('trace.server.verbosity', 'off'));
	                traceFormat = vscode_languageserver_protocol_1.TraceFormat.fromString(config.get('trace.server.format', 'text'));
	            }
	        }
	        this._trace = trace;
	        this._traceFormat = traceFormat;
	        connection.trace(this._trace, this._tracer, {
	            sendNotification,
	            traceFormat: this._traceFormat
	        }).catch((error) => { this.error(`Updating trace failed with error`, error, false); });
	    }
	    hookFileEvents(_connection) {
	        let fileEvents = this._clientOptions.synchronize.fileEvents;
	        if (!fileEvents) {
	            return;
	        }
	        let watchers;
	        if (Is.array(fileEvents)) {
	            watchers = fileEvents;
	        }
	        else {
	            watchers = [fileEvents];
	        }
	        if (!watchers) {
	            return;
	        }
	        this._dynamicFeatures.get(vscode_languageserver_protocol_1.DidChangeWatchedFilesNotification.type.method).registerRaw(UUID.generateUuid(), watchers);
	    }
	    registerFeatures(features) {
	        for (let feature of features) {
	            this.registerFeature(feature);
	        }
	    }
	    registerFeature(feature) {
	        this._features.push(feature);
	        if (features_1.DynamicFeature.is(feature)) {
	            const registrationType = feature.registrationType;
	            this._dynamicFeatures.set(registrationType.method, feature);
	        }
	    }
	    getFeature(request) {
	        return this._dynamicFeatures.get(request);
	    }
	    hasDedicatedTextSynchronizationFeature(textDocument) {
	        const feature = this.getFeature(vscode_languageserver_protocol_1.NotebookDocumentSyncRegistrationType.method);
	        if (feature === undefined || !(feature instanceof notebook_1.NotebookDocumentSyncFeature)) {
	            return false;
	        }
	        return feature.handles(textDocument);
	    }
	    registerBuiltinFeatures() {
	        const pendingFullTextDocumentChanges = new Map();
	        this.registerFeature(new configuration_1.ConfigurationFeature(this));
	        this.registerFeature(new textSynchronization_1.DidOpenTextDocumentFeature(this, this._syncedDocuments));
	        this._didChangeTextDocumentFeature = new textSynchronization_1.DidChangeTextDocumentFeature(this, pendingFullTextDocumentChanges);
	        this._didChangeTextDocumentFeature.onPendingChangeAdded(() => {
	            this.triggerPendingChangeDelivery();
	        });
	        this.registerFeature(this._didChangeTextDocumentFeature);
	        this.registerFeature(new textSynchronization_1.WillSaveFeature(this));
	        this.registerFeature(new textSynchronization_1.WillSaveWaitUntilFeature(this));
	        this.registerFeature(new textSynchronization_1.DidSaveTextDocumentFeature(this));
	        this.registerFeature(new textSynchronization_1.DidCloseTextDocumentFeature(this, this._syncedDocuments, pendingFullTextDocumentChanges));
	        this.registerFeature(new fileSystemWatcher_1.FileSystemWatcherFeature(this, (event) => this.notifyFileEvent(event)));
	        this.registerFeature(new completion_1.CompletionItemFeature(this));
	        this.registerFeature(new hover_1.HoverFeature(this));
	        this.registerFeature(new signatureHelp_1.SignatureHelpFeature(this));
	        this.registerFeature(new definition_1.DefinitionFeature(this));
	        this.registerFeature(new reference_1.ReferencesFeature(this));
	        this.registerFeature(new documentHighlight_1.DocumentHighlightFeature(this));
	        this.registerFeature(new documentSymbol_1.DocumentSymbolFeature(this));
	        this.registerFeature(new workspaceSymbol_1.WorkspaceSymbolFeature(this));
	        this.registerFeature(new codeAction_1.CodeActionFeature(this));
	        this.registerFeature(new codeLens_1.CodeLensFeature(this));
	        this.registerFeature(new formatting_1.DocumentFormattingFeature(this));
	        this.registerFeature(new formatting_1.DocumentRangeFormattingFeature(this));
	        this.registerFeature(new formatting_1.DocumentOnTypeFormattingFeature(this));
	        this.registerFeature(new rename_1.RenameFeature(this));
	        this.registerFeature(new documentLink_1.DocumentLinkFeature(this));
	        this.registerFeature(new executeCommand_1.ExecuteCommandFeature(this));
	        this.registerFeature(new configuration_1.SyncConfigurationFeature(this));
	        this.registerFeature(new typeDefinition_1.TypeDefinitionFeature(this));
	        this.registerFeature(new implementation_1.ImplementationFeature(this));
	        this.registerFeature(new colorProvider_1.ColorProviderFeature(this));
	        // We only register the workspace folder feature if the client is not locked
	        // to a specific workspace folder.
	        if (this.clientOptions.workspaceFolder === undefined) {
	            this.registerFeature(new workspaceFolder_1.WorkspaceFoldersFeature(this));
	        }
	        this.registerFeature(new foldingRange_1.FoldingRangeFeature(this));
	        this.registerFeature(new declaration_1.DeclarationFeature(this));
	        this.registerFeature(new selectionRange_1.SelectionRangeFeature(this));
	        this.registerFeature(new progress_1.ProgressFeature(this));
	        this.registerFeature(new callHierarchy_1.CallHierarchyFeature(this));
	        this.registerFeature(new semanticTokens_1.SemanticTokensFeature(this));
	        this.registerFeature(new linkedEditingRange_1.LinkedEditingFeature(this));
	        this.registerFeature(new fileOperations_1.DidCreateFilesFeature(this));
	        this.registerFeature(new fileOperations_1.DidRenameFilesFeature(this));
	        this.registerFeature(new fileOperations_1.DidDeleteFilesFeature(this));
	        this.registerFeature(new fileOperations_1.WillCreateFilesFeature(this));
	        this.registerFeature(new fileOperations_1.WillRenameFilesFeature(this));
	        this.registerFeature(new fileOperations_1.WillDeleteFilesFeature(this));
	        this.registerFeature(new typeHierarchy_1.TypeHierarchyFeature(this));
	        this.registerFeature(new inlineValue_1.InlineValueFeature(this));
	        this.registerFeature(new inlayHint_1.InlayHintsFeature(this));
	        this.registerFeature(new diagnostic_1.DiagnosticFeature(this));
	        this.registerFeature(new notebook_1.NotebookDocumentSyncFeature(this));
	    }
	    registerProposedFeatures() {
	        this.registerFeatures(ProposedFeatures.createAll(this));
	    }
	    fillInitializeParams(params) {
	        for (let feature of this._features) {
	            if (Is.func(feature.fillInitializeParams)) {
	                feature.fillInitializeParams(params);
	            }
	        }
	    }
	    computeClientCapabilities() {
	        const result = {};
	        (0, features_1.ensure)(result, 'workspace').applyEdit = true;
	        const workspaceEdit = (0, features_1.ensure)((0, features_1.ensure)(result, 'workspace'), 'workspaceEdit');
	        workspaceEdit.documentChanges = true;
	        workspaceEdit.resourceOperations = [vscode_languageserver_protocol_1.ResourceOperationKind.Create, vscode_languageserver_protocol_1.ResourceOperationKind.Rename, vscode_languageserver_protocol_1.ResourceOperationKind.Delete];
	        workspaceEdit.failureHandling = vscode_languageserver_protocol_1.FailureHandlingKind.TextOnlyTransactional;
	        workspaceEdit.normalizesLineEndings = true;
	        workspaceEdit.changeAnnotationSupport = {
	            groupsOnLabel: true
	        };
	        const diagnostics = (0, features_1.ensure)((0, features_1.ensure)(result, 'textDocument'), 'publishDiagnostics');
	        diagnostics.relatedInformation = true;
	        diagnostics.versionSupport = false;
	        diagnostics.tagSupport = { valueSet: [vscode_languageserver_protocol_1.DiagnosticTag.Unnecessary, vscode_languageserver_protocol_1.DiagnosticTag.Deprecated] };
	        diagnostics.codeDescriptionSupport = true;
	        diagnostics.dataSupport = true;
	        const windowCapabilities = (0, features_1.ensure)(result, 'window');
	        const showMessage = (0, features_1.ensure)(windowCapabilities, 'showMessage');
	        showMessage.messageActionItem = { additionalPropertiesSupport: true };
	        const showDocument = (0, features_1.ensure)(windowCapabilities, 'showDocument');
	        showDocument.support = true;
	        const generalCapabilities = (0, features_1.ensure)(result, 'general');
	        generalCapabilities.staleRequestSupport = {
	            cancel: true,
	            retryOnContentModified: Array.from(BaseLanguageClient.RequestsToCancelOnContentModified)
	        };
	        generalCapabilities.regularExpressions = { engine: 'ECMAScript', version: 'ES2020' };
	        generalCapabilities.markdown = {
	            parser: 'marked',
	            version: '1.1.0',
	        };
	        generalCapabilities.positionEncodings = ['utf-16'];
	        if (this._clientOptions.markdown.supportHtml) {
	            generalCapabilities.markdown.allowedTags = ['ul', 'li', 'p', 'code', 'blockquote', 'ol', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hr', 'em', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'div', 'del', 'a', 'strong', 'br', 'img', 'span'];
	        }
	        for (let feature of this._features) {
	            feature.fillClientCapabilities(result);
	        }
	        return result;
	    }
	    initializeFeatures(_connection) {
	        const documentSelector = this._clientOptions.documentSelector;
	        for (const feature of this._features) {
	            if (Is.func(feature.preInitialize)) {
	                feature.preInitialize(this._capabilities, documentSelector);
	            }
	        }
	        for (const feature of this._features) {
	            feature.initialize(this._capabilities, documentSelector);
	        }
	    }
	    async handleRegistrationRequest(params) {
	        const middleware = this.clientOptions.middleware?.handleRegisterCapability;
	        if (middleware) {
	            return middleware(params, nextParams => this.doRegisterCapability(nextParams));
	        }
	        else {
	            return this.doRegisterCapability(params);
	        }
	    }
	    async doRegisterCapability(params) {
	        // We will not receive a registration call before a client is running
	        // from a server. However if we stop or shutdown we might which might
	        // try to restart the server. So ignore registrations if we are not running
	        if (!this.isRunning()) {
	            for (const registration of params.registrations) {
	                this._ignoredRegistrations.add(registration.id);
	            }
	            return;
	        }
	        for (const registration of params.registrations) {
	            const feature = this._dynamicFeatures.get(registration.method);
	            if (feature === undefined) {
	                return Promise.reject(new Error(`No feature implementation for ${registration.method} found. Registration failed.`));
	            }
	            const options = registration.registerOptions ?? {};
	            options.documentSelector = options.documentSelector ?? this._clientOptions.documentSelector;
	            const data = {
	                id: registration.id,
	                registerOptions: options
	            };
	            try {
	                feature.register(data);
	            }
	            catch (err) {
	                return Promise.reject(err);
	            }
	        }
	    }
	    async handleUnregistrationRequest(params) {
	        const middleware = this.clientOptions.middleware?.handleUnregisterCapability;
	        if (middleware) {
	            return middleware(params, nextParams => this.doUnregisterCapability(nextParams));
	        }
	        else {
	            return this.doUnregisterCapability(params);
	        }
	    }
	    async doUnregisterCapability(params) {
	        for (const unregistration of params.unregisterations) {
	            if (this._ignoredRegistrations.has(unregistration.id)) {
	                continue;
	            }
	            const feature = this._dynamicFeatures.get(unregistration.method);
	            if (!feature) {
	                return Promise.reject(new Error(`No feature implementation for ${unregistration.method} found. Unregistration failed.`));
	            }
	            feature.unregister(unregistration.id);
	        }
	    }
	    async handleApplyWorkspaceEdit(params) {
	        const workspaceEdit = params.edit;
	        // Make sure we convert workspace edits one after the other. Otherwise
	        // we might execute a workspace edit received first after we received another
	        // one since the conversion might race.
	        const converted = await this.workspaceEditLock.lock(() => {
	            return this._p2c.asWorkspaceEdit(workspaceEdit);
	        });
	        // This is some sort of workaround since the version check should be done by VS Code in the Workspace.applyEdit.
	        // However doing it here adds some safety since the server can lag more behind then an extension.
	        const openTextDocuments = new Map();
	        vscode_1.workspace.textDocuments.forEach((document) => openTextDocuments.set(document.uri.toString(), document));
	        let versionMismatch = false;
	        if (workspaceEdit.documentChanges) {
	            for (const change of workspaceEdit.documentChanges) {
	                if (vscode_languageserver_protocol_1.TextDocumentEdit.is(change) && change.textDocument.version && change.textDocument.version >= 0) {
	                    const changeUri = this._p2c.asUri(change.textDocument.uri).toString();
	                    const textDocument = openTextDocuments.get(changeUri);
	                    if (textDocument && textDocument.version !== change.textDocument.version) {
	                        versionMismatch = true;
	                        break;
	                    }
	                }
	            }
	        }
	        if (versionMismatch) {
	            return Promise.resolve({ applied: false });
	        }
	        return Is.asPromise(vscode_1.workspace.applyEdit(converted).then((value) => { return { applied: value }; }));
	    }
	    handleFailedRequest(type, token, error, defaultValue, showNotification = true) {
	        // If we get a request cancel or a content modified don't log anything.
	        if (error instanceof vscode_languageserver_protocol_1.ResponseError) {
	            // The connection got disposed while we were waiting for a response.
	            // Simply return the default value. Is the best we can do.
	            if (error.code === vscode_languageserver_protocol_1.ErrorCodes.PendingResponseRejected || error.code === vscode_languageserver_protocol_1.ErrorCodes.ConnectionInactive) {
	                return defaultValue;
	            }
	            if (error.code === vscode_languageserver_protocol_1.LSPErrorCodes.RequestCancelled || error.code === vscode_languageserver_protocol_1.LSPErrorCodes.ServerCancelled) {
	                if (token !== undefined && token.isCancellationRequested) {
	                    return defaultValue;
	                }
	                else {
	                    if (error.data !== undefined) {
	                        throw new features_1.LSPCancellationError(error.data);
	                    }
	                    else {
	                        throw new vscode_1.CancellationError();
	                    }
	                }
	            }
	            else if (error.code === vscode_languageserver_protocol_1.LSPErrorCodes.ContentModified) {
	                if (BaseLanguageClient.RequestsToCancelOnContentModified.has(type.method) || BaseLanguageClient.CancellableResolveCalls.has(type.method)) {
	                    throw new vscode_1.CancellationError();
	                }
	                else {
	                    return defaultValue;
	                }
	            }
	        }
	        this.error(`Request ${type.method} failed.`, error, showNotification);
	        throw error;
	    }
	}
	client.BaseLanguageClient = BaseLanguageClient;
	BaseLanguageClient.RequestsToCancelOnContentModified = new Set([
	    vscode_languageserver_protocol_1.SemanticTokensRequest.method,
	    vscode_languageserver_protocol_1.SemanticTokensRangeRequest.method,
	    vscode_languageserver_protocol_1.SemanticTokensDeltaRequest.method
	]);
	BaseLanguageClient.CancellableResolveCalls = new Set([
	    vscode_languageserver_protocol_1.CompletionResolveRequest.method,
	    vscode_languageserver_protocol_1.CodeLensResolveRequest.method,
	    vscode_languageserver_protocol_1.CodeActionResolveRequest.method,
	    vscode_languageserver_protocol_1.InlayHintResolveRequest.method,
	    vscode_languageserver_protocol_1.DocumentLinkResolveRequest.method,
	    vscode_languageserver_protocol_1.WorkspaceSymbolResolveRequest.method
	]);
	class ConsoleLogger {
	    error(message) {
	        (0, vscode_languageserver_protocol_1.RAL)().console.error(message);
	    }
	    warn(message) {
	        (0, vscode_languageserver_protocol_1.RAL)().console.warn(message);
	    }
	    info(message) {
	        (0, vscode_languageserver_protocol_1.RAL)().console.info(message);
	    }
	    log(message) {
	        (0, vscode_languageserver_protocol_1.RAL)().console.log(message);
	    }
	}
	function createConnection(input, output, errorHandler, closeHandler, options) {
	    const logger = new ConsoleLogger();
	    const connection = (0, vscode_languageserver_protocol_1.createProtocolConnection)(input, output, logger, options);
	    connection.onError((data) => { errorHandler(data[0], data[1], data[2]); });
	    connection.onClose(closeHandler);
	    const result = {
	        listen: () => connection.listen(),
	        sendRequest: connection.sendRequest,
	        onRequest: connection.onRequest,
	        hasPendingResponse: connection.hasPendingResponse,
	        sendNotification: connection.sendNotification,
	        onNotification: connection.onNotification,
	        onProgress: connection.onProgress,
	        sendProgress: connection.sendProgress,
	        trace: (value, tracer, sendNotificationOrTraceOptions) => {
	            const defaultTraceOptions = {
	                sendNotification: false,
	                traceFormat: vscode_languageserver_protocol_1.TraceFormat.Text
	            };
	            if (sendNotificationOrTraceOptions === undefined) {
	                return connection.trace(value, tracer, defaultTraceOptions);
	            }
	            else if (Is.boolean(sendNotificationOrTraceOptions)) {
	                return connection.trace(value, tracer, sendNotificationOrTraceOptions);
	            }
	            else {
	                return connection.trace(value, tracer, sendNotificationOrTraceOptions);
	            }
	        },
	        initialize: (params) => {
	            // This needs to return and MUST not be await to avoid any async
	            // scheduling. Otherwise messages might overtake each other.
	            return connection.sendRequest(vscode_languageserver_protocol_1.InitializeRequest.type, params);
	        },
	        shutdown: () => {
	            // This needs to return and MUST not be await to avoid any async
	            // scheduling. Otherwise messages might overtake each other.
	            return connection.sendRequest(vscode_languageserver_protocol_1.ShutdownRequest.type, undefined);
	        },
	        exit: () => {
	            // This needs to return and MUST not be await to avoid any async
	            // scheduling. Otherwise messages might overtake each other.
	            return connection.sendNotification(vscode_languageserver_protocol_1.ExitNotification.type);
	        },
	        end: () => connection.end(),
	        dispose: () => connection.dispose()
	    };
	    return result;
	}
	// Exporting proposed protocol.
	var ProposedFeatures;
	(function (ProposedFeatures) {
	    function createAll(_client) {
	        let result = [
	            new inlineCompletion_1.InlineCompletionItemFeature(_client)
	        ];
	        return result;
	    }
	    ProposedFeatures.createAll = createAll;
	})(ProposedFeatures || (client.ProposedFeatures = ProposedFeatures = {}));
	return client;
}

var processes = {};

var hasRequiredProcesses;

function requireProcesses () {
	if (hasRequiredProcesses) return processes;
	hasRequiredProcesses = 1;
	/* --------------------------------------------------------------------------------------------
	 * Copyright (c) Microsoft Corporation. All rights reserved.
	 * Licensed under the MIT License. See License.txt in the project root for license information.
	 * ------------------------------------------------------------------------------------------ */
	Object.defineProperty(processes, "__esModule", { value: true });
	processes.terminate = void 0;
	const cp = require$$0$2;
	const path_1 = require$$1;
	const isWindows = (process.platform === 'win32');
	const isMacintosh = (process.platform === 'darwin');
	const isLinux = (process.platform === 'linux');
	function terminate(process, cwd) {
	    if (isWindows) {
	        try {
	            // This we run in Atom execFileSync is available.
	            // Ignore stderr since this is otherwise piped to parent.stderr
	            // which might be already closed.
	            let options = {
	                stdio: ['pipe', 'pipe', 'ignore']
	            };
	            if (cwd) {
	                options.cwd = cwd;
	            }
	            cp.execFileSync('taskkill', ['/T', '/F', '/PID', process.pid.toString()], options);
	            return true;
	        }
	        catch (err) {
	            return false;
	        }
	    }
	    else if (isLinux || isMacintosh) {
	        try {
	            var cmd = (0, path_1.join)(__dirname, 'terminateProcess.sh');
	            var result = cp.spawnSync(cmd, [process.pid.toString()]);
	            return result.error ? false : true;
	        }
	        catch (err) {
	            return false;
	        }
	    }
	    else {
	        process.kill('SIGKILL');
	        return true;
	    }
	}
	processes.terminate = terminate;
	return processes;
}

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node$1;
var hasRequiredNode$1;

function requireNode$1 () {
	if (hasRequiredNode$1) return node$1;
	hasRequiredNode$1 = 1;

	node$1 = requireMain$1();
	return node$1;
}

var debug_1;
var hasRequiredDebug;

function requireDebug () {
	if (hasRequiredDebug) return debug_1;
	hasRequiredDebug = 1;
	const debug = (
	  typeof process === 'object' &&
	  process.env &&
	  process.env.NODE_DEBUG &&
	  /\bsemver\b/i.test(process.env.NODE_DEBUG)
	) ? (...args) => console.error('SEMVER', ...args)
	  : () => {};

	debug_1 = debug;
	return debug_1;
}

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	// Note: this is the semver.org version of the spec that it implements
	// Not necessarily the package version of this code.
	const SEMVER_SPEC_VERSION = '2.0.0';

	const MAX_LENGTH = 256;
	const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
	/* istanbul ignore next */ 9007199254740991;

	// Max safe segment length for coercion.
	const MAX_SAFE_COMPONENT_LENGTH = 16;

	// Max safe length for a build identifier. The max length minus 6 characters for
	// the shortest version with a build 0.0.0+BUILD.
	const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;

	const RELEASE_TYPES = [
	  'major',
	  'premajor',
	  'minor',
	  'preminor',
	  'patch',
	  'prepatch',
	  'prerelease',
	];

	constants = {
	  MAX_LENGTH,
	  MAX_SAFE_COMPONENT_LENGTH,
	  MAX_SAFE_BUILD_LENGTH,
	  MAX_SAFE_INTEGER,
	  RELEASE_TYPES,
	  SEMVER_SPEC_VERSION,
	  FLAG_INCLUDE_PRERELEASE: 0b001,
	  FLAG_LOOSE: 0b010,
	};
	return constants;
}

var re = {exports: {}};

var hasRequiredRe;

function requireRe () {
	if (hasRequiredRe) return re.exports;
	hasRequiredRe = 1;
	(function (module, exports) {
		const {
		  MAX_SAFE_COMPONENT_LENGTH,
		  MAX_SAFE_BUILD_LENGTH,
		  MAX_LENGTH,
		} = requireConstants();
		const debug = requireDebug();
		exports = module.exports = {};

		// The actual regexps go on exports.re
		const re = exports.re = [];
		const safeRe = exports.safeRe = [];
		const src = exports.src = [];
		const safeSrc = exports.safeSrc = [];
		const t = exports.t = {};
		let R = 0;

		const LETTERDASHNUMBER = '[a-zA-Z0-9-]';

		// Replace some greedy regex tokens to prevent regex dos issues. These regex are
		// used internally via the safeRe object since all inputs in this library get
		// normalized first to trim and collapse all extra whitespace. The original
		// regexes are exported for userland consumption and lower level usage. A
		// future breaking change could export the safer regex only with a note that
		// all input should have extra whitespace removed.
		const safeRegexReplacements = [
		  ['\\s', 1],
		  ['\\d', MAX_LENGTH],
		  [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH],
		];

		const makeSafeRegex = (value) => {
		  for (const [token, max] of safeRegexReplacements) {
		    value = value
		      .split(`${token}*`).join(`${token}{0,${max}}`)
		      .split(`${token}+`).join(`${token}{1,${max}}`);
		  }
		  return value
		};

		const createToken = (name, value, isGlobal) => {
		  const safe = makeSafeRegex(value);
		  const index = R++;
		  debug(name, index, value);
		  t[name] = index;
		  src[index] = value;
		  safeSrc[index] = safe;
		  re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
		  safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
		};

		// The following Regular Expressions can be used for tokenizing,
		// validating, and parsing SemVer version strings.

		// ## Numeric Identifier
		// A single `0`, or a non-zero digit followed by zero or more digits.

		createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
		createToken('NUMERICIDENTIFIERLOOSE', '\\d+');

		// ## Non-numeric Identifier
		// Zero or more digits, followed by a letter or hyphen, and then zero or
		// more letters, digits, or hyphens.

		createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);

		// ## Main Version
		// Three dot-separated numeric identifiers.

		createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
		                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
		                   `(${src[t.NUMERICIDENTIFIER]})`);

		createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
		                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
		                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`);

		// ## Pre-release Version Identifier
		// A numeric identifier, or a non-numeric identifier.

		createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
		}|${src[t.NONNUMERICIDENTIFIER]})`);

		createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
		}|${src[t.NONNUMERICIDENTIFIER]})`);

		// ## Pre-release Version
		// Hyphen, followed by one or more dot-separated pre-release version
		// identifiers.

		createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
		}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);

		createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
		}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);

		// ## Build Metadata Identifier
		// Any combination of digits, letters, or hyphens.

		createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);

		// ## Build Metadata
		// Plus sign, followed by one or more period-separated build metadata
		// identifiers.

		createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
		}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);

		// ## Full Version String
		// A main version, followed optionally by a pre-release version and
		// build metadata.

		// Note that the only major, minor, patch, and pre-release sections of
		// the version string are capturing groups.  The build metadata is not a
		// capturing group, because it should not ever be used in version
		// comparison.

		createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
		}${src[t.PRERELEASE]}?${
		  src[t.BUILD]}?`);

		createToken('FULL', `^${src[t.FULLPLAIN]}$`);

		// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
		// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
		// common in the npm registry.
		createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
		}${src[t.PRERELEASELOOSE]}?${
		  src[t.BUILD]}?`);

		createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);

		createToken('GTLT', '((?:<|>)?=?)');

		// Something like "2.*" or "1.2.x".
		// Note that "x.x" is a valid xRange identifer, meaning "any version"
		// Only the first item is strictly required.
		createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
		createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);

		createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
		                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
		                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
		                   `(?:${src[t.PRERELEASE]})?${
		                     src[t.BUILD]}?` +
		                   `)?)?`);

		createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
		                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
		                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
		                        `(?:${src[t.PRERELEASELOOSE]})?${
		                          src[t.BUILD]}?` +
		                        `)?)?`);

		createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
		createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);

		// Coercion.
		// Extract anything that could conceivably be a part of a valid semver
		createToken('COERCEPLAIN', `${'(^|[^\\d])' +
		              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
		              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
		              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
		createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
		createToken('COERCEFULL', src[t.COERCEPLAIN] +
		              `(?:${src[t.PRERELEASE]})?` +
		              `(?:${src[t.BUILD]})?` +
		              `(?:$|[^\\d])`);
		createToken('COERCERTL', src[t.COERCE], true);
		createToken('COERCERTLFULL', src[t.COERCEFULL], true);

		// Tilde ranges.
		// Meaning is "reasonably at or greater than"
		createToken('LONETILDE', '(?:~>?)');

		createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
		exports.tildeTrimReplace = '$1~';

		createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
		createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);

		// Caret ranges.
		// Meaning is "at least and backwards compatible with"
		createToken('LONECARET', '(?:\\^)');

		createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
		exports.caretTrimReplace = '$1^';

		createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
		createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);

		// A simple gt/lt/eq thing, or just "" to indicate "any version"
		createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
		createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);

		// An expression to strip any whitespace between the gtlt and the thing
		// it modifies, so that `> 1.2.3` ==> `>1.2.3`
		createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
		}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
		exports.comparatorTrimReplace = '$1$2$3';

		// Something like `1.2.3 - 1.2.4`
		// Note that these all use the loose form, because they'll be
		// checked against either the strict or loose comparator form
		// later.
		createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
		                   `\\s+-\\s+` +
		                   `(${src[t.XRANGEPLAIN]})` +
		                   `\\s*$`);

		createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
		                        `\\s+-\\s+` +
		                        `(${src[t.XRANGEPLAINLOOSE]})` +
		                        `\\s*$`);

		// Star ranges basically just allow anything at all.
		createToken('STAR', '(<|>)?=?\\s*\\*');
		// >=0.0.0 is like a star
		createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
		createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$'); 
	} (re, re.exports));
	return re.exports;
}

var parseOptions_1;
var hasRequiredParseOptions;

function requireParseOptions () {
	if (hasRequiredParseOptions) return parseOptions_1;
	hasRequiredParseOptions = 1;
	// parse out just the options we care about
	const looseOption = Object.freeze({ loose: true });
	const emptyOpts = Object.freeze({ });
	const parseOptions = options => {
	  if (!options) {
	    return emptyOpts
	  }

	  if (typeof options !== 'object') {
	    return looseOption
	  }

	  return options
	};
	parseOptions_1 = parseOptions;
	return parseOptions_1;
}

var identifiers;
var hasRequiredIdentifiers;

function requireIdentifiers () {
	if (hasRequiredIdentifiers) return identifiers;
	hasRequiredIdentifiers = 1;
	const numeric = /^[0-9]+$/;
	const compareIdentifiers = (a, b) => {
	  const anum = numeric.test(a);
	  const bnum = numeric.test(b);

	  if (anum && bnum) {
	    a = +a;
	    b = +b;
	  }

	  return a === b ? 0
	    : (anum && !bnum) ? -1
	    : (bnum && !anum) ? 1
	    : a < b ? -1
	    : 1
	};

	const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);

	identifiers = {
	  compareIdentifiers,
	  rcompareIdentifiers,
	};
	return identifiers;
}

var semver;
var hasRequiredSemver;

function requireSemver () {
	if (hasRequiredSemver) return semver;
	hasRequiredSemver = 1;
	const debug = requireDebug();
	const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
	const { safeRe: re, safeSrc: src, t } = requireRe();

	const parseOptions = requireParseOptions();
	const { compareIdentifiers } = requireIdentifiers();
	class SemVer {
	  constructor (version, options) {
	    options = parseOptions(options);

	    if (version instanceof SemVer) {
	      if (version.loose === !!options.loose &&
	        version.includePrerelease === !!options.includePrerelease) {
	        return version
	      } else {
	        version = version.version;
	      }
	    } else if (typeof version !== 'string') {
	      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`)
	    }

	    if (version.length > MAX_LENGTH) {
	      throw new TypeError(
	        `version is longer than ${MAX_LENGTH} characters`
	      )
	    }

	    debug('SemVer', version, options);
	    this.options = options;
	    this.loose = !!options.loose;
	    // this isn't actually relevant for versions, but keep it so that we
	    // don't run into trouble passing this.options around.
	    this.includePrerelease = !!options.includePrerelease;

	    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);

	    if (!m) {
	      throw new TypeError(`Invalid Version: ${version}`)
	    }

	    this.raw = version;

	    // these are actually numbers
	    this.major = +m[1];
	    this.minor = +m[2];
	    this.patch = +m[3];

	    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
	      throw new TypeError('Invalid major version')
	    }

	    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
	      throw new TypeError('Invalid minor version')
	    }

	    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
	      throw new TypeError('Invalid patch version')
	    }

	    // numberify any prerelease numeric ids
	    if (!m[4]) {
	      this.prerelease = [];
	    } else {
	      this.prerelease = m[4].split('.').map((id) => {
	        if (/^[0-9]+$/.test(id)) {
	          const num = +id;
	          if (num >= 0 && num < MAX_SAFE_INTEGER) {
	            return num
	          }
	        }
	        return id
	      });
	    }

	    this.build = m[5] ? m[5].split('.') : [];
	    this.format();
	  }

	  format () {
	    this.version = `${this.major}.${this.minor}.${this.patch}`;
	    if (this.prerelease.length) {
	      this.version += `-${this.prerelease.join('.')}`;
	    }
	    return this.version
	  }

	  toString () {
	    return this.version
	  }

	  compare (other) {
	    debug('SemVer.compare', this.version, this.options, other);
	    if (!(other instanceof SemVer)) {
	      if (typeof other === 'string' && other === this.version) {
	        return 0
	      }
	      other = new SemVer(other, this.options);
	    }

	    if (other.version === this.version) {
	      return 0
	    }

	    return this.compareMain(other) || this.comparePre(other)
	  }

	  compareMain (other) {
	    if (!(other instanceof SemVer)) {
	      other = new SemVer(other, this.options);
	    }

	    return (
	      compareIdentifiers(this.major, other.major) ||
	      compareIdentifiers(this.minor, other.minor) ||
	      compareIdentifiers(this.patch, other.patch)
	    )
	  }

	  comparePre (other) {
	    if (!(other instanceof SemVer)) {
	      other = new SemVer(other, this.options);
	    }

	    // NOT having a prerelease is > having one
	    if (this.prerelease.length && !other.prerelease.length) {
	      return -1
	    } else if (!this.prerelease.length && other.prerelease.length) {
	      return 1
	    } else if (!this.prerelease.length && !other.prerelease.length) {
	      return 0
	    }

	    let i = 0;
	    do {
	      const a = this.prerelease[i];
	      const b = other.prerelease[i];
	      debug('prerelease compare', i, a, b);
	      if (a === undefined && b === undefined) {
	        return 0
	      } else if (b === undefined) {
	        return 1
	      } else if (a === undefined) {
	        return -1
	      } else if (a === b) {
	        continue
	      } else {
	        return compareIdentifiers(a, b)
	      }
	    } while (++i)
	  }

	  compareBuild (other) {
	    if (!(other instanceof SemVer)) {
	      other = new SemVer(other, this.options);
	    }

	    let i = 0;
	    do {
	      const a = this.build[i];
	      const b = other.build[i];
	      debug('build compare', i, a, b);
	      if (a === undefined && b === undefined) {
	        return 0
	      } else if (b === undefined) {
	        return 1
	      } else if (a === undefined) {
	        return -1
	      } else if (a === b) {
	        continue
	      } else {
	        return compareIdentifiers(a, b)
	      }
	    } while (++i)
	  }

	  // preminor will bump the version up to the next minor release, and immediately
	  // down to pre-release. premajor and prepatch work the same way.
	  inc (release, identifier, identifierBase) {
	    if (release.startsWith('pre')) {
	      if (!identifier && identifierBase === false) {
	        throw new Error('invalid increment argument: identifier is empty')
	      }
	      // Avoid an invalid semver results
	      if (identifier) {
	        const r = new RegExp(`^${this.options.loose ? src[t.PRERELEASELOOSE] : src[t.PRERELEASE]}$`);
	        const match = `-${identifier}`.match(r);
	        if (!match || match[1] !== identifier) {
	          throw new Error(`invalid identifier: ${identifier}`)
	        }
	      }
	    }

	    switch (release) {
	      case 'premajor':
	        this.prerelease.length = 0;
	        this.patch = 0;
	        this.minor = 0;
	        this.major++;
	        this.inc('pre', identifier, identifierBase);
	        break
	      case 'preminor':
	        this.prerelease.length = 0;
	        this.patch = 0;
	        this.minor++;
	        this.inc('pre', identifier, identifierBase);
	        break
	      case 'prepatch':
	        // If this is already a prerelease, it will bump to the next version
	        // drop any prereleases that might already exist, since they are not
	        // relevant at this point.
	        this.prerelease.length = 0;
	        this.inc('patch', identifier, identifierBase);
	        this.inc('pre', identifier, identifierBase);
	        break
	      // If the input is a non-prerelease version, this acts the same as
	      // prepatch.
	      case 'prerelease':
	        if (this.prerelease.length === 0) {
	          this.inc('patch', identifier, identifierBase);
	        }
	        this.inc('pre', identifier, identifierBase);
	        break
	      case 'release':
	        if (this.prerelease.length === 0) {
	          throw new Error(`version ${this.raw} is not a prerelease`)
	        }
	        this.prerelease.length = 0;
	        break

	      case 'major':
	        // If this is a pre-major version, bump up to the same major version.
	        // Otherwise increment major.
	        // 1.0.0-5 bumps to 1.0.0
	        // 1.1.0 bumps to 2.0.0
	        if (
	          this.minor !== 0 ||
	          this.patch !== 0 ||
	          this.prerelease.length === 0
	        ) {
	          this.major++;
	        }
	        this.minor = 0;
	        this.patch = 0;
	        this.prerelease = [];
	        break
	      case 'minor':
	        // If this is a pre-minor version, bump up to the same minor version.
	        // Otherwise increment minor.
	        // 1.2.0-5 bumps to 1.2.0
	        // 1.2.1 bumps to 1.3.0
	        if (this.patch !== 0 || this.prerelease.length === 0) {
	          this.minor++;
	        }
	        this.patch = 0;
	        this.prerelease = [];
	        break
	      case 'patch':
	        // If this is not a pre-release version, it will increment the patch.
	        // If it is a pre-release it will bump up to the same patch version.
	        // 1.2.0-5 patches to 1.2.0
	        // 1.2.0 patches to 1.2.1
	        if (this.prerelease.length === 0) {
	          this.patch++;
	        }
	        this.prerelease = [];
	        break
	      // This probably shouldn't be used publicly.
	      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
	      case 'pre': {
	        const base = Number(identifierBase) ? 1 : 0;

	        if (this.prerelease.length === 0) {
	          this.prerelease = [base];
	        } else {
	          let i = this.prerelease.length;
	          while (--i >= 0) {
	            if (typeof this.prerelease[i] === 'number') {
	              this.prerelease[i]++;
	              i = -2;
	            }
	          }
	          if (i === -1) {
	            // didn't increment anything
	            if (identifier === this.prerelease.join('.') && identifierBase === false) {
	              throw new Error('invalid increment argument: identifier already exists')
	            }
	            this.prerelease.push(base);
	          }
	        }
	        if (identifier) {
	          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
	          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
	          let prerelease = [identifier, base];
	          if (identifierBase === false) {
	            prerelease = [identifier];
	          }
	          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
	            if (isNaN(this.prerelease[1])) {
	              this.prerelease = prerelease;
	            }
	          } else {
	            this.prerelease = prerelease;
	          }
	        }
	        break
	      }
	      default:
	        throw new Error(`invalid increment argument: ${release}`)
	    }
	    this.raw = this.format();
	    if (this.build.length) {
	      this.raw += `+${this.build.join('.')}`;
	    }
	    return this
	  }
	}

	semver = SemVer;
	return semver;
}

var parse_1;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse_1;
	hasRequiredParse = 1;
	const SemVer = requireSemver();
	const parse = (version, options, throwErrors = false) => {
	  if (version instanceof SemVer) {
	    return version
	  }
	  try {
	    return new SemVer(version, options)
	  } catch (er) {
	    if (!throwErrors) {
	      return null
	    }
	    throw er
	  }
	};

	parse_1 = parse;
	return parse_1;
}

var lrucache;
var hasRequiredLrucache;

function requireLrucache () {
	if (hasRequiredLrucache) return lrucache;
	hasRequiredLrucache = 1;
	class LRUCache {
	  constructor () {
	    this.max = 1000;
	    this.map = new Map();
	  }

	  get (key) {
	    const value = this.map.get(key);
	    if (value === undefined) {
	      return undefined
	    } else {
	      // Remove the key from the map and add it to the end
	      this.map.delete(key);
	      this.map.set(key, value);
	      return value
	    }
	  }

	  delete (key) {
	    return this.map.delete(key)
	  }

	  set (key, value) {
	    const deleted = this.delete(key);

	    if (!deleted && value !== undefined) {
	      // If cache is full, delete the least recently used item
	      if (this.map.size >= this.max) {
	        const firstKey = this.map.keys().next().value;
	        this.delete(firstKey);
	      }

	      this.map.set(key, value);
	    }

	    return this
	  }
	}

	lrucache = LRUCache;
	return lrucache;
}

var compare_1;
var hasRequiredCompare;

function requireCompare () {
	if (hasRequiredCompare) return compare_1;
	hasRequiredCompare = 1;
	const SemVer = requireSemver();
	const compare = (a, b, loose) =>
	  new SemVer(a, loose).compare(new SemVer(b, loose));

	compare_1 = compare;
	return compare_1;
}

var eq_1;
var hasRequiredEq;

function requireEq () {
	if (hasRequiredEq) return eq_1;
	hasRequiredEq = 1;
	const compare = requireCompare();
	const eq = (a, b, loose) => compare(a, b, loose) === 0;
	eq_1 = eq;
	return eq_1;
}

var neq_1;
var hasRequiredNeq;

function requireNeq () {
	if (hasRequiredNeq) return neq_1;
	hasRequiredNeq = 1;
	const compare = requireCompare();
	const neq = (a, b, loose) => compare(a, b, loose) !== 0;
	neq_1 = neq;
	return neq_1;
}

var gt_1;
var hasRequiredGt;

function requireGt () {
	if (hasRequiredGt) return gt_1;
	hasRequiredGt = 1;
	const compare = requireCompare();
	const gt = (a, b, loose) => compare(a, b, loose) > 0;
	gt_1 = gt;
	return gt_1;
}

var gte_1;
var hasRequiredGte;

function requireGte () {
	if (hasRequiredGte) return gte_1;
	hasRequiredGte = 1;
	const compare = requireCompare();
	const gte = (a, b, loose) => compare(a, b, loose) >= 0;
	gte_1 = gte;
	return gte_1;
}

var lt_1;
var hasRequiredLt;

function requireLt () {
	if (hasRequiredLt) return lt_1;
	hasRequiredLt = 1;
	const compare = requireCompare();
	const lt = (a, b, loose) => compare(a, b, loose) < 0;
	lt_1 = lt;
	return lt_1;
}

var lte_1;
var hasRequiredLte;

function requireLte () {
	if (hasRequiredLte) return lte_1;
	hasRequiredLte = 1;
	const compare = requireCompare();
	const lte = (a, b, loose) => compare(a, b, loose) <= 0;
	lte_1 = lte;
	return lte_1;
}

var cmp_1;
var hasRequiredCmp;

function requireCmp () {
	if (hasRequiredCmp) return cmp_1;
	hasRequiredCmp = 1;
	const eq = requireEq();
	const neq = requireNeq();
	const gt = requireGt();
	const gte = requireGte();
	const lt = requireLt();
	const lte = requireLte();

	const cmp = (a, op, b, loose) => {
	  switch (op) {
	    case '===':
	      if (typeof a === 'object') {
	        a = a.version;
	      }
	      if (typeof b === 'object') {
	        b = b.version;
	      }
	      return a === b

	    case '!==':
	      if (typeof a === 'object') {
	        a = a.version;
	      }
	      if (typeof b === 'object') {
	        b = b.version;
	      }
	      return a !== b

	    case '':
	    case '=':
	    case '==':
	      return eq(a, b, loose)

	    case '!=':
	      return neq(a, b, loose)

	    case '>':
	      return gt(a, b, loose)

	    case '>=':
	      return gte(a, b, loose)

	    case '<':
	      return lt(a, b, loose)

	    case '<=':
	      return lte(a, b, loose)

	    default:
	      throw new TypeError(`Invalid operator: ${op}`)
	  }
	};
	cmp_1 = cmp;
	return cmp_1;
}

var comparator;
var hasRequiredComparator;

function requireComparator () {
	if (hasRequiredComparator) return comparator;
	hasRequiredComparator = 1;
	const ANY = Symbol('SemVer ANY');
	// hoisted class for cyclic dependency
	class Comparator {
	  static get ANY () {
	    return ANY
	  }

	  constructor (comp, options) {
	    options = parseOptions(options);

	    if (comp instanceof Comparator) {
	      if (comp.loose === !!options.loose) {
	        return comp
	      } else {
	        comp = comp.value;
	      }
	    }

	    comp = comp.trim().split(/\s+/).join(' ');
	    debug('comparator', comp, options);
	    this.options = options;
	    this.loose = !!options.loose;
	    this.parse(comp);

	    if (this.semver === ANY) {
	      this.value = '';
	    } else {
	      this.value = this.operator + this.semver.version;
	    }

	    debug('comp', this);
	  }

	  parse (comp) {
	    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
	    const m = comp.match(r);

	    if (!m) {
	      throw new TypeError(`Invalid comparator: ${comp}`)
	    }

	    this.operator = m[1] !== undefined ? m[1] : '';
	    if (this.operator === '=') {
	      this.operator = '';
	    }

	    // if it literally is just '>' or '' then allow anything.
	    if (!m[2]) {
	      this.semver = ANY;
	    } else {
	      this.semver = new SemVer(m[2], this.options.loose);
	    }
	  }

	  toString () {
	    return this.value
	  }

	  test (version) {
	    debug('Comparator.test', version, this.options.loose);

	    if (this.semver === ANY || version === ANY) {
	      return true
	    }

	    if (typeof version === 'string') {
	      try {
	        version = new SemVer(version, this.options);
	      } catch (er) {
	        return false
	      }
	    }

	    return cmp(version, this.operator, this.semver, this.options)
	  }

	  intersects (comp, options) {
	    if (!(comp instanceof Comparator)) {
	      throw new TypeError('a Comparator is required')
	    }

	    if (this.operator === '') {
	      if (this.value === '') {
	        return true
	      }
	      return new Range(comp.value, options).test(this.value)
	    } else if (comp.operator === '') {
	      if (comp.value === '') {
	        return true
	      }
	      return new Range(this.value, options).test(comp.semver)
	    }

	    options = parseOptions(options);

	    // Special cases where nothing can possibly be lower
	    if (options.includePrerelease &&
	      (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
	      return false
	    }
	    if (!options.includePrerelease &&
	      (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
	      return false
	    }

	    // Same direction increasing (> or >=)
	    if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
	      return true
	    }
	    // Same direction decreasing (< or <=)
	    if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
	      return true
	    }
	    // same SemVer and both sides are inclusive (<= or >=)
	    if (
	      (this.semver.version === comp.semver.version) &&
	      this.operator.includes('=') && comp.operator.includes('=')) {
	      return true
	    }
	    // opposite directions less than
	    if (cmp(this.semver, '<', comp.semver, options) &&
	      this.operator.startsWith('>') && comp.operator.startsWith('<')) {
	      return true
	    }
	    // opposite directions greater than
	    if (cmp(this.semver, '>', comp.semver, options) &&
	      this.operator.startsWith('<') && comp.operator.startsWith('>')) {
	      return true
	    }
	    return false
	  }
	}

	comparator = Comparator;

	const parseOptions = requireParseOptions();
	const { safeRe: re, t } = requireRe();
	const cmp = requireCmp();
	const debug = requireDebug();
	const SemVer = requireSemver();
	const Range = requireRange();
	return comparator;
}

var range;
var hasRequiredRange;

function requireRange () {
	if (hasRequiredRange) return range;
	hasRequiredRange = 1;
	const SPACE_CHARACTERS = /\s+/g;

	// hoisted class for cyclic dependency
	class Range {
	  constructor (range, options) {
	    options = parseOptions(options);

	    if (range instanceof Range) {
	      if (
	        range.loose === !!options.loose &&
	        range.includePrerelease === !!options.includePrerelease
	      ) {
	        return range
	      } else {
	        return new Range(range.raw, options)
	      }
	    }

	    if (range instanceof Comparator) {
	      // just put it in the set and return
	      this.raw = range.value;
	      this.set = [[range]];
	      this.formatted = undefined;
	      return this
	    }

	    this.options = options;
	    this.loose = !!options.loose;
	    this.includePrerelease = !!options.includePrerelease;

	    // First reduce all whitespace as much as possible so we do not have to rely
	    // on potentially slow regexes like \s*. This is then stored and used for
	    // future error messages as well.
	    this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');

	    // First, split on ||
	    this.set = this.raw
	      .split('||')
	      // map the range to a 2d array of comparators
	      .map(r => this.parseRange(r.trim()))
	      // throw out any comparator lists that are empty
	      // this generally means that it was not a valid range, which is allowed
	      // in loose mode, but will still throw if the WHOLE range is invalid.
	      .filter(c => c.length);

	    if (!this.set.length) {
	      throw new TypeError(`Invalid SemVer Range: ${this.raw}`)
	    }

	    // if we have any that are not the null set, throw out null sets.
	    if (this.set.length > 1) {
	      // keep the first one, in case they're all null sets
	      const first = this.set[0];
	      this.set = this.set.filter(c => !isNullSet(c[0]));
	      if (this.set.length === 0) {
	        this.set = [first];
	      } else if (this.set.length > 1) {
	        // if we have any that are *, then the range is just *
	        for (const c of this.set) {
	          if (c.length === 1 && isAny(c[0])) {
	            this.set = [c];
	            break
	          }
	        }
	      }
	    }

	    this.formatted = undefined;
	  }

	  get range () {
	    if (this.formatted === undefined) {
	      this.formatted = '';
	      for (let i = 0; i < this.set.length; i++) {
	        if (i > 0) {
	          this.formatted += '||';
	        }
	        const comps = this.set[i];
	        for (let k = 0; k < comps.length; k++) {
	          if (k > 0) {
	            this.formatted += ' ';
	          }
	          this.formatted += comps[k].toString().trim();
	        }
	      }
	    }
	    return this.formatted
	  }

	  format () {
	    return this.range
	  }

	  toString () {
	    return this.range
	  }

	  parseRange (range) {
	    // memoize range parsing for performance.
	    // this is a very hot path, and fully deterministic.
	    const memoOpts =
	      (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) |
	      (this.options.loose && FLAG_LOOSE);
	    const memoKey = memoOpts + ':' + range;
	    const cached = cache.get(memoKey);
	    if (cached) {
	      return cached
	    }

	    const loose = this.options.loose;
	    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
	    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
	    range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
	    debug('hyphen replace', range);

	    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
	    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
	    debug('comparator trim', range);

	    // `~ 1.2.3` => `~1.2.3`
	    range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
	    debug('tilde trim', range);

	    // `^ 1.2.3` => `^1.2.3`
	    range = range.replace(re[t.CARETTRIM], caretTrimReplace);
	    debug('caret trim', range);

	    // At this point, the range is completely trimmed and
	    // ready to be split into comparators.

	    let rangeList = range
	      .split(' ')
	      .map(comp => parseComparator(comp, this.options))
	      .join(' ')
	      .split(/\s+/)
	      // >=0.0.0 is equivalent to *
	      .map(comp => replaceGTE0(comp, this.options));

	    if (loose) {
	      // in loose mode, throw out any that are not valid comparators
	      rangeList = rangeList.filter(comp => {
	        debug('loose invalid filter', comp, this.options);
	        return !!comp.match(re[t.COMPARATORLOOSE])
	      });
	    }
	    debug('range list', rangeList);

	    // if any comparators are the null set, then replace with JUST null set
	    // if more than one comparator, remove any * comparators
	    // also, don't include the same comparator more than once
	    const rangeMap = new Map();
	    const comparators = rangeList.map(comp => new Comparator(comp, this.options));
	    for (const comp of comparators) {
	      if (isNullSet(comp)) {
	        return [comp]
	      }
	      rangeMap.set(comp.value, comp);
	    }
	    if (rangeMap.size > 1 && rangeMap.has('')) {
	      rangeMap.delete('');
	    }

	    const result = [...rangeMap.values()];
	    cache.set(memoKey, result);
	    return result
	  }

	  intersects (range, options) {
	    if (!(range instanceof Range)) {
	      throw new TypeError('a Range is required')
	    }

	    return this.set.some((thisComparators) => {
	      return (
	        isSatisfiable(thisComparators, options) &&
	        range.set.some((rangeComparators) => {
	          return (
	            isSatisfiable(rangeComparators, options) &&
	            thisComparators.every((thisComparator) => {
	              return rangeComparators.every((rangeComparator) => {
	                return thisComparator.intersects(rangeComparator, options)
	              })
	            })
	          )
	        })
	      )
	    })
	  }

	  // if ANY of the sets match ALL of its comparators, then pass
	  test (version) {
	    if (!version) {
	      return false
	    }

	    if (typeof version === 'string') {
	      try {
	        version = new SemVer(version, this.options);
	      } catch (er) {
	        return false
	      }
	    }

	    for (let i = 0; i < this.set.length; i++) {
	      if (testSet(this.set[i], version, this.options)) {
	        return true
	      }
	    }
	    return false
	  }
	}

	range = Range;

	const LRU = requireLrucache();
	const cache = new LRU();

	const parseOptions = requireParseOptions();
	const Comparator = requireComparator();
	const debug = requireDebug();
	const SemVer = requireSemver();
	const {
	  safeRe: re,
	  t,
	  comparatorTrimReplace,
	  tildeTrimReplace,
	  caretTrimReplace,
	} = requireRe();
	const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();

	const isNullSet = c => c.value === '<0.0.0-0';
	const isAny = c => c.value === '';

	// take a set of comparators and determine whether there
	// exists a version which can satisfy it
	const isSatisfiable = (comparators, options) => {
	  let result = true;
	  const remainingComparators = comparators.slice();
	  let testComparator = remainingComparators.pop();

	  while (result && remainingComparators.length) {
	    result = remainingComparators.every((otherComparator) => {
	      return testComparator.intersects(otherComparator, options)
	    });

	    testComparator = remainingComparators.pop();
	  }

	  return result
	};

	// comprised of xranges, tildes, stars, and gtlt's at this point.
	// already replaced the hyphen ranges
	// turn into a set of JUST comparators.
	const parseComparator = (comp, options) => {
	  debug('comp', comp, options);
	  comp = replaceCarets(comp, options);
	  debug('caret', comp);
	  comp = replaceTildes(comp, options);
	  debug('tildes', comp);
	  comp = replaceXRanges(comp, options);
	  debug('xrange', comp);
	  comp = replaceStars(comp, options);
	  debug('stars', comp);
	  return comp
	};

	const isX = id => !id || id.toLowerCase() === 'x' || id === '*';

	// ~, ~> --> * (any, kinda silly)
	// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
	// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
	// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
	// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
	// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
	// ~0.0.1 --> >=0.0.1 <0.1.0-0
	const replaceTildes = (comp, options) => {
	  return comp
	    .trim()
	    .split(/\s+/)
	    .map((c) => replaceTilde(c, options))
	    .join(' ')
	};

	const replaceTilde = (comp, options) => {
	  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('tilde', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
	    } else if (isX(p)) {
	      // ~1.2 == >=1.2.0 <1.3.0-0
	      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
	    } else if (pr) {
	      debug('replaceTilde pr', pr);
	      ret = `>=${M}.${m}.${p}-${pr
	      } <${M}.${+m + 1}.0-0`;
	    } else {
	      // ~1.2.3 == >=1.2.3 <1.3.0-0
	      ret = `>=${M}.${m}.${p
	      } <${M}.${+m + 1}.0-0`;
	    }

	    debug('tilde return', ret);
	    return ret
	  })
	};

	// ^ --> * (any, kinda silly)
	// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
	// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
	// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
	// ^1.2.3 --> >=1.2.3 <2.0.0-0
	// ^1.2.0 --> >=1.2.0 <2.0.0-0
	// ^0.0.1 --> >=0.0.1 <0.0.2-0
	// ^0.1.0 --> >=0.1.0 <0.2.0-0
	const replaceCarets = (comp, options) => {
	  return comp
	    .trim()
	    .split(/\s+/)
	    .map((c) => replaceCaret(c, options))
	    .join(' ')
	};

	const replaceCaret = (comp, options) => {
	  debug('caret', comp, options);
	  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
	  const z = options.includePrerelease ? '-0' : '';
	  return comp.replace(r, (_, M, m, p, pr) => {
	    debug('caret', comp, _, M, m, p, pr);
	    let ret;

	    if (isX(M)) {
	      ret = '';
	    } else if (isX(m)) {
	      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
	    } else if (isX(p)) {
	      if (M === '0') {
	        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
	      } else {
	        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
	      }
	    } else if (pr) {
	      debug('replaceCaret pr', pr);
	      if (M === '0') {
	        if (m === '0') {
	          ret = `>=${M}.${m}.${p}-${pr
	          } <${M}.${m}.${+p + 1}-0`;
	        } else {
	          ret = `>=${M}.${m}.${p}-${pr
	          } <${M}.${+m + 1}.0-0`;
	        }
	      } else {
	        ret = `>=${M}.${m}.${p}-${pr
	        } <${+M + 1}.0.0-0`;
	      }
	    } else {
	      debug('no pr');
	      if (M === '0') {
	        if (m === '0') {
	          ret = `>=${M}.${m}.${p
	          }${z} <${M}.${m}.${+p + 1}-0`;
	        } else {
	          ret = `>=${M}.${m}.${p
	          }${z} <${M}.${+m + 1}.0-0`;
	        }
	      } else {
	        ret = `>=${M}.${m}.${p
	        } <${+M + 1}.0.0-0`;
	      }
	    }

	    debug('caret return', ret);
	    return ret
	  })
	};

	const replaceXRanges = (comp, options) => {
	  debug('replaceXRanges', comp, options);
	  return comp
	    .split(/\s+/)
	    .map((c) => replaceXRange(c, options))
	    .join(' ')
	};

	const replaceXRange = (comp, options) => {
	  comp = comp.trim();
	  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
	  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
	    debug('xRange', comp, ret, gtlt, M, m, p, pr);
	    const xM = isX(M);
	    const xm = xM || isX(m);
	    const xp = xm || isX(p);
	    const anyX = xp;

	    if (gtlt === '=' && anyX) {
	      gtlt = '';
	    }

	    // if we're including prereleases in the match, then we need
	    // to fix this to -0, the lowest possible prerelease value
	    pr = options.includePrerelease ? '-0' : '';

	    if (xM) {
	      if (gtlt === '>' || gtlt === '<') {
	        // nothing is allowed
	        ret = '<0.0.0-0';
	      } else {
	        // nothing is forbidden
	        ret = '*';
	      }
	    } else if (gtlt && anyX) {
	      // we know patch is an x, because we have any x at all.
	      // replace X with 0
	      if (xm) {
	        m = 0;
	      }
	      p = 0;

	      if (gtlt === '>') {
	        // >1 => >=2.0.0
	        // >1.2 => >=1.3.0
	        gtlt = '>=';
	        if (xm) {
	          M = +M + 1;
	          m = 0;
	          p = 0;
	        } else {
	          m = +m + 1;
	          p = 0;
	        }
	      } else if (gtlt === '<=') {
	        // <=0.7.x is actually <0.8.0, since any 0.7.x should
	        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
	        gtlt = '<';
	        if (xm) {
	          M = +M + 1;
	        } else {
	          m = +m + 1;
	        }
	      }

	      if (gtlt === '<') {
	        pr = '-0';
	      }

	      ret = `${gtlt + M}.${m}.${p}${pr}`;
	    } else if (xm) {
	      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
	    } else if (xp) {
	      ret = `>=${M}.${m}.0${pr
	      } <${M}.${+m + 1}.0-0`;
	    }

	    debug('xRange return', ret);

	    return ret
	  })
	};

	// Because * is AND-ed with everything else in the comparator,
	// and '' means "any version", just remove the *s entirely.
	const replaceStars = (comp, options) => {
	  debug('replaceStars', comp, options);
	  // Looseness is ignored here.  star is always as loose as it gets!
	  return comp
	    .trim()
	    .replace(re[t.STAR], '')
	};

	const replaceGTE0 = (comp, options) => {
	  debug('replaceGTE0', comp, options);
	  return comp
	    .trim()
	    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
	};

	// This function is passed to string.replace(re[t.HYPHENRANGE])
	// M, m, patch, prerelease, build
	// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
	// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
	// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
	// TODO build?
	const hyphenReplace = incPr => ($0,
	  from, fM, fm, fp, fpr, fb,
	  to, tM, tm, tp, tpr) => {
	  if (isX(fM)) {
	    from = '';
	  } else if (isX(fm)) {
	    from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
	  } else if (isX(fp)) {
	    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
	  } else if (fpr) {
	    from = `>=${from}`;
	  } else {
	    from = `>=${from}${incPr ? '-0' : ''}`;
	  }

	  if (isX(tM)) {
	    to = '';
	  } else if (isX(tm)) {
	    to = `<${+tM + 1}.0.0-0`;
	  } else if (isX(tp)) {
	    to = `<${tM}.${+tm + 1}.0-0`;
	  } else if (tpr) {
	    to = `<=${tM}.${tm}.${tp}-${tpr}`;
	  } else if (incPr) {
	    to = `<${tM}.${tm}.${+tp + 1}-0`;
	  } else {
	    to = `<=${to}`;
	  }

	  return `${from} ${to}`.trim()
	};

	const testSet = (set, version, options) => {
	  for (let i = 0; i < set.length; i++) {
	    if (!set[i].test(version)) {
	      return false
	    }
	  }

	  if (version.prerelease.length && !options.includePrerelease) {
	    // Find the set of versions that are allowed to have prereleases
	    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
	    // That should allow `1.2.3-pr.2` to pass.
	    // However, `1.2.4-alpha.notready` should NOT be allowed,
	    // even though it's within the range set by the comparators.
	    for (let i = 0; i < set.length; i++) {
	      debug(set[i].semver);
	      if (set[i].semver === Comparator.ANY) {
	        continue
	      }

	      if (set[i].semver.prerelease.length > 0) {
	        const allowed = set[i].semver;
	        if (allowed.major === version.major &&
	            allowed.minor === version.minor &&
	            allowed.patch === version.patch) {
	          return true
	        }
	      }
	    }

	    // Version has a -pre, but it's not one of the ones we like.
	    return false
	  }

	  return true
	};
	return range;
}

var satisfies_1;
var hasRequiredSatisfies;

function requireSatisfies () {
	if (hasRequiredSatisfies) return satisfies_1;
	hasRequiredSatisfies = 1;
	const Range = requireRange();
	const satisfies = (version, range, options) => {
	  try {
	    range = new Range(range, options);
	  } catch (er) {
	    return false
	  }
	  return range.test(version)
	};
	satisfies_1 = satisfies;
	return satisfies_1;
}

var api = {};

var hasRequiredApi;

function requireApi () {
	if (hasRequiredApi) return api;
	hasRequiredApi = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		var __createBinding = (api && api.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (api && api.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.DiagnosticPullMode = exports.vsdiag = void 0;
		__exportStar(requireMain$1(), exports);
		__exportStar(requireFeatures(), exports);
		var diagnostic_1 = requireDiagnostic();
		Object.defineProperty(exports, "vsdiag", { enumerable: true, get: function () { return diagnostic_1.vsdiag; } });
		Object.defineProperty(exports, "DiagnosticPullMode", { enumerable: true, get: function () { return diagnostic_1.DiagnosticPullMode; } });
		__exportStar(requireClient(), exports); 
	} (api));
	return api;
}

var hasRequiredMain;

function requireMain () {
	if (hasRequiredMain) return main$3;
	hasRequiredMain = 1;
	(function (exports) {
		/* --------------------------------------------------------------------------------------------
		 * Copyright (c) Microsoft Corporation. All rights reserved.
		 * Licensed under the MIT License. See License.txt in the project root for license information.
		 * ------------------------------------------------------------------------------------------ */
		var __createBinding = (main$3 && main$3.__createBinding) || (Object.create ? (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    var desc = Object.getOwnPropertyDescriptor(m, k);
		    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
		      desc = { enumerable: true, get: function() { return m[k]; } };
		    }
		    Object.defineProperty(o, k2, desc);
		}) : (function(o, m, k, k2) {
		    if (k2 === undefined) k2 = k;
		    o[k2] = m[k];
		}));
		var __exportStar = (main$3 && main$3.__exportStar) || function(m, exports) {
		    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.SettingMonitor = exports.LanguageClient = exports.TransportKind = void 0;
		const cp = require$$0$2;
		const fs = require$$1$1;
		const path = require$$1;
		const vscode_1 = require$$0;
		const Is = requireIs$2();
		const client_1 = requireClient();
		const processes_1 = requireProcesses();
		const node_1 = requireNode$1();
		// Import SemVer functions individually to avoid circular dependencies in SemVer
		const semverParse = requireParse();
		const semverSatisfies = requireSatisfies();
		__exportStar(requireNode$1(), exports);
		__exportStar(requireApi(), exports);
		const REQUIRED_VSCODE_VERSION = '^1.82.0'; // do not change format, updated by `updateVSCode` script
		var TransportKind;
		(function (TransportKind) {
		    TransportKind[TransportKind["stdio"] = 0] = "stdio";
		    TransportKind[TransportKind["ipc"] = 1] = "ipc";
		    TransportKind[TransportKind["pipe"] = 2] = "pipe";
		    TransportKind[TransportKind["socket"] = 3] = "socket";
		})(TransportKind || (exports.TransportKind = TransportKind = {}));
		var Transport;
		(function (Transport) {
		    function isSocket(value) {
		        const candidate = value;
		        return candidate && candidate.kind === TransportKind.socket && Is.number(candidate.port);
		    }
		    Transport.isSocket = isSocket;
		})(Transport || (Transport = {}));
		var Executable;
		(function (Executable) {
		    function is(value) {
		        return Is.string(value.command);
		    }
		    Executable.is = is;
		})(Executable || (Executable = {}));
		var NodeModule;
		(function (NodeModule) {
		    function is(value) {
		        return Is.string(value.module);
		    }
		    NodeModule.is = is;
		})(NodeModule || (NodeModule = {}));
		var StreamInfo;
		(function (StreamInfo) {
		    function is(value) {
		        let candidate = value;
		        return candidate && candidate.writer !== undefined && candidate.reader !== undefined;
		    }
		    StreamInfo.is = is;
		})(StreamInfo || (StreamInfo = {}));
		var ChildProcessInfo;
		(function (ChildProcessInfo) {
		    function is(value) {
		        let candidate = value;
		        return candidate && candidate.process !== undefined && typeof candidate.detached === 'boolean';
		    }
		    ChildProcessInfo.is = is;
		})(ChildProcessInfo || (ChildProcessInfo = {}));
		class LanguageClient extends client_1.BaseLanguageClient {
		    constructor(arg1, arg2, arg3, arg4, arg5) {
		        let id;
		        let name;
		        let serverOptions;
		        let clientOptions;
		        let forceDebug;
		        if (Is.string(arg2)) {
		            id = arg1;
		            name = arg2;
		            serverOptions = arg3;
		            clientOptions = arg4;
		            forceDebug = !!arg5;
		        }
		        else {
		            id = arg1.toLowerCase();
		            name = arg1;
		            serverOptions = arg2;
		            clientOptions = arg3;
		            forceDebug = arg4;
		        }
		        if (forceDebug === undefined) {
		            forceDebug = false;
		        }
		        super(id, name, clientOptions);
		        this._serverOptions = serverOptions;
		        this._forceDebug = forceDebug;
		        this._isInDebugMode = forceDebug;
		        try {
		            this.checkVersion();
		        }
		        catch (error) {
		            if (Is.string(error.message)) {
		                this.outputChannel.appendLine(error.message);
		            }
		            throw error;
		        }
		    }
		    checkVersion() {
		        const codeVersion = semverParse(vscode_1.version);
		        if (!codeVersion) {
		            throw new Error(`No valid VS Code version detected. Version string is: ${vscode_1.version}`);
		        }
		        // Remove the insider pre-release since we stay API compatible.
		        if (codeVersion.prerelease && codeVersion.prerelease.length > 0) {
		            codeVersion.prerelease = [];
		        }
		        if (!semverSatisfies(codeVersion, REQUIRED_VSCODE_VERSION)) {
		            throw new Error(`The language client requires VS Code version ${REQUIRED_VSCODE_VERSION} but received version ${vscode_1.version}`);
		        }
		    }
		    get isInDebugMode() {
		        return this._isInDebugMode;
		    }
		    async restart() {
		        await this.stop();
		        // We are in debug mode. Wait a little before we restart
		        // so that the debug port can be freed. We can safely ignore
		        // the disposable returned from start since it will call
		        // stop on the same client instance.
		        if (this.isInDebugMode) {
		            await new Promise((resolve) => setTimeout(resolve, 1000));
		            await this.start();
		        }
		        else {
		            await this.start();
		        }
		    }
		    stop(timeout = 2000) {
		        return super.stop(timeout).finally(() => {
		            if (this._serverProcess) {
		                const toCheck = this._serverProcess;
		                this._serverProcess = undefined;
		                if (this._isDetached === undefined || !this._isDetached) {
		                    this.checkProcessDied(toCheck);
		                }
		                this._isDetached = undefined;
		            }
		        });
		    }
		    checkProcessDied(childProcess) {
		        if (!childProcess || childProcess.pid === undefined) {
		            return;
		        }
		        setTimeout(() => {
		            // Test if the process is still alive. Throws an exception if not
		            try {
		                if (childProcess.pid !== undefined) {
		                    process.kill(childProcess.pid, 0);
		                    (0, processes_1.terminate)(childProcess);
		                }
		            }
		            catch (error) {
		                // All is fine.
		            }
		        }, 2000);
		    }
		    handleConnectionClosed() {
		        this._serverProcess = undefined;
		        return super.handleConnectionClosed();
		    }
		    fillInitializeParams(params) {
		        super.fillInitializeParams(params);
		        if (params.processId === null) {
		            params.processId = process.pid;
		        }
		    }
		    createMessageTransports(encoding) {
		        function getEnvironment(env, fork) {
		            if (!env && !fork) {
		                return undefined;
		            }
		            const result = Object.create(null);
		            Object.keys(process.env).forEach(key => result[key] = process.env[key]);
		            if (fork) {
		                result['ELECTRON_RUN_AS_NODE'] = '1';
		                result['ELECTRON_NO_ASAR'] = '1';
		            }
		            if (env) {
		                Object.keys(env).forEach(key => result[key] = env[key]);
		            }
		            return result;
		        }
		        const debugStartWith = ['--debug=', '--debug-brk=', '--inspect=', '--inspect-brk='];
		        const debugEquals = ['--debug', '--debug-brk', '--inspect', '--inspect-brk'];
		        function startedInDebugMode() {
		            let args = process.execArgv;
		            if (args) {
		                return args.some((arg) => {
		                    return debugStartWith.some(value => arg.startsWith(value)) ||
		                        debugEquals.some(value => arg === value);
		                });
		            }
		            return false;
		        }
		        function assertStdio(process) {
		            if (process.stdin === null || process.stdout === null || process.stderr === null) {
		                throw new Error('Process created without stdio streams');
		            }
		        }
		        const server = this._serverOptions;
		        // We got a function.
		        if (Is.func(server)) {
		            return server().then((result) => {
		                if (client_1.MessageTransports.is(result)) {
		                    this._isDetached = !!result.detached;
		                    return result;
		                }
		                else if (StreamInfo.is(result)) {
		                    this._isDetached = !!result.detached;
		                    return { reader: new node_1.StreamMessageReader(result.reader), writer: new node_1.StreamMessageWriter(result.writer) };
		                }
		                else {
		                    let cp;
		                    if (ChildProcessInfo.is(result)) {
		                        cp = result.process;
		                        this._isDetached = result.detached;
		                    }
		                    else {
		                        cp = result;
		                        this._isDetached = false;
		                    }
		                    cp.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                    return { reader: new node_1.StreamMessageReader(cp.stdout), writer: new node_1.StreamMessageWriter(cp.stdin) };
		                }
		            });
		        }
		        let json;
		        let runDebug = server;
		        if (runDebug.run || runDebug.debug) {
		            if (this._forceDebug || startedInDebugMode()) {
		                json = runDebug.debug;
		                this._isInDebugMode = true;
		            }
		            else {
		                json = runDebug.run;
		                this._isInDebugMode = false;
		            }
		        }
		        else {
		            json = server;
		        }
		        return this._getServerWorkingDir(json.options).then(serverWorkingDir => {
		            if (NodeModule.is(json) && json.module) {
		                let node = json;
		                let transport = node.transport || TransportKind.stdio;
		                if (node.runtime) {
		                    const args = [];
		                    const options = node.options ?? Object.create(null);
		                    if (options.execArgv) {
		                        options.execArgv.forEach(element => args.push(element));
		                    }
		                    args.push(node.module);
		                    if (node.args) {
		                        node.args.forEach(element => args.push(element));
		                    }
		                    const execOptions = Object.create(null);
		                    execOptions.cwd = serverWorkingDir;
		                    execOptions.env = getEnvironment(options.env, false);
		                    const runtime = this._getRuntimePath(node.runtime, serverWorkingDir);
		                    let pipeName = undefined;
		                    if (transport === TransportKind.ipc) {
		                        // exec options not correctly typed in lib
		                        execOptions.stdio = [null, null, null, 'ipc'];
		                        args.push('--node-ipc');
		                    }
		                    else if (transport === TransportKind.stdio) {
		                        args.push('--stdio');
		                    }
		                    else if (transport === TransportKind.pipe) {
		                        pipeName = (0, node_1.generateRandomPipeName)();
		                        args.push(`--pipe=${pipeName}`);
		                    }
		                    else if (Transport.isSocket(transport)) {
		                        args.push(`--socket=${transport.port}`);
		                    }
		                    args.push(`--clientProcessId=${process.pid.toString()}`);
		                    if (transport === TransportKind.ipc || transport === TransportKind.stdio) {
		                        const serverProcess = cp.spawn(runtime, args, execOptions);
		                        if (!serverProcess || !serverProcess.pid) {
		                            return handleChildProcessStartError(serverProcess, `Launching server using runtime ${runtime} failed.`);
		                        }
		                        this._serverProcess = serverProcess;
		                        serverProcess.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                        if (transport === TransportKind.ipc) {
		                            serverProcess.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            return Promise.resolve({ reader: new node_1.IPCMessageReader(serverProcess), writer: new node_1.IPCMessageWriter(serverProcess) });
		                        }
		                        else {
		                            return Promise.resolve({ reader: new node_1.StreamMessageReader(serverProcess.stdout), writer: new node_1.StreamMessageWriter(serverProcess.stdin) });
		                        }
		                    }
		                    else if (transport === TransportKind.pipe) {
		                        return (0, node_1.createClientPipeTransport)(pipeName).then((transport) => {
		                            const process = cp.spawn(runtime, args, execOptions);
		                            if (!process || !process.pid) {
		                                return handleChildProcessStartError(process, `Launching server using runtime ${runtime} failed.`);
		                            }
		                            this._serverProcess = process;
		                            process.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            process.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            return transport.onConnected().then((protocol) => {
		                                return { reader: protocol[0], writer: protocol[1] };
		                            });
		                        });
		                    }
		                    else if (Transport.isSocket(transport)) {
		                        return (0, node_1.createClientSocketTransport)(transport.port).then((transport) => {
		                            const process = cp.spawn(runtime, args, execOptions);
		                            if (!process || !process.pid) {
		                                return handleChildProcessStartError(process, `Launching server using runtime ${runtime} failed.`);
		                            }
		                            this._serverProcess = process;
		                            process.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            process.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            return transport.onConnected().then((protocol) => {
		                                return { reader: protocol[0], writer: protocol[1] };
		                            });
		                        });
		                    }
		                }
		                else {
		                    let pipeName = undefined;
		                    return new Promise((resolve, reject) => {
		                        const args = (node.args && node.args.slice()) ?? [];
		                        if (transport === TransportKind.ipc) {
		                            args.push('--node-ipc');
		                        }
		                        else if (transport === TransportKind.stdio) {
		                            args.push('--stdio');
		                        }
		                        else if (transport === TransportKind.pipe) {
		                            pipeName = (0, node_1.generateRandomPipeName)();
		                            args.push(`--pipe=${pipeName}`);
		                        }
		                        else if (Transport.isSocket(transport)) {
		                            args.push(`--socket=${transport.port}`);
		                        }
		                        args.push(`--clientProcessId=${process.pid.toString()}`);
		                        const options = node.options ?? Object.create(null);
		                        options.env = getEnvironment(options.env, true);
		                        options.execArgv = options.execArgv || [];
		                        options.cwd = serverWorkingDir;
		                        options.silent = true;
		                        if (transport === TransportKind.ipc || transport === TransportKind.stdio) {
		                            const sp = cp.fork(node.module, args || [], options);
		                            assertStdio(sp);
		                            this._serverProcess = sp;
		                            sp.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                            if (transport === TransportKind.ipc) {
		                                sp.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                                resolve({ reader: new node_1.IPCMessageReader(this._serverProcess), writer: new node_1.IPCMessageWriter(this._serverProcess) });
		                            }
		                            else {
		                                resolve({ reader: new node_1.StreamMessageReader(sp.stdout), writer: new node_1.StreamMessageWriter(sp.stdin) });
		                            }
		                        }
		                        else if (transport === TransportKind.pipe) {
		                            (0, node_1.createClientPipeTransport)(pipeName).then((transport) => {
		                                const sp = cp.fork(node.module, args || [], options);
		                                assertStdio(sp);
		                                this._serverProcess = sp;
		                                sp.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                                sp.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                                transport.onConnected().then((protocol) => {
		                                    resolve({ reader: protocol[0], writer: protocol[1] });
		                                }, reject);
		                            }, reject);
		                        }
		                        else if (Transport.isSocket(transport)) {
		                            (0, node_1.createClientSocketTransport)(transport.port).then((transport) => {
		                                const sp = cp.fork(node.module, args || [], options);
		                                assertStdio(sp);
		                                this._serverProcess = sp;
		                                sp.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                                sp.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                                transport.onConnected().then((protocol) => {
		                                    resolve({ reader: protocol[0], writer: protocol[1] });
		                                }, reject);
		                            }, reject);
		                        }
		                    });
		                }
		            }
		            else if (Executable.is(json) && json.command) {
		                const command = json;
		                const args = json.args !== undefined ? json.args.slice(0) : [];
		                let pipeName = undefined;
		                const transport = json.transport;
		                if (transport === TransportKind.stdio) {
		                    args.push('--stdio');
		                }
		                else if (transport === TransportKind.pipe) {
		                    pipeName = (0, node_1.generateRandomPipeName)();
		                    args.push(`--pipe=${pipeName}`);
		                }
		                else if (Transport.isSocket(transport)) {
		                    args.push(`--socket=${transport.port}`);
		                }
		                else if (transport === TransportKind.ipc) {
		                    throw new Error(`Transport kind ipc is not support for command executable`);
		                }
		                const options = Object.assign({}, command.options);
		                options.cwd = options.cwd || serverWorkingDir;
		                if (transport === undefined || transport === TransportKind.stdio) {
		                    const serverProcess = cp.spawn(command.command, args, options);
		                    if (!serverProcess || !serverProcess.pid) {
		                        return handleChildProcessStartError(serverProcess, `Launching server using command ${command.command} failed.`);
		                    }
		                    serverProcess.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                    this._serverProcess = serverProcess;
		                    this._isDetached = !!options.detached;
		                    return Promise.resolve({ reader: new node_1.StreamMessageReader(serverProcess.stdout), writer: new node_1.StreamMessageWriter(serverProcess.stdin) });
		                }
		                else if (transport === TransportKind.pipe) {
		                    return (0, node_1.createClientPipeTransport)(pipeName).then((transport) => {
		                        const serverProcess = cp.spawn(command.command, args, options);
		                        if (!serverProcess || !serverProcess.pid) {
		                            return handleChildProcessStartError(serverProcess, `Launching server using command ${command.command} failed.`);
		                        }
		                        this._serverProcess = serverProcess;
		                        this._isDetached = !!options.detached;
		                        serverProcess.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                        serverProcess.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                        return transport.onConnected().then((protocol) => {
		                            return { reader: protocol[0], writer: protocol[1] };
		                        });
		                    });
		                }
		                else if (Transport.isSocket(transport)) {
		                    return (0, node_1.createClientSocketTransport)(transport.port).then((transport) => {
		                        const serverProcess = cp.spawn(command.command, args, options);
		                        if (!serverProcess || !serverProcess.pid) {
		                            return handleChildProcessStartError(serverProcess, `Launching server using command ${command.command} failed.`);
		                        }
		                        this._serverProcess = serverProcess;
		                        this._isDetached = !!options.detached;
		                        serverProcess.stderr.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                        serverProcess.stdout.on('data', data => this.outputChannel.append(Is.string(data) ? data : data.toString(encoding)));
		                        return transport.onConnected().then((protocol) => {
		                            return { reader: protocol[0], writer: protocol[1] };
		                        });
		                    });
		                }
		            }
		            return Promise.reject(new Error(`Unsupported server configuration ` + JSON.stringify(server, null, 4)));
		        }).finally(() => {
		            if (this._serverProcess !== undefined) {
		                this._serverProcess.on('exit', (code, signal) => {
		                    if (code !== null) {
		                        this.error(`Server process exited with code ${code}.`, undefined, false);
		                    }
		                    if (signal !== null) {
		                        this.error(`Server process exited with signal ${signal}.`, undefined, false);
		                    }
		                });
		            }
		        });
		    }
		    _getRuntimePath(runtime, serverWorkingDirectory) {
		        if (path.isAbsolute(runtime)) {
		            return runtime;
		        }
		        const mainRootPath = this._mainGetRootPath();
		        if (mainRootPath !== undefined) {
		            const result = path.join(mainRootPath, runtime);
		            if (fs.existsSync(result)) {
		                return result;
		            }
		        }
		        if (serverWorkingDirectory !== undefined) {
		            const result = path.join(serverWorkingDirectory, runtime);
		            if (fs.existsSync(result)) {
		                return result;
		            }
		        }
		        return runtime;
		    }
		    _mainGetRootPath() {
		        let folders = vscode_1.workspace.workspaceFolders;
		        if (!folders || folders.length === 0) {
		            return undefined;
		        }
		        let folder = folders[0];
		        if (folder.uri.scheme === 'file') {
		            return folder.uri.fsPath;
		        }
		        return undefined;
		    }
		    _getServerWorkingDir(options) {
		        let cwd = options && options.cwd;
		        if (!cwd) {
		            cwd = this.clientOptions.workspaceFolder
		                ? this.clientOptions.workspaceFolder.uri.fsPath
		                : this._mainGetRootPath();
		        }
		        if (cwd) {
		            // make sure the folder exists otherwise creating the process will fail
		            return new Promise(s => {
		                fs.lstat(cwd, (err, stats) => {
		                    s(!err && stats.isDirectory() ? cwd : undefined);
		                });
		            });
		        }
		        return Promise.resolve(undefined);
		    }
		}
		exports.LanguageClient = LanguageClient;
		class SettingMonitor {
		    constructor(_client, _setting) {
		        this._client = _client;
		        this._setting = _setting;
		        this._listeners = [];
		    }
		    start() {
		        vscode_1.workspace.onDidChangeConfiguration(this.onDidChangeConfiguration, this, this._listeners);
		        this.onDidChangeConfiguration();
		        return new vscode_1.Disposable(() => {
		            if (this._client.needsStop()) {
		                void this._client.stop();
		            }
		        });
		    }
		    onDidChangeConfiguration() {
		        let index = this._setting.indexOf('.');
		        let primary = index >= 0 ? this._setting.substr(0, index) : this._setting;
		        let rest = index >= 0 ? this._setting.substr(index + 1) : undefined;
		        let enabled = rest ? vscode_1.workspace.getConfiguration(primary).get(rest, false) : vscode_1.workspace.getConfiguration(primary);
		        if (enabled && this._client.needsStart()) {
		            this._client.start().catch((error) => this._client.error('Start failed after configuration change', error, 'force'));
		        }
		        else if (!enabled && this._client.needsStop()) {
		            void this._client.stop().catch((error) => this._client.error('Stop failed after configuration change', error, 'force'));
		        }
		    }
		}
		exports.SettingMonitor = SettingMonitor;
		function handleChildProcessStartError(process, message) {
		    if (process === null) {
		        return Promise.reject(message);
		    }
		    return new Promise((_, reject) => {
		        process.on('error', (err) => {
		            reject(`${message} ${err}`);
		        });
		        // the error event should always be run immediately,
		        // but race on it just in case
		        setImmediate(() => reject(message));
		    });
		} 
	} (main$3));
	return main$3;
}

/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ----------------------------------------------------------------------------------------- */

var node;
var hasRequiredNode;

function requireNode () {
	if (hasRequiredNode) return node;
	hasRequiredNode = 1;

	node = requireMain();
	return node;
}

var nodeExports = requireNode();

class Session {
  /**
   * Creates a new LSP session
   */
  constructor(biome, bin, folder, singleFileFolder) {
    this.biome = biome;
    this.bin = bin;
    this.folder = folder;
    this.singleFileFolder = singleFileFolder;
  }
  get biomeVersion() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.client) == null ? void 0 : _a.initializeResult) == null ? void 0 : _b.serverInfo) == null ? void 0 : _c.version;
  }
  static createForWorkspaceFolder(biome, bin, workspaceFolder) {
    return new Session(biome, bin, workspaceFolder);
  }
  static createForSingleFile(biome, bin, singleFileFolder) {
    return new Session(biome, bin, void 0, singleFileFolder);
  }
  static createForGlobalInstance(biome, bin) {
    return new Session(biome, bin);
  }
  /**
   * Starts the LSP session.
   */
  async start() {
    this.client = this.createLanguageClient();
    await this.client.start();
  }
  /**
   * Stops the LSP session.
   */
  async stop() {
    var _a;
    this.biome.logger.debug("Stopping LSP session");
    await ((_a = this.client) == null ? void 0 : _a.stop());
    this.biome.logger.debug("LSP session stopped");
    this.client = void 0;
  }
  /**
   * Restarts the LSP session.
   */
  async restart() {
    await this.stop();
    await this.start();
  }
  /**
   * Creates a new language client for the session.
   */
  createLanguageClient() {
    var _a, _b;
    this.biome.logger.debug(
      `Creating LSP session for ${((_a = this.folder) == null ? void 0 : _a.name) ?? "global"} with ${this.bin.fsPath}`
    );
    const serverOptions = {
      command: this.bin.fsPath,
      transport: nodeExports.TransportKind.stdio,
      args: ["lsp-proxy"]
    };
    const outputChannel = require$$0.window.createOutputChannel(
      `${displayName} (${((_b = this.folder) == null ? void 0 : _b.name) ?? "global"}) - LSP`,
      { log: true }
    );
    const clientOptions = {
      outputChannel,
      traceOutputChannel: outputChannel,
      documentSelector: this.createDocumentSelector(),
      workspaceFolder: this.folder,
      initializationOptions: {
        ...this.singleFileFolder && {
          rootUri: this.singleFileFolder
        }
      }
    };
    return new BiomeLanguageClient(
      "biome.lsp",
      "biome",
      serverOptions,
      clientOptions
    );
  }
  /**
   * Creates the document selector for the language client.
   */
  createDocumentSelector() {
    const folder = this.folder;
    const singleFileFolder = this.singleFileFolder;
    if (folder !== void 0) {
      return supportedLanguages.map((language) => ({
        language,
        scheme: "file",
        pattern: require$$0.Uri.joinPath(folder.uri, "**", "*").fsPath.replaceAll(
          "\\",
          "/"
        )
      }));
    } else if (singleFileFolder !== void 0) {
      return supportedLanguages.map((language) => ({
        language,
        scheme: "file",
        pattern: require$$0.Uri.joinPath(singleFileFolder, "**", "*").fsPath.replaceAll(
          "\\",
          "/"
        )
      }));
    }
    return supportedLanguages.flatMap((language) => {
      return ["untitled", "vscode-userdata"].map((scheme) => ({
        language,
        scheme
      }));
    });
  }
}
class BiomeLanguageClient extends nodeExports.LanguageClient {
  fillInitializeParams(params) {
    var _a, _b, _c, _d;
    super.fillInitializeParams(params);
    if ((_a = params.initializationOptions) == null ? void 0 : _a.rootUri) {
      params.rootUri = (_b = params.initializationOptions) == null ? void 0 : _b.rootUri.toString();
    }
    if ((_c = params.initializationOptions) == null ? void 0 : _c.rootPath) {
      params.rootPath = (_d = params.initializationOptions) == null ? void 0 : _d.rootPath;
    }
  }
}

class Biome {
  /**
   * Creates a new Biome instance
   *
   * @param workspaceFolder The workspace folder for which to create the Biome instance.
   */
  constructor(extension, workspaceFolder, singleFileFolder) {
    this.extension = extension;
    this.workspaceFolder = workspaceFolder;
    this.singleFileFolder = singleFileFolder;
    /**
     * State of the Biome instance
     */
    this._state = "starting";
    /**
     * The state change callbacks
     */
    this.stateChangeCallbacks = [];
    this.logger = new Logger(`Biome (${this.name})`);
    this.locator = new Locator(this);
  }
  /**
   * LSP session for this Biome instance.
   */
  get session() {
    return this._session;
  }
  /**
   * Current state of the Biome instance
   */
  get state() {
    return this._state;
  }
  /**
   * Sets the state of the Biome instance
   *
   * This setter will also trigger state change callbacks.
   */
  set state(value) {
    this._state = value;
    for (const callback of this.stateChangeCallbacks) {
      callback(value);
    }
  }
  /**
   * Indicates whether Biome is enabled for this workspace folder.
   */
  get enabled() {
    return config("enabled", { scope: this.workspaceFolder, default: true }) ?? true;
  }
  /**
   * The version of Biome currently in use.
   */
  get version() {
    var _a;
    return (_a = this._session) == null ? void 0 : _a.biomeVersion;
  }
  /**
   * Whether this Biome instance is global
   */
  get isGlobal() {
    return !this.workspaceFolder;
  }
  /**
   * Name of this Biome instance
   */
  get name() {
    var _a;
    if (this.singleFileFolder) {
      return "single-file";
    }
    if (!this.workspaceFolder) {
      return "global";
    }
    return ((_a = this.workspaceFolder) == null ? void 0 : _a.name) ?? "unknown";
  }
  /**
   * The path to a temporary directory for this Biome instance
   */
  get tempDirectory() {
    if (!this.extension.context.storageUri || !this.workspaceFolder) {
      return void 0;
    }
    return require$$0.Uri.joinPath(
      this.extension.context.storageUri,
      this.workspaceFolder.name
    );
  }
  /**
   * Creates new Biome instance for a single file.
   *
   * This is used when the user opens a single file in VSCode, and we need to
   * create a Biome instance for that file.
   *
   * @param extension The extension instance.
   * @param parentFolderUri The URI of the parent folder of the file.
   */
  static createForSingleFile(extension, parentFolderUri) {
    return new Biome(extension, void 0, parentFolderUri);
  }
  /**
   * Creates a new Biome instance for a workspace folder.
   *
   * @param extension The extension instance.
   * @param workspaceFolder The workspace folder for which to create the Biome instance.
   */
  static createForWorkspaceFolder(extension, workspaceFolder) {
    return new Biome(extension, workspaceFolder);
  }
  /**
   * Creates a new global Biome instance.
   *
   * @param extension The extension instance.
   */
  static createGlobalInstance(extension) {
    return new Biome(extension, void 0, void 0);
  }
  /**
   * Starts the Biome instance.
   */
  async start() {
    var _a;
    this.listenForLockfilesChanges();
    this.listenForConfigChanges();
    if (!this.enabled) {
      this.logger.info("Biome is disabled.");
      this.state = "disabled";
      return;
    }
    this.state = "starting";
    const binary = await this.getBinary();
    if (!binary) {
      this.logger.error("Unable to find the Biome binary.");
      this.state = "error";
      return;
    }
    this._session = new Session(
      this,
      binary,
      this.workspaceFolder,
      this.singleFileFolder
    );
    if (!this._session) {
      this.state = "error";
      this.logger.error("Unable to create the Biome session.");
      return;
    }
    try {
      await ((_a = this._session) == null ? void 0 : _a.start());
      this.logger.info("\u2705 Biome is ready.");
      this.state = "ready";
    } catch (_error) {
      this.state = "error";
      this.logger.error("Failed to start the session");
      await this.stop();
    }
  }
  /**
   * Stops the Biome instance.
   */
  async stop() {
    var _a;
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    await ((_a = this._session) == null ? void 0 : _a.stop());
    await this.cleanup();
    this._session = void 0;
  }
  /**
   * Restarts the Biome instance.
   */
  async restart() {
    this.logger.info("\u{1F504} Restarting Biome...");
    await this.stop();
    await this.start();
  }
  /**
   * Retrieves the path to the Biome binary
   *
   * This method uses the locator to find the Biome binary on the system, and
   * if necessary copies it to a temporary location from where it will be executed
   * to prevent locking the original binary.
   */
  async getBinary() {
    const binary = this.isGlobal ? await this.locator.findBiomeForGlobalInstance() : await this.locator.findBiomeForWorkspaceFolder();
    if (!binary) {
      return void 0;
    }
    return await this.shouldRunFromTemporaryLocation() ? await this.copyToTemporaryLocation(binary) : binary;
  }
  /**
   * Determines whether the Biome binary should be ran from a temporary
   * location.
   *
   * On most systems, the Biome binary can be executed directly. However, on
   * Windows, the binary will be locked by the system when it is executed,
   * preventing users to update it while the LSP session is running.
   *
   * To prevent this, the binary is copied to a temporary location and
   * executed from there, allowing the original binary to be updated
   * without affecting the running LSP session.
   *
   * There are however some cases where end users may want to run the
   * original binary directly, for example when their system's policy
   * prevents them from executing binaries from the temporary location,
   * so we'll provide an escape hatch in the form of a configuration
   * setting.
   */
  async shouldRunFromTemporaryLocation() {
    if (this.isGlobal) {
      this.logger.debug(
        "The binary should not be copied to a temporary location because this is a global instance."
      );
      return false;
    }
    const runFromTemporaryLocation = config("runFromTemporaryLocation", {
      scope: this.workspaceFolder,
      default: process.platform === "win32"
    });
    return Boolean(runFromTemporaryLocation);
  }
  /**
   * Copies the original Biome binary to a temporary location.
   *
   * This method copies the original binary to a temporary location and
   * returns the URI to the copied binary. It also ensures that the copied
   * binary is executable.
   */
  async copyToTemporaryLocation(originalBinary) {
    try {
      const tempDirectory = this.tempDirectory;
      this.logger.debug(
        `Temporary directory for Biome: ${tempDirectory == null ? void 0 : tempDirectory.fsPath}`
      );
      if (!tempDirectory) {
        return;
      }
      await require$$0.workspace.fs.createDirectory(tempDirectory);
      this.logger.debug(
        `Ensured temporary directory exists: ${tempDirectory.fsPath}`
      );
      const destination = require$$0.Uri.joinPath(
        tempDirectory,
        platformSpecificBinaryName
      );
      this.logger.debug(
        `Will copy the original binary at ${originalBinary.fsPath} to ${destination.fsPath}`
      );
      fs.copyFileSync(originalBinary.fsPath, destination.fsPath);
      this.logger.debug(
        `Copied the original binary to a temporary location: ${destination.fsPath}`
      );
      fs.chmodSync(destination.fsPath, 493);
      return destination;
    } catch (_error) {
      await this.cleanup();
      return void 0;
    }
  }
  /**
   * Listens for changes to common lockfiles in the workspace folder
   *
   * This method will register a listener for changes to common lockfiles in the
   * workspace folder. This is useful for reloading the Biome instance when
   * dependencies are updated.
   */
  listenForLockfilesChanges() {
    if (!this.workspaceFolder) {
      return;
    }
    if (this._lockfileWatcher) {
      return;
    }
    this._lockfileWatcher = require$$0.workspace.createFileSystemWatcher(
      new require$$0.RelativePattern(
        this.workspaceFolder,
        "{package-lock.json,yarn.lock,bun.lockb,bun.lock,pnpm-lock.yaml}"
      )
    );
    this._lockfileWatcher.onDidChange(
      debounce((event) => {
        this.logger.info(`\u{1F512} Lockfile "${event.fsPath}" changed.`);
        this.restart();
      })
    );
    this._lockfileWatcher.onDidCreate(
      debounce((event) => {
        this.logger.info(`\u{1F512} Lockfile "${event.fsPath}" created.`);
        this.restart();
      })
    );
    this._lockfileWatcher.onDidDelete(
      debounce((event) => {
        this.logger.info(`\u{1F512} Lockfile "${event.fsPath}" deleted.`);
        this.restart();
      })
    );
    this.logger.info("\u{1F512} Started listening for lockfile changes.");
    this.extension.context.subscriptions.push(this._lockfileWatcher);
  }
  listenForConfigChanges() {
    if (!this._configWatcher) {
      this._configWatcher = require$$0.workspace.onDidChangeConfiguration(
        debounce(async (event) => {
          if (event.affectsConfiguration("biome", this.workspaceFolder)) {
            this.logger.info("\u2699\uFE0F Configuration changed.");
            await this.restart();
          }
        }, 1e3)
      );
    }
    this.logger.info("\u2699\uFE0F Started listening for extension settings changes.");
    this.extension.context.subscriptions.push(this._configWatcher);
  }
  /**
   * Cleans up the temporary directory.
   */
  async cleanup() {
    var _a, _b;
    (_a = this._configWatcher) == null ? void 0 : _a.dispose();
    this._configWatcher = void 0;
    (_b = this._lockfileWatcher) == null ? void 0 : _b.dispose();
    this._lockfileWatcher = void 0;
    if (this.isGlobal) {
      return;
    }
    this.logger.debug("\u{1F9F9} Cleaning up temporary directory.");
    if (!this.tempDirectory) {
      return;
    }
    await require$$0.workspace.fs.delete(this.tempDirectory, {
      recursive: true,
      useTrash: false
    });
    this.logger.debug("\u{1F9F9} Temporary directory has been cleaned up.");
  }
  /**
   * Registers a callback to be called when the state of the Biome instance changes.
   */
  onStateChange(callback) {
    this.stateChangeCallbacks.push(callback);
  }
}

class StatusBar {
  /**
   * Create a new status bar
   */
  constructor(extension) {
    this.extension = extension;
    this.statusBarItem = require$$0.window.createStatusBarItem(
      "status",
      require$$0.StatusBarAlignment.Right,
      100
    );
  }
  /**
   * Hide the status bar
   */
  hide() {
    this.statusBarItem.hide();
  }
  /**
   * Show the status bar
   */
  show() {
    this.statusBarItem.show();
  }
  /**
   * Update the status bar
   *
   * This method updates the status bar based on the state of the currently
   * active Biome instance.
   */
  update() {
    var _a, _b, _c;
    if (!((_a = this.extension.biome) == null ? void 0 : _a.enabled)) {
      this.hide();
      return;
    }
    const languageId = (_b = require$$0.window.activeTextEditor) == null ? void 0 : _b.document.languageId;
    if (!languageId || !supportedLanguages.includes(languageId)) {
      this.hide();
      return;
    }
    switch ((_c = this.extension.biome) == null ? void 0 : _c.state) {
      case "starting":
        this.showStarting();
        break;
      case "ready":
        this.showReady();
        break;
      case "error":
        this.showError();
        break;
      case "disabled":
        this.hide();
        break;
      default:
        this.hide();
        return;
    }
  }
  /**
   * Show the status bar as "starting"
   *
   * This renders the Biome logo along with a loading spinner to indicate
   * that Biome is starting up.
   */
  showStarting() {
    this.statusBarItem.text = `$(biome-logo)$(loading~spin)`;
    this.statusBarItem.backgroundColor = void 0;
    this.statusBarItem.tooltip = "Biome is starting...";
    this.statusBarItem.show();
  }
  /**
   * Show the status bar as "ready"
   *
   * This renders the Biome logo along with the version number of the
   * currently active Biome instance.
   *
   * When the version is "0.0.0", it indicates that the Biome instance is
   * running in development mode. In this case, the status bar item will
   * have a warning background color.
   */
  showReady() {
    var _a, _b;
    this.statusBarItem.command = {
      title: "Open logs",
      command: `biome.showLogs`
    };
    this.statusBarItem.tooltip = "Show logs";
    if (((_a = this.extension.biome) == null ? void 0 : _a.version) === "0.0.0") {
      this.statusBarItem.text = `$(biome-logo) dev`;
      this.statusBarItem.backgroundColor = new require$$0.ThemeColor(
        "statusBarItem.warningBackground"
      );
      this.statusBarItem.show();
      return;
    }
    this.statusBarItem.text = `$(biome-logo) ${(_b = this.extension.biome) == null ? void 0 : _b.version}`;
    this.statusBarItem.backgroundColor = void 0;
    this.statusBarItem.show();
  }
  /**
   * Show the status bar as "error"
   *
   * This renders the Biome logo along with a red background color to
   * indicate that there was an error starting up Biome.
   */
  showError() {
    this.statusBarItem.text = `$(biome-logo)`;
    this.statusBarItem.tooltip = "There was an error starting Biome. Click here to view the logs.";
    this.statusBarItem.backgroundColor = new require$$0.ThemeColor(
      "statusBarItem.errorBackground"
    );
    this.statusBarItem.command = {
      title: "Open logs",
      command: `biome.showLogs`
    };
    this.statusBarItem.show();
  }
}

class Extension {
  /**
   * Creates a new instance of the extension.
   *
   * One should use the `createFromContext` method to create an instance of the
   * extension, as this method will ensure that the instance is a singleton.
   */
  constructor(context) {
    this.context = context;
    this.logger = new Logger("Biome");
    this.statusBar = new StatusBar(this);
    this.biomes = /* @__PURE__ */ new Map();
  }
  /**
   * The extension's execution mode
   */
  get mode() {
    if (require$$0.workspace.workspaceFolders === void 0) {
      return "single-file";
    }
    return require$$0.workspace.workspaceFolders.length > 1 ? "multi-root" : "single-root";
  }
  /**
   * The currently focused Biome instance
   *
   * This property returns the Biome instance to which the file in the active
   * text editor belongs to.
   */
  get biome() {
    const editor = require$$0.window.activeTextEditor;
    if (!editor) {
      return void 0;
    }
    if (editor.document.isUntitled) {
      return this.biomes.get("global");
    }
    if (editor.document.uri.scheme === "vscode-userdata") {
      return this.biomes.get("global");
    }
    if (this.mode === "single-file") {
      return this.biomes.get("single");
    }
    const folder = require$$0.workspace.getWorkspaceFolder(editor.document.uri);
    if (folder) {
      return this.biomes.get(folder);
    }
    return void 0;
  }
  /**
   * Creates the extension from the context
   */
  static create(context) {
    return Extension.instance ?? new Extension(context);
  }
  /**
   * Initializes the extension
   *
   * This method will be called when the extension is activated. It will
   * register the commands and start the extension.
   */
  async init() {
    this.registerCommands();
    await this.start();
    require$$0.workspace.onDidChangeWorkspaceFolders(async () => {
      this.logger.info("\u{1F50D} Workspace folders changed.");
      await this.restart();
    });
  }
  /**
   * Starts the extension
   *
   * This method will start the extension, taking care of creating and
   * starting the Biome instances for all workspace folders, as well as
   * the global instance for files that do not belong to any workspace
   * folder.
   */
  async start() {
    this.logger.info(` ${"-".repeat(40)} `);
    this.logger.info(`\u{1F680} Biome extension ${version}.`);
    this.logger.info(
      {
        "single-file": "\u2728 Running in single-file mode.",
        "single-root": "\u2728 Running in single-root workspace mode.",
        "multi-root": "\u2728 Running in multi-root workspace mode."
      }[this.mode]
    );
    await this.createInstances();
    this.statusBar.update();
    for (const [_folder, biome] of this.biomes) {
      biome.onStateChange(() => {
        if (biome === this.biome) {
          this.statusBar.update();
        }
      });
    }
    require$$0.window.onDidChangeActiveTextEditor(() => {
      this.statusBar.update();
    });
    await this.startInstances();
    this.logger.info(`\u2728 See the dedicated logging channels for more details.`);
  }
  /**
   * Stops the extension
   *
   * This method will stop the extension, while taking care of cleaning up
   * any resources that were created during the extension's lifecycle.
   */
  async stop() {
    this.logger.trace("\u23F9\uFE0F Stopping Biome extension...");
    for (const [_folder, biome] of this.biomes) {
      await biome.stop();
      this.biomes.delete(_folder);
    }
    this.logger.info("\u23F9\uFE0F Biome extension stopped.");
  }
  /**
   * Restarts the extension
   *
   * This method will stop the extension and then start it again.
   */
  async restart() {
    await this.stop();
    this.logger.info("\u{1F504} Restarting Biome extension...");
    await this.start();
  }
  /**
   * Registers the extension's commands
   */
  registerCommands() {
    const showLogsCommand = require$$0.commands.registerCommand(
      "biome.showLogs",
      () => {
        var _a;
        return (_a = this.biome) == null ? void 0 : _a.logger.show(true);
      }
    );
    const restartCommand = require$$0.commands.registerCommand(
      "biome.restart",
      async () => {
        await this.stop();
        await this.start();
      }
    );
    this.context.subscriptions.push(...[showLogsCommand, restartCommand]);
  }
  async createInstances() {
    if (this.mode === "single-file") {
      await this.createSingleFileInstance();
    } else if (this.mode === "single-root" || this.mode === "multi-root") {
      await this.createWorkspaceInstances();
    }
    await this.createGlobalInstance();
    this.logger.info(`\u{1F680} Created ${this.biomes.size} Biome instance(s).`);
  }
  /**
   * Creates a Biome instance for a single file
   */
  async createSingleFileInstance() {
    var _a;
    const singleFileURI = (_a = require$$0.window.activeTextEditor) == null ? void 0 : _a.document.uri;
    if (!singleFileURI) {
      this.logger.error(
        "\u274C Unable to start Biome for single file: no active editor."
      );
      return;
    }
    const parentFolderURI = require$$0.Uri.file(
      Utils.resolvePath(singleFileURI, "..").fsPath
    );
    this.biomes.set("single", Biome.createForSingleFile(this, parentFolderURI));
  }
  /**
   * Starts Biome instances for all workspace folders
   */
  async createWorkspaceInstances() {
    const folders = require$$0.workspace.workspaceFolders ?? [];
    this.logger.info(`\u{1F50D} Found ${folders.length} workspace folder(s).`);
    for (const folder of folders) {
      this.biomes.set(folder, Biome.createForWorkspaceFolder(this, folder));
    }
  }
  /**
   * Registers a listener for the on-demand global instance
   *
   * This method registers a listener responsible for creating and starting a
   * global Biome instance when the user opens an a file that does not belong
   * to any workspace folder.
   *
   * This allows users to format Untitled files, or their VS Code settings
   * using Biome.
   *
   * Once the global instance is created, it will be kept alive until the
   * extension is stopped to avoid creating and destroying the global instance
   * every time the user opens/closes such a file.
   */
  async createGlobalInstance() {
    const createGlobalInstanceIfNotExists = async () => {
      if (!this.biomes.get("global")) {
        this.biomes.set("global", Biome.createGlobalInstance(this));
      }
    };
    const createGlobalInstanceIfNeeded = async (editor) => {
      var _a;
      this.logger.debug((_a = editor == null ? void 0 : editor.document) == null ? void 0 : _a.uri.toString());
      if (!editor || !config("enabled", { default: true })) {
        return;
      }
      if (["untitled", "vscode-userdata"].includes(editor == null ? void 0 : editor.document.uri.scheme)) {
        if (supportedLanguages.includes(editor == null ? void 0 : editor.document.languageId)) {
          await createGlobalInstanceIfNotExists();
          return;
        }
        const listener = require$$0.workspace.onDidChangeTextDocument(async (event) => {
          if (supportedLanguages.includes(event.document.languageId)) {
            await createGlobalInstanceIfNotExists();
            listener.dispose();
            return;
          }
        });
      }
    };
    await createGlobalInstanceIfNeeded(require$$0.window.activeTextEditor);
    require$$0.window.onDidChangeActiveTextEditor(
      debounce(async (editor) => {
        var _a;
        await createGlobalInstanceIfNeeded(editor);
        await ((_a = this.biomes.get("global")) == null ? void 0 : _a.start());
      }, 0)
    );
  }
  /**
   * Starts the Biome instances
   */
  async startInstances() {
    for (const [_folder, biome] of this.biomes) {
      await biome.start();
    }
    this.logger.info(`\u{1F680} Started ${this.biomes.size} Biome instance(s).`);
  }
}

let extension;
const activate = async (context) => {
  extension = Extension.create(context);
  await extension.init();
};
const deactivate = async () => {
  await (extension == null ? void 0 : extension.stop());
};

exports.activate = activate;
exports.deactivate = deactivate;
//# sourceMappingURL=main.js.map
