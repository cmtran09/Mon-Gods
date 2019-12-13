import React, { useState } from 'react'
import axios from 'axios'


const formInitialState = {
  username: '',
  email: '',
  profilePicture: '',
  password: '',
  passwordConfirmation: ''
}

const errorInitialState = {
  errors: ''
}

const Register = (props) => {

  const [form, updateForm] = useState(formInitialState)

  const [error, setError] = useState(errorInitialState)

  function handleInput(e) {
    updateForm({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, errors: '' })
    console.log(form)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form) return
    axios.post('/api/register', form)
      .then(() => {
        if (error.errors === '') {
          props.history.push('/login')
        }
      })
      .catch((err) => setError({ errors: err.response.data }))
  }

  return (
    <section className="section">
      <div className="container">
        <div className="title">Register</div>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <label htmlFor="" className="label">
              Username
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type='text'
                name='username'
                className='input'
              />
            </div>
            {error.errors.username && !form.username && <small className="help is-danger">
              {error.errors.username}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Email
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type='text'
                name='email'
                className='input'
              />
            </div>
            {error.errors.email && !form.email && <small className="help is-danger">
              {error.errors.email}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Upload Profile Picture
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type='text'
                name='profilePicture'
                className='input'
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type='text'
                name='password'
                className='input'
              />
            </div>
            {error.errors.password && !form.password && <small className="help is-danger">
              {error.errors.password}
            </small>}
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Password Confirmation
            </label>
            <div className="control">
              <input
                onChange={e => handleInput(e)}
                type='text'
                name='passwordConfirmation'
                className='input'
              />
            </div>
            {error.errors && form.passwordConfirmation !== form.password && <small className="help is-danger">
              {error.errors.passwordConfirmation}
            </small>}
          </div>
          <button className='button is-success'>
            Complete Registration
          </button>
        </form>
      </div>
    </section>
  )

}

export default Register