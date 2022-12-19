import './App.css';
import { Greet } from './components/Greet';
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { LoggedIn } from "./components/state/LoggedIn";

function App() {
    const personName = {
        first: 'Bruce',
        last : 'Wayne'
    };

    const nameList = [
        {
            first: 'Bruce',
            last : 'Wayne'
        },
        {
            first: 'Clark',
            last : 'Kent'
        },
        {
            first: 'Princess',
            last : 'Diana'
        }
    ];

    return (
        <div className="App">
            <Greet name='Arvic' isLoggedIn={true} />
            <hr/>
            <Person name={personName}/>
            <hr/>
            <PersonList names={nameList}/>
            <hr/>
            <Status status='error'/>
            <hr/>
            <Heading>Placeholder text</Heading>
            <hr/>
            <Oscar>
                <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
            </Oscar>
            <hr/>
            <Button
                handleClick={(event, id) => {
                    console.log('Button clicked: ', event, id);
                }}
            />
            <hr/>
            <Input value='' handleChange={event => console.log(event.target.value)}/>
            <hr/>
            <Container styles={{ border: '1px solid black', padding: '1rem' }}/>
            <hr/>
            <LoggedIn/>
        </div>
    )
}

export default App
