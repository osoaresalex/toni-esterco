import React from 'react';
import "./table.css";
import {pixelToRem, fonts, colors} from "../../template/template-params";

function Table({columns, registers, onRowClick, isMobile}) {
  const textPadding = isMobile ?
    `${pixelToRem(16)} 0 ${pixelToRem(16)} ${pixelToRem(14)}`
    : `${pixelToRem(20)} 0 ${pixelToRem(20)} ${pixelToRem(14)}`;

  const headerPadding =  isMobile?
    `${pixelToRem(10)} 0 ${pixelToRem(10)} 6.2rem`
    : `${pixelToRem(10)} 0 ${pixelToRem(10)} ${pixelToRem(14)}`;

  const styles = {
    text: {
      ...fonts.text,
      padding: textPadding,
      borderBottom: `${isMobile ? pixelToRem(1) : pixelToRem(2)} solid ${colors.primary}`,
    },
    header: {
      ...fonts.header,
      backgroundColor:
      colors.primary,
      padding: headerPadding,
    }
  };

  function renderRow(register, columns, registerIndex) {
    return columns
      .map((column, index) => {
        return (
          <td key={index + registerIndex} style={styles.text}>
            {column.renderFunction ? column.renderFunction(register) : register[column.field]}
          </td>
        );
      });
  }

  return (
    <table className="table">
      <thead>
      <tr>
        {
          columns.map(column => <th key={column.label} style={styles.header}>{column.label}</th>)
        }
      </tr>
      </thead>
      <tbody>
      {
        registers.map((register, index) => (
            <tr key={index}
                onClick={() => onRowClick(register)}>{renderRow(register, columns, index)}
            </tr>
          )
        )
      }
      </tbody>
    </table>
  );
}

export default Table;
