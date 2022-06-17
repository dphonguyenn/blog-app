import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import useStyles from './styles.js';
import { Modal, TextareaAutosize, TextField, Button } from '@material-ui/core';
import IconClose from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { modalState } from '../../redux/selectors';
import { hideModal, createPost } from '../../redux/actions/index.js';

export default function CreatePostModal() {
    const { isShowed } = useSelector(modalState);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [dataPost, setDataPost] = useState({
        title: '',
        content: '',
        attachment: ''
    });

    const onClose = React.useCallback(() => {
        dispatch(hideModal());
    }, [dispatch]);

    const onSubmitNewPost = React.useCallback(() => {
        dispatch(createPost.createPostRequest(dataPost));
        setTimeout(() => {
            setDataPost({ title: '', content: '', attachment: '' });
            onClose();
        }, 2000);
    }, [dispatch, dataPost, onClose]);

    const body = (
        <div className={classes.paper} id="simple-modal-title">
            <div>
                <Button onClick={onClose} className={classes.btnClose}>
                    <IconClose/>
                </Button>
            </div>
            <h2>Create New Post</h2>
            <form noValidate autoComplete="off" className={classes.form}>
                <TextField
                    className={classes.title}
                    required
                    label='Title'
                    value={dataPost.title}
                    onChange={(e) => setDataPost({
                        ...dataPost,
                        title: e.target.value
                    })}
                />
                <TextareaAutosize
                    className={classes.textarea}
                    minRows={10}
                    maxRows={15}
                    placeholder="Content..."
                    value={dataPost.content}
                    onChange={(e) => setDataPost({
                        ...dataPost,
                        content: e.target.value
                    })}
                />
                <FileBase64
                    access='image/*'
                    multiple={false}
                    type='file'
                    value={dataPost.attachment}
                    onDone={(base64) => setDataPost({
                        ...dataPost,
                        attachment: base64
                    })}
                />
                <div className={classes.footer}>
                    <Button variant='contained' color='primary' component='span' fullWidth onClick={onSubmitNewPost} >
                        Create
                    </Button>
                </div>
            </form>
        </div>
    );

    return (
        <Modal open={isShowed} onClose={onClose}>
          {body}
    </Modal>
  )
}
