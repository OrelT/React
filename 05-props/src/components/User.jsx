const User = ({name, age, comment}) => (
    <div className="py-2 mx-4 mb-3 border-b">
        <h1 className="text-2xl font-bold">OKKKKK {name}</h1>
        <h2>{age < 25 ? 'Tu es trop jeune pour ce contenu de qualité' : "Voici le lien vers La boullette de Diams"}</h2>
        <p className="mt-2">{comment}</p>

    </div>
)

export default User;
// la pour le moment on a pas encore vu la fonction state pour pouvoir incrementer 
// https://medium.com/swlh/understanding-information-flow-in-react-data-down-action-up-b6c792a8b010