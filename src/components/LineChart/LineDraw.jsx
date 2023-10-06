import { LineChart, Line } from 'recharts';
  

const LineDraw = () => {
   
    const mathMarks = [
        { "student_number": 1, "math_mark": 85 },
        { "student_number": 2, "math_mark": 78 },
        { "student_number": 3, "math_mark": 92 },
        { "student_number": 4, "math_mark": 88 },
        { "student_number": 5, "math_mark": 76 },
        { "student_number": 6, "math_mark": 90 },
        { "student_number": 7, "math_mark": 82 },
        { "student_number": 8, "math_mark": 95 },
        { "student_number": 9, "math_mark": 87 },
        { "student_number": 10, "math_mark": 89 }
      ]
      


    return (
        <div>
            <LineChart>
                <Line dataKey="math" width={500} height={500} stroke='red' data={mathMarks}></Line>
            </LineChart>
        </div>
    );
};

export default LineDraw;