import "./sort.css";
import Input from "../../components/Input";
import Price from "../Price/Price";

function sort() {
    const sorted = title.sort((a,b)=>{
        const isReversed = (sortType === 'asc')? 1: -1;
        return isReversed * a.title.localCompare(b.title)
    });
    return (
        
      
    );
  }
  
  export default sort;