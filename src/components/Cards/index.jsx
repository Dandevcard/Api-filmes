import React from "react";
import { Container } from "./styles";
import logo from "../../assets/img.png"
import award from "../../assets/award.png"
export default function Cards({ movieData }) {
    return (
        <Container>
            <div className="img-container">
                <img src={logo} alt="" />
            </div>
            <div className="wrapper-geral">
                <div className="wrapper-items">
                    <h2>{movieData.name}</h2>
                    <p>{movieData.runtimeInMinutes} min</p>
                </div>
                <div className="award">
                    <img src={award} alt="img-premio" />
                    <p>2 win & 6 nominations</p>
                </div>
                <div className="wrapper-budget">
                    <div>
                        <h4>Budget</h4>
                        <p>$94M</p>
                    </div>
                    <div>
                        <h4>Revenue</h4>
                        <p>$920M</p>
                    </div>
                </div>
            </div>

        </Container>
    )
}