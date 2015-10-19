# react-kaminari

A not pretty example of how to do pagination using Rails models and React. Works just like the Kaminari pagination helper and outputs the same HTML classes.

Provide the component with `current_page`, `total_pages`, and `total_count`

Please note the Redux/Flux specific usage of `onClick={() => this.props.onPaginationClick(page_number)`.

You will need to define that function yourself, likely on a higher component, which I leave it to the implementor to handle for their specific application needs.
