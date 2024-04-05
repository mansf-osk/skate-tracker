/* eslint-disable react/prop-types */
import { useState } from "react";

// Fills the row with content, creates the row expansion if the state for it is true.
function TrickRow({ handleClick, object, expandRow }) {
  const check = object.learned ? (
    <div className="checked">&#9989;</div>
  ) : (
    <div className="not-checked">&#10060;</div>
  );

  return (
    <>
      <tr className="trick-row" onClick={() => handleClick(object)}>
        <td>{object.name}</td>
        <td>{object.difficulty}</td>
        <td>{check}</td>
      </tr>
      {expandRow ? (
        <tr className="row-expansion">
          {object.clip ? (
            <td colSpan={3}>
              <iframe
                className="clip-frame"
                width="560"
                height="315"
                src={"https://youtube.com/embed/" + object.clip}
              ></iframe>
            </td>
          ) : (
            <td colSpan={3}>No Clip Uploaded (yet)!</td>
          )}
        </tr>
      ) : null}
    </>
  );
}

// Creates a row that can be expanded by clicking on it. For each row it calls the TrickRow component.
// Manages the expansions state to re-render the row when it is clicked.
function ExpandableRow({ object }) {
  const [expandRow, setExpandRow] = useState(false);
  const handleClick = () => {
    if (expandRow) {
      setExpandRow(() => {
        return false;
      });
    } else {
      setExpandRow(() => {
        return true;
      });
    }
  };

  return (
    <TrickRow
      handleClick={handleClick}
      object={object}
      expandRow={expandRow}
    />
  );
}

// Displays table content. For each entry it checks the filters and calls the ExpandableRow component accordingly.
function ContentTable({ content, filterText, filterCheckmark }) {
  const rows = [];

  content.forEach((object) => {
    if (filterCheckmark && !object.learned) {
      return;
    }
    if (object.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<ExpandableRow object={object} key={object.id} />);
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Difficulty</th>
          <th>Learned</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

// Changes state when the filters are used so other components can re-render.
function SearchBar({
  filterText,
  filterCheckmark,
  onFilterTextChange,
  onFilterCheckmarkChange,
}) {
  return (
    <form>
      <label htmlFor="search">Filter by name</label>
      <input
        id="search"
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label className="checkbox" htmlFor="filter">Only show learned tricks</label>
      <input
        id="filter"
        type="checkbox"
        checked={filterCheckmark}
        onChange={(e) => onFilterCheckmarkChange(e.target.checked)}
      />
    </form>
  );
}

// Parent component. Manages state for the filters and calls the SearchBar and ContentTable components.
function FilterTable({ content, type }) {
  const [filterText, setFilterText] = useState("");
  const [filterCheckmark, setFilterCheckmark] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        filterCheckmark={filterCheckmark}
        onFilterTextChange={setFilterText}
        onFilterCheckmarkChange={setFilterCheckmark}
      />

      <ContentTable
        content={content}
        type={type}
        filterText={filterText}
        filterCheckmark={filterCheckmark}
      />
    </div>
  );
}

export default FilterTable;
