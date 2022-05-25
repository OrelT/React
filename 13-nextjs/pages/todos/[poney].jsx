
import Layout from "../../component/Layout";

export default function Todos({data}) {
  return <Layout title='Todos' currentPage='todos'>
    <h1 className="text-4xl">{data.title}</h1>
  </Layout>;
}
// route = nom du fichier = route qu'on veux afficher

export async function getServerSideProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.poney}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}