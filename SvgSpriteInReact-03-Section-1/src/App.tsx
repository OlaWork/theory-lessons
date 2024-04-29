import './App.css';
import {Button} from '../src/Button';



function App() {
    return (
        <div className="App">
            <Button iconId="loveseat" style = {{backgroundColor: 'rgb(229, 169, 247)'}}/>
            <Button iconId="light-ceiling" style = {{backgroundColor: 'rgb(229, 169, 247)'}}/>
            <Button iconId="tv-retro" style = {{backgroundColor: 'rgb(229, 169, 247)'}}/>
        </div>
    );
}

export default App;

