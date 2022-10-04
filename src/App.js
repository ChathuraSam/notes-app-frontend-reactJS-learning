import './App.css';
import { useState, useEffect } from 'react';
import NoteCard from './components/NoteCard';
import NoteForm from './components/NoteForm';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import NotesHeader from './components/NoteHeader';




function App() {

    

    // useEffect is using to fetch
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); 

    useEffect(()=>{
        setLoading(true)
        fetch("https://llfixidlgb.execute-api.us-east-1.amazonaws.com/dev/")
        .then((response)=> response.json())
        .then((data) => setData(data))// we can use short hand, .then(setData)
        .then(console.log(data))
        .then(()=>setLoading(false))
        .catch(setError) // this is equal to .catch((error) => setError(error))
    }, []) // empty array is for make the request only once

    if(loading) return <h1>Loading...</h1>
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(!data) return null;
    return(
        <Container>
        <NotesHeader/>
        <NoteForm/>
        {
            data.body.Items.map((item, key)=> (
            <NoteCard title={item.title} description={item.description} key={key}/>
        ))
        }
        </Container>
        
    );
}

export default App;
