/*
    author: SynthesisDu (https://github.com/SynthesisDu)
    software: WebStorm 2021.2, Node.js v14.17.5
    datetime: 2021.8.13 07:58
    filename: users.js
    git_repo: https://github.com/VMAxCoding/VMAClubSystem
 */

/**
 * 根据字段值搜索匹配的行
 * @param searchFieldName 要搜索的字段名
 * @param searchFieldValue 要搜索的字段值
 * @returns {{password: string, name_eng: string, mail: string, lv: string, id: string, name_cn: string, info: string}[]} 由行数据对象组成的列表
 */
exports.searchRowByField = function (searchFieldName, searchFieldValue) {
    let row = {
        id: '',
        name_cn: '',
        name_eng: '',
        mail: '',
        password: '',
        lv: '',
        info: ''
    };
    return new Array(row);
}


