
import './App.css';
import Form from './components/Form';
import users from './data/users.json';

export default function App() {

  return (
    <>
      <ul>
        {users.map((user) => (<li key={user.id}>{user.name}</li>)
        )}
      </ul>
      <Form />
    </>
  )
}


