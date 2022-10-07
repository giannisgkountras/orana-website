import React, { useEffect, useState } from "react";
import "./VerticalCarousel.css";

const VerticalCarousel = () => {
    const [selectedIndex, setSelectedIndex] = useState({ index: 0, item: 1, angle: 0 });

    let cellCount = 3;
    let cellSize = 120;
    const theta = 360 / cellCount;
    const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prev) => {
                switch (prev.item) {
                    case 3:
                        return { index: prev.index + 1, item: 1, angle: theta * (prev.index + 1) * -1 };
                    default:
                        return { index: prev.index + 1, item: prev.item + 1, angle: theta * (prev.index + 1) * -1 };
                }
            });
        }, 1500);

        return () => {
            clearInterval(interval);
        };
    });

    return (
        <div className="scene">
            <div
                className="carousel"
                style={{ transform: `translateZ(${-radius}px) rotateX(${selectedIndex.angle}deg)` }}>
                <div className={selectedIndex.item === 1 ? "carousel__cell cell_selected" : "carousel__cell"}>
                    E-shops
                </div>
                <div className={selectedIndex.item === 2 ? "carousel__cell cell_selected" : "carousel__cell"}>
                    Websites
                </div>
                <div className={selectedIndex.item === 3 ? "carousel__cell cell_selected" : "carousel__cell"}>
                    Mobile Apps
                </div>
            </div>
        </div>
    );
};

export default VerticalCarousel;
