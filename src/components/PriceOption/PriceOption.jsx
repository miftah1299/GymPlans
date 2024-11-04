import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className="max-w-sm flex flex-col rounded shadow-lg bg-white m-4 p-6 transform transition duration-500 hover:scale-105">
            <div className="px-6 py-4 bg-slate-100">
                <div className="font-bold text-2xl mb-2 text-center text-slate-500">
                    {name}
                </div>
                <p className="text-gray-700 text-base text-center mb-4">
                    Price:{" "}
                    <span className="text-green-500 font-bold">
                        ${price} / month
                    </span>
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex-grow">
                <ul className="list-disc list-inside">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="text-gray-700 text-base mb-2 list-none"
                        >
                            <FaCheckCircle className="inline text-green-500 mr-2" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="px-6 pt-4 pb-2 text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Choose Plan
                </button>
            </div>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;
