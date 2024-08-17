import React, { useState } from "react";
import {Box, Grid, CardHeader , Button, CardContent, Card, TextField } from '@mui/material';
import "./Calendar.css";

/**
 * 
 * Le but de ce component est de permettre à l'utilisateur de créer un événement.
 * Il renvoi simplement vers son parent la création d'un event (mise à jour de l'état Events)
 * Il a besoin d'un bouton "check Room" qui utilisera une API pour renvoier l'ensemble des salles dispo sur la plage indiqué.
 */

export default function Calendar ({events, setEvents}) {
    const daysOfWeek = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
    const monthOfYear = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const currentDate = new Date();

    const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
    const [selectedDate, setSelectedDate] = useState(currentDate);
    const [eventStartTime, setEventStartTime] = useState({hours: currentDate.getHours(), minutes :currentDate.getMinutes()});
    const [eventEndTime, setEventEndTime] = useState({hours: '00', minutes :'00'});
    const [eventText, setEventText] = useState('');
    const [eventTitle, setEventTitle] = useState('');

    //Permet d'obtenir le dernier jour du mois pour définir si le mois est de 30 ou 31 jours + année bisexstile
    const daysInMonth = new Date(currentYear, currentMonth +1, 0).getDate()
    
    //Permet d'obtenir le premier jour du mois pour savoir le jour de la semaine
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

    const prevMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
        setCurrentYear((prevYear) =>(currentMonth === 0 ? prevYear - 1 : prevYear));
    }
    const nextMonth = () => {
        setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
        setCurrentYear((prevYear) =>(currentMonth === 11 ? prevYear + 1 : prevYear));
    }
    
    const handleDayClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day)
        const today = new Date()
        if(clickedDate >= today){
            setSelectedDate(clickedDate)
            setEventStartTime({hours: '00', minutes :'00'})
            setEventEndTime({hours: '00', minutes :'00'})
            setEventText('')
            setEventTitle('')
        }
    }

    const handleSubmit = () => {
        const newEvent = {
            date: selectedDate,
            timeStart: eventStartTime.hours.padStart(2,'0') +':'+ eventStartTime.minutes.padStart(2,'0'),
            timeEnd: eventEndTime.hours.padStart(2,'0') +':'+ eventEndTime.minutes.padStart(2,'0'),
            text: eventText,
            title: eventTitle
        }
        setEvents([...events, newEvent])
        setEventStartTime({hours: '00', minutes :'00'})
        setEventEndTime({hours: '00', minutes :'00'})
        setEventText('')
        setEventTitle('')
    }
    return (
        <div className="calendar">
            <div className="select-date">
                <h1 className="heading">Calendar</h1>
                <div className="navigate-date">
                    <h2 className="month">{monthOfYear[currentMonth]},</h2>
                    <h2 className="year">{currentYear}</h2>
                    <div className="buttons">
                        <i className="bx bx-chevron-left" onClick={prevMonth}></i>
                        <i className="bx bx-chevron-right" onClick={nextMonth}></i>
                    </div>
                </div>
                <div className="weekdays">
                    {daysOfWeek.map((day) => (
                        <span key={day}>{day}</span>
                        ))}
                </div>
                <div className="days">
                    {[...Array(firstDayOfMonth).keys()].map((_, index) =>(
                            <span key={'empty-${index}'}/>
                        ))}
                    {[...Array(daysInMonth).keys()].map((day) => (
                        <span key={day+1} className={day + 1 === selectedDate.getDate() && currentMonth === selectedDate.getMonth() && currentYear === selectedDate.getFullYear() ? 'current-day' :''} onClick={() => handleDayClick(day +1)}>{day+1}</span>
                    ))}
                </div>
            </div>
            <div className="add-info">
            <h1 className="heading">Information</h1>
                <div className="time-input">
                    <div className="start-time">
                        <text>Heure de début :</text>
                        <div>
                            <input 
                                type ="number" 
                                name="hours" 
                                min={0} 
                                max={24} 
                                className="hours" 
                                value={eventStartTime.hours} 
                                onChange={(e)=>setEventStartTime({...eventStartTime, hours :e.target.value})}
                            />
                            <input 
                                type ="number" 
                                name="minutes" 
                                min={0} max={60} 
                                className="minutes" 
                                value={eventStartTime.minutes} 
                                onChange={(e)=>setEventStartTime({...eventStartTime, minutes :e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="end-time">
                        <text>Heure de fin :</text>
                        <div>
                            <input 
                                type ="number" 
                                name="hours" 
                                min={0} 
                                max={24} 
                                className="hours" 
                                value={eventEndTime.hours} 
                                onChange={(e)=>setEventEndTime({...eventEndTime, hours :e.target.value})}
                            />
                            <input 
                                type ="number" 
                                name="minutes" 
                                min={0} max={60} 
                                className="minutes" 
                                value={eventEndTime.minutes} 
                                onChange={(e)=>setEventEndTime({...eventEndTime, minutes :e.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <div className="title">
                    <TextField  
                        placeholder="Title event (Maximum 60 characters)" 
                            value={eventTitle} 
                            onChange={(e)=> {
                                if (e.target.value.length <= 60) {
                                    setEventTitle(e.target.value)
                                }
                            }}>
                    </TextField>
                </div>
                <div className="description">
                    <input  
                        placeholder="Description" 
                        value={eventText} 
                        onChange={(e)=> setEventText(e.target.value)}></input>
                </div>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        
        </div>
    );
}
