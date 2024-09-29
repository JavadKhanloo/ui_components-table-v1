
function App() {
  return (
    <>
      <div className="p-5 h-screen bg-gray-100">
        <h1 className="text-xl mb-2">your orders</h1>
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
            <thead className="bg-gray-50 border-b2 border-gray-200">
              <tr>
                <th className="w-20 p-3 text-sm font-semibold tracking-wide text-right">No.</th>
                <th className="p-3 text-sm font-semibold tracking-wide text-right">Details</th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-right">Status</th>
                <th className="w-24 p-3 text-sm font-semibold tracking-wide text-right">Date</th>
                <th className="w-32 p-3 text-sm font-semibold tracking-wide text-right">Total</th>
              </tr>
            </thead>
             <tbody className="divide-y divide-gray-100">
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="font-bold text-blue-500 hover:underline" href="#">10001</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg opacity-50">Shipped</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2020</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="font-bold text-blue-500 hover:underline" href="#">10001</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 rounded-lg opacity-50">Cancelled</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2020</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="font-bold text-blue-500 hover:underline" href="#">10001</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">Kring New Fit office chair, mesh + PU, black</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><span className="p-1.5 text-xs font-medium tracking-wider text-green-800 bg-green-200 rounded-lg opacity-50">Delivered</span></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2020</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
              </tr>                            
            </tbody>
          </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div><span className="text-blue-500 font-bold hover:underline">#1000</span></div>
                <div className="text-gray-500">16/10/2020</div>
                <div><span className="p-1.5 text-xs font-medium tracking-wider text-yellow-800 bg-yellow-200 rounded-lg opacity-50">Shipped</span></div>
              </div>
              <div className="text-sm text-gray-700">description</div>
              <div className="text-sm font-medium text-black">200.00</div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div><span className="text-blue-500 font-bold hover:underline">#1000</span></div>
                <div className="text-gray-500">16/10/2020</div>
                <div><span className="p-1.5 text-xs font-medium tracking-wider text-gray-800 bg-gray-200 rounded-lg opacity-50">Cancelled</span></div>
              </div>
              <div className="text-sm text-gray-700">description</div>
              <div className="text-sm font-medium text-black">200.00</div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div><span className="text-blue-500 font-bold hover:underline">#1000</span></div>
                <div className="text-gray-500">16/10/2020</div>
                <div><span className="p-1.5 text-xs font-medium tracking-wider text-green-800 bg-green-200 rounded-lg opacity-50">Delivered</span></div>
              </div>
              <div className="text-sm text-gray-700">description</div>
              <div className="text-sm font-medium text-black">200.00</div>
            </div>                        

          </div>

      </div>
    </>
  );
}

export default App;
