import React from "react";

import { Line } from "react-chartjs-2";

const data: any = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 65, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};

export default function Chart() {
    return (
        <div style={{ width: "80%", margin: "0 auto", marginTop: "20px" }} >
            <Line data={data} />
        </div>
    );
}
