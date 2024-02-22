#-- oh-my-zsh --
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="robbyrussell"

plugins=(git)

source $ZSH/oh-my-zsh.sh
source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
source ~/.oh-my-zsh/custom/plugins/zsh-sudo/sudo.plugin.zsh

# imports
[ -f /home/$USER/.ghcup/env ] && source /home/$USER/.ghcup/env

# aliases
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
alias lg='lazygit'

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

#-- shortcuts --
alias syd='~/Scripts/SyncDotfiles.sh'
alias img='kitty +kitten icat'
alias awm="$HOME/Scripts/runAwesomewmScript.sh"
alias segundo="cd $HOME/Universidad/segundo/"

# functions
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
  cd $XDG_CONFIG_HOME/nvim/
  nvim
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
