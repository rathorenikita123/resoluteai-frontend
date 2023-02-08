import axios from "axios";

export const addStudent = async (student) => {
  const response = await axios.post("http://localhost:8000/addstudent", student);
  return response.data;
};

export const viewStudent = async () => {
  const response = await axios.get("http://localhost:8000/");
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await axios.delete(`http://localhost:8000/delete/${id}`);
  return response.data;
};

export const updateStudent = async (id, student) => {
  const response = await axios.put(
    `http://localhost:8000/update/${id}`,
    student
  );
  return response.data;
};


