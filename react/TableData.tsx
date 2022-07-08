import React, { useEffect, useState } from 'react';

// Styles
import styles from "./styles.css";

interface TableDataProps {
  caption: string
  columns: Array<string>
  data: Array<Array<string | CellObject>>
}

interface CellObject {
  text: string
  url: string
  newTab: Boolean
  rowTitle: string
}

const TableData: StorefrontFunctionComponent<TableDataProps> = ({ caption, columns, data }) => {
  const [openGate, setOpenGate] = useState<Boolean>(true);
  const [colWidth, setColWidth] = useState<string>("");
  const [columnsOnly, setColumnsOnly] = useState<Boolean>(false);
  const [columnsAndRows, setColumnsAndRows] = useState<Boolean>(false);

  useEffect(() => {
    if (!openGate) return;
    setOpenGate(false);
    format();
  })

  const format = () => {
    let rowObjects = 0;
    data.forEach(point => {
      point.forEach(row => {
        if (typeof row === "object") {
          if (row.rowTitle) {
            rowObjects = rowObjects + 1;
          }
        }
      })
    })

    if (rowObjects > 0) {
      setColumnsAndRows(true);
      setColWidth((100 / (columns.length + 1)) + "%");
    } else {
      setColumnsOnly(true);
      setColWidth((100 / columns.length) + "%");
    }
  }

  const handleHover = (e: any) => {
    const activeCell = e.currentTarget;

    const cellData = activeCell.dataset.cell;
    const cellRow = cellData.split("row-")[1].split("-col")[0];
    const cellCol = cellData.split("col-")[1];

    // @ts-expect-error
    const activeRow = document.querySelector(`[data-cell="row-${cellRow}-col-0"]`);

    // @ts-expect-error
    const activeCol = document.querySelector(`[data-th="${cellCol}"]`);

    if (activeRow && activeCol) {
      activeRow.classList.toggle("eriksbikeshop-tabledata-1-x-highlightHeader");
      activeCol.classList.toggle("eriksbikeshop-tabledata-1-x-highlightHeader");
    }

    if (cellCol !== "0") activeCell.classList.toggle("eriksbikeshop-tabledata-1-x-highlightCell");
  }

  const cleanLink = (link: CellObject) => <a href={link.url} target={link.newTab ? "_blank" : "_self"} className={styles.tdLink}>{link.text}</a>;

  if (columnsOnly) {
    return (
      <figure className={styles.tableDataContainer}>
        <figcaption className={styles.caption}>
          <div className={styles.captionText}>{caption}</div>
        </figcaption>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr data-tr="0" className={styles.tr}>
              {columns.map((col, colIndex) => (
                <th key={`col${colIndex}`} data-th={colIndex} style={{ width: colWidth }} className={styles.th}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((tr, trIndex) => (
              <tr key={`tr${trIndex}`} data-tr={trIndex + 1} className={styles.tr}>
                {
                  tr.map((td, tdIndex) => (
                    <td key={`td${tdIndex}`} className={styles.td}>{typeof td === "string" ? td : cleanLink(td)}</td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    )
  } else if (columnsAndRows) {
    return (
      <figure className={`${styles.tableDataContainer} ${styles.hasRows}`}>
        <figcaption className={`${styles.caption} ${styles.bottomCaption}`}>
          <div className={`${styles.captionText} ${styles.standAloneCaption}`}>{caption}</div>
        </figcaption>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr data-tr="0" className={styles.tr}>
              <th style={{ width: colWidth }} className={styles.thBlank}></th>
              {columns.map((col, colIndex) => (
                <th key={`col${colIndex}`} data-th={colIndex + 1} style={{ width: colWidth }} className={styles.th}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((tr, trIndex) => (
              <tr key={`tr${trIndex}`} data-tr={trIndex + 1} className={styles.tr}>
                {
                  tr.map((td, tdIndex) => (
                    <td key={`td${tdIndex}`} data-cell={`row-${trIndex + 1}-col-${tdIndex}`} onMouseOver={handleHover} onMouseOut={handleHover} className={styles.td}>{typeof td === "string" ? td : td.rowTitle ? td.rowTitle : cleanLink(td)}</td>
                  ))
                }
              </tr>
            ))}
          </tbody>
        </table>
      </figure>
    )
  } else {
    return <></>
  }
}

TableData.schema = {
  title: 'Guide Button',
  description: '',
  type: 'object',
  properties: {}
}

export default TableData;