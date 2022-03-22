import React from "react";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
function RatingComponents(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {/* {[...Array(5)].map((star,i)=>{
                const ratingValue=i+1;
                return <label>
                    <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                    <BsStarFill size="100" color={ratingValue<= (hover||rating) ? "#ffcc3e":"#54545489"}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                    />
                    </label> 
            })} */}

      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          
             
            <label>
            <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />              
              <BsStarFill
                size="70"
                color={
                  ratingValue <= (hover || rating) ? "#ffcc3e" : "#54545489"
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
              
            </label>
          
        );
       
      })}
      <p>rating is :{rating}</p>
     <p>
      {(() => {
        switch (rating) {
          case 1:   return "bad";
          case 2: return "ok";
          case 3:  return "good";
          case 4:  return "very good";
          case 5:  return "Excelent";
          default:      return "none";
        }
      })()}
    </p>

      
    </div>
  );
}

export default RatingComponents;
