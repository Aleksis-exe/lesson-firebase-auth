import React from 'react'
import scss from './signout.module.scss'
interface ISignOut {
  signOut: Function
}

export const SignOutBt = ({ signOut }: ISignOut) => {
  return (
    <div className={scss.btSignOut}>
      <button onClick={() => signOut()}>closet</button>
    </div>
  )
}
export default SignOutBt
