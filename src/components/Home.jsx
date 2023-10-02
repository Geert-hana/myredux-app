import { useSelector } from "react-redux";


function Home() {

   const user = useSelector((state) => state.form)

    return (

        <div>
            <h3>Welcome{lname}</h3>
        </div>

    )
}

export default Home;