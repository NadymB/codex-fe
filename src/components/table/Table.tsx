"use client";

import { FC } from "react";

interface Props {
  columns: Array<string>;
  data: Array<any>;
}

export const Table: FC<Props> = ({ columns, data }) => {
  return (
    <table className="w-full overflow-x-auto">
      <thead>
        <tr>
          {columns.map((header, index) => (
            <th
              className={`text-white ${index === 0 ? "text-left" : "text-right"} text-[15px] font-semibold min-w-[150px]`}
              key={index}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {row.map((val: any, index: number) => (
              <td
                className={`text-white ${index === 0 ? "text-left" : "text-right"} py-1.5 min-w-[150px]`}
                key={index}
              >
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
