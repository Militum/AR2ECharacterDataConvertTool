import React from 'react';
import UrlInputForm from './components/UrlInputForm';
import JsonInputForm from './components/JsonInputForm';

import './style.css';

function App() {
    return (
        <div className="app-body">
            <div className="container">
                <h3>AR2E CCFOLIA用キャラ駒作成ツール(α版)</h3>
                <details>
                    <summary>使い方</summary>
                    <ul className="ul">
                        <li>キャラクター保管所のキャラクターシートのURLを入力し「表示」をクリック</li>
                        <li>「二番目の枠」に表示された文字列を全て選択してコピーし、「三番目の枠」にペースト</li>
                        <li>「クリップボードにコピーする」をクリック</li>
                        <li>ココフォリア部屋に貼り付ける</li>
                    </ul>
                </details>
                <br />
                <UrlInputForm/>
                <br />
                <JsonInputForm></JsonInputForm>
            </div>
            <p>アリアンロッド2Eは有限会社ファーイースト・アミューズメント・リサーチの著作物です</p>
        </div>
    );
}

export default App;
