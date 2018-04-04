import React, { findDOMNode, Component } from 'react';
import PropTypes from "prop-types";

export default class Pagination extends Component {
  render() {
    const { current_page, total_pages, total_count } = this.props;

    var windowSize = 4;

    if (current_page > 1) {
      var firstPage = (
        <li className="pagination-first">
          <a href='#' rel='first' onClick={() => this.props.onPaginationClick(1)}>First</a>
        </li>
      )
    } else {
      var firstPage = '';
    }

    if (!(current_page - 1) <= 0) {
      var previousPage = (
        <li className="pagination-previous">
          <a href='#' rel='previous' onClick={() => this.props.onPaginationClick(current_page - 1)}>Prev</a>
        </li>
      )
    } else {
      var previousPage = '';
    }

    var pageWindow = [];
    var i = current_page - windowSize;

    while (i < current_page) {
      if (i >= 1) {
        pageWindow.push(i);
      }
      i++;
    }

    pageWindow.push(current_page);

    var i = current_page + 1;
    while ((i <= (current_page + windowSize)) && (i <= total_pages)) {
      pageWindow.push(i);
      i++;
    }

    if (current_page > windowSize + 1) {
      var leftEllipsis = <li className="ellipsis"></li>
    } else {
      var leftEllipsis = ''
    }

    var currentWindow = [];

    pageWindow.map(function (page) {
      if (current_page == page) {
        var link = page;
      } else {
        var link = <a href='#' onClick={() => this.props.onPaginationClick(page)}>{page}</a>
      }

      currentWindow.push(
        <li className={(current_page == page) ? "current" : ""} key={'page-' + page}>
          {link}{' '}
        </li>
      )
    }, this)

    if (current_page + 1 <= total_pages) {
      var nextPage = (
        <li className="pagination-next">
          <a href='#' rel='next' onClick={() => this.props.onPaginationClick(current_page + 1)}>Next</a>
        </li>
      )
    } else {
      var nextPage = '';
    }

    if (current_page != total_pages) {
      var lastPage = (
        <li className="pagination-last">
          <a href='#' rel='last' onClick={() => this.props.onPaginationClick(total_pages)}>Last</a>
        </li>
      )
    } else {
      var lastPage = '';
    }

    if (current_page + windowSize < total_pages) {
      var rightEllipsis = <li className="ellipsis"></li>
    } else {
      var rightEllipsis = ''
    }

    return (
      <ul className="pagination">
        {firstPage}
        {previousPage}
        {leftEllipsis}
        {currentWindow}
        {rightEllipsis}
        {nextPage}
        {lastPage}
      </ul>
    );
  }
}

Pagination.propTypes = {
  current_page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  total_count: PropTypes.number.isRequired
};
