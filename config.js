module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    // TODO tardy check if required 'ack',
    // TODO tardy check if required 'ag',
    // alternative to `cat`: https://github.com/sharkdp/bat
    // TODO tardy check if required 'bat',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    'fzf',
    // todo-txt check if required 'readline', // ensure gawk gets good readline
    // TODO tardy check if required 'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    // TODO tardy check if required 'gifsicle',
    // TODO tardy check if required 'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    // TODO tardy check if required 'gnu-sed --with-default-names',
    // upgrade grep so we can get things like inverted match (-v)
    'grep --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    // TODO tardy check if required 'httpie',
    // jq is a sort of JSON grep
    // TODO tardy check if required 'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    // TODO tardy check if required 'mas',
    // Install some other useful utilities like `sponge`
    // TODO tardy check if required 'moreutils',
    'nmap',
    // TODO tardy check if required 'openconnect',
    'pcre',
    // TODO tardy check if required 'reattach-to-user-namespace',
    // better/more recent version of screen
    // TODO tardy check if required 'homebrew/dupes/screen',
    // TODO tardy check if required 'tmux',
    // TODO tardy check if required 'todo-txt',
    // TODO tardy check if required 'tree',
    // TODO tardy check if required 'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    // TODO check if required 'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'maven',
    'netcat',
    'ssh-copy-id',
    'https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb',
    'telnet'
    // 'yarn'
  ],
  cask: [
    //'adium',
    //'amazon-cloud-drive',
    //'atom',
    // 'box-sync',
    //'comicbooklover',
    //'diffmerge',
    'docker', // docker for mac
    //'dropbox',
    //'evernote',
    // 'flux',
    // 'gpg-suite',
    //'ireadfast',
    'iterm2',
    // 'little-snitch',
    // 'macbreakz',
    // 'micro-snitch',
    // 'signal',
    //'macvim',
    // 'sizeup',
    //'sketchup',
    'slack',
    'the-unarchiver',
    //'torbrowser',
    //'transmission',
    // 'visual-studio-code',
    'vlc',
    // 'xquartz',
    '3xcphone',
    'alfred',
    'appcleaner',
    'fantastical',
    'intel-power-gadget',
    'intellij-idea',
    'keepassxc',
    'keepingyouawake',
    // 'homebrew/cask-drivers/logitech-gaming-software',
    'parallels',
    'qlcolorcode',
    'qlmarkdown',
    'qlprettypatch',
    'qlstephen',
    'quicklook-json',
    'sourcetree',
    'sublime-text',
    'viscosity',
    'vnc-viewer',
    'whatsapp',
    'aerial',
    'adoptopenjdk',
    'virtualbox',
    'minikube',
    'postman'
  ],
  gem: [
  ],
  npm: [
    // 'antic',
    // 'buzzphrase',
    // 'eslint',
    // 'instant-markdown-d',
    // 'generator-dockerize',
    // 'gulp',
    'npm-check-updates',
    // 'prettyjson',
    // 'trash',
    'vtop'
    // ,'yo',
    '@angular/cli'
  ]
};
