import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Section, Title, Text, Grid, GridElement, Image} from './Clients.style.js';

function Clients(props) {
    const [clients, setClients] = useState([])
    const [count, setCount] = useState(0);
    const clientsPerPage = 12

    useEffect(() => {
        axios
        .get('./data/clients.json')
        .then(response => {
            setClients(response.data.map((element, index) => {return {...element, "index": index < clientsPerPage? index : -1, animate: false}}))
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);

            const lastClient = clients.find(client => client.animate)
            if(lastClient) lastClient.animate = false
        
            const newClient = clients.filter(client => client.index === -1)[Math.floor(Math.random() * (clients.length - clientsPerPage))]
            const oldClient = clients.filter(client => client.index !== -1)[Math.floor(Math.random() * (clientsPerPage))]

            newClient.index = oldClient.index
            newClient.old = oldClient.image
            newClient.animate = true
            oldClient.index = -1
        }, 3000);
        return () => clearInterval(interval)
      }, [clients, count]);

    return (
        <Section>
            <Title>Clients</Title>
            <Text>We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</Text>
            <Grid>
                {
                    clients
                        .filter(client => client.index !== -1)
                        .sort((a, b) => a.index - b.index)
                        .map((client) => (
                            <GridElement key={client.id}>
                                {client.animate &&
                                    <Image className={`second-image ${client.animate? 'animate' : ''}`} src={client.old}/>
                                }
                                <Image className={`first-image ${client.animate? 'animate' : ''}`} src={client.image} alt={`${client.name} logo`}/>
                            </GridElement>
                        ))
                }
            </Grid>
        </Section>
    );
  }
  
  export default Clients;
  