// regle n°1 : lorsque vous créer un component et que celui)ci compore iniquement un code html (jsx), on écrira le component  comme la situation n°2 et 3

// recgle n°2 : on ne mettra pas de () lorsqu'on ecrit que de l'html quand le code est court

// recgle n°3 :  on mettra des parenthèses lorsqu'on à un code plus long

// recgle n°4 :lorsque notre component contient du code JS, il faut mettre des accolades {} et faire un return de notre html (et on ajoute des () si le code est long) comme dans le cas 1

// règle n°6 : Toujours retourner du JSX avec un élément parent et unique qui contient plusieur éléments ou un élément  comme dans la situation 4 

// fragment = fauce div utiliser pour éviter de faire une div inutile >>> <></> 

// situation 1
export const MonsterGreen = () => {
  const color = 'Green';
  return <div>Le Monster est {color}</div>;
};

// situation 2
export const MonsterDring = () => <div>Le Monster est cooollll</div>;

// situation 3
export const MonsterLagwe = () => (
  <div>
    <h1>OKKKKK</h1>
    <p>CA VAAAAA</p>
  </div>
);

// situation 4
export const MonsterLustre = () => (
    <> 
    {/* on ecrit un commentaire dans jsx de cette façon */}
    <div>Lolita</div>
    <div>Bus</div>
    </>
  );