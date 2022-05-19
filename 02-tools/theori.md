
----------------------------------------------------
Prettier : formateur par defaut 

npm init -y

npm i -D prettier

eviter de le mettre par défaut (les mettre dans chaque dossier dans le quel on le veux)

npm i -D eslint eslint-config-prettier

eslint (erreur) et prettier (afichage) se combine bien car 

---------------------
> dossier :
.prettierrc
{}
// fichier de configuration 
----------------------------------------------------

dossier .eslintrc 
{
  "extends": ["eslint:recommended", "prettier", "prettier/react"],
  "plugins": [],
  "parseOptions": {
    "ecmaversion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
}

----------------------------------------

rajouter 
"format": "prettier \"src/**/*.{js,html}\"  --write",
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",

    dans le packadge.jsons

"scripts": {
    "format": "prettier \"src/**/*.{js,html}\"  --write",
    "lint": "eslint \"src/**/*.{js,jsx}\" --quiet",
    "test": "echo \"Error: no test specified\" && exit 1"
  },


--------------------------------------------------
npm i react react-dom

npm i -D parcel

npm run lint

--------------------------------------------------

Met une base react avec tout ce dont on a besoin :
npx degit https://github.com/remadex/tpk-react-base-tmp.git . 
yes

le degit viens recupérer un depot git, sans la liéson en ligne 

.vscode deplacer et le mettre à la rassigne

