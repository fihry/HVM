import { useState } from 'react';
export default function Pagination() {
  const [Page,setPage]=useState(0);
  const addnb=()=>{setPage(Page+1)}
  const rmvnb=()=>{setPage(Page-1)}
  return(
   <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <button onClick={addnb}>__ + __</button>
   <h1>{Page}</h1>
   <button onClick={rmvnb}>__ - __</button>
   </div>
  )
}