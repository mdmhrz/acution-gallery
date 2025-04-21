import React from 'react';

const Test = () => {
    return (
        <div className="overflow-hidden rounded-md border border-black">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2">Header 1</th>
            <th className="border border-black px-4 py-2">Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black px-4 py-2">Row 1</td>
            <td className="border border-black px-4 py-2">Data</td>
          </tr>
          <tr>
            <td className="border border-black px-4 py-2">Row 2</td>
            <td className="border border-black px-4 py-2">Data</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default Test;