import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import './styles.css';

export class App extends React.Component {
  state = {
    searchGallery: '',
    page: 1,
    per_page: 12,
    onModal: false,
    onBtnLoadMore: false,
    urlLargeImage: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') this.setState({ onModal: false });
    });
  }

  handleFormSubmit = searchGallery => {
    this.setState({
      searchGallery,
      onBtnLoadMore: false,
    });
  };

  handleModal = urlLargeImg => {
    this.setState({
      onModal: true,
      urlLargeImage: urlLargeImg,
    });
    console.log('Открываю модальное окно', urlLargeImg);
  };

  isCloseModal = () => {
    this.setState({ onModal: false });
  };

  handleBtnLoadMore = btnLM => {
    this.setState({ onBtnLoadMore: btnLM });
  };
  render() {
    return (
      <div>
        <Searchbar onSearchGallery={this.handleFormSubmit} />
        <ImageGallery
          galleryName={this.state.searchGallery}
          page={this.state.page}
          per_page={this.state.per_page}
          onModal={this.handleModal}
          onBtnLoadMore={this.handleBtnLoadMore}
          urlLargeImage={this.handleModal}
        />
        {this.state.onModal && (
          <Modal
            urlModal={this.state.urlLargeImage}
            closeModal={this.isCloseModal}
          />
        )}
        {this.state.onBtnLoadMore && <Button />}
      </div>
    );
  }
}
