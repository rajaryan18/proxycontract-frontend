export default function Contract({ id, name, endpoint, logs }) {
    return (
        <div className={`my-8 py-5 bg-white max-h-screen md:px-5 md:relative md:border-2 md:rounded-md`}>
            <h3 className="text-center font-bold text-2xl">{name}</h3>
            <p className="flex flex-row w-fit mx-auto my-2"><section className="text-green-500 font-semibold mr-2">Access Address </section>{endpoint}</p>
            <div>
                <ul className="mx-5">
                    {logs.map((log) => {
                        return (
                            <li className="my-5">
                                <div className="flex flex-row justify-between">
                                    <p className="flex flex-row"><section className="font-bold mr-2">Version: </section>{log.version}</p>
                                    <p className="flex flex-row"><section className="font-bold mr-2">Date: </section>{log.date}</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p className="flex flex-row"><section className="font-bold mr-2">Eth Used: </section>{log.eth} ETH</p>
                                    <p className="flex flex-row"><section className="font-bold mr-2">Block No: </section>{log.block}</p>
                                </div>
                                <p className="flex flex-row"><section className="font-bold mr-2">Commit Message: </section>{log.commit}</p>
                                <p className="flex flex-row"><section className="font-bold mr-2">Transaction Hash: </section>{log.hash}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex flex-row justify-around mx-5">
                <button className="px-6 font-bold py-2 rounded-xl bg-red-500 hover:scale-105 active:scale-95">DELETE</button>
                <button className="px-6 font-bold py-2 rounded-xl bg-blue-500 hover:scale-105 active:scale-95">UPDATE</button>
            </div>
        </div>
    );
}