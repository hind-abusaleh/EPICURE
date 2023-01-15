import React, { useEffect, useState } from 'react';
import ArrivalTime from '../../../helpers/ArrivalTime';
import { TimerContainer, Timer } from "./styles";

const CountDown = function (props: { preparationTime_inMins: number }) {

    const [min, setMin] = useState<number>(0);
    const [sec, setSec] = useState<number>(0);
    const [done, setDone] = useState(false);

    var x = setInterval(function () {

        var now = new Date().getTime();
        const arrival_time = ArrivalTime(props.preparationTime_inMins);
        var countDownDate = new Date(arrival_time).getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        setMin(minutes);
        setSec(seconds);

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            setDone(true);
        }
    }, 1000);
    useEffect(() => {
        setInterval;
    }, [setInterval])

    return (


        <>
            {done ?
                <p>hhaha</p>
                :
                <TimerContainer>
                    Arrive in
                    <Timer>{min}:{sec} </Timer>
                    min
                </TimerContainer>
            }
        </>

    );
};

export default CountDown;

