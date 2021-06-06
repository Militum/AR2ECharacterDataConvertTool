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
    'BSUM6', //イニシアチブ
];

function IsValidCharacterJson(data) {
    for(const index in requiredKeys) {
        const key = requiredKeys[index];
        if (!(key in data)) {
            console.error(`key not found ${key}`);
            return false;
        }
    }
    return true;
}

function ConvertJson(data) {
    let character = { kind: "character", data: {}};
    character.data.name = data.pc_name;
    character.data.memo = '';
    character.data.initiative = data.BSUM6;
    character.data.externalUrl = '';
    character.data.status = [
        {label: 'HP', value: data.NP8, max: data.NP8},
        {label: 'MP', value: data.NP9, max: data.NP9},
        {label: 'FATE', value: data.V_fate, max: data.V_fate},
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
    character.data.commands = '';
    character.data.owner = null;
    return character;
}

function ConvertToCharacter(data) {
    if (!IsValidCharacterJson(data)) {
        return false;
    }
    const convertData = ConvertJson(data);
    console.log(convertData);
    return JSON.stringify(convertData);
}

export default ConvertToCharacter;