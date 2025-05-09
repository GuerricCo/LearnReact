import './App.css'
import Button from './components/Button';
import Input from './components/input';

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4'>
      <Input color='red' placeholder='Nom' name='Nom' id='nom' label='Nom'/>
      <Input color='blue' placeholder='Prénom' name='prénom' id='prenom' label='Prénom'/>
      <Button label="J'ai faim" url="https://fr.react.dev/learn/passing-props-to-a-component" variant='primary'/>
      <Button label="Chien" url="https://fr.react.dev/learn/passing-props-to-a-component" variant='danger'/>
    </div>
  );
};

export default App;
