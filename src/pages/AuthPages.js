import React, { useState } from 'react'
import Button from '../components/Button';

function AuthPages({ setIsAuthorizate }) {
    const [form, setForm] = useState({
        login: '',
        password: ''
    });

    const changeHandler = evt => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    const loginHandler = () => {
        fetch('http://localhost:3000/login')
            .then(res => res.json())
            .then(json => {
                if (json[0].login === form.name) {
                    if (json[0].password === form.password) {
                        setIsAuthorizate(true)
                    }
                }
            })
    }

    document.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter') {
            loginHandler()
        }
    })

    return (
        <div>
            <div className="auth-popap">
                <div className="popap-header">
                    <h1>Авторизуйтесь</h1>
                </div>
                <div className="popap-body">
                    <label htmlFor="mail">Логин</label>
                    <input
                        type="mail"
                        name="login"
                        id="mail"
                        onChange={changeHandler}>
                    </input>
                    <label htmlFor="password">Пароль</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={changeHandler}>
                    </input>
                </div>
                <div className="popap-footer">
                    <Button onClick={() => {
                        loginHandler();
                    }}>Войти</Button>
                </div>
            </div>
        </div>
    )
}

export default AuthPages
