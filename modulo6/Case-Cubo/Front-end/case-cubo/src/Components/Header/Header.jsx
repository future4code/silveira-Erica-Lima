import React, { useState } from "react"
import axios from "axios";
import { ButtonStyled, ContainerHaeder, InputMaterial } from "./styled";

function Header () {
    const [firstName, setFirstName] = useState("")
    const [lasterName, setLasterName] = useState("")
    const [participation, setParticipation] = useState("")

    

    const participationApi = (event) =>{
        event.preventDefault();
        const body = {
           first_name :firstName,
           laster_name : lasterName,
            participation: participation
        }
        axios.post(`https://projeto-case-cubo.herokuapp.com/participation/create`,body).then((res)=>{
            setFirstName("");
            console.log(res)
            setLasterName("");
            setParticipation("");
            
        })
        .catch((err)=>{
            console.log(err);
         
            
              
        })
        
    }
    
    return(
        <ContainerHaeder>
            <form onSubmit={participationApi}>
               
                    <InputMaterial
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    type={"text"}
                    placeholder={"First Name"}
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                    />
                
                
                <InputMaterial
                    id="outlined-basic"
                    label="Laster Name"
                    variant="outlined"
                    type={"text"}
                    placeholder={"Laster Name"}
                    value={lasterName}
                    onChange={(event) => setLasterName(event.target.value)}
                    required
                    />

                <InputMaterial
                    id="outlined-basic"
                    label="Participation"
                    variant="outlined"
                    type={"text"}
                    placeholder={"Participation"}
                    value={participation}
                    onChange={(event) => setParticipation(event.target.value)}
                    required
                    />

<ButtonStyled variant="outlined"  type="submit">Send</ButtonStyled>
            </form>
        </ContainerHaeder>
    )
}

export default Header;