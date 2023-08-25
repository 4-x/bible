'use client'

import { locales } from './api/locales'


export default function LangControl({lang}) {
  return (
    <select
      name="Language"
      id="lang-select"
      defaultValue={lang}
      onChange={(evt) => {
        const _path = location.pathname
        console.log('path',_path)
        const _newPathArr = location.pathname.split('/')
        console.log(_newPathArr)
        _newPathArr[1] = evt.currentTarget.value
        console.log(_newPathArr)
        const _newPath = _newPathArr.join('/')
        console.log('old href', location.href)
        console.log('new path', _newPath)
        location.replace(location.href.replace(_path,_newPath))
      }}
    >
      {locales.map((_lang, i) => {
        return (
          <option
            key={i}
            value={_lang}
          >
            {_lang}
          </option>
        )
      })}
    </select>
  )
}