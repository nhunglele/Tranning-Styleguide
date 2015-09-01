# Build styleguide page
# require:
- Install node js
- Install Ruby and rails.
- Install bundler: sudo apt-get install bundler

1. cd Traning-Styleguide
2. npm install
3. Install Bundler: -> gem install bundler
4. Run bundler: -> bundle install
5. gulp


# Infomation need know.
- icoomoon: http://icomoon.io/
- Bundler -> http://bundler.io/
- Twig -> http://twig.sensiolabs.org/
- Susy -> http://susy.readthedocs.org/en/latest/install/ or http://susy.oddbird.net/
- Gulp -> http://gulpjs.com/
- Conver font: http://www.fontsquirrel.com/tools/webfont-generator


##Note
# If PermissionError then fixed: use sudo.

# If install bundle error: An error occurred while installing json (1.8.3)
# Fixed 3 step:
# 1: sudo gem install json -v '1.8.2'
# 2: sudo apt-get install ruby-dev
# 3: sudo apt-get install libsqlite3-dev

# if run Gulp error Waiting...Fatal error: watch ENOSPC
# Fixed -> echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p