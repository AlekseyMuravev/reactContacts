import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Contact from '../components/Contact'
import SearchPanel from '../components/SearchPanel'

function ContactsPages() {
    const [data, setData] = useState([
        {
            id: 12131,
            userName: 'Павел',
            userMail: 'mail@mail.ru',
            userPhone: '89201887977'
        },
        {
            id: 123123,
            userName: 'Николай',
            userMail: 'a@mail.ru',
            userPhone: '8920188871'
        },
        {
            id: 1231,
            userName: 'Николай',
            userMail: 'a@mail.ru',
            userPhone: '8920188871'
        }
    ])

    const [dataForMap, setDataForMap] = useState(data)

    const [form, setForm] = useState({
        id: '',
        userName: '',
        userMail: '',
        userPhone: ''
    })

    const [searchField, setSearchField] = useState('');

    const changeHandler = (evt) => {
        setForm({
            ...form,
            [evt.target.name]: evt.target.value
        });
    }

    const addContact = evt => {
        if (evt.target.classList.contains('button-add')) {
            if (form.userName !== '' && form.userMail !== '' && form.userPhone !== '') {
                setData([
                    ...data,
                    {
                        ...form,
                        id: Math.floor(Math.random() * (1 - 12312) + 12312),
                    }
                ]);
                setForm({
                    id: '',
                    userName: '',
                    userMail: '',
                    userPhone: ''
                });
            }
        }
    }

    const editContact = (...refs) => {
        refs.forEach(ref => {
            ref.removeAttribute('disabled');
        });
    }

    const saveContact = (userId, form, setEditState, ...refs) => {
        if (form.name !== '' && form.mail !== '' && form.phone !== '') {
            setEditState(false)
            refs.forEach(ref => {
                ref.setAttribute('disabled', 'disabled');
            });
            const getIndex = data.findIndex(item => {
                return item.id === userId
            })
            data.splice(getIndex, 1, {
                userName: form.name,
                userMail: form.mail,
                userPhone: form.phone
            });
            setData([
                ...data
            ]);
        }
    }

    const delContact = (userId) => {
        const getIndex = data.findIndex(item => {
            return item.id === userId
        })
        data.splice(getIndex, 1);
        setData([
            ...data,
        ]);
    }

    useEffect(() => {
        setDataForMap(data);
        console.log(data);
    }, [data])

    useEffect(() => {
        if (searchField !== '') {
            const newData = data.filter(item => {
                return item.userName
                    .toLocaleLowerCase()
                    .includes(searchField.toLocaleLowerCase());
            })
            setDataForMap(newData);
        } else {
            setDataForMap(data)
        }
    }, [searchField, data])

    return (
        <div className="contact-page">
            <div className="wrapper">
                <h1>Список контактов</h1>
                <SearchPanel setSearchField={setSearchField} />
                <div className="contact-form contact-form--new">
                    <div className="contact-form-item">
                        <label htmlFor="name">Имя</label>
                        <input
                            type="text"
                            name="userName"
                            id="name"
                            onChange={changeHandler}
                            placeholder="Введите имя"
                            value={form.userName}
                            required>
                        </input>
                    </div>
                    <div className="contact-form-item">
                        <label htmlFor="mail">E-mail</label>
                        <input
                            type="mail"
                            name="userMail"
                            id="mail"
                            onChange={changeHandler}
                            placeholder="Введите e-mail"
                            value={form.userMail}
                            required>
                        </input>
                    </div>
                    <div className="contact-form-item">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="number"
                            name="userPhone"
                            id="phone"
                            onChange={changeHandler}
                            placeholder="Введите телефон"
                            value={form.userPhone}
                            required>
                        </input>
                    </div>
                    <div className="contact-form-actions">
                        <Button className="button button-add" onClick={addContact} title="Добавить"> </Button>
                    </div>
                </div>
                {dataForMap.map((item, index) => {
                    return <Contact
                        key={`${item.userName}_${index}`}
                        {...item}
                        index={index}
                        editContact={editContact}
                        delContact={delContact}
                        saveContact={saveContact} />
                }
                )}
            </div>
        </div>
    )
}

export default ContactsPages
