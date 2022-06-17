import React from 'react';
import { useDispatch } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { Container, Fab } from '@material-ui/core';
import Header from '../components/Header';
import PostList from '../components/PostList';
import useStyles from './styles.js';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';


export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModel = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
      <Container maxWidth="lg">
        <Header />
        <PostList />
        <CreatePostModal/>
        <Fab color='primary' className={classes.fab} onClick={openCreatePostModel}>
          <AddIcon />
        </Fab>
    </Container>
  )
}
