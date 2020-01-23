import React, { useState, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';

import firebase from "./../../utils/firebase.js";
import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";
import useLang from "./../useLang/useLang.component";

import "./blog-edit-post.styles.scss";

const BlogEditPost = ({lang, lang_tag, match}) => {
    lang = lang[lang_tag];
    const [version, setVersion] = useState({
        v: "en",
        styles: {
            pl: {
                display: "none"
            },
            en: {
            }
        }
    });
    const [postData, setPostData] = useState();
    const tinyMCE = {
        key: "s9uh6tsfy1nink2o8nzmcjgaiiu70rfida3w3nzdxr4bwa9m",
        toolbar: `undo redo | formatselect | bold italic backcolor | 
        alignleft aligncenter alignright alignjustify | 
        bullist numlist outdent indent | removeformat | help |
        image media`,
        plugins: [
            'advlist autolink lists link image imagetools charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
        ]
    }

    const handleChange = (e) => {
        if (e.target.getContent && typeof e.target.getContent === "function") {
            setPostData({
                ...postData,
                [e.target.id]: e.target.getContent()
            });
        } else {
                setPostData({
                    ...postData,
                    [e.target.name]: e.target.value
                });
        }
    }

    const loadData = async () => {
        if (!postData) {
            const db = firebase.firestore();
            const postRef = await db.collection("blog_posts").doc(match.params.id).get();
            setPostData(postRef.data());
        }
    };

    const switchVersion = () => {
        let newState;
        if (version.v === "pl") {
            newState = {
                ...version,
                v: "en",
                styles: {
                    pl: {
                        display: "none"
                    },
                    en: {
                    } 
                }
            }
        } else {
            newState = {
                ...version,
                v: "pl",
                styles: {
                    pl: {
                    },
                    en: {
                        display: "none"
                    } 
                }
            }
        }
        setVersion(newState);
    }

    const handleSubmit = () => {
        const db = firebase.firestore();
        let dbItem = db.collection("blog_posts").doc(match.params.id);
        dbItem.update({
            ...postData
        });
    }

    useEffect(() => {
        loadData()
    }, ["*"]);

    return(
        <div className="blog-edit-post">
            <div onClick={switchVersion} className="blog-edit-post__version-switch">{version.v}</div>
            { postData && tinyMCE ?
                <div className="section">
                    <h3 className="blog-edit-post__title">{lang.title}</h3>
                        <div style={version.styles.pl}>
                        <FormInput
                            type="text"
                            name="title_pl"
                            value={postData.title_pl}
                            handleChange={handleChange}
                            placeholder={lang.title_placeholder}
                            label={lang.title_label}
                            extraClasses="nmleft clr"
                        />
                        <FormInput
                            type="text"
                            name="url_pl"
                            value={postData.url_pl}
                            handleChange={handleChange}
                            placeholder={lang.url_placeholder}
                            label={lang.url_label}
                            extraClasses="nmleft clr"
                        />
                        <FormInput
                            type="textarea"
                            name="excerpt_pl"
                            value={postData.excerpt_pl}
                            handleChange={handleChange}
                            placeholder={lang.excerpt_placeholder}
                            label={lang.excerpt_label}
                            extraClasses="nmleft"
                        />
                        <Editor
                            apiKey={tinyMCE.key}
                            initialValue={postData.content_pl}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: tinyMCE.plugins,
                                toolbar: tinyMCE.toolbar,
                                image_advtab: true,
                                imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions"
                            }} 
                            onChange={handleChange}
                            id="content_pl"
                        />
                        </div>
                        <div style={version.styles.en}>
                        <FormInput
                            type="text"
                            name="title_en"
                            value={postData.title_en}
                            handleChange={handleChange}
                            placeholder={lang.title_placeholder}
                            label={lang.title_label}
                            extraClasses="nmleft clr"
                        />
                        <FormInput
                            type="text"
                            name="url_en"
                            value={postData.url_en}
                            handleChange={handleChange}
                            placeholder={lang.url_placeholder}
                            label={lang.url_label}
                            extraClasses="nmleft clr"
                        />
                        <FormInput
                            type="textarea"
                            name="excerpt_en"
                            value={postData.excerpt_en}
                            handleChange={handleChange}
                            placeholder={lang.excerpt_placeholder}
                            label={lang.excerpt_label}
                            extraClasses="nmleft"
                        />
                        <Editor
                            apiKey={tinyMCE.key}
                            initialValue={postData.content_en}
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: tinyMCE.plugins,
                                toolbar: tinyMCE.toolbar,
                                image_advtab: true,
                                imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions"
                            }}
                            onChange={handleChange}
                            id="content_en"
                        />
                        </div>
                    <Button onClick={handleSubmit} style={{marginTop: "20px"}} text="Zapisz" modifier="pink" />
                </div>
            : "" }
        </div>
    );
}

export default useLang(BlogEditPost, "blog-edit-post");