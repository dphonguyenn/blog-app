import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@material-ui/core';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles.js';
import { actionsListState } from '../../../redux/selectors';
import { updatePost, actionsList, deletePost } from '../../../redux/actions'; 


export default function Post({ post }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { idPost } = useSelector(actionsListState);

    const onUpdateLikeCount = React.useCallback(() => {
        dispatch(updatePost.updatePostRequest({
            ...post,
            likeCount: post.likeCount + 1
        }));
    }, [dispatch, post]);                                                     

    const showActionsList = React.useCallback(() => {
        dispatch(actionsList.show({
            id: post._id,
        }));
    }, [dispatch, post]);

    const hideActionsList = React.useCallback(() => {
        dispatch(actionsList.hide({
            id: ''
        }));
    }, [dispatch]);

    const onDeletePost = React.useCallback(() => {
        dispatch(deletePost.deletePostRequest({
            id: post._id
        }))
    }, [dispatch, post]);

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.card_header_post}
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM   MMM DD, YYYY')}
                action={
                    <IconButton onClick={showActionsList}>
                        <MoreVertIcon/>
                    </IconButton>
                }>
            </CardHeader>
            <CardActions className={clsx(classes.card_more_actions, idPost === post._id ? '' : classes.hide)} disableSpacing onMouseDown={showActionsList} onMouseLeave={hideActionsList}>
                {/* <Button size="small">Delete</Button>             
                <Button size="small">Update</Button> */}
                <List component="nav" className={classes.list_actions_card} aria-label="mailbox folders">
                    <ListItem button onClick={ onDeletePost } className={classes.btnActions}>
                        <ListItemText primary="Delete" />
                    </ListItem>
                    <Divider/>
                    <ListItem button divider className={classes.btnActions}>
                        <ListItemText primary="Update" />
                    </ListItem>
                </List>
            </CardActions>
            <CardMedia 
                component='img'
                image={post.attachment}
                title="Title"
                className={classes.media}
            /> 
            <CardContent>
                <Typography
                    variant='h5'
                    color='textPrimary'
                >
                    {post.title}
                </Typography>
                <Typography
                    variant='body2'
                    component='p'
                    color='textSecondary'
                >
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={onUpdateLikeCount}>
                    <FavoriteIcon />
                    <Typography
                        component='span'>
                        {`${post.likeCount} likes`}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}
