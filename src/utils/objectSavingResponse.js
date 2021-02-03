
export default function objectSavingResponse(elt) {
    let arr = [];
    const obj = {};
    let iterate = 0;
    let n = 0;
    let id = 0;

    for(let i = 0; i < elt; i++) {

        arr.push("");
    }

    for(let i=0; i<elt; i++) {
        iterate = iterate+1;

        if(n=== 25) {
            id=id+1;
            n=0;
        }

        obj[`${id}-${n}`] = arr[i];
        n= n+1;
    }
    return obj;
}