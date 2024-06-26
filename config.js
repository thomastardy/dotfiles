module.exports = {
    brew: [
        // http://conqueringthecommandline.com/book/ack_ag
        // TODO tardy check if required 'ack',
        // TODO tardy check if required 'ag',
        // https://github.com/wting/autojump
        // TODO tardy check if required 'autojump',
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
        // TODO tardy check if required 'readline', // ensure gawk gets good readline
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
        'jq',
        // Mac App Store CLI: https://github.com/mas-cli/mas
        'mas',
        // Install some other useful utilities like `sponge`
        // TODO tardy check if required 'moreutils',
        'nmap',
        'netcat',
        'nvm',
        // 'node', use nvm
        // TODO tardy check if required 'openconnect',
        // TODO tardy check if required 'reattach-to-user-namespace',
        // better/more recent version of screen
        // TODO tardy check if required 'homebrew/dupes/screen',
        // TODO tardy check if required 'tmux',
        // TODO tardy check if required 'todo-txt',
        // TODO tardy check if required 'tree',
        // TODO tardy check if required 'ttyrec',
        // better, more recent vim
        'vim --with-client-server --with-override-system-vi',
        // TODO check if required 'watch',
        // Install wget with IRI support
        'wget --enable-iri',
        'maven',
        'maven-completion',
        'netcat',
        'ssh-copy-id',
        'https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb',
        'telnet',
        'handbreak',
        'ffmpeg',
        'mkvtoolnix',
        'mp4v2',
        'mpv',
        'imagemagick',
        'jhead',
        // 'gradle',
        'postgresql@12',
        'git'
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
        'arq',
        // 'xquartz',
        'alfred',
        // 'fantastical',
        'intellij-idea',
        'macpass',
        'keepassxc',
        'keepingyouawake',
        // 'homebrew/cask-drivers/logitech-gaming-software',
        'parallels',
        'qlmarkdown',
        'quicklook-json',
        // 'sublime-text',
        'visual-studio-code',
        'viscosity',
        'vnc-viewer',
        'whatsapp',
        // 'openjdk', installed by sdkman https://sdkman.io/
        // 'temurin', installed by sdkman https://sdkman.io/
        // 'zulu8', installed by sdkman https://sdkman.io/
        // 'zulu11', installed by sdkman https://sdkman.io/
        // 'temurin11', installed by sdkman https://sdkman.io/
        // 'temurin17', installed by sdkman https://sdkman.io/
        'virtualbox',
        // 'postman',
        'handbreak',
        'maestral',
        'firefox',
        'font-awesome-terminal-fonts',
        'font-fontawesome',
        'makemkv',
        'slack',
        'teamviewer',
        'tibco-jaspersoft-studio',
        // 'bear',
        // 'devonthink',
        'mountain',
        // 'microsoft-teams', install manually
        'google-chrome',
        'homebrew/cask-drivers/fujitsu-scansnap-home',
        'grandperspective',
        'obsidian',
        'rocket',
        'zoom',
        'airserver',
        'apache-directory-studio',
        'netnewswire',
        'acorn',
    ],
    gem: [],
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
        // 'vtop',
        // ,'yo',
        '@angular/cli'
    ],
    mas: [
        '975937182', // Fantastical (3.3.7)
        '409183694', // Keynote (11.0.1)
        '441258766', // Magnet (2.6.0)
        '1295203466', // Microsoft Remote Desktop (10.6.1)
        '742239147', // Project Viewer 365 (20.66.1083)
        // '942265351', // gardenPlanner (3.7.81)
        '1444383602', // GoodNotes (5.6.52)
        '408981434', // iMovie (10.2.3)
        '497799835', // Xcode (12.4)
        '463362050', // PhotoSweeper (3.9.3)
        '409201541', // Pages (11.0)
        '682658836', // GarageBand (10.4.3)
        '409203825', // Numbers (11.0)
        '639968404', // Parcel - Delivery Tracking    (7.2.2)
    ]
};
