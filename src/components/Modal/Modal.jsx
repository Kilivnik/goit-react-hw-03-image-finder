import { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = event => {
    (event.key === 'Escape' || event.target === event.currentTarget) &&
      this.props.closeModal();
  };

  render() {
    const { modalId, hits } = this.props;
    return (
      <div className={s.Overlay} onClick={this.closeModal}>
        <div className={s.Modal}>
          {hits.map(hit =>
            modalId === `${hit.id}` ? (
              <img
                src={hit.largeImageURL}
                alt={hit.tags}
                key={hit.id}
                className={s.image}
              />
            ) : null
          )}
        </div>
      </div>
    );
  }
}
