/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

const Paginate = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a
              href="#"
              className="page-link"
              onClick={() => paginate(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Paginate.propTypes = {
  postPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func
};

export default Paginate;
