import "./navebar.css";
import { CiSearch } from "react-icons/ci";
export default function serchform() {
  
  return (
    < div className="searchBox">
    <form>
      <input type="text" placeholder="Search"/>
      <button type="submit"><CiSearch/></button>
    </form>
    </div>
  )
}
