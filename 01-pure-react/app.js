// creation d'un methode stocker dans const App
// 
// bibli 1

const App = () => {

    const myClass = "bg-red-500";

    return React.createElement(

        "div",
        {},
        [
            React.createElement(
            "h2",
            {className: myClass},
            "Its OKAY"
            ),

            React.createElement(
            "h1",
            {},
            "Hello word"
            )

        ]
    )
}
 // class est un mots reserver dans js, c'est pour ça qu'on met className
//  ma div peut contenir plusieur éléments, un éléments h1 et un éléments h2 

// dynamique éléments créer direnct dans des 

// bibli 2

// virtuel dom, gros objets js qui créer des éléments dans le virtual dom et faire le rendu dans notre page html 

ReactDOM.render(React.createElement(App), document.getElementById('root'));

