import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
    const [data, setData] = useState('');
    const url = 'http://localhost:7070/posts';
    const fetchApi = () => fetch(url);

    useEffect(() => {
        fetchApi()
            .then((result) => result.json())
            .then((result) => {
                setData(result);
            });
    }, []);

    const dataArr = Object.entries(data);

    return (
        <>
            <div className="fieldCreateTitle">
                <Link to="/posts/new"><div className="btnCreateTitle"><span>Создать пост</span></div></Link>
            </div>
            <ul className="list-post">
                {dataArr.map((item) => (
                    <li className="post" key={nanoid()}>
                        <Link to={`/posts/${item[1].id}`}>
                            <div className="name-user">Пользователь</div>
                            <div className="content">{item[1].content}</div>
                        </Link>
                        <hr />
                        <div className="like-comment">
                            <div className="like">Нравится</div>
                            <div className="comment">Комментировать</div>
                        </div>
                        <hr />
                        <div className="input">
                            <input type="text" className="input-field" placeholder="Напишите комментарий" disabled />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MainPage;