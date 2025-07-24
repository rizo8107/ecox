import React from 'react';
import type { TableData } from '../types';

interface TableProps {
  data: TableData;
}

export const Table: React.FC<TableProps> = ({ data }) => {
  const { headers, rows } = data;
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 -mx-1 px-1">
      <table className="w-full min-w-full sm:min-w-[500px] md:min-w-[700px] divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="odd:bg-white dark:odd:bg-slate-900 even:bg-slate-50 dark:even:bg-slate-800/50">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 align-top break-words">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
