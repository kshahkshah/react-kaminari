import React, { findDOMNode, Component, PropTypes } from 'react';

export default class Pagination extends Component {
  render() {
    const { current_page, total_pages, total_count } = this.props;

    var windowSize = 4;

    if (current_page > 1) {
      var firstPage = (
        <span className="first">
          <a href='#' rel='first' onClick={() => this.props.onPaginationClick(1)}>&laquo; First</a>
        </span>
      )
    } else {
      var firstPage = '';
    }

    if (!(current_page - 1) <= 0) {
      var previousPage = (
        <span className="previous">
          <a href='#' rel='previous' onClick={() => this.props.onPaginationClick(current_page - 1)}>&lsaquo; Prev</a>
        </span>
      )
    } else {
      var previousPage = '';
    }

    var pageWindow = [];
    var i = current_page - windowSize;

    while(i < current_page) {
      if (i >= 1) {
        pageWindow.push(i);
      }
      i++;
    }

    pageWindow.push(current_page);

    var i = current_page+1;
    while((i <= (current_page + windowSize)) && (i <= total_pages)) {
      pageWindow.push(i);
      i++;
    }

    if (current_page > windowSize + 1) {
      var leftEllipsis = <span className="page gap">&hellip;</span>
    } else {
      var leftEllipsis = ''
    }

    var currentWindow = [];

    pageWindow.map(function(page) {
      if (current_page == page) {
        var link = page;
      } else {
        var link = <a href='#' onClick={() => this.props.onPaginationClick(page)}>{page}</a>
      }

      currentWindow.push(
        <span className="page" key={'page-' + page}>
          {link}{' '}
        </span>
      )
    }, this)

    if (current_page + 1 <= total_pages) {
      var nextPage = (
        <span className="next">
          <a href='#' rel='next' onClick={() => this.props.onPaginationClick(current_page + 1)}>Next &rsaquo;</a>
        </span>
      )
    } else {
      var nextPage = '';
    }

    if (current_page != total_pages) {
      var lastPage = (
        <span className="last">
          <a href='#' rel='last' onClick={() => this.props.onPaginationClick(total_pages)}>Last &raquo;</a>
        </span>
      )
    } else {
      var lastPage = '';
    }

    if (current_page + windowSize < total_pages) {
      var rightEllipsis = <span className="page gap">&hellip;</span>
    } else {
      var rightEllipsis = ''
    }

    return (
      <nav className="pagination">
        {firstPage}
        {' '}
        {previousPage}
        {' '}
        {leftEllipsis}
        {' '}
        {currentWindow}
        {' '}
        {rightEllipsis}
        {' '}
        {nextPage}
        {' '}
        {lastPage}
      </nav>


    );
  }
}

Pagination.propTypes = {
  current_page: PropTypes.number.isRequired,
  total_pages:  PropTypes.number.isRequired,
  total_count:  PropTypes.number.isRequired
};
