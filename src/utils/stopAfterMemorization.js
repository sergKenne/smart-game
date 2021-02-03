
export default function stopAfterMemorization(maxTime,minutesOut, secondOut, setMemoTime, setTimer, nextPage, setPageNumber) {
    let n = 0;
    let t = 0;
    let completeMin = 0;

    let timer = setInterval(() => {
        n = n + 1;

        if(t === 0 && maxTime.sec === n - 1) {
            t = t +1;
            n = 1;
        } else if (t !== 0 && n === 60) {
			completeMin++;
		} else if (t !== 0 && n === 61) {
			t = t +1;
			n = 1;
		}

        minutesOut.current.innerText = ((maxTime.min- t) < 10 ) ? `0${maxTime.min - t}` : maxTime.min - t ;
        secondOut.current.innerText = (
        	t === 0 && n <= maxTime.sec
				? (maxTime.sec - n) < 10
					? `0${maxTime.sec - n}`
					: maxTime.sec - n
				: n > 50
					? `0${60 - n}`
					: 60 - n) ;
        setMemoTime(prevState => ({
            minutes: completeMin !== t ? t - 1 : t,
            seconds: t === 0 ? n : (maxTime.sec + n)%60
        }));

        if(t === 0 && maxTime.min === 0 && n === maxTime.sec
			|| t === maxTime.min && (n === 60 && maxTime.sec === 0 || completeMin === maxTime.min && maxTime.min !== 0)) {
            clearInterval(timer);
            setPageNumber(nextPage);

            setMemoTime(prevState => ({
                minutes: completeMin !== t ? t - 1 : t,
                seconds:t === 0 ? n : (maxTime.sec + n)%60
            }));
        }

    }, 1000);

    setTimer(timer);

}