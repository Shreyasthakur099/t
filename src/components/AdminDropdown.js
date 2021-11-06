import { makeStyles, Paper } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";

const useStyles = makeStyles({
  table: {
    width: "70%",
    margin: "auto",
  },
  dropdown: {
    width: "40%",
    marginTop: 80,
    margin: "auto",
  },
});

const options = [
  {
    label: "IT",
    value: 0,
  },
  {
    label: "CSE",
    value: 1,
  },
  {
    label: "ECE",
    value: 2,
  },
];

const data = [
  {
    IT: [
      { criteria: 1, question: "IT1?", url: "xyz1" },
      { criteria: 1, question: "IT2?", url: "xyz2" },
      { criteria: 1, question: "IT3?", url: "xyz3" },
    ],
  },
  {
    CSE: [
      { criteria: 2, question: "CSE?", url: "xyz4" },
      { criteria: 2, question: "CSE?", url: "xyz5" },
    ],
  },
  { ECE: [{ criteria: 3, question: "ECE?", url: "xyz6" }] },
];

const AdminDropdown = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {}, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => setSelected(option)}
      >
        {option.label}
      </div>
    );
  });

  let label = JSON.parse(JSON.stringify(selected.label));

  const renderedTr = data[selected.value][label].map((result) => {
    return (
      <tr key={result.url}>
        <td data-label="Criteria">{result.criteria}</td>
        <td data-label="Question">{result.question}</td>
        <td data-label="url" class="right aligned">
          <div class="ui right floated small primary labeled icon button">
            <i class="download icon"></i> Download
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="mb-50 mt-150 mb-44 mx-16 pt-26 ">
      <div className={classes.dropdown}>
        <div className="ui form">
          <div className="field">
            <label className="label">Select a Department</label>
            <div
              onClick={() => setOpen(!open)}
              className={`ui selection dropdown ${
                open ? "visible active" : ""
              }`}
            >
              <i className="dropdown icon"></i>
              <div className="text">{selected.label}</div>
              <div className={`menu ${open ? "visible transition" : ""}`}>
                {renderedOptions}
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <Paper className={classes.table}>
        <table class="ui blue table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th>Question</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderedTr}</tbody>
        </table>
      </Paper>
    </div>
  );
};

export default AdminDropdown;
