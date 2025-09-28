#-- oh-my-zsh --
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="catppuccin"

plugins=(git)

source $ZSH/oh-my-zsh.sh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting-theme.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-sudo/sudo.plugin.zsh

# imports
[ -f /home/$USER/.ghcup/env ] && source /home/$USER/.ghcup/env

# aliases
alias cd="z"
#-- git --
alias g='git'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit -m'
alias gp='git push'
alias gs='git status'
alias gd='git diff'
alias gb='git branch'
alias gsw='git switch'
alias glog='git log --graph --oneline --decorate --color \
--pretty=format:"%C(yellow)%h%C(reset) %C(red)%d%C(reset) (%C(blue)%an%C(reset), %C(green)%ar%C(reset)) %s"
'
alias lg='lazygit'
# github
alias ghi="gh issue create"
ghid (){
  gh issue develop "$1" -c
}
alias ghpr="gh pr create"
alias ghprd="gh pr create --draft"
alias ghprm="gh pr merge"
alias ghd="gh dash"

#-- lsd --
alias ll='lsd -lh --group-dirs=first'
alias la='lsd -a --group-dirs=first'
alias l='lsd --group-dirs=first'
alias lla='lsd -lha --group-dirs=first'
alias ls='lsd --group-dirs=first'
alias cat='bat'

#-- system --
alias sdw='shutdown now'
alias rb='reboot'
alias explorer='nautilus -w . & disown'

#-- shortcuts --
alias syd='~/Scripts/SyncDotfiles.sh'
alias img='kitty +kitten icat'
alias awm="$HOME/Scripts/runAwesomewmScript.sh"
alias segundo="cd $HOME/Universidad/segundo/"
alias tercero="cd $HOME/Universidad/tercero/"
alias ij="intellij-idea-ultimate-edition"
alias ranger="yazi"
alias notes="glow $HOME/SecondBrain/04-Notes/"
alias nt="nvim $HOME/SecondBrain/04-Notes/"
alias todo="nvim $HOME/SecondBrain/04-Notes/todo.md"
alias oc="opencode"

# BITWARDEN
if [[ -f $HOME/.bw_session ]]; then
	export BW_SESSION=$(cat $HOME/.bw_session )
fi

alias bw_login="bw login --raw > ~/.bw_session && export BW_SESSION=\$(cat ~.bw_session)"
alias bw_lock="bw lock && unset BW_SESSION"
alias bw_unlock="bw unlock --raw > ~/.bw_session && export BW_SESSION=\$(cat ~.bw_session)"

# server
alias ubuntu="ssh -i ~/.ssh/oracle.key ubuntu@143.47.40.193"
alias windows="systemctl reboot --boot-loader-entry=auto-windows"

fzfvim() 
{
	local fname
	local current_dir=$PWD
  fname=$(fzf) || return
  nvim "$fname"
  cd $current_dir
}

nvimconf ()
{
	local current_dir=$PWD
  cd $XDG_CONFIG_HOME/nvim/
  nvim
	cd $current_dir
}

pdf ()
{
  zathura "$1" &
}

man() 
{ # man colors
    env \
    LESS_TERMCAP_mb=$'\e[01;31m' \
    LESS_TERMCAP_md=$'\e[01;31m' \
    LESS_TERMCAP_me=$'\e[0m' \
    LESS_TERMCAP_se=$'\e[0m' \
    LESS_TERMCAP_so=$'\e[01;44;33m' \
    LESS_TERMCAP_ue=$'\e[0m' \
    LESS_TERMCAP_us=$'\e[01;32m' \
    man "$@"
}

# mappings
bindkey -s '^o' 'fzfvim^M' # Control + o -> fzfvim
bindkey -s '^f' "tmux-sessionizer\n"

# config
HISTSIZE=1000
SAVEHIST=1000
HISTFILE=~/.zsh_history

# exports
export JAVA_HOME="/usr/lib/jvm/java-21-openjdk"
export CFLAGS="-Wall -Wextra -Werror -O2"
export LC_ALL=es_ES.UTF-8
export LANG=es_ES.UTF-8
export EDITOR=/usr/bin/nvim
export XDG_CONFIG_HOME="$HOME/.config"
#-- fzf color catppuccin --
export FZF_DEFAULT_OPTS=" \
--color=bg+:#313244,bg:#1e1e2e,spinner:#f5e0dc,hl:#f38ba8 \
--color=fg:#cdd6f4,header:#f38ba8,info:#cba6f7,pointer:#f5e0dc \
--color=marker:#f5e0dc,fg+:#cdd6f4,prompt:#cba6f7,hl+:#f38ba8"
#-- path --
export LUA_PATH="$LUA_PATH;/usr/share/lua/5.4/?.lua;/usr/local/share/lua/5.4/?.lua;/usr/local/share/lua/5.4/?/init.lua;/usr/share/lua/5.4/?/init.lua;/usr/local/lib/lua/5.4/?.lua;/usr/local/lib/lua/5.4/?/init.lua;/usr/lib/lua/5.4/?.lua;/usr/lib/lua/5.4/?/init.lua;./?.lua;./?/init.lua;/home/$USER/.luarocks/share/lua/5.4/?.lua;/home/$USER/.luarocks/share/lua/5.4/?/init.lua"
export LUA_CPATH="$LUA_CPATH;/usr/local/lib/lua/5.4/?.so;/usr/lib/lua/5.4/?.so;/usr/local/lib/lua/5.4/loadall.so;/usr/lib/lua/5.4/loadall.so;./?.so;/home/$USER/.luarocks/lib/lua/5.4/?.so"

export ANDROID_HOME=$HOME/Android/Sdk

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$HOME/.scripts
export PATH=$PATH:$HOME/.config/dotfiles/bin
export PATH=$PATH:$HOME/.local/bin
export PATH=$PATH:$HOME/Aplicaciones/bin
export PATH=$PATH:$HOME/Aplicaciones/USE/bin
export PATH=$PATH:$HOME/.dotfiles/bin

# Load Angular CLI autocompletion.
# source <(ng completion script)

# export NVM_DIR="$HOME/.config/nvm"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
# [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
source /usr/share/nvm/init-nvm.sh
source <(fzf --zsh)

# bun completions
[ -s "/home/miguel/.bun/_bun" ] && source "/home/miguel/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

eval "$(zoxide init zsh)"
function sesh-sessions() {
  {
    exec </dev/tty
    exec <&1
    local session
    session=$(sesh list -t -c -z | fzf --height 40% --reverse --border-label ' SESSIONS ' --border --prompt '⚡  ')
    zle reset-prompt > /dev/null 2>&1 || true
    [[ -z "$session" ]] && return
    sesh connect $session
  }
}
bindkey -s '^f' "sesh-sessions\n"

# opencode
export PATH=/home/miguel/.opencode/bin:$PATH

# pnpm
export PNPM_HOME="/home/miguel/.local/share/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end
