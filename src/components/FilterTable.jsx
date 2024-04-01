/* eslint-disable react/prop-types */
import { useState } from "react";

function TrickRow({ handleClick, object, expandRow, check }) {
  return (
    <>
      <tr style={{ cursor: "pointer" }} onClick={() => handleClick(object)}>
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
                src={object.clip}
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

function ExpandableRow({ object, type }) {
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

  const check = object.learned ? (
    <div className="checked">&#9989;</div>
  ) : (
    <div className="not-checked">&#10060;</div>
  );

  if (type === "tricks") {
    return (
      <>
        <TrickRow
          handleClick={handleClick}
          object={object}
          expandRow={expandRow}
          check={check}
        />
      </>
    );
  }
}

function ContentTable({ content, type, filterText, filterCheckmark }) {
  const rows = [];

  content.forEach((object) => {
    if (filterCheckmark && !object.learned) {
      return;
    }
    if (object.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push(<ExpandableRow object={object} type={type} key={object.name} />);
  });
  return (
    <table>
      <thead>
        <tr>
          {type === "tricks" ? (
            <>
              <th>Name</th>
              <th>Difficulty</th>
              <th>Learned</th>
            </>
          ) : null}
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  type,
  filterText,
  filterCheckmark,
  onFilterTextChange,
  onFilterCheckmarkChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={filterCheckmark}
          onChange={(e) => onFilterCheckmarkChange(e.target.checked)}
        />
        {type === "tricks" ? <>Only show learned tricks</> : null}
      </label>
    </form>
  );
}

function FilterTable({ content, type }) {
  const [filterText, setFilterText] = useState("");
  const [filterCheckmark, setFilterCheckmark] = useState(false);

  return (
    <div>
      <SearchBar
        type={type}
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
