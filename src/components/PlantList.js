import Card from './Card'
import React from "react";
import '../index.css';
export default function PlantList(){
    return (
        <div class="container">
            <div class="add-section">
                <button> 
                    Add Plant
                </button>
            </div>
            <div class="card-section">
                <Card />
                <Card />
                <Card />
            </div>

        </div>
    )
}