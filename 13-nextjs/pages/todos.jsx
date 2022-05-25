import Link from "next/link";
import Layout from "../component/Layout";

export default function Todos({data}) {
  return <Layout title='Todos' currentPage='todos'>
      <h2 className="pb-8 text-2xl"> Listing des todos</h2>
      <ul>
         {data.map((todo) =>(
             <li key={todo.id} className="flex items-center justify-between bg-indigo-400 rounded-md px-2 py-3 mb-8">{todo.title}
             <Link href={`/todos/${todo.id}`}>vers le todo</Link> 
             </li>
             ))} 
      </ul>
  </Layout>;
}
// route = nom du fichier = route qu'on veux afficher

export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}