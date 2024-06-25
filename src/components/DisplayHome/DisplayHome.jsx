import React from 'react'
import { albumsData, songsData } from '../../assets/assets'
import AlbumItem from '../AlbumItem/AlbumItem'
import SongItem from '../SongItem/SongItem'
import DisplayNav from '../DisplayNav/DisplayNav'

const DisplayHome = () => {

    return (
        <>
            <DisplayNav />
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
                <div className='flex overflow-auto'>
                    {albumsData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))}
                </div>
            </div>
            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
                <div className='flex overflow-auto'>
                    {songsData.map((item, index) => (<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome