import React, { useState, memo, useRef } from 'react'
import Button from './Button';

const Contact = memo(function Contact({ id = null, userName = '', userMail = '', userPhone = '', delContact, editContact, saveContact }) {
    const [editState, setEditState] = useState(false);
    const nameRef = useRef();
    const phoneRef = useRef();
    const mailRef = useRef();
    const [form, setForm] = useState({
        name: userName,
        mail: userMail,
        phone: userPhone
    })

    const changeHandler = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div className="contact-form">
            <div className="contact-form-item">
                <input
                    ref={nameRef}
                    type="name"
                    name="name"
                    onChange={changeHandler}
                    value={form.name}
                    placeholder="Введите Имя"
                    required
                    disabled>
                </input>
            </div>
            <div className="contact-form-item">
                <input
                    ref={mailRef}
                    type="mail"
                    name="mail"
                    onChange={changeHandler}
                    value={form.mail}
                    placeholder="Введите e-mail"
                    required
                    disabled>
                </input>
            </div>
            <div className="contact-form-item">
                <input
                    ref={phoneRef}
                    type="phone"
                    name="phone"
                    onChange={changeHandler}
                    value={form.phone}
                    placeholder="Введите телефон"
                    required
                    disabled>
                </input>
            </div>
            <div className="contact-form-actions">
                {!editState ? <Button className="button button-edit" onClick={() => {
                    editContact(nameRef.current, phoneRef.current, mailRef.current);
                    setEditState(true);
                }} title="Редактировать"></Button>
                    : <Button className="button button-save" onClick={() => {
                        saveContact(id, form, setEditState, nameRef.current, phoneRef.current, mailRef.current);
                    }} title="Сохранить"></Button>}
                <Button className="button button-delete" onClick={() => { delContact(id) }} title="Удалить"></Button>
            </div>
        </div>
    )
})

export default Contact
