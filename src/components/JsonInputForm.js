import React from 'react'
import IsJsonString from '../logics/IsJsonString';
import ConvertToCharacter from '../logics/ConvertToCharacter';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../style.css';

/**
 * 変換元のJSONを入力するフォーム
 */
class JsonInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", clipboardCopyData: ""};
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const newValue = event.target.value;
        this.setState({value: newValue});
        if (!IsJsonString(newValue)) {
            return;
        }
        const convertJson = ConvertToCharacter(JSON.parse(newValue));
        if (!convertJson) {
            alert('入力情報ではキャラクター駒に変換ができません。\n入力データを再度お確かめください。');
            return;
        }
        this.setState({clipboardCopyData: convertJson});
    }

    render() {
        return (
            <div>
                <textarea 
                    value={this.state.value}
                    placeholder="上の枠に表示された文字列({}で囲まれているやつ)を全てこの枠にコピーしてください"
                    onChange={this.onChange}
                    className="textarea"
                />
                <br/>
                <CopyToClipboard
                    text={this.state.clipboardCopyData}
                    onCopy={() => alert('クリップボードにコピーしました。CCFOLIAのルームに貼り付けてください')}
                >
                    <button className="button">クリップボードにコピーする</button>
                </CopyToClipboard>
            </div>
        );
    }
}

export default JsonInputForm;