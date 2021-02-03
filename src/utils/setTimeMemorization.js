
export function setTimeMemorization(maxMinute, setMemorizationTime, setTimer, nextPage, setPageNumber) {
    let n = 0;
    let t = 0;
    let timePass = setInterval(() => {
        n = n + 1;
        if (n === 60) {
            t = t + 1;
            n = 1;
        }

        setMemorizationTime({ minute: (maxMinute-1) - t, second: 60 - n });

         if (t === maxMinute ) {
            clearInterval(timePass);
            setPageNumber(nextPage);
            setMemorizationTime({ minute: maxMinute - 1 - t, second: 60 - (n-1) });
         }
    }, 1000);

    setTimer(timePass);
}