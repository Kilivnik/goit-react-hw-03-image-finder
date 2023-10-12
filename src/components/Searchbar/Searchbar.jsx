import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      alert('Enter search query');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <FcSearch className={s.SearchFormButtonLabel} />
          </button>

          <input
            className={s.SearchFormInput}
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
