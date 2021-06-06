import React from 'react'
import CheckUrl from '../logics/UrlCheck';
import '../style.css';

/**
 * キャラクターシートのURL入力フォーム
 */
class UrlInputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", jsonUrl: ""};
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(event) {
        this.setState({value: event.target.value});
    }

    onClick(event) {
        event.preventDefault();
        const jsonUrl = this.state.value + ".json";
        const checkd = CheckUrl(jsonUrl);
        if (!checkd) {
            alert("無効なURLです");
            return;
        }
        this.setState({jsonUrl: jsonUrl});
    }

    render() {
        return (
            <div>
                <label>
                    <span>キャラクターシートのURL:</span>
                    <input type="text" value={this.state.value} onChange={this.onChange} className="el-like-input" />
                </label>
                <button id="button" className="button" onClick={this.onClick}>表示</button>
                <br/>
                <iframe title="json" src={this.state.jsonUrl} className="frame"></iframe>
            </div>
        );
    }
}

export default UrlInputForm;