import React, { useEffect } from "react";
import {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SearchMovie = () =>{

    const[input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate("/searchedmovie/" + input);
    }
    return(
        <>
            <FormStyle onSubmit={submitHandler}>
                <div className="container mt-3 mb-5">
                    <input type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
                </div>
            </FormStyle>
        </>
    )
}
const FormStyle = styled.form`
    div{
        width:100%;
        position: relative;
    }
    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width:100%;
    }
`;
export default SearchMovie;