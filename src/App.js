import './App.css';
import Book from './components/Book';
import FormBook from './pages/FormBook';

export default function App() {

  let livros = [
    { id: 1, title: "O senhor dos aneis" },
    { id: 2, title: 'O poderoso chefão' },
    { id: 3, title: 'Carrie, A estranha' },
    { id: 4, title: 'Carrie, A estranha' },
    { id: 5, title: 'Platoon' }
  ]

  return (
    <div>

      <BookList />

      <FormBook />
      <h1>Livros</h1>

      <div>
        {livros.map(i => <Book Key={i.id} id={i.id} title={i.title} />)}
      </div>

    </div>

  );
}
