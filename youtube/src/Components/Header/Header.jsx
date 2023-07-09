import React from 'react';
import logo from './logo.png';

export const Header = () => {
    return (
        <React.Fragment>
            <header>
                <div className="header-wrapper">

                    <div className="header-logo-wrapper">
                        <img width="80px" height="40px" src={logo} alt="Logo" />
                        <div className='title'>
                            YouTube
                        </div>
                    </div>

                    <div id='center' className='header-search-wrapper'>
                        <div id='search-container' className='search-ytb'>
                            <form id='search-form' className='ytb-searchbox' action="/results">

                                <div id='container' className='ytb-searchbox'>
                                    <div id='search-input' className='ytb-search-input'>
                                        <input id="search" autoCapitalize='none' autoComplete='off'
                                            autoCorrect='off' name='search-query' type='text'
                                            tabIndex="0" spellCheck="false" placeholder='Search'
                                            aria-label='Search' role='combobox' aria-haspopup="false"
                                            aria-autocomplete='list' dir='ltr' className='ytd-searchbox'
                                            style={{
                                                outline: 'none'
                                            }}
                                        />
                                    </div>

                                </div>

                            </form>

                            <button id='search-icon-legacy' className='ytd-searchbox' aria-label='Search'>
                                <i className='fa-solid fa-magnifying-glass'></i>
                            </button>

                            
                        </div>
                    </div>

                    <div className='header-profile-wrapper'>
                        <div id='notification' className='header-notification-button'>
                            Notification
                        </div>
                        <div id='profile' className='header-profile-button'>
                            Satyam
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}