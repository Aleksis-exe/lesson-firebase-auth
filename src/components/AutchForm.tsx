import React from 'react'
import scss from './autch_form.module.scss'

interface IAutch {
  firebase: Function
}

function AutchForm({ firebase }: IAutch) {
  const [Login, setLogin] = React.useState('')
  const [Passwor, setPasswor] = React.useState('')
  const submit = () => {
    console.log('user', Login, Passwor)
    firebase(Login, Passwor)
  }
  return (
    <div className={scss.autchform}>
      <div>
        <label>login</label>
        <input type="text" onChange={(e) => setLogin(e.target.value)} />
      </div>
      <div>
        <label>password</label>
        <input type="text" onChange={(e) => setPasswor(e.target.value)} />
      </div>
      <div>
        <input type="submit" value="submit" onClick={submit} />
      </div>
    </div>
  )
}
export default AutchForm
