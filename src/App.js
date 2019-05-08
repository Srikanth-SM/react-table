import React from "react";
import { Column, Table, SortDirection, SortIndicator } from "react-virtualized";
import "react-virtualized/styles.css"; // only needs to be imported once

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 500,
      headerHeight: 50,
      rowHeight: 25,
      rowCount: props.list.length,
      height: 400,
      sortBy: "name",
      sortDirection: SortDirection.ASC,
      sortedList: props.list
    };
    this.headerRenderer = this.headerRenderer.bind(this);
  }

  _isSortEnabled = () => {
    const { sortedList } = this.state;
    const { rowCount } = this.state;
    return rowCount <= sortedList.length;
  };

  headerRenderer({ dataKey, sortBy, sortDirection }) {
    return (
      <div>
        name
        {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
      </div>
    );
  }

  sort = ({ sortBy, sortDirection }) => {
    this.setState({ sortBy, sortDirection });
  };
  render() {
    const {
      headerHeight,
      height,
      rowHeight,
      width,
      sortBy,
      sortDirection
    } = this.state;

    const list = this.props.list;
    let { sortedList } = this.state;

    if (this._isSortEnabled()) {
      sortedList.sort(function(a, b) {
        if (a[sortBy] > b[sortBy]) return 1;
        return -1;
      });
      sortedList =
        sortDirection === SortDirection.DESC
          ? sortedList.reverse()
          : sortedList;
    } else {
      sortedList = list;
    }
    return (
      <Table
        width={width}
        height={height}
        headerHeight={headerHeight}
        rowHeight={rowHeight}
        rowCount={this.props.list.length}
        rowGetter={({ index }) => sortedList[index]}
        sort={this.sort}
        sortBy={this.state.sortBy}
        sortDirection={this.state.sortDirection}
      >
        <Column label="Name" dataKey="name" width={100} />
        <Column width={200} label="Description" dataKey="description" />
        <Column width={200} label="age" dataKey="age" />
      </Table>
    );
  }
}
export default App;
