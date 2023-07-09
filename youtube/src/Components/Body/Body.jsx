import React from 'react';

export const HomePage = () => {
    return (
        <React.Fragment>
            <div id='homepage' className='body-wrapper'>
                <div id='homepage-side-nav' className='menu-list'>
                    <a href="#">
                    <div 
                    id='homepage-side-nav-home'
                    onClick={(event)=>{
                        const id = event.target.id;
                        const ele = document.getElementById(id);
                        
                    }} 
                    className='menu-tile' 
                    style={{
                        marginTop: '20px'
                    }}>
                        

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>home</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>Home</p>
                        </div>
                        
                    </div>
                    </a>

                    <div className='menu-tile'>

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>subscriptions</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>Subscriptions</p>
                        </div>
                        
                    </div>

                    <div className='menu-tile'>

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>play_circle</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>Music</p>
                        </div>
                        
                    </div>

                    <div className='menu-tile'>

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>video_library</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>Library</p>
                        </div>
                        
                    </div>

                    <div className='menu-tile'>

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>download</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>Downloads</p>
                        </div>
                        
                    </div>

                    <div className='menu-tile'>

                        <div className='menu-tile-icon'>
                            <span className='material-icons-outlined'>history</span>
                        </div>
                        
                        <div className='menu-tile-title'>
                            <p>History</p>
                        </div>
                        
                    </div>
                </div>

                <div id='homepage-main-content' className='videos-list'>
                    {/* List of videos */}
                    List of videos here
                </div>
            </div>
        </React.Fragment>
    )
}