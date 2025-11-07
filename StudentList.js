import React from "react";

const StudentList = () => {
  // Array of student objects
  const students = [
    { id: 1, name: "Riya", course: "React", marks: 88 },
    { id: 2, name: "John", course: "Node.js", marks: 92 },
    { id: 3, name: "Sara", course: "MongoDB", marks: 76 },
    { id: 4, name: "Amit", course: "Express", marks: 81 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📋 Student List (Using map and key)</h2>

      <table
        border="1"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "60%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
        Each student row is rendered using the <strong>map()</strong> function and has a unique <strong>key</strong> prop.
      </p>
    </div>
  );
};

export default StudentList;
