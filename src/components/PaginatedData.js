import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginatedData = () => {
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);
    const [itemsPerPage] = useState(5); 


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3001/students`);
      const students = response.data;

      // Calculate total pages
      const totalPages = Math.ceil(students.length / itemsPerPage);

      // Slice data for pagination
      const paginatedData = students.slice((page - 1) * itemsPerPage, page * itemsPerPage);

      setData(paginatedData);
      setTotalPages(totalPages);
    };

    fetchData();
  }, [page]);


  return (
    <div>
      <ul>
        {data.map(student => (
          <li key={student.id}>{student.name} - {student.email}</li>
        ))}
      </ul>
      <div>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedData;
