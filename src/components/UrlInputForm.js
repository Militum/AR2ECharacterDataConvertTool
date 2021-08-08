import React from 'react'
import CheckUrl from '../logics/UrlCheck';
import ValidationError from '../logics/ValidationError';
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
        try {
            const jsonUrl = this.state.value + ".json";
            CheckUrl(jsonUrl);
            this.setState({jsonUrl: jsonUrl});
        } catch (error) {
            if (error instanceof ValidationError) {
                alert(error.message);
            } else {
                console.error(error.message);
            }
        }
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