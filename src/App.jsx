import Time from "./Timeline"
import './App.css'

const App =()=>{
    return(
        <div className="container">
            <h1 className="Head">TimeLine </h1>
            <Time year = "2004" event = "This year is my born "/>
            <Time year = "2008" event = "This year I am go to Brat"/>
            <Time year = "2012" event = "This is I am go to Hostel"/>
            <Time year = "2023" event ="This year I am come to Himachal Pradesh"/>
        </div>
    )
}
export default App