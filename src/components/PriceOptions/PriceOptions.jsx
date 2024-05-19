import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions =
        [
            {
                "id": 1,
                "name": "Basic Membership",
                "features": [
                    "Access to cardio equipment",
                    "Access to weightlifting area",
                    "Access to locker room",
                    "Basic fitness assessment"
                ],
                "price": 30
            },
            {
                "id": 2,
                "name": "Standard Membership",
                "features": [
                    "Access to all basic membership features",
                    "Access to group fitness classes",
                    "Personalized workout plan",
                    "Nutritional guidance"
                ],
                "price": 50
            },
            {
                "id": 3,
                "name": "Premium Membership",
                "features": [
                    "Access to all standard membership features",
                    "Access to sauna and steam room",
                    "Access to swimming pool",
                    "Complimentary personal training session"
                ],
                "price": 80
            }
        ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }</div>
        </div>
    );
};

export default PriceOptions;