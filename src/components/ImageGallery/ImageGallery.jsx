import React from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

import { Gallery } from './ImageGallery.styled';

const URL = 'https://pixabay.com/api/?';
const API_KEY = '29969800-031613b21cddc77cf547ed849';

export class ImageGallery extends React.Component {
  state = {
    gallery: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.galleryName !== this.props.galleryName) {
      this.setState({
        loading: true,
        gallery: [],
      });
      setTimeout(() => {
        fetch(
          `${URL}key=${API_KEY}&q=${this.props.galleryName}
        &image_type=photo&orientation=horizontal
        &per_page=${this.props.per_page}
        &page=${this.props.page}`
        )
          .then(responce => responce.json())
          .then(gallery => {
            this.setState({
              gallery: gallery.hits,
              totalHits: gallery.totalHits,
              error: false,
            });
          })
          .catch(error => this.setState({ error: true }))
          .finally(() => {
            this.setState({ loading: false });
            this.props.onBtnLoadMore('true');
          });
      }, 2000);
    }
  }

  handlModal = urlLargImage => {
    this.props.urlLargeImage(urlLargImage);
  };

  render() {
    const images = this.state.gallery;
    return (
      <div>
        <Gallery>
          {/* {this.state.error && Notiflix.Notify.failure('Gallery not found')} */}
          {this.state.loading && <Loader />}
          {images &&
            images.map((image, index) => {
              return (
                <div key={image.id}>
                  <ImageGalleryItem
                    imageReview={image.webformatURL}
                    largeImage={image.largeImageURL}
                    altImage={image.tags}
                    onModal={this.handlModal}
                  />
                </div>
              );
            })}
        </Gallery>
      </div>
    );
  }
}
