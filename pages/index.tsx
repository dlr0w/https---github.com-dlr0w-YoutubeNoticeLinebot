import React, { useState, useEffect } from 'react';

export default function home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/youtube');
            const data = await response.json();
            setData(data);
        };

        fetchData();
    }, []);//第二引数に[]を渡す事で、useEffectフックの中の処理は初期レンダリング時のみ実行

    //取得したデータを表字
    return (
        <div>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}
