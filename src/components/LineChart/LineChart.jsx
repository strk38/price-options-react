import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarksData = [
        { id: 1, name: "John", math: 85, science: 78, history: 92 },
        { id: 2, name: "Alice", math: 78, science: 85, history: 90 },
        { id: 3, name: "David", math: 90, science: 92, history: 85 },
        { id: 4, name: "Emily", math: 82, science: 80, history: 88 },
        { id: 5, name: "Michael", math: 88, science: 85, history: 90 },
        { id: 6, name: "Sophia", math: 75, science: 78, history: 80 },
        { id: 7, name: "Daniel", math: 92, science: 90, history: 95 },
        { id: 8, name: "Olivia", math: 79, science: 82, history: 85 },
        { id: 9, name: "Matthew", math: 83, science: 88, history: 90 },
        { id: 10, name: "Emma", math: 87, science: 90, history: 88 }
    ]

    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="science" stroke="yellow"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;