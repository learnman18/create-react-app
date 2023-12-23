import React, { useEffect, useState } from "react";
import axios from "axios";


function AxiosExample (){

    const [num , setNum] = useState(1);
    const [selectVal , setSelectVal] = useState(null);

    useEffect(()=>{
        async function getPokemon (){
                var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res);
            setSelectVal(res.data);
        }
        getPokemon()
    },[num])

    if (num === ""){
        return setNum(1);
    }
    if (!selectVal) {
        console.log(selectVal);
        return null
    }



    return(
        <>
            <p>You have selected {num}</p>
            <p>You have selected {selectVal.name}</p>
            <p>It has total {selectVal.moves.length} Moves</p>
            <input placeholder="Enter any value" onChange={(event)=>{
                setNum(event.target.value);
            }}/>
        </>
    )
}

export default AxiosExample




// export default function App() {
//   const [post, setPost] = useState('');

//   const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

//   console.log("post" ,post);


//  useEffect(() => {
//     async function myFun (){
//         // if (post){
//         const res =  await axios.get(baseURL);
//         setPost(res.data)
//         // }
//         // else{
//         //     setPost(null)  
//         // }
//     }
//     myFun();
//   }, []);

// //   if (!post) return null;

//   return (
//     <div>
//       <h1>Title :- {post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }