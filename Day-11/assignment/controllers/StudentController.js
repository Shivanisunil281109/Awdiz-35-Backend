import StudentModel from "../models/studentSchema.js";

export const createStudent = async(req,res)=>{


const {name, age, city, course, marks } = req.body;



const newStudent = new StudentModel({
    name: name,
    age: age,
    city: city,
    course: course,
    marks: marks
});

await newStudent.save();



return res.status(201).json({
   message:"Student created successfully"
})

};



export const getAllStudents = async (req, res) => {

    const students = await StudentModel.find();

    return res.status(200).json({
        students: students
    });
};



export const operators = async (req, res) => {

    const students = await StudentModel.find({


        // marks: { $gt: 70 }
        
        // age: { $gte: 18, $lte: 22 }

        // city:{$in:["Pune","Mumbai"]}

        //   course:{$in:["BCA","BSc"]}

        // city: { $nin: ["Alibag"] }

    },

    // { name:1, marks:1, _id:0 }


    ).sort({
        marks:-1

        // marks:1

    }).limit(5);



    return res.status(200).json({
        students: students
    });
};