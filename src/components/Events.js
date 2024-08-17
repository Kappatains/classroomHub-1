import React from "react";
import {CardHeader , CardContent, Card } from '@mui/material';
import "./Events.css";

/**
 * 
 * Le but du components et de modéliser sous forme de card un événement
 * 
 * Un événement ce caractérise par plusieurs attributs :
 * - Titre de l'event
 * - Heure de début de l'event
 * - Heure de fin de l'event
 * - Descriptif de l'event
 * - Lieu de l'event
 */

export default function ({events}) {
    var title = "Meeting Title"
    const listEvents = events.map((event) =>{
        return (
            <Card className="event-card">
                <CardHeader title={event.title}/>
                    <CardContent className="card-content">
                        {/* {event.date} */}
                        <div>{event.timeStart}-{event.timeEnd}</div>
                        <div>{event.room}</div>
                        {/* <div>{event.creator}</div>
                        <div>{event.text}</div> */}
                        
                    </CardContent>
            </Card>
        );
    })
    return <div className="list-events">{listEvents}</div>
}