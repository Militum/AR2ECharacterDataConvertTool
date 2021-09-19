const requiredKeys = [
    'V_level', //CL
    'V_fate', //FATE
    'NP1', //筋力
    'NP2', //器用
    'NP3', //敏捷
    'NP4', //知力
    'NP5', //感知
    'NP6', //精神
    'NP7', //幸運
    'NP8', //HP
    'NP9', //MP
    'pc_name', //PC名
    'BSUM1R', //右手命中判定固定値
    'BSUM1L', //左手命中判定固定値
    'BSUM2R', //右手ダメージ固定値
    'BSUM2L', //左手ダメージ固定値
    'BSUM3', //回避固定値
    'BSUM4', //物理防御力
    'BSUM5', //魔法防御力
    'BSUM6', //イニシアチブ
    'BSUM7', //移動力
    'dice_meichu', //命中判定ダイス数
    'dice_attack', //攻撃力ダイス数
    'dice_kaihi' //回避ダイス数
];

function IsValidCharacterJson(data) {
    for(const index in requiredKeys) {
        const key = requiredKeys[index];
        if (!(key in data)) {
            //console.error(`key not found ${key}`);
            return false;
        }
    }
    return true;
}

// 簡易チャットパレット作成
function MakeSimpleChatPallet(data) {
    let chatPallet = `${data.BSUM3}+${data.dice_kaihi}D>=0 回避判定\n\n`;
    chatPallet += `c(-({物理防御力})) 物理ダメージ計算\n`;
    chatPallet += `c(-({魔法防御力})) 魔法ダメージ計算\n`;
    chatPallet += `c((-{物理防御力})*2) 物理ダメージ/カバー二倍\n`;
    chatPallet += `c((-{魔法防御力})*2) 魔法ダメージ/カバー二倍\n`;
    chatPallet += `:HP+ @HP回復\n`;
    chatPallet += `:HP- @HPダメージ\n`;
    chatPallet += `:HP= @HP値変更\n`;
    chatPallet += `:MP+ @MP回復\n`;
    chatPallet += `:MP- @MP消費\n`;
    chatPallet += `:FATE- @フェイト使用\n\n`;
    chatPallet += `宣言あります @セットアッププロセス\n`;
    chatPallet += `宣言なしです @セットアッププロセス\n\n`;
    chatPallet += `ムーブアクションで戦闘移動を行う。(${data.BSUM7}m)\n`;
    chatPallet += `ムーブアクションで全力移動を行う。ただしマイナーアクションは行えない (${parseInt(data.BSUM7)+5}m)\n`;
    chatPallet += `ムーブアクションで離脱を行う。ただし基本的にはマイナーアクションは行えない (5m)\n`;
    chatPallet += `移動先⇒\n`;
    chatPallet += `※ムーブアクションのスキルはここに書くと便利です \n\n`;
    chatPallet += `マイナーアクション放棄。\n`;
    chatPallet += `※マイナーアクションのスキルはここに書くと便利です \n\n`;
    chatPallet += `メジャーアクションで武器攻撃を行う。\n`;
    chatPallet += `※メジャーアクションのスキルはここに書くと便利です \n\n`;
    chatPallet += `攻撃の対象⇒\n\n`;
    chatPallet += `${data.BSUM1R}+${data.dice_meichu}D>=0 武器攻撃命中判定(右)\n`;
    chatPallet += `${data.BSUM2R}+${data.dice_attack}D 武器攻撃ダメージロール(右)\n`;
    chatPallet += `${data.BSUM1L}+${data.dice_meichu}D>=0 武器攻撃命中判定(左)\n`;
    chatPallet += `${data.BSUM2L}+${data.dice_attack}D 武器攻撃ダメージロール(左)\n`;
    chatPallet += `※メイジなどで魔術判定を行うキャラクターは、上のチャットパレットを参考に書き換えてください \n\n`;
    chatPallet += `{筋力}+2D>=0 【筋力】判定 @基本判定\n`;
    chatPallet += `{器用}+2D>=0 【器用】判定 @基本判定\n`;
    chatPallet += `{敏捷}+2D>=0 【敏捷】判定 @基本判定\n`;
    chatPallet += `{知力}+2D>=0 【知力】判定 @基本判定\n`;
    chatPallet += `{感知}+2D>=0 【感知】判定 @基本判定\n`;
    chatPallet += `{精神}+2D>=0 【精神】判定 @基本判定\n`;
    chatPallet += `{幸運}+2D>=0 【幸運】判定 @基本判定`;
    return chatPallet;
}

function ConvertJson(data) {
    let character = { kind: "character", data: {}};
    character.data.name = data.pc_name;
    character.data.memo = '';
    character.data.initiative = parseInt(data.BSUM6, 0);
    character.data.externalUrl = '';
    character.data.status = [
        {label: 'HP', value: data.NP8, max: data.NP8},
        {label: 'MP', value: data.NP9, max: data.NP9},
        {label: 'FATE', value: data.V_fate, max: data.V_fate},
        {label: '', vallue: '', max: ''},
        {label: '物理防御力', value: data.BSUM4, max: ''},
        {label: '魔法防御力', value: data.BSUM5, max: ''},
    ];
    character.data.params = [
        {label: '筋力', value: data.NP1},
        {label: '器用', value: data.NP2},
        {label: '敏捷', value: data.NP3},
        {label: '知力', value: data.NP4},
        {label: '感知', value: data.NP5},
        {label: '精神', value: data.NP6},
        {label: '幸運', value: data.NP7},
        {label: 'CL', value: data.V_level},
    ];
    character.data.iconUrl = null;
    character.data.faces = [];
    character.data.x = 0;
    character.data.y = 0;
    character.data.angle = 0;
    character.data.width = 4;
    character.data.height = 4;
    character.data.active = true;
    character.data.secret = false;
    character.data.invisible = false;
    character.data.hideStatus = false;
    character.data.color = '#888888';
    character.data.commands = MakeSimpleChatPallet(data);
    character.data.owner = null;
    return character;
}

function ConvertToCharacter(data) {
    if (!IsValidCharacterJson(data)) {
        return false;
    }
    const convertData = ConvertJson(data);
    //console.log(convertData);
    return JSON.stringify(convertData);
}

export default ConvertToCharacter;