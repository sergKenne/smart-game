function arrOfObject(arr) {

    const arrMap = arr.map(item => {
        const el = item.trim().split(" ");
        let el2 = "";
        for(let j=1; j<el.length; j++) {
            if(el[j].length>0){
                el2 = el[j];
                break;
            }
        }

        return {
            firstName: el[0],
            lastName: el2
        }
    })

    return  arrMap;

}

export default arrOfObject;