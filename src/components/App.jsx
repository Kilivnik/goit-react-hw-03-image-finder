import React, { Component } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from '../components/App.module.css';

import Searchbar from '../../src/components/Searchbar/Searchbar';
import ImageGallery from '../../src/components/ImageGallery/ImageGallery';
import Button from '../../src/components/Button/Button';
import Modal from '../components/Modal/Modal';
import Loader from './Loader/Loader';

import { fetchImages } from '../services/api';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    hits: [],
    totalHits: 0,
    isLoading: false,
    error: null,
    modalId: '',
    isShowModal: false,
    largeImageURL: '',
    imageRequest: '',
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, hits: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, searchQuery, hits } = this.state;

    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.getImages(searchQuery, page);

      if (prevState.hits.length !== hits.length) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
  }

  getImages = async (searchQuery, page) => {
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages(searchQuery, page);
      this.setState(prev => ({
        hits: [...prev.hits, ...data.hits],
        totalHits: data.totalHits,
      }));
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  toggleModal = largeImageURL => {
    this.setState(prevState => ({
      isShowModal: !prevState.isShowModal,
      largeImageURL,
    }));
  };

  changePage = () => {
    this.setState(() => ({ page: this.state.page + 1 }));
  };

  render() {
    const { hits, isLoading, totalHits, isShowModal } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery hits={hits} openModal={this.toggleModal} />
        {this.state.isLoading && <Loader />}
        {Boolean(hits.length) && !isLoading && hits.length !== totalHits && (
          <Button changePage={this.changePage} />
        )}
        {isShowModal && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            alt={this.state.imageRequest}
            closeModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
