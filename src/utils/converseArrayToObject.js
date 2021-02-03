
 export default function converseArrayToObject (users, numberPictureByPage) {
     const numberPage = users.length/numberPictureByPage;
     let tempArr = [];
     let newArrayFragment = [];
     let newObject= {};

     for(let i=0; i<numberPage; i++) {
         tempArr = users.slice(i*numberPictureByPage, numberPictureByPage*(i+1) );
         newArrayFragment.push(tempArr);
         tempArr =[];
     }

     newArrayFragment.forEach((item, ind) => {
         newObject[ind] = item;
     });

     return newObject;
 }