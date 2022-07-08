
import React, { ReactChildren } from 'react';

// Styles
import styles from "./styles.css";

interface TableDataProps {

}

const TableData: StorefrontFunctionComponent<TableDataProps> = ({ }) => {

  return (
    <div className={styles.tableDataContainer}>
      Table Data
    </div>
  )
}

TableData.schema = {
  title: 'Guide Button',
  description: '',
  type: 'object',
  properties: {}
}

export default TableData;