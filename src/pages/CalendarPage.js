import React, { useState } from "react";
import "./CalendarPage.css";
import {Box, Grid, CardHeader , Button, CardContent, Card } from '@mui/material';
import Calendar from "../components/Calendar";
import Events from "../components/Events";


/**
 * 
 * Le but de la page est d'afficher juste la liste des events à venir.
 * 
 * L'ajout d'event doit ce faire via un bouton qui fait apparaitre le menu Calendar => nom à revoir
 * Voir si le calendar apparait en side et pousse les events ou si popup qui apparait au dessus
 * 
 * Cette page doit contenir :
 * - Un bouton qui peut faire apparait le module Calendar
 * - La liste des events prévu pour la journée initialement (useEffect avec call API pour récupérer la liste des events de la journée/semaine)
 * 
 * 
 * A voir si l'on utilise cette page pour faire le check up de la disponiblité visuelle d'une salle.
 */
//Contient l'état de la liste des events pour les afficher





const CalendarPage = () => {
    const [events, setEvents] = useState([]);
    const [displayCalendar, setDisplayCalendar] = useState(false)

    const handleSubmit = () => {
        const newEvent = {
            date: '19 May',
            timeStart: "00:59",
            timeEnd: "01:59",
            text: 'Ceci est un text test',
            title: 'Ceci est un titre test',
            room: 'Room Test'
        }
        setEvents([...events, newEvent])
    }
    let calendar = (
            <Calendar
                events={events}
                setEvents ={setEvents}
            />)
    function handleCalendarOpen(){
        setDisplayCalendar(!displayCalendar)
    }


    return  <div className="calendar-page"> 
                <div className="calendar-module">
                    {displayCalendar ? 
                    <Calendar
                        events={events}
                        setEvents ={setEvents}
                        setDisplayCalendar = {setDisplayCalendar}
                    /> 
                    : ''}
                </div>
                <div className="event-list">
                    <Events
                        events ={events}
                    />
                </div>
                <button className="add-event-button" onClick={() => handleSubmit()}> +
                </button>
                <button className="add-calendar-button" onClick={() => handleCalendarOpen()}> + | Calendar
                </button>
                
            </div>
}

export default CalendarPage