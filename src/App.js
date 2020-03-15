import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function App() {
     let [isDisplayed, setIsDisplayed] = React.useState(false);
     return (
        <div>
            <Button onClick={() => setIsDisplayed(!isDisplayed)} > Open Popup </Button>
            <Popup isDisplayed={isDisplayed}
                   handleClose={setIsDisplayed}
                   title='Popup window'>
                this is a test
            </Popup>
        </div>
     );
}

function Popup(props) {
    return (
        <div className='popup-overlay' style={{display: props.isDisplayed ? 'initial' : 'none'}}>
            <Card className='popup'>
                <Card.Header><Card.Title>{props.title}</Card.Title></Card.Header>
                <Card.Body>{props.children}</Card.Body>
                <Card.Footer>
                    <Button onClick={() => props.handleClose(false)}>Close</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default App;
