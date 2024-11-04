import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);

    useEffect(() => {
        fetch("/priceOptions.json")
            .then((response) => response.json())
            .then((data) => setPriceOptions(data))
            .catch((error) =>
                console.error("Error fetching price options:", error)
            );
    }, []);

    return (
        <div className="my-10">
            <h2 className="text-3xl text-center text-slate-500 font-bold mb-8">
                Choose the plan that&apos;s right for you!!
            </h2>
            <div className="flex flex-wrap justify-center">
                {priceOptions.map((option) => (
                    <PriceOption key={option.id} option={option} />
                ))}
            </div>
        </div>
    );
};

export default PriceOptions;
