const sample = [
    {
        id: 102,
        name: "Proxy",
        endpoint: "0x78uihghfdre4r56tyu",
        log: [
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            },
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            }
        ]
    },
    {
        id: 103,
        name: "Proxy",
        endpoint: "0x78uihghfdre4r56tyu",
        log: [
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            },
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            }
        ]
    },
    {
        id: 104,
        name: "Proxy",
        endpoint: "0x78uihghfdre4r56tyu",
        log: [
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            },
            {
                version: '1.0.1',
                commit: "First Commit",
                eth: '12',
                block: '64567',
                hash: '0xtygsjfbud',
                date: '12 June'
            }
        ]
    }
];

import { useState } from 'react';
import Contract from './Contract';

export default function Contracts() {
    // const [expandContract, setExpandContract] = useState(-1);
    const [currContract, setCurrContract] = useState({
        id: -1,
        name: "",
        endpoint: "",
        log: []
    });

    function setCurrentContract(newid) {
        for(let i=0;i<sample.length;i++) {
            if(sample[i].id === newid) {
                setCurrContract({
                    id: newid,
                    name: sample[i].name,
                    endpoint: sample[i].endpoint,
                    log: sample[i].log
                });
                // setExpandContract(id);
                break;
            }
        }
    }
    return (
        <div className="my-10 mx-5 overflow-hidden p-2 md:w-3/4">
            <h1 className="mx-2 text-teal-600 text-3xl font-bold md:text-4xl lg:text-5xl">Contracts</h1>
            <div className='md:flex md:flex-row'>
                <ul className='my-8 rounded-lg md:w-1/3'>
                    {sample.map((contract, key) => {
                        return (
                            <div>
                                <li onClick={() => setCurrentContract(contract.id)} className={`text-lg pl-7 pr-2 py-5 font-bold underline hover:cursor-pointer hover:bg-gray-400 md:border-black ${currContract.id === contract.id ? 'md:border-r-0 bg-gray-500' : 'md:border-r-2 bg-gray-300'}`}><section>{contract.name}</section><section></section></li>
                                <div className={`md:hidden ${currContract && 'slide-down'}`}>
                                    {currContract.id === contract.id && <Contract id={currContract.id} name={currContract.name} endpoint={currContract.endpoint} logs={currContract.log} />}
                                </div>
                            </div>
                        );
                    })}
                </ul>
                <div className='hidden md:block md:w-full'>
                    {currContract.id !== -1 && <Contract id={currContract.id} name={currContract.name} endpoint={currContract.endpoint} logs={currContract.log} />}
                </div>
            </div>
        </div>
    );
}