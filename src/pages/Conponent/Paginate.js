import React from "react";

const Paginate = ({ total, perPage, handlePaginate }) => {
  const number = Array.from(
    Array(Math.ceil(total / perPage)).keys(),
    (_, i) => i + 1
  );
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {number.map((num) => (
          <li className="page-item" key={num}>
            <button className="page-link" onClick={() => handlePaginate(num)}>
              {num}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
