import './App.css';
import React, { useState } from 'react';
import AddStudentForm from './components/AddStudentForm';
import Modal from './components/Modal';
import PaginatedData from './components/PaginatedData';
import SearchBar from './components/SearchBar';
import StudentLists from './components/StudentLists';
import TodoList from './components/TodoList';
import MultiStepForm from './pages/MultiStepForm';

function App() {
  const [students, setStudents] = useState([]);
  const [query, setQuery] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  // const { isDarkTheme } = React.useContext(useTheme);

  return (
   
     
      <div className="App" >
        <h1>Student Management System</h1>

        {/* FOrm submission functionality */}
        <AddStudentForm onAdd={addStudent} />
        <hr/>

        {/* search functionalitys */}
        <SearchBar setQuery={setQuery} />

        {/* Listing Functionality */}
        <StudentLists students={students} query={query} />

        {/* Modal functionality */}
        <button onClick={() => setModalOpen(true)}>Show Student Details</button>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          {selectedStudent ? (
            <div>
              <h2>{selectedStudent.name}</h2>
              <p>{selectedStudent.email}</p>
            </div>
          ) : (
            <p>No student selected</p>
          )}
        </Modal>

        {/* Todo List functionality */}
        <TodoList />

        {/* pagination functionality */}
        <PaginatedData />

        {/* multiform */}
        <MultiStepForm />
      </div>
    
    
  );
}

export default App;
