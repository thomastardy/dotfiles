module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    // TODO check if required 'ack',
    // TODO check if required 'ag',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    // TODO check if required 'readline', // ensure gawk gets good readline
    // TODO check if required 'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    // TODO check if required 'gifsicle',
    // TODO check if required 'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    // TODO check if required 'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    // TODO check if required 'httpie',
    // jq is a sort of JSON grep
    // TODO check if required 'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    // TODO check if required 'mas',
    // Install some other useful utilities like `sponge`
    // TODO check if required 'moreutils',
    'nmap',
    // TODO check if required 'openconnect',
    // TODO check if required 'reattach-to-user-namespace',
    // better/more recent version of screen
    // TODO check if required 'homebrew/dupes/screen',
    // TODO check if required 'tmux',
    // TODO check if required 'todo-txt',
    // TODO check if required 'tree',
    // TODO check if required 'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    // TODO check if required 'watch',
    // Install wget with IRI support
    'wget --enable-iri',
    'maven',
    'netcat',
    'ssh-copy-id',
    'sshpass',
    'telnet'
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
    //'vlc',
    // 'xquartz',
    'alfred',
    'appcleaner',
    'fantastical',
    'keepassxc',
    'keepingyouawake',
    'qlcolorcode',
    'qlmarkdown',
    'qlprettypatch',
    'qlstephen',
    'quicklook-json',
    'sourcetree',
    'sublime-text',
    'viscosity',
    'vnc-viewer',
    'whatsapp'
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
    // ,'yo'
  ]
};
