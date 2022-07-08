
import React, { ReactChildren, useEffect, useState } from 'react';

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
}


const TableData: StorefrontFunctionComponent<TableDataProps> = ({ caption, columns, data }) => {
  const [openGate, setOpenGate] = useState<Boolean>(true);

  useEffect(() => {
    if (!openGate) return;
    console.clear();
    cleanData();
  })

  const cleanData = () => {
    data.forEach(tr => {
      tr.forEach(td => {
        console.log(td);
      })
    })
  }

  const cleanLink = (link: CellObject) => <a href={link.url} target={link.newTab ? "_blank" : "_self"} className={styles.tdLink}>{link.text}</a>;

  return (
    <figure className={styles.tableDataContainer}>
      <figcaption className={styles.caption}>
        <div className={styles.captionText}>{caption}</div>
      </figcaption>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {columns.map((col, colIndex) => (
              <th key={colIndex} data-col={colIndex} className={styles.th}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(tr => (
            <tr className={styles.tr} data-fake={tr}>
              {
                tr.map(td => (
                  <td className={styles.td}>{typeof td === "string" ? td : cleanLink(td)}</td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  )
}

TableData.schema = {
  title: 'Guide Button',
  description: '',
  type: 'object',
  properties: {}
}

export default TableData;