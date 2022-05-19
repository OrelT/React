https://fr.reactjs.org
docs < liens cdn (a droit) 

> liens externe : 
(React et ReactDOM sont tous deux accessibles depuis un CDN.) > les 2 premiers liens

<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>

a mettre das le body 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Pure react app</title>
</head>
<body>
    <div id="root">
        not rendered
    </div>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="app.js"></script>
</body>
</html>

-----------------------------------------------------
>>> est ce que volta est installer si pas faire ce qui suit

 - volta 
Volta 1.0.7
The JavaScript Launcher ⚡

    To install a tool in your toolchain, use `volta install`.
    To pin your project's runtime or package manager, use `volta pin`.

USAGE:
    volta [FLAGS] [SUBCOMMAND]

FLAGS:
        --verbose    Enables verbose diagnostics
        --quiet      Prevents unnecessary output
    -v, --version    Prints the current version of Volta
    -h, --help       Prints help information

SUBCOMMANDS:
    fetch          Fetches a tool to the local machine
    install        Installs a tool in your toolchain
    uninstall      Uninstalls a tool from your toolchain
    pin            Pins your project's runtime or package manager
    list           Displays the current toolchain
    completions    Generates Volta completions
    which          Locates the actual binary that will be called by Volta
    setup          Enables Volta for the current user / shell
    run            Run a command with custom Node, npm, and/or Yarn versions
    help           Prints this message or the help of the given subcommand(s)

installer volta : 

 - volta install live-server

l'ouvrir :
 - live-serve

 -----------------------------------------------------

clear cache pour vidé le cache qu'il reste sur une page 

-----------------------------------------------------

id="root" c'est que c'est du react ou du vue.js

----------------------------------------------------

npm init -y
npm i -D prettier

----------------------------------------------------
https://fr.reactjs.org/docs/cdn-links.html