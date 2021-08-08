const ExtensibleCustomError = require('extensible-custom-error');

class ValidationError extends ExtensibleCustomError {
}

export const VALIDATION_ERROR_DOMAIN = 'キャラクター保管所ではないURLが入力されています'
export const VALIDATION_ERROR_ANCHOR = 'URLの末尾に「#top」等の余分な文字列が含まれています。\n#以下の文字列を削除してからもう一度お試しください'

export default ValidationError