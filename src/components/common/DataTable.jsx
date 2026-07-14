export default function DataTable({

    columns,

    children,

}) {

    return (

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-slate-800">

                        <tr>

                            {columns.map((column) => (

                                <th
                                    key={column}
                                    className="px-6 py-4 text-left font-semibold"
                                >

                                    {column}

                                </th>

                            ))}

                        </tr>

                    </thead>

                    <tbody>

                        {children}

                    </tbody>

                </table>

            </div>

        </div>

    );

}