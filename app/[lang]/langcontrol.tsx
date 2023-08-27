'use client'

import { locales } from './api/locales'


export default function LangControl({ lang }: { lang: string }) {
  return (
    <div className='lang-select'>
      <select
        name="Language"
        id="lang-select"
        defaultValue={lang}
        onChange={(evt) => {
          const _path = location.pathname
          const _newPathArr = location.pathname.split('/')
          _newPathArr[1] = evt.currentTarget.value
          const _newPath = _newPathArr.join('/')
          location.replace(location.href.replace(_path, _newPath))
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
    </div>
  )
}