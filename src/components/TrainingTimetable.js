import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { fi } from 'date-fns/locale';

import "./TrainingTimetable.css";

const locales = {
    'fi': fi
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

/* Tähän voi merkata kalenteritapahtumat, kuukausi aina yhden vähemmän eli tammikuu 0 jne. */

const myEventsList = [
    { start: new Date(2021, 5, 3, 18), end: new Date(2021, 5, 3, 19), title: " 18 Junnut" },
    { start: new Date(2021, 5, 6, 19), end: new Date(2021, 5, 6, 20), title: "19 Sennut" },
    { start: new Date(2021, 5, 6, 20), end: new Date(2021, 5, 6, 21), title: "20 Ulkotreenit" },
    { start: new Date(2021, 5, 6, 21), end: new Date(2021, 5, 6, 22), title: "21 Hallituksen kokous" },
    { start: new Date(2021, 5, 10, 18), end: new Date(2021, 5, 10, 19), title: " 18 Junnut" },
    { start: new Date(2021, 5, 11, 15), end: new Date(2021, 5, 11, 16), title: " 15 Alkeiskurssi" },
    { start: new Date(2021, 5, 12, 12), end: new Date(2021, 5, 12, 13), title: "12 Vyökoe" },
    { start: new Date(2021, 5, 22, 20), end: new Date(2021, 5, 22, 21), title: "20 Vyökoe" },
];

const TrainingTimetable = () => {
    return (
        <div className="Calendar">
            <h2>Harjoitusajat</h2>
            <Calendar
                culture={"fi"}
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                views={['month', 'day']}
                messages={{
                    date: 'Päivämäärä',
                    time: 'Aika',
                    event: 'Tapahtuma',
                    allDay: 'Koko päivä',
                    week: 'Viikko',
                    work_week: 'Arkipäivät',
                    day: 'Päivä',
                    month: 'Kuukausi',
                    previous: 'Edellinen',
                    next: 'Seuraava',
                    yesterday: 'Eilen',
                    tomorrow: 'Huomenna',
                    today: 'Tänään',
                    agenda: 'Agenda',
                    noEventsInRange: 'Ei tapahtumia tällä aikavälillä.',
                    showMore: function showMore(total) {
                        return "+" + total + " lisää";
                    }
                }}
            />
        </div>
    );
};

export default TrainingTimetable;