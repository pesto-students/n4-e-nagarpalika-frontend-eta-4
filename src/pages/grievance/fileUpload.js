import React, {useState} from "react";

import {A, Img, CloseButton, Form, Label, Input, Div} from "./styles"
import {storage} from "../../modules/auth/api/firebase";


export default function FileUpload() {
    const [loading, setLoading] = useState(false);
    const [urls, setURL] = useState([]);

    function deleteUrl(e, urlIndex) {
        e.preventDefault();
        console.log("clicked")
        console.log(urls)
        if (urlIndex > -1) {
            urls.splice(urlIndex, 1);
        }
    }

    async function handleUpload(e) {
        setLoading(true)
        try {
            const ref = storage.ref(`/images/${e.target.files[0].name}`);
            console.log("upload started")
            const uploadTask = ref.put(e.target.files[0]);
            uploadTask.on("state_changed", console.log, console.error, () => {
                ref
                    .getDownloadURL()
                    .then((picUrl) => {
                        setURL([...urls, picUrl]);
                    });
                console.log("uploaded");
                setLoading(false)
            });
        } catch (err) {
            console.log(e.toString());
        }

    }

    return (
        <Form>
            {urls.map((url, index) => (
                /* eslint-disable-next-line */
                <Div key={index}>
                    <CloseButton onClick={(e) => {
                        deleteUrl(e, index)
                    }}>
                            <span>
                                &times;
                            </span>
                    </CloseButton>
                    <Img src={url} alt=""/>
                </Div>
            ))}
            {/* eslint-disable-next-line */}
            <Label>
                {/* eslint-disable-next-line */}
                <Input disabled={loading} type="file" onChange={handleUpload}/>
                {/* eslint-disable-next-line */}
                <A>Upload</A>
            </Label>
        </Form>
    );
}