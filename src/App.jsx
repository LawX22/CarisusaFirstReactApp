// import React from 'react';
import  { useState } from 'react';
import { Button } from 'react-bootstrap';
import {Card} from 'react-bootstrap';

//Functional Component
const  App = () => {

    const [count , setCount] = useState(0);
    const [TeamA , setCount0] = useState(0);
    const [Round , setCount1] = useState(0);
    const [TeamB , setCount2] = useState(0);

    return ( 
        <>
            {/* <h1 
                className="title"
                onClick= {
                    () => {
                        setCount(count + 5)
                    }
                }
            
            >
                Hello World
            </h1> */}

            {/* <Button variant="danger"
                className="title"
                onClick= {
                    () => {
                        setCount(count + 5)
                    }
                }
            >
                Click Me</Button> */}

            {/* <div className="num">{count} is
                {  (count%2 == 1) ? " odd" : " even" }
            </div> */}

            <div className='container'>
                <div className='flex'>
            <Card style= {{width:"15rem", height:"15rem"}}>
                <Card.Body className='text-center'>
                    <Card.Header>
                        <h1>Team A</h1>
                    </Card.Header>
                   < Card.Title>
                        <h1 style= {{fontSize:50}}> 
                            {TeamA}
                        </h1>
                   </Card.Title>
                   <div className='d-flex justify-content-around' >
                    <Button variant="danger"
                        onClick= {
                        () => {
                            setCount0(TeamA - 1)
                        }
                    }
                        
                    >-</Button>
                    <Button onClick= {
                        () => {
                            setCount0(TeamA + 1)
                        }
                    }
                    >+</Button>
                   </div>
                </Card.Body>
            </Card>
            </div>

            <div className='flex '>

            <Card style= {{width:"15rem", margin:"1rem"}}>
                <Card.Body className='text-center'>
                    <Card.Header>
                        <h1>Round</h1>
                    </Card.Header>
                   < Card.Title>
                        <h1 style= {{fontSize:50}}> 
                            {Round}
                        </h1>
                   </Card.Title>
                   <div className='d-flex justify-content-around' >
                    <Button variant="danger" onClick= {
                        () => {
                            setCount1(Round - 1)
                        }
                    }
                    >-</Button>
                    <Button onClick= {
                        () => {
                            setCount1(Round + 1)
                        }
                    }
                    >+</Button>
                   </div>
                </Card.Body>
            </Card>

            </div>

            <div className='flex'>

            <Card style= {{width:"15rem" , height:"15rem"}}>
                <Card.Body className='text-center'>
                    <Card.Header>
                        <h1>Team B</h1>
                    </Card.Header>
                   < Card.Title>
                        <h1 style= {{fontSize:50}}> 
                            {TeamB}
                        </h1>
                   </Card.Title>
                   <div className='d-flex justify-content-around' >
                    <Button variant="danger" onClick= {
                        () => {
                            setCount2(TeamB - 1)
                        }
                    }
                    >-</Button>
                    <Button onClick= {
                        () => {
                            setCount2(TeamB + 1)
                        }
                    }
                    >+</Button>
                   </div>
                </Card.Body>
            </Card>

            </div>
            </div>
        </>
     );
}

export default App;